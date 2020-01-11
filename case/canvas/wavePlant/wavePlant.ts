namespace cyber {

    // +----------------------------------------------------------------------
    // | 内置函数
    // +----------------------------------------------------------------------
    function _random (m, n) {
        return Math.random() * (n - m) + m;
    }

    // +----------------------------------------------------------------------
    // | 元素：点
    // +----------------------------------------------------------------------
    class Point {
        public x: number;
        public y: number;
        constructor (x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    // +----------------------------------------------------------------------
    // | 元素：草
    // +----------------------------------------------------------------------
    class Plant {
        public startPoint: any;
        public controlPoint: any;
        public endPoint: any;
        public color: string;
        public lineWidth: number;
        public globalAlpha: number;
        //
        public speed: number;// 左右摇摆的范围
        public range: number;// 左右摇摆的范围

        constructor (options) {
            this.startPoint = options.startPoint;
            this.controlPoint = options.controlPoint;
            this.endPoint = options.endPoint;
            this.color = options.color;
            this.lineWidth = options.lineWidth || 14;
            this.globalAlpha = options.globalAlpha || 0.8;
            //
            this.speed = options.speed || 0.02;// 左右摇摆的速度
            this.range = options.range || 40;// 左右摇摆的范围
        }

        public draw (ctx): void {
            ctx.save();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.globalAlpha = this.globalAlpha;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();
            ctx.moveTo(this.startPoint.x, this.startPoint.y);
            // 弧度线：贝塞尔曲线
            ctx.quadraticCurveTo(this.controlPoint.x, this.controlPoint.y, this.endPoint.x, this.endPoint.y);
            ctx.lineTo(this.endPoint.x, this.endPoint.y);
            ctx.closePath();
            ctx.stroke();
            // 画一条直线感受下区别
            if (true) {
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.globalAlpha = 1;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                ctx.beginPath();
                ctx.moveTo(this.startPoint.x, this.startPoint.y);
                ctx.lineTo(this.endPoint.x, this.endPoint.y);
                ctx.closePath();
                ctx.stroke();
            }
            ctx.restore();
        }
    }

    export class WavePlant {
        public num: number;
        public width: number;
        public height: number;
        public lineWidth: number;
        public globalAlpha: number;
        public color: string;
        public distance = 500;
        //
        public beta: number;
        //
        public plants: any = [];

        constructor (options) {
            this.width = options.width || 100;
            this.height = options.height || 100;
            this.num = options.num || 10;
            this.lineWidth = options.lineWidth || 20;
            this.color = options.color || 'red';
            this.globalAlpha = options.globalAlpha || 0.8;
            this.beta = 0;

            this.init();
        }

        public init (): void {
            for (let i = 0; i < this.num; i++) {
                let startX = i * this.width / this.num + Math.random() * this.lineWidth / 2;// 均匀生成startX
                let startY = this.height;
                let controlX = startX;
                let controlY = startY - this.distance / 2;
                let endX = startX;// 结束点X坐标（变动）
                let endY = this.height - _random(this.distance - 100, this.distance + 100);// 结束点Y坐标（固定）
                let speed = _random(0.01, 0.03);
                let range = _random(30, 50); // 40 ~ 50
                let options = {
                    startPoint: new Point(startX, startY),
                    controlPoint: new Point(controlX, controlY),
                    endPoint: new Point(endX, endY),
                    color: this.color,
                    lineWidth: this.lineWidth,
                    globalAlpha: this.globalAlpha,
                    speed: speed,
                    range: range,
                };

                this.plants.push(new Plant(options));
            }
        }

        public update(): void {
            this.beta++;// Math.sin的应用
            // 变动
            for (let i = 0; i < this.plants.length; i++) {
                // 周期性改变水草的顶点X坐标
                this.plants[i].endPoint.x = this.plants[i].startPoint.x + Math.sin(this.beta * this.plants[i].speed) * this.plants[i].range;
            }
        }

        public render (ctx: any): void {
            this.plants.forEach(function (item) {
                item.draw(ctx);
            })
        }

    }
}