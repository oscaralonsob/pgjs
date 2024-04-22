import RoomsGeneratorCommand from './Generator/RoomsGeneratorCommand.js'
import RoomsGeneratorCommandHandler from './Generator/RoomsGeneratorCommandHandler.js'
import MoveRoomsGeneratorCommand from './Generator/MoveRoomsGeneratorCommand.js'
import MoveRoomsGeneratorCommandHandler from './Generator/MoveRoomsGeneratorCommandHandler.js'
import DrawRooms from './Draw/DrawRooms.js'
import CalculateClosestRoomCommand from './Generator/CalculateClosestRoomCommand.js'
import CalculateClosestRoomCommandHandler from './Generator/CalculateClosestRoomCommandHandler.js'
import DrawEdge from './Draw/DrawEdge.js'


let rgc = RoomsGeneratorCommand.create(25, 2, 10);
let rgch = RoomsGeneratorCommandHandler.create();

let rooms = rgch.execute(rgc);

let mrgc = MoveRoomsGeneratorCommand.create(rooms);
let mrgch = MoveRoomsGeneratorCommandHandler.create();

let movedRooms = mrgch.execute(mrgc);

let drawRooms = DrawRooms.create();
drawRooms.execute(movedRooms, document.getElementById('canvas'));

let crc = CalculateClosestRoomCommand.create(movedRooms[0], movedRooms)
let crch = CalculateClosestRoomCommandHandler.create();

let closestRoom = crch.execute(crc);

let drawEdge = DrawEdge.create();
drawEdge.execute(movedRooms[0], closestRoom, document.getElementById('canvas'));