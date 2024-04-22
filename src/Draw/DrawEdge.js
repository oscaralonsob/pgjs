class DrawEdge {
    constructor() {
    }

    static create() {
        return new DrawEdge();
    }

    execute(origin, end, canvas) {
        let ctx = canvas.getContext('2d');
        let offset = 400;

        ctx.strokeStyle = 'black';  
        ctx.lineWidth = 5; 

        ctx.beginPath();  
        ctx.moveTo(offset + origin.center.x * 16, offset + origin.center.y * 16);  
        ctx.lineTo(offset + end.center.x * 16, offset + end.center.y * 16);  
        ctx.stroke();
    }
}

export default DrawEdge;