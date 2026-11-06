/* Deterministic knowledge-network geometry. No DOM or learning-state dependency. */
(() => {
  const palette=['#6fb8ff','#78d2ed','#9fbdff','#8ad9ed','#b9a2f2','#73d2bd','#dbc58b','#8cb6ed','#d0a6ee','#d69dbb'];
  const sites=[[-.31,-.03],[-.04,-.34],[.30,-.31],[.43,.02],[.20,.32],[-.08,.29],[-.34,.37],[-.46,-.32],[.44,.36],[-.08,-.49]];
  const hash=value=>{let h=2166136261;for(const c of value){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
  const random=seed=>{let x=seed>>>0;return ()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};};
  const settledByAtlas=new WeakMap();
  function build(atlas){
    const moduleIndex=new Map(atlas.modules.map((m,i)=>[m.id,i]));
    const nodes=[...atlas.modules,...atlas.knowledge].map(n=>{
      const module=n.kind==='module'?n.id:atlas.owner.get(n.key),i=moduleIndex.get(module)||0;
      return {key:n.key,id:n.id,title:n.title,en:n.en||'',kind:n.kind,module,color:palette[i%palette.length],degree:0,neighbors:[],hasChildren:!!n.children.length};
    });
    const nodeByKey=new Map(nodes.map(n=>[n.key,n])),dedup=new Map();
    function link(source,target,kind){
      if(source===target||!nodeByKey.has(source)||!nodeByKey.has(target))return;
      const pair=[source,target].sort().join('\u0000'),old=dedup.get(pair);
      if(!old||kind==='hierarchy'&&old.kind!=='hierarchy')dedup.set(pair,{source,target,kind});
    }
    for(const n of atlas.nodes.values()){
      for(const child of n.children)link(n.key,child,'hierarchy');
      for(const id of n.lesson?.related||[])link(n.key,'lesson:'+id,'related');
      for(const target of Object.values(n.classificationLinks||{}))link(n.key,target,'related');
    }
    const edges=[...dedup.values()];
    for(const edge of edges){const a=nodeByKey.get(edge.source),b=nodeByKey.get(edge.target);a.neighbors.push(b.key);b.neighbors.push(a.key);}
    for(const n of nodes){
      n.neighbors.sort();n.degree=n.neighbors.length;
      n.r=n.kind==='module'?10+Math.min(2,n.degree*.12):n.kind==='topic'?4.6+Math.min(1.3,n.degree*.07):3+Math.min(1.8,Math.sqrt(n.degree)*.45);
      n.w=n.r*2;n.h=n.r*2;n.importance=n.kind==='module'?3:n.kind==='topic'?2:n.degree>=7?1:0;
    }
    return {nodes,edges};
  }
  function finish(nodes,edges,width,height,focused){
    const rawLeft=Math.min(...nodes.map(n=>n.x)),rawTop=Math.min(...nodes.map(n=>n.y));
    const rawW=Math.max(1,Math.max(...nodes.map(n=>n.x))-rawLeft),rawH=Math.max(1,Math.max(...nodes.map(n=>n.y))-rawTop);
    const targetW=Math.max(800,Math.min(1280,width)),aspect=Math.max(.45,Math.min(2.4,(height-100)/Math.max(280,width-32))),targetH=targetW*aspect;
    for(const n of nodes){n.x=Math.round((n.x-rawLeft)/rawW*targetW*100)/100;n.y=Math.round((n.y-rawTop)/rawH*targetH*100)/100;}
    const byKey=new Map(nodes.map(n=>[n.key,n]));
    for(const edge of edges){edge.a=byKey.get(edge.source);edge.b=byKey.get(edge.target);edge.color=edge.a.color;edge.context=edge.a.context&&edge.b.context;}
    const pad=26,bounds={x:Math.min(...nodes.map(n=>n.x-n.r))-pad,y:Math.min(...nodes.map(n=>n.y-n.r))-pad};
    bounds.w=Math.max(...nodes.map(n=>n.x+n.r))-bounds.x+pad;bounds.h=Math.max(...nodes.map(n=>n.y+n.r))-bounds.y+pad;
    return {nodes,edges,bounds,mode:'nebula',focused,compact:width<750,preferTop:false};
  }
  function layout(atlas,width,height,focusModuleId=null){
    const graph=build(atlas),validFocus=atlas.modules.some(m=>m.id===focusModuleId)?focusModuleId:null;
    const owned=new Set(graph.nodes.filter(n=>n.module===validFocus).map(n=>n.key));
    const included=new Set(validFocus?owned:graph.nodes.map(n=>n.key));
    if(validFocus)for(const e of graph.edges)if(owned.has(e.source)||owned.has(e.target)){included.add(e.source);included.add(e.target);}
    const nodes=graph.nodes.filter(n=>included.has(n.key)).map(n=>({...n,neighbors:[...n.neighbors],context:!!validFocus&&!owned.has(n.key)}));
    const edges=graph.edges.filter(e=>included.has(e.source)&&included.has(e.target)).map(e=>({...e}));
    let cache=settledByAtlas.get(atlas);if(!cache){cache=new Map();settledByAtlas.set(atlas,cache);}
    const saved=cache.get(validFocus||'*');
    if(saved&&saved.edgeCount===edges.length&&saved.points.size===nodes.length&&nodes.every(n=>saved.points.has(n.key))){
      for(const n of nodes)Object.assign(n,saved.points.get(n.key));
      return finish(nodes,edges,width,height,validFocus);
    }
    const indices=new Map(nodes.map((n,i)=>[n.key,i]));
    const moduleIndices=new Map(atlas.modules.map((m,i)=>[m.id,i]));
    const worldW=1000,worldH=800;
    const centerX=worldW/2,centerY=worldH/2,focusSite=validFocus?sites[moduleIndices.get(validFocus)%sites.length]:[0,0];
    const count=nodes.length,x=new Float64Array(count),y=new Float64Array(count),vx=new Float64Array(count),vy=new Float64Array(count),fx=new Float64Array(count),fy=new Float64Array(count),ax=new Float64Array(count),ay=new Float64Array(count);
    const members=new Map();for(const n of nodes)members.set(n.module,(members.get(n.module)||0)+1);
    nodes.forEach((n,i)=>{
      const index=moduleIndices.get(n.module)||0,site=sites[index%sites.length],rng=random(hash(n.key)),a=rng()*Math.PI*2,r=Math.sqrt(rng());
      const size=Math.sqrt((members.get(n.module)||1)/Math.max(1,count));
      const spreadX=worldW*(validFocus?.22:.10+size*.16),spreadY=worldH*(validFocus?.22:.10+size*.16);
      const sx=validFocus?(site[0]-focusSite[0])*.53:site[0]*.83,sy=validFocus?(site[1]-focusSite[1])*.53:site[1]*.83;
      ax[i]=centerX+sx*worldW;ay[i]=centerY+sy*worldH;
      x[i]=ax[i]+Math.cos(a)*r*spreadX;y[i]=ay[i]+Math.sin(a)*r*spreadY;
      if(n.kind==='module'){x[i]=ax[i];y[i]=ay[i];}
    });
    const springs=edges.map(e=>({i:indices.get(e.source),j:indices.get(e.target),related:e.kind==='related'}));
    const iterations=60;
    for(let step=0;step<iterations;step++){
      fx.fill(0);fy.fill(0);const alpha=.92*(1-step/iterations)+.08;
      const cells=new Map(),cellSize=120;
      for(let i=0;i<count;i++){
        const key=Math.floor(x[i]/cellSize)+','+Math.floor(y[i]/cellSize);
        let cell=cells.get(key);if(!cell){cell=[];cells.set(key,cell);}cell.push(i);
      }
      for(let i=0;i<count;i++){
        const cx=Math.floor(x[i]/cellSize),cy=Math.floor(y[i]/cellSize);
        for(let ox=-1;ox<=1;ox++)for(let oy=-1;oy<=1;oy++){
          const cell=cells.get((cx+ox)+','+(cy+oy));if(!cell)continue;
          for(const j of cell){
            if(j<=i)continue;
            let dx=x[i]-x[j],dy=y[i]-y[j],d2=dx*dx+dy*dy;
            if(d2<.01){dx=((i+j)%2?1:-1)*.1;dy=.13;d2=dx*dx+dy*dy;}
            const force=35*alpha/(d2<36?36:d2),px=dx*force,py=dy*force;
            fx[i]+=px;fy[i]+=py;fx[j]-=px;fy[j]-=py;
          }
        }
      }
      for(const edge of springs){
        const {i,j}=edge,dx=x[j]-x[i],dy=y[j]-y[i],rawDistance=Math.sqrt(dx*dx+dy*dy),distance=rawDistance<1?1:rawDistance;
        const moduleEdge=nodes[i].kind==='module'||nodes[j].kind==='module';
        const rest=edge.related?115:moduleEdge?88:61,strength=(edge.related?.009:.025)*alpha;
        const factor=(distance-rest)/distance*strength,px=dx*factor,py=dy*factor;
        fx[i]+=px;fy[i]+=py;fx[j]-=px;fy[j]-=py;
      }
      for(let i=0;i<count;i++){
        const hub=nodes[i].kind==='module',affinity=(hub ? .014 : validFocus&&!nodes[i].context ? .0035 : .0055)*alpha;
        fx[i]+=(ax[i]-x[i])*affinity+(centerX-x[i])*.0018*alpha;
        fy[i]+=(ay[i]-y[i])*affinity+(centerY-y[i])*.0018*alpha;
        vx[i]=(vx[i]+fx[i])*.73;vy[i]=(vy[i]+fy[i])*.73;
        const speed=Math.sqrt(vx[i]*vx[i]+vy[i]*vy[i]),limit=step<70?9:5;if(speed>limit){vx[i]*=limit/speed;vy[i]*=limit/speed;}
        x[i]+=vx[i];y[i]+=vy[i];
      }
    }
    nodes.forEach((n,i)=>{n.x=Math.round(x[i]*100)/100;n.y=Math.round(y[i]*100)/100;});
    cache.set(validFocus||'*',{edgeCount:edges.length,points:new Map(nodes.map(n=>[n.key,{x:n.x,y:n.y}]))});
    return finish(nodes,edges,width,height,validFocus);
  }
  window.GrammarNebula={build,layout};
})();
