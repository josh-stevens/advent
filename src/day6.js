const fs = require('fs');
var exports = module.exports = {};

let day6Input = fs.readFileSync('input/day6.txt', 'utf8').split('\n');
day6Input.pop();

const run = exports.run = function(input) {
  const mem = [];

  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[0].length; j++) {
      if (!mem[j]) {
        mem[j] = {};
      }

      let letter = input[i][j];
      if (!mem[j][letter]) {
        mem[j][letter] = 1;
      } else {
        mem[j][letter]++;
      }
    }
  }

  const result = mem.reduce(function(acc, letterCount) {
    let leastCommon = undefined;
    let lowestCount = Infinity;
    for (var letter in letterCount) {
      if (letterCount[letter] < lowestCount) {
        lowestCount = letterCount[letter];
        leastCommon = letter;
      }
    }
    return acc += leastCommon;
  }, '')

  return result;
}

console.log("DAY 6 SOLUTION: ", run(day6Input));
