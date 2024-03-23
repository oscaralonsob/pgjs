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

        let origin = new Point(0, 0);
        let end = new Point(h, w);

        return new Room(origin, end);
    }

    move(shift) {
        this.origin.add(shift);
        this.end.add(shift);
    }
}

export default Room;