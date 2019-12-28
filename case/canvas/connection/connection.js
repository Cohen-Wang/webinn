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
    cyber.SolidCircle = SolidCircle;
    // 空心圆
    var HollowCircle = /** @class */ (function (_super) {
        __extends(HollowCircle, _super);
        function HollowCircle(options) {
            var _this = _super.call(this, options) || this;
            _this.lineWidth = options.lineWidth || 1;
            return _this;
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
    cyber.HollowCircle = HollowCircle;
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
    cyber.SolidStar = SolidStar;
    // 空心星星
    var HollowStar = /** @class */ (function (_super) {
        __extends(HollowStar, _super);
        function HollowStar(options) {
            var _this = _super.call(this, options) || this;
            _this.lineWidth = options.lineWidth || 1;
            return _this;
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
    cyber.HollowStar = HollowStar;
    // +----------------------------------------------------------------------
    // | 元素：线
    // +----------------------------------------------------------------------
    var Line = /** @class */ (function () {
        function Line(options) {
            this.init(options);
        }
        Line.prototype.init = function (options) {
            this.x1 = options.x1 || 100;
            this.y1 = options.y1 || 100;
            this.x2 = options.x2 || 200;
            this.y2 = options.y2 || 200;
            this.color = options.color || '#ccc';
            this.opacity = options.opacity || 1;
            this.lineWidth = options.lineWidth || 1;
        };
        Line.prototype.render = function (ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.moveTo(this.x1, this.y1);
            ctx.lineTo(this.x2, this.y2);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        };
        return Line;
    }());
    cyber.Line = Line;
    // +----------------------------------------------------------------------
    // | 移动
    // +----------------------------------------------------------------------
    function move(element, ctx, options) {
        element.x += options.speedX || 1;
        element.y += options.speedY || 1;
        element.render(ctx);
    }
    cyber.move = move;
})(cyber || (cyber = {}));
