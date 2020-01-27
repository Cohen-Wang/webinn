import CanvasFactory from "../Sence/CanvasFactory"
import { LOTTERY_SHOW_CONFIG } from "../../../config"
import {RayLogo} from "../Sence/RayLogo";

let Stats = require("Stats-js");

/**
 * 并不是所有设备的绘制时间间隔是1000/60 ms, 以及上面并木有cancel相关方法，所以，就有下面这份更全面的兼容方法：
 */
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = (window as any)[(vendors[x] + 'RequestAnimationFrame')];
        window.cancelAnimationFrame = (window as any)[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
            (window as any)[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());


export class SceneController {
    public can: any;
    public ctx: any;

    public resConfig: any;
    public resources: any;

    public LoadScene: any;
    public CutScene: any;
    public LotteryScene: any;
    public LotteryShow: any;

    public loadSceneInstance: any;
    public cutSceneInstance: any;
    public lotterySceneInstance: any;
    public lotteryShowInstance: any;

    public isShowStats: boolean = false;
    public stats: any;


    public lastOperationTime: any;
    public allowOvertime: number;

    public frame: number = 0;
    public timer: any;
    //
    public event: any = null;


    constructor (options: any) {
        let canvasFactory = new CanvasFactory();
        this.can = canvasFactory.getCanvas();
        this.ctx = canvasFactory.getContext();
        //
        this.resources = {};
        //
        this.resConfig = options.resConfig;

        this.LoadScene = options.LoadScene;
        this.CutScene = options.CutScene;
        this.LotteryScene = options.LotteryScene;
        this.LotteryShow = options.LotteryShow;

        this.timer = null;

        this.allowOvertime = options.allowOvertime || 60 * 1000;
        this.lastOperationTime = null;



        let _this = this;


        let loadScene = new this.LoadScene({
            can: this.can,
        });


        this.loadAllResource(options.resConfig, function (loadedNumber: number) {
            /** 加载动画 **/
            loadScene.show(loadedNumber, options.resConfig.length);
        }, function (resources: any) {

            // 实例化
            if (_this.isShowStats) {
                _this.stats = new Stats();// Stats : 帧检查
                _this.stats.showPanel(1);// 0: fps, 1: ms, 2: mb, 3+: custom
                document.body.appendChild(_this.stats.dom);
            }

            // 分别初始化'过场场景'
            _this.cutSceneInstance = new RayLogo({
                can: _this.can,
                oImg: resources.tiefan
            });

            // 初始化 抽奖方式
            _this.lotteryShowInstance = new _this.LotteryShow({
                can: _this.can,
                treasureBox: {
                    oImg: resources.treasureBox,
                    width: LOTTERY_SHOW_CONFIG.treasureBox.width,
                    height: LOTTERY_SHOW_CONFIG.treasureBox.height,
                    duration: LOTTERY_SHOW_CONFIG.treasureBox.duration,
                },
                boom: {
                    oImg: resources.boom,
                },
                prizeLevel: LOTTERY_SHOW_CONFIG.prizeLevel,
                nameList: LOTTERY_SHOW_CONFIG.nameList,
                history: LOTTERY_SHOW_CONFIG.history,
                text: LOTTERY_SHOW_CONFIG.text,
                levelText: LOTTERY_SHOW_CONFIG.levelText,
                nameBlink: LOTTERY_SHOW_CONFIG.nameBlink,
                winnerList: {
                    backgroundImg: resources.name_list_bg,
                    titleImg: resources.name_list_title,
                    levelImg: resources.prize_level_bg,
                    x: _this.can.width - resources.name_list_bg.naturalWidth,
                    y: 0,
                    width: resources.name_list_bg.naturalWidth,
                    height: _this.can.height,
                }
            });


            (document.getElementById('open-show') as any).play();// TODO
            _this.timer = window.setInterval(function () {
                _this.isShowStats && _this.stats.begin();
                let flag = _this.cutSceneInstance.render();
                if (!flag) {
                    console.log('过场动画结束', 'timer:' + _this.timer);
                    // 通知观察者
                    _this.bindEvent();
                    //
                    (document.getElementById('cut-scene') as any).play();
                    // 关闭当前
                    window.clearInterval(_this.timer);
                }
                _this.cutSceneInstance.update();
                _this.isShowStats && _this.stats.end();
            }, 1000 / 60);
        })
    }

    public loadAllResource (config: any, loadedFn?: Function, loadedAllFn?: Function): void {
        let _this = this;
        let loadedNumber: number = 0;
        // 逐一加载
        for (let i = 0, len = config.length; i < len; i++) {
            this.resources[config[i].name] = new Image();// 创建一个同名的key
            this.resources[config[i].name].src = config[i].url;// 请求
            this.resources[config[i].name].onload = function () {// 监听
                ++loadedNumber;
                loadedFn && loadedFn(loadedNumber);
                //判断是否已经全部加载完毕
                if (loadedNumber === config.length) {
                    loadedAllFn && loadedAllFn(_this.resources);// callback.call(_this);// ?
                }
            };
        }
    };

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

    // 管理抽奖动画界面
    public startShow (): void {
        (document.getElementById('cut-scene') as any).pause();
        (document.getElementById('cut-scene') as any).currentTime = 0;
        console.log('点击了点击事件');

        this.lastOperationTime = new Date();

        // 监听操作
        this.checkOperation();

        this.lotterySceneInstance = new this.LotteryScene({
            can: this.can,
            backgroundImg: this.resources.newYearBg,
            lanternImg: this.resources.newYearLantern,
        });

        // 绑定点击事件 - 生成抽奖的人名
        this.lotteryShowInstance.bindEvent();

        (document.getElementById('new-year') as any).play();

        let _this = this;
        this.timer = window.setInterval(function () {
            _this.frame++;
            // 测试开始
            _this.isShowStats && _this.stats.begin();
            // 抽奖的背景
            _this.lotterySceneInstance.render();
            _this.lotterySceneInstance.update();
            // 抽奖的展示
            _this.lotteryShowInstance.render(_this.ctx);
            _this.lotteryShowInstance.update();
            // 测试关闭
            _this.isShowStats && _this.stats.end();
        }, 1000 / 60);
        //  监听操作
        this.can.addEventListener('click', _this.changeLastOperationTime.bind(_this));
        this.can.addEventListener('mousemove', _this.changeLastOperationTime.bind(_this));
        // 取消绑定
        this.removeEvent();
    }

    // 当处于抽奖场景的时候，无任何操作超过n秒后，就会跳到过渡场景
    public checkOperation () {
        let _this = this;
        let checkOperationTimer = window.setInterval(function () {
            let nowTime: any = new Date();
            if (SceneController.isOvertime(nowTime, _this.lastOperationTime, _this.allowOvertime)) {
                //
                window.clearInterval(_this.timer);
                //
                _this.cutSceneInstance.render();
                //
                (document.getElementById('new-year') as any).pause();
                (document.getElementById('new-year') as any).currentTime = 0;
                (document.getElementById('cut-scene') as any).play();
                // 通知观察者
                _this.bindEvent();
                // 取消抽奖的点击事件
                _this.lotteryShowInstance.animationStep = 0;
                _this.lotteryShowInstance.removeEvent();
                // 关闭检查
                window.clearInterval(checkOperationTimer);
            }
        }, 1000);
    }

    static isOvertime (nowTime: any, lastTime: any, allowOvertime: number): boolean {
        return nowTime - lastTime >= allowOvertime;
    }

    public changeLastOperationTime (): void {
        this.lastOperationTime = new Date();
    }
}