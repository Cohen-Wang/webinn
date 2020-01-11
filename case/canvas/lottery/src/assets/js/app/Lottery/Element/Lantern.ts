import IElement from "./IElement"
import Point from "./Point"
import { Ribbon } from "./Ribbon"

let _random = function (min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
};

export class Lantern implements IElement {
    public lantern: any;// 包含属性 oImg，x，y
    public ribbon: any;
    //
    public centerPoint: any;
    //
    public beta: number;
    //
    public ribbons: Array<Ribbon>;// 缎带实例的容器

    constructor (options: any) {
        // 灯笼
        this.lantern = {};// ?：注意这一步，一定要初始化
        this.lantern.oImg = options.lantern.oImg;
        this.lantern.x = options.lantern.x || 0;
        this.lantern.y = options.lantern.y || 0;
        this.lantern.width = options.lantern.width || 100;
        // this.lantern.height = options.lantern.height || 100;// 不能给默认值
        this.lantern.angle = options.lantern.angle || 0;
        this.lantern.angleSpeed = options.lantern.angleSpeed || 10;
        // 缎带
        this.ribbon = {};// ?：注意这一步，一定要初始化
        this.ribbon.num = options.ribbon.num || 2;
        this.ribbon.distance = options.ribbon.distance || 200;
        this.ribbon.color = options.ribbon.color || '#ccc';
        this.ribbon.lineWidth = options.ribbon.lineWidth || 1;
        this.ribbon.globalAlpha = options.ribbon.globalAlpha || 1;
        this.ribbon.bornRange = options.ribbon.bornRange || 10;
        this.ribbon.speed = options.ribbon.speed || 10;
        this.ribbon.range = options.ribbon.range || 10;
        //
        this.beta = 0;
        //
        this.ribbons = [];
        //
        this.initRibbon();
    }

    // 初始化缎带
    public initRibbon (): void {
        for (let i = 0; i < this.ribbon.num; i++) {
            let distance = this.lantern.height ? this.lantern.height : this.lantern.width * this.lantern.oImg.naturalHeight / this.lantern.oImg.naturalWidth;
            let startX = this.lantern.x + Math.cos(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
            let startY = this.lantern.y + Math.sin(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
            let controlX = startX;
            let controlY = startY + this.ribbon.distance / 3;
            let endX = startX;// 结束点X坐标（变动）
            let endY = startY + _random(this.ribbon.distance - 20, this.ribbon.distance + 20);
            let speed = _random(0.02, 0.03);
            let range = _random(20, 30);
            let options = {
                startPoint: new Point(startX, startY),
                controlPoint: new Point(controlX, controlY),
                endPoint: new Point(endX, endY),
                color: this.ribbon.color,
                lineWidth: this.ribbon.lineWidth,
                globalAlpha: this.ribbon.globalAlpha,
                speed: speed,
                range: range,
            };
            this.ribbons.push(new Ribbon(options));
        }
    }
    // 画灯笼
    public drawLantern (ctx: any): void {
        let oImg = this.lantern.oImg;
        let imgWidth = this.lantern.oImg.naturalWidth;
        let imgHeight = this.lantern.oImg.naturalHeight;
        //
        let x = this.lantern.x;
        let y = this.lantern.y;
        let width = this.lantern.width;
        let height = this.lantern.height = width * imgHeight / imgWidth;
        // TODO 分两个函数
        ctx.save();
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.rotate(this.lantern.angle * Math.PI / 180);
        // 测试效果
        // ctx.fillStyle = 'rgba(255, 255, 0, 0.2)';
        // ctx.fillRect(0, 0, 200, 200);
        ctx.drawImage(oImg, 0, 0, imgWidth, imgHeight, -width / 2, 0, width, height);
        // 测试效果
        // ctx.drawImage(oImg, 0, 0, imgWidth, imgHeight, 0, 0, width, height);
        // ctx.fillStyle = '#f00';
        // ctx.fillRect(0, 0, 20, 20);
        ctx.closePath();
        ctx.restore();
        ctx.translate(0, 0);
        ctx.rotate(0);
    }
    // 画缎带
    public drawRibbon (ctx: any): void {
        this.ribbons.forEach(function (item) {
            item.render(ctx);
        })
    }

    public render (ctx: any): void {
        this.drawLantern(ctx);
        this.drawRibbon(ctx);
    }
}