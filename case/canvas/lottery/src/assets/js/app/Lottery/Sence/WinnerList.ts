



export class WinnerList {
    public backgroundImg: any;
    public titleImg: any;
    public levelImg: any;

    public x: number;
    public y: number;
    public width: number;
    public height: number;


    constructor (options: any) {
        this.backgroundImg = options.backgroundImg;
        this.titleImg = options.titleImg;
        this.levelImg = options.levelImg;

        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 100;
        this.height = options.height || 100;
    }

    public render (ctx: any): void {
        // 绘制透明背景
        ctx.drawImg(this.backgroundImg, this.x, this.y, this.width, this.height);
        // 绘制'获奖名单'图片
        ctx.drawImg(this.titleImg, this.x, this.y, 300, 200);
        // 绘制 奖励区
    }
}