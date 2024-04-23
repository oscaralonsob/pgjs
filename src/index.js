import RoomsGeneratorCommandHandler from './Generator/RoomsGeneratorCommandHandler.js'
import MoveRoomsGeneratorCommandHandler from './Generator/MoveRoomsGeneratorCommandHandler.js'
import DrawRooms from './Draw/DrawRooms.js'
import DrawHallways from './Draw/DrawHallways.js'
import GenerateGraphCommandHandler from './Generator/GenerateGraphCommandHandler.js'
import CalculateMinimalGraphCommandHandler from './Generator/CalculateMinimalGraphCommandHandler.js'


let rgch = RoomsGeneratorCommandHandler.create();

let rooms = rgch.execute(25, 2, 10);

let mrgch = MoveRoomsGeneratorCommandHandler.create();

let movedRooms = mrgch.execute(rooms);

let drawRooms = DrawRooms.create();
drawRooms.execute(movedRooms, document.getElementById('canvas'));

let ggch = GenerateGraphCommandHandler.create();

let graph = ggch.execute(movedRooms);

let cmgch = CalculateMinimalGraphCommandHandler.create();

graph = cmgch.execute(graph);

let drawHallways = DrawHallways.create();
drawHallways.execute(graph.hallways, document.getElementById('canvas'));