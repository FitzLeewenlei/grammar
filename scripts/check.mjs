import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const content=readFileSync(new URL('../content.js',import.meta.url),'utf8'),app=readFileSync(new URL('../app.js',import.meta.url),'utf8');
const c=vm.createContext({window:{}});vm.runInContext(content,c);const d=c.window.GRAMMAR;
const expectedTitles=['词性','句式','时态与语态','主谓一致','状语从句','定语从句','名词性从句','非谓语动词','虚拟语气','倒装','强调'];
assert.deepEqual(Array.from(d.groups,g=>g.title),expectedTitles);
assert.equal(new Set(d.groups.map(g=>g.id)).size,expectedTitles.length);
assert.equal(d.lessons.length,53);
const ids=new Set(d.lessons.map(l=>l.id));assert.equal(ids.size,d.lessons.length);
const members=d.groups.flatMap(g=>{assert(g.ids.length,`Empty topic ${g.title}`);return Array.from(g.ids,id=>{assert(d.lessons.some(l=>l.id===id&&l.g===g.id),`Wrong topic for ${id}`);return id;});});
assert.equal(members.length,ids.size);assert.equal(new Set(members).size,ids.size);
for(const [id,group] of Object.entries({auxiliaries:'parts',should:'parts',passive:'tenses',agreement:'agreement','real-if':'adverbial',coordination:'sentence',unreal:'subjunctive','subjunctive-suggestions':'subjunctive',inversion:'inversion',emphasis:'emphasis','there-be':'sentence'}))assert.equal(d.lessons.find(l=>l.id===id)?.g,group,`Wrong topic for ${id}`);
const qids=new Set(),prompts=new Set();let questions=0;
for(const l of d.lessons){
 assert(d.groups.some(g=>g.id===l.g&&g.ids.includes(l.id)));assert.equal(l.steps.length,4);assert.equal(l.examples.length,2);assert.equal(l.quiz.length,3);assert(l.source&&l.formula&&l.take);
 for(const id of l.related)assert(ids.has(id),`Broken related lesson ${id}`);
 for(const q of l.quiz){assert(!qids.has(q.id));qids.add(q.id);assert(!prompts.has(q.prompt),`Repeated prompt ${q.prompt}`);prompts.add(q.prompt);assert(q.why.length>10);if(q.type==='mc'){assert(q.answer>=0&&q.answer<q.options.length);assert.equal(new Set(q.options).size,q.options.length);}else{assert(q.answer.length&&q.answer.every(a=>a.trim()));}questions++;}
}
assert.equal(questions,159);
const quizOwners=new Map(d.lessons.flatMap(l=>l.quiz.map(q=>[q.id,l.id])));
assert.equal(quizOwners.get('should-1'),'subjunctive-suggestions');assert.equal(quizOwners.get('inversion-2'),'emphasis');
const normalizeCode=app.slice(app.indexOf('function normalizeMistakes('),app.indexOf('data.mistakes=normalizeMistakes'));
const migration=vm.createContext({quizOwners});vm.runInContext(normalizeCode,migration);
const migrated=migration.normalizeMistakes({'should-1':{lid:'should',answer:'is'},'inversion-2':{lid:'inversion',answer:'It is raining.'}});
assert.equal(migrated['should-1'].lid,'subjunctive-suggestions');assert.equal(migrated['inversion-2'].lid,'emphasis');assert.equal(migrated['should-1'].answer,'is');
const layoutCode=app.slice(app.indexOf('function mapLayout('),app.indexOf('function edgePath'));
let layouts=0;
for(const viewport of [{width:288,height:400,compact:true},{width:346,height:760,compact:true},{width:402,height:600,compact:true},{width:739,height:840,compact:true},{width:700,compact:false},{width:1140,compact:false}])for(const size of [90,100,115])for(const space of [85,100,130])for(const focus of [null,...d.groups.map(g=>g.id)]){
 const state={focus,map:{}},ctx=vm.createContext({groups:d.groups,state,data:{view:{size,space}},groupOf:id=>d.groups.find(g=>g.id===id),viewport});vm.runInContext(layoutCode+'\nmapLayout(viewport);',ctx);
 const nodes=state.map.nodes;assert.equal(nodes.filter(n=>n.type==='lesson').length,focus?d.groups.find(g=>g.id===focus).ids.length:0);
 assert.equal(nodes.filter(n=>n.type==='group').length,focus?1:d.groups.length);
 assert(Number.isFinite(state.map.bounds.w)&&state.map.bounds.w>0);assert(Number.isFinite(state.map.bounds.h)&&state.map.bounds.h>0);
 for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
  const a=nodes[i],b=nodes[j];const overlap=Math.abs(a.x-b.x)<(a.w+b.w)/2&&Math.abs(a.y-b.y)<(a.h+b.h)/2;assert(!overlap,`Node overlap ${focus}: ${a.id}, ${b.id} at ${size}/${space}/${viewport.width}`);
 }
 if(viewport.compact){const parents=nodes.filter(n=>n.type==='root'||focus&&n.type==='group');const parent=parents[0];for(const child of nodes.filter(n=>n!==parent))assert(child.y-child.h/2>parent.y+parent.h/2);}
 layouts++;
}
console.log(`Passed: ${d.groups.length} ordered topics, ${d.lessons.length} lessons, ${d.lessons.reduce((n,l)=>n+l.examples.length,0)} examples, ${questions} unique questions, valid links and migrated mistakes; no node overlaps across ${layouts} phone/tablet/desktop layout configurations.`);

new vm.Script(app,{filename:'app.js'});
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const root=fileURLToPath(new URL('../',import.meta.url));
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
 const ref=match[1];if(/^(?:data:|https?:)/.test(ref))continue;
 assert(!ref.startsWith('/'),`Expected a relative asset path: ${ref}`);
 assert(existsSync(resolve(root,ref.split('?')[0])),`Missing asset: ${ref}`);
}
assert(!/(?:libfile_|appgprj_|art_v2_|chatgpt\.com\/library)/.test(app+html+content),'Export contains a hosting-specific reference.');
console.log('Passed: JavaScript syntax, relative asset references, and portable export checks.');
