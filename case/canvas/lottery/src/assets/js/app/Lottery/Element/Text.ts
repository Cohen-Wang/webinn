import IElement from "./IElement"

abstract class Text  {
    public x: number;
    public y: number;
    public color: string;
    public opacity: number;
    public text: string;
    public fontStyle: string;
    public fontVariant: string;
    public fontWeight: string | number;
    public fontSize: number;
    public fontFamily: string;

    protected constructor (options: any) {
        this.x = options.x || 100;
        this.y = options.y || 100;
        this.color = options.color || '#ccc';
        this.opacity = options.opacity || 1;
        this.text = options.text || 'default';
        this.fontStyle = options.fontStyle || 'normal';
        this.fontVariant = options.fontVariant || 'normal';
        this.fontWeight = options.fontWeight || 900;
        this.fontSize = options.fontSize || 24;
        this.fontFamily = options.fontFamily || 'arial';
    }
}


export class SolidText extends Text implements IElement {
    constructor (options: any) {
        super(options)
    }
    public render (ctx: any): void {
        ctx.save();
        ctx.beginPath();
        ctx.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
        ctx.fillStyle = this.color;// ������ɫ
        ctx.globalAlpha = this.opacity;
        ctx.textAlign = "center";// ����ˮƽ���뷽ʽ
        ctx.textBaseline = "middle";// ���ô�ֱ���뷽ʽ
        ctx.fillText(this.text, this.x, this.y);// �������֣�������Ҫд���֣�x���꣬y���꣩
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
        ctx.beginPath();
        ctx.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
        ctx.strokeStyle = this.color;// ������ɫ
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.textAlign = "center";// ����ˮƽ���뷽ʽ
        ctx.textBaseline = "middle";// ���ô�ֱ���뷽ʽ
        ctx.strokeText(this.text, this.x, this.y);// �������֣�������Ҫд���֣�x���꣬y���꣩
        ctx.closePath();
        ctx.restore();
    }
}