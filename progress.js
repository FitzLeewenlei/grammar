/* Progress schema 1 stays compatible with the original Grammar Atlas backups. */
(() => {
  const atlas=window.ATLAS,lessons=window.GRAMMAR.lessons;
  const lessonIds=new Set(lessons.map(l=>l.id));
  const questionOwners=new Map(lessons.flatMap(l=>l.quiz.map(q=>[q.id,{lid:l.id,q}])));
  const validStorage=new Set(atlas.knowledge.map(n=>atlas.storageKey(n.key)));
  const unique=arr=>[...new Set(arr)];
  const object=v=>v&&typeof v==='object'&&!Array.isArray(v);
  const integer=v=>Number.isSafeInteger(v)&&v>=0;
  function fresh(){return {schema:1,read:[],topicRead:[],correct:{},mistakes:{},bookmarks:[],notes:{},attempts:0,right:0,last:'present',lastCard:null,games:{drag:{stars:{},lastLevel:1}},view:{size:100,space:100,line:'curve'}};}
  function normalize(raw){
    const p=fresh();if(!object(raw)||raw.schema!==1)return p;
    p.read=unique((Array.isArray(raw.read)?raw.read:[]).filter(id=>lessonIds.has(id)));
    p.topicRead=unique((Array.isArray(raw.topicRead)?raw.topicRead:[]).filter(key=>atlas.get(key)?.kind==='topic'));
    p.bookmarks=unique((Array.isArray(raw.bookmarks)?raw.bookmarks:[]).filter(key=>validStorage.has(key)));
    p.correct=Object.fromEntries(Object.entries(object(raw.correct)?raw.correct:{}).filter(([qid,value])=>questionOwners.has(qid)&&value===true));
    p.notes=Object.fromEntries(Object.entries(object(raw.notes)?raw.notes:{}).filter(([key,value])=>validStorage.has(key)&&typeof value==='string').map(([key,value])=>[key,value.slice(0,10000)]));
    for(const [qid,m] of Object.entries(object(raw.mistakes)?raw.mistakes:{})){
      if(!questionOwners.has(qid)||!object(m)||p.correct[qid])continue;
      p.mistakes[qid]={lid:questionOwners.get(qid).lid,qid,answer:String(m.answer??'').slice(0,500),at:integer(m.at)?m.at:0};
    }
    p.attempts=integer(raw.attempts)?raw.attempts:0;p.right=Math.min(p.attempts,integer(raw.right)?raw.right:0);
    if(lessonIds.has(raw.last))p.last=raw.last;
    if(atlas.get(raw.lastCard))p.lastCard=raw.lastCard;
    const game=raw.games?.drag;
    if(object(game)){
      p.games.drag.stars=Object.fromEntries(Object.entries(object(game.stars)?game.stars:{}).filter(([id,stars])=>/^[1-9]\d*$/.test(id)&&Number(id)<=50&&integer(stars)&&stars>=1&&stars<=3));
      if(integer(game.lastLevel)&&game.lastLevel>=1&&game.lastLevel<=50)p.games.drag.lastLevel=game.lastLevel;
    }
    if(object(raw.view))p.view={size:typeof raw.view.size==='number'?Math.max(90,Math.min(115,raw.view.size)):100,space:typeof raw.view.space==='number'?Math.max(85,Math.min(130,raw.view.space)):100,line:raw.view.line==='straight'?'straight':'curve'};
    return p;
  }
  function merge(current,backup){
    const raw=backup?.progress;
    if(backup?.app!=='grammar-atlas'||!object(raw)||raw.schema!==1||!Array.isArray(raw.read)||!Array.isArray(raw.bookmarks)||!object(raw.correct)||!object(raw.notes)||!integer(raw.attempts)||!integer(raw.right)||raw.right>raw.attempts)throw Error('Invalid progress backup');
    const a=normalize(current),b=normalize(raw);
    a.read=unique([...a.read,...b.read]);a.topicRead=unique([...a.topicRead,...b.topicRead]);a.bookmarks=unique([...a.bookmarks,...b.bookmarks]);
    a.correct={...a.correct,...b.correct};
    for(const [key,note] of Object.entries(b.notes))if(!a.notes[key]?.trim())a.notes[key]=note;
    for(const [qid,m] of Object.entries(b.mistakes))if(!a.mistakes[qid])a.mistakes[qid]=m;
    for(const qid of Object.keys(a.mistakes))if(a.correct[qid])delete a.mistakes[qid];
    a.attempts=Math.max(a.attempts,b.attempts);a.right=Math.min(a.attempts,Math.max(a.right,b.right));
    for(const [id,stars] of Object.entries(b.games.drag.stars))a.games.drag.stars[id]=Math.max(a.games.drag.stars[id]||0,stars);
    if(a.games.drag.lastLevel===1)a.games.drag.lastLevel=b.games.drag.lastLevel;
    return a;
  }
  function learned(data,key){const n=atlas.get(key);return n?.kind==='lesson'?data.read.includes(n.id):n?.kind==='topic'?data.topicRead.includes(key):false;}
  function learn(data,key){const n=atlas.get(key);if(!n||n.kind==='module'||learned(data,key))return false;if(n.kind==='lesson')data.read.push(n.id);else data.topicRead.push(key);return true;}
  window.GrammarProgress={fresh,normalize,merge,learned,learn,questionOwners};
})();
