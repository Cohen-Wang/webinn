import IElement from "./IElement"
import Point from "./Point"

export class Ribbon implements IElement {
    public startPoint: Point;
    public controlPoint: Point;
    public endPoint: Point;
    public color: string;
    public lineWidth: number;
    public globalAlpha: number;
    // ��̬����
    public speed: number;// ����ҡ�ڵ��ٶ�
    public range: number;// ����ҡ�ڵķ�Χ

    constructor (options: any) {
        this.startPoint = options.startPoint;
        this.controlPoint = options.controlPoint;
        this.endPoint = options.endPoint;
        this.color = options.color || '#ccc';
        this.lineWidth = options.lineWidth || 14;
        this.globalAlpha = options.globalAlpha || 0.8;
        // ��̬����
        this.speed = options.speed || 10;// ����ҡ�ڵ��ٶ�
        this.range = options.range || 40;// ����ҡ�ڵķ�Χ
    }

    public render (ctx: any): void {
        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.globalAlpha;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        //ctx.beginPath();// ?��ע�⣺���ﷴ�����ܸ�closePath()����Ȼ��պ�
        ctx.moveTo(this.startPoint.x, this.startPoint.y);
        ctx.quadraticCurveTo(this.controlPoint.x, this.controlPoint.y, this.endPoint.x, this.endPoint.y);
        //ctx.closePath();// ?��ע�⣺���ﷴ�����ܸ�closePath()����Ȼ��պ�
        ctx.stroke();
        ctx.restore();
    }
}