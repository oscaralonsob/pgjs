import Point from './Point.js'

class Room {
    origin;
    end;

    constructor(origin, end) {
        this.origin = origin;
        this.end = end;
    }

    static create(h, w) {
        if (w === undefined) {
            w = h;
        }

        let origin = Point.create(0, 0);
        let end = Point.create(h, w);

        return new Room(origin, end);
    }

    move(shift) {
        this.origin.add(shift);
        this.end.add(shift);
    }

    collides(other) {
        return (
            (this.origin.x <= other.end.x && this.end.x >= other.origin.x) &&
            (this.origin.y <= other.end.y && this.end.y >= other.origin.y)
        );
    }
}

export default Room;