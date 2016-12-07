const assert = require('assert');
const solver = require('../index.js');

describe('Day Seven', function() {

  it('should solve the example', function() {
    const input = ['aba[bab]xyz', 'xyx[xyx]xyx', 'aaa[kek]eke', 'zazbz[bzb]cdb']
    const result = solver.day7(input);
    assert.equal(3, result);
  });

});
