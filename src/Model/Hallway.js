class Hallway {
    from;
    to;
    distance;

    constructor(from, to) {
        this.from = from;
        this.to = to;
        this.distance = from.distance(to);
    }

    static create(from, to) {
        return new Hallway(from, to);
    }
}

export default Hallway;