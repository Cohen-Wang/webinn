import IElement from "../Element/IElement"
import Point from "../Element/Point"
import { SolidText } from "../Element/Text"
import { MyImage } from "../Element/MyImage"


let _random = function (min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
};


// 宝箱传参数据类型接口
interface ITreasureBox {
    oImg: any;// Image类型
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    opacity?: number;
    scale?: number;
}


// 动画步骤
enum animationStep {
    noAnimation = 0,
    treasureBox = 1,
    boom = 2,
    text = 3,
}


export class TreasureBoxDown {
    protected can: any;
    public prizeLevel: Array<any>;
    public nameList: Array<string>;

    // 宝箱
    public treasureBox: any | ITreasureBox = {};// 宝箱实例 // 这接口 怎么定义？？？
    public treasureBoxInstance: any = null;
    // 宝箱属性
    public treasureBoxSpeedY: number = 0;
    public treasureBoxSpeedOpacity: number = 0;
    // 宝箱运动
    public treasureBoxFrame: number = 0;
    public treasureBoxDuration: number = 100;

    // 爆炸
    public boom: any = {};
    public boomStep: number = 0;

    // 第几等奖几个字
    public levelTextPoints: any = [];
    public levelTexts: any = [];

    // 文字
    public textInstance: any;// 文字实例
    // 文字属性
    public textFontSize: number;
    public textColor: string;
    public textOnMove: boolean = false;
    // 文字移动
    public textSpeedX: number = 0;
    public textSpeedY: number = 0;
    public textFontSizeSpeed: number = 0;
    public textFrame: number = 0;
    public textDuration: number = 100;

    // 历史
    public historiesX: number;
    public historiesY: number;
    public historyFontSize: number;
    public historyPoint: Array<Point> = [];
    public lastIndex: number;
    protected histories: Array<IElement> = [];

    // 动画
    public animationStep: number = animationStep.noAnimation;
    // 事件
    public event: any = null;

    constructor (options: any) {
        this.can = options.can;
        this.prizeLevel = options.prizeLevel || [[1], [1], [1]];
        this.nameList = options.nameList || ['kobe', 'james', 'carl'];

        // 宝箱
        this.treasureBox.oImg = options.treasureBox.oImg;
        let treasureBoxImageInfo = {
            width: this.treasureBox.oImg.naturalWidth,
            height: this.treasureBox.oImg.naturalHeight,
        };
        this.treasureBox.width = options.treasureBox.width || 100;
        this.treasureBox.height = options.treasureBox.height || this.treasureBox.width * treasureBoxImageInfo.height / treasureBoxImageInfo.width;
        this.treasureBox.x = options.treasureBox.x || (this.can.width - this.treasureBox.width) / 2;
        this.treasureBox.y = options.treasureBox.y || (this.can.height - this.treasureBox.height) / 2;
        this.treasureBox.opacity = options.treasureBox.opacity || 1;
        this.treasureBox.scale = options.treasureBox.scale || 1;

        // 爆炸
        this.boom.oImg = options.boom.oImg;

        // 出生文字
        this.textFontSize = options.textFontSize || 60;
        this.textColor = options.color || '#000000';
        //
        this.historiesX = options.historiesX || 0;
        this.historiesY = options.historiesY || 0;
        this.historyFontSize = options.historyFontSize || 30;
        this.lastIndex = this.nameList.length - 1;

        // 检查用户名单和奖励等级长度
        if (!this._checkLengthBetweenPrizeLevelAndNameList()) {
            alert('传入的用户名单和奖励等级长度不一样');
        }
        // 创建历史文字的x， y
        this.createHistoryBornPoint();
        // 初始化宝箱
        this.createTreasureBox();
        // 初始化文字
        this.createText();
        // 创建第几等奖
        this.createLevelText()
    }

    // 检查传入的名单 和 获奖等级是否一致
    private _checkLengthBetweenPrizeLevelAndNameList (): boolean {
        let nameListLength: number = this.nameList.length;
        let prizeLevelLength: number = 0;
        this.prizeLevel.forEach((item: Array<any>)=> {
            item.forEach((num: number)=> {
                prizeLevelLength += num;
            })
        });
        return nameListLength === prizeLevelLength;
    }

    // 创建histories对象的出生点
    public createHistoryBornPoint () {
        let margin = 50;// 每行之间的间距
        for (let i = 0, rowLength = this.prizeLevel.length; i < rowLength; i++) {
            for (let j = 0, colLength = ~~this.prizeLevel[i] + 1; j < colLength; j++) {// 注意：+1是为了写【第n等奖】
                let x = this.historiesX + j * 170;
                let y = this.historiesY + i * (this.historyFontSize + margin);
                if (j === 0) {
                    this.levelTextPoints.push(new Point(x, y));
                } else {
                    this.historyPoint.push(new Point(x, y));
                }
            }
        }
    }

    public createLevelText (): void {
        for (let i = 0; i < this.levelTextPoints.length; i++) {
            let options = {
                x: this.levelTextPoints[i].x,
                y: this.levelTextPoints[i].y,
                text: '第' + (i+1) + '等奖',
                fontSize: 40,
                color: '#000000',
            };

            this.levelTexts.push(new SolidText(options));
        }
    }

    // 添加事件
    public bindEvent (): void {
        this.event = this.startShow.bind(this);
        this.can.addEventListener('click', this.event);
    }

    // 移除事件
    public removeEvent (): void {
        this.can.removeEventListener('click', this.event);
        this.event = null;
    }

    // 开始动画显示
    public startShow (): void {
        if (!this.animationStep && this.nameList.length > 0) {
            this.TreasureBoxMove();
            this.animationStep = animationStep.treasureBox;
        }
    }

