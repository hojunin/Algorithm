let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const number = Number(input[0]);
const stars = (target) => {
    let res = '';
    for (let i = 0; i < number; i++) {
        if (i < target - 1) {
            res += ' ';
        } else {
            res += '*';
        }
    }
    return res;
};

for (let i = number; i >= 1; i--) {
    console.log(stars(i));
}
