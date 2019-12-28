/**
 * 标准键盘布局
 * ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 * │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 * └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 * │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
 * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 * │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 * │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 * ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 * │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 * ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 * │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 * └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 */


(function () {

    /**
     * 构造函数
     */
    let Game = window.Game = function (params) {
        // 传参
        this.id = params.id;
        this.config = params.config;
        // 获取
        this.can = document.getElementById(this.id);
        this.ctx = this.can.getContext('2d');
        // 初始化
        this._init();
        // 基本尺寸
        this.padding_left = 20;
        this.padding_right = 20;
        this.padding_bottom = 40;
        // 计算行
        this.row_amount = 10;// 行
        this.col_amount = 8;// 列
        // 世界的宽度
        this.map_width = this.can.width - this.padding_left - this.padding_right;
        // 每个小元素的宽度，高度
        this.block_wh = this.map_width / this.col_amount;
        // 计算出世界高度
        this.map_height = this.block_wh * this.row_amount;
        // 基准点
        this.baseX = this.padding_left;
        this.baseY = this.can.height - this.padding_bottom - this.map_height;



        // 加载资源
        let _this = this;
        this._loadResource(function () {
            _this._start();
        })
    };

    /**
     * 初始化
     */
    Game.prototype._init = function () {
        // 适配宽高
        let windowW = document.documentElement.clientWidth;
        let windowH = document.documentElement.clientHeight;
        //
        if (windowW > 414) {
            windowW = 414;
        } else if (windowW < 320) {
            windowW = 320
        }
        if (windowH > 700) {
            windowH = 700;
        } else if (windowH < 500) {
            windowH = 500;
        }
        this.can.width = windowW;
        this.can.height = windowH;
    };

    /**
     * loadResource
     */
    Game.prototype._loadResource = function (callback) {
        // 存储
        this.R = {};
        let _this = this;
        // 加载器
        let count = 0;// 计数器
        // ajax
        let xhr = new XMLHttpRequest();
        xhr.open("GET", this.config, true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let imagesArr = JSON.parse(xhr.response).images;
                    for (let i = 0; i < imagesArr.length; i++) {
                        _this.R[imagesArr[i].name] = new Image();
                        _this.R[imagesArr[i].name].src = imagesArr[i].src;
                        _this.R[imagesArr[i].name].onload = function () {
                            count++;
                            _this._clear();
                            _this.ctx.font = "30px 黑体";
                            _this.ctx.textAlign = "center";
                            _this.ctx.fillText("正在加载资源：" + count + "/" + imagesArr.length, _this.can.width/2, _this.can.height/2);
                            //
                            if (count = imagesArr.length) {
                                // 所有图片加载完毕
                                callback && callback();
                            }
                        };
                    }
                }
            }
        };
    };

    /**
     * 开始
     */
    Game.prototype._start = function () {
        // 帧
        this.frame = 0;
        // 变量
        let _this = this;
        // 开始游戏前，选择多少个图片（图片决定难度）
        this.blockTypeAmount = 5;
        // 获取所有图片数组
        this.blockArr = [];
        for (key in this.R) {
            if (this.R.hasOwnProperty(key)) {
                let reg = /^i_/ig;
                if (reg.test(key)) {
                    this.blockArr.push(this.R[key]);
                }
            }
        }
        // 选择样本
        this.blockImages = _.sample(this.blockArr, this.blockTypeAmount);
        //
        this.b = new Block(0, 0, 0);

        // 定时器
        this.timer = window.setInterval(function () {
            // 清空
            _this._clear();
            // 帧编号++
            _this.frame++;
            // 背景
            _this.ctx.drawImage(_this.R["bg"], 0, 0, _this.can.width, _this.can.height);
            // 游戏区域
            _this.ctx.save();
            _this.ctx.globalAlpha = 0.6;
            _this.ctx.fillRect(_this.baseX, _this.baseY, _this.map_width, _this.map_height);
            _this.ctx.restore();
            // 图
            //_this.ctx.drawImage(_this.blockImages[0], _this.baseX, _this.baseY, _this.block_wh - 2, _this.block_wh - 2);
            //
            _this.b.update();
            _this.b.render();

            // 编写帧编号
            _this.ctx.fillStyle = "#abcdef";
            _this.ctx.textAlign = "left";
            _this.ctx.font = "16px arial";
            let text = "frames : " + _this.frame;
            _this.ctx.fillText(text, 10, 20);

        }, 1000/60);
    };

    /**
     * 清屏
     */
    Game.prototype._clear = function () {
        this.ctx.clearRect(0, 0, this.can.width, this.can.height);
    };

}) (window);



/**
 *  【爱前端中高级课程canvas】01_消消乐游戏开发-Game类
 *  架构
 *  定位
 *  图片样本
 *
 *
 *
 */