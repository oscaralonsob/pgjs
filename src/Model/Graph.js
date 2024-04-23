class Graph {
    rooms = [];
    hallways = [];

    constructor(rooms, hallways) {
        this.rooms = rooms;
        this.hallways = hallways;
    }

    static create(rooms, hallways) {
        return new Graph(rooms, hallways);
    }

    addHallway(hallway) {
        this.hallways.push(hallway);
    }
}

export default Graph;