import IElement from "./IElement"

export class MyImage implements IElement {
    public oImg: any;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public scale: number;
    public opacity: number;

    constructor (options: any) {
        this.oImg = options.oImg;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 0;
        this.height = options.height || 0;
        this.scale = options.scale || 1;
        this.opacity = options.opacity || 1;
    }

    render (ctx: any) {
        ctx.save();
        ctx.scale(this.scale, this.scale);
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.oImg, this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}