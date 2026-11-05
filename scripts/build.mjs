import {mkdir,copyFile} from 'node:fs/promises';
const files=['index.html','app.js','content.js','styles.css','responsive.css','.nojekyll'];
const destination=new URL('../dist/',import.meta.url);await mkdir(destination,{recursive:true});
for(const file of files)await copyFile(new URL('../'+file,import.meta.url),new URL(file,destination));
console.log('Built 6 static files in dist/. No dependency installation is required.');
