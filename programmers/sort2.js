const data1 = [6, 2, 10];
const data2 = [3, 30, 34, 5, 9];

const solution = (numbers) => {
    let answer = '';

    const results = numbers.sort((a, b) => sumWithString(b, a) - sumWithString(a, b));
    for (let data of results) {
        answer = answer.concat(String(data));
    }
    return answer;
};

const sumWithString = (a, b) => Number(String(a) + String(b));

solution(data1);
solution(data2);
