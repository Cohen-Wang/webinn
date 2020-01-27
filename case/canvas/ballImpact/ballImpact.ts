namespace cyber {

    function _random (min: number = 0, max: number = 1) {
        return Math.random() * (max - min) + min;
    }


    class Ball {
        public x: number;
        public y: number;
        public radius: number;
        public color: string;
        public speed: number;
        public angle: string;

        constructor (options: any) {
            this.x = options.x || 0;
            this.y = options.y || 0;
            this.radius = options.radius || 1;
            this.color = options.color || '#000';
            this.speed = options.speed || 10;
            this.angle = options.angle || 0;
        }

        public render (ctx:any): void {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    /**
     * 碰撞检测
     *      一：单物体碰撞
     *
     *      二：多物体碰撞
     *          1.首先想到的是双重循环
     *          for(var i = 0; i < object.length; i++) {
     *              for(var j = 0; j < object.length; j++) {
     *                  // do something
     *              }
     *          }
     *          看起来很合理，但是其实有很大的问题:
     *
     *              问题一： object1 与 object1，也就是说物体自身跟自身也做了检测。
     *              for(var i = 0; i < object.length; i++) {
     *                  for(var j = 0; j < object.length; j++) {
     *                      if (i !== j) {
     *                          // do something
     *                      }
     *                  }
     *              }
     *
     *              问题二： object1 与 object2检测过后，我们又做了一次object2 与 object1。
     *              object0 vs object1, object2, object3, object4, object5
     *              object1 vs object2, object3, object4, object5
     *              object2 vs object3, object4, object5
     *              object3 vs object4, object5
     *              object4 vs object5
     *              object5 vs nothing
     *
     *              首先观察上表，当上层循环的i为0时，下层循环的j为1，i为1时，下层循环的j为2...于是，我们可以总结出一个规律，
     *              上层索引值 i 与下层索引值 j 之间存在关系：j=i+1。
     *              这不仅解决了问题一，也就是说不需要再判断i与j的索引值是否相等了，同时也完美的解决了问题二。
     */
    export class BallImpact {
        public width: number;
        public height: number;
        public radius: number;
        public num: number;
        public speed: number;
        public balls: any = [];

        constructor (options) {
            this.width = options.width || 100;
            this.height = options.height || 100;
            this.radius = options.radius || 0;
            this.num = options.num || 10;
            this.speed = options.speed || 10;

            this.init();
        }

        public init (): void {
            while (this.balls.length < this.num) {
                let radius = _random(this.radius - 3, this.radius + 3) ;
                let options = {
                    radius: radius,
                    x: _random(radius, this.width - radius),
                    y: _random(radius, this.height - radius),
                    color: '#ff0',
                    angle: _random(0, 180),
                    speed: _random(this.speed - 1, this.speed + 1),
                };

                // 判断（如果生成的时候，就重合，那么需要重来）
                let flag = true;
                for (let i = 0; i < this.balls.length; i++) {
                    // 两个圆的距离
                    let nowDistance = Math.sqrt(Math.pow(options.x - this.balls[i].x, 2) + Math.pow(options.y - this.balls[i].y, 2));
                    let minDistance = options.radius + this.balls[i].radius;
                    if (nowDistance < minDistance) {// 这里最好是小于，不要用小于等于，以免和碰撞判断发生矛盾
                        flag = false;
                    }
                }

                if (flag) {
                    this.balls.push(new Ball(options));
                }
            }
        }

        public update (): void {
            for (let i = 0; i < this.balls.length; i++) {
                // 判断撞壁
                if (this.balls[i].x >= this.width - this.balls[i].radius) {
                    this.balls[i].angle = 180 - this.balls[i].angle
                }
                if (this.balls[i].x <= this.balls[i].radius) {
                    this.balls[i].angle = -(180 + this.balls[i].angle)
                }
                if (this.balls[i].y - this.balls[i].radius < 0 || this.balls[i].y + this.balls[i].radius > this.height) {
                    this.balls[i].angle = -this.balls[i].angle
                }
                // 判断球相撞
                for (let j = i + 1; j < this.balls.length; j++) {
                    let nowDistance = Math.sqrt(Math.pow(this.balls[i].x - this.balls[j].x, 2) + Math.pow(this.balls[i].y - this.balls[j].y, 2));
                    let minDistance = this.balls[i].radius + this.balls[j].radius;
                    if (nowDistance < minDistance) {
                        this.balls[i].flag === false ? this.balls[i].angle = this.balls[i].angle - 180 : '';
                        this.balls[j].flag === false ? this.balls[j].angle = this.balls[j].angle - 180 : '';
                        // 开关
                        this.balls[i].flag = this.balls[j].flag = true;
                    }
                }
                // 获取下一次渲染的值
                this.balls[i].x += this.balls[i].speed * Math.cos(this.balls[i].angle * Math.PI/180);
                this.balls[i].y -= this.balls[i].speed * Math.sin(this.balls[i].angle * Math.PI/180);
                // 恢复
                this.balls[i].flag = false;
            }
        }

        public render (ctx): void {
            this.balls.forEach(function (item) {
                console.log(item.x, item.y);
                item.render(ctx);
            });
        }
    }
}