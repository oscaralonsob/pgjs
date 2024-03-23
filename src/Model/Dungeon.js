class Dungeon {
    rooms;

    constructor(rooms) {
        this.rooms = rooms
    }

    static create(rooms) {
        if (rooms === undefined) {
            rooms = [];
        }

        return new Dungeon(rooms);
    }

    addRoom(room) {
        this.rooms.push(room);
    }
}

export default Dungeon;