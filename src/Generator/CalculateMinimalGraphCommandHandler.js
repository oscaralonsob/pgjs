import Dungeon from "../Model/Dungeon.js";

class CalculateMinimalGraphCommandHandler {
    static create() {
        return new CalculateMinimalGraphCommandHandler();
    }

    execute(dungeon) {
        let hallways = dungeon.hallways;
        let hallway;
        let parents = new Map();
        let rank = new Map();
        let minimalGraph = Dungeon.create();
        for (let i = 0; i < dungeon.rooms.length; i++) {
            let room = dungeon.rooms[i];
            minimalGraph.addRoom(room);
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
                console.log(minimalGraph);
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