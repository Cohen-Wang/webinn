import IElement from "../Element/IElement"
import Point from "../Element/Point"
import { SolidText, ContourText } from "../Element/Text"
import { MyImage } from "../Element/MyImage"
import { WinnerList } from "../Component/WinnerList"


let _random = function (min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
};


// 动画步骤
enum animationStep {
    noAnimation = 0,
    treasureBox = 1,
    boom = 2,
    text = 3,
    nameBlink = 4,
}


export class TreasureBoxDown {
    protected can: any;
    public prizeLevel: Array<any>;
    public nameList: Array<string>;
    // 宝箱实例 // 这接口 怎么定义？？？
    public treasureBoxInstance: any = null;
    // 宝箱属性
    public treasureBox: {
        oImg: any,
        x: number,
        y: number,
        width: number,
        height: number,
        opacity: number,
        scale: number,
        duration: number,
    } = {
        oImg: null,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        opacity: 1,
        scale: 1,
        duration: 60,// 单位：帧
    };
    // 宝箱运动
    public treasureBoxFrame: number = 0;
    // 宝箱属性
    public treasureBoxSpeedY: number = 0;
    public treasureBoxSpeedOpacity: number = 0;
    // 爆炸
    public boom: any = {};
    public boomStep: number = 0;
    // 文字
    public textInstance: any;// 文字实例
    // 文字属性
    public text: {
        fontSize: number,
        color: string,
        fontWeight: number | string,
        duration: number,
    } = {
        fontSize: 24,
        color: '#000',
        fontWeight: 600,
        duration: 60,
    };
    public textOnMove: boolean = false;
    // 文字移动
    public textSpeedX: number = 0;
    public textSpeedY: number = 0;
    public textFontSizeSpeed: number = 0;
    public textFontWeightSpeed: number = 0;
    public textFrame: number = 0;
    // 历史
    public history: {
        x: number;
        y: number;
        fontSize: number;
        color: string;
    } = {
        x: 0,
        y: 0,
        fontSize: 24,
        color: '#000',
    };
    public historyPoint: Array<any> = [];
    protected histories: Array<IElement> = [];
    public lastIndex: number = 0;

    // 闪烁名字
    public nameBlinks: Array<SolidText> = [];
    public nameBlink: {
        fontSize: number,
        fontWeight: number,
        color: string,
    } = {
        fontSize: 40,
        fontWeight: 600,
        color: '#000',
    };
    // 获奖名单
    public winnerListOpt: any;// 类属性传参
    public winnerListInstance: any;// 实例

    //
    public targetColor: string = '#000';

    // 动画
    public animationStep: number = animationStep.noAnimation;
    // 事件
    public event: any = null;

    constructor (options: any) {
        this.can = options.can;
        this.prizeLevel = options.prizeLevel;
        this.nameList = options.nameList;

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
        this.treasureBox.duration = options.treasureBox.duration || 60;
        // 爆炸图片
        this.boom.oImg = options.boom.oImg;
        // 出生文字
        if (!!options.text) {
            typeof options.text.fontSize !== 'undefined' && (this.text.fontSize = options.text.fontSize);
            typeof options.text.color !== 'undefined' && (this.text.color = options.text.color);
            typeof options.text.duration !== 'undefined' && (this.text.duration = options.text.duration);
        }
        // 历史
        // if (!!options.history) {
        //     typeof options.history.x !== 'undefined' && (this.history.x = options.history.x);
        //     typeof options.history.y !== 'undefined' && (this.history.y = options.history.y);
        //     typeof options.history.fontSize !== 'undefined' && (this.history.fontSize = options.history.fontSize);
        //     typeof options.history.color !=='undefined' && (this.history.color = options.history.color);
        // }
        // 闪烁文字
        if (!!options.nameBlink) {
            typeof options.nameBlink.fontSize !== 'undefined' && (this.nameBlink.fontSize = options.nameBlink.fontSize);
            typeof options.nameBlink.fontWeight !== 'undefined' && (this.nameBlink.fontWeight = options.nameBlink.fontWeight);
            typeof options.nameBlink.color !=='undefined' && (this.nameBlink.color = options.nameBlink.color);
        }
        this.winnerListOpt = {
            backgroundImg: options.winnerList.backgroundImg,
            titleImg: options.winnerList.titleImg,
            levelImg: options.winnerList.levelImg,
            x: options.winnerList.x,
            y: options.winnerList.y,
            width: options.winnerList.width,
            height: options.winnerList.height,
        };

        // 检查用户名单和奖励等级长度
        // if (!this._checkLengthBetweenPrizeLevelAndNameList()) {
        //     alert('传入的用户名单和奖励等级长度不一样');
        // }

        // 实例化获奖名单
        this._initWinnerList();
        // 由于可能从本地获取老数据，所以要重新过滤数据
        this.filterFromLocalStorage();
        // 初始化宝箱
        this.createTreasureBox();
        // 初始化文字
        this.createText();
        // 添加按钮点击事件
        this.bindKeyDown();
    }

