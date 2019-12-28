var cyber;
(function (cyber) {
    function random(m, n) {
        return Math.random() * (n - m) + m;
    }
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    var Plant = /** @class */ (function () {
        function Plant(options) {
            this.startPoint = options.startPoint;
            this.endPoint = options.endPoint;
            this.color = options.color;
            this.lineWidth = options.lineWidth || 14;
            this.globalAlpha = options.globalAlpha || 0.8;
            //
            this.amp = options.amp || 40;
        }
        Plant.prototype.draw = function (ctx) {
            ctx.save();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.globalAlpha = this.globalAlpha;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(this.startPoint.x, this.startPoint.y);
            // 弧度线：贝塞尔曲线
            ctx.quadraticCurveTo(this.startPoint.x, this.startPoint.y - 120, this.endPoint.x, this.endPoint.y);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };
        return Plant;
    }());
    var WavePlant = /** @class */ (function () {
        function WavePlant(options) {
            this.plants = [];
            this.width = options.width || 100;
            this.height = options.height || 100;
            this.num = options.num || 10;
            this.lineWidth = options.lineWidth || 20;
            this.color = options.color || 'red';
            this.globalAlpha = options.globalAlpha || 0.8;
            this.beta = 0;
            this.init();
        }
        WavePlant.prototype.init = function () {
            for (var i = 0; i < this.num; i++) {
                var startX = i * this.width / this.num + Math.random() * this.lineWidth / 2; // 均匀生成startX
                var startY = this.height;
                var endX = startX; // 结束点X坐标（变动）
                var endY = this.height * .66 - Math.random() * 100; // 结束点Y坐标（固定）
                var amp = random(30, 50); // 40 ~ 50
                var options = {
                    startPoint: new Point(startX, startY),
                    endPoint: new Point(endX, endY),
                    color: this.color,
                    lineWidth: this.lineWidth,
                    globalAlpha: this.globalAlpha,
                    amp: amp,
                };
                this.plants.push(new Plant(options));
            }
        };
        WavePlant.prototype.update = function () {
            this.beta++; // Math.sin的应用
            var l = Math.sin(this.beta * 0.02);
            // 变动
            for (var i = 0; i < this.plants.length; i++) {
                // 周期性改变水草的顶点X坐标
                this.plants[i].endPoint.x = this.plants[i].startPoint.x + l * this.plants[i].amp;
            }
        };
        WavePlant.prototype.render = function (ctx) {
            this.plants.forEach(function (item) {
                item.draw(ctx);
            });
        };
        return WavePlant;
    }());
    cyber.WavePlant = WavePlant;
})(cyber || (cyber = {}));
