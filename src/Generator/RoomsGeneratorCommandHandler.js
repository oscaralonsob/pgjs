import Room from '../Model/Room.js'
import Dungeon from '../Model/Dungeon.js'
import Random from '../Utils/Random.js'

class RoomsGeneratorCommandHandler {
    static create() {
        return new RoomsGeneratorCommandHandler();
    }

    execute(numberOfRooms, minSizeRoom, maxSizeRoom) {
        let dungeon = Dungeon.create();

        for (let i = 0; i < numberOfRooms; i++) {
            dungeon.addRoom(this.generateRoom(minSizeRoom, maxSizeRoom));
        }

        return dungeon;
    }

    generateRoom(minSizeRoom, maxSizeRoom) {
        let w = Random.between(minSizeRoom, maxSizeRoom);
        let h = Random.between(minSizeRoom, maxSizeRoom);
        
        return Room.create(w, h);
    }
}

export default RoomsGeneratorCommandHandler;