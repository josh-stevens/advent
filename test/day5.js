const assert = require('assert');
const solver = require('../index.js');

xdescribe('Day Five', function() {

  this.timeout(45000);

  it('should solve the example', function() {
    const doorID = 'abc';
    const result = solver.day5(doorID);
    // assert.equal('18f47a30', result);
    assert.equal('05ace8e3', result);
  });

});
