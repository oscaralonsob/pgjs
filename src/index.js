import RoomsGeneratorCommand from './Generator/RoomsGeneratorCommand.js'
import RoomsGeneratorCommandHandler from './Generator/RoomsGeneratorCommandHandler.js'
import MoveRoomsGeneratorCommand from './Generator/MoveRoomsGeneratorCommand.js'
import MoveRoomsGeneratorCommandHandler from './Generator/MoveRoomsGeneratorCommandHandler.js'
import DrawRooms from './Draw/DrawRooms.js'
import DrawHallways from './Draw/DrawHallways.js'
import GenerateGraphCommand from './Generator/GenerateGraphCommand.js'
import GenerateGraphCommandHandler from './Generator/GenerateGraphCommandHandler.js'
import CalculateMinimalGraphCommand from './Generator/CalculateMinimalGraphCommand.js'
import CalculateMinimalGraphCommandHandler from './Generator/CalculateMinimalGraphCommandHandler.js'


let rgc = RoomsGeneratorCommand.create(25, 2, 10);
let rgch = RoomsGeneratorCommandHandler.create();

let rooms = rgch.execute(rgc);

let mrgc = MoveRoomsGeneratorCommand.create(rooms);
let mrgch = MoveRoomsGeneratorCommandHandler.create();

let movedRooms = mrgch.execute(mrgc);

let drawRooms = DrawRooms.create();
drawRooms.execute(movedRooms, document.getElementById('canvas'));

let ggc = GenerateGraphCommand.create(movedRooms)
let ggch = GenerateGraphCommandHandler.create();

let graph = ggch.execute(ggc);

let cmgc = CalculateMinimalGraphCommand.create(graph)
let cmgch = CalculateMinimalGraphCommandHandler.create();

graph = cmgch.execute(cmgc);

let drawHallways = DrawHallways.create();
drawHallways.execute(graph.hallways, document.getElementById('canvas'));