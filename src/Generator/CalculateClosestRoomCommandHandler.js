import CalculateClosestRoomCommand from './CalculateClosestRoomCommand.js'

class CalculateClosestRoomCommandHandler {
    static create() {
        return new CalculateClosestRoomCommandHandler();
    }

    execute(calculateClosestRoomCommand) {
        if (!(calculateClosestRoomCommand instanceof CalculateClosestRoomCommand)) {
            return null;
        }
        let allRooms = calculateClosestRoomCommand.allRooms;
        let room = calculateClosestRoomCommand.room;

        let distance = Number.MAX_SAFE_INTEGER;
        let closestRoom = null;
        for (let i = 0; i < allRooms.length; i++) {
            if (room.distance(allRooms[i]) < distance && allRooms[i] != room) {
                console.log(distance);
                distance = room.distance(allRooms[i]);
                closestRoom = allRooms[i];
            }
        } 

        return closestRoom;
    }
}

export default CalculateClosestRoomCommandHandler;