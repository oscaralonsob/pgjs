class DrawRooms {
    constructor() {
    }

    static create() {
        return new DrawRooms();
    }

    execute(rooms, canvas) {
        let ctx = canvas.getContext('2d');
        
        ctx.putImageData(this.drawData(), 0, 0);
        ctx.putImageData(this.drawData(), 16, 16);
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