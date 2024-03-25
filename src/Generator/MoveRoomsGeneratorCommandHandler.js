import MoveRoomsGeneratorCommand from './MoveRoomsGeneratorCommand.js'
import Room from '../Model/Room.js'
import Random from '../Utils/Random.js'
import Point from '../Model/Point.js'

class MoveRoomsGeneratorCommandHandler {
    static create() {
        return new MoveRoomsGeneratorCommandHandler();
    }

    execute(moveRoomsGeneratorCommand) {
        if (!(moveRoomsGeneratorCommand instanceof MoveRoomsGeneratorCommand)) {
            return null;
        }

        let rooms = [];
        
        moveRoomsGeneratorCommand.rooms.forEach(room => rooms.push(this.moveRoom(room, rooms)));
        console.log(rooms);
        return rooms;
    }

    moveRoom(room, rooms) {
        if (!(room instanceof Room)) {
            return null;
        }
        let quadrant = this.getRandomQuadrant();
        while (this.roomCollides(room, rooms)) {
            let displacement = this.getRandomDisplacement(quadrant);
            room.move(displacement);
        }

        return room;
    }

    roomCollides(room, rooms) {
        for (let i = 0; i < rooms.length; i++) {
            if (room.collides(rooms[i])) {
                return true;
            }
        }
        return false;
    }

    getRandomQuadrant() {
        return Random.between(0, 4);
    }

    getRandomDisplacement(quadrant) {
        let x = Random.between(0, 2);
        let y = x == 0 ? 1 : Random.between(0, 2);
        let result = Point.create(x, y);
        if ([0,2].includes(quadrant)) {
            result.x = -result.x;
        }

        if ([2,3].includes(quadrant)) {
            result.y = -result.y;
        }

        return result;
    }
}

export default MoveRoomsGeneratorCommandHandler;