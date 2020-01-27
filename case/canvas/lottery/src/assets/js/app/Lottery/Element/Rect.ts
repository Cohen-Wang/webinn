import IElement from "./IElement"

abstract class Rect {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public opacity: number;
    public color: string;

    protected constructor (options: any) {
        this.x = typeof options.x !== 'undefined' ? options.x : 100;
        this.y = typeof options.y !== 'undefined' ? options.y : 100;
        this.width = typeof options.width !== 'undefined' ? options.width : 1;
        this.height = typeof options.height !== 'undefined' ? options.height : 1;
        this.opacity = options.opacity !== 'undefined' ? options.opacity : 1;
        this.color = options.color || '#ccc';
    }
}


export class SolidRect extends Rect implements IElement {

    constructor (options: any) {
        super(options)
    }

    public render (ctx: any): void {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        ctx.closePath();
        ctx.restore();
        ctx.globalAlpha = 1;
    }
}


export class HollowRect extends Rect implements IElement {
    public lineWidth: number;

    constructor (options: any) {
        super(options);
        this.lineWidth = options.lineWidth || 1;
    }

    public render (ctx: any): void {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = 'butt';
        ctx.strokeRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        ctx.closePath();
        ctx.restore();
        ctx.globalAlpha = 1;
    }
}