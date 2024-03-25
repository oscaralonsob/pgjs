import RoomGeneratorCommand from './Generator/RoomGeneratorCommand.js'
import RoomGeneratorCommandHandler from './Generator/RoomGeneratorCommandHandler.js'

let rgc = RoomGeneratorCommand.create(4, 3);
let rgch = RoomGeneratorCommandHandler.create();

let room = rgch.execute(rgc);
console.log(room);