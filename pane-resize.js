/* Adjustable diagram/reading split. Preferences stay separate from learning records. */
(() => {
  const KEY='grammar-atlas-pane-size-v1',query=matchMedia('(min-width:768px), (min-width:540px) and (orientation:landscape)');
  let preferences={horizontal:null,vertical:null},open=false,blocked=false,expanded=false,drag=null,frame=0,hooks={},handle;
  try{const raw=JSON.parse(localStorage.getItem(KEY));for(const axis of ['horizontal','vertical'])if(Number.isFinite(raw?.[axis])&&raw[axis]>0&&raw[axis]<1)preferences[axis]=raw[axis];}catch{}
  const axis=()=>query.matches?'horizontal':'vertical';
  function dimensions(){
    const r=document.querySelector('#app').getBoundingClientRect(),horizontal=query.matches,total=horizontal?r.width:r.height;
    const minMap=horizontal?Math.min(280,total*.38):Math.min(160,total*.3),minCard=horizontal?Math.min(360,total*.55):Math.min(300,total*.55);
    const maxCard=Math.max(minCard,total-minMap);
    const initial=horizontal?Math.min(460,total*.4):total*.62;
    const size=Math.max(minCard,Math.min(maxCard,preferences[axis()]===null?initial:preferences[axis()]*total));
    return {r,horizontal,total,minMap,minCard,maxCard,size};
  }
  function persist(){try{localStorage.setItem(KEY,JSON.stringify(preferences));}catch{}}
  function apply(){
    if(!handle)return;
    document.body.classList.toggle('pane-split',open&&!expanded);
    document.body.classList.toggle('card-fullscreen',open&&expanded);
    handle.hidden=!open||expanded||blocked;handle.inert=blocked;
    if(!open||expanded)return;
    const d=dimensions(),mapPercent=Math.round((d.total-d.size)/d.total*100);
    document.body.style.setProperty(d.horizontal?'--pane-card-w':'--pane-card-h',`${d.size}px`);
    handle.setAttribute('aria-orientation',d.horizontal?'vertical':'horizontal');
    handle.setAttribute('aria-label',d.horizontal?'调整图谱与知识讲解的宽度':'调整图谱与知识讲解的高度');
    handle.setAttribute('aria-valuemin',String(Math.round(d.minMap/d.total*100)));
    handle.setAttribute('aria-valuemax',String(Math.round((d.total-d.minCard)/d.total*100)));
    handle.setAttribute('aria-valuenow',String(mapPercent));
    handle.setAttribute('aria-valuetext',`图谱 ${mapPercent}%，知识讲解 ${100-mapPercent}%`);
    handle.title=(d.horizontal?'左右':'上下')+'拖动调整大小；双击恢复默认，也可用方向键调整';
  }
  function update(size){const d=dimensions();preferences[axis()]=Math.max(d.minCard,Math.min(d.maxCard,size))/d.total;apply();}
  function stop(cancel=false){
    if(!drag)return;
    const previous=drag;drag=null;cancelAnimationFrame(frame);frame=0;
    if(cancel)preferences[previous.axis]=previous.preference;
    document.body.classList.remove('pane-resizing');
    try{handle.releasePointerCapture(previous.id);}catch{}
    apply();if(!cancel)persist();hooks.onResize?.();
  }
  function sync(isOpen,isBlocked=false){
    open=isOpen;blocked=isBlocked;
    if(!open||blocked)stop(true);
    if(!open)expanded=false;
    apply();
  }
  function reset(){stop(true);preferences[axis()]=null;persist();apply();hooks.onResize?.();}
  function init(options={}){
    hooks=options;handle=document.querySelector('#pane-resizer');
    handle.addEventListener('pointerdown',e=>{
      if(e.button!==0||drag||!open||blocked||expanded)return;
      e.preventDefault();handle.focus({preventScroll:true});
      const d=dimensions(),coordinate=d.horizontal?e.clientX:e.clientY;
      drag={id:e.pointerId,axis:axis(),preference:preferences[axis()],start:coordinate,offset:coordinate-((d.horizontal?d.r.right:d.r.bottom)-d.size),moved:false};
      handle.setPointerCapture(e.pointerId);document.body.classList.add('pane-resizing');
    });
    handle.addEventListener('pointermove',e=>{
      if(!drag||drag.id!==e.pointerId)return;e.preventDefault();
      if(Math.abs((query.matches?e.clientX:e.clientY)-drag.start)<1&&!drag.moved)return;
      drag.moved=true;
      const x=e.clientX,y=e.clientY;cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{if(!drag)return;const d=dimensions();update((d.horizontal?d.r.right-x:d.r.bottom-y)+drag.offset);});
    });
    handle.addEventListener('pointerup',e=>{
      if(drag?.id!==e.pointerId)return;
      cancelAnimationFrame(frame);const d=dimensions(),coordinate=d.horizontal?e.clientX:e.clientY;
      if(!drag.moved&&Math.abs(coordinate-drag.start)<1){stop(true);return;}
      update((d.horizontal?d.r.right-e.clientX:d.r.bottom-e.clientY)+drag.offset);stop();
    });
    handle.addEventListener('pointercancel',e=>{if(drag?.id===e.pointerId)stop(true);});
    handle.addEventListener('lostpointercapture',e=>{if(drag?.id===e.pointerId)stop(true);});
    handle.addEventListener('dblclick',reset);
    handle.addEventListener('keydown',e=>{
      if(e.key==='Escape'&&drag){e.preventDefault();e.stopPropagation();stop(true);return;}
      const d=dimensions(),step=e.shiftKey?64:24;
      const increase=d.horizontal?'ArrowLeft':'ArrowUp',decrease=d.horizontal?'ArrowRight':'ArrowDown';
      if(![increase,decrease,'Home','End','Enter'].includes(e.key))return;
      e.preventDefault();e.stopPropagation();if(e.key==='Enter'){reset();return;}
      update(e.key==='Home'?d.maxCard:e.key==='End'?d.minCard:d.size+(e.key===increase?step:-step));persist();hooks.onResize?.();
    });
    new ResizeObserver(()=>{if(!drag)apply();}).observe(document.querySelector('#app'));
    window.addEventListener('resize',()=>{stop(true);apply();});
    window.addEventListener('blur',()=>stop(true));
    apply();
  }
  window.GrammarPane={init,sync,get expanded(){return expanded;},get dragging(){return !!drag;},toggleExpanded(){stop(true);expanded=!expanded;apply();},reset};
})();
