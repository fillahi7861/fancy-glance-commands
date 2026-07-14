// glance command

const fs = require('fs');
const test = process.argv[2];
const content = fs.readFileSync(test, 'utf-8');
const lines = content.split('\n').filter(line => line.length > 0);

console.log(`---${test} (${lines.length} lines) ---`);
console.log('First 5:');
console.log(lines.slice(0,5).join('\n'));
console.log('...');
console.log('Last 5:');
console.log(lines.slice(-5).join('\n'));

git init 
git add newfile.js
git commit -m "Add glance command"
git branch -M main
git branch add origin https://github.com/fillahi7861/fancy-glance-commands.git
git push -u origin main