// Move is not an appropiated name ig
class MoveRoomsGeneratorCommand {
    rooms = [];
    constructor(rooms) {
        this.rooms = rooms;
    }

    static create(rooms) {
        return new MoveRoomsGeneratorCommand(rooms);
    }
}

export default MoveRoomsGeneratorCommand;