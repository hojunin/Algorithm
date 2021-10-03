let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const first = Number(input[0]);
const second = Number(input[1]);

const mul1 = first * (second % 10);
const mul2 = first * parseInt((second % 100) / 10);
const mul3 = first * parseInt(second / 100);
console.log(mul1);
console.log(mul2);
console.log(mul3);
console.log(mul1 + mul2 * 10 + mul3 * 100);
