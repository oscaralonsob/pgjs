import {offset} from "./DrawDungeon.js";
import {size} from "./DrawDungeon.js";

class DrawHallways {
    constructor() {
    }

    static create() {
        return new DrawHallways();
    }

    execute(hallways, ctx) {
        for (let i = 0; i < hallways.length; i++) {
            this.drawHallway(hallways[i].from, hallways[i].to, ctx);   
        }
        console.log(size)
    }

    drawHallway(origin, end, ctx) {
        ctx.strokeStyle = 'black';  
        ctx.lineWidth = 5; 

        ctx.beginPath();  
        ctx.moveTo(offset + origin.center.x * size, offset + origin.center.y * size);  
        ctx.lineTo(offset + end.center.x * size, offset + end.center.y * size);  
        ctx.stroke();
    }
}

export default DrawHallways;