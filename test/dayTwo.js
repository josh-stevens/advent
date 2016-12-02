const assert = require('assert');
const solver = require('../index.js');

describe('Day Two', function() {
  const input = ['ULL', 'RRDDD', 'LURDL', 'UUUUD'];

  it('should solve the example', function() {
    const result = solver.dayTwo(input);
    assert.equal('1985', result);
  });

  it('should solve the bonus example', function() {
    const result = solver.dayTwo(input, true);
    assert.equal('5DB3', result);
  })

});
