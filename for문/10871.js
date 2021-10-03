let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [n, x] = input[0].split(' ');
const a = input[1];
const N = Number(n);
const X = Number(x);
const A = a.split(' ').map((data) => Number(data));

let answer = '';

for (let i = 0; i < A.length; i++) {
    if (A[i] < X) {
        answer += `${A[i]} `;
    }
}
console.log(answer);
