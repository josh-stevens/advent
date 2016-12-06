const assert = require('assert');
const solver = require('../index.js');

describe('Day Six', function() {

  it('should solve the example', function() {
    const input = ['eedadn', 'drvtee', 'eandsr', 'raavrd', 'atevrs', 'tsrnev', 'sdttsa', 'rasrtv',
                    'nssdts', 'ntnada', 'svetve', 'tesnvt', 'vntsnd', 'vrdear', 'dvrsen', 'enarar']
    const result = solver.day6(input);
    assert.equal('advent', result);
  });

});
