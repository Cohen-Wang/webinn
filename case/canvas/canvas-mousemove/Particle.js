var cyber;
(function (cyber) {
    function _random(min, max) {
        return Math.random() * (max - min) + min;
    }
    var Particle = /** @class */ (function () {
        function Particle(options) {
            this.x = options.x || 0;
            this.y = options.y || 0;
            this.r = options.r || 0;
            this.speedX = options.speedX || 0;
            this.speedY = options.speedY || 0;
            this.color = options.color || '#000';
            //
            this.theta = options.theta || 0;
            this.wander = options.wander || 1;
            this.drag = options.drag || 0.9;
        }
        Particle.prototype.render = function (ctx) {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.translate(this.x, this.y);
            ctx.beginPath();
            ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
        };
        return Particle;
    }());
    var ParticleShow = /** @class */ (function () {
        function ParticleShow() {
            //
            this.particles = [];
            this.colors = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423'];
        }
        ParticleShow.prototype.createParticle = function (num, point, theta, force) {
            for (var i = 0; i < num; i++) {
                var options = {
                    x: point.x,
                    y: point.y,
                    r: _random(4, 50),
                    speedX: Math.sin(theta) * force,
                    speedY: Math.cos(theta) * force,
                    color: this.colors[~~_random(0, this.colors.length)],
                    //
                    theta: _random(0, Math.PI * 2),
                    wander: _random(0.5, 2),
                    drag: _random(0.9, 0.99),
                };
                this.particles.push(new Particle(options));
            }
        };
        ParticleShow.prototype.update = function () {
            for (var i = 0, len = this.particles.length; i < len; i++) {
                var p = this.particles[i];
                p.x += p.speedX;
                p.y += p.speedY;
                p.speedX *= p.drag;
                p.speedY *= p.drag;
                p.theta += _random(-0.5, 0.5) * p.wander;
                p.speedX += Math.sin(p.theta) * 0.1;
                p.speedY += Math.cos(p.theta) * 0.1;
                p.r *= 0.96;
                if (p.r <= 0.5) {
                    this.particles.splice(i, 1);
                    len--;
                    i--;
                }
            }
        };
        ParticleShow.prototype.render = function (ctx) {
            this.particles.forEach(function (item) {
                item.render(ctx);
            });
        };
        return ParticleShow;
    }());
    cyber.ParticleShow = ParticleShow;
})(cyber || (cyber = {}));
