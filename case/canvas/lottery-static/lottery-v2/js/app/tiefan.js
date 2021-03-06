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
var tiefan;
(function (tiefan) {
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
    var _random = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.random() * (max - min) + min;
    };
    /**
     * 由于typescript的 Math.sign 要报错，看到烦的很，所以写这个函数代替
     */
    var _sign = function (n) {
        if (n > 0) {
            return 1;
        }
        else if (n === 0) {
            return 0;
        }
        else if (n === -0) {
            return -0;
        }
        else if (n < 0) {
            return -1;
        }
        else {
            return NaN;
        }
    };
    // 两点之间距离公式：Math.sqrt( x² + y²)
    function _getDistanceBetweenTwoPoints(startPoint, endPoint) {
        var distanceX = endPoint.x - startPoint.x;
        var distanceY = endPoint.y - startPoint.y;
        var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        //console.log('distance:' + distance);
        return distance;
    }
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
    var SingletonCanvas = /** @class */ (function () {
        // 不允许实例化
        function SingletonCanvas() {
        }
        // 单例模式
        SingletonCanvas.getInstance = function () {
            if (!SingletonCanvas.instance) {
                SingletonCanvas.instance = new CanvasFactory();
            }
            return this.instance;
        };
        return SingletonCanvas;
    }());
    /**
     * +----------------------------------------------------------------------
     * | Element 元素: 所有需要渲染的元素
     * +----------------------------------------------------------------------
     * | render()
     * +----------------------------------------------------------------------
     */
    var element;
    (function (element) {
        // +----------------------------------------------------------------------
        // | 元素：点
        // +----------------------------------------------------------------------
        var Point = /** @class */ (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            return Point;
        }());
        element.Point = Point;
        // +----------------------------------------------------------------------
        // | 元素：线
        // +----------------------------------------------------------------------
        var Line = /** @class */ (function () {
            function Line(startPoint, endPoint, color, opacity) {
                this.startPoint = startPoint;
                this.endPoint = endPoint;
                this.color = color || '#f00';
                this.color = opacity || 1;
            }
            Line.prototype.render = function (ctx) {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.moveTo(this.startPoint.x, this.startPoint.y);
                ctx.lineTo(this.endPoint.x, this.endPoint.y);
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1;
            };
            return Line;
        }());
        element.Line = Line;
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
        // +----------------------------------------------------------------------
        // | 元素：缎带
        // +----------------------------------------------------------------------
        var Ribbon = /** @class */ (function () {
            function Ribbon(options) {
                this.startPoint = options.startPoint;
                this.controlPoint = options.controlPoint;
                this.endPoint = options.endPoint;
                this.color = options.color || '#ccc';
                this.lineWidth = options.lineWidth || 14;
                this.globalAlpha = options.globalAlpha || 0.8;
                // 动态数据
                this.speed = options.speed || 10; // 左右摇摆的速度
                this.range = options.range || 40; // 左右摇摆的范围
            }
            Ribbon.prototype.render = function (ctx) {
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
            };
            return Ribbon;
        }());
        element.Ribbon = Ribbon;
        // +----------------------------------------------------------------------
        // | 元素：灯笼
        // +----------------------------------------------------------------------
        var Lantern = /** @class */ (function () {
            function Lantern(options) {
                // 灯笼
                this.lantern = {}; // ❤：注意这一步，一定要初始化
                this.lantern.oImg = options.lantern.oImg;
                this.lantern.x = options.lantern.x || 0;
                this.lantern.y = options.lantern.y || 0;
                this.lantern.width = options.lantern.width || 100;
                // this.lantern.height = options.lantern.height || 100;// 不能给默认值
                this.lantern.angle = options.lantern.angle || 0;
                this.lantern.angleSpeed = options.lantern.angleSpeed || 10;
                // 缎带
                this.ribbon = {}; // ❤：注意这一步，一定要初始化
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
            Lantern.prototype.initRibbon = function () {
                for (var i = 0; i < this.ribbon.num; i++) {
                    var distance = this.lantern.height ? this.lantern.height : this.lantern.width * this.lantern.oImg.naturalHeight / this.lantern.oImg.naturalWidth;
                    var startX = this.lantern.x + Math.cos(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
                    var startY = this.lantern.y + Math.sin(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
                    var controlX = startX;
                    var controlY = startY + this.ribbon.distance / 3;
                    var endX = startX; // 结束点X坐标（变动）
                    var endY = startY + _random(this.ribbon.distance - 20, this.ribbon.distance + 20);
                    var speed = _random(0.02, 0.03);
                    var range = _random(20, 30);
                    var options = {
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
            };
            // 画灯笼
            Lantern.prototype.drawLantern = function (ctx) {
                var oImg = this.lantern.oImg;
                var imgWidth = this.lantern.oImg.naturalWidth;
                var imgHeight = this.lantern.oImg.naturalHeight;
                //
                var x = this.lantern.x;
                var y = this.lantern.y;
                var width = this.lantern.width;
                var height = this.lantern.height = width * imgHeight / imgWidth;
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
            };
            // 画缎带
            Lantern.prototype.drawRibbon = function (ctx) {
                this.ribbons.forEach(function (item) {
                    item.render(ctx);
                });
            };
            Lantern.prototype.render = function (ctx) {
                this.drawLantern(ctx);
                this.drawRibbon(ctx);
            };
            Lantern.prototype.update = function () {
                // 图片变动
                if (this.lantern.angle <= -15 || this.lantern.angle >= 15) {
                    this.lantern.angleSpeed = -this.lantern.angleSpeed;
                }
                this.lantern.angle += this.lantern.angleSpeed;
                // 缎带变动
                this.beta++; // Math.sin的应用
                for (var i = 0, len = this.ribbons.length; i < len; i++) {
                    var distance = this.lantern.height ? this.lantern.height : this.lantern.width * this.lantern.oImg.naturalHeight / this.lantern.oImg.naturalWidth;
                    // 改变所有点
                    this.ribbons[i].startPoint.x = this.lantern.x + Math.cos(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
                    this.ribbons[i].startPoint.y = this.lantern.y + Math.sin(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
                    //
                    this.ribbons[i].controlPoint.x = this.ribbons[i].startPoint.x;
                    this.ribbons[i].endPoint.x = this.ribbons[i].startPoint.x;
                    // 再改变结束点
                    this.ribbons[i].endPoint.x = this.ribbons[i].startPoint.x + Math.sin(this.beta * this.ribbons[i].speed) * this.ribbons[i].range;
                }
            };
            return Lantern;
        }());
        element.Lantern = Lantern;
        // +----------------------------------------------------------------------
        // | 元素：镭射线
        // +----------------------------------------------------------------------
        var Ray = /** @class */ (function () {
            function Ray(x, y, width, height) {
                this.x = x || 0;
                this.y = y || 0;
                this.width = width || 100;
                this.height = height || 100;
                // 使用值
                this.o = Math.PI / 2 * (Math.random() * this.x - this.height / 2) / this.height;
                if (this.o === 0) {
                    this.o = (Math.random() - 0.5) * Math.PI / 2; // 恢复到 -90 ~ +90
                }
                this.s = 2 * Math.PI * (Math.random() * this.y - this.width / 2) / this.width;
                if (this.s === 0) {
                    this.s = (Math.random() - 0.5) * Math.PI;
                }
                this.h = 0;
                // 变化值
                this.l = 0.02 * _sign(this.s); // 返回五种值：1, -1, 0, -0, NaN
                this.c = 0.02 * _sign(this.o); // 返回五种值：1, -1, 0, -0, NaN
                this.c += _random(-0.005, 0.005);
                this.d = _random(2, 4); // 线长
            }
            Ray.prototype.render = function (ctx) {
                var startX = this.x + Math.cos(this.s) * this.h / 2;
                var startY = this.y + Math.sin(this.s) * this.h / 2;
                var endX = this.x + Math.cos(this.o) * this.h;
                var endY = this.y + Math.sin(this.o) * this.h;
                ctx.moveTo(this.x, this.y);
                ctx.quadraticCurveTo(startX, startY, endX, endY);
            };
            Ray.prototype.update = function () {
                this.o += this.c * 2; // 乘以2 是为了 消失快点
                this.s += this.l * 2; // 乘以2 是为了 消失快点
                this.h += Math.cos(this.o) * this.d;
            };
            return Ray;
        }());
        element.Ray = Ray;
    })(element = tiefan.element || (tiefan.element = {})); /** namespace element **/
    /**
     * +----------------------------------------------------------------------
     * | Animation 动画: 所有需要渲染的元素
     * +----------------------------------------------------------------------
     * | render()
     * +----------------------------------------------------------------------
     */
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
    })(animation = tiefan.animation || (tiefan.animation = {})); /** namespace Animation **/
    /**
     * 获取一张图片的信息
     * @param options
     *      oImg
     *      width
     *      height
     */
    function _getImageData(options) {
        var oImg = options.oImg;
        var width = options.width || 400;
        var height = options.height; // 没有默认值
        // 创建canvas，虚拟的，不用显示的
        var can = document.createElement('canvas');
        var ctx = can.getContext('2d');
        can.width = width;
        can.height = height || can.width * oImg.naturalHeight / oImg.naturalWidth;
        //
        ctx.drawImage(oImg, 0, 0, oImg.naturalWidth, oImg.naturalHeight, 0, 0, can.width, can.height);
        // 获取结果
        return ctx.getImageData(0, 0, can.width, can.height);
    }
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
    /**
     * +----------------------------------------------------------------------
     * | 场景管理
     * +----------------------------------------------------------------------
     */
    var SenceController = /** @class */ (function () {
        function SenceController() {
        }
        SenceController.loadAllResource = function (config, loadedFn, loadedAllFn) {
            var loadedNumber = 0;
            // 逐一加载
            for (var i = 0, len = config.length; i < len; i++) {
                SenceController.resource[config[i].name] = new Image(); // 创建一个同名的key
                SenceController.resource[config[i].name].src = config[i].url; // 请求
                SenceController.resource[config[i].name].onload = function () {
                    ++loadedNumber;
                    loadedFn && loadedFn(loadedNumber);
                    //判断是否已经全部加载完毕
                    if (loadedNumber === config.length) {
                        loadedAllFn && loadedAllFn(); // callback.call(_this);// ❤
                    }
                };
            }
        };
        ;
        SenceController.resource = {};
        return SenceController;
    }());
    tiefan.SenceController = SenceController;
    /**
     * +----------------------------------------------------------------------
     * | 场景
     * +----------------------------------------------------------------------
     * | 所有单独的场景。包括 加载场景； 开场动画场景； 抽奖场景
     * +----------------------------------------------------------------------
     */
    var scene;
    (function (scene) {
        // +----------------------------------------------------------------------
        // | 场景抽象类
        // +----------------------------------------------------------------------
        var Scene = /** @class */ (function () {
            function Scene() {
                var canvas = SingletonCanvas.getInstance();
                this.can = canvas.getCanvas();
                this.ctx = canvas.getContext();
                this.canRect = this.can.getBoundingClientRect();
            }
            return Scene;
        }());
        /**
         * +----------------------------------------------------------------------
         * | 加载场景
         * +----------------------------------------------------------------------
         */
        var load;
        (function (load) {
            // +----------------------------------------------------------------------
            // | 文字加载
            // +----------------------------------------------------------------------
            var Text = /** @class */ (function (_super) {
                __extends(Text, _super);
                function Text() {
                    var _this_1 = _super.call(this) || this;
                    var options = {
                        x: _this_1.can.width / 2,
                        y: _this_1.can.height / 2,
                        color: '#abcdef',
                    };
                    _this_1.text = new element.SolidText(options);
                    return _this_1;
                }
                Text.prototype.show = function (text) {
                    this.ctx.fillStyle = '##0f0f0f';
                    this.ctx.fillRect(0, 0, this.can.width, this.can.height);
                    this.text.text = text;
                    this.text.render(this.ctx);
                };
                return Text;
            }(Scene));
            load.Text = Text;
        })(load = scene.load || (scene.load = {})); /** namespace load **/
        /**
         * +----------------------------------------------------------------------
         * | 过场场景
         * +----------------------------------------------------------------------
         */
        var cut;
        (function (cut) {
            // +----------------------------------------------------------------------
            // | 镭射线动画
            // +----------------------------------------------------------------------
            var RayLogo = /** @class */ (function (_super) {
                __extends(RayLogo, _super);
                function RayLogo(oImg) {
                    var _this_1 = _super.call(this) || this;
                    _this_1.oImg = null;
                    _this_1.imageData = [];
                    _this_1.virtualCan = null;
                    _this_1.virtualCtx = null;
                    _this_1.startX = 0;
                    _this_1.startY = 0;
                    _this_1.rays = [];
                    _this_1.timer = null;
                    _this_1.oImg = oImg;
                    _this_1.imageData = _getImageData({ oImg: _this_1.oImg, width: 350, });
                    // 创建虚拟canvas
                    _this_1.virtualCan = document.createElement("canvas");
                    _this_1.virtualCtx = _this_1.virtualCan.getContext("2d");
                    _this_1.virtualCan.width = _this_1.imageData.width;
                    _this_1.virtualCan.height = _this_1.imageData.height;
                    // 计算图片准备放的位置
                    _this_1.startX = (_this_1.can.width - _this_1.imageData.width) / 2;
                    _this_1.startY = (_this_1.can.height - _this_1.imageData.height) / 2;
                    // 创建镭射线的渐变色
                    var rayColor1 = "#abcdef";
                    var rayColor2 = "#1278de";
                    _this_1.gradient = _this_1.ctx.createRadialGradient(_this_1.can.width / 2, _this_1.can.height / 2, 0, _this_1.can.width / 2, _this_1.can.height / 2, _this_1.imageData.width);
                    _this_1.gradient.addColorStop(0, rayColor1);
                    _this_1.gradient.addColorStop(1, rayColor2);
                    // 创建镭射线
                    _this_1.createRays();
                    _this_1.showHeight = _this_1.startY;
                    return _this_1;
                }
                RayLogo.prototype.createRays = function () {
                    for (var i = 0, len = this.imageData.data.length; i < len; i += 4) {
                        var num = i / 4; // 每4个值，代表一个像素
                        var opacity = this.imageData.data[i + 3];
                        if (opacity >= 200) { // 透明度判断
                            var x = num % this.imageData.width + this.startX;
                            var y = ~~(num / this.imageData.width) + this.startY;
                            if (x % 2 && y % 2) {
                                this.rays.push(new element.Ray(x, y, this.imageData.width, this.imageData.height));
                            }
                        }
                    }
                };
                RayLogo.prototype.update = function () {
                    this.showHeight += 6;
                };
                RayLogo.prototype.render = function () {
                    var len = 0;
                    this.showHeight = Math.min(this.showHeight, this.imageData.height + this.startY);
                    // 清空
                    this.ctx.clearRect(0, 0, this.can.width, this.can.height);
                    // 画图
                    this.ctx.drawImage(this.virtualCan, 0, 0, this.showHeight, this.virtualCan.height, this.startX, this.startY, this.showHeight, this.virtualCan.height); // 画的是文字
                    // 画镭射线
                    this.ctx.save();
                    this.ctx.strokeStyle = this.gradient;
                    this.ctx.globalAlpha = 0.2; // 镭射线的颜色
                    this.ctx.globalCompositeOperation = "lighter";
                    this.ctx.beginPath();
                    for (var i = 0; i < this.rays.length; i++) {
                        if (this.rays[i].y < this.showHeight) {
                            if (this.rays[i].h >= 0) {
                                this.rays[i].render(this.ctx);
                                this.rays[i].update();
                            }
                            else {
                                ++len;
                                this.virtualCtx.fillStyle = '#1278de';
                                this.virtualCtx.fillRect(this.rays[i].x - this.startX, this.rays[i].y - this.startY, 1, 1);
                            }
                        }
                    }
                    this.ctx.stroke();
                    this.ctx.restore();
                    return len < this.rays.length;
                };
                RayLogo.prototype.show = function () {
                    var _this = this;
                    this.timer = window.setInterval(function () {
                        var flag = _this.render();
                        if (!flag) {
                            console.log('完成了', _this.timer);
                            window.clearInterval(_this.timer);
                            // 通知观察者
                            return;
                        }
                        _this.update();
                    }, 1000 / 60);
                };
                return RayLogo;
            }(Scene));
            cut.RayLogo = RayLogo;
            // +----------------------------------------------------------------------
            // | 新年抽奖
            // +----------------------------------------------------------------------
            var NewYear = /** @class */ (function (_super) {
                __extends(NewYear, _super);
                function NewYear(options) {
                    var _this_1 = _super.call(this) || this;
                    _this_1.backgroundImg = options.backgroundImg;
                    _this_1.lanternImg = options.lanternImg;
                    _this_1.num = options.num || 80;
                    _this_1.lanterns = [];
                    _this_1._init();
                    return _this_1;
                }
                NewYear.prototype._init = function () {
                    this._setBackground();
                    this.createLanterns();
                };
                NewYear.prototype.createLanterns = function () {
                    for (var i = 0; i < this.num; i++) {
                        var x = this.can.width / this.num * i + _random(-50, 50);
                        var y = _random(-10, 10);
                        var options = {
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
                };
                NewYear.prototype._setBackground = function () {
                    this.ctx.drawImage(this.backgroundImg, 0, 0, this.backgroundImg.naturalWidth, this.backgroundImg.naturalHeight, 0, 0, this.can.width, this.can.height);
                };
                NewYear.prototype.draw = function (ctx) {
                    for (var i = 0, len = this.lanterns.length; i < len; i++) {
                        this.lanterns[i].update();
                        this.lanterns[i].render(ctx);
                    }
                };
                NewYear.prototype.show = function () {
                    var _this = this;
                    (function v() {
                        //
                        //_this.ctx.clearRect(0, 0, _this.can.width, _this.can.height);
                        //
                        _this._setBackground();
                        //
                        _this.draw(_this.ctx);
                        window.requestAnimationFrame(v);
                    }());
                };
                return NewYear;
            }(Scene)); /** class NewYear **/
            cut.NewYear = NewYear;
        })(cut = scene.cut || (scene.cut = {})); /** namespace cut **/
        /**
         * +----------------------------------------------------------------------
         * | 抽奖场景
         * +----------------------------------------------------------------------
         */
        var lottery;
        (function (lottery) {
            var Lottery = /** @class */ (function () {
                function Lottery() {
                }
                Lottery.prototype.gameStart = function () {
                };
                Lottery.prototype.gameRun = function () {
                    var _this = this;
                    (function v() {
                        console.log(1);
                        _this.gameStart();
                        window.requestAnimationFrame(v);
                    }());
                };
                return Lottery;
            }());
        })(lottery = scene.lottery || (scene.lottery = {})); /** namespace lottery **/
    })(scene = tiefan.scene || (tiefan.scene = {})); /** namespace scene **/
})(tiefan || (tiefan = {})); /** namespace tiefan **/
