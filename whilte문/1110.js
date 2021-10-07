let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const INPUT = Number(input[0]);
let count = 0;

const makeNum = (number) => {
    const first = parseInt(number / 10);
    const second = number % 10;
    const nextFlag = (first + second) % 10;
    return Number(String(number % 10) + String(nextFlag));
};

const call = (number) => {
    count++;
    console.log('🚀 ~ file: 1110.js ~ line 26 ~ call ~ count', count);
    if (number < 10) {
        call((number *= 10));
        return;
    }
    const newNumber = makeNum(number);
    if (newNumber === INPUT) {
        return count;
    }
    call(newNumber);
};
const newCount = call(INPUT);
console.log(newCount);

// while (f !== s) {
//     count++;
//     if (s < 10) {
//         s *= 10;
//         continue;
//     }
//     const first = parseInt(f / 10);
//     const second = f % 10;
//     const nextFlag = (first + second) % 10;
//     f = Number(String(s % 10) + String(nextFlag));
//     if (count === 3) return;
// }
// console.log(count);
