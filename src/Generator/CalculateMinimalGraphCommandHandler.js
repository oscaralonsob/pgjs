import Graph from "../Model/Graph.js";
import CalculateMinimalGraphCommand from "./CalculateMinimalGraphCommand.js";

class CalculateMinimalGraphCommandHandler {
    static create() {
        return new CalculateMinimalGraphCommandHandler();
    }

    execute(calculateMinimalGraphCommand) {
        if (!(calculateMinimalGraphCommand instanceof CalculateMinimalGraphCommand)) {
            return null;
        }
        
        let hallways = calculateMinimalGraphCommand.graph.hallways;
        let hallway;
        let parents = new Map();
        let rank = new Map();
        let minimalGraph = Graph.create(calculateMinimalGraphCommand.graph.rooms, []);
        for (let i = 0; i < minimalGraph.rooms.length; i++) {
            let room = minimalGraph.rooms[i];
            parents.set(room, room);
            rank.set(room, 1);
        };

        hallways.sort(function(x, y) {
            return x.distance < y.distance ? -1 : x.distance > y.distance;
        });

        for (let i = 0; i < hallways.length; i++) {
            hallway = hallways[i];
            let from = this.getRoot(parents, hallway.from);
            let to = this.getRoot(parents, hallway.to);

            if (from != to) {
                if (rank.get(to) < rank.get(from)) {
                    parents.set(to, from);
                } else if (rank.get(to) > rank.get(from)) {
                    parents.set(from, to);
                } else {
                    parents.set(from, to);
                    rank.set(from, rank.get(to) + 1);
                }
                minimalGraph.addHallway(hallway);
            }
        }
        
        return minimalGraph;
    }

    getRoot(parents, room) {
        while (parents.get(room) != room)    
        {
            room = parents.get(room);    
        }   

        return room;  
    }
}

export default CalculateMinimalGraphCommandHandler;