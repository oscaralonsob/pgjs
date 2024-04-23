import DrawHallways from "./DrawHallways.js";
import DrawRooms from "./DrawRooms.js";

export const offset = 400;
export const size = 16;

class DrawDungeon {
    drawRooms;
    drawHallways;

    constructor() {
        this.drawRooms = DrawRooms.create();
        this.drawHallways = DrawHallways.create();
    }

    static create() {
        return new DrawDungeon();
    }

    execute(dungeon, canvas) {
        this.drawRooms.execute(dungeon.rooms, canvas.getContext('2d'));
        this.drawHallways.execute(dungeon.hallways, canvas.getContext('2d'));
    }
}

export default DrawDungeon;