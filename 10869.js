let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(input[0]), Number(input[1]));
console.log(Number(input[0]) + Number(input[1]));
console.log(Number(input[0]) - Number(input[1]));
console.log(Number(input[0]) * Number(input[1]));
console.log(parseInt(Number(input[0]) / Number(input[1])));
console.log(Number(input[0]) % Number(input[1]));
