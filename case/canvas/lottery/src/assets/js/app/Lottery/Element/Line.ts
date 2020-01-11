import IElement from "./IElement"
import Point from "./Point"

export default class Line implements IElement {
    public startPoint: Point;
    public endPoint: Point;
    public color: string;
    public opacity: number;

    constructor (startPoint: Point, endPoint: Point, color: string, opacity: number) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color || '#f00';
        this.opacity = opacity || 1;
    }

    public render (ctx: any): void {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.moveTo(this.startPoint.x, this.startPoint.y);
        ctx.lineTo(this.endPoint.x, this.endPoint.y);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}