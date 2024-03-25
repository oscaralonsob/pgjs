import RoomsGeneratorCommand from './Generator/RoomsGeneratorCommand.js'
import RoomsGeneratorCommandHandler from './Generator/RoomsGeneratorCommandHandler.js'
import MoveRoomsGeneratorCommand from './Generator/MoveRoomsGeneratorCommand.js'
import MoveRoomsGeneratorCommandHandler from './Generator/MoveRoomsGeneratorCommandHandler.js'
import DrawRooms from './Draw/DrawRooms.js'


let rgc = RoomsGeneratorCommand.create(25, 2, 10);
let rgch = RoomsGeneratorCommandHandler.create();

let rooms = rgch.execute(rgc);

let mrgc = MoveRoomsGeneratorCommand.create(rooms);
let mrgch = MoveRoomsGeneratorCommandHandler.create();

let movedRooms = mrgch.execute(mrgc);

let drawRooms = DrawRooms.create();
drawRooms.execute(movedRooms, document.getElementById('canvas'));