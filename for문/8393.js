let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const number = Number(input[0]);
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log(sum);
