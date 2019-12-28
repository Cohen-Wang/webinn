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

    window.CYBER = window.CYBER || {};
    
    
    CYBER.CanvasConnection = function (params) {
        // 传参
        this.id = params.id;
        // 获取
        this.oContainer = document.getElementById(this.id);
        this.oContainerWidth = this.oContainer.offsetWidth;
        this.oContainerHeight = this.oContainer.offsetHeight;
        // 创建
        this.can = document.createElement('canvas');
        this.ctx = this.can.getContext('2d');
        // 初始化
        this.init();
        // 变量
        this.num = 50;
        this.speed = 3;
        this.r = 2;
        this.points = [];
        let _this = this;
        // 创建point
        this.createPoint(this.num);
        //
        this.timer = window.setInterval(function () {
            _this.start();
            
        }, 1000/60)
    };
    
    /**
     * 初始化
     */
    CYBER.CanvasConnection.prototype.init = function () {
        this.can.width = this.oContainerWidth;
        this.can.height = this.oContainerHeight;
        this.can.style.backgroundColor = '#000';
        this.oContainer.appendChild(this.can);
    };
    
    function random (m, n) {
        return Math.random() * (n - m) + m;
    }
    
    /**
     * 创建粒子
     */
    CYBER.CanvasConnection.prototype.createPoint = function (num) {
        let _this = this;
        for (let i = 0; i < num; i++) {
            this.points.push({
                x : random(0, _this.can.width),
                y : random(0, _this.can.height),
                speedX : (Math.random() - 0.5) * this.speed,
                speedY : (Math.random() - 0.5) * this.speed,
                r : this.r,
                color : 'rgb('+~~random(0,255)+','+~~random(0,255)+','+~~random(0,255)+')',
            })
        }
    };
    
    /**
     * 画圆
     */
    CYBER.CanvasConnection.prototype.drawCircle = function (x, y, r, color) {
        color = color  || 'red';
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    };
    
    /**
     * 画直线
     */
    CYBER.CanvasConnection.prototype.drawLine = function (x1, y1, x2, y2, color) {
        color = color  || 'abcdef';
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 0.2;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
    };
    
    /**
     * 更新
     */
    CYBER.CanvasConnection.prototype.update = function () {
        
        for (let i = 0; i < this.points.length; i++) {
            if (this.points[i].x >= this.can.width || this.points[i].x <= 0)  this.points[i].speedX = -this.points[i].speedX;
            if (this.points[i].y >= this.can.height || this.points[i].y <= 0)  this.points[i].speedY = -this.points[i].speedY;
            this.points[i].x += this.points[i].speedX;
            this.points[i].y += this.points[i].speedY;
            
            // j = i + 1;
            for (let j = i + 1; j < this.points.length; j++) {
                if ( Math.sqrt(Math.pow(this.points[i].x - this.points[j].x, 2) + Math.pow(this.points[i].y - this.points[j].y, 2)) <= 100) {
                    this.drawLine(this.points[i].x, this.points[i].y, this.points[j].x, this.points[j].y, '#fff');
                }
            }
        }
    };
    
    /**
     * 渲染
     */
    CYBER.CanvasConnection.prototype.render = function () {
        for (let i = 0; i < this.points.length; i++) {
            this.drawCircle(this.points[i].x, this.points[i].y, this.points[i].r, this.points[i].color)
        }
    };
    
    /**
     * 执行
     */
    CYBER.CanvasConnection.prototype.start = function () {
        // 清空
        this.ctx.clearRect(0, 0, this.can.width, this.can.height);
        //
        this.update();
        this.render();
    };
    
    
}) (window);