import Room from '../Model/Room.js'
import Dungeon from '../Model/Dungeon.js'
import Point from '../Model/Point.js'
import Random from '../Utils/Random.js'

class RoomsGeneratorCommandHandler {
    static create() {
        return new RoomsGeneratorCommandHandler();
    }

    execute(numberOfRooms, minSizeRoom, maxSizeRoom) {
        let dungeon = Dungeon.create();
        let room = null;

        for (let i = 0; i < numberOfRooms; i++) {
            room = this.generateRoom(minSizeRoom, maxSizeRoom);
            while (this.roomCollides(room, dungeon.rooms)) {
                room.move(this.getRandomDisplacement());
            }
            dungeon.addRoom(room);
        }

        return dungeon;
    }

    generateRoom(minSizeRoom, maxSizeRoom) {
        let w = Random.between(minSizeRoom, maxSizeRoom);
        let h = Random.between(minSizeRoom, maxSizeRoom);
        
        return Room.create(w, h);
    }

    //TODO: move to dungeon
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

export default RoomsGeneratorCommandHandler;