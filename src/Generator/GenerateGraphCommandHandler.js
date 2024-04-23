import GenerateGraphCommand from './GenerateGraphCommand.js'
import Graph from '../Model/Graph.js';
import Hallway from '../Model/Hallway.js';

class GenerateGraphCommandHandler {
    static create() {
        return new GenerateGraphCommandHandler();
    }

    execute(generateGraphCommand) {
        if (!(generateGraphCommand instanceof GenerateGraphCommand)) {
            return null;
        }
        let rooms = generateGraphCommand.rooms;
        let hallways = [];

        for (let i = 0; i < rooms.length; i++) {
            for (let j = i + 1; j < rooms.length; j++) {
                hallways.push(Hallway.create(rooms[i], rooms[j]));
            }
        } 

        return Graph.create(rooms, hallways);
    }
}

export default GenerateGraphCommandHandler;