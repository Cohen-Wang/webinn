import IScene from "./IScene"
import Scene from "./Scene"
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