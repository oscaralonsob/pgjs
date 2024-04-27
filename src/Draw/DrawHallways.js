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
            this.drawHallway(hallways[i].jointPoints[0], hallways[i].jointPoints[1], ctx);   
        }
        console.log(size)
    }

    drawHallway(origin, end, ctx) {
        ctx.strokeStyle = 'black';  
        ctx.lineWidth = 3; 

        ctx.beginPath();  
        ctx.moveTo(offset + origin.x * size, offset + origin.y * size);  
        ctx.lineTo(offset + end.x * size, offset + end.y * size);  
        ctx.stroke();
    }
}

export default DrawHallways;