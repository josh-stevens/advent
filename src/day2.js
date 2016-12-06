const fs = require('fs');
var exports = module.exports = {};

const day2Input = fs.readFileSync('input/day2.txt', 'utf8').split('\n');

// have to pop off the newline at end of file
day2Input.pop();

const makeKeypad = function(bonus) {
  const keypad = [];
  if (bonus) {
    keypad.push([undefined, undefined, 1, undefined, undefined]);
    keypad.push([undefined, 2, 3, 4, undefined]);
    keypad.push([5, 6, 7, 8, 9]);
    keypad.push([undefined, 'A', 'B', 'C', undefined]);
    keypad.push([undefined, undefined, 'D', undefined, undefined]);
  } else {
    for (let i = 0; i < 9; i = i + 3) {
      const row = [];
      row.push(i + 1);
      row.push(i + 2);
      row.push(i + 3);
      keypad.push(row);
    }
  }
  return keypad;
};

const run = exports.run = function(input, bonus) {
  const keypad = makeKeypad(bonus);
  let solution = '';
  let currentRow, currentCol;
  if (bonus) {
    currentRow = 2;
    currentCol = 0;
  } else {
    currentRow = 1;
    currentCol = 1;
  }

  input.forEach(function(moves) {
    moves.split('').forEach(function(move) {
      if (move === 'U' && keypad[currentRow - 1] !== undefined && keypad[currentRow - 1][currentCol] !== undefined) {
        currentRow--;
      } else if (move === 'D' && keypad[currentRow + 1] !== undefined && keypad[currentRow + 1][currentCol] !== undefined) {
        currentRow++;
      } else if (move === 'L' && keypad[currentRow][currentCol - 1] !== undefined) {
        currentCol--;
      } else if (move === 'R' && keypad[currentRow][currentCol + 1] !== undefined) {
        currentCol++;
      }
    });
    solution += keypad[currentRow][currentCol];
  });

  return solution;
};

console.log("DAY TWO SOLUTION: ", run(day2Input));
console.log("DAY TWO BONUS SOLUTION: ", run(day2Input, true));
