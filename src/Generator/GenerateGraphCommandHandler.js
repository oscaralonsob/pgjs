import Hallway from '../Model/Hallway.js';

class GenerateGraphCommandHandler {
    static create() {
        return new GenerateGraphCommandHandler();
    }

    execute(dungeon) {
        for (let i = 0; i < dungeon.rooms.length; i++) {
            for (let j = i + 1; j < dungeon.rooms.length; j++) {
                dungeon.addHallway(Hallway.create(dungeon.rooms[i], dungeon.rooms[j]));
            }
        } 

        return dungeon;
    }
}

export default GenerateGraphCommandHandler;