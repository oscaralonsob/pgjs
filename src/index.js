import Room from './Model/Room.js'
import Dungeon from './Model/Dungeon.js'

let room1 = Room.create(5);
let room2 = Room.create(4, 3);

let dungeon = Dungeon.create([room1, room2]);
room1.move(room2.end);
console.log(dungeon.rooms);