class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static create(x, y) {
        return new Point(x, y);
    }

    add(point) {
        this.x = this.x + point.x;
        this.y = this.y + point.y;
    }

    sub(point) {
        this.x = this.x - point.x;
        this.y = this.y - point.y;
    }

    div(point) {
        this.x = this.x/point;
        this.y = this.y/point;
    }
}

export default Point;