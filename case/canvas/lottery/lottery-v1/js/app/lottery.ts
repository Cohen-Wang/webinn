// +----------------------------------------------------------------------
// | file name: Lottery
// +----------------------------------------------------------------------
// | Copyright (c) 2019
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: cohen_wang <615940742@qq.com>
// +----------------------------------------------------------------------

/**
 * 问：在不考虑ES5并没有private关键字的前提下， 到底什么时候用 private啊？ 为什么要有private的需求？ 我全部用public不好吗？
 * 答：
 */

/**
 * 问：我的类Circle 和 类Star 都具有相同属性，他们是否能继承同一个类？ 如果是，如何命名？
 * 答：
 */

/**
 * 问：我的index.js应该如何封装？ 封装当前需求，我会， 但是又要同样的元素，其他需求，又怎么办？
 * 答：
 */

/**
 * 问：我在调用命名空间的时候，是全部一起写，如：lottery.element.SolidCircle()， 是否应该赋值（类似use）
 * 答：
 */

/**
 * 问：我的星星类的初始坐标，并不是正中间，而圆类的坐标却是正中间， 应该如何理解这个问题。
 * 答：
 */

/**
 * 问：加载资源的地方， 如果我要分别显示加载图片和音频的数量， 与我要一起显示总数量，应该如何写？
 * 答：
 */

/**
 * 问：什么时候constructor ， 什么时候调用实例方法？ 如创建一个Point
 * 答：
 */

namespace lottery {

    let _w = window;
    let _b = document.body;// 返回html dom中的body节点 即<body>
    let _d = document.documentElement;// 返回html dom中的root 节点 即<html>

