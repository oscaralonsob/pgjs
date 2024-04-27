import Point from "./Point.js";
import Random from "../Utils/Random.js";

class Hallway {
    from;
    to;
    jointPoints = [];

    constructor(from, to) {
        this.from = from;
        this.to = to;
        this.createJointPoints();
    }

    static create(from, to) {
        return new Hallway(from, to);
    }

    createJointPoints() {
        let doorFrom = Point.create(0, 0);
        let doorToo = Point.create(0, 0);
        let random = 0;

        let xMax = Math.max(this.from.origin.x, this.to.origin.x);
        let yMax = Math.max(this.from.origin.y, this.to.origin.y);

        let xMin = Math.min(this.from.end.x, this.to.end.x);
        let yMin = Math.min(this.from.end.y, this.to.end.y);

        if (xMax < this.from.end.x && xMax < this.to.end.x) {
            random = xMin - Random.between(xMax, xMin);
            doorFrom.x = xMax + random;
            doorToo.x = xMax+ random;

            doorFrom.y = yMin;
            doorToo.y = yMax;
        }

        if (yMax < this.from.end.y && yMax < this.to.end.y) {
            random = yMin - Random.between(yMax, yMin);
            doorFrom.y = yMax + random;
            doorToo.y = yMax + random;

            doorFrom.x = xMin;
            doorToo.x = xMax;
        }

        this.jointPoints.push(doorFrom, doorToo);
    }

    distance() {
        return this.from.distance(this.to);
    }

}

export default Hallway;