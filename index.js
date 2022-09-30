// console.log('start execution...');

// setTimeout(() => {
//     console.log('logic execution...');
// }, 2000)

// console.log('complete execution...');


// drawback of asynchronus programming......
// let a = 20;
// let b = 0;
// setTimeout(() => {
//     b = 30;
// }, 2000);

// console.log(a + b);


// solution of drawback
let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
})

waitingData.then((data) => {
    b = data;
    console.log(a + b);
})
