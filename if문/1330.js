let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const first = Number(input[0]);
const second = Number(input[1]);

if (first > second) {
    console.log('>');
} else if (first < second) {
    console.log('<');
} else {
    console.log('==');
}
