'use strict';
const {groups,lessons,books}=window.GRAMMAR;
const totals={groups:groups.length,lessons:lessons.length,examples:lessons.reduce((n,l)=>n+l.examples.length,0),questions:lessons.reduce((n,l)=>n+l.quiz.length,0)};
const quizOwners=new Map(lessons.flatMap(l=>l.quiz.map(q=>[q.id,l.id])));
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId=id=>lessons.find(l=>l.id===id), groupOf=id=>groups.find(g=>g.id===id);
const ICONS={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',bookmark:'<path d="M6 4h12v17l-6-4-6 4z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',frame:'<path d="M4 8V4h4m8 0h4v4m0 8v4h-4M8 20H4v-4M8 12h8m-4-4v8"/>',spark:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"/>',branch:'<path d="M6 4v16m0-8h8m0-7v14m0-14h5m-5 14h5"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/>',book:'<path d="M12 5C9 3 5 3 3 4v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1zm0 0v15"/>',sliders:'<path d="M4 6h8m4 0h4M4 12h3m4 0h9M4 18h11m4 0h1"/><circle cx="14" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',link:'<path d="m10 13 4-4m-6 8-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2-1 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 0)"/>',layers:'<path d="m12 3 10 5-10 5L2 8zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',route:'<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h8a4 4 0 0 1 0 8H8a2 2 0 0 0 0 4h8"/>',grid:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.8 8.7a2.4 2.4 0 0 1 4.5 1.1c0 1.7-2.3 1.9-2.3 3.5M12 17h.01"/>',expand:'<path d="M4 9V4h5m6 0h5v5m0 6v5h-5M9 20H4v-5"/>',minus:'<path d="M5 12h14"/>',plus:'<path d="M5 12h14M12 5v14"/>',scan:'<path d="M4 8V4h4m8 0h4v4m0 8v4h-4M8 20H4v-4"/><rect x="8" y="8" width="8" height="8" rx="1"/>','arrow-up-right':'<path d="M6 18 18 6M6 6h12v12"/>','arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>','chevron-right':'<path d="m9 5 7 7-7 7"/>','chevron-down':'<path d="m6 9 6 6 6-6"/>',sprout:'<path d="M12 21V11m0 3C4 14 3 9 3 5c7 0 9 4 9 9zm0-4c0-5 3-7 9-7 0 5-3 9-9 9"/>',check:'<path d="m5 12 4 4L19 6"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',note:'<path d="M13 4H5v16h14v-8M11 13l1-4 7-7 3 3-7 7zM8 17h7"/>',sound:'<path d="M11 4 6 8H3v8h3l5 4zM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',play:'<path d="m8 5 11 7-11 7z"/>',refresh:'<path d="M20 7v5h-5M4 17v-5h5M5 8a8 8 0 0 1 13-3l2 2M4 17l2 2a8 8 0 0 0 13-3"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',upload:'<path d="M12 16V4m-5 5 5-5 5 5M4 17v4h16v-4"/>',flag:'<path d="M5 21V3m0 1c5-4 9 4 14 0v10c-5 4-9-4-14 0"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',mouse:'<rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 6v4"/>',keyboard:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h1m3 0h1m3 0h1m3 0h1M6 13h1m3 0h1m3 0h1m-7 3h8"/>'};
const icon=(n,cls='')=>`<span data-icon="${n}" class="${cls}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||ICONS.book}</svg></span>`;
function hydrate(root=document){root.querySelectorAll('[data-icon]:empty').forEach(e=>e.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[e.dataset.icon]||ICONS.book}</svg>`);}
const STORAGE='grammar-atlas-progress-v1';
function fresh(){return {schema:1,read:[],correct:{},mistakes:{},bookmarks:[],notes:{},attempts:0,right:0,last:'present',view:{size:100,space:100,line:'curve'}};}
let data=fresh(); let storageWarning=false;
try{const v=JSON.parse(localStorage.getItem(STORAGE)||'null');if(v&&v.schema===1)data={...fresh(),...v,view:{...fresh().view,...v.view}};}catch{storageWarning=true;}
// Questions retain their old IDs when a combined lesson is split into new topics.
function normalizeMistakes(mistakes){return Object.fromEntries(Object.entries(mistakes||{}).filter(([qid,m])=>quizOwners.has(qid)&&m&&typeof m==='object').map(([qid,m])=>[qid,{...m,lid:quizOwners.get(qid),qid}]));}
data.mistakes=normalizeMistakes(data.mistakes);
function save(){try{localStorage.setItem(STORAGE,JSON.stringify(data));}catch{if(!storageWarning){toast('浏览器暂时无法保存进度，可以在进度页导出备份。');storageWarning=true;}}}
const correctCount=l=>l.quiz.filter(q=>data.correct[q.id]).length;
const mastered=l=>data.read.includes(l.id)&&correctCount(l)===l.quiz.length;
const status=l=>mastered(l)?'mastered':data.read.includes(l.id)||l.quiz.some(q=>data.correct[q.id]||data.mistakes[q.id])?'learning':'unstarted';
const state={route:'map',focus:null,lesson:byId(data.last)?data.last:'present',tab:'learn',step:0,exampleOpen:new Set(),quizIndex:0,choice:null,answer:'',feedback:null,lessonResults:[],session:null,notebookTab:'bookmarks',tabletSidebarExpanded:false,map:{nodes:[],edges:[],scale:1,x:0,y:0,bounds:null},modal:null};
let toastTimer, previousFocus;
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2600);}
function counts(){return {mastered:lessons.filter(mastered).length,started:lessons.filter(l=>status(l)!=='unstarted').length};}
function renderSidebar(){
 $('#category-nav').innerHTML=groups.map(g=>`<div class="category-item ${state.focus===g.id?'expanded':''}"><button class="category-button ${state.focus===g.id?'active':''}" data-group="${g.id}" ${state.focus===g.id?'aria-current="true"':''} title="${g.title}" aria-label="${g.title}">${icon(g.icon)}<span>${g.title}</span><span class="count">${g.ids.length.toString().padStart(2,'0')}</span></button><div class="category-lessons">${g.ids.map(id=>`<button class="sidebar-lesson ${state.lesson===id?'current':''}" data-lesson="${id}"><i style="${mastered(byId(id))?'background:#81988b':''}"></i>${byId(id).title}</button>`).join('')}</div></div>`).join('');
 $('#mobile-category').innerHTML=`<button data-action="overview" class="${!state.focus?'active':''}">全景</button>`+groups.map(g=>`<button data-group="${g.id}" class="${state.focus===g.id?'active':''}">${g.title}</button>`).join('');
 const c=counts();$('#sidebar-count').textContent=`已掌握 ${c.mastered} / ${totals.lessons}`;$('#sidebar-sub').textContent=`已学习 ${c.started} 个知识点`;
}
function setRoute(route){
 if(!['map','path','practice'].includes(route))route='map';if(state.route==='practice'&&route!=='practice'){state.session=null;state.choice=null;state.answer='';state.feedback=null;}state.route=route;
 // Layout metadata must not match the delegated [data-route] navigation controls.
 document.body.dataset.page=route;
 $$('.page').forEach(e=>e.classList.toggle('active',e.id===route+'-page'));$$('[data-route]').forEach(e=>{e.classList.toggle('active',e.dataset.route===route);e.setAttribute('aria-current',e.dataset.route===route?'page':'false');});
 if(location.hash!=='#'+route)history.replaceState(null,'','#'+route);
 closePanel();$('#sidebar').classList.remove('open');syncBodyLock();
 window.scrollTo({top:0,behavior:'auto'});if(route==='map'){renderMap();requestAnimationFrame(()=>fitMap());}if(route==='path')renderPath();if(route==='practice')renderPractice();
}
function selectGroup(id){const g=groupOf(id);if(!g)return;state.focus=id;if(!g.ids.includes(state.lesson)){state.lesson=g.ids[0];resetLesson();}setRoute('map');renderSidebar();renderLesson();}
function resetLesson(){state.step=0;state.tab='learn';state.quizIndex=0;state.choice=null;state.answer='';state.feedback=null;state.lessonResults=[];state.exampleOpen.clear();}
function openLesson(id,options={}){
 if(deviceLayout()==='desktop')$('#map-card').classList.remove('is-fullscreen');
 const l=byId(id);if(!l)return;state.lesson=id;state.focus=l.g;data.last=id;save();resetLesson();closeModal();
 if(state.route!=='map')setRoute('map');renderSidebar();renderMap();fitMap();renderLesson();$('#sidebar').classList.remove('open');syncBodyLock();
 if(deviceLayout()!=='desktop'&&!options.silent)showLessonPanel();
}
function deviceLayout(){return matchMedia('(max-width:767px)').matches?'phone':matchMedia('(max-width:1279px)').matches?'tablet':'desktop';}
function showLessonPanel(){
 $('#sidebar').classList.remove('open');$('#lesson-panel').classList.add('open');$('#lesson-panel').setAttribute('role','dialog');$('#lesson-panel').setAttribute('aria-modal','true');syncBodyLock();
 setTimeout(()=>$('.panel-close')?.focus({preventScroll:true}),0);
}
function syncBodyLock(){
 const mode=deviceLayout(),sideOpen=mode==='phone'&&$('#sidebar').classList.contains('open'),panelOpen=$('#lesson-panel').classList.contains('open')&&mode!=='desktop';
 const expanded=mode==='tablet'?state.tabletSidebarExpanded:sideOpen;
 document.body.classList.toggle('tablet-sidebar-expanded',mode==='tablet'&&state.tabletSidebarExpanded);
 document.body.style.overflow=state.modal||panelOpen||sideOpen?'hidden':'';
 document.body.classList.toggle('lesson-visible',panelOpen);document.body.classList.toggle('drawer-visible',sideOpen);
 $('#panel-scrim').hidden=!(sideOpen||panelOpen);$('#panel-scrim').setAttribute('aria-label',sideOpen?'关闭目录':'关闭讲解');
 const toggle=$('.mobile-menu'),label=expanded?'收起目录':'展开目录';
 toggle.setAttribute('aria-expanded',String(expanded));toggle.setAttribute('aria-label',label);toggle.title=label;
 toggle.dataset.icon=expanded?'close':'menu';toggle.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[expanded?'close':'menu']}</svg>`;
}
function toggleSidebar(){
 const mode=deviceLayout();if(mode==='desktop')return;
 if(mode==='tablet'){
  closePanel();state.tabletSidebarExpanded=!state.tabletSidebarExpanded;syncBodyLock();
 }else{
  const opening=!$('#sidebar').classList.contains('open');closePanel();$('#sidebar').classList.toggle('open',opening);syncBodyLock();
  if(opening)setTimeout(()=>$('#category-nav button')?.focus({preventScroll:true}),0);
 }
}
function closePanel(){
 $('#lesson-panel').classList.remove('open');$('#lesson-panel').removeAttribute('role');$('#lesson-panel').removeAttribute('aria-modal');$('#sidebar').classList.remove('open');syncBodyLock();
}
function overview(){state.focus=null;if(state.route!=='map')setRoute('map');renderSidebar();renderMap();fitMap();closePanel();}
function nodeHtml(n){
 if(n.type==='root')return `<button class="map-node-button root-node" data-node="root" aria-label="英语语法总览"><strong>英语语法</strong></button>`;
 if(n.type==='back')return `<button class="map-node-button focus-root" data-node="root">${icon('layers')}<span class="node-words"><strong>英语语法</strong><small>返回知识全景</small></span></button>`;
 const g=groupOf(n.type==='group'?n.id:byId(n.id).g);
 if(n.type==='group')return `<button class="map-node-button ${state.focus===g.id?'focus-category':''}" style="--node-color:${g.color}" data-node="g:${g.id}" aria-label="展开${g.title}，${g.ids.length}个知识点"><span class="node-symbol">${icon(g.icon)}</span><span class="node-words"><strong>${g.title}</strong><small>${g.ids.length} 个知识点<span class="node-progress"> · ${g.ids.filter(x=>mastered(byId(x))).length} 已掌握</span></small></span></button>`;
 const l=byId(n.id);return `<button class="map-node-button lesson-node ${state.lesson===l.id?'selected':''}" style="--node-color:${g.color}" data-node="l:${l.id}" aria-label="学习${esc(l.title)}"><span class="node-number">${(g.ids.indexOf(l.id)+1).toString().padStart(2,'0')}</span><span class="node-words"><strong>${esc(l.title)}</strong><small>${esc(l.en)}</small></span><span class="node-tiny-status ${status(l)}"></span></button>`;
}
function mapLayout(viewport={width:$('#canvas-wrap').clientWidth,compact:deviceLayout()==='phone'}){
 const size=data.view.size/100,space=data.view.space/100,nodes=[],edges=[];
 const addNode=(id,type,x,y,w,h)=>{const n={id,type,x,y,w:w*size,h:h*size};nodes.push(n);return n;};
 if(viewport.compact){
  const width=Math.max(280,viewport.width),cx=width/2,g=state.focus?groupOf(state.focus):null;
  const entries=g?g.ids:groups.map(g=>g.id),type=g?'lesson':'group',leafW=Math.min(194,(width-44)/2),leafH=g?96:56;
  const parent=g?addNode(g.id,'group',cx,62,Math.min(252,width-36),70):addNode('root','root',cx,44,180,48);
  const gap=22*space,dx=(leafW*size+gap)/2,step=leafH*size+(g?22:12)*space,startY=parent.y+parent.h/2+(g?24:16)+leafH*size/2;
  entries.forEach((id,i)=>{const n=addNode(id,type,cx+(i%2?dx:-dx),startY+Math.floor(i/2)*step,leafW,leafH);edges.push({kind:'branch',a:{x:cx,y:n.y,w:0,h:0},b:n,color:g?.color||groupOf(id).color});});
  edges.unshift({kind:'trunk',a:parent,b:{x:cx,y:Math.max(...nodes.map(n=>n.y)),w:0,h:0},color:g?.color||'#9baebb'});
 }else if(!state.focus){
  const root=addNode('root','root',440,340,156,86),step=(68*size+28)*space,leftCount=Math.ceil(groups.length/2);
  groups.forEach((g,i)=>{const left=i<leftCount,row=left?i:i-leftCount,count=left?leftCount:groups.length-leftCount,n=addNode(g.id,'group',440+(left?-1:1)*(215*size+40*space),340+(row-(count-1)/2)*step,210,68);edges.push({a:root,b:n,color:g.color});});
 }else{
  const g=groupOf(state.focus),parent=addNode(g.id,'group',440,340,214,88),leftCount=Math.ceil(g.ids.length/2),step=76*size+26*space;
  g.ids.forEach((id,i)=>{const left=i<leftCount,row=left?i:i-leftCount,count=left?leftCount:g.ids.length-leftCount;
   const n=addNode(id,'lesson',440+(left?-1:1)*(224*size+26*space),340+(row-(count-1)/2)*step,222,76);edges.push({a:parent,b:n,color:g.color});});
 }
 const pad=viewport.compact?10:26,topPad=viewport.compact?20:42,bottomPad=viewport.compact?85:116;
 const minX=Math.min(...nodes.map(n=>n.x-n.w/2))-pad,maxX=Math.max(...nodes.map(n=>n.x+n.w/2))+pad,minY=Math.min(...nodes.map(n=>n.y-n.h/2))-topPad,maxY=Math.max(...nodes.map(n=>n.y+n.h/2))+bottomPad;
 state.map.nodes=nodes;state.map.edges=edges;state.map.compact=viewport.compact;state.map.bounds={x:minX,y:minY,w:maxX-minX,h:maxY-minY};
}
function edgePath(e){
 if(e.kind==='trunk')return `M${e.a.x},${e.a.y+e.a.h/2} V${e.b.y}`;
 if(e.kind==='branch'){const x=e.b.x+(e.b.x<e.a.x?1:-1)*e.b.w/2,y=e.b.y;return data.view.line==='straight'?`M${e.a.x},${y} H${x}`:`M${e.a.x},${y-12} Q${e.a.x},${y} ${x},${y}`;}
 const right=e.b.x>e.a.x,x1=e.a.x+(right?1:-1)*e.a.w/2,x2=e.b.x-(right?1:-1)*e.b.w/2,y1=e.a.y,y2=e.b.y;
 return data.view.line==='straight'?`M${x1},${y1} L${x2},${y2}`:`M${x1},${y1} C${(x1+x2)/2},${y1} ${(x1+x2)/2},${y2} ${x2},${y2}`;
}
function renderMap(){
 mapLayout();const m=state.map;$('#map-card').classList.toggle('vertical-map',m.compact);
 $('#map-transform').innerHTML=m.edges.map(e=>`<path class="map-edge" stroke="${e.color}" d="${edgePath(e)}"/>`).join('')+m.nodes.map(n=>`<foreignObject x="${n.x-n.w/2}" y="${n.y-n.h/2}" width="${n.w}" height="${n.h}"><div xmlns="http://www.w3.org/1999/xhtml" style="width:${n.w/(data.view.size/100)}px;height:${n.h/(data.view.size/100)}px;transform:scale(${data.view.size/100});transform-origin:0 0">${nodeHtml(n)}</div></foreignObject>`).join('');
 $('#map-breadcrumb').innerHTML=`${icon('layers')}<button data-action="overview">知识地图</button>${state.focus?`${icon('chevron-right')}<strong>${groupOf(state.focus).title}</strong>`:`<span style="color:#b5c2cd">/</span><strong>全景视图</strong>`}`;
 updateTransform();renderMinimap();
}
function updateTransform(){const m=state.map;$('#map-transform').setAttribute('transform',`translate(${m.x},${m.y}) scale(${m.scale})`);$('#zoom-label').textContent=Math.round(m.scale*100)+'%';renderMinimap();}
function fitMap(){
 if(state.route!=='map')return;const el=$('#canvas-wrap'),w=el.clientWidth,h=el.clientHeight,b=state.map.bounds;if(!b||!w)return;
 const m=state.map;
 if(m.compact){
  m.scale=Math.min(1.08,Math.max(.72,(w-20)/b.w));m.x=w/2-(b.x+b.w/2)*m.scale;
  const top=Math.min(...m.nodes.map(n=>n.y-n.h/2));m.y=12-top*m.scale;
  const selected=state.focus?m.nodes.find(n=>n.type==='lesson'&&n.id===state.lesson):null;
  if(selected&&selected.y*m.scale+m.y>h-100)m.y=h*.57-selected.y*m.scale;
 }else{
  m.scale=Math.max(.45,Math.min((w-32)/b.w,(h-36)/b.h,1.22));m.x=w/2-(b.x+b.w/2)*m.scale;m.y=h/2-(b.y+b.h/2)*m.scale;
 }
 updateTransform();
}
function zoomBy(f,cx,cy){const m=state.map,r=$('#canvas-wrap').getBoundingClientRect();cx??=r.width/2;cy??=r.height/2;const ns=Math.max(.4,Math.min(2.1,m.scale*f));const ratio=ns/m.scale;m.x=cx-(cx-m.x)*ratio;m.y=cy-(cy-m.y)*ratio;m.scale=ns;updateTransform();}
function renderMinimap(){
 const svg=$('#minimap'),m=state.map,b=m.bounds;if(!b)return;svg.setAttribute('viewBox',`${b.x} ${b.y} ${b.w} ${b.h}`);
 const w=$('#canvas-wrap').clientWidth,h=$('#canvas-wrap').clientHeight;
 const vx=-m.x/m.scale,vy=-m.y/m.scale,vw=w/m.scale,vh=h/m.scale;
 const bx=Math.max(b.x,vx),by=Math.max(b.y,vy),br=Math.min(b.x+b.w,vx+vw),bb=Math.min(b.y+b.h,vy+vh);
 svg.innerHTML=m.edges.map(e=>`<path d="${edgePath(e)}" fill="none" stroke="#c9d6e0" stroke-width="5"/>`).join('')+m.nodes.map(n=>`<rect x="${n.x-n.w/2}" y="${n.y-n.h/2}" width="${n.w}" height="${n.h}" rx="10" fill="${n.type==='root'?'#718aa0':'#e0e7ee'}"/>`).join('')+(br>bx&&bb>by?`<rect x="${bx}" y="${by}" width="${br-bx}" height="${bb-by}" rx="10" fill="#718aa010" stroke="#8a9eb0" stroke-width="5"/>`:'');
}
function relatedHtml(l){return `<div class="related-box"><div class="related-label">相关知识点</div><div class="related-pills">${l.related.map(id=>`<button class="related-pill" data-lesson="${id}">${byId(id).title}</button>`).join('')}</div></div>`;}
function renderLesson(){
 const l=byId(state.lesson),g=groupOf(l.g);$('#lesson-panel').innerHTML=`<div class="lesson-head"><div class="lesson-topline"><div class="topic-label">${g.title}<span class="level-badge">${l.level}</span></div><div class="lesson-tools"><button class="icon-button ${data.bookmarks.includes(l.id)?'bookmarked':''}" data-action="bookmark" aria-label="${data.bookmarks.includes(l.id)?'取消收藏':'收藏知识点'}" title="收藏知识点">${icon('bookmark')}</button><button class="icon-button" data-action="note" aria-label="写学习笔记" title="写学习笔记">${icon('note')}</button><button class="icon-button" data-action="reader" aria-label="展开完整讲解" title="展开完整讲解">${icon('expand')}</button><button class="icon-button panel-close" data-action="close-panel" aria-label="关闭讲解">${icon('close')}</button></div></div><h2>${esc(l.title)}</h2><div class="lesson-english">${esc(l.en)}</div><p class="lesson-take">${esc(l.take)}</p></div><div class="lesson-tabs" role="tablist" aria-label="学习内容">${[['learn','讲解',''],['examples','例句','2'],['quiz','练习','3']].map(([id,t,n])=>`<button role="tab" id="tab-${id}" aria-selected="${state.tab===id}" aria-controls="lesson-tab-content" tabindex="${state.tab===id?0:-1}" data-tab="${id}" class="${state.tab===id?'active':''}">${t}${n?`<span class="tab-count">${n}</span>`:''}</button>`).join('')}</div><div class="lesson-content" id="lesson-tab-content" role="tabpanel" aria-labelledby="tab-${state.tab}">${state.tab==='learn'?lessonExplanation(l):state.tab==='examples'?lessonExamples(l):lessonQuiz(l)}</div><div class="lesson-footer"><span>${icon(mastered(l)?'check':'sprout')}${mastered(l)?'已掌握':`已答对 ${correctCount(l)} / 3 题${data.read.includes(l.id)?' · 已读':''}`}</span><button class="${data.read.includes(l.id)?'secondary-button':'primary-button'}" data-action="mark-read">${data.read.includes(l.id)?'已读 ✓':'标记已读'}</button></div>`;
}
function lessonExplanation(l){return `<div class="formula-box"><div class="formula-label">${icon('frame')} 结构</div><div class="formula">${esc(l.formula)}</div></div><div class="section-kicker"><span>讲解</span><small>${String(state.step+1).padStart(2,'0')} / 04</small></div>${l.steps.map((s,i)=>`<div class="step ${state.step===i?'open':''}"><button class="step-trigger" data-step="${i}" aria-expanded="${state.step===i}" aria-controls="step-body-${i}"><span class="step-number">${String(i+1).padStart(2,'0')}</span><span class="step-title">${esc(s.h)}</span>${icon('chevron-down')}</button><div class="step-body" id="step-body-${i}" ${state.step!==i?'hidden':''}>${esc(s.t)}<button class="step-next" ${i<3?`data-step="${i+1}"`:'data-tab="examples"'}>${i<3?'下一步':'查看例句'} ${icon('arrow-right')}</button></div></div>`).join('')}<button class="lesson-source" data-action="sources">教材索引：${esc(l.source)} ${icon('arrow-up-right')}</button>${relatedHtml(l)}`;}
function lessonExamples(l){return `<div class="section-kicker"><span>例句</span><small>点击单词朗读</small></div>${l.examples.map((e,i)=>`<article class="example-card"><div class="example-number">EXAMPLE 0${i+1}<button class="icon-button" data-speak="${i}" aria-label="朗读第${i+1}个例句">${icon('sound')}</button></div><div class="example-en">${e.en.split(' ').map(w=>`<button class="word-button" data-word="${esc(w.replace(/[.,!?;:]/g,''))}" aria-label="朗读 ${esc(w)}">${esc(w)}</button>`).join(' ')}</div><div class="example-zh">${esc(e.zh)}</div><div class="example-actions"><button data-example="${i}" aria-expanded="${state.exampleOpen.has(i)}">${icon('frame')}${state.exampleOpen.has(i)?'收起句子分析':'查看分析'}</button><button data-speak="${i}">${icon('play')}整句朗读</button></div>${state.exampleOpen.has(i)?`<p class="example-note">${esc(e.note)}</p>`:''}</article>`).join('')}<div class="speed-control"><span>朗读速度</span><select id="speech-speed" aria-label="朗读速度"><option value="0.8">慢速 · 0.8×</option><option value="1">常速 · 1×</option></select></div><p class="tiny-help" style="margin-top:10px">朗读使用设备提供的英语语音。没有可用语音时，仍可正常阅读和练习。</p><button class="primary-button wide-button" data-tab="quiz">做练习 ${icon('arrow-right')}</button>${relatedHtml(l)}`;}
function qAnswer(q){return q.type==='mc'?q.options[q.answer]:q.answer.join(' / ');}
function questionMarkup(q,session=false){
 const submitted=!!state.feedback;
 return `<div class="quiz-prompt">${esc(q.prompt)}</div>${q.type==='mc'?`<div class="quiz-options" role="radiogroup" aria-label="选择答案">${q.options.map((o,i)=>`<button role="radio" aria-checked="${state.choice===i}" class="quiz-option ${state.choice===i?'selected':''} ${submitted&&i===q.answer?'correct':''} ${submitted&&!state.feedback.ok&&state.choice===i?'wrong':''}" data-choice="${i}" ${submitted?'disabled':''}><span class="option-letter">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>`:`<input class="quiz-input" id="quiz-answer" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="输入你的答案，再提交核对" aria-label="填空答案" value="${esc(state.answer)}" ${submitted?'disabled':''}>`}${submitted?`<div class="quiz-feedback ${state.feedback.ok?'':'wrong'}" role="status"><h4>${state.feedback.ok?'答对了，理解又扎实了一点。':'记住这个关系，再来一次就好。'}</h4>${!state.feedback.ok?`<div class="correct-answer">正确答案：${esc(qAnswer(q))}</div>`:''}<p>${esc(q.why)}</p></div><button class="primary-button quiz-submit" data-action="${session?'session-next':'quiz-next'}">${session?(state.session.index===state.session.items.length-1?'查看本轮结果':'下一题'):(state.quizIndex===2?'看看练习结果':'下一题')} ${icon('arrow-right')}</button>`:`<button class="primary-button quiz-submit" data-action="submit-answer" ${q.type==='mc'&&state.choice===null||q.type==='fill'&&!state.answer.trim()?'disabled':''}>提交答案 ${icon('check')}</button>`}`;
}
function lessonQuiz(l){
 if(state.quizIndex>=l.quiz.length){const n=state.lessonResults.filter(Boolean).length;return `<div class="quiz-result"><div class="result-symbol">${icon(n===3?'check':'sprout')}</div><h3>这一轮，答对了 ${n} / 3 题</h3><p>${n===3?'本轮全部答对。':'错题已收进练习中心，可以回看讲解后再练。'}</p><div class="result-actions"><button class="primary-button" data-action="retry-lesson">再练一遍 ${icon('refresh')}</button><button class="secondary-button" data-action="next-lesson">下一个知识点 ${icon('arrow-right')}</button></div></div>${relatedHtml(l)}`;}
 return `<div class="quiz-meta"><span>即时练习 · ${state.quizIndex+1} / 3</span><div class="quiz-dots">${l.quiz.map((q,i)=>`<i class="${i===state.quizIndex?'active':i<state.quizIndex?'done':''}"></i>`).join('')}</div></div>${questionMarkup(l.quiz[state.quizIndex])}<button class="text-button" style="margin-top:16px" data-action="reader">回看完整讲解 ${icon('arrow-up-right')}</button>`;
}
function currentQuestion(){if(state.route==='practice'&&state.session&&!state.session.done)return state.session.items[state.session.index].q;return byId(state.lesson).quiz[state.quizIndex];}
function normalize(v){return v.normalize('NFKC').trim().toLowerCase().replace(/[’‘]/g,"'").replace(/[.!?。！？]+$/g,'').replace(/\s+/g,' ');}
function submitAnswer(){
 const q=currentQuestion();if(!q||state.feedback)return;if(q.type==='mc'&&state.choice===null||q.type==='fill'&&!state.answer.trim())return;
 const ok=q.type==='mc'?state.choice===q.answer:q.answer.some(a=>normalize(a)===normalize(state.answer));
 const lid=state.route==='practice'&&state.session?state.session.items[state.session.index].lid:state.lesson;
 data.attempts++;if(ok){data.right++;data.correct[q.id]=true;delete data.mistakes[q.id];}else{delete data.correct[q.id];data.mistakes[q.id]={lid,qid:q.id,answer:q.type==='mc'?q.options[state.choice]:state.answer,at:Date.now()};}
 state.feedback={ok};if(state.route==='practice'&&state.session)state.session.results.push({qid:q.id,lid,ok,answer:q.type==='mc'?q.options[state.choice]:state.answer});else state.lessonResults[state.quizIndex]=ok;
 save();renderSidebar();if(state.route==='practice')renderPractice();else{renderLesson();renderMap();}requestAnimationFrame(()=>$('.quiz-feedback')?.scrollIntoView({behavior:'smooth',block:'nearest'}));
}
function changeTab(tab){state.tab=tab;renderLesson();}
function renderPath(){
 const next=lessons.find(l=>!mastered(l))||lessons[0];
 $('#path-page').innerHTML=`<div class="page-full-heading"><h1>学习路径</h1></div><div class="path-intro"><div><small>下一知识点</small><h3>${esc(next.title)}</h3></div><button class="primary-button" data-lesson="${next.id}">继续学习 ${icon('arrow-right')}</button></div><div class="path-grid">${groups.map((g,i)=>`<article class="path-card"><div class="path-card-heading"><span class="path-index">${String(i+1).padStart(2,'0')}</span><div><h2>${g.title}</h2></div></div><p>${g.ids.length} 个知识点 · 已掌握 ${g.ids.filter(id=>mastered(byId(id))).length}/${g.ids.length}</p>${g.ids.map(id=>`<button class="path-lesson" data-lesson="${id}"><i class="dot ${status(byId(id))}"></i>${byId(id).title}${icon(mastered(byId(id))?'check':'arrow-right')}</button>`).join('')}</article>`).join('')}</div>`;
}
function questionPool(g='all',level='all'){return lessons.filter(l=>(g==='all'||l.g===g)&&(level==='all'||l.level===level)).flatMap(l=>l.quiz.map(q=>({lid:l.id,q})));}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function startSession(mode='mixed',lid){
 let pool;if(mode==='mistakes'){pool=Object.values(data.mistakes).filter(m=>!lid||m.lid===lid).map(m=>({lid:m.lid,q:byId(m.lid)?.quiz.find(q=>q.id===m.qid)})).filter(x=>x.q);}else{pool=questionPool($('#practice-group')?.value||'all',$('#practice-level')?.value||'all');}
 const count=mode==='mistakes'?Math.min(pool.length,20):Math.min(Number($('#practice-count')?.value||10),pool.length);
 if(!count){toast(mode==='mistakes'?'目前没有需要重练的错题。':'这个范围暂时没有题目，请换一个条件。');return;}
 state.session={mode,items:shuffle(pool).slice(0,count),index:0,results:[],done:false};state.choice=null;state.answer='';state.feedback=null;closeModal();if(state.route!=='practice')setRoute('practice');else renderPractice();window.scrollTo({top:0,behavior:'smooth'});
}
function renderPractice(){
 const el=$('#practice-page');if(state.session){renderSession(el);return;}
 const mistakes=Object.values(data.mistakes), ml=[...new Set(mistakes.map(m=>m.lid))];
 el.innerHTML=`<div class="page-full-heading"><h1>练习中心</h1></div><div class="practice-stats"><div class="stat-card"><span class="stat-card-label">已做题次</span><div class="stat-card-value">${data.attempts}</div></div><div class="stat-card"><span class="stat-card-label">累计正确率</span><div class="stat-card-value">${data.attempts?Math.round(data.right/data.attempts*100):0}<span style="font-size:15px">%</span></div></div><div class="stat-card"><span class="stat-card-label">待复习错题</span><div class="stat-card-value">${mistakes.length}</div></div></div><div class="practice-grid"><section class="practice-config"><h2>专项练习</h2><p>${totals.questions} 道题 · 选择题 / 填空题</p><div class="practice-fields"><label>选择主题<select id="practice-group"><option value="all">全部语法主题</option>${groups.map(g=>`<option value="${g.id}">${g.title}</option>`).join('')}</select></label><label>练习深度<select id="practice-level"><option value="all">基础 + 进阶</option><option value="基础">基础巩固</option><option value="进阶">进阶理解</option></select></label><label>题目数量<select id="practice-count"><option value="5">5 题</option><option value="10" selected>10 题</option><option value="15">15 题</option></select></label></div><button class="primary-button" data-action="start-practice">开始练习 ${icon('arrow-right')}</button></section><section class="mistake-overview"><h2>错题</h2>${ml.length?ml.map(id=>{const l=byId(id),n=mistakes.filter(m=>m.lid===id).length;return `<div class="mistake-row"><span class="mistake-count">${n}</span><div><strong>${esc(l.title)}</strong><small>${groupOf(l.g).title}</small></div><button class="text-button" data-review="${id}">重练 ${icon('arrow-right')}</button></div>`;}).join('')+`<button class="secondary-button wide-button" style="margin-top:18px" data-action="review-mistakes">重练全部错题 ${icon('refresh')}</button>`:`<div class="empty-state">暂无错题</div>`}</section></div>`;
}
function renderSession(el){
 const s=state.session;
 if(s.done){const n=s.results.filter(r=>r.ok).length;el.innerHTML=`<div class="session-card"><div class="quiz-result"><div class="result-symbol">${icon(n===s.items.length?'check':'sprout')}</div><h3>练习完成</h3><p>答对 <strong>${n} / ${s.items.length}</strong> 题 · ${Math.round(n/s.items.length*100)}%<br>${s.results.some(r=>!r.ok)?'可在下方查看错题解析。':'本轮全部答对。'}</p><div class="result-actions"><button class="primary-button" data-action="end-session">回到练习中心 ${icon('arrow-right')}</button>${Object.keys(data.mistakes).length?'<button class="secondary-button" data-action="review-mistakes">重练错题</button>':''}</div><div class="session-review">${s.results.filter(r=>!r.ok).map(r=>{const l=byId(r.lid),q=l.quiz.find(q=>q.id===r.qid);return `<div class="review-row"><strong>${esc(l.title)}</strong><p>${esc(q.prompt)}</p><small>你的答案：${esc(r.answer)} · 正确答案：${esc(qAnswer(q))}</small><p>${esc(q.why)}</p><button class="text-button" data-lesson="${l.id}">回看知识点 ${icon('arrow-up-right')}</button></div>`;}).join('')}</div></div></div>`;return;}
 const item=s.items[s.index],l=byId(item.lid);el.innerHTML=`<div class="session-card"><div class="session-heading"><span>${s.mode==='mistakes'?'错题重练':'本轮练习'} · ${groupOf(l.g).title}</span><button class="text-button" data-action="end-session">结束本轮 ${icon('close')}</button></div><div class="session-progress"><i style="width:${s.index/s.items.length*100}%"></i></div><div class="quiz-meta"><span>${esc(l.title)}</span><span>${s.index+1} / ${s.items.length}</span></div>${questionMarkup(item.q,true)}<button class="text-button" style="margin-top:20px" data-reader="${l.id}">回看本题讲解 ${icon('arrow-up-right')}</button></div>`;
}
function modal(title,body,cls=''){
 previousFocus=document.activeElement;state.modal=title;$('#modal-root').innerHTML=`<div class="modal-backdrop"><section class="modal ${cls}" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="modal-heading"><h2>${esc(title)}</h2><button class="icon-button" data-action="close-modal" aria-label="关闭弹窗">${icon('close')}</button></div><div class="modal-body">${body}</div></section></div>`;document.body.style.overflow='hidden';setTimeout(()=>$('#modal-root textarea, #modal-root input, #modal-root button')?.focus(),0);
}
function closeModal(){if(!state.modal)return;$('#modal-root').innerHTML='';state.modal=null;syncBodyLock();if(previousFocus?.isConnected)previousFocus.focus();}
function searchModal(){previousFocus=document.activeElement;state.modal='search';$('#modal-root').innerHTML=`<div class="modal-backdrop"><section class="modal search-modal" role="dialog" aria-modal="true" aria-label="搜索语法知识点"><div class="search-input-row">${icon('search')}<input id="knowledge-search" type="search" placeholder="想弄懂什么？试试「that」「完成时」" aria-label="搜索知识点"><button class="icon-button" data-action="close-modal" aria-label="关闭搜索">${icon('close')}</button></div><div class="search-results" id="search-results"></div><div class="search-foot"><span>搜索中文名称、英文名称、结构与讲解</span><span>Esc 关闭</span></div></section></div>`;document.body.style.overflow='hidden';renderSearch('');setTimeout(()=>$('#knowledge-search').focus(),0);}
function renderSearch(query){const tokens=query.trim().toLowerCase().split(/\s+/).filter(Boolean);const list=lessons.filter(l=>tokens.every(t=>(l.title+' '+l.en+' '+l.formula+' '+l.take+' '+l.steps.map(s=>s.h+' '+s.t).join(' ')).toLowerCase().includes(t))).sort((a,b)=>{const score=l=>tokens.reduce((n,t)=>n+(l.title.toLowerCase().includes(t)?10:0)+(l.en.toLowerCase().includes(t)?5:0),0);return score(b)-score(a);});$('#search-results').innerHTML=(query?list.slice(0,30):[byId('present'),byId('future-time'),byId('prep-to'),byId('objects'),byId('relative-pronouns'),byId('participles')]).map(l=>{const g=groupOf(l.g);return `<button class="search-result" data-lesson="${l.id}"><span class="node-symbol" style="--node-color:${g.color}">${icon(g.icon)}</span><span><strong>${esc(l.title)}</strong><small>${g.title} · ${esc(l.en)}</small></span>${icon('arrow-right')}</button>`;}).join('')||'<div class="empty-state">暂时没找到，换一个关键词试试。</div>';}
function showSources(){const l=byId(state.lesson);modal('教材索引与内容说明',`<p>以 Grammar in Use 初级、中级、高级教材主题为知识框架，重组为 ${totals.groups} 个主题、${totals.lessons} 个核心知识点。</p><div class="source-reference">当前知识点：${esc(l.title)}<br>${esc(l.source)}</div>${books.map(b=>`<div class="book-source"><small>${esc(b.edition)}</small><h3>${esc(b.name)}</h3><p>${esc(b.note)}</p></div>`).join('')}<div class="source-note">本网站是按教材主题重新组织的学习版。中文讲解、${totals.examples} 个例句和 ${totals.questions} 道练习均为新编；部分主语、表语、同位语等内容按常见中文语法分类归纳，索引已注明重组。练习属于知识巩固题。</div>`);}
function showReader(id=state.lesson){const l=byId(id);modal(l.title,`<div class="reader-title-en">${esc(l.en)}</div><div class="formula-box"><div class="formula-label">结构</div><div class="formula">${esc(l.formula)}</div></div>${l.steps.map((s,i)=>`<div class="reader-step"><h3>${String(i+1).padStart(2,'0')} · ${esc(s.h)}</h3><p>${esc(s.t)}</p></div>`).join('')}<div class="reader-examples">${l.examples.map(e=>`<div class="reader-example"><strong>${esc(e.en)}</strong><p>${esc(e.zh)}</p><small>${esc(e.note)}</small></div>`).join('')}</div><div class="source-note">教材索引：${esc(l.source)}</div>`, 'reader-modal');}
function showNote(){const l=byId(state.lesson);modal('学习笔记',`<p>${esc(l.title)}</p><textarea id="lesson-note" maxlength="10000" placeholder="记录要点或例句…">${esc(data.notes[l.id]||'')}</textarea><div class="note-actions"><button class="secondary-button" data-action="close-modal">取消</button><button class="primary-button" data-action="save-note">保存笔记 ${icon('check')}</button></div>`);}
function showNotebook(tab=state.notebookTab){state.notebookTab=tab;const list=tab==='bookmarks'?lessons.filter(l=>data.bookmarks.includes(l.id)):lessons.filter(l=>data.notes[l.id]?.trim());modal('收藏与笔记',`<div class="notebook-tabs"><button data-notebook-tab="bookmarks" class="${tab==='bookmarks'?'active':''}">收藏 ${data.bookmarks.length}</button><button data-notebook-tab="notes" class="${tab==='notes'?'active':''}">笔记 ${Object.values(data.notes).filter(n=>n.trim()).length}</button></div>${list.length?list.map(l=>`<div class="note-row"><div><h3>${esc(l.title)}</h3><small>${groupOf(l.g).title}</small>${tab==='notes'?`<p>${esc(data.notes[l.id])}</p>`:''}</div><button class="text-button" data-lesson="${l.id}">继续学习 ${icon('arrow-right')}</button></div>`).join(''):`<div class="empty-state">${icon(tab==='notes'?'note':'bookmark')}<strong>${tab==='notes'?'暂无笔记':'暂无收藏'}</strong></div>`}`);}
function showProgress(){const c=counts();modal('学习进度',`<div class="progress-ring" style="--progress:${Math.round(c.mastered/totals.lessons*100)}%"><span>${Math.round(c.mastered/totals.lessons*100)}%</span></div><div class="progress-summary"><strong>${c.mastered} / ${totals.lessons}</strong> 个知识点已掌握<br>读懂讲解，并答对该知识点全部 3 题，记为已掌握。</div>${groups.map(g=>{const n=g.ids.filter(id=>mastered(byId(id))).length;return `<div class="progress-group"><span>${g.title}</span><div><i style="width:${n/g.ids.length*100}%"></i></div><small>${n}/${g.ids.length}</small></div>`;}).join('')}<div class="backup-actions"><button class="secondary-button" data-action="export-progress">${icon('download')}导出进度备份</button><button class="secondary-button" data-action="import-progress">${icon('upload')}导入备份</button></div><input id="import-file" type="file" accept="application/json,.json" hidden><p class="backup-note">进度、错题、收藏和笔记保存在当前浏览器。换设备或清理浏览器前，可以导出备份。导入会合并已读、答对记录、收藏和笔记；相同知识点的笔记优先保留当前内容。</p>`);}
function showHelp(){modal('导图操作',`<div class="help-list"><div>${icon('branch')}<span><strong>主题与知识点</strong><small>点击任一主题展开知识点，点击知识点看讲解。用“返回全景”回到主题之间的关系。</small></span></div><div>${icon('mouse')}<span><strong>平移与缩放</strong><small>拖动画布空白处平移，鼠标滚轮或双指手势缩放。右下角可缩放、自动适应；左下角缩略图可定位。手机会改成纵向分支，横竖屏切换时自动重排。</small></span></div><div>${icon('sliders')}<span><strong>显示设置</strong><small>默认节点大小 100%、分支间距 100%、柔和曲线；设置里可以调整。布局会为每个知识点保留间距。</small></span></div><div>${icon('keyboard')}<span><strong>键盘操作</strong><small>⌘/Ctrl + K 搜索，Esc 关闭弹窗或讲解；画布聚焦时，+ / − 缩放，0 适应视野，方向键平移。Tab 可依次访问节点。</small></span></div></div>`);}
function speak(t,rate){if(!('speechSynthesis' in window)){toast('这个浏览器没有提供语音朗读。');return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-GB';u.rate=rate??Number($('#speech-speed')?.value||.8);const voices=speechSynthesis.getVoices();const voice=voices.find(v=>v.lang==='en-GB')||voices.find(v=>v.lang.startsWith('en'));if(voice)u.voice=voice;u.onerror=()=>toast('暂时没有可用语音，请检查设备语音设置。');speechSynthesis.speak(u);}
function exportProgress(){const blob=new Blob([JSON.stringify({app:'grammar-atlas',exportedAt:new Date().toISOString(),progress:data},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='grammar-atlas-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('进度备份已导出。');}
async function importProgress(file){
 if(!file)return;try{if(file.size>5e6)throw Error();const v=JSON.parse(await file.text()),p=v.progress;
 if(v.app!=='grammar-atlas'||!p||p.schema!==1||!Array.isArray(p.read)||!Array.isArray(p.bookmarks)||typeof p.correct!=='object'||typeof p.notes!=='object'||!Number.isSafeInteger(p.attempts)||!Number.isSafeInteger(p.right)||p.attempts<0||p.right<0||p.right>p.attempts)throw Error();
 data.read=[...new Set([...data.read,...p.read.filter(id=>byId(id))])];data.bookmarks=[...new Set([...data.bookmarks,...p.bookmarks.filter(id=>byId(id))])];
 const allQ=questionPool(),validQ=new Set(allQ.map(x=>x.q.id));for(const [k,v]of Object.entries(p.correct||{}))if(validQ.has(k)&&v===true){data.correct[k]=true;delete data.mistakes[k];}
 for(const [k,v]of Object.entries(p.notes||{}))if(byId(k)&&typeof v==='string'&&v.length<=10000&&!data.notes[k]?.trim())data.notes[k]=v;
 for(const [k,v]of Object.entries(normalizeMistakes(p.mistakes)))if(validQ.has(k)&&!data.mistakes[k]&&!data.correct[k])data.mistakes[k]={lid:v.lid,qid:k,answer:String(v.answer??'').slice(0,500),at:Number(v.at)||Date.now()};
 // Snapshots are merged by maxima so importing the same backup is idempotent.
 data.attempts=Math.max(data.attempts,p.attempts);data.right=Math.min(data.attempts,Math.max(data.right,p.right));save();renderSidebar();renderMap();renderLesson();showProgress();toast('备份已合并，学习记录保留好了。');
 }catch{toast('这份文件不是有效的语法漫游进度备份。');}
}
const actions={
 search:searchModal,sources:showSources,notebook:()=>showNotebook(),progress:showProgress,reader:()=>showReader(),note:showNote,'close-modal':closeModal,'close-panel':closePanel,
 'resume-lesson':()=>{if(deviceLayout()!=='desktop')showLessonPanel();else $('#lesson-panel').focus();},
 menu:toggleSidebar,
 overview,
 'map-help':showHelp,
 'view-settings':()=>{$('#view-settings').hidden=!$('#view-settings').hidden;},
 fullscreen:()=>{$('#map-card').classList.toggle('is-fullscreen');$('#map-card [data-action="fullscreen"]').setAttribute('aria-label',$('#map-card').classList.contains('is-fullscreen')?'退出专注导图':'放大导图');requestAnimationFrame(fitMap);},
 'zoom-in':()=>zoomBy(1.18),'zoom-out':()=>zoomBy(1/1.18),fit:fitMap,
 'reset-view':()=>{data.view={size:100,space:100,line:'curve'};syncViewSettings();save();renderMap();fitMap();toast('已恢复默认设置。');},
 bookmark:()=>{const id=state.lesson;data.bookmarks=data.bookmarks.includes(id)?data.bookmarks.filter(x=>x!==id):[...data.bookmarks,id];save();renderLesson();toast(data.bookmarks.includes(id)?'已加入你的语法小本子。':'已取消收藏。');},
 'mark-read':()=>{const id=state.lesson;if(!data.read.includes(id)){data.read.push(id);save();renderLesson();renderSidebar();renderMap();toast(mastered(byId(id))?'已掌握该知识点。':'已标记为已读。');}else toast('该知识点已标记为已读。');},
 'save-note':()=>{const t=$('#lesson-note').value.trim();if(t)data.notes[state.lesson]=t;else delete data.notes[state.lesson];save();closeModal();toast(t?'笔记已经保存。':'这条笔记已清空。');},
 'submit-answer':submitAnswer,
 'quiz-next':()=>{state.quizIndex++;state.choice=null;state.answer='';state.feedback=null;renderLesson();},
 'retry-lesson':()=>{state.quizIndex=0;state.choice=null;state.answer='';state.feedback=null;state.lessonResults=[];renderLesson();},
 'next-lesson':()=>{const idx=lessons.findIndex(l=>l.id===state.lesson);openLesson(lessons[(idx+1)%lessons.length].id);},
 'start-practice':()=>startSession(),
 'review-mistakes':()=>startSession('mistakes'),
 'session-next':()=>{state.session.index++;state.session.done=state.session.index>=state.session.items.length;state.choice=null;state.answer='';state.feedback=null;renderPractice();window.scrollTo({top:0,behavior:'smooth'});},
 'end-session':()=>{state.session=null;state.choice=null;state.answer='';state.feedback=null;renderPractice();},
 'export-progress':exportProgress,
 'import-progress':()=>$('#import-file').click()
};
document.addEventListener('click',e=>{
 const node=e.target.closest('[data-node]');if(node){if(Date.now()<suppressNodeClickUntil){e.preventDefault();return;}const v=node.dataset.node;if(v==='root')overview();else if(v.startsWith('g:'))selectGroup(v.slice(2));else openLesson(v.slice(2));return;}
 const action=e.target.closest('[data-action]');if(action){actions[action.dataset.action]?.();if(action.dataset.action==='close-panel')$('#sidebar').classList.remove('open');return;}
 const route=e.target.closest('[data-route]');if(route){setRoute(route.dataset.route);return;}
 const group=e.target.closest('[data-group]');if(group){selectGroup(group.dataset.group);return;}
 const lesson=e.target.closest('[data-lesson]');if(lesson){openLesson(lesson.dataset.lesson);return;}
 const tab=e.target.closest('[data-tab]');if(tab){changeTab(tab.dataset.tab);return;}
 const step=e.target.closest('[data-step]');if(step){state.step=Number(step.dataset.step);renderLesson();return;}
 const example=e.target.closest('[data-example]');if(example){const i=Number(example.dataset.example);if(state.exampleOpen.has(i))state.exampleOpen.delete(i);else state.exampleOpen.add(i);renderLesson();return;}
 const read=e.target.closest('[data-reader]');if(read){showReader(read.dataset.reader);return;}
 const sp=e.target.closest('[data-speak]');if(sp){speak(byId(state.lesson).examples[Number(sp.dataset.speak)].en);return;}
 const word=e.target.closest('[data-word]');if(word){speak(word.dataset.word,.85);return;}
 const choice=e.target.closest('[data-choice]');if(choice&&!state.feedback){state.choice=Number(choice.dataset.choice);if(state.route==='practice')renderPractice();else renderLesson();$(`[data-choice="${state.choice}"]`)?.focus({preventScroll:true});return;}
 const review=e.target.closest('[data-review]');if(review){startSession('mistakes',review.dataset.review);return;}
 const notebookTab=e.target.closest('[data-notebook-tab]');if(notebookTab){showNotebook(notebookTab.dataset.notebookTab);return;}
 if(e.target.classList.contains('modal-backdrop'))closeModal();
 if(!e.target.closest('#view-settings')&&!e.target.closest('[data-action="view-settings"]'))$('#view-settings').hidden=true;
});
document.addEventListener('input',e=>{
 if(e.target.id==='knowledge-search')renderSearch(e.target.value);
 if(e.target.id==='quiz-answer'){state.answer=e.target.value;const b=$('[data-action="submit-answer"]');if(b)b.disabled=!state.answer.trim();}
 if(e.target.id==='node-size'||e.target.id==='branch-space'){
  data.view[e.target.id==='node-size'?'size':'space']=Number(e.target.value);syncViewSettings();save();renderMap();fitMap();
 }
});
document.addEventListener('change',e=>{if(e.target.id==='line-style'){data.view.line=e.target.value;save();renderMap();}if(e.target.id==='import-file')importProgress(e.target.files[0]);});
function syncViewSettings(){$('#node-size').value=data.view.size;$('#branch-space').value=data.view.space;$('#line-style').value=data.view.line;$('#size-value').value=data.view.size+'%';$('#space-value').value=data.view.space+'%';}
const pointers=new Map();let drag=null,pinch=null,gesture=null,suppressNodeClickUntil=0;
const svg=$('#mindmap');
svg.addEventListener('wheel',e=>{e.preventDefault();const r=svg.getBoundingClientRect();zoomBy(Math.exp(-e.deltaY*.0016),e.clientX-r.left,e.clientY-r.top);},{passive:false});
svg.addEventListener('pointerdown',e=>{
 if(e.target.closest('[data-node]')&&e.pointerType==='mouse')return;
 pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});gesture??={x:e.clientX,y:e.clientY};if(!e.target.closest('[data-node]'))svg.setPointerCapture(e.pointerId);
 if(pointers.size===1){drag={x:e.clientX,y:e.clientY,px:state.map.x,py:state.map.y};svg.classList.add('dragging');}
 if(pointers.size===2){suppressNodeClickUntil=Date.now()+600;const a=[...pointers.values()];pinch={distance:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)};drag=null;}
});
svg.addEventListener('pointermove',e=>{
 if(!pointers.has(e.pointerId))return;if(gesture&&Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>7){if(e.pointerType!=='mouse')suppressNodeClickUntil=Date.now()+600;try{svg.setPointerCapture(e.pointerId);}catch{}}pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
 if(pointers.size===2&&pinch){const a=[...pointers.values()],dist=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),r=svg.getBoundingClientRect();if(pinch.distance>1)zoomBy(dist/pinch.distance,(a[0].x+a[1].x)/2-r.left,(a[0].y+a[1].y)/2-r.top);pinch.distance=dist;}
 else if(drag){state.map.x=drag.px+e.clientX-drag.x;state.map.y=drag.py+e.clientY-drag.y;updateTransform();}
});
function pointerEnd(e){pointers.delete(e.pointerId);if(!pointers.size)gesture=null;if(pointers.size===1){const a=[...pointers.values()][0];drag={x:a.x,y:a.y,px:state.map.x,py:state.map.y};}else drag=null;pinch=null;if(!pointers.size)svg.classList.remove('dragging');}
svg.addEventListener('pointerup',pointerEnd);svg.addEventListener('pointercancel',pointerEnd);
$('#minimap-button').addEventListener('click',e=>{
 const mini=$('#minimap'),p=mini.createSVGPoint();p.x=e.clientX;p.y=e.clientY;const t=p.matrixTransform(mini.getScreenCTM().inverse());state.map.x=svg.clientWidth/2-t.x*state.map.scale;state.map.y=svg.clientHeight/2-t.y*state.map.scale;updateTransform();
});
document.addEventListener('keydown',e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();searchModal();return;}
 if(e.key==='Escape'){
  if(state.modal)closeModal();else if($('#map-card').classList.contains('is-fullscreen')){actions.fullscreen();}else if($('#lesson-panel').classList.contains('open'))closePanel();else if(!$('#view-settings').hidden)$('#view-settings').hidden=true;else if(deviceLayout()==='tablet'&&state.tabletSidebarExpanded){state.tabletSidebarExpanded=false;syncBodyLock();$('.mobile-menu').focus({preventScroll:true});}else{$('#sidebar').classList.remove('open');closePanel();$('.mobile-menu').focus({preventScroll:true});}return;
 }
 if(!state.modal&&e.key==='Tab'&&($('#lesson-panel').classList.contains('open')||$('#sidebar').classList.contains('open'))){const root=$('#lesson-panel').classList.contains('open')?$('#lesson-panel'):$('#sidebar'),items=[...root.querySelectorAll('button:not(:disabled),input,textarea,select')].filter(el=>el.getClientRects().length);const first=items[0],last=items.at(-1);if(!root.contains(document.activeElement)){e.preventDefault();first?.focus();}else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}return;}
 if(state.modal&&e.key==='Tab'){
  const focusable=[...$('#modal-root').querySelectorAll('button:not(:disabled),a,input:not([hidden]),textarea,select,[tabindex="0"]')];const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}return;
 }
 if(e.target.id==='quiz-answer'&&e.key==='Enter'){e.preventDefault();submitAnswer();return;}
 if(e.target.id==='knowledge-search'&&e.key==='ArrowDown'){e.preventDefault();$('.search-result')?.focus();return;}
 if(e.target.closest('.search-results')&&['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();const r=$$('.search-result'),i=r.indexOf(document.activeElement);r[(i+(e.key==='ArrowDown'?1:-1)+r.length)%r.length]?.focus();return;}
 if(e.target.closest('.lesson-tabs')&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();const ids=['learn','examples','quiz'],i=ids.indexOf(state.tab);changeTab(ids[(i+(e.key==='ArrowRight'?1:2))%3]);$(`[data-tab="${state.tab}"]`)?.focus();return;}
 if(e.target===svg){if(['+','=','-','0','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))e.preventDefault();if(e.key==='+'||e.key==='=')zoomBy(1.15);if(e.key==='-')zoomBy(1/1.15);if(e.key==='0')fitMap();const delta=45;if(e.key==='ArrowUp')state.map.y+=delta;if(e.key==='ArrowDown')state.map.y-=delta;if(e.key==='ArrowLeft')state.map.x+=delta;if(e.key==='ArrowRight')state.map.x-=delta;updateTransform();}
});
let resizeTimer,lastMapWidth=0,lastMapHeight=0,lastDevice=deviceLayout();
function adaptViewport(){
 const mode=deviceLayout();document.body.dataset.device=mode;if(mode!=='phone')$('#sidebar').classList.remove('open');
 if(mode==='desktop'&&lastDevice!=='desktop')closePanel();
 const w=$('#canvas-wrap').clientWidth,h=$('#canvas-wrap').clientHeight,modeChanged=mode!==lastDevice;lastDevice=mode;
 if(state.route==='map'&&w>0&&h>0&&(modeChanged||Math.abs(w-lastMapWidth)>1||Math.abs(h-lastMapHeight)>1)){lastMapWidth=w;lastMapHeight=h;renderMap();fitMap();}
 syncBodyLock();
}
new ResizeObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(adaptViewport,90);}).observe($('#canvas-wrap'));
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(adaptViewport,110);});
document.addEventListener('focusin',e=>{if(e.target.matches('input:not([type=range]),textarea'))document.body.classList.add('typing');});
document.addEventListener('focusout',()=>setTimeout(()=>{if(!document.activeElement?.matches('input:not([type=range]),textarea'))document.body.classList.remove('typing');},0));
window.addEventListener('hashchange',()=>setRoute(location.hash.slice(1)));
window.addEventListener('pagehide',()=>{if('speechSynthesis'in window)speechSynthesis.cancel();save();});
$$('[data-stat]').forEach(el=>{el.textContent=totals[el.dataset.stat];});
hydrate();syncViewSettings();renderSidebar();renderLesson();setRoute(location.hash.slice(1)||'map');
adaptViewport();
if(storageWarning)setTimeout(()=>toast('当前浏览器的保存功能暂不可用，可以导出进度备份。'),1200);
