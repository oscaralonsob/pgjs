class GenerateGraphCommand {
    rooms = [];

    constructor(rooms) {
        this.rooms = rooms;
    }

    static create(rooms) {
        return new GenerateGraphCommand(rooms);
    }
}

export default GenerateGraphCommand;