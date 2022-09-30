const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');

// create file...........
// fs.writeFileSync(`${dirPath}/apple.txt`, `this is simple text file`);
// fs.writeFileSync(`${dirPath}/test.html`, `this is simple html file`);

const filePath = `${dirPath}/apple.txt`;


// read file  ..........
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })


// update file ........
// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//     if (!err) console.log('file is updated');
// });


// rename file ........
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
    if (!err) console.log('file name is updated');
})

// delete file ........
// fs.unlinkSync(`${dirPath}/fruit.txt`)
