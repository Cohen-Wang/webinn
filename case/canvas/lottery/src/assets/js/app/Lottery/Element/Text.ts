import IElement from "./IElement"

abstract class Text  {
    public text: string;
    public x: number;
    public y: number;
    public color: string;
    public opacity: number;
    public fontStyle: string;
    public fontVariant: string;
    public fontWeight: string | number;
    public fontSize: number;
    public fontFamily: string;
    // 运动属性
    public speedX: number;
    public speedY: number;
    public speedOpacity: number;

    protected constructor (options: any) {
        this.text = options.text || '';
        this.x = typeof options.x !== 'undefined' ? options.x : 0;
        this.y = typeof options.y !== 'undefined' ? options.y : 0;
        this.color = options.color || '#000';
        this.opacity = typeof options.opacity !== 'undefined' ? options.opacity : 1;
        this.fontStyle = options.fontStyle || 'normal';
        this.fontVariant = options.fontVariant || 'normal';
        this.fontWeight = typeof options.fontWeight !== 'undefined' ? options.fontWeight : 100;
        this.fontSize = typeof options.fontSize !== 'undefined' ? options.fontSize : 24;
        this.fontFamily = options.fontFamily || 'arial';
        // 运动属性
        this.speedX = options.speedX || 0;
        this.speedY = options.speedY || 0;
        this.speedOpacity = options.speedOpacity || 0;
    }
}


export class SolidText extends Text implements IElement {
    constructor (options: any) {
        super(options)
    }
    public render (ctx: any): void {
        ctx.save();
        ctx.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
        ctx.fillStyle = this.color;// 设置颜色
        ctx.globalAlpha = this.opacity;
        ctx.textAlign = "center";// 设置水平对齐方式
        ctx.textBaseline = "middle";// 设置垂直对齐方式
        ctx.beginPath();
        ctx.fillText(this.text, this.x, this.y);
        ctx.closePath();
        ctx.restore();
    }
}


export class HollowText extends Text implements IElement {
    public lineWidth: number;
    constructor (options: any) {
        super(options);
        this.lineWidth = options.lineWidth || 1;
    }
    public render (ctx: any): void {
        ctx.save();
        ctx.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
        ctx.strokeStyle = this.color;// 设置颜色
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.textAlign = "center";// 设置水平对齐方式
        ctx.textBaseline = "middle";// 设置垂直对齐方式
        ctx.beginPath();
        ctx.strokeText(this.text, this.x, this.y);
        ctx.closePath();
        ctx.restore();
    }
}


export class ContourText extends Text implements IElement {
    public lineWidth: number;// 轮廓，描边
    public strokeColor: string;
    public fillColor: string;

    constructor (options: any) {
        super(options);
        this.lineWidth = options.lineWidth || 1;
        this.strokeColor = options.strokeColor || '#f00';
        this.fillColor = options.fillColor || '#ff0';
    }
    public render (ctx: any): void {
        ctx.save();
        ctx.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
        ctx.strokeStyle = this.strokeColor;
        ctx.fillStyle = this.fillColor;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.textAlign = "center";// 设置水平对齐方式
        ctx.textBaseline = "middle";// 设置垂直对齐方式
        ctx.beginPath();
        ctx.strokeText(this.text, this.x, this.y);
        ctx.fillText(this.text, this.x, this.y);
        ctx.closePath();
        ctx.restore();
    }
}