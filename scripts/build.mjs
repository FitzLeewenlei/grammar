import {mkdir,copyFile} from 'node:fs/promises';
const files=['index.html','app.js','content.js','content-additions.js','lesson-details-lexis.js','lesson-details-verbs.js','content-detail-nouns.js','content-detail-lexis.js','content-detail-clauses.js','beginner-guide.js','atlas.js','graph.js','nebula-graph.js','video-resources.js','progress.js','games-content.js','games.js','pane-resize.js','styles.css','responsive.css','games.css','pane-resize.css','beginner-guide.css','nebula.css','video-resources.css','.nojekyll'];
const destination=new URL('../dist/',import.meta.url);await mkdir(destination,{recursive:true});
for(const file of files)await copyFile(new URL('../'+file,import.meta.url),new URL(file,destination));
console.log(`Built ${files.length} static files in dist/. No dependency installation is required.`);