    // 检查传入的名单 和 获奖等级是否一致
    // private _checkLengthBetweenPrizeLevelAndNameList (): boolean {
    //     let nameListLength: number = this.nameList.length;
    //     let prizeLevelLength: number = 0;
    //     this.prizeLevel.forEach((item: Array<any>)=> {
    //         item.forEach((num: number)=> {
    //             prizeLevelLength += num;
    //         })
    //     });
    //     return nameListLength === prizeLevelLength;
    // }

    // 实例化获奖名单
    private _initWinnerList (): void {
        let options = {
            backgroundImg: this.winnerListOpt.backgroundImg,
            titleImg: this.winnerListOpt.titleImg,
            levelImg: this.winnerListOpt.levelImg,
            x: this.winnerListOpt.x,
            y: this.winnerListOpt.y,
            width: this.winnerListOpt.width,
            height: this.winnerListOpt.height,
            prizeLevel: this.prizeLevel,
        };
        this.winnerListInstance = new WinnerList(options);

        this.historyPoint = this.winnerListInstance.getAllNameList();
        this.lastIndex = this.historyPoint.length - 1;
    }

    // 由于从本地获取了历史数据，所以导致原生数据的变化
    protected filterFromLocalStorage (): void {
        let arr = TreasureBoxDown.getLocalHistory();
        if (!!arr) {
            this.createHistories(arr);
            //console.log('history:', this.histories);
            this.distinctNameList(arr);
            //console.log('nameList:', this.nameList);
            this.deleteHistoryBornPoint(arr);
            //console.log('historyPoint:', this.historyPoint);
            this.lastIndex = this.historyPoint.length - 1;
        }
    }

    static getLocalHistory (): Array<any> {
        let lottery_history: string | null = window.localStorage.getItem('lottery_history');
        return !!lottery_history ? JSON.parse(lottery_history) : [];
    }

    protected createHistories (localString: any) {
        for (let i = 0, len = localString.length; i < len; i++) {
            this.histories.push(new SolidText(localString[i]));
        }
    }

    protected distinctNameList (localString: any) {
        for (let i = 0, len = localString.length; i < len; i++) {
            let text = localString[i].text;
            this.nameList.splice(this.nameList.indexOf(text), 1);
        }
    }

    // 添加按钮点击事件
    public bindKeyDown () {
        window.addEventListener('keydown', function (e: any) {
            if (e.shiftKey && e.ctrlKey && e.keyCode === 13) {
                console.log(e);
                window.localStorage.clear();
                alert('删除成功，请刷新');
            }
        })
    }

