import RoomsGeneratorCommand from './Generator/RoomsGeneratorCommand.js'
import RoomsGeneratorCommandHandler from './Generator/RoomsGeneratorCommandHandler.js'

let rgc = RoomsGeneratorCommand.create(10, 2, 5);
let rgch = RoomsGeneratorCommandHandler.create();

let room = rgch.execute(rgc);
console.log(room);