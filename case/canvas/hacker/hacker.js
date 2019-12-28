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
    var HollowText = /** @class */ (function (_super) {
        __extends(HollowText, _super);
        function HollowText(x, y, text, color, fontSize) {
            return _super.call(this, x, y, text, color, fontSize) || this;
        }
        HollowText.prototype.render = function (ctx) {
            ctx.save();
            ctx.font = this.fontSize + 'px Arial';
            ctx.strokeStyle = this.color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.beginPath();
            ctx.strokeText(this.text, this.x, this.y);
            ctx.closePath();
            ctx.restore();
        };
        return HollowText;
    }(Text));
    cyber.HollowText = HollowText;
    var Hacker = /** @class */ (function () {
        function Hacker(options) {
            this.drops = [];
            this.width = options.width || 100;
            this.height = options.height || 100;
            this.letters = options.letters || 'abcdefghijklmnopqrstuvwxyz1234567890';
            this.color = options.color || '#0f0';
            this.fontSize = options.fontSize || 24;
            this.cols = ~~(this.width / this.fontSize);
            for (var i = 0; i < this.cols; i++) {
                this.drops.push(~~(Math.random() * this.height));
            }
        }
        /**
         * TODO 变化和渲染 写在一起了，有什么可以优化的地方？
         * @param ctx
         */
        Hacker.prototype.render = function (ctx) {
            for (var i = 0; i < this.cols; i++) {
                var x = i * this.fontSize;
                var y = this.drops[i] * this.fontSize;
                var text = this.letters[~~(Math.random() * this.letters.length)];
                // 渲染
                if (Math.random() > 0.5) {
                    var solidText = new SolidText(x, y, text, this.color, this.fontSize);
                    solidText.render(ctx);
                }
                else {
                    var hollowText = new HollowText(x, y, text, this.color, this.fontSize);
                    hollowText.render(ctx);
                }
                // 变化
                if (y > this.height && Math.random() >= 0.9) {
                    this.drops[i] = 0;
                }
                this.drops[i]++;
            }
        };
        return Hacker;
    }());
    cyber.Hacker = Hacker;
})(cyber || (cyber = {}));
