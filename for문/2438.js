let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const number = Number(input[0]);
const stars = (number) => {
    return '*'.repeat(number);
};

for (let i = 1; i <= number; i++) {
    console.log(stars(i));
}
