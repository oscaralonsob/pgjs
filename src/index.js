import RoomsGeneratorCommand from './Generator/RoomsGeneratorCommand.js'
import RoomsGeneratorCommandHandler from './Generator/RoomsGeneratorCommandHandler.js'
import MoveRoomsGeneratorCommand from './Generator/MoveRoomsGeneratorCommand.js'
import MoveRoomsGeneratorCommandHandler from './Generator/MoveRoomsGeneratorCommandHandler.js'

let rgc = RoomsGeneratorCommand.create(10, 2, 5);
let rgch = RoomsGeneratorCommandHandler.create();

let rooms = rgch.execute(rgc);

let mrgc = MoveRoomsGeneratorCommand.create(rooms);
let mrgch = MoveRoomsGeneratorCommandHandler.create();

let movedRooms = mrgch.execute(mrgc);