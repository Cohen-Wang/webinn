/**
 * +----------------------------------------------------------------------
 * | file name: Lottery
 * +----------------------------------------------------------------------
 * | Copyright (c) 2019
 * +----------------------------------------------------------------------
 * | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * +----------------------------------------------------------------------
 * | Author: cohen_wang <615940742@qq.com>
 * +----------------------------------------------------------------------
 */



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

/**
 * 问：开场动画，镭射线完毕后，是否删除
 * 答：
 */

/**
 * 问：缎带的动态数据，本身不需要，但是为了以后要动，提前写的数据，看起来好奇怪啊！
 * 答：Object.assign()
 */

/**
 * 问：我的场景单例模式，是否合理？ 是应该三个canvas相互切换的思路对，还是单个canvas切换场景的思路对？
 * 答：
 */

namespace tiefan {

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

    let _random = function (min: number = 0, max: number = 1): number {
        return Math.random() * (max - min) + min;
    };

    /**
     * 由于typescript的 Math.sign 要报错，看到烦的很，所以写这个函数代替
     */
    let _sign = function (n: number): any {
        if (n > 0) {
            return 1
        } else if (n === 0) {
            return 0;
        } else if (n === -0) {
            return -0;
        } else if (n < 0) {
            return -1;
        } else {
            return NaN;
        }
    };

    // 两点之间距离公式：Math.sqrt( x² + y²)
    function _getDistanceBetweenTwoPoints (startPoint, endPoint) {
        let distanceX = endPoint.x - startPoint.x;
        let distanceY = endPoint.y - startPoint.y;
        let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        //console.log('distance:' + distance);
        return distance;
    }


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
    class CanvasFactory {
        private _dom: any = null;// TODO 这里应该是什么类型？？
        private _canvas: any = null;
        private _context: any = null;

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

    class SingletonCanvas {
        private static instance: CanvasFactory;
        // 不允许实例化
        private constructor () {}
        // 单例模式
        static getInstance (): CanvasFactory {
            if (!SingletonCanvas.instance) {
                SingletonCanvas.instance = new CanvasFactory()
            }
            return this.instance;
        }
    }

    /**
     * +----------------------------------------------------------------------
     * | Element 元素: 所有需要渲染的元素
     * +----------------------------------------------------------------------
     * | render()
     * +----------------------------------------------------------------------
     */
    export namespace element {
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
        // | 元素：线
        // +----------------------------------------------------------------------
        export class Line {
            public startPoint: Point;
            public endPoint: Point;
            public color: string;
            public opacity: number;

            constructor (startPoint, endPoint, color, opacity) {
                this.startPoint = startPoint;
                this.endPoint = endPoint;
                this.color = color || '#f00';
                this.color = opacity || 1;
            }

