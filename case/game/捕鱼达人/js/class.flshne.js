/* 标准键盘布局
┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
│Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
└───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
│~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
│ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
│ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
│ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
│ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
└─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
*/

(function () {

    /**
     * 构造
     */
    let Fishne = window.Fishne = function (params) {
        // 传参
        this.id = params.id;
        this.url = params.url;
        // 获取
        this.can = document.getElementById(this.id);
        this.ctx = this.can.getContext('2d');
        // 变量
        let _this = this;
        this.fno = 0;// 帧数
        this.bulletArr = [];// 存储子弹
        // 初始化
        this.init();
        // 加载
        this.uploadAllResource(function () {
            //
            _this.start();
            // 绑定
            _this.bindEvent();
        });
    };
    
    /**
     * 初始化
     * canvas 大小
     * canvas 背景图铺平
     */
    Fishne.prototype.init = function () {
        this.can.width = window.innerWidth;
        this.can.height = (window.innerHeight > 900) ? window.innerHeight : 900;
        this.can.style.backgroundColor = '#000';
        this.can.style.backgroundImage = 'url(images/bg.jpg)';
        this.can.style.backgroundPosition = 'center center';
        this.can.style.backgroundSize = '100% 100%';
    };
    
    /**
     * 加载
     */
    Fishne.prototype.uploadAllResource = function (callback) {
        //
        this.R = {};
        let alreadyDoneNumber = 0;
        let _this = this;
        //
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let resourceObj = JSON.parse(xhr.response);
                    for	(let i = 0 ; i < resourceObj.images.length ; i ++) {
                        //创建一个同名的key
                        _this.R[resourceObj.images[i].name] = new Image();
                        //请求
                        _this.R[resourceObj.images[i].name].src = resourceObj.images[i].url;
                        //监听
                        _this.R[resourceObj.images[i].name].onload = function(){
                            alreadyDoneNumber ++;
                            //清屏
                            _this.ctx.clearRect(0 , 0 , _this.can.width , _this.can.height);
                            //提示文字
                            let txt = '正在加载' + alreadyDoneNumber + '/' + resourceObj.images.length + ",请稍后";
                            _this.ctx.textAlign = "center";
                            _this.ctx.font = '30px 宋体';
                            _this.ctx.fillText(txt , _this.can.width/2 , _this.can.height * (1-0.618) );
                            //判断是否已经全部加载完毕
                            if (alreadyDoneNumber === resourceObj.images.length) {
                                callback();//callback.call(_this);// ❤❤❤❤
                            }
                        }
                    }
                }
            }
        }
    };
    
    /**
     * 开始
     */
    Fishne.prototype.start = function () {
        // 炮台
        this.battery = new Battery();
        // 子弹
        this.bullet = new Bullet();
        //
        let _this = this;
        // 定时器
        this.timer = window.setInterval(function () {
            // 清空
            _this.ctx.clearRect(0, 0, _this.can.width, _this.can.height);
            // 画炮台
            _this.battery.render();
            // 发射的子弹
            _this.bullet.render();
            // 记录帧
            _this.writeText('fno : ' + _this.fno, 100, 40, 'orange', 30);
            _this.fno++;
        }, 1000/60);
    };

    /**
     * 写字
     * @param text
     * @param x
     * @param y
     * @param color
     * @param fontSize
     */
    Fishne.prototype.writeText = function (text, x, y, color, fontSize) {
        color = color || 'red';
        fontSize = fontSize || '20px';
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.font = fontSize + 'px Arial';
        this.ctx.fillText(text, x, y);
        this.ctx.fill();
        this.ctx.closePath();
    };

    /**
     * 绑定
     */
    Fishne.prototype.bindEvent = function () {
        let _this = this;
        this.can.onmouseover = function () {
            // 旋转炮塔
            this.onmousemove = function (event) {
                let oEvent = event || window.event;
                let x = oEvent.clientX;
                let y = oEvent.clientY;
                // 计算angel, 不需要这里渲染
                _this.battery.angel = -(Math.atan2(x - _this.battery.x, y - _this.battery.y) + 180 * Math.PI / 180);
            };

            // 发射子弹
            this.onmousedown = function (event) {
                let oEvent = event || window.event;
                let x = oEvent.clientX;
                let y = oEvent.clientY;
                //
                _this.bulletArr.push({
                    x : _this.battery.x,
                    y : _this.battery.y,
                    startX : x,
                    startY : y,
                    iRatio : 0,
                    angel : _this.battery.angel,
                    curPoy : 1,// 当前显示的图片位置
                })

            };
        }
    };

}) (window);