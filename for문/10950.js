let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const length = Number(input[0]);

for (let i = 1; i <= length; i++) {
    const [first, second] = input[i].split(' ');
    console.log(Number(first) + Number(second));
}