    // 实例化当前中奖人的名字
    public createText (): void {
        let options = {
            x: this.can.width / 2,
            y: this.can.height / 2,
            fontSize: this.textFontSize,
            color: this.textColor,
            //text: text,// 初始化，不需要赋值text
        };

        this.textInstance = new SolidText(options);
    }
    // 重置文字属性
    public resetText (): void {
        this.textInstance.x = this.can.width / 2;
        this.textInstance.y = this.can.height / 2;
        this.textInstance.fontSize = this.textFontSize;
        this.textInstance.color = this.textColor;
    }
    // 文字运动
    public moveTo () {
        let targetX = this.historyPoint[this.lastIndex]['x'];
        let targetY = this.historyPoint[this.lastIndex]['y'];
        let targetFontSize = this.historyFontSize;

        let distanceX = targetX - this.textInstance.x;
        let distanceY = targetY - this.textInstance.y;
        let distanceFontSize = targetFontSize - this.textInstance.fontSize;

        let textSpeedX = distanceX / this.textDuration;
        let textSpeedY = distanceY / this.textDuration;
        let textFontSizeSpeed = distanceFontSize / this.textDuration;

        this.textSpeedX = textSpeedX;
        this.textSpeedY = textSpeedY;
        this.textFontSizeSpeed = textFontSizeSpeed;

        this.lastIndex--;
        this.textFrame = 0;
        this.textOnMove = true;
    }
    // 实例化宝箱
    public createTreasureBox (): void {
        let imgWidth = 200;
        let options: any = {
            oImg: this.treasureBox.oImg,
            x: (this.can.width - imgWidth) / 2,
            y: 0,
            width: imgWidth,
            height: imgWidth * this.treasureBox.oImg.height / this.treasureBox.oImg.width,
            opacity: 0.2,
        };
        this.treasureBoxInstance = new MyImage(options);
    }
    // 重置宝箱属性
    public resetTreasureBox (): void {
        let imgWidth = 200;
        this.treasureBoxInstance.x = (this.can.width - imgWidth) / 2;
        this.treasureBoxInstance.y = 0;
        this.treasureBoxInstance.width = imgWidth;
        this.treasureBoxInstance.height = imgWidth * this.treasureBox.oImg.height / this.treasureBox.oImg.width;
        this.treasureBoxInstance.opacity = 0.2;
    }
    // 图片运动
    public TreasureBoxMove (): void {
        let targetY = (this.can.height - this.treasureBoxInstance.height) / 2;
        let targetOpacity = 1;

        let distanceY = targetY - this.treasureBoxInstance.y;
        let distanceOpacity = targetOpacity - this.treasureBoxInstance.opacity;

        let textSpeedY = distanceY / this.treasureBoxDuration;
        let speedOpacity = distanceOpacity / this.treasureBoxDuration;

        this.treasureBoxSpeedY = textSpeedY;
        this.treasureBoxSpeedOpacity = speedOpacity;
    }

    public render (ctx: any): void {
        if (this.animationStep === animationStep.treasureBox) {
            this.treasureBoxInstance.render(ctx);
        }
        else if (this.animationStep === animationStep.boom) {
            ctx.drawImage(this.boom.oImg, 185*~~(this.boomStep/2), 0, 185, 159, this.can.width/2 - 100, this.can.height/2 - 100, 200, 200);
        }
        else if (this.animationStep === animationStep.text) {
            this.textInstance.render(ctx);
        }
    }

    public update () {
        let _this = this;
        if (this.animationStep === animationStep.treasureBox) {
            this.treasureBoxFrame++;
            if (this.treasureBoxFrame > this.treasureBoxDuration) {
                // 重置图片属性
                this.resetTreasureBox();
                this.treasureBoxFrame = 0;
                this.animationStep = animationStep.boom;
                (document.getElementById('boom') as any).pause();
                (document.getElementById('boom') as any).play();
            }
            this.treasureBoxInstance.y += this.treasureBoxSpeedY;
            this.treasureBoxInstance.opacity += this.treasureBoxSpeedOpacity;
        }

        if (this.animationStep === animationStep.boom) {
            this.boomStep++;
            if (this.boomStep > 7 * 2) {
                // 还原
                this.boomStep = 0;
                // 赋值文字
                let randomIndex = ~~_random(0, this.nameList.length);// 注意：Math.random()结果是0 ~ 1（不包含）
                let text = this.nameList.splice(randomIndex, 1)[0];// 注意这个0
                this.textInstance.text = text;
                // 进入下一阶段
                this.animationStep = animationStep.text;
                // 2秒后运动
                window.setTimeout(function () {
                    _this.moveTo();
                }, 2000);
                return;
            }
        }

        if (this.animationStep === animationStep.text && this.textOnMove) {
            this.textFrame++;
            if (this.textFrame > this.textDuration) {
                // 添加历史
                this.histories.push(new SolidText({
                    x: this.textInstance.x,
                    y: this.textInstance.y,
                    color: this.textInstance.color,
                    fontSize: this.textInstance.fontSize,
                    text: this.textInstance.text,
                }));
                // reset
                this.resetText();
                //
                this.textOnMove = false;
                this.animationStep = animationStep.noAnimation;
                this.textFrame = 0;
                return;
            }
            this.textInstance.x += this.textSpeedX;
            this.textInstance.y += this.textSpeedY;
            this.textInstance.fontSize += this.textFontSizeSpeed;
        }
    }

    public renderHistories (ctx: any) {
        this.histories.forEach( (item: any) => {
            item.render(ctx);
        });
    }

    public renderLevelText (ctx: any) {
        this.levelTexts.forEach( (item: any) => {
            item.render(ctx);
        });
    }
}