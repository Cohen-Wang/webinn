// +----------------------------------------------------------------------
// | file name: Lottery
// +----------------------------------------------------------------------
// | Copyright (c) 2019
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: cohen_wang <615940742@qq.com>
// +----------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var lottery;
(function (lottery) {
    var _w = window;
    var _b = document.body; // 返回html dom中的body节点 即<body>
    var _d = document.documentElement; // 返回html dom中的root 节点 即<html>
    // screen helper
    var _screenInfo = function () {
        var width = Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0);
        var height = Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0);
        var scrollx = Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - (_d.clientLeft || 0);
        var scrolly = Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - (_d.clientTop || 0);
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
    var random = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.random() * (max - min) + min;
    };
    /**
     * 并不是所有设备的绘制时间间隔是1000/60 ms, 以及上面并木有cancel相关方法，所以，就有下面这份更全面的兼容方法：
     */
    (function () {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
                window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    }());
    // +----------------------------------------------------------------------
    // | canvas工厂函数：创建一个canvas节点，且添加到参数节点
    // +----------------------------------------------------------------------
    var CanvasFactory = /** @class */ (function () {
        function CanvasFactory(dom) {
            if (dom === void 0) { dom = document.body; }
            this._dom = null; // TODO 这里应该是什么类型？？
            this._canvas = null;
            this._context = null;
            this._dom = dom; // 赋值
            this._init(); // 初始化
            // 如果canvas的容器不是div，而是body。那么就要保证与body同时改变的大小。
            var _this = this;
            if (dom === document.body) {
                window.addEventListener('resize', function () {
                    _this._windowResize();
                });
            }
        }
        // 创建canvas
        CanvasFactory.prototype._init = function () {
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
                var _domInfo = this._getDomInfo();
                this._canvas.width = _domInfo['width'];
                this._canvas.height = _domInfo['height'];
                // this._canvas.style["z-index"] = "-1";
                //this._canvas.style["background-color"] = "#ccc";
                this._canvas.id = "bgCanvas";
                this._context = this._canvas.getContext('2d');
                this._dom.appendChild(this._canvas);
            }
            catch (e) {
                console.warn("Canvas Context Error: " + e.toString());
                return;
            }
        };
        // 获取包装canvas容器的父节点数据，包括宽高
        CanvasFactory.prototype._getDomInfo = function () {
            var width = this._dom.offsetWidth;
            var height = this._dom.offsetHeight;
            return {
                width: width,
                height: height,
            };
        };
        // 随窗口变化而变换
        CanvasFactory.prototype._windowResize = function () {
            var _window = _screenInfo();
            var width = _window['width'];
            var height = _window['height'];
            this._canvas.width = width;
            this._canvas.height = height;
        };
        // 提供外部获取canvas元素
        CanvasFactory.prototype.getCanvas = function () {
            return this._canvas;
        };
        // 提供外部使用canvas的上下文
        CanvasFactory.prototype.getContext = function () {
            return this._context;
        };
        return CanvasFactory;
    }());
    lottery.CanvasFactory = CanvasFactory;
    // +----------------------------------------------------------------------
    // | Element 元素: 所有需要渲染的元素
    // +----------------------------------------------------------------------
    // | render()
    // +----------------------------------------------------------------------
    var element;
    (function (element) {
        // +----------------------------------------------------------------------
        // | 元素：圆
        // +----------------------------------------------------------------------
        var Circle = /** @class */ (function () {
            function Circle(options) {
                this.init(options);
            }
            Circle.prototype.init = function (options) {
                this.x = options.x || 100;
                this.y = options.y || 100;
                this.radius = options.radius || 10;
                this.opacity = options.opacity || 1;
                this.color = options.color || '#ccc';
            };
            return Circle;
        }());
        // 实心圆
        var SolidCircle = /** @class */ (function (_super) {
            __extends(SolidCircle, _super);
            function SolidCircle(options) {
                return _super.call(this, options) || this;
            }
            SolidCircle.prototype.render = function (ctx) {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1;
            };
            return SolidCircle;
        }(Circle));
        element.SolidCircle = SolidCircle;
        // 空心圆
        var HollowCircle = /** @class */ (function (_super) {
            __extends(HollowCircle, _super);
            function HollowCircle(options) {
                var _this_1 = _super.call(this, options) || this;
                _this_1.lineWidth = options.lineWidth || 1;
                return _this_1;
            }
            HollowCircle.prototype.render = function (ctx) {
                ctx.strokeStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
                ctx.closePath();
                ctx.stroke();
                ctx.globalAlpha = 1;
            };
            return HollowCircle;
        }(Circle));
        element.HollowCircle = HollowCircle;
        // +----------------------------------------------------------------------
        // | 元素：方形
        // +----------------------------------------------------------------------
        var Rect = /** @class */ (function () {
            function Rect(options) {
                this.init(options);
            }
            Rect.prototype.init = function (options) {
                this.x = options.x || 100;
                this.y = options.y || 100;
                this.width = options.width || 1;
                this.height = options.height || 1;
                this.opacity = options.opacity || 1;
                this.color = options.color || '#ccc';
            };
            return Rect;
        }());
        // 实心方形
        var SolidRect = /** @class */ (function (_super) {
            __extends(SolidRect, _super);
            function SolidRect(options) {
                return _super.call(this, options) || this;
            }
            SolidRect.prototype.render = function (ctx) {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
                ctx.closePath();
                ctx.restore();
                ctx.globalAlpha = 1;
            };
            return SolidRect;
        }(Rect));
        element.SolidRect = SolidRect;
        // 空心方形
        var HollowRect = /** @class */ (function (_super) {
            __extends(HollowRect, _super);
            function HollowRect(options) {
                var _this_1 = _super.call(this, options) || this;
                _this_1.lineWidth = options.lineWidth || 1;
                return _this_1;
            }
            HollowRect.prototype.render = function (ctx) {
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
            };
            return HollowRect;
        }(Rect));
        element.HollowRect = HollowRect;
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
        var Star = /** @class */ (function () {
            function Star(options) {
                this.init(options);
            }
            Star.prototype.init = function (options) {
                this.x = options.x || 100;
                this.y = options.y || 100;
                this.radius = options.radius || 10;
                this.color = options.color || '#ccc';
                this.opacity = options.opacity || 1;
            };
            return Star;
        }());
        // 实体星星
        var SolidStar = /** @class */ (function (_super) {
            __extends(SolidStar, _super);
            function SolidStar(options) {
                return _super.call(this, options) || this;
            }
            SolidStar.prototype.render = function (ctx) {
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
                ctx.globalAlpha = 1; // 恢复
            };
            return SolidStar;
        }(Star));
        element.SolidStar = SolidStar;
        // 空心星星
        var HollowStar = /** @class */ (function (_super) {
            __extends(HollowStar, _super);
            function HollowStar(options) {
                var _this_1 = _super.call(this, options) || this;
                _this_1.lineWidth = options.lineWidth || 1;
                return _this_1;
            }
            HollowStar.prototype.render = function (ctx) {
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
                ctx.globalAlpha = 1; // 恢复
            };
            return HollowStar;
        }(Star));
        element.HollowStar = HollowStar;
        // +----------------------------------------------------------------------
        // | 元素：文字
        // +----------------------------------------------------------------------
        var Text = /** @class */ (function () {
            function Text(options) {
                this.init(options);
            }
            Text.prototype.init = function (options) {
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
            };
            return Text;
        }());
        // 实体字
        var SolidText = /** @class */ (function (_super) {
            __extends(SolidText, _super);
            function SolidText(options) {
                return _super.call(this, options) || this;
            }
            SolidText.prototype.render = function (ctx) {
                ctx.save();
                ctx.beginPath();
                ctx.font = this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
                ctx.fillStyle = this.color; // 设置颜色
                ctx.globalAlpha = this.opacity;
                ctx.textAlign = "center"; // 设置水平对齐方式
                ctx.textBaseline = "middle"; // 设置垂直对齐方式
                ctx.fillText(this.text, this.x, this.y); // 绘制文字（参数：要写的字，x坐标，y坐标）
                ctx.closePath();
                ctx.restore();
            };
            return SolidText;
        }(Text));
        element.SolidText = SolidText;
        // 空心字
        var HollowText = /** @class */ (function (_super) {
            __extends(HollowText, _super);
            function HollowText(options) {
                var _this_1 = _super.call(this, options) || this;
                _this_1.lineWidth = options.lineWidth || 1;
                return _this_1;
            }
            HollowText.prototype.render = function (ctx) {
                ctx.save();
                ctx.beginPath();
                ctx.font = this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
                ctx.strokeStyle = this.color; // 设置颜色
                ctx.globalAlpha = this.opacity;
                ctx.lineWidth = this.lineWidth;
                ctx.textAlign = "center"; // 设置水平对齐方式
                ctx.textBaseline = "middle"; // 设置垂直对齐方式
                ctx.strokeText(this.text, this.x, this.y); // 绘制文字（参数：要写的字，x坐标，y坐标）
                ctx.closePath();
                ctx.restore();
            };
            return HollowText;
        }(Text));
        element.HollowText = HollowText;
    })(element = lottery.element || (lottery.element = {})); /** namespace element **/
    // +----------------------------------------------------------------------
    // | Animation 动画: 所有需要渲染的元素
    // +----------------------------------------------------------------------
    // | render()
    // +----------------------------------------------------------------------
    var animation;
    (function (animation) {
        function bigOut(element, ctx, options) {
            element.radius += options.radius_speed || .001;
            element.opacity -= options.opacity_speed || .001;
            // TODO ???????? 不完美
            if (element.opacity >= 0) {
                element.render(ctx);
            }
        }
        animation.bigOut = bigOut;
        function moveSmallOut(element, ctx, options) {
            var isText = options.isText || false;
            if (isText) {
                element.fontSize -= options.fontSize_speed || 1;
            }
            else {
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
        animation.moveSmallOut = moveSmallOut;
    })(animation = lottery.animation || (lottery.animation = {})); /** namespace Animation **/
    // +----------------------------------------------------------------------
    // | ImageData: 获取图片信息
    // +----------------------------------------------------------------------
    var ImageData = /** @class */ (function () {
        function ImageData() {
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
        ImageData.prototype.getInfo = function (options, callback) {
            var _this = this;
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
                var imageData = _this.ctx.getImageData(0, 0, _this.oImg.naturalWidth, _this.oImg.naturalHeight); // 注意获取数据的范围
                // 回调函数
                callback && callback(imageData);
            };
        };
        // 计算并保存坐标
        ImageData.prototype.calculate = function (imageData) {
            var result = [];
            for (var i = 0; i < this.oImg.width; i++) {
                for (var j = 0; j < this.oImg.height; j++) {
                    /**
                     * 计算(i, j)在数组中的R的坐标值
                     * # # # . . . .
                     * # # # . . . .
                     * # # # . . . .
                     * . . . . . . .
                     * . . . . . . .
                     * . . . . . . .
                     */
                    var pos = (j * this.oImg.width + i) * 4;
                    if (imageData[pos + 3] > 100) { // 判断透明度
                        var particle = {
                            x: i,
                            y: j,
                        };
                        result.push(particle);
                    }
                }
            }
            return result;
        };
        return ImageData;
    }());
    lottery.ImageData = ImageData;
    // 计算并保存坐标
    function calculate(imageData, width, height) {
        var result = [];
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                /**
                 * 计算(i, j)在数组中的R的坐标值
                 * # # # . . . .
                 * # # # . . . .
                 * # # # . . . .
                 * . . . . . . .
                 * . . . . . . .
                 * . . . . . . .
                 */
                var pos = (j * width + i) * 4;
                if (imageData[pos + 3] > 100) { // 判断透明度
                    var particle = {
                        x: i,
                        y: j,
                    };
                    result.push(particle);
                }
            }
        }
        return result;
    }
})(lottery || (lottery = {}));
