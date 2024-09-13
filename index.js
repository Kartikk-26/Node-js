console.log("Hello");

//console.log(window);
//console.log(process);
//Console 

const fs  = require('fs');

console.log('Reading File Started')
const data = fs.readFileSync('./index.txt','utf-8')

console.log(data);
console.log('Reading File ended');


fs.writeFileSync('./TestFile.txt','Hello test file here');
