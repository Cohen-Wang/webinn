import IScene from "./IScene"
import Scene from "./Scene"
import { Ray } from "../Element/Ray"


interface Options {
    oImg: any;
    width: number;
    height?: number
}

/**
 * 获取一张图片的信息
 * @param options
 *      oImg
 *      width
 *      height
 */
function _getImageData (options: Options) {
    let oImg = options.oImg;
    let width = options.width || 400;
    let height = options.height;// 没有默认值
    // 创建canvas，虚拟的，不用显示的
    let can = document.createElement('canvas');
    let ctx = can.getContext('2d');
    can.width = width;
    can.height = height || can.width * oImg.naturalHeight / oImg.naturalWidth;
    //
    (ctx as any).drawImage(oImg, 0, 0, oImg.naturalWidth, oImg.naturalHeight, 0, 0, can.width, can.height);
    // 获取结果
    return (ctx as any).getImageData(0, 0, can.width, can.height);
}


export class RayLogo extends Scene implements IScene {
    public oImg: any = null;
    public imageData: any = [];
    public virtualCan: any = null;
    public virtualCtx: any = null;
    public startX: number = 0;
    public startY: number = 0;
    public gradient: any;
    public rays: Array<Ray> = [];
    public showHeight: number;
    public timer: any = null;

    constructor (options: any) {
        super(options);
        this.oImg = options.oImg || null;
        this.imageData = _getImageData({oImg: this.oImg, width: 350,});
        // 创建虚拟canvas
        this.virtualCan = document.createElement("canvas");
        this.virtualCtx = this.virtualCan.getContext("2d");
        this.virtualCan.width = this.imageData.width;
        this.virtualCan.height = this.imageData.height;
        // 计算图片准备放的位置
        this.startX = (this.can.width - this.imageData.width) / 2;
        this.startY = (this.can.height - this.imageData.height) / 2;
        // 创建镭射线的渐变色
        let rayColor1 = "#abcdef";
        let rayColor2 = "#1278de";
        this.gradient = this.ctx.createRadialGradient(this.can.width / 2, this.can.height / 2, 0, this.can.width / 2, this.can.height / 2, this.imageData.width);
        this.gradient.addColorStop(0, rayColor1);
        this.gradient.addColorStop(1, rayColor2);
        // 创建镭射线
        this.createRays();

        this.showHeight = this.startY;
    }

    public createRays (): void {
        for (var i = 0, len = this.imageData.data.length; i < len; i += 4) {
            let num     = i / 4;// 每4个值，代表一个像素
            let opacity = this.imageData.data[i + 3];
            if (opacity >= 200) {// 透明度判断
                let x = num % this.imageData.width + this.startX;
                let y = ~~(num / this.imageData.width) + this.startY;
                if (x % 2 && y % 2) {
                    this.rays.push(new Ray(x, y, this.imageData.width, this.imageData.height));
                }
            }
        }
    }

    public update (): void {
        this.showHeight += 6;
    }

    public render (): boolean {
        let len = 0;
        this.showHeight = Math.min(this.showHeight, this.imageData.height + this.startY);
        // 清空
        this.ctx.fillStyle = '#0f0f0f';
        this.ctx.fillRect(0, 0, this.can.width, this.can.height);
        // 画图
        this.ctx.drawImage(this.virtualCan, 0, 0, this.showHeight, this.virtualCan.height, this.startX, this.startY, this.showHeight, this.virtualCan.height);// 画的是文字
        // 画镭射线
        this.ctx.save();
        this.ctx.strokeStyle = this.gradient;
        this.ctx.globalAlpha = 0.2;// 镭射线的颜色
        this.ctx.globalCompositeOperation = "lighter";
        this.ctx.beginPath();
        for (let i = 0; i < this.rays.length; i++) {
            if (this.rays[i].y < this.showHeight) {
                if (this.rays[i].h >= 0) {
                    this.rays[i].render(this.ctx);
                    this.rays[i].update();
                } else {
                    ++len;
                    this.virtualCtx.fillStyle = '#1278de';
                    this.virtualCtx.fillRect(this.rays[i].x - this.startX, this.rays[i].y - this.startY, 1, 1);
                }
            }
        }
        this.ctx.stroke();
        this.ctx.restore();

        return len < this.rays.length;
    }
}