            public render (ctx: any): void {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.moveTo(this.startPoint.x, this.startPoint.y);
                ctx.lineTo(this.endPoint.x, this.endPoint.y);
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1;
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

        // +----------------------------------------------------------------------
        // | 元素：缎带
        // +----------------------------------------------------------------------
        export class Ribbon implements Element {
            public startPoint: Point;
            public controlPoint: Point;
            public endPoint: Point;
            public color: string;
            public lineWidth: number;
            public globalAlpha: number;
            // 动态数据
            public speed: number;// 左右摇摆的速度
            public range: number;// 左右摇摆的范围

            constructor (options) {
                this.startPoint = options.startPoint;
                this.controlPoint = options.controlPoint;
                this.endPoint = options.endPoint;
                this.color = options.color || '#ccc';
                this.lineWidth = options.lineWidth || 14;
                this.globalAlpha = options.globalAlpha || 0.8;
                // 动态数据
                this.speed = options.speed || 10;// 左右摇摆的速度
                this.range = options.range || 40;// 左右摇摆的范围
            }

            public render (ctx): void {
                ctx.save();
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.lineWidth;
                ctx.globalAlpha = this.globalAlpha;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                //ctx.beginPath();// ❤：注意：这里反而不能给closePath()，不然会闭合
                ctx.moveTo(this.startPoint.x, this.startPoint.y);
                ctx.quadraticCurveTo(this.controlPoint.x, this.controlPoint.y, this.endPoint.x, this.endPoint.y);
                //ctx.closePath();// ❤：注意：这里反而不能给closePath()，不然会闭合
                ctx.stroke();
                ctx.restore();
            }
        }

        // +----------------------------------------------------------------------
        // | 元素：灯笼
        // +----------------------------------------------------------------------
        export class Lantern implements Element {
            public lantern: any;// 包含属性 oImg，x，y
            public ribbon: any;
            //
            public centerPoint: any;
            //
            public beta: number;
            //
            public ribbons: Array<Ribbon>;// 缎带实例的容器

            constructor (options) {
                // 灯笼
                this.lantern = {};// ❤：注意这一步，一定要初始化
                this.lantern.oImg = options.lantern.oImg;
                this.lantern.x = options.lantern.x || 0;
                this.lantern.y = options.lantern.y || 0;
                this.lantern.width = options.lantern.width || 100;
                // this.lantern.height = options.lantern.height || 100;// 不能给默认值
                this.lantern.angle = options.lantern.angle || 0;
                this.lantern.angleSpeed = options.lantern.angleSpeed || 10;

                // 缎带
                this.ribbon = {};// ❤：注意这一步，一定要初始化
                this.ribbon.num = options.ribbon.num || 2;
                this.ribbon.distance = options.ribbon.distance || 200;
                this.ribbon.color = options.ribbon.color || '#ccc';
                this.ribbon.lineWidth = options.ribbon.lineWidth || 1;
                this.ribbon.globalAlpha = options.ribbon.globalAlpha || 1;
                this.ribbon.bornRange = options.ribbon.bornRange || 10;
                this.ribbon.speed = options.ribbon.speed || 10;
                this.ribbon.range = options.ribbon.range || 10;
                //
                this.beta = 0;
                //
                this.ribbons = [];
                //
                this.initRibbon();
            }

            // 初始化缎带
            public initRibbon (): void {
                for (let i = 0; i < this.ribbon.num; i++) {
                    let distance = this.lantern.height ? this.lantern.height : this.lantern.width * this.lantern.oImg.naturalHeight / this.lantern.oImg.naturalWidth;
                    let startX = this.lantern.x + Math.cos(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
                    let startY = this.lantern.y + Math.sin(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
                    let controlX = startX;
                    let controlY = startY + this.ribbon.distance / 3;
                    let endX = startX;// 结束点X坐标（变动）
                    let endY = startY + _random(this.ribbon.distance - 20, this.ribbon.distance + 20);
                    let speed = _random(0.02, 0.03);
                    let range = _random(20, 30);
                    let options = {
                        startPoint: new Point(startX, startY),
                        controlPoint: new Point(controlX, controlY),
                        endPoint: new Point(endX, endY),
                        color: this.ribbon.color,
                        lineWidth: this.ribbon.lineWidth,
                        globalAlpha: this.ribbon.globalAlpha,
                        speed: speed,
                        range: range,
                    };
                    this.ribbons.push(new element.Ribbon(options));
                }
            }
            // 画灯笼
            public drawLantern (ctx: any): void {
                let oImg = this.lantern.oImg;
                let imgWidth = this.lantern.oImg.naturalWidth;
                let imgHeight = this.lantern.oImg.naturalHeight;
                //
                let x = this.lantern.x;
                let y = this.lantern.y;
                let width = this.lantern.width;
                let height = this.lantern.height = width * imgHeight / imgWidth;
                // TODO 分两个函数
                ctx.save();
                ctx.beginPath();
                ctx.translate(x, y);
                ctx.rotate(this.lantern.angle * Math.PI / 180);
                // 测试效果
                // ctx.fillStyle = 'rgba(255, 255, 0, 0.2)';
                // ctx.fillRect(0, 0, 200, 200);
                ctx.drawImage(oImg, 0, 0, imgWidth, imgHeight, -width / 2, 0, width, height);
                // 测试效果
                // ctx.drawImage(oImg, 0, 0, imgWidth, imgHeight, 0, 0, width, height);
                // ctx.fillStyle = '#f00';
                // ctx.fillRect(0, 0, 20, 20);
                ctx.closePath();
                ctx.restore();
                ctx.translate(0, 0);
                ctx.rotate(0);
            }
            // 画缎带
            public drawRibbon (ctx: any): void {
                this.ribbons.forEach(function (item) {
                    item.render(ctx);
                })
            }
            public render (ctx: any): void {
                this.drawLantern(ctx);
                this.drawRibbon(ctx);
            }
            public update (): void {
                // 图片变动
                if (this.lantern.angle <= -15 || this.lantern.angle >= 15) {
                    this.lantern.angleSpeed = -this.lantern.angleSpeed;
                }
                this.lantern.angle += this.lantern.angleSpeed;

                // 缎带变动
                this.beta++;// Math.sin的应用
                for (let i = 0, len = this.ribbons.length; i < len; i++) {
                    let distance = this.lantern.height ? this.lantern.height : this.lantern.width * this.lantern.oImg.naturalHeight / this.lantern.oImg.naturalWidth;

                    // 改变所有点
                    this.ribbons[i].startPoint.x = this.lantern.x + Math.cos(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
                    this.ribbons[i].startPoint.y = this.lantern.y + Math.sin(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
                    //
                    this.ribbons[i].controlPoint.x = this.ribbons[i].startPoint.x;
                    this.ribbons[i].endPoint.x = this.ribbons[i].startPoint.x;

                    // 再改变结束点
                    this.ribbons[i].endPoint.x = this.ribbons[i].startPoint.x + Math.sin(this.beta * this.ribbons[i].speed) * this.ribbons[i].range;
                }
            }
        }

        // +----------------------------------------------------------------------
        // | 元素：镭射线
        // +----------------------------------------------------------------------
        export class Ray implements Element {
            public x: number;
            public y: number;
            public width: number;
            public height: number;
            //
            public o: number;
            public s: number;
            public h: number;
            public l: number;
            public c: number;
            public d: number;

            constructor (x: number, y: number, width: number, height: number) {
                this.x = x || 0;
                this.y = y || 0;
                this.width = width || 100;
                this.height = height || 100;

                // 使用值
                this.o = Math.PI / 2 * (Math.random() * this.x - this.height / 2) / this.height;
                if (this.o === 0) {
                    this.o = (Math.random() - 0.5) * Math.PI / 2;// 恢复到 -90 ~ +90
                }

                this.s = 2 * Math.PI * (Math.random() * this.y - this.width / 2) / this.width;
                if (this.s === 0) {
                    this.s = (Math.random() - 0.5) * Math.PI
                }
                this.h = 0;

                // 变化值
                this.l = 0.02 * _sign(this.s);// 返回五种值：1, -1, 0, -0, NaN
                this.c = 0.02 * _sign(this.o);// 返回五种值：1, -1, 0, -0, NaN
                this.c += _random(-0.005, 0.005);
                this.d = _random(2, 4);// 线长
            }

            public render (ctx: any): void {
                let startX  = this.x + Math.cos(this.s) * this.h / 2;
                let startY  = this.y + Math.sin(this.s) * this.h / 2;
                let endX    = this.x + Math.cos(this.o) * this.h;
                let endY    = this.y + Math.sin(this.o) * this.h;
                ctx.moveTo(this.x, this.y);
                ctx.quadraticCurveTo(startX, startY, endX, endY);
            }

            public update (): void {
                this.o += this.c * 2;// 乘以2 是为了 消失快点
                this.s += this.l * 2;// 乘以2 是为了 消失快点
                this.h += Math.cos(this.o) * this.d;
            }
        }
    }/** namespace element **/


    /**
     * +----------------------------------------------------------------------
     * | Animation 动画: 所有需要渲染的元素
     * +----------------------------------------------------------------------
     * | render()
     * +----------------------------------------------------------------------
     */
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


    /**
     * 获取一张图片的信息
     * @param options
     *      oImg
     *      width
     *      height
     */
    function _getImageData (options) {
        let oImg = options.oImg;
        let width = options.width || 400;
        let height = options.height;// 没有默认值
        // 创建canvas，虚拟的，不用显示的
        let can = document.createElement('canvas');
        let ctx = can.getContext('2d');
        can.width = width;
        can.height = height || can.width * oImg.naturalHeight / oImg.naturalWidth;
        //
        ctx.drawImage(oImg, 0, 0, oImg.naturalWidth, oImg.naturalHeight, 0, 0, can.width, can.height);
        // 获取结果
        return ctx.getImageData(0, 0, can.width, can.height);
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

    /**
     * +----------------------------------------------------------------------
     * | 场景管理
     * +----------------------------------------------------------------------
     */
    export class SenceController {
        static resource: any = {};
        static loadAllResource (config: any, loadedFn: Function, loadedAllFn: Function): void {
            let loadedNumber: number = 0;
            // 逐一加载
            for (let i = 0, len = config.length; i < len; i++) {
                SenceController.resource[config[i].name] = new Image();// 创建一个同名的key
                SenceController.resource[config[i].name].src = config[i].url;// 请求
                SenceController.resource[config[i].name].onload = function () {// 监听
                    ++loadedNumber;
                    loadedFn && loadedFn(loadedNumber);
                    //判断是否已经全部加载完毕
                    if (loadedNumber === config.length) {
                        loadedAllFn && loadedAllFn();// callback.call(_this);// ❤
                    }
                };
            }
        };

        // private _bindEvent (instance) {
        //
        //     instance.can.addEventListener('click', function () {
        //         this.lottery.show();
        //     })
        // }
    }

    /**
     * +----------------------------------------------------------------------
     * | 场景
     * +----------------------------------------------------------------------
     * | 所有单独的场景。包括 加载场景； 开场动画场景； 抽奖场景
     * +----------------------------------------------------------------------
     */
    export namespace scene {
        // +----------------------------------------------------------------------
        // | 场景抽象类
        // +----------------------------------------------------------------------
        abstract class Scene {
            protected can: any;
            protected ctx: any;
            protected canRect: any;

            protected constructor () {
                let canvas = SingletonCanvas.getInstance();
                this.can = canvas.getCanvas();
                this.ctx = canvas.getContext();
                this.canRect = this.can.getBoundingClientRect();
            }
        }

        /**
         * +----------------------------------------------------------------------
         * | 加载场景
         * +----------------------------------------------------------------------
         */
        export namespace load {
            // +----------------------------------------------------------------------
            // | 文字加载
            // +----------------------------------------------------------------------
            export class Text extends Scene {
                public text: any;
                constructor () {
                    super ();
                    let options = {
                        x: this.can.width / 2,
                        y: this.can.height / 2,
                        color: '#abcdef',
                    };
                    this.text = new element.SolidText(options);
                }
                public show (text) {
                    this.ctx.fillStyle = '##0f0f0f';
                    this.ctx.fillRect(0, 0, this.can.width, this.can.height);
                    this.text.text = text;
                    this.text.render(this.ctx);
                }
            }
        }/** namespace load **/

        /**
         * +----------------------------------------------------------------------
         * | 过场场景
         * +----------------------------------------------------------------------
         */
        export namespace cut {
            // +----------------------------------------------------------------------
            // | 镭射线动画
            // +----------------------------------------------------------------------
            export class RayLogo extends Scene {
                public oImg: any = null;
                public imageData: any = [];
                public virtualCan: any = null;
                public virtualCtx: any = null;
                public startX: number = 0;
                public startY: number = 0;
                public gradient: any;
                public rays: Array<element.Ray> = [];
                public showHeight: number;
                public timer: any = null;

                constructor (oImg: any) {
                    super();
                    this.oImg = oImg;
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
                                this.rays.push(new element.Ray(x, y, this.imageData.width, this.imageData.height));
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
                    this.ctx.clearRect(0, 0, this.can.width, this.can.height);
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

                public show (): void {
                    let _this = this;
                    this.timer = window.setInterval(function () {
                        let flag = _this.render();
                        if (!flag) {
                            console.log('完成了', _this.timer);
                            window.clearInterval(_this.timer);
                            // 通知观察者
                            return;
                        }
                        _this.update();
                    }, 1000 / 60);
                }

                // public canMouseMove (event): void {
                //     let x = event.clientX - this.canRect.left;
                //     let y = event.clientY - this.canRect.top;
                //     //
                //     if (this.isHover(x, y, 255)) {
                //         this.can.style.cursor = 'pointer';
                //     } else {
                //         this.can.style.cursor = 'auto';
                //     }
                // }
                //
                // // 判断当前鼠标所在点的canvas透明度
                // public isHover (x: number, y: number, alpha: number): boolean {
                //     let imageData = this.ctx.getImageData(x, y, 1, 1);
                //     return imageData.data[3] >= alpha;
                // }
            }

            // +----------------------------------------------------------------------
            // | 新年抽奖
            // +----------------------------------------------------------------------
            export class NewYear extends Scene {
                public backgroundImg: any;
                public lanternImg: any;
                public num: number;
                public lanterns: Array<element.Lantern>;// 灯笼实例容器

                constructor (options: any) {
                    super ();
                    this.backgroundImg = options.backgroundImg;
                    this.lanternImg = options.lanternImg;
                    this.num = options.num || 80;
                    this.lanterns = [];
                    this._init();
                }

                private _init (): void {
                    this._setBackground();
                    this.createLanterns();
                }

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
                        this.lanterns.push(new element.Lantern(options));
                    }
                }

                private _setBackground () {
                    this.ctx.drawImage(this.backgroundImg, 0, 0, this.backgroundImg.naturalWidth, this.backgroundImg.naturalHeight, 0, 0, this.can.width, this.can.height);
                }

                public draw (ctx: any) {
                    for (let i = 0, len = this.lanterns.length; i < len; i++) {
                        this.lanterns[i].update();
                        this.lanterns[i].render(ctx);
                    }
                }

                public show () {
                    let _this = this;
                    (function v () {
                        //
                        //_this.ctx.clearRect(0, 0, _this.can.width, _this.can.height);
                        //
                        _this._setBackground();
                        //
                        _this.draw(_this.ctx);

                        window.requestAnimationFrame(v);
                    } ())
                }
            }/** class NewYear **/


        }/** namespace cut **/

        /**
         * +----------------------------------------------------------------------
         * | 抽奖场景
         * +----------------------------------------------------------------------
         */
        export namespace lottery {
            class Lottery {
                constructor () {

                }

                public gameStart () {

                }
                public gameRun () {
                    let _this = this;


                    (function v () {
                        console.log(1);
                        _this.gameStart();
                        window.requestAnimationFrame(v);
                    }());
                }
            }
        }/** namespace lottery **/
    }/** namespace scene **/
}/** namespace tiefan **/