/* Sentence-building and time-relation animations. Learning records remain owned by app.js. */
(() => {
  const entries=window.GRAMMAR_ANIMATION_DATA||[];
  const stories=new Map(entries.map(story=>[story.key,story]));
  const tones=new Set(['subject','verb','object','modifier','linker','time','neutral']);
  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let active=null,preferredSpeed=1;
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');

  function changedText(before,after){
    if(!before||before===after)return escape(after);
    let start=0,end=0;
    while(start<before.length&&start<after.length&&before[start]===after[start])start++;
    while(end<before.length-start&&end<after.length-start&&before[before.length-1-end]===after[after.length-1-end])end++;
    const middle=after.slice(start,after.length-end);
    if(!middle)return `<span class="ga-changed-text">${escape(after)}</span>`;
    return escape(after.slice(0,start))+`<span class="ga-changed-text">${escape(middle)}</span>`+escape(end?after.slice(-end):'');
  }

  function createPlayer(root,story,saved){
    let index=saved?.key===story.key?Math.max(0,Math.min(story.steps.length-1,saved.index)):0;
    let speed=saved?.speed||preferredSpeed,playing=false,timer=0,connectorFrame=0,motionUntil=0,destroyed=false;
    const tokens=new Map(),lanes=new Map(),events=new Map(),motions=new Set();
    const stageId='ga-stage-'+story.key.replace(/[^a-z0-9_-]/gi,'-');
    root.dataset.animationKey=story.key;root.dataset.playing='false';
    root.classList.toggle('ga-reduced-motion',motion.matches);
    root.setAttribute('role','group');root.setAttribute('aria-label',story.title+'，动画讲解');
    root.innerHTML=`<header class="ga-heading"><h3 class="ga-title">${escape(story.title)}</h3><span class="ga-counter"></span><button class="ga-expand" type="button" data-action="animation-expand" aria-label="全屏查看动画">全屏</button></header>
      <div class="ga-controls"><button type="button" data-ga-action="prev" aria-label="上一步" aria-controls="${stageId}">上一步</button><button type="button" data-ga-action="play" aria-controls="${stageId}">播放</button><button type="button" data-ga-action="next" aria-label="下一步" aria-controls="${stageId}">下一步</button><button type="button" data-ga-action="replay" aria-label="重新播放动画" aria-controls="${stageId}">重播</button><label class="ga-speed-label">速度 <select class="ga-speed" aria-label="动画播放速度"><option value="0.75">0.75×</option><option value="1">1×</option><option value="1.5">1.5×</option></select></label></div>
      <p class="ga-caption" aria-live="polite" aria-atomic="true"></p><p class="ga-translation"></p>
      <div class="ga-stage" id="${stageId}" tabindex="0" role="group" aria-label="动画示例，可用左右方向键切换步骤"><div class="ga-lanes"></div><div class="ga-timeline" hidden></div><svg class="ga-connectors" aria-hidden="true" focusable="false"></svg></div>
      <div class="ga-seek"><label class="ga-seek-label" for="${stageId}-seek">步骤</label><input id="${stageId}-seek" class="ga-scrubber" type="range" min="0" max="${story.steps.length-1}" step="1" value="${index}" aria-controls="${stageId}"><span class="ga-status" role="status"></span></div>
      <div class="ga-step-dots" aria-label="选择动画步骤">${story.steps.map((_,i)=>`<button type="button" data-ga-step="${i}" aria-label="查看第${i+1}步" aria-controls="${stageId}">${i+1}</button>`).join('')}</div>`;
    const $=selector=>root.querySelector(selector),stage=$('.ga-stage'),laneRoot=$('.ga-lanes'),timeline=$('.ga-timeline'),svg=$('.ga-connectors');
    $('.ga-speed').value=String(speed);
    const needsFullscreen=()=>root.closest('.card-body')?.clientHeight<240&&!document.body.classList.contains('card-fullscreen');
    function playLabel(){if(!playing){$('[data-ga-action="play"]').textContent=needsFullscreen()?'全屏播放':'播放';$('[data-ga-action="play"]').setAttribute('aria-label',needsFullscreen()?'全屏播放动画':'播放动画');}}

    function animate(element,frames,options={}){
      if(motion.matches||typeof element.animate!=='function')return;
      const animation=element.animate(frames,{duration:560,easing:'cubic-bezier(.22,.7,.25,1)',...options});
      motions.add(animation);animation.finished.catch(()=>{}).finally(()=>motions.delete(animation));
      return animation;
    }
    function cancelMotions(){for(const animation of motions)animation.cancel();motions.clear();stage.querySelectorAll('.ga-ghost').forEach(el=>el.remove());}
    function drawConnectors(){
      if(destroyed)return;
      const links=story.steps[index].connectors||[];
      if(!links.length){svg.replaceChildren();return;}
      const r=stage.getBoundingClientRect();if(!r.width||!r.height)return;
      svg.setAttribute('viewBox',`0 0 ${r.width} ${r.height}`);svg.setAttribute('width',r.width);svg.setAttribute('height',r.height);
      const paths=links.map(link=>{
        const from=tokens.get(link.from),to=tokens.get(link.to);if(!from||!to)return '';
        const a=from.getBoundingClientRect(),b=to.getBoundingClientRect();
        const x1=a.x+a.width/2-r.x,x2=b.x+b.width/2-r.x,y1=a.bottom-r.y+1,y2=b.bottom-r.y+1;
        const low=Math.min(r.height-16,Math.max(y1,y2)+18),labelX=Math.max(30,Math.min(r.width-30,(x1+x2)/2));
        return `<path class="ga-connector-line" d="M${x1},${y1} C${x1},${low} ${x2},${low} ${x2},${y2}" marker-end="url(#${stageId}-arrow)"/><text class="ga-connector-label" x="${labelX}" y="${low+10}">${escape(link.label)}</text>`;
      }).join('');
      svg.innerHTML=`<defs><marker id="${stageId}-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M1 1L6 4L1 7" fill="none" stroke="currentColor" stroke-width="1.3"/></marker></defs>${paths}`;
    }
    function scheduleConnectors(until=0){
      motionUntil=Math.max(motionUntil,until);
      if(connectorFrame)return;
      const tick=()=>{connectorFrame=0;drawConnectors();if(!destroyed&&performance.now()<motionUntil)connectorFrame=requestAnimationFrame(tick);};
      connectorFrame=requestAnimationFrame(tick);
    }
    function updateTimeline(data,transition){
      timeline.hidden=!data;
      if(!data){timeline.replaceChildren();events.clear();return;}
      if(!timeline.querySelector('.ga-track'))timeline.innerHTML='<div class="ga-timeline-label"></div><div class="ga-track"></div><span class="ga-axis-start">过去</span><span class="ga-axis-end">将来</span><span class="ga-now">现在</span><div class="ga-events"></div>';
      timeline.style.setProperty('--ga-event-count',String(data.events.length));
      timeline.querySelector('.ga-timeline-label').textContent=data.label||'动作与时间';
      const now=timeline.querySelector('.ga-now'),oldNow=parseFloat(now.style.left)||60;
      now.style.left=(data.now??60)+'%';
      if(transition&&oldNow!==(data.now??60))animate(now,[{left:oldNow+'%'},{left:(data.now??60)+'%'}]);
      const keep=new Set();
      data.events.forEach((event,i)=>{
        keep.add(event.id);let el=events.get(event.id),fresh=!el;
        if(!el){el=document.createElement('div');el.className='ga-event';el.dataset.eventId=event.id;el.innerHTML='<span class="ga-event-label"></span>';events.set(event.id,el);timeline.querySelector('.ga-events').append(el);}
        const oldLeft=el.style.left,oldWidth=el.style.width;
        el.dataset.kind=event.kind||'point';el.style.left=event.start+'%';el.style.width=(event.end==null?0:event.end-event.start)+'%';el.style.top=(34+i*28)+'px';
        const label=el.querySelector('.ga-event-label'),center=(event.start+(event.end??event.start))/2;
        label.textContent=event.label;label.style.left=center<18?'0':center>82?'auto':'50%';label.style.right=center>82?'0':'auto';label.style.transform=center<18||center>82?'none':'translateX(-50%)';
        if(transition){if(fresh)animate(el,[{opacity:0},{opacity:1}]);else animate(el,[{left:oldLeft,width:oldWidth},{left:el.style.left,width:el.style.width}]);}
      });
      for(const [id,el] of events)if(!keep.has(id)){el.remove();events.delete(id);}
    }
    function render(transition=false){
      cancelMotions();const step=story.steps[index],old=new Map(),oldText=new Map();
      if(transition)for(const [id,el] of tokens){old.set(id,el.getBoundingClientRect());oldText.set(id,el.querySelector('.ga-token-text').textContent);}
      const oldStage=stage.getBoundingClientRect(),keepTokens=new Set(),keepLanes=new Set();
      stage.classList.toggle('has-connectors',!!step.connectors?.length);
      for(const lane of step.lanes){
        keepLanes.add(lane.id);let el=lanes.get(lane.id);
        if(!el){el=document.createElement('div');el.className='ga-lane';el.dataset.laneId=lane.id;el.innerHTML='<div class="ga-lane-label"></div><div class="ga-tokens"></div>';lanes.set(lane.id,el);}
        el.querySelector('.ga-lane-label').textContent=lane.label||'';laneRoot.append(el);
        for(const token of lane.tokens){
          keepTokens.add(token.id);let word=tokens.get(token.id);
          if(!word){word=document.createElement('span');word.className='ga-token';word.dataset.tokenId=token.id;word.innerHTML='<strong class="ga-token-text" lang="en"></strong><small class="ga-token-role"></small>';tokens.set(token.id,word);}
          word.dataset.tone=tones.has(token.tone)?token.tone:'neutral';word.dataset.status=token.status||'';
          word.querySelector('.ga-token-text').innerHTML=changedText(oldText.get(token.id),token.text);
          word.querySelector('.ga-token-role').textContent=token.role||'';
          el.querySelector('.ga-tokens').append(word);
        }
      }
      for(const [id,el] of tokens)if(!keepTokens.has(id)){
        if(transition&&!motion.matches){
          const rect=old.get(id),ghost=el.cloneNode(true);ghost.classList.add('ga-ghost');ghost.removeAttribute('data-token-id');
          Object.assign(ghost.style,{left:(rect.x-oldStage.x)+'px',top:(rect.y-oldStage.y)+'px',width:rect.width+'px',height:rect.height+'px'});stage.append(ghost);
          const animation=animate(ghost,[{opacity:.65,transform:'translateY(0)'},{opacity:0,transform:'translateY(-10px)'}],{duration:350});
          if(animation)animation.finished.catch(()=>{}).finally(()=>ghost.remove());else ghost.remove();
        }
        el.remove();tokens.delete(id);
      }
      for(const [id,el] of lanes)if(!keepLanes.has(id)){el.remove();lanes.delete(id);}
      updateTimeline(step.timeline,transition);
      $('.ga-caption').textContent=step.caption;$('.ga-translation').textContent=step.translation||'';$('.ga-translation').hidden=!step.translation;
      $('.ga-counter').textContent=`${index+1} / ${story.steps.length}`;
      const scrubber=$('.ga-scrubber');scrubber.value=String(index);scrubber.setAttribute('aria-valuetext',`第${index+1}步，共${story.steps.length}步：${step.caption}`);
      $('[data-ga-action="prev"]').disabled=index===0;$('[data-ga-action="next"]').disabled=index===story.steps.length-1;
      root.querySelectorAll('[data-ga-step]').forEach(el=>{if(Number(el.dataset.gaStep)===index)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});
      if(transition&&!motion.matches){
        const next=new Map([...tokens].map(([id,el])=>[id,el.getBoundingClientRect()]));
        for(const [id,el] of tokens){
          const before=old.get(id),after=next.get(id);
          if(before){const dx=before.x-after.x,dy=before.y-after.y;if(Math.abs(dx)+Math.abs(dy)>1)animate(el,[{transform:`translate(${dx}px,${dy}px)`},{transform:'translate(0,0)'}]);else if(oldText.get(id)!==el.querySelector('.ga-token-text').textContent)animate(el,[{opacity:.35,transform:'scale(.94)'},{opacity:1,transform:'scale(1)'}]);}
          else animate(el,[{opacity:0,transform:'translateY(12px) scale(.96)'},{opacity:1,transform:'translateY(0) scale(1)'}]);
        }
        animate($('.ga-caption'),[{opacity:.35},{opacity:1}],{duration:240});
      }
      scheduleConnectors(transition&&!motion.matches?performance.now()+580:0);
    }
    function pause(message='已暂停'){
      clearTimeout(timer);timer=0;playing=false;for(const animation of motions){if(animation.effect?.target=== $('.ga-caption')){animation.cancel();motions.delete(animation);}else animation.pause();}cancelAnimationFrame(connectorFrame);connectorFrame=0;drawConnectors();root.dataset.playing='false';playLabel();$('.ga-status').textContent=message;
    }
    function arm(){
      clearTimeout(timer);
      const dwell=Math.max(4600,Math.min(10500,story.steps[index].caption.length*170+1300))/speed;
      timer=setTimeout(()=>{if(!playing||destroyed)return;if(index===story.steps.length-1){pause('播放完毕');return;}index++;render(true);arm();},dwell);
    }
    function alignScene(){
      const body=root.closest('.card-body');if(!body)return;
      const viewport=body.getBoundingClientRect(),caption=$('.ga-caption').getBoundingClientRect(),controls=$('.ga-controls').getBoundingClientRect();
      if(caption.top<viewport.top+controls.height+6||caption.top>viewport.bottom-60)body.scrollTop+=caption.top-viewport.top-controls.height-8;
    }
    function play(restart=false){
      if(needsFullscreen()){const expand=$('.ga-expand');if(expand){expand.click();requestAnimationFrame(()=>{if(!destroyed)play(restart);});return;}}
      alignScene();
      if(restart||index===story.steps.length-1){index=0;render(true);}
      for(const animation of motions)animation.play();scheduleConnectors(performance.now()+580);
      playing=true;root.dataset.playing='true';$('[data-ga-action="play"]').textContent='暂停';$('[data-ga-action="play"]').setAttribute('aria-label','暂停动画');$('.ga-status').textContent='播放中';arm();
    }
    function go(next){pause();alignScene();index=Math.max(0,Math.min(story.steps.length-1,next));render(true);}
    function click(event){
      const button=event.target.closest('button[data-ga-action],button[data-ga-step]');if(!button)return;event.preventDefault();event.stopPropagation();
      if(button.hasAttribute('data-ga-step')){go(Number(button.dataset.gaStep));return;}
      switch(button.dataset.gaAction){case'prev':go(index-1);break;case'next':go(index+1);break;case'replay':play(true);break;case'play':playing?pause():play();break;}
    }
    function input(event){if(event.target.matches('.ga-scrubber'))go(Number(event.target.value));}
    function change(event){if(event.target.matches('.ga-speed')){speed=Number(event.target.value);preferredSpeed=speed;if(playing)arm();}}
    function keydown(event){
      if(event.target.matches('input,select')||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      event.preventDefault();event.stopPropagation();go(event.key==='Home'?0:event.key==='End'?story.steps.length-1:index+(event.key==='ArrowLeft'?-1:1));
    }
    function motionChange(){root.classList.toggle('ga-reduced-motion',motion.matches);cancelMotions();scheduleConnectors();}
    root.addEventListener('click',click);root.addEventListener('input',input);root.addEventListener('change',change);root.addEventListener('keydown',keydown);motion.addEventListener('change',motionChange);
    let stageWidth=0;
    const resizeObserver=new ResizeObserver(changes=>{const change=changes.find(item=>item.target===stage);if(change){const width=change.contentRect.width;if(stageWidth&&Math.abs(width-stageWidth)>1)cancelMotions();stageWidth=width;}playLabel();scheduleConnectors();});resizeObserver.observe(stage);const cardBody=root.closest('.card-body');if(cardBody)resizeObserver.observe(cardBody);
    const intersectionObserver=new IntersectionObserver(changes=>{if(!changes[0]?.isIntersecting&&playing)pause();},{root:root.closest('.card-body'),threshold:0});intersectionObserver.observe(stage);
    render();playLabel();$('.ga-status').textContent='逐步查看或播放';
    return {pause,snapshot:()=>({key:story.key,index,speed}),destroy(){destroyed=true;clearTimeout(timer);cancelAnimationFrame(connectorFrame);cancelMotions();resizeObserver.disconnect();intersectionObserver.disconnect();motion.removeEventListener('change',motionChange);root.removeEventListener('click',click);root.removeEventListener('input',input);root.removeEventListener('change',change);root.removeEventListener('keydown',keydown);}};
  }
  function unmount(){active?.destroy();active=null;}
  window.GrammarAnimations={entries,forKey:key=>stories.get(key)||null,has:key=>stories.has(key),snapshot:()=>active?.snapshot()||null,pause:()=>active?.pause(),unmount,mount(root,key,saved){unmount();const story=stories.get(key);if(root&&story)active=createPlayer(root,story,saved);}};
  document.addEventListener('visibilitychange',()=>{if(document.hidden)active?.pause();});
  window.addEventListener('pagehide',unmount);
})();
