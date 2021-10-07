let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let i = 0;
while (true) {
    const [a, b] = input[i].split(' ');
    if (a === '0' && b === '0') return;
    console.log(Number(a) + Number(b));
    i++;
}
