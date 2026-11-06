'use strict';
(() => {
  const A=window.ATLAS,G=window.GrammarGraph,P=window.GrammarProgress,Games=window.GrammarGames,Pane=window.GrammarPane;
  const lessons=window.GRAMMAR.lessons,byId=new Map(lessons.map(l=>[l.id,l]));
  const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ICONS={
    sidebar:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16m4-11h4m-4 6h4"/>',
    collapse:'<path d="m14 6-6 6 6 6"/>',
    maximize:'<path d="M4 9V4h5m6 0h5v5m0 6v5h-5M9 20H4v-5"/>',
    minimize:'<path d="M9 4v5H4m16 0h-5V4m0 16v-5h5M4 15h5v5"/>',
    game:'<path d="M8 7h8c3 0 5 7 4 10-.8 2-3-1-4-2H8c-1 1-3.2 4-4 2C3 14 5 7 8 7zM7 10v4m-2-2h4M16 11h.01M18 13h.01"/>',
    map:'<circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="1.5"/><circle cx="20" cy="5" r="1.5"/><circle cx="4" cy="19" r="1.5"/><circle cx="20" cy="19" r="1.5"/><path d="m6 6 4 4m4 0 4-4M6 18l4-4m4 0 4 4"/>',
    exercise:'<path d="M5 3h14v18H5zM8 8h8M8 12h4m-4 4h7"/>',
    stars:'<path d="m12 2 2.7 6.5 7 .6-5.3 4.6 1.7 6.8-6.1-3.6-6.1 3.6 1.7-6.8-5.3-4.6 7-.6z"/>',
    close:'<path d="m6 6 12 12M6 18 18 6"/>',back:'<path d="m14 5-7 7 7 7M7 12h13"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',bookmark:'<path d="M6 4h12v17l-6-4-6 4z"/>',note:'<path d="M13 4H5v16h14v-8M11 13l1-4 7-7 3 3-7 7z"/>',
    backup:'<path d="M5 7a8 8 0 1 1-1 9M3 3v5h5M12 7v5l3 2"/>',fit:'<path d="M4 8V4h4m8 0h4v4m0 8v4h-4M8 20H4v-4"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
    help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 4M12 17h.01"/>',check:'<path d="m5 12 4 4L19 6"/>',
    sound:'<path d="M11 4 6 8H3v8h3l5 4zM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',upload:'<path d="M12 16V4m-5 5 5-5 5 5M4 17v4h16v-4"/>'
  };
  const icon=name=>`<span data-icon="${name}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||ICONS.map}</svg></span>`;
  function hydrate(root=document){root.querySelectorAll('[data-icon]:empty').forEach(el=>{el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[el.dataset.icon]||ICONS.map}</svg>`;});}
  const STORAGE='grammar-atlas-progress-v1';
  let data=P.fresh(),storageWarned=false;
  try{data=P.normalize(JSON.parse(localStorage.getItem(STORAGE)||'null'));}catch{}
  const desktopNav=matchMedia('(min-width:1100px)'),SIDEBAR_STORAGE='grammar-atlas-sidebar';
  let desktopSidebarOpen=true;
  try{desktopSidebarOpen=localStorage.getItem(SIDEBAR_STORAGE)!=='closed';}catch{}
  const state={page:'map',context:'root',contextTrail:[],cardKey:null,cardTrail:[],activeAnchor:'definition',sidebarOpen:desktopNav.matches&&desktopSidebarOpen,universeFocus:null,modal:null,notebookTab:'bookmarks',session:null,choice:null,answer:'',feedback:null,practiceModule:'root',practicePoint:'all'};
  const graphs={map:{layout:null,camera:{x:0,y:0,scale:1}},progress:{layout:null,camera:{x:0,y:0,scale:1}}};
  let previousModalFocus=null,toastTimer=null,suppressGraphClickUntil=0;
  const learned=key=>P.learned(data,key);
  const moduleOf=key=>A.modules.find(m=>m.id===A.owner.get(key));
  const litCount=keys=>keys.filter(learned).length;
  const allKnowledgeKeys=A.knowledge.map(n=>n.key);
  function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2500);}
  function save(){try{localStorage.setItem(STORAGE,JSON.stringify(data));}catch{if(!storageWarned){storageWarned=true;toast('当前浏览器无法保存记录，可从侧边栏导出备份。');}}}
  function snapshot(){return {page:state.page,context:state.context,contextTrail:state.contextTrail,cardKey:state.cardKey,cardTrail:state.cardTrail,universeFocus:state.universeFocus,gameRoute:Games.route};}
  function currentHash(){
    if(state.page==='progress')return '#progress'+(state.universeFocus?'/'+state.universeFocus:'');
    if(state.page==='practice')return '#practice';
    if(state.page==='games')return '#games'+(Games.route?'/'+Games.route:'');
    const trail=state.cardKey?state.cardTrail:state.contextTrail;
    return '#map'+trail.map(k=>'/'+encodeURIComponent(A.get(k).id)).join('');
  }
  function recordHistory(replace=false){
    const view=snapshot(),entry={app:'grammar-atlas-v3',view};
    if(!replace&&JSON.stringify(history.state?.view)===JSON.stringify(view))return;
    history[replace?'replaceState':'pushState'](entry,'',currentHash());
  }
  function syncUI(){
    document.body.dataset.page=state.page;
    document.body.classList.toggle('card-open',!!state.cardKey);
    document.body.classList.toggle('modal-open',!!state.modal);
    document.body.classList.toggle('sidebar-open',state.sidebarOpen);
    $$('.page').forEach(el=>el.classList.toggle('active',el.id===state.page+'-page'));
    $('#knowledge-card').hidden=!state.cardKey;
    const modalCard=!!state.cardKey&&Pane.expanded,drawerOpen=state.sidebarOpen&&!desktopNav.matches;
    Pane.sync(!!state.cardKey,!!state.modal||drawerOpen);
    $('#card-scrim').hidden=!modalCard;
    $('#app').inert=!!state.modal||modalCard||drawerOpen;
    $('#knowledge-card').inert=!!state.modal||drawerOpen;
    const cardSizeButton=$('#card-toggle-size');
    if(cardSizeButton){cardSizeButton.setAttribute('aria-label',Pane.expanded?'返回图谱与讲解分屏':'全屏阅读知识讲解');cardSizeButton.setAttribute('aria-pressed',String(Pane.expanded));cardSizeButton.innerHTML=icon(Pane.expanded?'minimize':'maximize');}
    if(state.cardKey){$('#knowledge-card').setAttribute('role',modalCard?'dialog':'complementary');if(modalCard)$('#knowledge-card').setAttribute('aria-modal','true');else $('#knowledge-card').removeAttribute('aria-modal');}
    $('#sidebar').hidden=!state.sidebarOpen;
    $('#sidebar').inert=!!state.modal||modalCard;
    $('#sidebar').setAttribute('role',drawerOpen?'dialog':'complementary');
    if(drawerOpen)$('#sidebar').setAttribute('aria-modal','true');else $('#sidebar').removeAttribute('aria-modal');
    $('#sidebar-scrim').hidden=!drawerOpen;
    $('#sidebar-toggle').inert=!!state.modal||modalCard||drawerOpen;
    $('#sidebar-toggle').setAttribute('aria-expanded',String(state.sidebarOpen));
    $('#sidebar-collapse').setAttribute('aria-expanded',String(state.sidebarOpen));
    $$('#sidebar [data-route]').forEach(el=>{el.classList.toggle('active',el.dataset.route===state.page);el.setAttribute('aria-current',el.dataset.route===state.page?'page':'false');});
    $('#parent-action').hidden=state.page==='map'?state.context==='root':state.page==='progress'?!state.universeFocus:true;
  }
  function dismissNav(){if(!desktopNav.matches)state.sidebarOpen=false;}
  function navFocusTarget(){return state.sidebarOpen?$('#sidebar [data-route].active'):$('#sidebar-toggle');}
  function closeNav(force=false){if(force){setSidebar(false);return;}dismissNav();syncUI();}
  function setSidebar(open){
    state.sidebarOpen=open;
    if(desktopNav.matches){desktopSidebarOpen=open;try{localStorage.setItem(SIDEBAR_STORAGE,open?'open':'closed');}catch{}}
    syncUI();navFocusTarget()?.focus({preventScroll:true});
  }
  function toggleNav(){setSidebar(!state.sidebarOpen);}
  function clearCard(){state.cardKey=null;state.cardTrail=[];state.activeAnchor='definition';syncUI();}
  function closeCard(record=true){clearCard();renderActiveGraph(true);if(record)recordHistory();navFocusTarget()?.focus({preventScroll:true});}
  function showPage(page){state.page=page;syncUI();if(page!=='games')Games.pause();if(page==='practice')renderPractice();else if(page==='games')Games.render();else renderActiveGraph(true);}
  function navigate(page){
    if(!['map','practice','progress','games'].includes(page))page='map';
    clearCard();closeModal(false);dismissNav();state.session=null;state.choice=null;state.answer='';state.feedback=null;
    if(page==='map'){state.context='root';state.contextTrail=[];}
    if(page==='progress')state.universeFocus=null;
    if(page==='games')Games.setRoute('');
    showPage(page);recordHistory();
    if(!desktopNav.matches){const target=page==='map'?$('#mindmap'):page==='progress'?$('#constellation'):$('#'+page+'-page h1');if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}}
  }
  function goMap(key='root',trail){
    const n=key==='root'?null:A.get(key);if(key!=='root'&&!n)return;if(n?.kind==='lesson'&&!n.children.length){openCard(key,trail);return;}
    clearCard();closeModal(false);dismissNav();state.context=key;state.contextTrail=key==='root'?[]:(trail||A.path(key));
    showPage('map');recordHistory();
  }
  function goParent(){
    closeNav();if(state.page==='progress'){state.universeFocus=null;renderActiveGraph(true);recordHistory();return;}
    const trail=state.contextTrail.slice(0,-1);goMap(trail.at(-1)||'root',trail);
  }
  function openCard(key,trail){
    const n=A.get(key);if(!n)return;if(n.kind==='module'){goMap(key);return;}
    closeModal(false);dismissNav();state.cardKey=key;state.cardTrail=trail||A.path(key);state.activeAnchor='definition';
    if(state.page==='games'){Games.pause();state.page='map';}
    if(state.page==='map'){
      state.context=n.children.length?key:(state.cardTrail.at(-2)||'root');
      state.contextTrail=n.children.length?state.cardTrail:[...state.cardTrail.slice(0,-1)];
    }
    if(n.kind==='lesson')data.last=n.id;data.lastCard=key;save();
    syncUI();renderCard();renderActiveGraph(true);recordHistory();
    setTimeout(()=>$('#card-title')?.focus({preventScroll:true}),0);
  }
  function nextCard(key){
    const prior=state.cardTrail.indexOf(key),branch=A.route(state.cardKey,key);
    const trail=prior>=0?state.cardTrail.slice(0,prior+1):branch?[...state.cardTrail,...branch.slice(1)]:A.path(key);
    openCard(key,trail);
  }
  function renderCard(keepScroll=false){
    const key=state.cardKey,n=A.get(key);if(!n)return;
    const scroll=keepScroll?$('.card-body')?.scrollTop||0:0,storage=A.storageKey(key),l=n.lesson;
    const source=l?(l.source.includes('英语语法知识体系详解')?l.source:'参考《英语语法知识体系详解》；原课程索引：'+l.source):'';
    const children=n.children.map(k=>A.get(k)),examples=A.examplesFor(key);
    const next=children.find(c=>!learned(c.key)),scopePool=questionPool(key),inPractice=state.page==='practice'&&state.session&&!state.session.done;
    const crumbs=state.cardTrail.slice(0,-1).map((k,i)=>`<button data-card-ancestor="${esc(k)}" data-trail-index="${i}">${esc(A.get(k).title)}</button>`).join('<i>/</i>');
    const useBlocks=n.usage.map(s=>typeof s==='string'?`<div class="usage-block"><p>${esc(s)}</p></div>`:`<div class="usage-block"><h3>${esc(s.h)}</h3><p>${esc(s.t)}</p></div>`).join('');
    const errors=n.pitfalls.map(p=>typeof p==='string'?`<div class="pitfall"><p>${esc(p)}</p></div>`:`<div class="pitfall"><strong>${esc(p.title)}</strong>${p.wrong&&p.right?`<div class="correction-pair"><p class="correction-wrong"><span>原句</span><span lang="en">${esc(p.wrong)}</span></p><p class="correction-right"><span>改写</span><span lang="en">${esc(p.right)}</span></p></div>`:''}<p>${esc(p.text)}</p></div>`).join('');
    const table=n.referenceTable,reference=table?`<details class="grammar-reference"><summary>时态结构对照 · 16种教学组合</summary><div class="grammar-table-wrap" tabindex="0" role="region" aria-label="时态结构对照，可横向滚动"><table><caption>${esc(table.caption)}</caption><thead><tr>${table.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row=>`<tr>${row.map((cell,i)=>i?`<td lang="en">${esc(cell)}</td>`:`<th scope="row">${esc(cell)}</th>`).join('')}</tr>`).join('')}</tbody></table></div><p>${esc(table.note)}</p></details>`:'';
    const classes=n.classification.map(label=>n.classificationLinks?.[label]?`<button class="class-link" data-next-key="${esc(n.classificationLinks[label])}" aria-label="查看${esc(label)}详解">${esc(label)}${icon('arrow')}</button>`:`<span>${esc(label)}</span>`).join('');
    const nextMarkup=children.length?`<section class="card-section" id="card-next"><h2>下一级知识点</h2><div class="next-points">${children.map(c=>`<button class="next-point ${learned(c.key)?'is-lit':''}" data-next-key="${esc(c.key)}"><span>${esc(c.title)}</span>${icon(learned(c.key)?'check':'arrow')}</button>`).join('')}</div></section>`:'';
    const related=!children.length&&l?.related.length?`<section class="card-section"><h2>相关知识点</h2><div class="next-points">${l.related.map(id=>A.get('lesson:'+id)).filter(Boolean).slice(0,4).map(c=>`<button class="next-point" data-open-card="${esc(c.key)}">${esc(c.title)}${icon('arrow')}</button>`).join('')}</div></section>`:'';
    $('#knowledge-card').innerHTML=`<header class="card-header"><div class="card-topline"><div class="card-breadcrumb"><button data-action="card-root">总地图</button>${crumbs?'<i>/</i>'+crumbs:''}</div><div class="card-tools"><button class="icon-button" id="card-toggle-size" data-action="toggle-card-size" aria-label="全屏阅读知识讲解" aria-pressed="false">${icon('maximize')}</button><button class="icon-button" data-action="bookmark" data-active="${data.bookmarks.includes(storage)}" aria-label="${data.bookmarks.includes(storage)?'取消收藏':'收藏知识点'}">${icon('bookmark')}</button><button class="icon-button" data-action="note" aria-label="写学习笔记">${icon('note')}</button><button class="icon-button" data-action="close-card" aria-label="关闭知识卡片">${icon('close')}</button></div></div><h1 id="card-title" tabindex="-1">${esc(n.title)}</h1><p class="card-en">${esc(n.en)}</p></header>
      <nav class="card-anchors" aria-label="知识卡片内容">${[['definition','定义'],['classes','分类'],['examples','例句'],['usage','用法'],['pitfalls','易错点']].map(([id,title])=>`<button data-jump="${id}" class="${state.activeAnchor===id?'active':''}">${title}</button>`).join('')}</nav>
      <div class="card-body"><section class="card-section" id="card-definition"><h2>${n.id==='nouns'?'名词是什么':'定义'}</h2><p>${esc(n.definition)}</p>${l?`<div class="formula-box">${esc(l.formula)}</div>`:''}</section>
      <section class="card-section" id="card-classes"><h2>${n.id==='nouns'?'名词的分类':'分类与结构'}${n.classificationLinks?' <small class="class-hint">点击继续展开</small>':''}</h2><div class="class-tags">${classes}</div>${reference}</section>
      <section class="card-section" id="card-examples"><h2>例句</h2>${examples.map((e,i)=>`<article class="card-example"><button class="icon-button" data-speak="${i}" aria-label="朗读第${i+1}个例句">${icon('sound')}</button><strong>${esc(e.en)}</strong><p>${esc(e.zh)}</p><small>${esc(e.note)}</small></article>`).join('')}</section>
      <section class="card-section" id="card-usage"><h2>${n.id==='nouns'?'用法与常见考点':'用法'}</h2>${useBlocks}</section>
      <section class="card-section" id="card-pitfalls"><h2>易错点</h2>${errors}</section>${nextMarkup}${related}
      ${scopePool.length?`<section class="card-section" id="card-practice"><h2>小练习</h2><div class="mini-practice"><p>${esc(scopePool[0].q.prompt)}</p><button data-practice-scope="${esc(key)}" data-practice-count="3">练习「${esc(n.title)}」 ${icon('arrow')}</button></div></section>`:''}
      ${l?`<div class="source-note">${esc(source)}</div>`:''}</div>
      <footer class="card-footer"><button class="learn-button ${learned(key)?'is-lit':''}" data-action="mark-learned" aria-pressed="${learned(key)}">${icon('stars')}${learned(key)?'星星已点亮':'已学会，点亮星星'}</button>${inPractice?`<button class="primary-button" data-action="close-card">继续当前练习${icon('arrow')}</button>`:next?`<button class="primary-button" data-next-key="${esc(next.key)}">继续：${esc(next.title)}${icon('arrow')}</button>`:`<button class="primary-button" data-practice-scope="${esc(key)}" data-practice-count="3">进入练习${icon('arrow')}</button>`}</footer>`;
    syncUI();if(keepScroll)$('.card-body').scrollTop=scroll;
  }
  function markLearned(){
    if(!state.cardKey)return;
    const changed=P.learn(data,state.cardKey);save();renderCard(true);
    if(state.page==='progress')renderActiveGraph(false);
    if(changed)toast(`「${A.get(state.cardKey).title}」的星星已点亮`);
    $('[data-action="mark-learned"]')?.focus({preventScroll:true});
  }
  function graphNode(n){
    const center=n.type==='center';
    const branch=A.modules.find(m=>m.id===A.owner.get(n.key))?.color||'#8199ad';
    const title=center&&state.context==='root'?'English Grammar':n.title;
    const label=center?(state.context==='root'?'English Grammar 总地图':'返回上一级地图'):n.kind==='module'?`进入${n.title}子地图`:`查看${n.title}知识卡片`;
    return `<button class="atlas-node ${center?'root-node':n.kind+'-node'}" style="--branch:${branch}" data-map-node="${esc(center?'center':n.key)}" aria-label="${esc(label)}" title="${center&&state.context!=='root'?'返回上一级':''}">${!center?'<i class="node-dot" aria-hidden="true"></i>':''}<span><strong>${esc(title)}</strong>${n.en?`<small>${esc(n.en)}</small>`:''}</span></button>`;
  }
  function foreign(n,html){return `<foreignObject x="${n.x-n.w/2}" y="${n.y-n.h/2}" width="${n.w}" height="${n.h}"><div xmlns="http://www.w3.org/1999/xhtml" style="width:100%;height:100%">${html}</div></foreignObject>`;}
  function renderMap(reset=true){
    const el=$('#map-page'),w=el.clientWidth,h=el.clientHeight;if(!w||!h)return;
    const layout=G.mapLayout(A,state.context,w,h);graphs.map.layout=layout;
    $('#mindmap').setAttribute('aria-label',state.context==='root'?'English Grammar 总语法图谱':A.get(state.context).title+'子地图');
    $('#map-transform').innerHTML=layout.edges.map(e=>`<path class="map-edge" d="${G.edgePath(e)}" stroke="${e.color}"/>`).join('')+layout.nodes.map(n=>foreign(n,graphNode(n))).join('');
    if(reset)graphs.map.camera=G.fit(layout,w,h);
    updateTransform('map');
  }
  function renderUniverse(reset=true){
    const el=$('#progress-page'),w=el.clientWidth,h=el.clientHeight;if(!w||!h)return;
    const layout=G.universeLayout(A,w,h,state.universeFocus);graphs.progress.layout=layout;
    const count=litCount(allKnowledgeKeys);
    const edges=layout.edges.map(e=>`<path class="constellation-edge" d="${G.edgePath(e)}" stroke="${e.color}"/>`).join('');
    const starDots=layout.mode==='universe'?layout.stars.map(s=>`${learned(s.key)?`<circle class="star-halo" cx="${s.x}" cy="${s.y}" r="6"/>`:''}<circle class="star-point ${learned(s.key)?'is-lit':''}" data-knowledge="${esc(s.key)}" data-lit="${learned(s.key)}" cx="${s.x}" cy="${s.y}" r="${learned(s.key)?3.1:2.2}"><title>${esc(A.get(s.key).title)} · ${learned(s.key)?'已点亮':'待学习'}</title></circle>`).join(''):'';
    const nodes=layout.nodes.map(n=>{
      if(n.type==='star')return foreign(n,`<button class="knowledge-star ${learned(n.key)?'is-lit':''}" data-star-node="${esc(n.key)}" data-lit="${learned(n.key)}" aria-label="${esc(n.title)}，${learned(n.key)?'已点亮':'待学习'}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS.stars}</svg><span>${esc(n.title)}</span></button>`);
      if(n.type==='center'){
        const focus=state.universeFocus,keys=focus?A.knowledge.filter(k=>A.owner.get(k.key)===focus).map(k=>k.key):allKnowledgeKeys;
        return foreign(n,`<button class="universe-node universe-root" data-action="progress-root"><strong>${esc(focus?A.modules.find(m=>m.id===focus).title:'Grammar Universe')}</strong><small>已点亮 ${litCount(keys)} / ${keys.length}</small></button>`);
      }
      const keys=A.knowledge.filter(k=>A.owner.get(k.key)===n.id).map(k=>k.key);
      return foreign(n,`<button class="universe-node" data-progress-module="${n.id}" aria-label="打开${esc(n.title)}星座"><strong>${esc(n.title)}</strong><small>${litCount(keys)} / ${keys.length}</small></button>`);
    }).join('');
    $('#universe-transform').innerHTML=edges+starDots+nodes;
    $('#star-caption').innerHTML=state.universeFocus?`<button data-action="progress-root">${icon('back')}全部星座</button><strong>${esc(A.modules.find(m=>m.id===state.universeFocus).title)}星座</strong>`:`<strong>学习星图</strong><span>已点亮 ${count} / ${allKnowledgeKeys.length} 个知识点</span>`;
    if(reset)graphs.progress.camera=G.fit(layout,w,h);
    updateTransform('progress');
  }
  function renderActiveGraph(reset=true){if(state.page==='map')renderMap(reset);else if(state.page==='progress')renderUniverse(reset);}
  function updateTransform(page){const c=graphs[page].camera;$(page==='map'?'#map-transform':'#universe-transform').setAttribute('transform',`translate(${c.x},${c.y}) scale(${c.scale})`);}
  function fitView(){const page=state.page;if(!graphs[page]?.layout)return;const el=$('#'+page+'-page');graphs[page].camera=G.fit(graphs[page].layout,el.clientWidth,el.clientHeight,true);updateTransform(page);closeNav();}
  function zoom(page,factor,cx,cy){const c=graphs[page].camera,el=$('#'+page+'-page');cx??=el.clientWidth/2;cy??=el.clientHeight/2;const scale=Math.max(.23,Math.min(2.4,c.scale*factor)),ratio=scale/c.scale;c.x=cx-(cx-c.x)*ratio;c.y=cy-(cy-c.y)*ratio;c.scale=scale;updateTransform(page);}
  function openConstellation(id){if(!A.modules.some(m=>m.id===id))return;clearCard();state.universeFocus=id;dismissNav();showPage('progress');recordHistory();}
  function questionPool(scope='root'){
    const keys=A.lessonKeys(scope),seen=new Set();
    return keys.flatMap(k=>{const l=A.get(k).lesson;return l.quiz.filter(q=>{if(seen.has(q.id))return false;seen.add(q.id);return true;}).map(q=>({lid:l.id,q}));});
  }
  const shuffled=items=>{const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;};
  function beginPractice(scope='root',count=5,mode='mixed',lid){
    let pool=mode==='mistakes'?Object.values(data.mistakes).filter(m=>!lid||m.lid===lid).map(m=>P.questionOwners.get(m.qid)).filter(Boolean):questionPool(scope);
    if(!pool.length){toast(mode==='mistakes'?'暂无需要重练的错题。':'当前范围暂无练习。');return;}
    const mod=scope==='root'?null:moduleOf(scope);state.practiceModule=mod?mod.key:'root';state.practicePoint=A.get(scope)?.kind==='lesson'?scope:'all';
    const returnCard=state.cardKey?{key:state.cardKey,trail:[...state.cardTrail]}:null;
    clearCard();closeModal(false);dismissNav();state.choice=null;state.answer='';state.feedback=null;
    state.session={scope,mode,items:shuffled(pool).slice(0,Math.min(count,pool.length)),index:0,results:[],done:false,returnCard};
    showPage('practice');recordHistory();$('#practice-page').scrollTop=0;
  }
  function practicePointOptions(moduleKey){return '<option value="all">全部知识点</option>'+A.lessonKeys(moduleKey).map(k=>`<option value="${esc(k)}" ${state.practicePoint===k?'selected':''}>${esc(A.get(k).title)}</option>`).join('');}
  function renderPractice(){
    if(state.session){renderSession();return;}
    const mistakes=Object.values(data.mistakes),owners=[...new Set(mistakes.map(m=>m.lid))];
    $('#practice-page').innerHTML=`<div class="practice-shell"><header class="practice-heading"><div><h1>练习中心</h1><p>${lessons.reduce((n,l)=>n+l.quiz.length,0)} 道练习 · 选择题与填空题</p></div><div class="practice-stats"><span>已做题次<strong>${data.attempts}</strong></span><span>累计正确率<strong>${data.attempts?Math.round(data.right/data.attempts*100):0}%</strong></span><span>待复习<strong>${mistakes.length}</strong></span></div></header>
      <div class="practice-grid"><section class="practice-box"><h2>选择练习范围</h2><div class="practice-fields"><label>模块<select id="practice-module"><option value="root">全部模块</option>${A.modules.map(m=>`<option value="${m.key}" ${m.key===state.practiceModule?'selected':''}>${esc(m.title)}</option>`).join('')}</select></label><label>知识点<select id="practice-point">${practicePointOptions(state.practiceModule)}</select></label><label>题目数量<select id="practice-count"><option value="3">3 题</option><option value="5" selected>5 题</option><option value="10">10 题</option><option value="15">15 题</option></select></label></div><button class="primary-button" data-action="start-practice">开始练习${icon('arrow')}</button></section>
      <section class="practice-box"><h2>错题复习</h2>${owners.length?owners.map(id=>{const l=byId.get(id);return `<div class="mistake-row"><div><strong>${esc(l.title)}</strong><small>${mistakes.filter(m=>m.lid===id).length} 道待复习 · ${esc(moduleOf('lesson:'+id).title)}</small></div><button data-review-lesson="${id}">重练${icon('arrow')}</button></div>`;}).join('')+`<button class="secondary-button" data-action="review-mistakes" style="margin-top:18px">重练全部错题</button>`:'<div class="empty-state">暂无错题</div>'}</section></div></div>`;
  }
  function answerText(q){return q.type==='mc'?q.options[q.answer]:q.answer[0];}
  function questionMarkup(q){
    const submitted=!!state.feedback;
    return `<div class="quiz-prompt">${esc(q.prompt)}</div>${q.type==='mc'?`<div class="quiz-options" role="radiogroup" aria-label="选择答案">${q.options.map((option,i)=>`<button class="quiz-option ${state.choice===i?'selected':''} ${submitted&&q.answer===i?'correct':''} ${submitted&&!state.feedback.ok&&state.choice===i?'wrong':''}" role="radio" aria-checked="${state.choice===i}" tabindex="${(state.choice===null?i===0:state.choice===i)?0:-1}" data-choice="${i}" ${submitted?'disabled':''}><span class="option-letter">${'ABCD'[i]}</span><span>${esc(option)}</span></button>`).join('')}</div>`:`<input id="quiz-answer" class="quiz-input" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="填写答案" value="${esc(state.answer)}" ${submitted?'disabled':''}>`}
      ${submitted?`<div class="quiz-feedback ${state.feedback.ok?'':'is-wrong'}"><strong>${state.feedback.ok?'回答正确':'再看一下这个知识点'}</strong>${!state.feedback.ok?`<p>参考答案：${esc(answerText(q))}</p>`:''}<p>${esc(q.why)}</p></div><button class="primary-button" data-action="next-question">${state.session.index+1===state.session.items.length?'查看结果':'下一题'}${icon('arrow')}</button>`:`<button class="primary-button" data-action="submit-answer" ${(q.type==='mc'?state.choice===null:!state.answer.trim())?'disabled':''}>提交答案</button>`}`;
  }
  function renderSession(){
    const s=state.session;if(!s)return;
    if(s.done){
      const correct=s.results.filter(r=>r.ok).length;
      $('#practice-page').innerHTML=`<div class="session-card"><div class="result-heading"><h1>练习完成</h1><p>答对 ${correct} / ${s.items.length} 题 · ${Math.round(correct/s.items.length*100)}%</p></div><div class="session-actions">${s.returnCard?'<button class="primary-button" data-action="return-to-card">返回知识卡片</button>':''}<button class="${s.returnCard?'secondary':'primary'}-button" data-action="end-session">返回练习中心</button><button class="secondary-button" data-action="open-progress">查看学习星图${icon('stars')}</button></div>${s.results.filter(r=>!r.ok).map(r=>{const l=byId.get(r.lid),q=l.quiz.find(q=>q.id===r.qid);return `<article class="review-item"><strong>${esc(l.title)}</strong><p>${esc(q.prompt)}</p><small>你的答案：${esc(r.answer)} · 参考答案：${esc(answerText(q))}</small><p>${esc(q.why)}</p><button class="text-button" data-open-card="lesson:${l.id}">查看知识卡片${icon('arrow')}</button></article>`;}).join('')}</div>`;return;
    }
    const {lid,q}=s.items[s.index],l=byId.get(lid);
    $('#practice-page').innerHTML=`<article class="session-card"><div class="session-heading"><span>${s.mode==='mistakes'?'错题重练':esc(A.get(s.scope)?.title||'综合练习')}</span><button data-action="end-session">结束练习</button></div><div class="session-progress"><i style="width:${s.index/s.items.length*100}%"></i></div><div class="quiz-meta"><span>${esc(l.title)}</span><span>${s.index+1} / ${s.items.length}</span></div>${questionMarkup(q)}<button class="text-button" data-open-card="lesson:${lid}" style="margin-top:18px">查看本题知识卡片${icon('arrow')}</button></article>`;
  }
  const normalizeAnswer=(s,caseSensitive=false)=>{const text=String(s).trim().replace(/[’‘]/g,"'").replace(/\s+/g,' ');return caseSensitive?text:text.toLowerCase();};
  function submitAnswer(){
    const s=state.session;if(!s||s.done||state.feedback)return;
    const {lid,q}=s.items[s.index];if(q.type==='mc'?state.choice===null:!state.answer.trim())return;
    const ok=q.type==='mc'?state.choice===q.answer:q.answer.some(a=>normalizeAnswer(a,q.caseSensitive)===normalizeAnswer(state.answer,q.caseSensitive));
    const response=q.type==='mc'?q.options[state.choice]:state.answer;
    data.attempts++;if(ok){data.right++;data.correct[q.id]=true;delete data.mistakes[q.id];}else{delete data.correct[q.id];data.mistakes[q.id]={lid,qid:q.id,answer:response,at:Date.now()};}
    const l=byId.get(lid);if(l.quiz.every(item=>data.correct[item.id]))P.learn(data,'lesson:'+lid);
    s.results.push({lid,qid:q.id,ok,answer:response});state.feedback={ok};save();renderPractice();
    requestAnimationFrame(()=>$('.quiz-feedback')?.scrollIntoView({block:'nearest'}));
  }
  function chooseAnswer(index){if(!state.session||state.feedback)return;state.choice=index;renderPractice();$(`[data-choice="${index}"]`)?.focus({preventScroll:true});}
  function nextQuestion(){const s=state.session;if(!s||!state.feedback)return;s.index++;s.done=s.index>=s.items.length;state.choice=null;state.answer='';state.feedback=null;renderPractice();$('#practice-page').scrollTop=0;}
  function modal(title,body,cls=''){
    previousModalFocus=document.activeElement;state.modal=title;dismissNav();
    $('#modal-root').innerHTML=`<div class="modal-backdrop"><section class="modal ${cls}" role="dialog" aria-modal="true" aria-label="${esc(title)}"><header class="modal-heading"><h2>${esc(title)}</h2><button class="icon-button" data-action="close-modal" aria-label="关闭弹窗">${icon('close')}</button></header><div class="modal-body">${body}</div></section></div>`;
    syncUI();setTimeout(()=>$('#modal-root input, #modal-root textarea, #modal-root button')?.focus({preventScroll:true}),0);
  }
  function closeModal(restore=true){if(!state.modal)return;$('#modal-root').innerHTML='';state.modal=null;syncUI();if(restore){const target=previousModalFocus?.isConnected&&previousModalFocus.getClientRects().length?previousModalFocus:state.cardKey?$('#card-title'):navFocusTarget();target?.focus({preventScroll:true});}}
  function showSearch(){modal('搜索知识点','<input id="knowledge-search" class="search-input" type="search" aria-label="搜索知识点" placeholder="名词、过去完成时、that…"><div class="search-results" id="search-results"></div>');renderSearch('');}
  function renderSearch(query){
    const tokens=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const list=A.knowledge.filter(n=>tokens.every(t=>(n.title+' '+n.en+' '+n.definition+' '+n.classification.join(' ')).toLowerCase().includes(t))).sort((a,b)=>{const score=n=>tokens.reduce((v,t)=>v+(n.title.includes(t)?10:0)+(n.en.toLowerCase().includes(t)?4:0),0);return score(b)-score(a);});
    const shown=query?list.slice(0,24):['topic:nouns','lesson:present','topic:relative','lesson:verb-choice','topic:fragments'].map(k=>A.get(k));
    $('#search-results').innerHTML=shown.map(n=>`<button class="search-result" data-open-card="${esc(n.key)}"><span><strong>${esc(n.title)}</strong><small>${esc(moduleOf(n.key).title)} · ${esc(n.en)}</small></span>${icon('arrow')}</button>`).join('')||'<div class="empty-state">没有找到相关知识点</div>';
  }
  function toggleBookmark(){if(!state.cardKey)return;const key=A.storageKey(state.cardKey);data.bookmarks=data.bookmarks.includes(key)?data.bookmarks.filter(k=>k!==key):[...data.bookmarks,key];save();renderCard(true);}
  function showNote(){if(!state.cardKey)return;const key=A.storageKey(state.cardKey);modal('学习笔记',`<p>${esc(A.get(state.cardKey).title)}</p><textarea id="lesson-note" maxlength="10000" placeholder="记录要点、例句或疑问…">${esc(data.notes[key]||'')}</textarea><div class="modal-actions"><button class="secondary-button" data-action="close-modal">取消</button><button class="primary-button" data-action="save-note">保存笔记</button></div>`);}
  function saveNote(){if(!state.cardKey)return;const key=A.storageKey(state.cardKey),value=$('#lesson-note').value.trim();if(value)data.notes[key]=value;else delete data.notes[key];save();closeModal();toast(value?'笔记已保存':'笔记已清空');}
  function showNotebook(tab=state.notebookTab){
    state.notebookTab=tab;const keys=tab==='bookmarks'?data.bookmarks:Object.keys(data.notes).filter(k=>data.notes[k].trim());
    modal('收藏与笔记',`<div class="notebook-tabs"><button data-notebook-tab="bookmarks" class="${tab==='bookmarks'?'active':''}">收藏 ${data.bookmarks.length}</button><button data-notebook-tab="notes" class="${tab==='notes'?'active':''}">笔记 ${Object.values(data.notes).filter(n=>n.trim()).length}</button></div>${keys.length?keys.map(storage=>{const key=A.fromStorage(storage),n=A.get(key);return `<article class="note-row"><strong>${esc(n.title)}</strong><small>${esc(moduleOf(key).title)}</small>${tab==='notes'?`<p>${esc(data.notes[storage])}</p>`:''}<button data-open-card="${esc(key)}">查看知识卡片</button></article>`;}).join(''):'<div class="empty-state">暂无'+(tab==='bookmarks'?'收藏':'笔记')+'</div>'}`);
  }
  function showBackup(){modal('学习记录备份',`<p>记录保存在当前浏览器。导出后可在其他设备导入；旧版语法漫游备份也可使用。</p><div class="modal-actions"><button class="secondary-button" data-action="export-progress">${icon('download')}导出备份</button><button class="secondary-button" data-action="import-progress">${icon('upload')}导入备份</button></div><input id="import-file" type="file" accept="application/json,.json" hidden><div class="source-note">导入会合并已学习、答题、错题、收藏和笔记。相同知识点的笔记优先保留当前内容；重复导入不会叠加答题次数。</div>`);}
  function exportProgress(){const blob=new Blob([JSON.stringify({app:'grammar-atlas',exportedAt:new Date().toISOString(),progress:data},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='grammar-atlas-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('备份已导出');}
  async function importProgress(file){
    if(!file)return;try{if(file.size>5e6)throw Error('Large file');const backup=JSON.parse(await file.text());data=P.merge(data,backup);save();if(state.cardKey)renderCard(true);if(state.page==='practice')renderPractice();else if(state.page==='games')Games.render();else renderActiveGraph(false);closeModal();toast('备份已合并，学习星图已更新');}catch{toast('这不是有效的语法漫游进度备份。');}
  }
  function showHelp(){modal('图谱操作',`<div class="help-item"><strong>逐层探索</strong><p>点击总地图的模块进入子地图，点击知识点打开卡片；卡片中的“下一级知识点”可继续深入，最后进入对应练习。点击地图中心可返回上一级。</p></div><div class="help-item"><strong>点亮星星</strong><p>阅读后点击“已学会，点亮星星”，或答对该知识点全部练习，对应星星就会点亮。学习星图中可展开模块星座，再点击星星继续学习。</p></div><div class="help-item"><strong>调整阅读空间</strong><p>拖动图谱与讲解之间的蓝色分隔手柄：电脑和平板左右调整，手机上下调整。双击恢复默认；也可用方向键微调。卡片顶部的展开按钮可全屏阅读，再次点击返回分屏。</p></div><div class="help-item"><strong>移动与缩放</strong><p>拖动空白处平移，滚轮或双指手势缩放。左侧边栏中的“适应画面”可恢复总览。键盘 + / − 缩放，方向键平移，0 适应画面；Esc 关闭卡片或返回上一级。</p></div><div class="help-item"><strong>词性积木</strong><p>侧边栏中进入“游戏”，选择词性积木和关卡。拖拽积木或先点词性再点空格，同类可重复使用；放好后检查答案。50 关从短句逐步进入从句与长句，通关星级自动保存。</p></div><div class="help-item"><strong>搜索与备份</strong><p>Ctrl / ⌘ + K 搜索。收藏、笔记和记录备份都在侧边栏中。</p></div><div class="source-note">知识框架参考《英语语法知识体系详解》，并结合原课程索引补充整理。</div>`);}
  function speakExample(index){const e=A.examplesFor(state.cardKey)[index];if(!e)return;if(!('speechSynthesis'in window)){toast('当前设备未提供语音朗读。');return;}speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(e.en);utterance.lang='en-GB';utterance.rate=.85;const voice=speechSynthesis.getVoices().find(v=>v.lang==='en-GB')||speechSynthesis.getVoices().find(v=>v.lang.startsWith('en'));if(voice)utterance.voice=voice;utterance.onerror=()=>toast('当前设备暂时没有可用英语语音。');speechSynthesis.speak(utterance);}
  const actions={
    'toggle-nav':toggleNav,'close-sidebar':()=>closeNav(true),'close-card':()=>closeCard(),'close-modal':()=>closeModal(),
    'toggle-card-size':()=>{Pane.toggleExpanded();syncUI();renderActiveGraph(true);$('#card-toggle-size')?.focus({preventScroll:true});},
    'parent-map':goParent,'card-root':()=>goMap('root'),'mark-learned':markLearned,
    'progress-root':()=>{state.universeFocus=null;clearCard();showPage('progress');recordHistory();},
    'open-progress':()=>navigate('progress'),search:showSearch,notebook:()=>showNotebook(),backup:showBackup,help:showHelp,fit:fitView,
    bookmark:toggleBookmark,note:showNote,'save-note':saveNote,'export-progress':exportProgress,'import-progress':()=>$('#import-file').click(),
    'start-practice':()=>{const mod=$('#practice-module').value,point=$('#practice-point').value,count=Number($('#practice-count').value);beginPractice(point==='all'?mod:point,count);},
    'review-mistakes':()=>beginPractice('root',20,'mistakes'),'submit-answer':submitAnswer,'next-question':nextQuestion,
    'return-to-card':()=>{const card=state.session?.returnCard;if(!card)return;state.session=null;state.page='map';openCard(card.key,card.trail);},
    'end-session':()=>{state.session=null;state.choice=null;state.answer='';state.feedback=null;renderPractice();$('#practice-page').scrollTop=0;}
  };
  document.addEventListener('click',e=>{
    const mapNode=e.target.closest('[data-map-node]');
    if(mapNode){if(Date.now()<suppressGraphClickUntil){e.preventDefault();return;}const key=mapNode.dataset.mapNode;closeNav();if(key==='center'){if(state.context==='root')fitView();else goParent();}else{const n=A.get(key);if(n.kind==='module')goMap(key);else openCard(key,[...state.contextTrail,key]);}return;}
    const star=e.target.closest('[data-star-node]');if(star){if(Date.now()<suppressGraphClickUntil)return;openCard(star.dataset.starNode);return;}
    const constellation=e.target.closest('[data-progress-module]');if(constellation){if(Date.now()<suppressGraphClickUntil)return;openConstellation(constellation.dataset.progressModule);return;}
    const action=e.target.closest('button[data-action]');if(action){actions[action.dataset.action]?.();return;}
    const route=e.target.closest('button[data-route]');if(route){navigate(route.dataset.route);return;}
    const next=e.target.closest('[data-next-key]');if(next){nextCard(next.dataset.nextKey);return;}
    const open=e.target.closest('[data-open-card]');if(open){openCard(open.dataset.openCard);return;}
    const ancestor=e.target.closest('[data-card-ancestor]');if(ancestor){const key=ancestor.dataset.cardAncestor,i=Number(ancestor.dataset.trailIndex);A.get(key).kind==='module'?goMap(key,state.cardTrail.slice(0,i+1)):openCard(key,state.cardTrail.slice(0,i+1));return;}
    const jump=e.target.closest('[data-jump]');if(jump){state.activeAnchor=jump.dataset.jump;$$('.card-anchors button').forEach(el=>el.classList.toggle('active',el===jump));$('#card-'+state.activeAnchor)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});return;}
    const practice=e.target.closest('[data-practice-scope]');if(practice){beginPractice(practice.dataset.practiceScope,Number(practice.dataset.practiceCount)||3);return;}
    const review=e.target.closest('[data-review-lesson]');if(review){beginPractice('root',20,'mistakes',review.dataset.reviewLesson);return;}
    const choice=e.target.closest('[data-choice]');if(choice){chooseAnswer(Number(choice.dataset.choice));return;}
    const speak=e.target.closest('[data-speak]');if(speak){speakExample(Number(speak.dataset.speak));return;}
    const notebook=e.target.closest('[data-notebook-tab]');if(notebook){showNotebook(notebook.dataset.notebookTab);return;}
    if(e.target===$('#card-scrim')){closeCard();return;}
    if(e.target.classList.contains('modal-backdrop'))closeModal();
  });
  document.addEventListener('input',e=>{if(e.target.id==='knowledge-search')renderSearch(e.target.value);if(e.target.id==='quiz-answer'){state.answer=e.target.value;const button=$('[data-action="submit-answer"]');if(button)button.disabled=!state.answer.trim();}});
  document.addEventListener('change',e=>{if(e.target.id==='practice-module'){state.practiceModule=e.target.value;state.practicePoint='all';$('#practice-point').innerHTML=practicePointOptions(state.practiceModule);}if(e.target.id==='import-file')importProgress(e.target.files[0]);});
  function bindCamera(selector,page){
    const svg=$(selector),pointers=new Map();let drag=null,pinch=null,gesture=null;
    svg.addEventListener('wheel',e=>{e.preventDefault();if(state.page!==page)return;const r=svg.getBoundingClientRect();zoom(page,Math.exp(-e.deltaY*.0014),e.clientX-r.left,e.clientY-r.top);},{passive:false});
    svg.addEventListener('pointerdown',e=>{
      if(e.pointerType==='mouse'&&(e.button!==0||e.target.closest('button')))return;
      pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});gesture??={x:e.clientX,y:e.clientY};
      if(!e.target.closest('button'))svg.setPointerCapture(e.pointerId);
      if(pointers.size===1){drag={x:e.clientX,y:e.clientY,px:graphs[page].camera.x,py:graphs[page].camera.y};svg.classList.add('dragging');}
      if(pointers.size===2){const a=[...pointers.values()];pinch={distance:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)};drag=null;suppressGraphClickUntil=Date.now()+300;}
    });
    svg.addEventListener('pointermove',e=>{
      if(!pointers.has(e.pointerId))return;
      if(gesture&&Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>8){suppressGraphClickUntil=Date.now()+300;try{svg.setPointerCapture(e.pointerId);}catch{}}
      pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(pointers.size===2&&pinch){const a=[...pointers.values()],distance=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),r=svg.getBoundingClientRect();if(pinch.distance>1)zoom(page,distance/pinch.distance,(a[0].x+a[1].x)/2-r.left,(a[0].y+a[1].y)/2-r.top);pinch.distance=distance;}
      else if(drag){graphs[page].camera.x=drag.px+e.clientX-drag.x;graphs[page].camera.y=drag.py+e.clientY-drag.y;updateTransform(page);}
    });
    const end=e=>{pointers.delete(e.pointerId);pinch=null;if(pointers.size===1){const a=[...pointers.values()][0];drag={x:a.x,y:a.y,px:graphs[page].camera.x,py:graphs[page].camera.y};}else drag=null;if(!pointers.size){gesture=null;svg.classList.remove('dragging');}};
    svg.addEventListener('pointerup',end);svg.addEventListener('pointercancel',end);svg.addEventListener('lostpointercapture',e=>{if(pointers.has(e.pointerId))end(e);});
  }
  bindCamera('#mindmap','map');bindCamera('#constellation','progress');
  function trapFocus(e,root,extra=[]){const items=[...root.querySelectorAll('button:not(:disabled),input:not([hidden]),select,textarea,[tabindex="0"]'),...extra].filter(el=>el.getClientRects().length&&!el.closest('[hidden]'));if(!items.length)return;const first=items[0],last=items.at(-1);if(!root.contains(document.activeElement)&&!extra.includes(document.activeElement)){e.preventDefault();first.focus();}else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();showSearch();return;}
    if(e.key==='Escape'){e.preventDefault();if(state.modal)closeModal();else if(state.cardKey)closeCard();else if(state.sidebarOpen&&(!desktopNav.matches||e.target.closest('#sidebar')))closeNav(true);else if(state.page==='progress'&&state.universeFocus)goParent();else if(state.page==='map'&&state.context!=='root')goParent();else if(state.page==='games'&&Games.route)Games.back();return;}
    if(e.key==='Tab'){if(state.modal)trapFocus(e,$('#modal-root'));else if(state.cardKey&&Pane.expanded)trapFocus(e,$('#knowledge-card'));else if(state.sidebarOpen&&!desktopNav.matches)trapFocus(e,$('#sidebar'));}
    if(e.target.id==='quiz-answer'&&e.key==='Enter'){e.preventDefault();submitAnswer();return;}
    if(e.target.closest('.quiz-options')&&['ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(e.key)&&!state.feedback){e.preventDefault();const count=$$('[data-choice]').length,d=['ArrowDown','ArrowRight'].includes(e.key)?1:-1;chooseAnswer(((state.choice??0)+d+count)%count);return;}
    if(e.target.matches('.graph-canvas')){if(['+','=','-','0','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))e.preventDefault();const page=state.page;if(!graphs[page])return;if(e.key==='+'||e.key==='=')zoom(page,1.15);if(e.key==='-')zoom(page,1/1.15);if(e.key==='0')fitView();const c=graphs[page].camera;if(e.key==='ArrowUp')c.y+=45;if(e.key==='ArrowDown')c.y-=45;if(e.key==='ArrowLeft')c.x+=45;if(e.key==='ArrowRight')c.x-=45;updateTransform(page);}
  });
  function restoreView(view){
    if(!view||!['map','practice','progress','games'].includes(view.page))return false;
    clearCard();closeModal(false);dismissNav();state.page=view.page;
    state.context=view.context==='root'||A.get(view.context)?.children.length?view.context:'root';
    state.contextTrail=Array.isArray(view.contextTrail)&&view.contextTrail.every(k=>A.get(k))?view.contextTrail:A.path(state.context);
    state.cardKey=A.get(view.cardKey)?.kind!=='module'&&A.get(view.cardKey)?view.cardKey:null;
    state.cardTrail=state.cardKey&&Array.isArray(view.cardTrail)&&view.cardTrail.every(k=>A.get(k))?view.cardTrail:state.cardKey?A.path(state.cardKey):[];
    if(state.page==='map'&&state.cardKey){const n=A.get(state.cardKey);state.context=n.children.length?n.key:(state.cardTrail.at(-2)||'root');state.contextTrail=n.children.length?[...state.cardTrail]:state.cardTrail.slice(0,-1);}
    state.universeFocus=A.modules.some(m=>m.id===view.universeFocus)?view.universeFocus:null;
    state.session=null;Games.pause();if(state.page==='games')Games.setRoute(view.gameRoute||'');syncUI();if(state.cardKey)renderCard();if(state.page==='practice')renderPractice();else if(state.page==='games')Games.render();else renderActiveGraph(true);return true;
  }
  function restoreHash(){
    let parts;try{parts=location.hash.slice(1).split('/').filter(Boolean).map(decodeURIComponent);}catch{parts=[];}
    if(parts[0]==='progress'){restoreView({page:'progress',context:'root',universeFocus:parts[1]});return;}
    if(parts[0]==='practice'){restoreView({page:'practice',context:'root'});return;}
    if(parts[0]==='games'){restoreView({page:'games',context:'root',gameRoute:parts.slice(1).join('/')});return;}
    const trail=[];let choices=A.modules;
    for(const slug of parts.slice(1)){
      let n=choices.find(n=>n.id===slug);
      if(n)trail.push(n.key);
      else{n=A.descendants(trail.at(-1)||'root').map(k=>A.get(k)).find(n=>n.id===slug);if(!n)break;trail.splice(0,trail.length,...A.path(n.key));}
      choices=n.children.map(k=>A.get(k));
    }
    const last=A.get(trail.at(-1));
    restoreView({page:'map',context:last?.children.length?last.key:(trail.at(-2)||'root'),contextTrail:last?.children.length?trail:trail.slice(0,-1),cardKey:last&&last.kind!=='module'?last.key:null,cardTrail:trail});
  }
  window.addEventListener('popstate',e=>{if(e.state?.app==='grammar-atlas-v3')restoreView(e.state.view);else restoreHash();});
  window.addEventListener('hashchange',()=>{if(history.state?.app!=='grammar-atlas-v3')restoreHash();});
  let resizeTimer;
  const observer=new ResizeObserver(()=>{if(Pane.dragging)return;clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(Pane.dragging)return;syncUI();renderActiveGraph(true);},80);});
  observer.observe($('#map-page'));observer.observe($('#progress-page'));
  desktopNav.addEventListener('change',()=>{const focused=document.activeElement?.closest('#sidebar');state.sidebarOpen=desktopNav.matches&&desktopSidebarOpen;syncUI();if(focused&&!state.sidebarOpen)$('#sidebar-toggle').focus({preventScroll:true});renderActiveGraph(true);});
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{syncUI();renderActiveGraph(true);},100);});
  window.addEventListener('pagehide',()=>{save();if('speechSynthesis'in window)speechSynthesis.cancel();});
  Games.init({root:$('#games-page'),getProgress:()=>data.games.drag,saveProgress:save,onRoute:()=>recordHistory(),toast});
  Pane.init({onResize:()=>renderActiveGraph(true)});
  hydrate();if(history.state?.app==='grammar-atlas-v3')restoreView(history.state.view);else restoreHash();recordHistory(true);
})();
