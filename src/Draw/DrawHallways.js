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
    }
    
    drawHallway(origin, end, ctx) {
        ctx.strokeStyle = 'white';  
        ctx.lineWidth = size; 

        ctx.beginPath();  
        ctx.moveTo(offset + origin.x * size, offset + origin.y * size);  
        ctx.lineTo(offset + end.x * size, offset + end.y * size);  
        ctx.stroke();
        ctx.lineWidth = size; 
        ctx.strokeStyle = 'black'; 

        if (origin.x == end.x) {  
            ctx.beginPath();  
            ctx.moveTo(offset + (origin.x + 1) * size, offset + origin.y * size);  
            ctx.lineTo(offset + (end.x + 1) * size, offset + end.y * size);  
            ctx.stroke(); 
            ctx.beginPath();

            ctx.moveTo(offset + (origin.x - 1) * size, offset + origin.y * size);  
            ctx.lineTo(offset + (end.x - 1) * size, offset + end.y * size);  
            ctx.stroke();
        } else {
            ctx.beginPath();  
            ctx.moveTo(offset + origin.x * size, offset + (origin.y + 1) * size);  
            ctx.lineTo(offset + end.x * size, offset + (end.y + 1) * size);  
            ctx.stroke(); 

            ctx.beginPath();  
            ctx.moveTo(offset + origin.x * size, offset + (origin.y - 1) * size);  
            ctx.lineTo(offset + end.x* size, offset + (end.y - 1) * size);  
            ctx.stroke();
        }
    }
}

export default DrawHallways;