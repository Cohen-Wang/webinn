namespace cyber {


    interface Element {
        render (ctx: any): void;
    }


    // +---------------------------------------------------------
    // | 文字
    // +---------------------------------------------------------
    abstract class Text {
        public x: number;
        public y: number;
        public text: string;
        public color: string;
        public fontSize: number;
        protected constructor (x, y, text, color, fontSize) {
            this.x = x || 0;
            this.y = y || 0;
            this.text = text || 'default';
            this.color = color || 'red';
            this.fontSize = fontSize || 12;
        }
    }
    class SolidText extends Text implements Element {
        constructor(x, y, text, color, fontSize) {
            super(x, y, text, color, fontSize);
        }
        public render (ctx: any): void {
            ctx.save();
            ctx.font = this.fontSize + 'px Arial';
            ctx.fillStyle = this.color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.beginPath();
            ctx.fillText(this.text, this.x, this.y);
            ctx.closePath();
            ctx.restore();
        }
    }
    export class HollowText extends Text implements Element {
        constructor(x, y, text, color, fontSize) {
            super(x, y, text, color, fontSize);
        }
        public render (ctx: any): void {
            ctx.save();
            ctx.font = this.fontSize + 'px Arial';
            ctx.strokeStyle = this.color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.beginPath();
            ctx.strokeText(this.text, this.x, this.y);
            ctx.closePath();
            ctx.restore();
        }
    }




    export class Hacker {
        public width: number;
        public height: number;
        public letters: string;
        public color: string;
        public fontSize: number;
        public cols: number;// 列数
        public drops: any = [];

        constructor (options) {
            this.width = options.width || 100;
            this.height = options.height || 100;
            this.letters = options.letters || 'abcdefghijklmnopqrstuvwxyz1234567890';
            this.color = options.color || '#0f0';
            this.fontSize = options.fontSize || 24;

            this.cols = ~~(this.width / this.fontSize);
            for (let i = 0; i < this.cols; i++) {
                this.drops.push( ~~ (Math.random() * this.height) );
            }
        }

        /**
         * TODO 变化和渲染 写在一起了，有什么可以优化的地方？
         * @param ctx
         */
        public render (ctx: any): void {
            for (let i = 0; i < this.cols; i++) {
                let x = i * this.fontSize;
                let y = this.drops[i] * this.fontSize;
                let text =  this.letters[ ~~(Math.random() * this.letters.length)];
                // 渲染
                if (Math.random() > 0.5) {
                    let solidText = new SolidText(x, y, text, this.color, this.fontSize);
                    solidText.render(ctx);
                } else {
                    let hollowText = new HollowText(x, y, text,  this.color, this.fontSize);
                    hollowText.render(ctx);
                }
                // 变化
                if (y > this.height && Math.random() >= 0.9) {
                    this.drops[i] = 0;
                }
                this.drops[i]++;
            }
        }
    }
}