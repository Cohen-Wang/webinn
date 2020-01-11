import IElement from "./IElement"

abstract class Star {
    public x: number;
    public y: number;
    public color: string;
    public radius: number;
    public opacity: number;

    protected constructor (options: any) {
        this.x = options.x || 100;
        this.y = options.y || 100;
        this.radius = options.radius || 10;
        this.color = options.color || '#ccc';
        this.opacity = options.opacity || 1;
    }
}


export class SolidStar extends Star implements IElement {
    constructor (options: any) {
        super(options)
    }
    public render (ctx: any): void {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineCap = 'round';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.radius / 6, this.y + this.radius / 3);
        ctx.lineTo(this.x + this.radius / 2, this.y + this.radius / 2);
        ctx.lineTo(this.x + this.radius / 6, this.y + this.radius / 3 * 2);
        ctx.lineTo(this.x, this.y + this.radius);
        ctx.lineTo(this.x - this.radius / 6, this.y + this.radius / 3 * 2);
        ctx.lineTo(this.x - this.radius / 2, this.y + this.radius / 2);
        ctx.lineTo(this.x - this.radius / 6, this.y + this.radius / 3);
        ctx.lineTo(this.x, this.y);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;// »Ö¸´
    }
}


export class HollowStar extends Star implements IElement {
    public lineWidth: number;
    constructor (options: any) {
        super(options);
        this.lineWidth = options.lineWidth || 1;
    }
    public render (ctx: any): void {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = 'round';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.radius / 6, this.y + this.radius / 3);
        ctx.lineTo(this.x + this.radius / 2, this.y + this.radius / 2);
        ctx.lineTo(this.x + this.radius / 6, this.y + this.radius / 3 * 2);
        ctx.lineTo(this.x, this.y + this.radius);
        ctx.lineTo(this.x - this.radius / 6, this.y + this.radius / 3 * 2);
        ctx.lineTo(this.x - this.radius / 2, this.y + this.radius / 2);
        ctx.lineTo(this.x - this.radius / 6, this.y + this.radius / 3);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;// »Ö¸´
    }
}