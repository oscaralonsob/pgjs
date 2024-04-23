import Hallway from "./Hallway.js";

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

    addRoomWithHallways(room) {
        for (let i = 0; i < this.rooms.length; i++) {
            this.addHallway(Hallway.create(this.rooms[i], room));
        }
        this.addRoom(room);
    }

    addHallway(hallway) {
        this.hallways.push(hallway);
    }

    roomWillCollide(room) {
        for (let i = 0; i < this.rooms.length; i++) {
            if (room.collides(this.rooms[i])) {
                return true;
            }
        }

        return false;
    }
}

export default Dungeon;