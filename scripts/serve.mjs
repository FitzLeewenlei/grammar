import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep,basename} from 'node:path';
import {fileURLToPath} from 'node:url';
const args=process.argv.slice(2);
function option(name,fallback){const i=args.indexOf(name);if(i<0)return fallback;if(!args[i+1])throw new Error('Missing value for '+name);return args[i+1];}
const root=resolve(fileURLToPath(new URL('../',import.meta.url)),option('--dir','.'));
const host=option('--host','127.0.0.1'),port=Number(option('--port','4318'));
if(!Number.isInteger(port)||port<0||port>65535)throw new Error('Invalid port.');
const rawBase=option('--base','/');const base='/'+rawBase.split('/').filter(Boolean).join('/')+(rawBase.split('/').filter(Boolean).length?'/':'');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.md':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon'};
const server=http.createServer(async(req,res)=>{
 try{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
  const url=new URL(req.url,'http://localhost');const pathname=decodeURIComponent(url.pathname);
  if(base!=='/'&&pathname===base.slice(0,-1)){res.writeHead(308,{Location:base+url.search});res.end();return;}
  if(!pathname.startsWith(base)){res.writeHead(404);res.end('Not found');return;}
  let file=resolve(root,pathname.slice(base.length)||'index.html');
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);res.end('Forbidden');return;}
  if(basename(file).startsWith('.')&&basename(file)!=='.nojekyll'){res.writeHead(404);res.end('Not found');return;}
  if((await stat(file)).isDirectory())file=resolve(file,'index.html');
  const bytes=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:bytes);
 }catch{res.writeHead(404);res.end('Not found');}
});
server.on('error',err=>{console.error(err.message);process.exitCode=1;});
server.listen(port,host,()=>{console.log('Local: http://'+host+':'+server.address().port+base);});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(()=>process.exit(0)));
