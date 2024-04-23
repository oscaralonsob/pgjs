class DrawRooms {
    constructor() {
    }

    static create() {
        return new DrawRooms();
    }

    execute(dungeon, canvas) {
        let ctx = canvas.getContext('2d');
        dungeon.rooms.forEach(room => {
            this.drawRoom(room, ctx);
        });
        
    }

    drawRoom(room, ctx) {
        let offset = 400;
        for(let x = room.origin.x; x < room.end.x; x++) {
            for(let y = room.origin.y; y < room.end.y; y++) {
                ctx.putImageData(this.drawData(), offset + x*16, offset + y*16);
            }
        }
    }

    drawData() {
        let arrayData = new Uint8ClampedArray(
            Array(256).fill([0,0,0,255]).flat()
        );
        const imageData = new ImageData(arrayData, 16, 16);

        return imageData;
    }
}

export default DrawRooms;