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
var cyber;
(function (cyber) {
    function _random(min, max) {
        return Math.random() * (max - min) + min;
    }
    // 两点之间距离公式：Math.sqrt( x² + y²)
    function _getDistanceBetweenTwoPoints(startPoint, endPoint, precision) {
        if (precision === void 0) { precision = 2; }
        var distanceX = endPoint.x - startPoint.x;
        var distanceY = endPoint.y - startPoint.y;
        var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        //console.log('distance:' + distance);
        return distance;
    }
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
    cyber.Point = Point;
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
            var _this = _super.call(this, options) || this;
            //
            _this.speed = options.speed || 10;
            _this.angle = options.angle || 10;
            return _this;
        }
        SolidCircle.prototype.render = function (ctx) {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.restore();
        };
        return SolidCircle;
    }(Circle));
    cyber.SolidCircle = SolidCircle;
    var Radar = /** @class */ (function () {
        function Radar(options) {
            this.centerPoint = options.centerPoint || null;
            this.distance = options.distance || 100;
            this.num = options.num || 10;
            this.radius = options.radius || 10;
            //
            this.circles = [];
            //
            this.createCircle();
        }
        Radar.prototype.createCircle = function () {
            for (var i = 0; i < this.num; i++) {
                var angle = _random(0, 360) * Math.PI;
                var speed = _random(.1, .5);
                //
                var distance = this.distance / this.num * i;
                var x = this.centerPoint.x + distance * Math.cos(Math.PI / 180 * angle);
                var y = this.centerPoint.y + distance * Math.sin(Math.PI / 180 * angle);
                //
                var options = {
                    x: x,
                    y: y,
                    color: 'rgb(' + ~~_random(0, 255) + ', ' + ~~_random(0, 255) + ', ' + ~~_random(0, 255) + ')',
                    radius: this.radius,
                    speed: speed,
                    angle: angle,
                };
                this.circles.push(new SolidCircle(options));
            }
        };
        Radar.prototype.update = function () {
            for (var i = 0, len = this.circles.length; i < len; i++) {
                this.circles[i].angle += this.circles[i].speed;
                var startPoint = {
                    x: this.circles[i].x,
                    y: this.circles[i].y
                };
                var distance = _getDistanceBetweenTwoPoints(startPoint, this.centerPoint);
                this.circles[i].x = this.centerPoint.x + distance * Math.cos(this.circles[i].angle * Math.PI / 180);
                this.circles[i].y = this.centerPoint.y + distance * Math.sin(this.circles[i].angle * Math.PI / 180);
            }
        };
        Radar.prototype.render = function (ctx) {
            this.circles.forEach(function (item) {
                item.render(ctx);
            });
        };
        return Radar;
    }());
    cyber.Radar = Radar;
})(cyber || (cyber = {}));