import { Lantern } from "../Element/Lantern"


let _random = function (min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
};


export class NewYear extends Scene implements IScene {

    public backgroundImg: any;
    public lanternImg: any;
    public num: number;
    public lanterns: Array<Lantern>;// 灯笼实例容器

    constructor (options: any) {

        super (options);

        this.backgroundImg = options.backgroundImg;
        this.lanternImg = options.lanternImg;
        this.num = options.num || 60;
        this.lanterns = [];
        // 创建灯笼
        this.createLanterns();
    }
    // 创建灯笼，放入容器
    public createLanterns (): void {
        for (let i = 0; i < this.num; i++) {
            let x = this.can.width / this.num * i + _random(-50, 50);
            let y = _random(-10, 10);
            let options = {
                lantern: {
                    oImg: this.lanternImg,
                    x: x,
                    y: y,
                    width: 100,
                    angle: _random(-10, 10),
                    angleSpeed: _random(0.05, 0.1),
                },
                ribbon: {
                    num: 5,
                    distance: _random(100, 150),
                    color: '#dfdc15',
                    lineWidth: 1.5,
                    globalAlpha: 0.8,
                }
            };
            this.lanterns.push(new Lantern(options));
        }
    }

    public setBackground () {
        this.ctx.drawImage(this.backgroundImg, 0, 0, this.backgroundImg.naturalWidth, this.backgroundImg.naturalHeight, 0, 0, this.can.width, this.can.height);
    }

    public render () {
        // 背景
        this.setBackground();
        // 每个灯笼
        for (let i = 0, len = this.lanterns.length; i < len; i++) {
            this.lanterns[i].render(this.ctx);
        }

        return true;// 暂时写的
    }

    public update (): void {
        for (let i = 0, len = this.lanterns.length; i < len; i++) {
            // 图片变动
            if (this.lanterns[i].lantern.angle <= -15 || this.lanterns[i].lantern.angle >= 15) {
                this.lanterns[i].lantern.angleSpeed = -this.lanterns[i].lantern.angleSpeed;
            }
            this.lanterns[i].lantern.angle += this.lanterns[i].lantern.angleSpeed;

            // 缎带变动
            this.lanterns[i].beta++;// Math.sin的应用
            for (let j = 0, ribbonsLength = this.lanterns[i].ribbons.length; j < ribbonsLength; j++) {
                let distance = this.lanterns[i].lantern.height ? this.lanterns[j].lantern.height : this.lanterns[i].lantern.width * this.lanterns[i].lantern.oImg.naturalHeight / this.lanterns[i].lantern.oImg.naturalWidth;

                // 改变所有点
                this.lanterns[i].ribbons[j].startPoint.x = this.lanterns[i].lantern.x + Math.cos(Math.PI / 180 * (this.lanterns[i].lantern.angle + 90)) * distance;
                this.lanterns[i].ribbons[j].startPoint.y = this.lanterns[i].lantern.y + Math.sin(Math.PI / 180 * (this.lanterns[i].lantern.angle + 90)) * distance;
                //
                this.lanterns[i].ribbons[j].controlPoint.x = this.lanterns[i].ribbons[j].startPoint.x;
                this.lanterns[i].ribbons[j].endPoint.x = this.lanterns[i].ribbons[j].startPoint.x;

                // 再改变结束点
                this.lanterns[i].ribbons[j].endPoint.x = this.lanterns[i].ribbons[j].startPoint.x + Math.sin(this.lanterns[i].beta * this.lanterns[i].ribbons[j].speed) * this.lanterns[i].ribbons[j].range;
            }
        }
    }
}