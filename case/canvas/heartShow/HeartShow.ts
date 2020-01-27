namespace cyber {

    // +------------------------------------------------------------------------------
    // |Ԫ�ؽӿ�
    // +------------------------------------------------------------------------------
    interface IElement {
        render (ctx: any): void;
    }

    // +------------------------------------------------------------------------------
    // |�����ࣺ����
    // +------------------------------------------------------------------------------
    abstract class Heart {
        public x: number;
        public y: number;
        public r;
        public color;
        public opacity;
        public speed: {
            opacity: number,
            r: number,
        };
        protected constructor (options: any) {
            this.x = options.x || 0;
            this.y = options.y || 0;
            this.r = options.r || 2;
            this.color = options.color || '#f00';
            this.opacity = options.opacity || 1;
            this.speed = options.speed || {
                opacity: 0,
                r: 0,
            };
        }
    }

    // +------------------------------------------------------------------------------
    // |ʵ��İ���
    // +------------------------------------------------------------------------------
    export class SolidHeart extends Heart implements IElement {
        constructor (options: any) {
            super(options);
        }
        public render (ctx: any): void {
            ctx.fillStyle = this.color;// _this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x, this.y - 3*this.r, this.x - 5*this.r, this.y - 15*this.r, this.x - 25*this.r, this.y - 15*this.r);
            ctx.bezierCurveTo(this.x - 55*this.r, this.y - 15*this.r, this.x - 55*this.r, this.y + 22.5*this.r, this.x - 55*this.r, this.y + 22.5*this.r);
            ctx.bezierCurveTo(this.x - 55*this.r, this.y + 40*this.r, this.x - 35*this.r, this.y + 62*this.r, this.x, this.y + 80*this.r);
            ctx.bezierCurveTo(this.x + 35*this.r, this.y + 62*this.r, this.x + 55*this.r, this.y + 40*this.r, this.x + 55*this.r, this.y + 22.5*this.r);
            ctx.bezierCurveTo(this.x + 55*this.r, this.y + 22.5*this.r, this.x + 55*this.r, this.y - 15*this.r, this.x + 25*this.r, this.y - 15*this.r);
            ctx.bezierCurveTo(this.x + 10*this.r, this.y - 15*this.r, this.x, this.y - 3*this.r, this.x, this.y);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    // +------------------------------------------------------------------------------
    // |���ĵİ���
    // +------------------------------------------------------------------------------
    export class HollowHeart extends Heart implements IElement {
        public lineWidth: number;
        constructor (options: any) {
            super(options);
            this.lineWidth = options.lineWidth || 1;
        }
        public render (ctx: any): void {
            ctx.strokeStyle = this.color;// _this.color;
            ctx.globalAlpha = this.opacity;
            ctx.lineWidth = this.lineWidth;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x, this.y - 3*this.r, this.x - 5*this.r, this.y - 15*this.r, this.x - 25*this.r, this.y - 15*this.r);
            ctx.bezierCurveTo(this.x - 55*this.r, this.y - 15*this.r, this.x - 55*this.r, this.y + 22.5*this.r, this.x - 55*this.r, this.y + 22.5*this.r);
            ctx.bezierCurveTo(this.x - 55*this.r, this.y + 40*this.r, this.x - 35*this.r, this.y + 62*this.r, this.x, this.y + 80*this.r);
            ctx.bezierCurveTo(this.x + 35*this.r, this.y + 62*this.r, this.x + 55*this.r, this.y + 40*this.r, this.x + 55*this.r, this.y + 22.5*this.r);
            ctx.bezierCurveTo(this.x + 55*this.r, this.y + 22.5*this.r, this.x + 55*this.r, this.y - 15*this.r, this.x + 25*this.r, this.y - 15*this.r);
            ctx.bezierCurveTo(this.x + 10*this.r, this.y - 15*this.r, this.x, this.y - 3*this.r, this.x, this.y);
            ctx.closePath();
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
    }



    let _random = function (min: number = 0, max: number = 0): number {
        return Math.random() * (max - min) + min;
    };


    export class HeartShow {
        public probability: number;
        public minX: number;
        public maxX: number;
        public minY: number;
        public maxY: number;
        public minRadius: number;
        public maxRadius: number;
        public minOpacity: number;
        public maxOpacity: number;
        //
        public minSpeed: number;
        public maxSpeed: number;
        public minOpacitySpeed: number;
        public maxOpacitySpeed: number;
        public minRadiusSpeed: number;
        public maxRadiusSpeed: number;
        //
        public minNum: number = 10;
        public maxNum: number = 50;

        // ����
        public hearts: any = [];

        constructor (options: any) {
            this.probability = options.probability || 0.1;
            this.minX = options.minX || 0;
            this.maxX = options.maxX || 100;
            this.minY = options.minY || 0;
            this.maxY = options.maxY || 100;
            this.minRadius = options.minSize || 0.05;
            this.maxRadius = options.maxSize || 0.1;
            this.minOpacity = options.minOpacity || 0.3;
            this.maxOpacity = options.maxOpacity || 1;
            // �ٶ�
            this.minSpeed = options.minSpeed || 3;
            this.maxSpeed = options.maxSpeed || 5;
            this.minOpacitySpeed = options.minOpacitySpeed || .009;
            this.maxOpacitySpeed = options.maxOpacitySpeed || .015;
            this.minRadiusSpeed = options.minOpacitySpeed || .003;
            this.maxRadiusSpeed = options.maxOpacitySpeed || .005;
            //
            this.createHeart(this.minNum);
        }

        public createHeart (num: number) {
            for (let i = 0; i < num; i++) {
                let options = {
                    x: _random(this.minX, this.maxX),
                    y: _random(this.minY, this.maxY),
                    r: _random( this.minRadius, this.maxRadius),
                    opacity: _random(this.minOpacity, this.maxOpacity),
                    color: 'rgb('+~~_random(0,255)+','+~~_random(0,255)+','+~~_random(0,255)+')',
                    //
                    speed: {
                        opacity: _random(this.minOpacitySpeed, this.maxOpacitySpeed),
                        r: _random(this.minRadiusSpeed, this.maxRadiusSpeed),
                    },
                };

                Math.random() > 0.5 ? this.hearts.push(new SolidHeart(options)) : this.hearts.push(new HollowHeart(options));
            }
        }

        public update (): void {
            for (let i = 0, len = this.hearts.length; i < len; i++) {
                // �����˶�
                this.hearts[i].y--;
                // ͸���Ƚ���
                this.hearts[i].opacity -= this.hearts[i].speed.opacity;
                // ���
                this.hearts[i].r += this.hearts[i].speed.r;
                // ɾ��
                if (this.hearts[i].opacity <= 0 ) {
                    this.hearts.splice(i, 1);
                    i--;
                    len--;
                }
            }

            if (this.hearts.length <= this.maxNum && Math.random() > this.probability) {
                this.createHeart(1);
            }
        }

        public render (ctx: any) {
            this.hearts.forEach((item)=> {
                item.render(ctx);
            })
        }
    }
}