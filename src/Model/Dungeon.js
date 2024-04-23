class Dungeon {
    rooms = [];
    hallways = [];

    constructor() {
    }

    static create() {
        return new Dungeon();
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    addHallway(hallway) {
        this.hallways.push(hallway);
    }
}

export default Dungeon;