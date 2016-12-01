var exports = module.exports = {};

var dayOneInput = ['L2', 'L5', 'L5', 'R5', 'L2', 'L4', 'R1', 'R1', 'L4', 'R2', 'R1',
                    'L1', 'L4', 'R1', 'L4', 'L4', 'R5', 'R3', 'R1', 'L1', 'R1', 'L5',
                     'L1', 'R5', 'L4', 'R2', 'L5', 'L3', 'L3', 'R3', 'L3', 'R4', 'R4',
                      'L2', 'L5', 'R1', 'R2', 'L2', 'L1', 'R3', 'R4', 'L193', 'R3', 'L5',
                       'R45', 'L1', 'R4', 'R79', 'L5', 'L5', 'R5', 'R1', 'L4', 'R3', 'R3',
                        'L4', 'R185', 'L5', 'L3', 'L1', 'R5', 'L2', 'R1', 'R3', 'R2', 'L3',
                         'L4', 'L2', 'R2', 'L3', 'L2', 'L2', 'L3', 'L5', 'R3', 'R4', 'L5',
                          'R1', 'R2', 'L2', 'R4', 'R3', 'L4', 'L3', 'L1', 'R3', 'R2', 'R1',
                           'R1', 'L3', 'R4', 'L5', 'R2', 'R1', 'R3', 'L3', 'L2', 'L2', 'R2',
                            'R1', 'R2', 'R3', 'L3', 'L3', 'R4', 'L4', 'R4', 'R4', 'R4', 'L3',
                             'L1', 'L2', 'R5', 'R2', 'R2', 'R2', 'L4', 'L3', 'L4', 'R4', 'L5',
                              'L4', 'R2', 'L4', 'L4', 'R4', 'R1', 'R5', 'L2', 'L4', 'L5', 'L3',
                               'L2', 'L4', 'L4', 'R3', 'L3', 'L4', 'R1', 'L2', 'R3', 'L2', 'R1',
                                'R2', 'R5', 'L4', 'L2', 'L1', 'L3', 'R2', 'R3', 'L2', 'L1', 'L5',
                                 'L2', 'L1', 'R4']

var dayOne = exports.dayOne = function(input) {
  var directions = ['N', 'E', 'S', 'W'];
  var currentDir = directions[0];
  var currentPos = [0, 0];
  var cache = [];
  var solution;

  var changeDirection = function(turn) {
    var currentIdx = directions.indexOf(currentDir);

    if (turn === 'R') {
      currentDir = directions[currentIdx + 1];
      if (currentDir === undefined) {
        currentDir = directions[0];
      }
    } else {
      currentDir = directions[currentIdx - 1];
      if (currentDir === undefined) {
        currentDir = directions[3];
      }
    }
  };

  var checkPos = function() {
    console.log("checking cache for position ", currentPos);
    var seen = false;
    cache.forEach(function(previous) {
      if (previous[0] === currentPos[0] && previous[1] === currentPos[1]) {
        seen = true;
      }
    });

    if (seen) {
      console.log("already been here")
      solution = currentPos;
      Object.freeze(solution);
    } else {
      console.log("new location ")
      cache.push(currentPos.slice(0));
    }
  };

  var move = function(distance) {
    switch (currentDir) {
      case 'N':
        while(distance) {
          currentPos[1]++;
          distance--;
          checkPos();
        }
        break;
      case 'S':
        while(distance) {
          currentPos[1]--;
          distance--;
          checkPos();
        }
        break;
      case 'E':
        while(distance) {
          currentPos[0]++;
          distance--;
          checkPos();
        }
        break;
      case 'W':
        while(distance) {
          currentPos[0]--;
          distance--;
          checkPos();
        }
        break;
    }
  };

  input.forEach(function(instruction) {
    var turn = instruction.slice(0, 1);
    var distance = instruction.slice(1);
    changeDirection(turn);
    move(parseInt(distance));
  });

  return solution.reduce(function(total, val) {
    return total + Math.abs(val);
  }, 0);
};

var dayOneResult = dayOne(dayOneInput);

console.log("Day One Result: ", dayOneResult);
