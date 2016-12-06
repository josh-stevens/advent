const fs = require('fs');
var exports = module.exports = {};

const day1Input = fs.readFileSync('input/day1.txt', 'utf8').split(', ');

const run = exports.run = function(input) {
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

const result = run(day1Input);

console.log("Day 1 Result: ", result);