    // screen helper
    let _screenInfo = function (): object {
        let width = Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0);
        let height = Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0);
        let scrollx = Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - (_d.clientLeft || 0);
        let scrolly = Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - (_d.clientTop || 0);

        return {
            width: width,
            height: height,
            ratio: width / height,
            centerX: width / 2,
            centerY: height / 2,
            scrollX: scrollx,
            scrollY: scrolly
        };
    };

    let random = function (min: number = 0, max: number = 1): number {
        return Math.random() * (max - min) + min;
    };


    /**
     * 并不是所有设备的绘制时间间隔是1000/60 ms, 以及上面并木有cancel相关方法，所以，就有下面这份更全面的兼容方法：
     */
    (function() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
                window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    }());




    // +----------------------------------------------------------------------
    // | canvas工厂函数：创建一个canvas节点，且添加到参数节点
    // +----------------------------------------------------------------------
    export class CanvasFactory {
        private _dom: any = null;// TODO 这里应该是什么类型？？
        private _canvas: any = null;
        private _context: object = null;

        constructor (dom: object = document.body) {// 默认添加到body内
            this._dom = dom;// 赋值
            this._init();// 初始化
            // 如果canvas的容器不是div，而是body。那么就要保证与body同时改变的大小。
            let _this = this;
            if (dom === document.body) {
                window.addEventListener('resize', function () {
                    _this._windowResize();
                });
            }
        }
        // 创建canvas
        private _init (): void {
            try {
                this._canvas = document.createElement('canvas');
                // this._canvas.style["display"] = "block";
                // this._canvas.style["position"] = "fixed";
                // this._canvas.style["margin"] = "0";
                // this._canvas.style["padding"] = "0";
                // this._canvas.style["border"] = "0";
                // this._canvas.style["outline"] = "0";
                // this._canvas.style["left"] = "0";
                // this._canvas.style["top"] = "0";
                let _domInfo = this._getDomInfo();
                this._canvas.width = _domInfo['width'];
                this._canvas.height = _domInfo['height'];
                // this._canvas.style["z-index"] = "-1";
                //this._canvas.style["background-color"] = "#ccc";
                this._canvas.id = "bgCanvas";

                this._context = this._canvas.getContext('2d');
                this._dom.appendChild(this._canvas);
            } catch (e) {
                console.warn("Canvas Context Error: " + e.toString());
                return;
            }
        }
        // 获取包装canvas容器的父节点数据，包括宽高
        private _getDomInfo (): object {
            let width = this._dom.offsetWidth;
            let height = this._dom.offsetHeight;
            return {
                width,
                height,
            };
        }
        // 随窗口变化而变换
        private _windowResize (): void {
            let _window: object = _screenInfo();
            let width: number = _window['width'];
            let height: number = _window['height'];
            this._canvas.width = width;
            this._canvas.height = height;
        }
        // 提供外部获取canvas元素
        public getCanvas (): any {
            return this._canvas;
        }
        // 提供外部使用canvas的上下文
        public getContext (): any {
            return this._context;
        }
    }



    // +----------------------------------------------------------------------
    // | Element 元素: 所有需要渲染的元素
    // +----------------------------------------------------------------------
    // | render()
    // +----------------------------------------------------------------------
    export namespace element {
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
        // | 元素：方形
        // +----------------------------------------------------------------------
        abstract class Rect {
            public x: number;
            public y: number;
            public width: number;
            public height: number;
            public opacity: number;
            public color: string;
            protected constructor (options: any) {
                this.init(options);
            }
            protected init (options) {
                this.x = options.x || 100;
                this.y = options.y || 100;
                this.width = options.width || 1;
                this.height = options.height || 1;
                this.opacity = options.opacity || 1;
                this.color = options.color || '#ccc';
            }
        }
        // 实心方形
        export class SolidRect extends Rect implements Element {
            constructor (options: any) {
                super(options)
            }
            public render (ctx: any): void {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
                ctx.closePath();
                ctx.restore();
                ctx.globalAlpha = 1;
            }
        }
        // 空心方形
        export class HollowRect extends Rect implements Element {
            public lineWidth: number;
            constructor (options: any) {
                super(options);
                this.lineWidth = options.lineWidth || 1;
            }
            public render (ctx: any): void {
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.lineWidth = this.lineWidth;
                ctx.lineCap = 'butt';
                ctx.strokeRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
                ctx.closePath();
                ctx.restore();
                ctx.globalAlpha = 1;
            }
        }

        // export class Test extends Rect implements Element {
        //     public lineWidth: number;
        //     public r: number;
        //     constructor (options: any) {
        //         super(options);
        //         this.lineWidth = options.lineWidth || 1;
        //         this.r = options.r || 20;
        //     }
        //     public render (ctx: any): void {
        //         ctx.save(); ctx.beginPath(); // draw top and top right corner'
        //         ctx.strokeStyle = this.color;
        //         ctx.lineWidth = 1;
        //         ctx.moveTo(this.x + this.r, this.y);
        //         ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.r, this.r); // draw right side and bottom right corner
        //         ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - this.r, this.y + this.height, this.r); // draw bottom and bottom left corner
        //         ctx.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - this.r, this.r); // draw left and top left corner
        //         ctx.arcTo(this.x, this.y, this.x + this.r, this.y, this.r);
        //         ctx.stroke();
        //         ctx.restore();
        //     }
        // }


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
        // | 元素：文字
        // +----------------------------------------------------------------------
        abstract class Text  {
            public x: number;
            public y: number;
            public color: string;
            public opacity: number;
            public text: string;
            public fontStyle: string;
            public fontVariant: string;
            public fontWeight: string | number;
            public fontSize: number;
            public fontFamily: string;

            protected constructor (options: any) {
                this.init(options);
            }
            protected init (options) {
                this.x = options.x || 100;
                this.y = options.y || 100;
                this.color = options.color || '#ccc';
                this.opacity = options.opacity || 1;
                this.text = options.text || 'default';
                this.fontStyle = options.fontStyle || 'normal';
                this.fontVariant = options.fontVariant || 'normal';
                this.fontWeight = options.fontWeight || 900;
                this.fontSize = options.fontSize || 24;
                this.fontFamily = options.fontFamily || 'arial';
            }
        }
        // 实体字
        export class SolidText extends Text implements Element {
            constructor (options: any) {
                super(options)
            }
            public render (ctx: any): void {
                ctx.save();
                ctx.beginPath();
                ctx.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
                ctx.fillStyle = this.color;// 设置颜色
                ctx.globalAlpha = this.opacity;
                ctx.textAlign = "center";// 设置水平对齐方式
                ctx.textBaseline = "middle";// 设置垂直对齐方式
                ctx.fillText(this.text, this.x, this.y);// 绘制文字（参数：要写的字，x坐标，y坐标）
                ctx.closePath();
                ctx.restore();
            }
        }
        // 空心字
        export class HollowText extends Text implements Element {
            public lineWidth: number;
            constructor (options: any) {
                super(options);
                this.lineWidth = options.lineWidth || 1;
            }
            public render (ctx: any): void {
                ctx.save();
                ctx.beginPath();
                ctx.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
                ctx.strokeStyle = this.color;// 设置颜色
                ctx.globalAlpha = this.opacity;
                ctx.lineWidth = this.lineWidth;
                ctx.textAlign = "center";// 设置水平对齐方式
                ctx.textBaseline = "middle";// 设置垂直对齐方式
                ctx.strokeText(this.text, this.x, this.y);// 绘制文字（参数：要写的字，x坐标，y坐标）
                ctx.closePath();
                ctx.restore();
            }
        }
    }/** namespace element **/



    // +----------------------------------------------------------------------
    // | Animation 动画: 所有需要渲染的元素
    // +----------------------------------------------------------------------
    // | render()
    // +----------------------------------------------------------------------
    export namespace animation {

        export function bigOut (element: any, ctx: any, options: any) {
            element.radius += options.radius_speed || .001;
            element.opacity -= options.opacity_speed || .001;
            // TODO ???????? 不完美
            if (element.opacity >= 0) {
                element.render(ctx);
            }
        }


        export function moveSmallOut (element: any, ctx: any, options: any) {
            let isText = options.isText || false;
            if (isText) {
                element.fontSize -= options.fontSize_speed || 1;
            } else {
                element.radius += options.radius_speed || .001;
            }
            element.x += options.x_speed || 1;
            element.y += options.y_speed || 1;
            element.opacity -= options.opacity_speed || .001;
            // TODO ???????? 不完美
            if (element.opacity >= 0) {
                element.render(ctx);
            }
        }


    }/** namespace Animation **/


    // +----------------------------------------------------------------------
    // | ImageData: 获取图片信息
    // +----------------------------------------------------------------------
    export class ImageData {
        public can: any;
        public ctx: any;
        public oImg: any;
        constructor () {
            this.oImg = null;
            this.can = document.createElement('canvas');
            this.ctx = this.can.getContext('2d');
        }
        /**
         * @param options
         *      oImg: 加载好的图片对象
         *      width: 期望以 什么样的宽，高来显示图片
         *      height: 可选，填了就固定高度； 不填就是固定比列；
         * @param callback
         */
        public getInfo (options, callback) {
            let _this = this;
            this.oImg = new Image();
            this.oImg.src = options.src;
            this.oImg.onload = function () {
                // 设置canvas宽高
                _this.can.width = options.width;
                _this.can.height = options.height || options.width * _this.oImg.naturalHeight / _this.oImg.naturalWidth;
                // 绘制图像
                _this.ctx.drawImage(this, 0, 0, _this.oImg.naturalWidth, _this.oImg.naturalHeight, 0, 0, _this.can.width, _this.can.height);
                // 获取图像的像素信息，并根据像素信息重新绘制出粒子效果轮廓图，
                // canvas有一个叫getImageData的接口，通过该接口可以获取到画布上指定位置的全部像素的数据
                let imageData = _this.ctx.getImageData(0, 0, _this.oImg.naturalWidth, _this.oImg.naturalHeight);// 注意获取数据的范围
                // 回调函数
                callback && callback(imageData);
            };
        }

        // 计算并保存坐标
        public calculate (imageData) {
            let result = [];
            for (let i = 0; i < this.oImg.width; i++) {
                for (let j = 0; j < this.oImg.height; j++) {
                    /**
                     * 计算(i, j)在数组中的R的坐标值
                     * # # # . . . .
                     * # # # . . . .
                     * # # # . . . .
                     * . . . . . . .
                     * . . . . . . .
                     * . . . . . . .
                     */
                    let pos = (j * this.oImg.width + i) * 4;
                    if (imageData[pos+3] > 100) {// 判断透明度
                        let particle = {
                            x: i,
                            y: j,
                        };
                        result.push(particle);
                    }
                }
            }
            return result;
        }
    }



    // 计算并保存坐标
    function calculate (imageData, width, height) {
        let result = [];
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                /**
                 * 计算(i, j)在数组中的R的坐标值
                 * # # # . . . .
                 * # # # . . . .
                 * # # # . . . .
                 * . . . . . . .
                 * . . . . . . .
                 * . . . . . . .
                 */
                let pos = (j * width + i) * 4;
                if (imageData[pos+3] > 100) {// 判断透明度
                    let particle = {
                        x: i,
                        y: j,
                    };
                    result.push(particle);
                }
            }
        }
        return result;
    }








}