import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const content=readFileSync(new URL('../content.js',import.meta.url),'utf8'),app=readFileSync(new URL('../app.js',import.meta.url),'utf8');
const c=vm.createContext({window:{}});vm.runInContext(content,c);const d=c.window.GRAMMAR;
assert.equal(d.groups.length,10);assert.equal(d.lessons.length,50);
const ids=new Set(d.lessons.map(l=>l.id));assert.equal(ids.size,50);
const qids=new Set(),prompts=new Set();let questions=0;
for(const l of d.lessons){
 assert(d.groups.some(g=>g.id===l.g&&g.ids.includes(l.id)));assert.equal(l.steps.length,4);assert.equal(l.examples.length,2);assert.equal(l.quiz.length,3);assert(l.source&&l.formula&&l.take);
 for(const id of l.related)assert(ids.has(id),`Broken related lesson ${id}`);
 for(const q of l.quiz){assert(!qids.has(q.id));qids.add(q.id);assert(!prompts.has(q.prompt),`Repeated prompt ${q.prompt}`);prompts.add(q.prompt);assert(q.why.length>10);if(q.type==='mc'){assert(q.answer>=0&&q.answer<q.options.length);assert.equal(new Set(q.options).size,q.options.length);}else{assert(q.answer.length&&q.answer.every(a=>a.trim()));}questions++;}
}
assert.equal(questions,150);
const layoutCode=app.slice(app.indexOf('function mapLayout('),app.indexOf('function edgePath'));
let layouts=0;
for(const viewport of [{width:288,compact:true},{width:346,compact:true},{width:402,compact:true},{width:739,compact:true},{width:700,compact:false},{width:1140,compact:false}])for(const size of [90,100,115])for(const space of [85,100,130])for(const focus of [null,...d.groups.map(g=>g.id)]){
 const state={focus,map:{}},ctx=vm.createContext({groups:d.groups,state,data:{view:{size,space}},groupOf:id=>d.groups.find(g=>g.id===id),viewport});vm.runInContext(layoutCode+'\nmapLayout(viewport);',ctx);
 const nodes=state.map.nodes;assert.equal(nodes.filter(n=>n.type==='lesson').length,focus?d.groups.find(g=>g.id===focus).ids.length:0);
 assert(Number.isFinite(state.map.bounds.w)&&state.map.bounds.w>0);assert(Number.isFinite(state.map.bounds.h)&&state.map.bounds.h>0);
 for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
  const a=nodes[i],b=nodes[j];const overlap=Math.abs(a.x-b.x)<(a.w+b.w)/2&&Math.abs(a.y-b.y)<(a.h+b.h)/2;assert(!overlap,`Node overlap ${focus}: ${a.id}, ${b.id} at ${size}/${space}/${viewport.width}`);
 }
 if(viewport.compact){const parents=nodes.filter(n=>n.type==='root'||focus&&n.type==='group');const parent=parents[0];for(const child of nodes.filter(n=>n!==parent))assert(child.y-child.h/2>parent.y+parent.h/2);}
 layouts++;
}
console.log(`Passed: 50 lessons, 100 examples, 150 unique questions, valid links and answers; no node overlaps across ${layouts} phone/tablet/desktop layout configurations.`);

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
