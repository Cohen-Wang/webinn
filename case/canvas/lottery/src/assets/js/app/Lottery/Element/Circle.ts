import IElement from "./IElement"

abstract class Circle {
    public x: number;
    public y: number;
    public radius: number;
    public opacity: number;
    public color: string;

    protected constructor (options: any) {
        this.x = typeof options.x !== 'undefined' ? options.x : 0;
        this.y = typeof options.y !== 'undefined' ? options.y : 0;
        this.radius = typeof options.radius !== 'undefined' ? options.radius : 1;
        this.opacity = typeof options.opacity !== 'undefined' ? options.opacity : 1;
        this.color = options.color || '#f00';
    }
}


export class SolidCircle extends Circle implements IElement {
    constructor (options: any) {
        super(options)
    }
    public render (ctx: any): void {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}


export class HollowCircle extends Circle implements IElement {
    public lineWidth: number;
    constructor (options: any) {
        super(options);
        this.lineWidth = options.lineWidth || 1;
    }
    public render (ctx: any): void {
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.stroke();
        ctx.globalAlpha = 1;
    }
}