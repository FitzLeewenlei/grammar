import {mkdir,copyFile} from 'node:fs/promises';
const files=['index.html','app.js','content.js','atlas.js','graph.js','progress.js','games-content.js','games.js','styles.css','responsive.css','games.css','.nojekyll'];
const destination=new URL('../dist/',import.meta.url);await mkdir(destination,{recursive:true});
for(const file of files)await copyFile(new URL('../'+file,import.meta.url),new URL(file,destination));
console.log(`Built ${files.length} static files in dist/. No dependency installation is required.`);
