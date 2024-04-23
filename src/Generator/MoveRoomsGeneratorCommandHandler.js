import Room from '../Model/Room.js'
import Random from '../Utils/Random.js'
import Point from '../Model/Point.js'

class MoveRoomsGeneratorCommandHandler {
    static create() {
        return new MoveRoomsGeneratorCommandHandler();
    }

    execute(rooms) {
        let movedRooms = [];
        //TODO needs a copy?
        rooms.forEach(room => movedRooms.push(this.moveRoom(room, movedRooms)));
        return movedRooms;
    }

    moveRoom(room, rooms) {
        if (!(room instanceof Room)) {
            return null;
        }
        while (this.roomCollides(room, rooms)) {
            room.move(this.getRandomDisplacement());
        }

        return room;
    }

    roomCollides(room, rooms) {
        for (let i = 0; i < rooms.length; i++) {
            if (room.collides(rooms[i])) {
                return true;
            }
        }
        return false;
    }

    getRandomDisplacement() {
        let x = Random.between(-1, 2);
        let y = Random.between(-1, 2);
        return Point.create(x, y);
    }
}

export default MoveRoomsGeneratorCommandHandler;