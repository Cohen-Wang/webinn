import IElement from "./IElement"
import Point from "./Point"

export class Ribbon implements IElement {
    public startPoint: Point;
    public controlPoint: Point;
    public endPoint: Point;
    public color: string;
    public lineWidth: number;
    public globalAlpha: number;
    // 动态数据
    public speed: number;// 左右摇摆的速度
    public range: number;// 左右摇摆的范围

    constructor (options: any) {
        this.startPoint = options.startPoint;
        this.controlPoint = options.controlPoint;
        this.endPoint = options.endPoint;
        this.color = options.color || '#ccc';
        this.lineWidth = options.lineWidth || 14;
        this.globalAlpha = options.globalAlpha || 0.8;
        // 动态数据
        this.speed = options.speed || 10;// 左右摇摆的速度
        this.range = options.range || 40;// 左右摇摆的范围
    }

    public render (ctx: any): void {
        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.globalAlpha;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        //ctx.beginPath();// ?：注意：这里反而不能给closePath()，不然会闭合
        ctx.moveTo(this.startPoint.x, this.startPoint.y);
        ctx.quadraticCurveTo(this.controlPoint.x, this.controlPoint.y, this.endPoint.x, this.endPoint.y);
        //ctx.closePath();// ?：注意：这里反而不能给closePath()，不然会闭合
        ctx.stroke();
        ctx.restore();
    }
}