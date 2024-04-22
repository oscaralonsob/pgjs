import Point from './Point.js'

class Room {
    origin;
    end;
    center;

    constructor(origin, end) {
        this.origin = origin;
        this.end = end;
        this.calculateCenter(end);
    }

    static create(h, w) {
        if (w === undefined) {
            w = h;
        }

        let origin = Point.create(0, 0);
        let end = Point.create(h, w);

        return new Room(origin, end);
    }

    calculateCenter(end) {
        this.center = Point.create(end.x, end.y); 
        this.center.sub(this.origin);
        this.center.div(2);
        this.center.add(this.origin);
    }

    move(shift) {
        this.origin.add(shift);
        this.end.add(shift);
        this.center.add(shift);
    }

    collides(other) {
        return (
            (this.origin.x <= other.end.x && this.end.x >= other.origin.x) &&
            (this.origin.y <= other.end.y && this.end.y >= other.origin.y)
        );
    }

    distance(other) {
        let distance = Point.create(this.center.x, this.center.y);
        distance.sub(other.center);
        return Math.abs(distance.x) + Math.abs(distance.y)
    }
}

export default Room;