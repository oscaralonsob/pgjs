import RoomsGeneratorCommand from './RoomsGeneratorCommand.js'
import Room from '../Model/Room.js'
import Random from '../Utils/Random.js'

class RoomsGeneratorCommandHandler {
    static create() {
        return new RoomsGeneratorCommandHandler();
    }

    execute(roomsGeneratorCommand) {
        if (!(roomsGeneratorCommand instanceof RoomsGeneratorCommand)) {
            return null;
        }

        let rooms = [];

        for (let i = 0; i < roomsGeneratorCommand.numberOfRooms; i++) {
            rooms.push(this.generateRoom(roomsGeneratorCommand));
        }

        return rooms;
    }

    generateRoom(roomGeneratorCommand) {
        let w = Random.between(roomGeneratorCommand.minSizeRoom, roomGeneratorCommand.maxSizeRoom);
        let h = Random.between(roomGeneratorCommand.minSizeRoom, roomGeneratorCommand.maxSizeRoom);
        
        return Room.create(w, h);
    }
}

export default RoomsGeneratorCommandHandler;