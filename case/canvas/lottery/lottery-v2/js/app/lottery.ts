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
    // export class ImageData {
    //     public can: any;
    //     public ctx: any;
    //     constructor () {
    //         this.can = document.createElement('canvas');
    //         this.ctx = this.can.getContext('2d');
    //     }
    //     /**
    //      * @param options
    //      *      oImg: 加载好的图片对象
    //      *      width: 期望以 什么样的宽，高来显示图片
    //      *      height: 可选，填了就固定高度； 不填就是固定比列；
    //      * @param callback
    //      */
    //     public getInfo (options, callback) {
    //         // 获取图片信息
    //         // 设置canvas宽高
    //         this.can.width = options.width;
    //         this.can.height = options.height || options.width * options.oImg.naturalHeight / options.oImg.naturalWidth;
    //         // 绘制图像
    //         this.ctx.drawImage(options.oImg, 0, 0, options.oImg.naturalWidth, options.oImg.naturalHeight, 0, 0, this.can.width, this.can.height);
    //         // 获取图像的像素信息，并根据像素信息重新绘制出粒子效果轮廓图，
    //         // canvas有一个叫getImageData的接口，通过该接口可以获取到画布上指定位置的全部像素的数据
    //         let imageData = this.ctx.getImageData(0, 0, this.can.width, this.can.height);// 注意获取数据的范围
    //         // 回调函数
    //         callback && callback(imageData);
    //     }
    // }





    /**
     * 镭射线
     */
    export class Ray {
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

        render (ctx: any): void {
            let startX  = this.x + Math.cos(this.s) * this.h / 2;
            let startY  = this.y + Math.sin(this.s) * this.h / 2;
            let endX    = this.x + Math.cos(this.o) * this.h;
            let endY    = this.y + Math.sin(this.o) * this.h;
            ctx.moveTo(this.x, this.y);
            ctx.quadraticCurveTo(startX, startY, endX, endY);
        }

        update (): void {
            this.o += this.c * 2;// 乘以2 是为了 消失快点
            this.s += this.l * 2;// 乘以2 是为了 消失快点
            this.h += Math.cos(this.o) * this.d;
        }
    }



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









    export class Show {
        public config: any;
        public can: any;
        public ctx: any;
        public R: any;

        public isStart = false;
        public solid_circle_elements: any;// TODO
        public solid_main_text_elements: any;
        public user_list: any;


        constructor (options) {
            this.config = options.config || {};
            this.user_list = options.user_list || [];

            this.can = null;
            this.ctx = null;


            this.solid_circle_elements = [];


            // 执行
            let _this = this;
            // 初始化
            this._init();
            // 提示文字
            let loading_text_options = {color: '#abcdef', x: _this.can.width / 2, y: _this.can.height /2,};
            let solidText = new element.SolidText(loading_text_options);
            // 加载
            this._loadAllResource(function (loadedNumber) {
                _this.ctx.clearRect(0, 0, _this.can.width, _this.can.height);
                solidText.text = '资源加载中...' + '（' + loadedNumber + '/' + _this.config.length + '）';
                solidText.render(_this.ctx);
            }, function () {
                _this.openShow();
            })
        }

        private _init (): void {
            this.can = document.createElement('canvas');
            this.ctx = this.can.getContext('2d');
            // 设置
            let screenInfo = _screenInfo();
            this.can.width = screenInfo['width'];
            this.can.height = screenInfo['height'];
            // 添加
            document.body.appendChild(this.can);
        }

        /**
         * 加载资源
         * @param loadedFn 每加载一个
         * @param loadedAllFn 当所有资源都加载完
         */
        private _loadAllResource (loadedFn, loadedAllFn): void {
            this.R = {};// 准备一个R对象
            let loadedNumber = 0;
            let _this = this;
            // 逐一加载
            for (let i = 0, len = this.config.length; i < len; i++) {
                this.R[this.config[i].name] = new Image();// 创建一个同名的key
                this.R[this.config[i].name].src = this.config[i].url;// 请求
                this.R[this.config[i].name].onload = function () {// 监听
                    ++loadedNumber;
                    loadedFn && loadedFn(loadedNumber);
                    //判断是否已经全部加载完毕
                    if (loadedNumber === _this.config.length) {
                        loadedAllFn && loadedAllFn();// callback.call(_this);// ❤
                    }
                };
            }
        };

        public openShow (): void {
            let _this = this;
            let wantedWidth = 300;// 期望图片的宽度
            let deviation = 1;// 期望图片像素点的偏差





            let openShowImageData = _getImageData({
                oImg: this.R.tiefan,
                width: 400,
            });

            console.log(openShowImageData);



            let startX = (this.can.width - openShowImageData.width) / 2;// 图形位置的X
            let startY = (this.can.height - openShowImageData.height) / 2;// 图形位置的Y
            /**
             * 创建 镭射线
             */
            let rays = [];
            for (var i = 0; i < openShowImageData.data.length; i += 4) {
                let num     = i / 4;// 每4个值，代表一个像素
                let opacity = openShowImageData.data[i + 3];
                //
                if (opacity >= 200) {// 透明度判断
                    let x = num % openShowImageData.width + startX;
                    let y = ~~(num / openShowImageData.width) + startY;

                    if (x % 2 && y % 2) {
                        rays.push(new Ray( x, y, openShowImageData.width, openShowImageData.height));
                    }
                }
            }

            /**
             * 重新 写字的 canvas
             */
            let bufferCan = document.createElement("canvas");
            let bufferCtx = bufferCan.getContext("2d");
            bufferCan.width = openShowImageData.width;
            bufferCan.height = openShowImageData.height;



            //
            let showHeight = startY;
            //
            let rayColor1 = "#abcdef";
            let rayColor2 = "#1278de";
            let gradient = this.ctx.createRadialGradient(this.can.width / 2, this.can.height / 2, 0, this.can.width / 2, this.can.height / 2, openShowImageData.width);
            gradient.addColorStop(0, rayColor1);
            gradient.addColorStop(1, rayColor2);



            let timer = null;

            // 执行
            (function v () {
                let len = 0;
                showHeight += 6;
                showHeight = Math.min(showHeight, openShowImageData.height + startY);
                // 清空
                _this.ctx.clearRect(0, 0, _this.can.width, _this.can.height);
                // 画图
                _this.ctx.drawImage(bufferCan, 0, 0, showHeight, bufferCan.height, startX, startY, showHeight, bufferCan.height);// 画的是文字
                // 画镭射线
                _this.ctx.save();
                _this.ctx.strokeStyle = gradient;
                _this.ctx.globalAlpha = .2;// 镭射线的颜色
                _this.ctx.globalCompositeOperation = "lighter";
                _this.ctx.beginPath();
                for (let i = 0; i < rays.length; i++) {
                    if (rays[i].y < showHeight) {
                        if (rays[i].h >= 0) {
                            rays[i].render(_this.ctx);
                            rays[i].update();
                        } else {
                            ++len;
                            bufferCtx.fillStyle = '#abcdef';
                            bufferCtx.fillRect(rays[i].x - startX, rays[i].y - startY, 1, 1);
                        }
                    }
                }

                if (len >= rays.length) {
                    _this.can.addEventListener('click', function () {
                        console.log(2);
                    });
                    // 停止
                    window.cancelAnimationFrame(timer);// 没有用
                    timer = null;
                    return;
                }

                _this.ctx.stroke();
                _this.ctx.restore();
                //
                timer = window.requestAnimationFrame(v);
            }());




            // 获取logo图片的数据
            // let tiefanInfo = new ImageData();
            //
            // tiefanInfo.getInfo({
            //     oImg: this.R.tiefan,
            //     width: wantedWidth,
            // }, function (imageData) {
            //
            //
            //     // 进入开场动画
            //     let logo_particle = calculate(imageData.data, imageData.width, imageData.height);// 处理数据
            //     _this.ctx.clearRect(0, 0, _this.can.width, _this.can.height);
            //     for (let i = 0; i < logo_particle.length; i++) {
            //         let x = (_this.can.width - imageData.width) / 2 + logo_particle[i].x + _random(-deviation, deviation);
            //         let y = (_this.can.height - imageData.height)  / 2 + logo_particle[i].y + _random(-deviation, deviation) - 100;// -100 是为了高点，好看
            //
            //
            //         // TODO 优化
            //         let rayColor1 = "#f50057",
            //             rayColor2 = "#e040fb",
            //             rayColor3 = "#ffff00";
            //         let centerX = _this.can.width / 2;
            //         let centerY = _this.can.height / 2;
            //         let gradient = _this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, wantedWidth);
            //         gradient.addColorStop(0, rayColor3);
            //         gradient.addColorStop(.5, rayColor2);
            //         gradient.addColorStop(1, rayColor1);
            //         _this.ctx.fillStyle = gradient;
            //         _this.ctx.fillRect(x, y, 0.5, 0.5);
            //     }
            //
            //
            //
            //
            //
            //
            //     // 开始抽奖
            //     // window.setTimeout(function () {
            //     //     _this.can.addEventListener('click', function () {
            //     //         _this.isStart = !_this.isStart;
            //     //     });
            //     //     _this.gameRun();
            //     // }, 5000);
            //
            // })
        }


        public gameStart () {
            // +----------------------------------------------------------------------
            // | 背景（用画方型的方法清空画布）
            // +----------------------------------------------------------------------
            // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
            // this.ctx.fillRect(0, 0, this.can.width, this.can.height);
            this.ctx.clearRect(0, 0, this.can.width, this.can.height);


            // +----------------------------------------------------------------------
            // | 背景动画
            // +----------------------------------------------------------------------
            // 实心圆
            if (this.solid_circle_elements.length < 20 && Math.random() <= 0.1) {
                let options = {
                    x: _random(0, this.can.width),
                    y: _random(0, this.can.height),
                    radius: _random(6, 12),
                    opacity: _random(.3, .5),
                    color: '#fff',
                };
                let animation_options = {
                    radius_speed: _random(.08, .16),
                    opacity_speed: _random(.003, .006)
                };
                let solidCircle = new lottery.element.SolidCircle(options);
                this.solid_circle_elements.push({
                    item: solidCircle,
                    animation_options: animation_options,
                });
            }
            //
            for (let i = 0, len = this.solid_circle_elements.length; i < len; i++) {
                let item = this.solid_circle_elements[i].item;
                let animation_options = this.solid_circle_elements[i].animation_options;
                if (item.opacity <= 0) {
                    this.solid_circle_elements.splice(i, 1);
                    item = null;
                    len--;
                    i--;
                } else {
                    lottery.animation.bigOut(item, this.ctx, animation_options);
                }
            }




            // +----------------------------------------------------------------------
            // | 抽奖动画
            // +----------------------------------------------------------------------
            // if (this.isStart) {
            //     if (this.solid_main_text_elements.length < 100 && Math.random() <= .4) {
            //         let n = _random(0, this.user_list.length - 1);
            //         let index = Math.floor(n);
            //         let text = this.user_list[index];
            //         let options = {
            //             x: this.can.width / 2,
            //             y: this.can.height / 2,
            //             opacity: 1,
            //             fontSize: 80,
            //             color: `hsl(200, 100%, ` + _random(40, 70) + `%)`,
            //             text: text,
            //         };
            //
            //         let animation_options = {
            //             isText: true,
            //             x_speed: _random(-20, 20),
            //             y_speed: _random(-10, 10),
            //             fontSize_speed: _random(2, 4),
            //             opacity_speed: _random(.05, .1)
            //         };
            //
            //         let solidText = new lottery.element.SolidText(options);
            //         this.solid_main_text_elements.push({
            //             item: solidText,
            //             animation_options: animation_options,
            //         });
            //     }
            //     //
            //     for (let i = 0,len = this.solid_main_text_elements.length; i < len; i++) {
            //         let item = this.solid_main_text_elements[i].item;
            //         let animation_options = this.solid_main_text_elements[i].animation_options;
            //         if (item.opacity <= 0) {
            //             this.solid_main_text_elements.splice(i, 1);
            //             item = null;
            //             len--;
            //             i--;
            //         } else {
            //             lottery.animation.moveSmallOut(item, this.ctx, animation_options);
            //         }
            //     }
            // } else {
            //     if (this.solid_main_text_elements.length >= 1) {
            //         console.log('length' + this.solid_main_text_elements.length);
            //         let nowName = this.solid_main_text_elements[this.solid_main_text_elements.length - 1].item.text;
            //         console.log(nowName);
            //
            //         // 删除当前人名
            //         let index = this.user_list.indexOf(nowName);
            //         console.log(index);
            //         this.user_list.splice(index, 1);
            //
            //         this.solid_main_text_elements = [];
            //
            //     }
            // }




        }


        public gameRun () {
            let _this = this;

            if (!true) {
                (function v () {
                    console.log(1);
                    _this.gameStart();
                    window.requestAnimationFrame(v);
                }());
            } else {
                window.setInterval(function () {
                    console.log(2);
                    _this.gameStart();
                }, 1000 / 60);
            }


        }

    }






}