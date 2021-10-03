let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const number = Number(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}
