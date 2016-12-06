const assert = require('assert');
const solver = require('../index.js');

describe('Day Four', function() {

  it('should solve the example', function() {
    const input = ['aaaaa-bbb-z-y-x-123[abxyz]', 'a-b-c-d-e-f-g-h-987[abcde]', 'not-a-real-room-404[oarel]', 'totally-real-room-200[decoy]'];
    const result = solver.day4(input);
    assert.equal(1514, result);
  });

});
