import Room from '../Model/Room.js'
import Random from '../Utils/Random.js'
import RoomGeneratorCommand from './RoomGeneratorCommand.js'

class RoomGeneratorCommandHandler {
    static create() {
        return new RoomGeneratorCommandHandler();
    }

    execute(roomGeneratorCommand) {
        if (!(roomGeneratorCommand instanceof RoomGeneratorCommand)) {
            return null;
        }
        let w = Random.between(roomGeneratorCommand.minSizeRoom, roomGeneratorCommand.maxSizeRoom);
        let h = Random.between(roomGeneratorCommand.minSizeRoom, roomGeneratorCommand.maxSizeRoom);
        return Room.create(w, h);
    }
}

export default RoomGeneratorCommandHandler;