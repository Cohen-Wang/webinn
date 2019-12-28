namespace cyber {

    let _random = function (min: number, max: number): number {
        return Math.random() * (max - min) + min;
    };


    /**
     * 由于typescript的 Math.sign 要报错，看到烦的很，所以写这个函数代替
     */
    let _sign = function (n: number): any {
        if (n > 0) {
            return 1
        } else if (n === 0) {
            return 0;
        } else if (n === -0) {
            return -0;
        } else if (n < 0) {
            return -1;
        } else {
            return NaN;
        }
    };



    /**
     * 镭射线
     */
    export class Ray {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        //
        public o: number;
        public s: number;
        public h: number;
        public l: number;
        public c: number;
        public d: number;

        constructor (x: number, y: number, width: number, height: number) {
            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 100;
            this.height = height || 100;

            // 使用值
            this.o = Math.PI / 2 * (Math.random() * this.x - this.height / 2) / this.height;
            if (this.o === 0) {
                this.o = (Math.random() - 0.5) * Math.PI / 2;// 恢复到 -90 ~ +90
            }

            this.s = 2 * Math.PI * (Math.random() * this.y - this.width / 2) / this.width;
            if (this.s === 0) {
                this.s = (Math.random() - 0.5) * Math.PI
            }
            this.h = 0;

            // 变化值
            this.l = 0.02 * _sign(this.s);// 返回五种值：1, -1, 0, -0, NaN
            this.c = 0.02 * _sign(this.o);// 返回五种值：1, -1, 0, -0, NaN
            this.c += _random(-0.005, 0.005);
            this.d = _random(2, 4);// 线长
        }

        render (ctx: any): void {
            let startX  = this.x + Math.cos(this.s) * this.h / 2;
            let startY  = this.y + Math.sin(this.s) * this.h / 2;
            let endX    = this.x + Math.cos(this.o) * this.h;
            let endY    = this.y + Math.sin(this.o) * this.h;
            ctx.moveTo(this.x, this.y);
            ctx.quadraticCurveTo(startX, startY, endX, endY);
        }

        update (): void {
            this.o += this.c * 2;// 乘以2 是为了 消失快点
            this.s += this.l * 2;// 乘以2 是为了 消失快点
            this.h += Math.cos(this.o) * this.d;
        }
    }
}