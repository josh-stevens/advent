var assert = require('assert');
var solver = require('../index.js');

describe('Day One', function() {

  // task one has been ignored to complete task 2
  xit('should resolve the first example', function() {
    var exampleOne = ['R2', 'L3'];
    var result = solver.dayOne(exampleOne);
    assert.equal(5, result);
  });

  xit('should resolve the second example', function() {
    var exampleTwo = ['R2', 'R2', 'R2'];
    var result = solver.dayOne(exampleTwo);
    assert.equal(2, result);
  });

  xit('should resolve the third example', function() {
    var exampleThree = ['R5', 'L5', 'R5', 'R3'];
    var result = solver.dayOne(exampleThree);
    assert.equal(12, result);
  });

  it('should resolve the example for task two', function() {
    var taskTwoExample = ['R8', 'R4', 'R4', 'R8'];
    var result = solver.dayOne(taskTwoExample);
    assert.equal(4, result);
  });

});
