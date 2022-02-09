const targetArray = [1, 5, 2, 6, 3, 7, 4];
const commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];

function solution(array, commands) {
    let answer = [];
    for (let command of commands) {
        answer.push(array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1]);
    }

    return answer;
}
