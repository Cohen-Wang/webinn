namespace cyber {


    interface Element {
        render (ctx: any): void;
    }




    class Point {
        public x: number;
        public y: number;
        constructor (x, y) {
            this.x = x;
            this.y = y;
        }
    }


    // +---------------------------------------------------------
    // | 线
    // +---------------------------------------------------------
    abstract class Line {
        public startPoint: any;
        public endPoint: any;
        public color: string;
        public lineWidth: number;

        protected constructor (startPoint, endPoint, color, lineWidth) {
            this.startPoint = startPoint;
            this.endPoint = endPoint;
            this.color = color || 'red';
            this.lineWidth = lineWidth || 1;
        }
    }
    class SolidLine extends Line implements Element {
        constructor(startPoint, endPoint, color, lineWidth) {
            super(startPoint, endPoint, color, lineWidth);
        }
        public render (ctx: any): void {
            ctx.save();
            ctx.lineWidth = this.lineWidth;
            ctx.lineCap = 'round';
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.startPoint.x, this.startPoint.y);
            ctx.lineTo(this.endPoint.x, this.endPoint.y);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    }



    // +---------------------------------------------------------
    // | 圆
    // +---------------------------------------------------------
    abstract class Circle {
         public x: number;
         public y: number;
         public r: number;
         public color: string;
         protected constructor (x, y, r, color) {
             this.x = x || 0;
             this.y = y || 0;
             this.r = r || 1;
             this.color = color || 'red';
         }
    }
    class SolidCircle extends Circle implements Element {
        constructor (x, y, r, color) {
            super(x, y, r, color);
        }
        public render (ctx: any): void {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }
    class HollowCircle extends Circle implements Element {
        constructor (x, y, r, color) {
            super(x, y, r, color);
        }
        public render (ctx: any): void {
            ctx.save();
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    }



    // +---------------------------------------------------------
    // | 文字
    // +---------------------------------------------------------
    abstract class Text {
        public x: number;
        public y: number;
        public text: string;
        public color: string;
        public fontSize: number;
        protected constructor (x, y, text, color, fontSize) {
            this.x = x || 0;
            this.y = y || 0;
            this.text = text || 'default';
            this.color = color || 'red';
            this.fontSize = fontSize || 12;
        }
    }
    class SolidText extends Text implements Element {
        constructor(x, y, text, color, fontSize) {
            super(x, y, text, color, fontSize);
        }

        public render (ctx: any): void {
            ctx.save();
            ctx.font = this.fontSize + 'px Arial';
            ctx.fillStyle = this.color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.beginPath();
            ctx.fillText(this.text, this.x, this.y);
            ctx.closePath();
            ctx.restore();
        }
    }




    export class Clock {
        //
        public center: {
            x: number,
            y: number,
        };
        // 边框
        public frame: {
            r: number,
            color: string,
        };
        public detailCircle: {
            r: number,
            color: string,
            size: number,
        };
        // 中心点
        public middleCircle: {
            r: number,
            color: string
        };



        public frameObj: any;// 边框
        public middleCircleObj: any;// 中线点

        constructor (options) {
            // 初始化
            this.center = {
                x: options.center.x || 0,
                y: options.center.y || 0,
            };
            this.frame = {
                r: options.frame.r || 100,
                color: options.frame.color || 'red',
            };
            this.detailCircle = {
                r: options.detailCircle.r,
                color: options.detailCircle.color || 'red',
                size: options.detailCircle.size || 1,
            };
            this.middleCircle = {
                r: options.middleCircle.r || 100,
                color: options.middleCircle.r || 'red',
            };

            // 边框
            this.frameObj = new HollowCircle(this.center.x, this.center.y, this.frame.r, this.frame.color);
            // 中心点
            this.middleCircleObj = new SolidCircle(this.center.x, this.center.y, this.middleCircle.r, this.middleCircle.color);
        }

        // 画边框
        public drawFrame (ctx: any): void {
            this.frameObj.render(ctx);
        }

        public drawNum (ctx: any): void {
            // 画原点和字
            for (let i = 0; i < 360; i++) {
                if (i % 6 === 0) {
                    let x = this.center.x + this.detailCircle.r * Math.cos(i * Math.PI / 180);
                    let y = this.center.y + this.detailCircle.r * Math.sin(i * Math.PI / 180);
                    // 画点
                    this.drawSolidCircle(x, y, this.minuteRadius, '#ccc');
                    i % 5 === 0 && this.drawSolidCircle(x, y, this.minuteRadius, '#000');
                }
                // 写字
                if (i % 30 === 0) {
                    let text = i === 0 ? 12 : i/30;
                    let x = this.center.x + this.distance * 0.85 * Math.cos((i - 90) * Math.PI/180);
                    let y = this.center.y + this.distance * 0.85 * Math.sin((i - 90) * Math.PI/180);
                    this.writeText(text, x, y, '30px', '#000');
                }
            }
        }

        // 画中心点
        public drawMiddleCircle (ctx: any): void {
            this.middleCircleObj.render(ctx);
        }

        public update (): void {

        }

        public render (ctx: any): void {
            // 画
            this.drawFrame(ctx);

            // 画针
            this.drawLine(this.center.x, this.center.y, this.hourPointer.x, this.hourPointer.y, this.hourPointer.width, this.hourPointer.color);// 时针
            this.drawLine(this.center.x, this.center.y, this.minPointer.x, this.minPointer.y, this.minPointer.width, this.minPointer.color);// 分针
            this.drawLine(this.center.x, this.center.y, this.secPointer.x, this.secPointer.y, this.secPointer.width, this.secPointer.color);// 秒针

            // 画中心点
            this.drawMiddleCircle(ctx);
        }




    }


}