class Hallway {
    from;
    to;

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    static create(from, to) {
        return new Hallway(from, to);
    }

    distance() {
        return this.from.distance(this.to);
    }
}

export default Hallway;