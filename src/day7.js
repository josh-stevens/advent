const fs = require('fs');
var exports = module.exports = {};

let day7Input = fs.readFileSync('input/day7.txt', 'utf8').split('\n');
day7Input.pop();

const run = exports.run = function(input) {
  let counter = 0;
  input.forEach(function(address) {
    const splitAddress = address.split(/\[|\]/);
    let abaList = [];
    let babList = [];
    let flag = false;

    splitAddress.forEach(function(test, idx) {
      for (var i = 0; i <= test.length - 3; i++) {
        const testStr = test.slice(i, i+3);
        if (testStr[0] === testStr[2] && testStr[0] !== testStr[1]) {
          if (idx % 2 === 0) {
            abaList.push(testStr);
          } else {
            babList.push(testStr);
          }
        }
      }
    });
    abaList.forEach(function(aba) {
      babList.forEach(function(bab) {
        if (aba[0] === bab[1] && aba[1] === bab[0]) {
          flag = true;
        }
      })
    })

    if (flag) {
      counter++;
    }
  });
  return counter;
};

console.log("DAY 7 RESULT: ", run(day7Input))
