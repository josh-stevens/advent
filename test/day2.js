const assert = require('assert');
const solver = require('../index.js');

describe('Day Two', function() {
  const input = ['ULL', 'RRDDD', 'LURDL', 'UUUUD'];

  it('should solve the example', function() {
    const result = solver.day2(input);
    assert.equal('1985', result);
  });

  it('should solve the bonus example', function() {
    const result = solver.day2(input, true);
    assert.equal('5DB3', result);
  })

});
