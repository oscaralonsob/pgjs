class RoomsGeneratorCommand {
    numberOfRooms;
    minSizeRoom;
    maxSizeRoom;

    constructor(numberOfRooms, minSizeRoom, maxSizeRoom) {
        this.numberOfRooms = numberOfRooms;
        this.minSizeRoom = minSizeRoom;
        this.maxSizeRoom = maxSizeRoom;
    }

    static create(numberOfRooms, minSizeRoom, maxSizeRoom) {
        return new RoomsGeneratorCommand(numberOfRooms, minSizeRoom, maxSizeRoom);
    }
}

export default RoomsGeneratorCommand;