const fs = require('fs');
var exports = module.exports = {};

let day4Input = fs.readFileSync('input/day4.txt', 'utf8').split('\n');
day4Input.pop();

const checkSum = function(mem) {
  const sorted = Object.keys(mem).sort(function(a, b) {
    if (mem[a] === mem[b]) {
      if (a < b) return -1;
      if (a > b) return 1;
    }
    return mem[b] - mem[a];
  });
  return sorted.slice(0, 5).join('');
}

const checkRoom = function(str) {
  str = str.split('[');
  const name = str[0].replace(/[0-9]|-/g, '');
  const validChecksum = str[1].slice(0, -1);
  const memory = {};

  for (var i = 0; i < name.length; i++) {
    if(memory[name[i]]) {
      memory[name[i]]++;
    } else {
      memory[name[i]] = 1;
    }
  }

  const checksum = checkSum(memory);
  return checksum === validChecksum;
}

const getId = function(str) {
  return parseInt(str.match(/\d/g).join(''));
};

const run = exports.run = function(input, bonus) {
  const realRoomIds = input.filter(checkRoom)
                           .map(getId);

  if (!bonus) {
    return realRoomIds.reduce(function(acc, next) {
      return acc + next;
    }, 0);
  }
  const realRooms = input.filter(checkRoom)
                         .map(function(room) {
                           return room.split(/[0-9]/)[0].slice(0, -1);
                         })
                         .map(function(room, idx) {
                           let sectorId = realRoomIds[idx];
                           for (var i = 0; i < room.length; i++) {
                             if (room[i] === '-') {
                               room = room.substr(0, i) + ' ' + room.substr(i+1);
                               continue;
                             }
                             let code = room.charCodeAt(i);
                             code = ((code - 97 + sectorId) % 26) + 97;
                             let chr = String.fromCharCode(code);
                             room = room.substr(0, i) + chr + room.substr(i+1);
                           }
                           return room;
                         });
  return realRoomIds[165];
};

console.log("DAY FOUR SOLUTION: ", run(day4Input));
console.log("DAY FOUR BONUS: ", run(day4Input, true));
