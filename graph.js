/* Pure geometry shared by the atlas and the progress constellation. */
(() => {
  const bounds = nodes => {
    const x=Math.min(...nodes.map(n=>n.x-n.w/2)),y=Math.min(...nodes.map(n=>n.y-n.h/2));
    return {x,y,w:Math.max(...nodes.map(n=>n.x+n.w/2))-x,h:Math.max(...nodes.map(n=>n.y+n.h/2))-y};
  };
  const spread=(a,b,n)=>Array.from({length:n},(_,i)=>n===1?(a+b)/2:a+(b-a)*i/(n-1));
  function mapLayout(atlas, context, width, height) {
    const compact=width<650||(width<950&&height>width);
    const center=context==='root'?{key:'root',kind:'root',title:'English Grammar',en:''}:atlas.get(context);
    const entries=(context==='root'?atlas.modules.map(m=>m.key):center.children).map(k=>atlas.get(k));
    const nodes=[],edges=[];
    let root;
    if(compact){
      const worldH=Math.max(600,height),leafH=width<650?54:66,leafW=Math.min(220,width*.44),top=28+leafH/2,bottom=worldH-100-leafH/2;
      const cy=(top+bottom)/2,rootH=width<650?72:88;
      root={...center,type:'center',x:width/2,y:cy,w:Math.min(250,width*.64),h:rootH};nodes.push(root);
      const leftCount=Math.ceil(entries.length/2),above=cy-rootH/2-leafH/2-16,below=cy+rootH/2+leafH/2+16;
      const ys=(n,left)=>{const upper=left?Math.ceil(n/2):Math.floor(n/2);return [...spread(top,above,upper),...spread(below,bottom,n-upper)];};
      const leftY=ys(leftCount,true),rightY=ys(entries.length-leftCount,false);
      entries.forEach((entry,i)=>{const left=i<leftCount,j=left?i:i-leftCount;nodes.push({...entry,type:'entry',x:width*(left?.245:.755),y:(left?leftY:rightY)[j],w:leafW,h:leafH});});
    }else{
      root={...center,type:'center',x:550,y:390,w:230,h:88};nodes.push(root);
      const leftCount=Math.ceil(entries.length/2),countRight=entries.length-leftCount;
      entries.forEach((entry,i)=>{const left=i<leftCount,count=left?leftCount:countRight,row=left?i:i-leftCount;nodes.push({...entry,type:'entry',x:left?185:915,y:390+(row-(count-1)/2)*116,w:210,h:68});});
    }
    nodes.slice(1).forEach(n=>edges.push({a:root,b:n,color:atlas.modules.find(m=>m.id===atlas.owner.get(n.key))?.color||'#8da0b3'}));
    return {nodes,edges,bounds:bounds(nodes),compact,mode:'map'};
  }
  function universeLayout(atlas,width,height,focus){
    if(!focus){
      const base=mapLayout(atlas,'root',width,height);
      const stars=[];
      base.nodes.forEach(n=>{
        if(n.type==='center'){n.kind='universe';n.title='Grammar Universe';return;}
        n.kind='constellation';
        const members=atlas.knowledge.filter(k=>atlas.owner.get(k.key)===n.id),radius=base.compact?36:54;
        members.forEach((k,i)=>{const a=i*2.399963229728653,r=12+Math.sqrt((i+1)/members.length)*radius;stars.push({key:k.key,module:n.id,x:n.x+Math.cos(a)*r,y:n.y+Math.sin(a)*r});});
      });
      return {...base,stars,mode:'universe'};
    }
    const mod=atlas.modules.find(m=>m.id===focus),members=atlas.knowledge.filter(n=>atlas.owner.get(n.key)===focus);
    const nodes=[],stars=[],edges=[],compact=width<750;
    const root={...mod,key:mod.key,type:'center',kind:'constellation-root',x:compact?width/2:600,y:compact?68:470,w:220,h:72};nodes.push(root);
    if(compact){
      members.forEach((n,i)=>nodes.push({...n,type:'star',x:width*(i%2?.74:.26),y:172+Math.floor(i/2)*94+(i%2?18:0),w:Math.min(170,width*.46),h:70}));
    }else{
      let start=0;
      for(const [radius,capacity] of [[170,7],[310,13],[450,30]]){
        const count=Math.min(capacity,members.length-start);
        for(let j=0;j<count;j++){const n=members[start+j],a=-Math.PI/2+j*Math.PI*2/count;nodes.push({...n,type:'star',x:600+Math.cos(a)*radius,y:470+Math.sin(a)*radius,w:148,h:68});}
        start+=count;if(start>=members.length)break;
      }
    }
    const positions=new Map(nodes.map(n=>[n.key,n]));
    nodes.slice(1).forEach(n=>{
      const parent=positions.get(atlas.parent.get(n.key))||root;
      edges.push({a:parent,b:n,color:mod.color});stars.push({key:n.key,module:focus,x:n.x,y:n.y-12});
    });
    return {nodes,stars,edges,bounds:bounds(nodes),compact,mode:'constellation',preferTop:compact};
  }
  function edgePath(edge){
    const {a,b}=edge;
    const dx=b.x-a.x,dy=b.y-a.y;
    if(Math.abs(dx)>Math.abs(dy)*.65){const x1=a.x+Math.sign(dx)*a.w/2,x2=b.x-Math.sign(dx)*b.w/2,m=(x1+x2)/2;return `M${x1},${a.y} C${m},${a.y} ${m},${b.y} ${x2},${b.y}`;}
    const y1=a.y+Math.sign(dy)*a.h/2,y2=b.y-Math.sign(dy)*b.h/2,m=(y1+y2)/2;return `M${a.x},${y1} C${a.x},${m} ${b.x},${m} ${b.x},${y2}`;
  }
  function fit(layout,width,height,all=false){
    const b=layout.bounds;
    let scale=Math.min(1.16,(width-24)/Math.max(1,b.w),(height-92)/Math.max(1,b.h));
    scale=Math.max(.25,scale);
    if(layout.preferTop&&!all){scale=Math.min(1,(width-18)/b.w);return {scale,x:width/2-(b.x+b.w/2)*scale,y:20-b.y*scale};}
    return {scale,x:width/2-(b.x+b.w/2)*scale,y:12+(height-84)/2-(b.y+b.h/2)*scale};
  }
  window.GrammarGraph={mapLayout,universeLayout,edgePath,fit,bounds};
})();
