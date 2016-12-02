const fs = require('fs');
var exports = module.exports = {};

const dayOneInput = fs.readFileSync('input/dayOne.txt', 'utf8').split(', ');

const dayOne = exports.dayOne = function(input) {
  const directions = ['N', 'E', 'S', 'W'];
  const currentPos = [0, 0];
  const cache = [];
  let solution;
  let currentDir = directions[0];

  const changeDirection = function(turn) {
    const currentIdx = directions.indexOf(currentDir);

    if (turn === 'R') {
      currentDir = directions[currentIdx + 1];
      if (currentDir === undefined) {
        currentDir = directions[0];
      }
    } else {
      currentDir = directions[currentIdx - 1];
      if (currentDir === undefined) {
        currentDir = directions[3];
      }
    }
  };

  const checkPos = function() {
    let seen = false;
    cache.forEach(function(previous) {
      if (previous[0] === currentPos[0] && previous[1] === currentPos[1]) {
        seen = true;
      }
    });

    if (seen) {
      solution = currentPos;
      Object.freeze(solution);
    } else {
      cache.push(currentPos.slice(0));
    }
  };

  const move = function(distance) {
    switch (currentDir) {
      case 'N':
        while(distance) {
          currentPos[1]++;
          distance--;
          checkPos();
        }
        break;
      case 'S':
        while(distance) {
          currentPos[1]--;
          distance--;
          checkPos();
        }
        break;
      case 'E':
        while(distance) {
          currentPos[0]++;
          distance--;
          checkPos();
        }
        break;
      case 'W':
        while(distance) {
          currentPos[0]--;
          distance--;
          checkPos();
        }
        break;
    }
  };

  input.forEach(function(instruction) {
    const turn = instruction.slice(0, 1);
    const distance = instruction.slice(1);
    changeDirection(turn);
    move(parseInt(distance));
  });

  return solution.reduce(function(total, val) {
    return total + Math.abs(val);
  }, 0);
};

// const dayOneResult = dayOne(dayOneInput);
//
// console.log("Day One Result: ", dayOneResult);

const dayTwoInput = fs.readFileSync('input/dayTwo.txt', 'utf8').split('\n');

// have to pop off the newline at end of file
dayTwoInput.pop();

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

const dayTwo = exports.dayTwo = function(input, bonus) {
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

console.log("DAY TWO SOLUTION: ", dayTwo(dayTwoInput));
console.log("DAY TWO BONUS SOLUTION: ", dayTwo(dayTwoInput, true));
