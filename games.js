'use strict';
(() => {
  const D=window.GRAMMAR_GAMES_DATA;
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const state={route:'',level:null,placed:{},selected:null,checks:0,result:null,undo:[]};
  let root,hooks,pending=null,ghost=null,scrollFrame=0,suppressClickUntil=0;
  const $=selector=>root.querySelector(selector);
  const progress=()=>hooks.getProgress();
  const completed=()=>Object.keys(progress().stars).length;
  const shape=type=>`<i class="block-shape shape-${D.types[type].shape}" style="--piece-color:${D.types[type].color}" aria-hidden="true"></i>`;
  const piece=type=>`${shape(type)}<span>${esc(D.types[type].label)}</span>`;
  const stars=n=>`<span class="game-stars" aria-label="${n}颗星">${[1,2,3].map(i=>`<i class="${i<=n?'is-earned':''}" aria-hidden="true">★</i>`).join('')}</span>`;
  function save(level,score){const p=progress();p.lastLevel=level;if(score)p.stars[level]=Math.max(p.stars[level]||0,score);hooks.saveProgress();}
  function setRoute(value=''){
    cancelDrag();
    const match=/^drag(?:\/(\d+))?$/.exec(value),id=Number(match?.[1]);
    state.route=match?(match[1]&&id>=1&&id<=D.levels.length?`drag/${id}`:'drag'):'';
    state.level=state.route.startsWith('drag/')?D.levels[id-1]:null;
    state.placed={};state.selected=null;state.checks=0;state.result=null;state.undo=[];
    if(state.level)save(state.level.id);
  }
  function go(route){setRoute(route);render();hooks.onRoute();$('#games-title, #drag-title')?.focus({preventScroll:true});}
  function render(){
    if(!root)return;
    cancelDrag();
    if(state.level){renderBoard();return;}
    root.dataset.gameView=state.route?'levels':'center';
    root.scrollTop=0;
    if(!state.route){
      root.innerHTML=`<div class="games-shell"><header class="games-heading"><h1 id="games-title" tabindex="-1">游戏</h1></header><div class="games-catalog">${D.games.map(game=>`<button class="game-tile" data-game-route="${game.id}"><div class="game-tile-art" aria-hidden="true">${['article','adjective','noun','verb','adverb'].map(shape).join('')}</div><div class="game-tile-text"><h2>${esc(game.title)}</h2><p>${esc(game.description)}</p><div class="game-tile-meta"><span>${game.levels} 关</span><span>已通过 ${completed()} / ${game.levels}</span><b aria-hidden="true">↗</b></div></div></button>`).join('')}</div></div>`;
      return;
    }
    const p=progress(),resume=D.levels.find(l=>!p.stars[l.id]&&l.id>=p.lastLevel)?.id||D.levels.find(l=>!p.stars[l.id])?.id||p.lastLevel;
    root.innerHTML=`<div class="games-shell"><header class="games-heading"><button class="game-back" data-game-route="">← 游戏</button><div class="game-heading-row"><div><h1 id="games-title" tabindex="-1">词性积木</h1><p>已通过 ${completed()} / 50 关</p></div><button class="primary-button" data-game-route="drag/${resume}">${completed()?'继续':'开始'}第 ${resume} 关 →</button></div></header><div class="game-stages">${D.stages.map(stage=>`<section class="game-stage"><header><h2>${esc(stage.title)}<small>${stage.range.join('–')} 关</small></h2><p>${esc(stage.description)}</p></header><div class="game-levels">${D.levels.filter(l=>l.stage===stage.id).map(l=>`<button class="level-button ${p.stars[l.id]?'is-complete':''}" data-game-route="drag/${l.id}" aria-label="第${l.id}关，${p.stars[l.id]?'已通过，'+p.stars[l.id]+'颗星':'未通过'}"><strong>${l.id}</strong>${stars(p.stars[l.id]||0)}</button>`).join('')}</div></section>`).join('')}</div></div>`;
  }
  function renderBoard(){
    const l=state.level,stage=D.stages[l.stage-1];root.dataset.gameView='play';
    root.innerHTML=`<div class="drag-play"><header class="drag-heading"><div class="drag-heading-row"><button class="game-back" data-game-route="drag">← 选关</button><span>第 ${l.id} / 50 关 · ${esc(stage.title)}</span><span class="game-current-stars">${stars(progress().stars[l.id]||0)}</span></div><h1 id="drag-title" tabindex="-1">词性积木</h1><p class="drag-translation">${esc(l.translation)}</p></header>
      <div class="drag-scroll" id="drag-scroll"><ol class="drag-words" aria-label="${esc(l.sentence)}">${l.words.map((word,i)=>`<li class="drag-word-card"><span class="drag-word" lang="en">${esc(word.text)}</span><button class="drag-slot" data-game-slot="${i}" aria-label="${esc(word.text)}：未放置词性积木"></button></li>`).join('')}</ol><div class="drag-feedback" id="drag-feedback" role="status" aria-live="polite"></div><details class="drag-tips"><summary>词性提示</summary><p>${esc(l.note)}</p><div class="drag-type-guide">${l.availableTypes.map(type=>`<div>${shape(type)}<p><strong>${esc(D.types[type].label)}</strong>${esc(D.types[type].description)}</p></div>`).join('')}</div></details><div id="drag-analysis"></div></div>
      <footer class="drag-dock"><p class="drag-instruction" id="drag-instruction">拖拽积木，或先点词性、再点空格；同类积木可重复使用。</p><div class="drag-tray" id="drag-tray" aria-label="可重复使用的词性积木">${l.availableTypes.map(type=>`<button class="drag-piece" data-game-type="${type}" aria-label="选择${esc(D.types[type].label)}积木" aria-pressed="false">${piece(type)}</button>`).join('')}</div><div class="drag-controls"><button class="text-button" data-game-action="undo" disabled>撤销</button><button class="text-button" data-game-action="reset">重置</button><button class="primary-button" id="drag-check" data-game-action="check">检查答案</button></div></footer></div>`;
    renderInteraction();
  }
  function renderInteraction(){
    if(!state.level||!$('#drag-scroll'))return;
    root.querySelectorAll('[data-game-slot]').forEach(slot=>{
      const i=Number(slot.dataset.gameSlot),type=state.placed[i];
      slot.innerHTML=type?piece(type):'<span class="slot-empty" aria-hidden="true">＋</span>';
      slot.dataset.placed=type||'';slot.classList.toggle('has-piece',!!type);
      slot.classList.toggle('is-wrong',!!state.result&&!state.result.missing.length&&state.result.wrong.includes(i));slot.classList.toggle('is-correct',!!state.result&&!state.result.missing.length&&state.result.correct.includes(i));
      slot.setAttribute('aria-label',`${state.level.words[i].text}：${type?D.types[type].label:'未放置词性积木'}`);
    });
    root.querySelectorAll('[data-game-type]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.gameType===state.selected)));
    $('[data-game-action="undo"]').disabled=!state.undo.length;
    $('#drag-instruction').textContent=state.selected?`已选择${D.types[state.selected].label} · 点击空格放置，再点相同积木可移除。`:'拖拽积木，或先点词性、再点空格；同类积木可重复使用。';
    const r=state.result;
    $('.game-current-stars').innerHTML=stars(progress().stars[state.level.id]||0);
    $('#drag-feedback').className='drag-feedback'+(r?.passed?' is-success':r?.wrong.length?' has-errors':'');
    $('#drag-feedback').innerHTML=!r?'':r.passed?`<strong>第 ${state.level.id} 关通过</strong>${stars(Math.max(1,4-state.checks))}<p>${state.level.id===50&&completed()===50?'50 关全部完成。':`已通过 ${completed()} / 50 关`}</p>`:r.missing.length?`还有 ${r.missing.length} 个空格，放好后再检查。`:`答对 ${r.correct.length} / ${state.level.words.length} 个 · 请调整标出的 ${r.wrong.length} 个积木。`;
    $('#drag-check').textContent=r?.passed?(state.level.id===50?'返回关卡':'下一关 →'):'检查答案';
    $('#drag-analysis').innerHTML=r?.passed?`<details class="drag-tips"><summary>逐词解析</summary><p>${esc(state.level.note)}</p><ol class="word-analysis">${state.level.words.map(w=>`<li><strong lang="en">${esc(w.text)}</strong><span>${esc(D.types[w.type].label)}</span><small>${esc(D.types[w.type].description)}</small></li>`).join('')}</ol></details>`:'';
  }
  function change(placements){state.undo.push({...state.placed});state.placed=placements;state.result=null;renderInteraction();}
  function place(index,type){const next={...state.placed};if(next[index]===type)delete next[index];else next[index]=type;change(next);}
  function check(){
    if(state.result?.passed){go(state.level.id===50?'drag':`drag/${state.level.id+1}`);return;}
    const result=D.grade(state.level,state.placed);state.result=result;
    if(!result.missing.length){state.checks++;if(result.passed)save(state.level.id,Math.max(1,4-state.checks));}
    renderInteraction();
    if(result.missing.length)$(`[data-game-slot="${result.missing[0]}"]`).focus({preventScroll:false});
    else if(result.wrong.length)$(`[data-game-slot="${result.wrong[0]}"]`).focus({preventScroll:false});
    else $('#drag-feedback').scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  function reset(){state.placed={};state.selected=null;state.checks=0;state.result=null;state.undo=[];renderInteraction();$('#drag-scroll').scrollTop=0;}
  function createGhost(type,x,y){ghost=document.createElement('div');ghost.className='drag-ghost';ghost.innerHTML=piece(type);document.body.appendChild(ghost);moveGhost(x,y);}
  function moveGhost(x,y){if(ghost){ghost.style.left=x+'px';ghost.style.top=y+'px';}}
  function slotAt(x,y){return document.elementFromPoint(x,y)?.closest('#games-page [data-game-slot]');}
  function hover(x,y){const slot=slotAt(x,y);root.querySelectorAll('.drag-slot.is-over').forEach(s=>s.classList.remove('is-over'));slot?.classList.add('is-over');}
  function autoScroll(){
    if(!pending?.active)return;
    const scroller=$('#drag-scroll'),r=scroller.getBoundingClientRect(),y=pending.y;
    if(y>r.top&&y<r.top+55)scroller.scrollTop-=Math.ceil((r.top+55-y)/4);
    if(y<r.bottom&&y>r.bottom-55)scroller.scrollTop+=Math.ceil((y-r.bottom+55)/4);
    hover(pending.x,pending.y);scrollFrame=requestAnimationFrame(autoScroll);
  }
  function cancelDrag(){
    cancelAnimationFrame(scrollFrame);scrollFrame=0;ghost?.remove();ghost=null;
    if(pending){pending.source.classList.remove('is-dragging');try{pending.source.releasePointerCapture(pending.id);}catch{}}
    pending=null;root?.querySelectorAll('.is-over').forEach(s=>s.classList.remove('is-over'));
  }
  function startDrag(e){
    if(!state.level||e.button!==0)return;
    const source=e.target.closest('[data-game-type], [data-game-slot]');if(!source)return;
    const type=source.dataset.gameType||source.dataset.placed;if(!type)return;
    pending={id:e.pointerId,source,type,origin:source.hasAttribute('data-game-slot')?Number(source.dataset.gameSlot):null,startX:e.clientX,startY:e.clientY,x:e.clientX,y:e.clientY,active:false};
    source.setPointerCapture(e.pointerId);
  }
  function moveDrag(e){
    if(!pending||pending.id!==e.pointerId)return;
    pending.x=e.clientX;pending.y=e.clientY;
    if(!pending.active&&Math.hypot(e.clientX-pending.startX,e.clientY-pending.startY)>6){pending.active=true;pending.source.classList.add('is-dragging');createGhost(pending.type,e.clientX,e.clientY);scrollFrame=requestAnimationFrame(autoScroll);}
    if(pending.active){if(e.cancelable)e.preventDefault();moveGhost(e.clientX,e.clientY);hover(e.clientX,e.clientY);}
  }
  function finishDrag(e){
    if(!pending||pending.id!==e.pointerId)return;
    const drag=pending;
    if(drag.active){
      suppressClickUntil=Date.now()+300;
      const slot=slotAt(e.clientX,e.clientY),inTray=document.elementFromPoint(e.clientX,e.clientY)?.closest('#drag-tray');
      if(slot){const index=Number(slot.dataset.gameSlot);if(index!==drag.origin){const next={...state.placed};if(drag.origin!==null)delete next[drag.origin];next[index]=drag.type;change(next);}}
      else if(inTray&&drag.origin!==null){const next={...state.placed};delete next[drag.origin];change(next);}
    }
    cancelDrag();
  }
  function init(options){
    hooks=options;root=options.root;
    root.addEventListener('click',e=>{
      if(Date.now()<suppressClickUntil&&e.target.closest('[data-game-slot], [data-game-type]')){e.preventDefault();return;}
      const route=e.target.closest('[data-game-route]');if(route){go(route.dataset.gameRoute);return;}
      const type=e.target.closest('[data-game-type]');if(type){state.selected=state.selected===type.dataset.gameType?null:type.dataset.gameType;renderInteraction();return;}
      const slot=e.target.closest('[data-game-slot]');if(slot){const index=Number(slot.dataset.gameSlot);if(state.selected)place(index,state.selected);else if(state.placed[index]){state.selected=state.placed[index];renderInteraction();}else{hooks.toast('先选择下方的词性积木，再点击空格。');}return;}
      const action=e.target.closest('[data-game-action]')?.dataset.gameAction;
      if(action==='check')check();
      if(action==='reset')reset();
      if(action==='undo'&&state.undo.length){state.placed=state.undo.pop();state.result=null;renderInteraction();}
    });
    root.addEventListener('keydown',e=>{const slot=e.target.closest('[data-game-slot]');if(slot&&['Delete','Backspace'].includes(e.key)){e.preventDefault();const next={...state.placed};delete next[slot.dataset.gameSlot];change(next);}});
    root.addEventListener('pointerdown',startDrag);
    root.addEventListener('pointermove',moveDrag);
    root.addEventListener('pointerup',finishDrag);
    root.addEventListener('pointercancel',cancelDrag);
    root.addEventListener('lostpointercapture',()=>{if(pending)cancelDrag();});
  }
  window.GrammarGames={init,setRoute,render,back:()=>go(state.level?'drag':''),pause:cancelDrag,get route(){return state.route;}};
})();
