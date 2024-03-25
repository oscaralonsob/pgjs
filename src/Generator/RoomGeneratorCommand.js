class RoomGeneratorCommand {
    minSizeRoom;
    maxSizeRoom;

    constructor(minSizeRoom, maxSizeRoom) {
        this.minSizeRoom = minSizeRoom;
        this.maxSizeRoom = maxSizeRoom;
    }

    static create(minSizeRoom, maxSizeRoom) {
        return new RoomGeneratorCommand(minSizeRoom, maxSizeRoom);
    }
}

export default RoomGeneratorCommand;