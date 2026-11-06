import {mkdir,copyFile} from 'node:fs/promises';
const files=['index.html','app.js','content.js','content-additions.js','lesson-details-lexis.js','lesson-details-verbs.js','atlas.js','graph.js','progress.js','games-content.js','games.js','pane-resize.js','styles.css','responsive.css','games.css','pane-resize.css','.nojekyll'];
const destination=new URL('../dist/',import.meta.url);await mkdir(destination,{recursive:true});
for(const file of files)await copyFile(new URL('../'+file,import.meta.url),new URL(file,destination));
console.log(`Built ${files.length} static files in dist/. No dependency installation is required.`);
