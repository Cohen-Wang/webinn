import IScene from "./IScene"
import Scene from "./Scene"
import { Ray } from "../Element/Ray"


interface Options {
    oImg: any;
    width: number;
    height?: number
}

/**
 * ��ȡһ��ͼƬ����Ϣ
 * @param options
 *      oImg
 *      width
 *      height
 */
function _getImageData (options: Options) {
    let oImg = options.oImg;
    let width = options.width || 400;
    let height = options.height;// û��Ĭ��ֵ
    // ����canvas������ģ�������ʾ��
    let can = document.createElement('canvas');
    let ctx = can.getContext('2d');
    can.width = width;
    can.height = height || can.width * oImg.naturalHeight / oImg.naturalWidth;
    //
    (ctx as any).drawImage(oImg, 0, 0, oImg.naturalWidth, oImg.naturalHeight, 0, 0, can.width, can.height);
    // ��ȡ���
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
        // ��������canvas
        this.virtualCan = document.createElement("canvas");
        this.virtualCtx = this.virtualCan.getContext("2d");
        this.virtualCan.width = this.imageData.width;
        this.virtualCan.height = this.imageData.height;
        // ����ͼƬ׼���ŵ�λ��
        this.startX = (this.can.width - this.imageData.width) / 2;
        this.startY = (this.can.height - this.imageData.height) / 2;
        // ���������ߵĽ���ɫ
        let rayColor1 = "#abcdef";
        let rayColor2 = "#1278de";
        this.gradient = this.ctx.createRadialGradient(this.can.width / 2, this.can.height / 2, 0, this.can.width / 2, this.can.height / 2, this.imageData.width);
        this.gradient.addColorStop(0, rayColor1);
        this.gradient.addColorStop(1, rayColor2);
        // ����������
        this.createRays();

        this.showHeight = this.startY;
    }

    public createRays (): void {
        for (var i = 0, len = this.imageData.data.length; i < len; i += 4) {
            let num     = i / 4;// ÿ4��ֵ������һ������
            let opacity = this.imageData.data[i + 3];
            if (opacity >= 200) {// ͸�����ж�
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
        // ���
        this.ctx.fillStyle = '#0f0f0f';
        this.ctx.fillRect(0, 0, this.can.width, this.can.height);
        // ��ͼ
        this.ctx.drawImage(this.virtualCan, 0, 0, this.showHeight, this.virtualCan.height, this.startX, this.startY, this.showHeight, this.virtualCan.height);// ����������
        // ��������
        this.ctx.save();
        this.ctx.strokeStyle = this.gradient;
        this.ctx.globalAlpha = 0.2;// �����ߵ���ɫ
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
    public lanterns: Array<Lantern>;// ����ʵ������

    constructor (options: any) {

        super (options);

        this.backgroundImg = options.backgroundImg;
        this.lanternImg = options.lanternImg;
        this.num = options.num || 60;
        this.lanterns = [];
        // ��������
        this.createLanterns();
    }
    // ������������������
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
        // ����
        this.setBackground();
        // ÿ������
        for (let i = 0, len = this.lanterns.length; i < len; i++) {
            this.lanterns[i].render(this.ctx);
        }

        return true;// ��ʱд��
    }

    public update (): void {
        for (let i = 0, len = this.lanterns.length; i < len; i++) {
            // ͼƬ�䶯
            if (this.lanterns[i].lantern.angle <= -15 || this.lanterns[i].lantern.angle >= 15) {
                this.lanterns[i].lantern.angleSpeed = -this.lanterns[i].lantern.angleSpeed;
            }
            this.lanterns[i].lantern.angle += this.lanterns[i].lantern.angleSpeed;

            // �д��䶯
            this.lanterns[i].beta++;// Math.sin��Ӧ��
            for (let j = 0, ribbonsLength = this.lanterns[i].ribbons.length; j < ribbonsLength; j++) {
                let distance = this.lanterns[i].lantern.height ? this.lanterns[j].lantern.height : this.lanterns[i].lantern.width * this.lanterns[i].lantern.oImg.naturalHeight / this.lanterns[i].lantern.oImg.naturalWidth;

                // �ı����е�
                this.lanterns[i].ribbons[j].startPoint.x = this.lanterns[i].lantern.x + Math.cos(Math.PI / 180 * (this.lanterns[i].lantern.angle + 90)) * distance;
                this.lanterns[i].ribbons[j].startPoint.y = this.lanterns[i].lantern.y + Math.sin(Math.PI / 180 * (this.lanterns[i].lantern.angle + 90)) * distance;
                //
                this.lanterns[i].ribbons[j].controlPoint.x = this.lanterns[i].ribbons[j].startPoint.x;
                this.lanterns[i].ribbons[j].endPoint.x = this.lanterns[i].ribbons[j].startPoint.x;

                // �ٸı������
                this.lanterns[i].ribbons[j].endPoint.x = this.lanterns[i].ribbons[j].startPoint.x + Math.sin(this.lanterns[i].beta * this.lanterns[i].ribbons[j].speed) * this.lanterns[i].ribbons[j].range;
            }
        }
    }
}