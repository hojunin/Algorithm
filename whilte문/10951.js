let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let i = 0;
while (input.length > i) {
    const [a, b] = input[i].split(' ');
    console.log(Number(a) + Number(b));
    i++;
}
