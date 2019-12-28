/*************************************
 * Author : Cohen_Wang
 * Date : 2016 - 08 - 08
 */

(function (namespace) {

    let CanvasClock = (function () {
        // 构造
        function CanvasClock (id) {
            // 传参
            this.id = id;
            //
            this.oContainer = document.getElementById(this.id);
            this.oContainerWidth = this.oContainer.offsetWidth;
            this.oContainerHeight = this.oContainer.offsetHeight;
            //
            this.can = document.createElement('canvas');
            this.ctx = this.can.getContext('2d');
            // 变量
            this.center = {
                x : this.oContainerWidth/2,
                y : this.oContainerHeight/2
            };
            this.r = 340;// 钟边框半径
            // 分的点
            this.minuteRadius = 5;// 分 点的半径
            this.distance = 300;
            let _this = this;
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            let s = d.getSeconds();
            this.hourDistance = 200;
            this.minuteDistance = 240;
            this.secondDistance = 280;
            //
            this.hourPointer = {
                x : _this.center.x + this.hourDistance * Math.cos(((h * 30 - 90) + m/2) * Math.PI/180),
                y : _this.center.y + this.hourDistance * Math.sin(((h * 30 - 90) + m/2) * Math.PI/180),
                color : '#000',
                width : 14,
            };
            this.minPointer = {
                x : _this.center.x + this.minuteDistance * Math.cos((m * 6 - 90) * Math.PI/180),
                y : _this.center.y + this.minuteDistance * Math.sin((m * 6 - 90) * Math.PI/180),
                color : '#abcdef',
                width : 12,
            };
            this.secPointer = {
                x : _this.center.x + this.secondDistance * Math.cos((s * 6 - 90) * Math.PI/180),
                y : _this.center.y + this.secondDistance * Math.sin((s * 6 - 90) * Math.PI/180),
                color : 'red',
                width : 8
            };
            //
            this.init();
            // 画钟
            this.render();
            // 定时器
            this.timer = window.setInterval(function () {
                // 清空
                _this.ctx.clearRect(0, 0, _this.can.width, _this.can.height);
                // 更新
                _this.update();
                // 渲染
                _this.render();
            }, 1000);
        }

        /**
         * 初始化
         */
        CanvasClock.prototype.init = function () {
            this.can.width = this.oContainerWidth;
            this.can.height = this.oContainerHeight;
            this.can.style.backgroundColor = '#fff';
            //
            this.oContainer.appendChild(this.can);
        };

        /**
         * 画钟
         */
        CanvasClock.prototype.drawClock = function () {
            // 画边框
            this.drawHollowCircle(this.center.x, this.center.y, this.r, 30);
            // 画原点和字
            for (let i = 0; i < 360; i++) {
                if (i % 6 === 0) {
                    let x = this.center.x + this.distance * Math.cos(i * Math.PI/180);
                    let y = this.center.y + this.distance * Math.sin(i * Math.PI/180);
                    // 画点
                    this.drawSolidCircle(x, y, this.minuteRadius, '#ccc');
                    i % 5 === 0 && this.drawSolidCircle(x, y, this.minuteRadius, '#000');
                }
                // 写字
                if (i % 30 === 0) {
                    let text = i === 0 ? 12 : i/30;
                    let x = this.center.x + this.distance * 0.85 * Math.cos((i - 90) * Math.PI/180);
                    let y = this.center.y + this.distance * 0.85 * Math.sin((i - 90) * Math.PI/180);
                    this.writeText(text, x, y, '30px', '#000');
                }
            }
        };

        /**
         * 更新
         */
        CanvasClock.prototype.update = function () {
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            let s = d.getSeconds();
            // 时
            this.hourPointer.x = this.center.x + this.hourDistance * Math.cos(((h * 30 - 90) + m/2) * Math.PI/180);
            this.hourPointer.y = this.center.y + this.hourDistance * Math.sin(((h * 30 - 90) + m/2) * Math.PI/180);
            // 分
            this.minPointer.x = this.center.x + this.minuteDistance * Math.cos((m * 6 - 90) * Math.PI/180);
            this.minPointer.y = this.center.y + this.minuteDistance * Math.sin((m * 6 - 90) * Math.PI/180);
            // 秒
            this.secPointer.x = this.center.x + this.secondDistance * Math.cos((s * 6 - 90) * Math.PI/180);
            this.secPointer.y = this.center.y + this.secondDistance * Math.sin((s * 6 - 90) * Math.PI/180);
        };

        /**
         * 渲染
         */
        CanvasClock.prototype.render = function () {
            // 画
            this.drawClock();
            // 画针
            this.drawLine(this.center.x, this.center.y, this.hourPointer.x, this.hourPointer.y, this.hourPointer.width, this.hourPointer.color);// 时针
            this.drawLine(this.center.x, this.center.y, this.minPointer.x, this.minPointer.y, this.minPointer.width, this.minPointer.color);// 分针
            this.drawLine(this.center.x, this.center.y, this.secPointer.x, this.secPointer.y, this.secPointer.width, this.secPointer.color);// 秒针
            // 画中心点
            this.drawSolidCircle(this.center.x, this.center.y, 10, '#000');
        };

        /**
         * 画圆
         */
        CanvasClock.prototype.drawHollowCircle = function (x, y, r, lineWidth, color) {
            color = color || '#111';
            lineWidth = lineWidth || 1;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.lineWidth = lineWidth;
            this.strokeStyle = color;
            this.ctx.arc(x, y, r, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.restore();
        };

        /**
         * 画实心圆
         */
        CanvasClock.prototype.drawSolidCircle = function (x, y, r, color) {
            color = color || '#111';
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.arc(x, y, r, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.restore();
        };

        /**
         * 写字
         */
        CanvasClock.prototype.writeText = function (text, x, y, fontSize, color) {
            color = color || '#111';
            fontSize = fontSize || '14px';
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.font = fontSize + ' Arial';
            this.ctx.fillStyle = color;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(text, x, y);
            this.ctx.closePath();
            this.ctx.restore();
        };

        /**
         * 矩形
         */
        // CanvasClock.prototype.drawRect = function (x, y, w, h, color) {
        //     color = color || '#111';
        //     this.ctx.save();
        //     this.ctx.beginPath();
        //     this.ctx.fillStyle = color;
        //     this.ctx.rect(x, y, w, h);
        //     this.ctx.fill();
        //     this.ctx.closePath();
        //     this.ctx.restore();
        // };

        /**
         * 线
         */
        CanvasClock.prototype.drawLine = function (x1, y1, x2, y2, lineWidth, color) {
            color = color || '#111';
            lineWidth = lineWidth || 10;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.lineWidth = lineWidth;
            this.ctx.lineCap = 'round';
            this.ctx.strokeStyle = color;
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.restore();
        };
        return CanvasClock;
    }) ();
    namespace.CanvasClock = CanvasClock;

}) (window.cyber || (cyber = Object.create(null)));