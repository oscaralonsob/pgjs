import Room from './Model/Room.js'

let room1 = Room.create(5);
let room2 = Room.create(4, 3);

console.log(room1.origin.x, room1.origin.y);
console.log(room1.end.x, room1.end.y);

room1.move(room2.end);
console.log(room1.origin.x, room1.origin.y);
console.log(room1.end.x, room1.end.y);