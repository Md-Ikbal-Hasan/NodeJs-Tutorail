/*
// import from another js file
const app = require('./app')
console.log(app);
console.log(app.x, app.y, app.z());

// file system
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello  Ikbal')

const wrtFile = require('fs').writeFileSync;
wrtFile('test.txt', 'This is for test')

// directory and filename
console.log(__dirname);
console.log(__filename);
*/

/*
const http = require('http');

http.createServer((req, resp) => {
    resp.write('<h1> Hello ,  This is Ikbal Hosen </h1>');
    resp.end();


}).listen(4500);

*/

var colors = require('colors')
console.log("Node package".green);


// Importing module
const chalk = require("chalk");

// Printing the text
console.log(chalk.red("Ikbal"))
