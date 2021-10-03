let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const year = Number(input[0]);

const isDivBy400 = (year) => {
    return year % 400 === 0;
};
const isDivBy100 = (year) => {
    return year % 100 === 0;
};

const isDivBy4 = (year) => {
    return year % 4 === 0;
};

const isYun = (year) => {
    return isDivBy400(year) || (isDivBy4(year) && !isDivBy100(year));
};

console.log(isYun(year) ? 1 : 0);
