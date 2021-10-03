let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const length = Number(input[0]);
let answer = '';
for (let i = 1; i <= length; i++) {
    const [first, second] = input[i].split(' ');
    answer += `Case #${i}: ${first} + ${second} = ${Number(first) + Number(second)}\n`;
}

console.log(answer);
