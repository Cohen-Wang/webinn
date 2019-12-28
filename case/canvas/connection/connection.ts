namespace cyber {


    // +----------------------------------------------------------------------
    // | 元素
    // +----------------------------------------------------------------------
    interface Element {
        render (ctx: any): void;
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
        constructor (options: any) {
            super(options)
        }
        public render (ctx: any): void {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    // 空心圆
    export class HollowCircle extends Circle implements Element {
        public lineWidth: number;
        constructor (options: any) {
            super(options);
            this.lineWidth = options.lineWidth || 1;
        }
        public render (ctx: any): void {
            ctx.strokeStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            ctx.closePath();
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
    }
    // +----------------------------------------------------------------------
    // | 元素：星星
    // +----------------------------------------------------------------------
    abstract class Star {
        public x: number;
        public y: number;
        public color: string;
        public radius: number;
        public opacity: number;
        protected constructor (options: any) {
            this.init(options);
        }
        protected init (options) {
            this.x = options.x || 100;
            this.y = options.y || 100;
            this.radius = options.radius || 10;
            this.color = options.color || '#ccc';
            this.opacity = options.opacity || 1;
        }
    }
    // 实体星星
    export class SolidStar extends Star implements Element {
        constructor (options: any) {
            super(options)
        }
        public render (ctx: any): void {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.lineCap = 'round';
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.radius / 6, this.y + this.radius / 3);
            ctx.lineTo(this.x + this.radius / 2, this.y + this.radius / 2);
            ctx.lineTo(this.x + this.radius / 6, this.y + this.radius / 3 * 2);
            ctx.lineTo(this.x, this.y + this.radius);
            ctx.lineTo(this.x - this.radius / 6, this.y + this.radius / 3 * 2);
            ctx.lineTo(this.x - this.radius / 2, this.y + this.radius / 2);
            ctx.lineTo(this.x - this.radius / 6, this.y + this.radius / 3);
            ctx.lineTo(this.x, this.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;// 恢复
        }
    }
    // 空心星星
    export class HollowStar extends Star implements Element {
        public lineWidth: number;
        constructor (options: any) {
            super(options);
            this.lineWidth = options.lineWidth || 1;
        }
        public render (ctx: any): void {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.lineWidth = this.lineWidth;
            ctx.lineCap = 'round';
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.radius / 6, this.y + this.radius / 3);
            ctx.lineTo(this.x + this.radius / 2, this.y + this.radius / 2);
            ctx.lineTo(this.x + this.radius / 6, this.y + this.radius / 3 * 2);
            ctx.lineTo(this.x, this.y + this.radius);
            ctx.lineTo(this.x - this.radius / 6, this.y + this.radius / 3 * 2);
            ctx.lineTo(this.x - this.radius / 2, this.y + this.radius / 2);
            ctx.lineTo(this.x - this.radius / 6, this.y + this.radius / 3);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;// 恢复
        }
    }
    // +----------------------------------------------------------------------
    // | 元素：线
    // +----------------------------------------------------------------------
    export class Line implements Element {
        public x1: number;
        public y1: number;
        public x2: number;
        public y2: number;
        public color: string;
        public opacity: number;
        public lineWidth: number;
        protected constructor (options: any) {
            this.init(options);
        }
        protected init (options) {
            this.x1 = options.x1 || 100;
            this.y1 = options.y1 || 100;
            this.x2 = options.x2 || 200;
            this.y2 = options.y2 || 200;
            this.color = options.color || '#ccc';
            this.opacity = options.opacity || 1;
            this.lineWidth = options.lineWidth || 1;
        }
        public render (ctx: any): void {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.moveTo(this.x1, this.y1);
            ctx.lineTo(this.x2, this.y2);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
    }





    // +----------------------------------------------------------------------
    // | 移动
    // +----------------------------------------------------------------------
    export function move (element: any, ctx: any, options) {
        element.x += options.speedX || 1;
        element.y += options.speedY || 1;

        element.render(ctx);
    }



}