    protected deleteHistoryBornPoint (localString: any) {
        for (let i = 0, len = localString.length; i < len; i++) {
            this.historyPoint.pop();
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
        // console.log('historyPoint:', this.historyPoint);
        // console.log('nameList:', this.nameList);
        // console.log('lastIndex:', this.lastIndex);


        if (this.animationStep === animationStep.noAnimation && this.lastIndex >= 0) {
            //this.TreasureBoxMove();
            this.animationStep = animationStep.nameBlink;
        }
        else if (this.animationStep === animationStep.nameBlink) {
            // 清空
            this.nameBlinks = [];
            // 改变状态
            this.animationStep = animationStep.treasureBox;
            // 宝箱动
            this.TreasureBoxMove();
        }
    }

    // 实例化当前中奖人的名字
    public createText (): void {
        let options = {
            x: this.can.width / 2,
            y: this.can.height / 2,
            fontSize: this.text.fontSize,
            fontWeight: this.text.fontWeight,
            color: this.text.color,
            //text: text,// 初始化，不需要赋值text
        };

        this.textInstance = new SolidText(options);
    }

    // 重置文字属性
    public resetText (): void {
        this.textInstance.x = this.can.width / 2;
        this.textInstance.y = this.can.height / 2;
        this.textInstance.fontSize = this.text.fontSize;
        this.textInstance.color = this.text.color;
    }

    // 文字运动
    public moveTo () {
        this.targetColor = (this.lastIndex !== 0) ? this.historyPoint[this.lastIndex].color : this.historyPoint[this.lastIndex].strokeColor;

        let targetX = this.historyPoint[this.lastIndex]['x'];
        let targetY = this.historyPoint[this.lastIndex]['y'];
        let targetFontSize = this.historyPoint[this.lastIndex]['fontSize'];
        let targetFontWeight = this.historyPoint[this.lastIndex]['fontWeight'];

        let distanceX = targetX - this.textInstance.x;
        let distanceY = targetY - this.textInstance.y;
        let distanceFontSize = targetFontSize - this.textInstance.fontSize;
        let distanceFontWeight = targetFontWeight - this.textInstance.fontWeight;

        let textSpeedX = distanceX / this.text.duration;
        let textSpeedY = distanceY / this.text.duration;
        let textFontSizeSpeed = distanceFontSize / this.text.duration;
        let textFontWeightSpeed = distanceFontWeight / this.text.duration;

        this.textSpeedX = textSpeedX;
        this.textSpeedY = textSpeedY;
        this.textFontSizeSpeed = textFontSizeSpeed;
        this.textFontWeightSpeed = textFontWeightSpeed;

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

        let textSpeedY = distanceY / this.treasureBox.duration;
        let speedOpacity = distanceOpacity / this.treasureBox.duration;

        this.treasureBoxSpeedY = textSpeedY;
        this.treasureBoxSpeedOpacity = speedOpacity;
    }

    // 变化
    public update () {
        let _this = this;
        if (this.animationStep === animationStep.nameBlink) {
            if (this.nameBlinks.length < 10 && Math.random() < 0.5) {
                let randomIndex = ~~_random(0, this.nameList.length);// 注意：Math.random()结果是0 ~ 1（不包含）
                let text = this.nameList[randomIndex];// 注意这个0
                let options = {
                    x: this.can.width / 2,
                    y: this.can.height / 2,
                    fontSize: this.nameBlink.fontSize,
                    fontWeight: this.nameBlink.fontWeight,
                    color: this.nameBlink.color,
                    speedX: _random(-20, 20),
                    speedY: _random(-20, 20),
                    speedOpacity: _random(0.05, 0.1),
                    text: text,
                };

                this.nameBlinks.push(new SolidText(options));
            }

            for (let i = 0, len = this.nameBlinks.length; i < len; i++) {
                this.nameBlinks[i].x += this.nameBlinks[i].speedX;
                this.nameBlinks[i].y += this.nameBlinks[i].speedY;
                this.nameBlinks[i].opacity -= this.nameBlinks[i].speedOpacity;
            }

            for (let i = 0, len = this.nameBlinks.length; i < len; i++) {
                let item = this.nameBlinks[i];
                if (item.opacity <= 0) {
                    this.nameBlinks.splice(i, 1);
                    len--;
                    i--
                }
            }
        }


        if (this.animationStep === animationStep.treasureBox) {
            this.treasureBoxFrame++;
            if (this.treasureBoxFrame > this.treasureBox.duration) {
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
            if (this.textFrame > this.text.duration) {
                // 添加历史
                this.histories.push(new SolidText({
                    x: this.textInstance.x,
                    y: this.textInstance.y,
                    color: this.targetColor,
                    fontSize: this.textInstance.fontSize,
                    text: this.textInstance.text,
                }));
                // 保存本地
                window.localStorage.setItem('lottery_history', JSON.stringify(this.histories));
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
            this.textInstance.fontWeight += this.textFontWeightSpeed;
        }
    }

    // 总渲染
    public render (ctx: any): void {
        // 先渲染'获奖名单'
        this.winnerListInstance.render(ctx);
        // 再渲染'抽奖动画'
        if (this.animationStep === animationStep.nameBlink) {
            this.renderNameBlinks(ctx);
        }
        else if (this.animationStep === animationStep.treasureBox) {
            this.treasureBoxInstance.render(ctx);
        }
        else if (this.animationStep === animationStep.boom) {
            ctx.drawImage(this.boom.oImg, 185*~~(this.boomStep/2), 0, 185, 159, this.can.width/2 - 100, this.can.height/2 - 100, 200, 200);
        }
        else if (this.animationStep === animationStep.text) {
            this.textInstance.render(ctx);
        }
        // 渲染历史
        this.renderHistories(ctx);
    }

    public renderHistories (ctx: any) {
        this.histories.forEach( (item: any) => {
            item.render(ctx);
        });
    }

    // 渲染闪烁名字
    public renderNameBlinks (ctx: any) {
        this.nameBlinks.forEach( (item: any) => {
            item.render(ctx);
        });
    }
}