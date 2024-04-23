import DungeonGeneratorCommandHandler from './Generator/DungeonGeneratorCommandHandler.js'
import DrawRooms from './Draw/DrawRooms.js'
import DrawHallways from './Draw/DrawHallways.js'
import CalculateMinimalGraphCommandHandler from './Generator/CalculateMinimalGraphCommandHandler.js'


let rgch = DungeonGeneratorCommandHandler.create();

let dungeon = rgch.execute(25, 2, 10);

let drawRooms = DrawRooms.create();
drawRooms.execute(dungeon, document.getElementById('canvas'));

let cmgch = CalculateMinimalGraphCommandHandler.create();

dungeon = cmgch.execute(dungeon);

let drawHallways = DrawHallways.create();
drawHallways.execute(dungeon.hallways, document.getElementById('canvas'));