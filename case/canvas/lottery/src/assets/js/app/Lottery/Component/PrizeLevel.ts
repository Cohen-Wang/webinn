import Point from "../Element/Point"
import { SolidText, ContourText } from "../Element/Text"


export class PrizeLevel {
    public backgroundImg: any;
    public title: string;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    // 是否为特等奖（文字属性不一样）
    public isSpecial: boolean;
    // 标题（如：特等奖，一等奖....）
    public titleInstance: any;
    // 名单长度
    public nameListLength: number;
    public nameListBornPoints: Array<Point> = [];
    public nameList: Array<any> = []; // ？ 应该用泛型？？？？ Array<SolidText> | Array<ContourText> = [];

    constructor (options: any) {
        this.backgroundImg = options.backgroundImg;
        this.title = options.title || '标题';
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 0;
        this.height = options.height || 0;
        //
        this.nameListLength = options.nameListLength || 1;
        this.isSpecial = options.isSpecial || false;
        // 创建标题
        this._initTitle();
        this._getNameListBornPoint();
        this._initNameList();
    }

    // 实例化标题文字
    private _initTitle (): void {
        let options = null;
        if (this.isSpecial) {
            options = {
                x: this.x + this.backgroundImg.naturalWidth / 2,
                y: this.y + 30,
                fontSize: 46,
                fontWeight: 30,
                lineWidth: 5,
                strokeColor: '#f3ea8f',
                fillColor: '#f92730',
                text: this.title,
            };
        } else {
            options = {
                x: this.x + this.backgroundImg.naturalWidth / 2,
                y: this.y + 30,
                fontSize: 28,
                fontWeight: 300,
                lineWidth: 5,
                strokeColor: '#f51230',
                fillColor: '#fee300',
                text: this.title,
            };
        }
        this.titleInstance = new ContourText(options);
    }

    // 求出出生点
    private _getNameListBornPoint (): void {
        if (this.isSpecial) {
            let x = this.x + this.backgroundImg.naturalWidth / 2;
            let y = 50;
            this.nameListBornPoints.push(new Point(x, y))
        } else {
            for (let i = 0; i < this.nameListLength; i++) {
                let x = this.x + ((!(i % 2)) ? 60 : 200) + 20;
                let y = this.y + ~~(i / 2) * 30 + 50 + 20;
                this.nameListBornPoints.push(new Point(x, y))
            }
        }
    }

    // 创建名单
    private _initNameList (): void {
        if (this.nameListBornPoints.length === 1) {
            let options = {
                x: this.x + this.width / 2,
                y: this.y + 100,
                fontSize: 44,
                fontWeight: 900,
                lineWidth: 3,
                strokeColor: '#ac0006',
                fillColor: '#ff0',
                //text: '王老五',
            };
            this.nameList.push(new ContourText(options));
        } else {
            for (let i = 0, len = this.nameListBornPoints.length; i < len; i++) {
                let options = {
                    x: this.nameListBornPoints[i].x,
                    y: this.nameListBornPoints[i].y,
                    fontSize: 28,
                    fontWeight: 500,
                    color: '#ac0006',
                    //text: '王老五',
                };
                this.nameList.push(new SolidText(options));
            }
        }
    }

    public getNameList (): Array<SolidText> {
        return this.nameList;
    }

    public render (ctx: any): void {
        // 画背景图
        ctx.drawImage(this.backgroundImg, this.x, this.y, this.width, this.height);
        // 渲染标题（特等奖，一等奖...)
        this.titleInstance.render(ctx);
        // 测试：渲染名单
        this.nameList.forEach( (item: any) => {
            item.render(ctx);
        })
    }
}