import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../',import.meta.url));
const scripts=['content.js','content-additions.js','lesson-details-lexis.js','lesson-details-verbs.js','content-detail-nouns.js','content-detail-lexis.js','content-detail-clauses.js','beginner-guide.js','atlas.js','video-resources.js','graph.js','nebula-graph.js','games-content.js','progress.js'];
const context=vm.createContext({window:{}});
for(const file of scripts)vm.runInContext(readFileSync(resolve(root,file),'utf8'),context,{filename:file});
const {GRAMMAR:d,ATLAS:a,GrammarGraph:g,GrammarProgress:p,GRAMMAR_GAMES_DATA:games}=context.window;
assert.deepEqual(Array.from(a.modules,m=>m.title),['词法','句法','时态','语态','从句','非谓语','主谓一致','倒装','虚拟语气','写作常见错误']);
assert.deepEqual(Array.from(a.get('module:lexis').children,k=>a.get(k).title),['名词','代词','冠词','形容词','副词','介词','连词','动词','数词','感叹词']);
assert.equal(d.lessons.length,135);assert.equal(a.topics.length,31);assert.equal(a.knowledge.length,166);
assert.equal(new Set(a.modules.map(m=>m.key)).size,10);assert.equal(new Set(a.topics.map(n=>n.key)).size,31);
assert.equal(new Set(d.lessons.map(l=>l.id)).size,135);
assert.equal(a.lessonKeys('root').length,d.lessons.length);
for(const n of a.nodes.values()){
 assert.equal(new Set(n.children).size,n.children.length,`Duplicate child in ${n.key}`);
 for(const child of n.children)assert(a.get(child),`Unknown child ${child}`);
 assert(a.owner.has(n.key),`Unreachable node ${n.key}`);
 for(const [label,target] of Object.entries(n.classificationLinks||{})){assert(n.classification.includes(label));assert(a.get(target));assert(a.route(n.key,target),`Unreachable classification ${n.key}/${target}`);}
 if(n.kind!=='module'){
  assert(n.definition.length>10&&n.classification.length&&n.usage.length&&n.pitfalls.length,`Incomplete card ${n.key}`);
  const examples=a.examplesFor(n.key);assert(examples.length);for(const e of examples){assert(e.en&&e.zh&&e.note,`Incomplete example ${n.key}`);assert((e.en.match(/[a-z]+(?:['’-][a-z]+)*/gi)||[]).length<=12,`Example too long for beginners: ${n.key}`);}
  for(const u of n.usage)assert(typeof u==='string'?u.length>5:u.h&&u.t?.length>10,`Incomplete usage ${n.key}`);
  assert(n.usage.filter(u=>!u.advanced).length>=2,`Missing basic steps ${n.key}`);
  if(n.kind==='lesson')assert(n.pitfalls.length>=2&&n.pitfalls.every(p=>!Array.isArray(p)&&p.title&&p.wrong&&p.right&&p.text?.trim().length>=4),`Missing explained correction pair ${n.key}`);
 }
}
const qids=new Set(),prompts=new Set();let questions=0;
for(const l of d.lessons){
 assert.equal(l.steps.length,4);assert.equal(l.examples.length,2);assert.equal(l.quiz.length,3);assert(l.source&&l.formula&&l.take);
 for(const related of l.related)assert(d.lessons.some(n=>n.id===related),`Unknown related lesson ${related}`);
 for(const q of l.quiz){assert(!qids.has(q.id),q.id);qids.add(q.id);assert(!prompts.has(q.prompt),`Duplicate question: ${q.prompt}`);prompts.add(q.prompt);assert(q.why.length>10);if(q.type==='mc'){assert(q.answer>=0&&q.answer<q.options.length);assert.equal(new Set(q.options).size,q.options.length);}else assert(q.answer.length&&q.answer.every(v=>v.trim()));questions++;}
}
assert.equal(questions,405);
assert.equal(Object.keys(context.window.LESSON_DETAILS).length,135);
assert.equal(Object.keys(context.window.TOPIC_BEGINNER).length,31);
assert(Object.keys(context.window.GRAMMAR_TERMS).length>=40);
assert.deepEqual(Array.from(a.get('lesson:noun-types').children),['lesson:noun-proper','lesson:noun-common','topic:noun-semantic']);
assert.deepEqual(Array.from(a.get('lesson:noun-common').children),['lesson:noun-individual','lesson:noun-collective','lesson:noun-material','lesson:noun-abstract']);
assert.deepEqual(Array.from(a.route('topic:nouns','lesson:noun-collective')),['topic:nouns','lesson:noun-types','lesson:noun-common','lesson:noun-collective']);
assert.deepEqual(Array.from(a.route('topic:noun-semantic','lesson:noun-abstract')),['topic:noun-semantic','lesson:noun-abstract']);
assert.equal(a.storageKey('lesson:noun-types'),'noun-types');
const oldNoun=p.normalize({schema:1,read:['noun-types'],bookmarks:['noun-types'],notes:{'noun-types':'旧分类笔记'},correct:{'noun-types-0':true},attempts:1,right:1});
assert(p.learned(oldNoun,'lesson:noun-types'));assert(!p.learned(oldNoun,'lesson:noun-collective'));assert.equal(oldNoun.notes['noun-types'],'旧分类笔记');assert(oldNoun.bookmarks.includes('noun-types'));
const tenseTable=a.get('topic:simple-tenses').referenceTable;assert.equal(tenseTable.rows.length,4);assert(tenseTable.rows.every(row=>row.length===5));
assert.equal(p.questionOwners.get('inversion-2').lid,'emphasis');assert.equal(p.questionOwners.get('should-1').lid,'subjunctive-suggestions');
const legacy={schema:1,read:['present','unknown'],correct:{'should-1':true},mistakes:{'inversion-2':{lid:'inversion',qid:'inversion-2',answer:'It is raining.',at:1}},bookmarks:['inversion'],notes:{inversion:'保留旧笔记'},attempts:2,right:1,last:'inversion'};
const migrated=p.normalize(legacy);
assert.equal(migrated.read.length,1);assert.equal(migrated.mistakes['inversion-2'].lid,'emphasis');assert.equal(migrated.notes.inversion,'保留旧笔记');assert.equal(migrated.correct['should-1'],true);
assert(p.learned(migrated,'lesson:present'));assert(!p.learned(migrated,'topic:nouns'));
assert(p.learn(migrated,'topic:nouns'));assert(!p.learn(migrated,'topic:nouns'));assert(p.learned(migrated,'topic:nouns'));
assert(p.learn(migrated,'lesson:countable'));assert(migrated.read.includes('countable'));assert(!p.learn(migrated,'module:lexis'));
const backup={app:'grammar-atlas',progress:legacy},merged=p.merge(migrated,backup);
assert.equal(JSON.stringify(p.merge(merged,backup)),JSON.stringify(merged),'Import must be idempotent');
assert.equal(merged.attempts,2);assert(merged.topicRead.includes('topic:nouns'));assert.equal(merged.notes.inversion,'保留旧笔记');
const corrected=p.merge(merged,{app:'grammar-atlas',progress:{...legacy,correct:{'inversion-2':true}}});assert(!corrected.mistakes['inversion-2']);
assert.throws(()=>p.merge(merged,{app:'other',progress:legacy}));
assert.deepEqual(Array.from(a.path('root')),[]);assert.deepEqual(Array.from(a.path('unknown')),[]);
assert.equal(d.lessons.find(l=>l.id==='noun-types').quiz[1].caseSensitive,true);
assert.equal(games.levels.length,50);assert.equal(games.stages.length,5);assert.equal(Object.keys(games.types).length,10);
assert.equal(new Set(games.levels.map(l=>l.sentence)).size,50);
const introduced=new Set();let longest=0;
for(const [index,level] of games.levels.entries()){
 assert.equal(level.id,index+1);assert.equal(level.stage,Math.floor(index/10)+1);assert(level.translation&&level.note);
 assert(level.words.length>=2);longest=Math.max(longest,level.words.length);
 for(const word of level.words){assert(word.text&&games.types[word.type]);introduced.add(word.type);assert(level.availableTypes.includes(word.type));}
 assert.deepEqual(Array.from(level.availableTypes).sort(),[...introduced].sort());
 const answer=Object.fromEntries(level.words.map((w,i)=>[i,w.type]));
 assert(games.grade(level,answer).passed);assert.equal(games.grade(level,{}).missing.length,level.words.length);
 answer[0]=Object.keys(games.types).find(type=>type!==level.words[0].type);
 assert(!games.grade(level,answer).passed);assert.equal(games.grade(level,answer).wrong.length,1);
}
assert(longest>=24);assert.equal(introduced.size,10);
for(const [level,count] of [[1,2],[3,3],[7,4],[11,5],[14,6],[17,7],[21,8],[26,9],[31,10]])assert.equal(games.levels[level-1].availableTypes.length,count);
const gameBackup={app:'grammar-atlas',progress:{...legacy,games:{drag:{lastLevel:42,stars:{1:3,20:2,50:1,51:3,bad:2,4:9}}}}};
const gameMerged=p.merge(migrated,gameBackup);
assert.deepEqual(Object.keys(gameMerged.games.drag.stars),['1','20','50']);assert.equal(gameMerged.games.drag.lastLevel,42);
assert.equal(JSON.stringify(p.merge(gameMerged,gameBackup)),JSON.stringify(gameMerged));
let layouts=0;
for(const [width,height] of [[320,568],[390,844],[430,932],[820,1180],[1024,768],[1536,1000],[1920,1080]]){
 for(const key of ['root',...[...a.nodes.values()].filter(n=>n.children.length).map(n=>n.key)]){
  const layout=g.mapLayout(a,key,width,height),expected=key==='root'?10:a.get(key).children.length;
  assert.equal(layout.nodes.length,expected+1);assert.equal(layout.edges.length,expected);
  assert(Number.isFinite(layout.bounds.w)&&layout.bounds.w>0&&layout.bounds.h>0);
  for(let i=0;i<layout.nodes.length;i++)for(let j=i+1;j<layout.nodes.length;j++){
   const x=layout.nodes[i],y=layout.nodes[j];assert(!(Math.abs(x.x-y.x)<(x.w+y.w)/2&&Math.abs(x.y-y.y)<(x.h+y.h)/2),`Overlapping nodes ${key}: ${x.key}/${y.key} at ${width}x${height}`);
  }
  const camera=g.fit(layout,width,height);assert(camera.scale>0&&Number.isFinite(camera.x)&&Number.isFinite(camera.y));layouts++;
 }
 const universe=g.universeLayout(a,width,height,null);assert.equal(universe.stars.length,166);assert.equal(new Set(universe.stars.map(s=>s.key)).size,166);
 for(const m of a.modules){const focused=g.universeLayout(a,width,height,m.id);assert.equal(focused.stars.length,a.knowledge.filter(n=>a.owner.get(n.key)===m.id).length);assert(focused.nodes.every(n=>Number.isFinite(n.x)&&Number.isFinite(n.y)));}
}
const app=readFileSync(resolve(root,'app.js'),'utf8');new vm.Script(app,{filename:'app.js'});new vm.Script(readFileSync(resolve(root,'games.js'),'utf8'),{filename:'games.js'});new vm.Script(readFileSync(resolve(root,'pane-resize.js'),'utf8'),{filename:'pane-resize.js'});
const videos=context.window.GRAMMAR_VIDEOS,videoIds=new Set(),videoUrls=new Set(),videoCards=new Set();
for(const video of videos.entries){
 assert(video.id&&video.title&&video.creator&&video.focus&&video.knowledgeKeys.length);assert(!videoIds.has(video.id)&&!videoUrls.has(video.url));videoIds.add(video.id);videoUrls.add(video.url);
 const url=new URL(video.url);assert.equal(url.protocol,'https:');assert(!url.username&&!url.password&&!url.port);assert(/^https:\/\/github\.com\//.test(video.sourceFile));
 if(video.platform==='B站')assert(url.hostname==='www.bilibili.com'&&/^\/video\/BV[0-9A-Za-z]{10}\/?$/.test(url.pathname));
 else{assert.equal(video.platform,'YouTube');assert(url.hostname==='www.youtube.com'&&url.pathname==='/watch'&&/^[\w-]{11}$/.test(url.searchParams.get('v')));assert(/^\d+:\d{2}(?::\d{2})?$/.test(video.duration));assert(/^[a-f0-9]{40}$/.test(video.sourceRevision));}
 for(const key of video.knowledgeKeys){assert(a.get(key)&&a.get(key).kind!=='module',`Unknown video target ${key}`);assert(videos.forKey(key).includes(video));videoCards.add(key);}
}
for(const n of a.knowledge){const resources=videos.forKey(n.key);assert(resources.length<=2);assert(resources.every(v=>v.knowledgeKeys.includes(n.key)),'Video inherited by unrelated card');}
assert.equal(videos.entries.length,26);assert.equal(videoCards.size,41);assert.equal(videos.forKey('lesson:noun-abstract').length,0);assert.equal(videos.forKey('module:lexis').length,0);assert.equal(videos.forKey('unknown').length,0);
const nebula=context.window.GrammarNebula,network=nebula.build(a),networkKeys=new Set(network.nodes.map(n=>n.key));
assert.equal(network.nodes.length,176);assert.equal(networkKeys.size,176);assert(network.edges.length>300);
const edgeKeys=new Set(),adjacency=new Map(network.nodes.map(n=>[n.key,[]]));
for(const edge of network.edges){assert(networkKeys.has(edge.source)&&networkKeys.has(edge.target));assert.notEqual(edge.source,edge.target);const key=[edge.source,edge.target].sort().join('|');assert(!edgeKeys.has(key));edgeKeys.add(key);adjacency.get(edge.source).push(edge.target);adjacency.get(edge.target).push(edge.source);if(edge.kind==='hierarchy')assert(a.get(edge.source).children.includes(edge.target)||a.get(edge.target).children.includes(edge.source));}
const connected=new Set(),queue=[network.nodes[0].key];while(queue.length){const k=queue.pop();if(connected.has(k))continue;connected.add(k);queue.push(...adjacency.get(k));}assert.equal(connected.size,176);
for(const focus of [null,...a.modules.map(m=>m.id)]){
 const layout=nebula.layout(a,1280,960,focus),keys=new Set(layout.nodes.map(n=>n.key));assert.equal(layout.mode,'nebula');
 for(const n of layout.nodes)assert(Number.isFinite(n.x)&&Number.isFinite(n.y)&&n.r>0&&keys.has(n.key));
 for(const edge of layout.edges)assert(keys.has(edge.source)&&keys.has(edge.target)&&edge.a.key===edge.source&&edge.b.key===edge.target);
 for(const n of a.knowledge.filter(n=>!focus||a.owner.get(n.key)===focus))assert(keys.has(n.key),`Missing nebula point ${n.key}`);
 const repeat=nebula.layout(a,1280,960,focus);assert.equal(JSON.stringify(layout.nodes.map(n=>[n.key,n.x,n.y])),JSON.stringify(repeat.nodes.map(n=>[n.key,n.x,n.y])));
 for(const [w,h] of [[320,568],[390,240],[820,1180],[1536,1000]]){const camera=g.fit(layout,w,h);assert(camera.scale>0&&Number.isFinite(camera.x)&&Number.isFinite(camera.y));}
}
const html=readFileSync(resolve(root,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const ref=match[1];if(/^(?:data:|https?:)/.test(ref))continue;assert(!ref.startsWith('/'));assert(existsSync(resolve(root,ref.split('?')[0])),`Missing asset ${ref}`);}
assert(!/(?:libfile_|appgprj_|art_v2_|chatgpt\.com\/library)/.test(app+html),'Hosting-specific reference found');
console.log(`Passed: 10 modules, 31 topic cards, 135 detailed lessons, ${questions} unique questions, 166 progress stars.`);
console.log(`Passed: ${layouts} non-overlapping map layouts, constellation coverage, legacy progress migration and idempotent backup merge.`);
console.log(`Passed: 50 unique game levels, 10 progressively introduced word classes, answer checking and game backup merge.`);
console.log(`Passed: connected nebula with 176 nodes / ${network.edges.length} real relationships, deterministic clusters and all 10 module focus views.`);
console.log(`Passed: ${videos.entries.length} source-indexed video links matched to ${videoCards.size} cards, valid platform URLs and no inherited recommendations.`);
console.log('Passed: beginner example length, basic steps, structured corrections,31overview cards and43term explanations.');
console.log('Passed: JavaScript syntax and portable relative assets.');
