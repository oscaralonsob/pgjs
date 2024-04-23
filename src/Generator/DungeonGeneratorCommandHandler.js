import Room from '../Model/Room.js'
import Dungeon from '../Model/Dungeon.js'
import Point from '../Model/Point.js'
import Random from '../Utils/Random.js'

class DungeonGeneratorCommandHandler {
    static create() {
        return new DungeonGeneratorCommandHandler();
    }

    execute(numberOfRooms, minSizeRoom, maxSizeRoom) {
        let dungeon = Dungeon.create();
        let room = null;

        for (let i = 0; i < numberOfRooms; i++) {
            room = this.generateRoom(minSizeRoom, maxSizeRoom);
            while (dungeon.roomWillCollide(room, dungeon.rooms)) {
                room.move(this.getRandomDisplacement());
            }
            dungeon.addRoomWithHallways(room);
        }

        return dungeon;
    }

    generateRoom(minSizeRoom, maxSizeRoom) {
        let w = Random.between(minSizeRoom, maxSizeRoom);
        let h = Random.between(minSizeRoom, maxSizeRoom);
        
        return Room.create(w, h);
    }

    getRandomDisplacement() {
        let x = Random.between(-1, 2);
        let y = Random.between(-1, 2);
        return Point.create(x, y);
    }
}

export default DungeonGeneratorCommandHandler;