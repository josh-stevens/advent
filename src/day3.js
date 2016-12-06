const fs = require('fs');
var exports = module.exports = {};

let day3Input = fs.readFileSync('input/day3.txt', 'utf8').split('\n');

day3Input = day3Input.map(function(row) {
  return row.trim().split(/\s+/g);
});

let day3BonusInput = fs.readFileSync('input/day3.txt', 'utf8').split(/\s+/);

let a = day3BonusInput.filter(function(num, idx) {
  return idx % 3 === 1;
});
let b = day3BonusInput.filter(function(num, idx) {
  return idx % 3 === 2;
});
let c = day3BonusInput.filter(function(num, idx) {
  return idx % 3 === 0;
});

day3BonusInput = [];

for (var i = 0; i < a.length; i = i + 3) {
  day3BonusInput.push([a[i], a[i+1], a[i+2]], [b[i], b[i+1], b[i+2]], [c[i], c[i+1], c[i+2]]);
}

const run = exports.run = function(input) {
  let triangleCount = 0;
  input.forEach(function(row) {
    let a = parseInt(row[0]);
    let b = parseInt(row[1]);
    let c = parseInt(row[2]);
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
      triangleCount++;
    }
  });
  return triangleCount;
};

console.log("DAY THREE SOLUTION: ", run(day3Input));
console.log("DAY THREE BONUS: ", run(day3BonusInput));
