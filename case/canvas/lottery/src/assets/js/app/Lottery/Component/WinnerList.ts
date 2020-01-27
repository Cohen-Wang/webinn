import { PrizeLevel } from "./PrizeLevel";


// 获奖名单
export class WinnerList {
    public backgroundImg: any;
    public titleImg: any;
    public levelImg: any;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public prizeLevel: Array<any>;
    // 等级类的数据配置
    public config = [
        {title: '特等奖', y: 140, height: 140},
        {title: '一等奖', y: 300, height: 130},
        {title: '二等奖', y: 450, height: 170},
        {title: '三等奖', y: 640, height: 260},
    ];
    // 标题图片配置
    public titleImgOpt: any;
    // 等级类实例（特等奖，一等奖，二等奖...）
    public prizeLevels: Array<PrizeLevel> = [];

    constructor (options: any) {
        this.backgroundImg = options.backgroundImg;
        this.titleImg = options.titleImg;
        this.levelImg = options.levelImg;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 100;
        this.height = options.height || 100;
        this.prizeLevel = options.prizeLevel || [];
        this.titleImgOpt = {
            marginTop: 10,
            width: 243,
            height: 243 * this.titleImg.naturalHeight / this.titleImg.naturalWidth
        };
        // 创建等级类实例
        this._initPrizeLevels();
    }

    // 创建等级类实例
    private _initPrizeLevels (): void {
        for (let i = 0, len = this.prizeLevel.length; i < len; i ++) {
            let isSpecial = !i;
            let options = {
                backgroundImg:  this.levelImg,
                title: this.config[i].title,
                x: this.x + 10,
                y: this.config[i].y || this.y + this.titleImgOpt.height + 20 + i * 190,
                width: this.width - 20,
                height: this.config[i].height,
                nameListLength: this.prizeLevel[i],
                isSpecial: isSpecial,
            };

            this.prizeLevels.push(new PrizeLevel(options));
        }
    }

    public getAllNameList (): Array<any> {
        let result: any = [];
        for (let i = 0, len = this.prizeLevels.length; i < len; i++) {
            let nameList = this.prizeLevels[i].getNameList();
            for (let j = 0, lenJ = nameList.length; j < lenJ; j++) {
                result.push(nameList[j]);
            }
        }
        return result;
    }

    public render (ctx: any): void {
        // 绘制透明背景
        ctx.drawImage(this.backgroundImg, this.x, this.y, this.width, this.height);
        // 绘制'获奖名单'图片
        ctx.drawImage(this.titleImg, this.x + (this.width - this.titleImgOpt.width) / 2, this.titleImgOpt.marginTop, this.titleImgOpt.width, this.titleImgOpt.height);
        // 绘制 奖励区
        this.prizeLevels.forEach( (item: any) => {
            item.render(ctx);
        });
    }
}