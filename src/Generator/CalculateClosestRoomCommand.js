class CalculateClosestRoomCommand {
    allRooms = [];
    room = null;

    constructor(room, allRooms) {
        this.room = room;
        this.allRooms = allRooms;
    }

    static create(room, allRooms) {
        return new CalculateClosestRoomCommand(room, allRooms);
    }
}

export default CalculateClosestRoomCommand;