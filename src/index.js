import DungeonGeneratorCommandHandler from './Generator/DungeonGeneratorCommandHandler.js'
import CalculateMinimalGraphCommandHandler from './Generator/CalculateMinimalGraphCommandHandler.js'
import DrawDungeon from './Draw/DrawDungeon.js';


let rgch = DungeonGeneratorCommandHandler.create();

let dungeon = rgch.execute(15, 8, 40);

let cmgch = CalculateMinimalGraphCommandHandler.create();

dungeon = cmgch.execute(dungeon);

let drawDungeon = DrawDungeon.create();
drawDungeon.execute(dungeon, document.getElementById('canvas'));