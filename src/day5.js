var md5 = require('js-md5');
var exports = module.exports = {};

const run = exports.run = function(input) {
  let answer = '********';
  let counter = 0;
  while(answer.indexOf('*') !== -1) {
    const hash = md5(input + counter);
    if (hash.slice(0, 5) === '00000') {
      let index = hash[5];
      if (index < 0 || index > 8 || answer[index] !== '*') {
        counter++;
        continue;
      }
      let firstPart = answer.substring(0, index);
      let secondPart = answer.substring(1 + parseInt(index));
      answer = firstPart + hash[6] + secondPart;
    }
    counter++;
  }
  return answer;
};
// 
// const doorID = 'uqwqemis';
// const result = run(doorID);
// console.log("DAY FIVE RESULT: ", result);
