var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cyber;
(function (cyber) {
    // +------------------------------------------------------------------------------
    // |�����ࣺ����
    // +------------------------------------------------------------------------------
    var Heart = /** @class */ (function () {
        function Heart(options) {
            this.x = options.x || 0;
            this.y = options.y || 0;
            this.r = options.r || 2;
            this.color = options.color || '#f00';
            this.opacity = options.opacity || 1;
            this.speed = options.speed || {
                opacity: 0,
                r: 0
            };
        }
        return Heart;
    }());
    // +------------------------------------------------------------------------------
    // |ʵ��İ���
    // +------------------------------------------------------------------------------
    var SolidHeart = /** @class */ (function (_super) {
        __extends(SolidHeart, _super);
        function SolidHeart(options) {
            return _super.call(this, options) || this;
        }
        SolidHeart.prototype.render = function (ctx) {
            ctx.fillStyle = this.color; // _this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x, this.y - 3 * this.r, this.x - 5 * this.r, this.y - 15 * this.r, this.x - 25 * this.r, this.y - 15 * this.r);
            ctx.bezierCurveTo(this.x - 55 * this.r, this.y - 15 * this.r, this.x - 55 * this.r, this.y + 22.5 * this.r, this.x - 55 * this.r, this.y + 22.5 * this.r);
            ctx.bezierCurveTo(this.x - 55 * this.r, this.y + 40 * this.r, this.x - 35 * this.r, this.y + 62 * this.r, this.x, this.y + 80 * this.r);
            ctx.bezierCurveTo(this.x + 35 * this.r, this.y + 62 * this.r, this.x + 55 * this.r, this.y + 40 * this.r, this.x + 55 * this.r, this.y + 22.5 * this.r);
            ctx.bezierCurveTo(this.x + 55 * this.r, this.y + 22.5 * this.r, this.x + 55 * this.r, this.y - 15 * this.r, this.x + 25 * this.r, this.y - 15 * this.r);
            ctx.bezierCurveTo(this.x + 10 * this.r, this.y - 15 * this.r, this.x, this.y - 3 * this.r, this.x, this.y);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        };
        return SolidHeart;
    }(Heart));
    cyber.SolidHeart = SolidHeart;
    // +------------------------------------------------------------------------------
    // |���ĵİ���
    // +------------------------------------------------------------------------------
    var HollowHeart = /** @class */ (function (_super) {
        __extends(HollowHeart, _super);
        function HollowHeart(options) {
            var _this = _super.call(this, options) || this;
            _this.lineWidth = options.lineWidth || 1;
            return _this;
        }
        HollowHeart.prototype.render = function (ctx) {
            ctx.strokeStyle = this.color; // _this.color;
            ctx.globalAlpha = this.opacity;
            ctx.lineWidth = this.lineWidth;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x, this.y - 3 * this.r, this.x - 5 * this.r, this.y - 15 * this.r, this.x - 25 * this.r, this.y - 15 * this.r);
            ctx.bezierCurveTo(this.x - 55 * this.r, this.y - 15 * this.r, this.x - 55 * this.r, this.y + 22.5 * this.r, this.x - 55 * this.r, this.y + 22.5 * this.r);
            ctx.bezierCurveTo(this.x - 55 * this.r, this.y + 40 * this.r, this.x - 35 * this.r, this.y + 62 * this.r, this.x, this.y + 80 * this.r);
            ctx.bezierCurveTo(this.x + 35 * this.r, this.y + 62 * this.r, this.x + 55 * this.r, this.y + 40 * this.r, this.x + 55 * this.r, this.y + 22.5 * this.r);
            ctx.bezierCurveTo(this.x + 55 * this.r, this.y + 22.5 * this.r, this.x + 55 * this.r, this.y - 15 * this.r, this.x + 25 * this.r, this.y - 15 * this.r);
            ctx.bezierCurveTo(this.x + 10 * this.r, this.y - 15 * this.r, this.x, this.y - 3 * this.r, this.x, this.y);
            ctx.closePath();
            ctx.stroke();
            ctx.globalAlpha = 1;
        };
        return HollowHeart;
    }(Heart));
    cyber.HollowHeart = HollowHeart;
    var _random = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 0; }
        return Math.random() * (max - min) + min;
    };
    var HeartShow = /** @class */ (function () {
        function HeartShow(options) {
            //
            this.minNum = 10;
            this.maxNum = 50;
            // ����
            this.hearts = [];
            this.probability = options.probability || 0.1;
            this.minX = options.minX || 0;
            this.maxX = options.maxX || 100;
            this.minY = options.minY || 0;
            this.maxY = options.maxY || 100;
            this.minRadius = options.minSize || 0.05;
            this.maxRadius = options.maxSize || 0.1;
            this.minOpacity = options.minOpacity || 0.3;
            this.maxOpacity = options.maxOpacity || 1;
            // �ٶ�
            this.minSpeed = options.minSpeed || 3;
            this.maxSpeed = options.maxSpeed || 5;
            this.minOpacitySpeed = options.minOpacitySpeed || .009;
            this.maxOpacitySpeed = options.maxOpacitySpeed || .015;
            this.minRadiusSpeed = options.minOpacitySpeed || .003;
            this.maxRadiusSpeed = options.maxOpacitySpeed || .005;
            //
            this.createHeart(this.minNum);
        }
        HeartShow.prototype.createHeart = function (num) {
            for (var i = 0; i < num; i++) {
                var options = {
                    x: _random(this.minX, this.maxX),
                    y: _random(this.minY, this.maxY),
                    r: _random(this.minRadius, this.maxRadius),
                    opacity: _random(this.minOpacity, this.maxOpacity),
                    color: 'rgb(' + ~~_random(0, 255) + ',' + ~~_random(0, 255) + ',' + ~~_random(0, 255) + ')',
                    //
                    speed: {
                        opacity: _random(this.minOpacitySpeed, this.maxOpacitySpeed),
                        r: _random(this.minRadiusSpeed, this.maxRadiusSpeed)
                    }
                };
                Math.random() > 0.5 ? this.hearts.push(new SolidHeart(options)) : this.hearts.push(new HollowHeart(options));
            }
        };
        HeartShow.prototype.update = function () {
            for (var i = 0, len = this.hearts.length; i < len; i++) {
                // �����˶�
                this.hearts[i].y--;
                // ͸���Ƚ���
                this.hearts[i].opacity -= this.hearts[i].speed.opacity;
                // ���
                this.hearts[i].r += this.hearts[i].speed.r;
                // ɾ��
                if (this.hearts[i].opacity <= 0) {
                    this.hearts.splice(i, 1);
                    i--;
                    len--;
                }
            }
            if (this.hearts.length <= this.maxNum && Math.random() > this.probability) {
                this.createHeart(1);
            }
        };
        HeartShow.prototype.render = function (ctx) {
            this.hearts.forEach(function (item) {
                item.render(ctx);
            });
        };
        return HeartShow;
    }());
    cyber.HeartShow = HeartShow;
})(cyber || (cyber = {}));
