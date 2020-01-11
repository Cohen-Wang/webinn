namespace cyber {

    function _random (min, max) {
        return Math.random() * (max - min) + min;
    }

    // 两点之间距离公式：Math.sqrt( x² + y²)
    function _getDistanceBetweenTwoPoints (startPoint, endPoint, precision = 2) {
        let distanceX = endPoint.x - startPoint.x;
        let distanceY = endPoint.y - startPoint.y;
        let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        //console.log('distance:' + distance);
        return distance;
    }

    // +----------------------------------------------------------------------
    // | Element 元素: 所有需要渲染的元素
    // +----------------------------------------------------------------------
    interface Element {
        render (ctx: any): void;
    }

    // +----------------------------------------------------------------------
    // | 元素：点
    // +----------------------------------------------------------------------
    export class Point {
        public x: number;
        public y: number;
        constructor (x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    // +----------------------------------------------------------------------
    // | 元素：圆
    // +----------------------------------------------------------------------
    abstract class Circle {
        public x: number;
        public y: number;
        public radius: number;
        public opacity: number;
        public color: string;

        protected constructor (options: any) {
            this.init(options);
        }
        protected init (options) {
            this.x = options.x || 100;
            this.y = options.y || 100;
            this.radius = options.radius || 10;
            this.opacity = options.opacity || 1;
            this.color = options.color || '#ccc';
        }
    }
    // 实心圆
    export class SolidCircle extends Circle implements Element {
        public speed: string;
        public angle: string;

        constructor (options: any) {
            super(options);
            //
            this.speed = options.speed || 10;
            this.angle = options.angle || 10;
        }

        public render (ctx: any): void {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.restore();
        }
    }





    export class Radar {

        public centerPoint: any;
        public distance: number;
        public num: number;
        public radius: number;
        //
        public circles: any;


        constructor (options) {
            this.centerPoint = options.centerPoint || null;
            this.distance = options.distance || 100;
            this.num = options.num || 10;
            this.radius = options.radius || 10;
            //
            this.circles = [];
            //
            this.createCircle();
        }

        public createCircle () {
            for (let i = 0; i < this.num; i++) {
                let angle = _random(0, 360) * Math.PI;
                let speed = _random(.1, .5);
                //
                let distance = this.distance / this.num * i;
                let x = this.centerPoint.x + distance * Math.cos(Math.PI / 180 * angle);
                let y = this.centerPoint.y + distance * Math.sin(Math.PI / 180 * angle);
                //
                let options = {
                    x: x,
                    y: y,
                    color: 'rgb('+~~_random(0, 255)+', '+~~_random(0, 255)+', '+~~_random(0, 255)+')',
                    radius: this.radius,
                    speed: speed,
                    angle: angle,
                };
                this.circles.push(new SolidCircle(options));
            }
        }

        public update (): void {
            for (let i = 0, len = this.circles.length; i < len; i++) {
                this.circles[i].angle += this.circles[i].speed;
                let startPoint = {
                    x: this.circles[i].x,
                    y: this.circles[i].y
                };
                let distance = _getDistanceBetweenTwoPoints(startPoint, this.centerPoint);
                this.circles[i].x = this.centerPoint.x + distance * Math.cos(this.circles[i].angle * Math.PI / 180);
                this.circles[i].y = this.centerPoint.y + distance * Math.sin(this.circles[i].angle * Math.PI / 180);
            }
        }


        public render (ctx: any): void {
            this.circles.forEach(function (item) {
                item.render(ctx);
            })
        }

    }

}