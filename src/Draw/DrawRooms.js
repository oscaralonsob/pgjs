import {offset} from "./DrawDungeon.js";
import {size} from "./DrawDungeon.js";

class DrawRooms {
    constructor() {
    }

    static create() {
        return new DrawRooms();
    }

    execute(rooms, ctx) {
        console.log(rooms[0].size());
        rooms.forEach(room => {
            this.drawRoomNew(
                room.origin,
                room.size(),
                3, 
                ctx
            );
        });
    }

    drawRoomNew(pos, rectSize, thickness, ctx) {
        ctx.fillStyle='#000';
        ctx.fillRect(offset + pos.x * size - (thickness), offset + pos.y * size - (thickness), rectSize.x * size + (thickness * 2), rectSize.y * size + (thickness * 2));
    
        ctx.fillStyle='#FFF';
        ctx.fillRect(offset + pos.x * size, offset + pos.y * size, rectSize.x * size, rectSize.y * size);
    }
}

export default DrawRooms;