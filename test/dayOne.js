const assert = require('assert');
const solver = require('../index.js');

xdescribe('Day One', function() {

  // task one has been ignored to complete task 2
  xit('should resolve the first example', function() {
    const exampleOne = ['R2', 'L3'];
    const result = solver.dayOne(exampleOne);
    assert.equal(5, result);
  });

  xit('should resolve the second example', function() {
    const exampleTwo = ['R2', 'R2', 'R2'];
    const result = solver.dayOne(exampleTwo);
    assert.equal(2, result);
  });

  xit('should resolve the third example', function() {
    const exampleThree = ['R5', 'L5', 'R5', 'R3'];
    const result = solver.dayOne(exampleThree);
    assert.equal(12, result);
  });

  it('should resolve the example for task two', function() {
    const taskTwoExample = ['R8', 'R4', 'R4', 'R8'];
    const result = solver.dayOne(taskTwoExample);
    assert.equal(4, result);
  });

});

describe('Day Two', function() {

})
