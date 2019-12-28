namespace cyber {

    function random (m, n) {
        return Math.random() * (n - m) + m;
    }



    class Point {
        public x: number;
        public y: number;
        constructor (x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }



    class Plant {
        public startPoint: any;
        public endPoint: any;
        public color: string;
        public lineWidth: number;
        public globalAlpha: number;
        //
        public amp: number;

        constructor (options) {
            this.startPoint = options.startPoint;
            this.endPoint = options.endPoint;
            this.color = options.color;
            this.lineWidth = options.lineWidth || 14;
            this.globalAlpha = options.globalAlpha || 0.8;
            //
            this.amp = options.amp || 40;
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
            ctx.quadraticCurveTo(this.startPoint.x, this.startPoint.y - 120, this.endPoint.x, this.endPoint.y);
            ctx.closePath();

            ctx.stroke();
            ctx.restore();
        }
    }



    export class WavePlant {
        public width: number;
        public height: number;
        public num: number;
        public lineWidth: number;
        public globalAlpha: number;
        public color: string;
        public beta: number;
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
                let endX = startX;// 结束点X坐标（变动）
                let endY = this.height * .66 - Math.random() * 100;// 结束点Y坐标（固定）
                let amp = random(30, 50); // 40 ~ 50
                let options = {
                    startPoint: new Point(startX, startY),
                    endPoint: new Point(endX, endY),
                    color: this.color,
                    lineWidth: this.lineWidth,
                    globalAlpha: this.globalAlpha,
                    amp: amp,
                };

                this.plants.push(new Plant(options));
            }
        }

        public update(): void {
            this.beta++;// Math.sin的应用
            let l = Math.sin(this.beta * 0.02);
            // 变动
            for (let i = 0; i < this.plants.length; i++) {
                // 周期性改变水草的顶点X坐标
                this.plants[i].endPoint.x = this.plants[i].startPoint.x + l * this.plants[i].amp;
            }
        }

        public render (ctx: any): void {
            this.plants.forEach(function (item) {
                item.draw(ctx);
            })
        }

    }
}