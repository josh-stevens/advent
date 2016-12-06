const assert = require('assert');
const solver = require('../index.js');

describe('Day Three', function() {

  it('should solve an example with one possible triangle and two impossible', function() {
    const input = [['5', '10', '25'], ['10', '10', '25'], ['20', '10', '25']];
    const result = solver.day3(input);
    assert.equal(1, result);
  });
});
