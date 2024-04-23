import {offset} from "./DrawDungeon.js";
import {size} from "./DrawDungeon.js";

class DrawRooms {
    constructor() {
    }

    static create() {
        return new DrawRooms();
    }

    execute(rooms, ctx) {
        rooms.forEach(room => {
            this.drawRoom(room, ctx);
        });
        
    }

    drawRoom(room, ctx) {
        for(let x = room.origin.x; x < room.end.x; x++) {
            for(let y = room.origin.y; y < room.end.y; y++) {
                ctx.putImageData(this.drawData(), offset + x*size, offset + y*size);
            }
        }
    }

    drawData() {
        let arrayData = new Uint8ClampedArray(
            Array(256).fill([0,0,0,255]).flat()
        );
        const imageData = new ImageData(arrayData, size, size);

        return imageData;
    }
}

export default DrawRooms;