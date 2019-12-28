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
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    // +---------------------------------------------------------
    // | 线
    // +---------------------------------------------------------
    var Line = /** @class */ (function () {
        function Line(startPoint, endPoint, color, lineWidth) {
            this.startPoint = startPoint;
            this.endPoint = endPoint;
            this.color = color || 'red';
            this.lineWidth = lineWidth || 1;
        }
        return Line;
    }());
    var SolidLine = /** @class */ (function (_super) {
        __extends(SolidLine, _super);
        function SolidLine(startPoint, endPoint, color, lineWidth) {
            return _super.call(this, startPoint, endPoint, color, lineWidth) || this;
        }
        SolidLine.prototype.render = function (ctx) {
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
        };
        return SolidLine;
    }(Line));
    // +---------------------------------------------------------
    // | 圆
    // +---------------------------------------------------------
    var Circle = /** @class */ (function () {
        function Circle(x, y, r, color) {
            this.x = x || 0;
            this.y = y || 0;
            this.r = r || 1;
            this.color = color || 'red';
        }
        return Circle;
    }());
    var SolidCircle = /** @class */ (function (_super) {
        __extends(SolidCircle, _super);
        function SolidCircle(x, y, r, color) {
            return _super.call(this, x, y, r, color) || this;
        }
        SolidCircle.prototype.render = function (ctx) {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        return SolidCircle;
    }(Circle));
    var HollowCircle = /** @class */ (function (_super) {
        __extends(HollowCircle, _super);
        function HollowCircle(x, y, r, color) {
            return _super.call(this, x, y, r, color) || this;
        }
        HollowCircle.prototype.render = function (ctx) {
            ctx.save();
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };
        return HollowCircle;
    }(Circle));
    // +---------------------------------------------------------
    // | 文字
    // +---------------------------------------------------------
    var Text = /** @class */ (function () {
        function Text(x, y, text, color, fontSize) {
            this.x = x || 0;
            this.y = y || 0;
            this.text = text || 'default';
            this.color = color || 'red';
            this.fontSize = fontSize || 12;
        }
        return Text;
    }());
    var SolidText = /** @class */ (function (_super) {
        __extends(SolidText, _super);
        function SolidText(x, y, text, color, fontSize) {
            return _super.call(this, x, y, text, color, fontSize) || this;
        }
        SolidText.prototype.render = function (ctx) {
            ctx.save();
            ctx.font = this.fontSize + 'px Arial';
            ctx.fillStyle = this.color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.beginPath();
            ctx.fillText(this.text, this.x, this.y);
            ctx.closePath();
            ctx.restore();
        };
        return SolidText;
    }(Text));
    var Clock = /** @class */ (function () {
        function Clock(options) {
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
        Clock.prototype.drawFrame = function (ctx) {
            this.frameObj.render(ctx);
        };
        Clock.prototype.drawNum = function (ctx) {
            // 画原点和字
            for (var i = 0; i < 360; i++) {
                if (i % 6 === 0) {
                    var x = this.center.x + this.detailCircle.r * Math.cos(i * Math.PI / 180);
                    var y = this.center.y + this.detailCircle.r * Math.sin(i * Math.PI / 180);
                    // 画点
                    this.drawSolidCircle(x, y, this.minuteRadius, '#ccc');
                    i % 5 === 0 && this.drawSolidCircle(x, y, this.minuteRadius, '#000');
                }
                // 写字
                if (i % 30 === 0) {
                    var text = i === 0 ? 12 : i / 30;
                    var x = this.center.x + this.distance * 0.85 * Math.cos((i - 90) * Math.PI / 180);
                    var y = this.center.y + this.distance * 0.85 * Math.sin((i - 90) * Math.PI / 180);
                    this.writeText(text, x, y, '30px', '#000');
                }
            }
        };
        // 画中心点
        Clock.prototype.drawMiddleCircle = function (ctx) {
            this.middleCircleObj.render(ctx);
        };
        Clock.prototype.update = function () {
        };
        Clock.prototype.render = function (ctx) {
            // 画
            this.drawFrame(ctx);
            // 画针
            this.drawLine(this.center.x, this.center.y, this.hourPointer.x, this.hourPointer.y, this.hourPointer.width, this.hourPointer.color); // 时针
            this.drawLine(this.center.x, this.center.y, this.minPointer.x, this.minPointer.y, this.minPointer.width, this.minPointer.color); // 分针
            this.drawLine(this.center.x, this.center.y, this.secPointer.x, this.secPointer.y, this.secPointer.width, this.secPointer.color); // 秒针
            // 画中心点
            this.drawMiddleCircle(ctx);
        };
        return Clock;
    }());
    cyber.Clock = Clock;
})(cyber || (cyber = {}));
