let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let hour = Number(input[0]);
let min = Number(input[1]);

if (min - 45 < 0) {
    min = 60 + min - 45;
    if (hour === 0) {
        hour = 23;
    } else {
        hour = hour - 1;
    }
} else {
    min = min - 45;
}
console.log(hour + ' ' + min);
