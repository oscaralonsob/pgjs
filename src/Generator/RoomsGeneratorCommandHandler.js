import Room from '../Model/Room.js'
import Random from '../Utils/Random.js'

class RoomsGeneratorCommandHandler {
    static create() {
        return new RoomsGeneratorCommandHandler();
    }

    execute(numberOfRooms, minSizeRoom, maxSizeRoom) {
        let rooms = [];

        for (let i = 0; i < numberOfRooms; i++) {
            rooms.push(this.generateRoom(minSizeRoom, maxSizeRoom));
        }

        return rooms;
    }

    generateRoom(minSizeRoom, maxSizeRoom) {
        let w = Random.between(minSizeRoom, maxSizeRoom);
        let h = Random.between(minSizeRoom, maxSizeRoom);
        
        return Room.create(w, h);
    }
}

export default RoomsGeneratorCommandHandler;