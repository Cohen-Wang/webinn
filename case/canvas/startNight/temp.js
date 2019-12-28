/*************************************
 * Author : Cohen_Wang
 * Date : 2018 - 10 - 22
 */

(function (namespace) {


    let __extend = function (_child, _super) {
        for (let p in _super.prototype) {
            if (_super.prototype.hasOwnProperty(p)) {
                _child.prototype[p] = _super.prototype[p];
            }
        }
    };

    let Canvas = (function () {
        // 构造
        function Canvas (id) {
            this.id = id;
            this.createCanvas();
        }
        // 创建canvas
        Canvas.prototype.createCanvas = function () {
            this.oContainer = document.getElementById(this.id);

            this.can = document.createElement('canvas');
            this.ctx = this.can.getContext('2d');

            this.can.width = this.oContainer.offsetWidth;
            this.can.height = this.oContainer.offsetHeight;

            this.oContainer.appendChild(this.can);
        };
        return Canvas;
    }) ();


    let StarNight = (function () {
        // 构造
        function StarNight (id) {
            Canvas.call(this, id);
            // 传参
            this.config = "./config/starNight.config.json";// 图片地址
            this.fps = 0;// 帧
            // 执行
            this.start();
        }
        // 继承
        __extend(StarNight, Canvas);
        // 开始运动
        StarNight.prototype.start = function () {
            // 实例化
            this.stats = new Stats();// stats : 帧检查
            this.stats.showPanel(1);// 0: fps, 1: ms, 2: mb, 3+: custom
            document.body.appendChild(this.stats.dom);
            // 实例化音乐
            // this.myaudio = new MyAudio({url : 'res/audio/anime.mp3',});
            this.sky = new Sky(0, 0, this.can.width, this.can.height);
            this.fiveStarShow = new StarShow(FiveStar, 0, 0, this.can.width, this.can.height * .66, 100, 8, 0.3, '#fff');
            this.roundedStarShow = new StarShow(RoundedStar, 0, 0, this.can.width, this.can.height * .66, 50, 2, 0.5, '#eee');
            this.meteorShow = new MeteorShow(0, 0, this.can.width, this.can.height, 10, 135, 2, 10, '#fff');
            this.mountainLg = new Mountain(0, 0, this.can.width, this.can.height, 140, '#191D4C', this.can.height * .4);
            this.mountainMd = new Mountain(0, 0, this.can.width, this.can.height, 120, 'rgb(17,20,40)', this.can.height * .55);
            this.mountainSm = new Mountain(0, 0, this.can.width, this.can.height, 100, 'rgb(10,10,5)', this.can.height * .7);
            // 动画帧
            let _this = this;
            this.timer = setInterval(function () {
                _this.stats.begin();
                _this.fps++;// 帧
                _this.ctx.clearRect(0, 0, _this.can.width, _this.can.height);// 清空
                // sky
                (_this.fps % 8 === 0) && _this.sky.update();
                _this.sky.render(_this.ctx);
                // stars
                _this.fiveStarShow.update();
                _this.fiveStarShow.render(_this.ctx);
                _this.roundedStarShow.update();
                _this.roundedStarShow.render(_this.ctx);
                // meteor
                _this.meteorShow.update();
                _this.meteorShow.render(_this.ctx);
                // 山
                _this.fps % 5 === 0 && _this.mountainLg.update();
                _this.mountainLg.draw(_this.ctx);
                _this.fps % 3 === 0 && _this.mountainMd.update();
                _this.mountainMd.draw(_this.ctx);
                _this.fps % 2 === 0 && _this.mountainSm.update();
                _this.mountainSm.draw(_this.ctx);
                // 音乐
                let rectW = 4;
                //let musicArr = _this.myaudio.getData();
                let gra = _this.ctx.createLinearGradient(0, 800, 0, 900);
                gra.addColorStop(0, "#f00");
                gra.addColorStop(0.1, "#f00");
                gra.addColorStop(0.2, "orange");
                gra.addColorStop(0.3, "gold");
                gra.addColorStop(0.4, "yellowgreen");
                gra.addColorStop(0.5, "#f00");
                gra.addColorStop(1, "#00f");
                // for (let i = 0; i < musicArr.length; i++) {
                //     let rectH = musicArr[i] / 256 * 100;
                //     _this.ctx.beginPath();
                //     _this.ctx.fillStyle = gra;
                //     _this.ctx.fillRect(rectW * i , 900 - rectH , rectW * 0.9 , rectH );
                //     _this.ctx.closePath();
                // }
                // 写字
                _this.writeText('fps:' + _this.fps, 120, 30, '20px Arial', 'orange');
                _this.stats.end();
            }, 1000/60);
        };
        // 写字
        StarNight.prototype.writeText = function (text, x, y, font, color) {
            font = font || '12px Arial';
            color = color || 'red';
            this.ctx.beginPath();
            this.ctx.font = font;
            this.ctx.fillStyle = color;
            this.ctx.fillText(text, x, y);
            this.ctx.closePath();
        };
        return StarNight;
    }) ();
    namespace.StarNight = StarNight;


    let Sky = (function () {
        // 构造
        function Sky (startX, startY, endX, endY) {
            this.startX = startX;
            this.startY = startY;
            this.endX = endX;
            this.endY = endY;
            this.r = 153;
            this.g = 92;
            this.b = 234;
            this.per = 0.25;
            this.speedR = 1;// INT
            this.speedG = 1;// INT
            this.speedB = 1;// INT
            this.speedPer = 0.005;
        }
        // 更新
        Sky.prototype.update = function () {
            if (this.r >= 153 || this.r <= 85)  this.speedR = -this.speedR;
            if (this.g >= 153 || this.g <= 85)  this.speedG = -this.speedG;
            if (this.b >= 153 || this.b <= 85)  this.speedB = -this.speedB;
            if (this.per >= 0.4 || this.per <= 0.1)  this.speedPer = -this.speedPer;
            this.r += this.speedR;
            this.g += this.speedG;
            this.b += this.speedB;
            this.per += this.speedPer;
        };
        // 渲染
        Sky.prototype.render = function (ctx) {
            let grad = ctx.createLinearGradient(0, this.endY, 0, this.endY * this.per);// 创建一个渐变色线性对象
            grad.addColorStop(0, 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')');// 定义渐变色颜色
            grad.addColorStop(1, '#000');

            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = grad;// 设置渐变对象
            ctx.fillRect(this.startX , this.startY, this.endX, this.endY);
            ctx.closePath();
            ctx.restore();
        };
        return Sky;
    }) ();


    let FiveStar = (function () {
        // 构造
        function FiveStar (x, y, r, color, opa, speed, opaSpeed) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = color;
            this.opa = opa;
            this.speed = speed;// 每个星星都有自己的移动速度，所以是星星自己的属性
            this.opaSpeed = opaSpeed;// 星星闪烁，即透明度切换速度
        }
        // 画
        FiveStar.prototype.draw = function (ctx) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opa;
            ctx.lineCap = 'round';

            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.r / 6, this.y + this.r / 3);
            ctx.lineTo(this.x + this.r / 2, this.y + this.r / 2);
            ctx.lineTo(this.x + this.r / 6, this.y + this.r / 3 * 2);
            ctx.lineTo(this.x, this.y + this.r);
            ctx.lineTo(this.x - this.r / 6, this.y + this.r / 3 * 2);
            ctx.lineTo(this.x - this.r / 2, this.y + this.r / 2);
            ctx.lineTo(this.x - this.r / 6, this.y + this.r / 3);
            ctx.lineTo(this.x, this.y);

            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;// 恢复
        };
        return FiveStar;
    }) ();


    let RoundedStar = (function () {
        // 构造
        function RoundedStar (x, y, r, color, opa, speed, opaSpeed) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = color;
            this.opa = opa;
            this.speed = speed;// 每个星星都有自己的移动速度，所以是星星自己的属性
            this.opaSpeed = opaSpeed;// 星星闪烁，即透明度切换速度
        }
        // 画
        RoundedStar.prototype.draw = function (ctx) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opa;

            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);

            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;// 恢复
        };
        return RoundedStar;
    }) ();


    let StarShow = (function () {
        // 构造
        function StarShow (StarClass, startX, startY, endX, endY, num, radius, speed, color) {
            //
            this.StarClass = StarClass;// 星星的类
            //
            this.startX = startX;// 星空起始点
            this.startY = startY;// 星空起始点
            this.endX = endX;// 星空结束点
            this.endY = endY;// 星空结束点
            this.num = num || 100;// 星星的数量
            this.radius = radius || 8;// 星星的半径
            this.speed = speed || 1;// 星星的速度
            this.color = color || "#f00";// 星星颜色

            this.stars = this.createStars();
        }
        function random(m, n) {
            return Math.random() * (n - m) + m;
        }
        // 创建
        StarShow.prototype.createStars = function () {
            let stars = [];
            for (let i = 0; i < this.num; i++) {
                // 创建星星属性
                let x = random(this.startX, this.endX);
                let y = random(this.startY, this.endY);
                let r = random(this.radius - 2, this.radius + 2);
                let opa = Math.random();
                let speed = random(this.speed - this.speed*0.5, this.speed + this.speed*0.5);
                let opaSpeed = Math.random() * 0.01;
                // 创建实例
                stars.push(new this.StarClass(x, y, r, this.color, opa, speed, opaSpeed));
            }
            return stars;
        };
        // 更新
        StarShow.prototype.update = function () {
            for (let i = 0; i < this.stars.length; i++) {
                // 只向左移动
                this.stars[i].x -= this.stars[i].speed;
                // 如果超出屏幕，删除 并 补充星星
                if (this.stars[i].x <= 0 || this.stars[i].x >= this.endX || this.stars[i].y <= 0 || this.stars[i].y >= this.endY) {
                    // 创建
                    let x = random(this.endX*0.9, this.endX);// 注意生成的位置 ，是控制了的
                    let y = random(this.startY, this.endY);
                    let r = random(this.radius - 2, this.radius + 2);
                    let opa = Math.random();
                    let speed = random(this.speed - this.speed*0.5, this.speed + this.speed*0.5);
                    let opaSpeed = Math.random() * 0.01;
                    //
                    this.stars.splice(i, 1, new this.StarClass(x, y, r, this.color, opa, speed, opaSpeed));
                }
                // 透明度变动
                if (this.stars[i].opa >= 1 || this.stars[i].opa <= 0) {
                    this.stars[i].opaSpeed = -this.stars[i].opaSpeed;
                }
                this.stars[i].opa += this.stars[i].opaSpeed;
            }
        };
        // 渲染
        StarShow.prototype.render = function (ctx) {
            for (let i = 0; i < this.stars.length; i++) {
                this.stars[i].draw(ctx);
            }
        };
        return StarShow;
    }) ();


    let Meteor = (function () {
        // 构造
        function Meteor (x, y, r, angle, opa, color, limitY, meteorLength) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.angle = angle || 0;// 角度，默认：0 水平向右
            this.opa = opa || 1;// 透明度
            this.color = color || 'red';// 颜色
            this.limitY = limitY || 100;// Y轴逐渐消失的点
            this.meteorLength = meteorLength || 30;// 流星长度
        }
        // 画
        Meteor.prototype.draw = function (ctx) {
            let x = this.x;
            let y = this.y;
            let r = this.r;
            let opa = this.opa;

            ctx.save();
            for (let j = 0; j < this.meteorLength; j++) {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.globalAlpha = opa;
                ctx.arc(x, y, r, 0, 2 * Math.PI, true);
                ctx.fill();
                ctx.closePath();
                // 画尾巴时，自减
                r -= 0.1;
                if (r <= 0) r = 0.1;// 有可能r会小于0，会报错。特此处理
                opa -= 0.04;
                x -= Math.cos(this.angle * Math.PI / 180) * 3;
                y -= Math.sin(this.angle * Math.PI / 180) * 3;
            }
            ctx.restore();
        };
        return Meteor;
    }) ();


    let MeteorShow = (function () {
        // 构造
        function MeteorShow (startX, startY, endX, endY, num, angle, radius, speed, color) {
            this.startX = startX;
            this.startY = startY;
            this.endX = endX;
            this.endY = endY;
            this.num = num || 10;
            this.angle = angle || 90;
            this.radius = radius || 1.5;// 流星半径大小
            this.speed = speed || 10;
            this.color = color || 'red';

            this.meteorLength = 30;// 流星长度
            this.meteors = this.createMeteors(this.num);
        }
        function random (m, n) {
            return Math.random() * (n - m) + m;
        }
        // 创建流星
        MeteorShow.prototype.createMeteors = function (num) {
            let meteors = [];
            for (let i = 0; i < num; i++) {
                let x = random(this.endX * .33, this.endX + this.endX * .33);
                let y = random(-100, -500);
                let limitY = random(100, 300);
                let opa = random(0.5, 1);
                let r = random(this.radius - this.radius * .2, this.radius + this.radius * .2);

                meteors.push(new Meteor(x, y, r, this.angle, opa, this.color, limitY, this.meteorLength));
            }
            return meteors;
        };
        // 更新
        MeteorShow.prototype.update = function () {
            for (let i = 0; i < this.meteors.length; i++) {
                this.meteors[i].x += this.speed * Math.cos(this.angle * Math.PI / 180);
                this.meteors[i].y += this.speed * Math.sin(this.angle * Math.PI / 180);

                if (this.meteors[i].y > this.meteors[i].limitY) {
                    this.meteors[i].opa -= 0.05;

                    if (this.meteors[i].opa <= 0) {
                        let x = random(this.endX * .33, this.endX + this.endX * .33);
                        let y = random(-100, -500);
                        let limitY = random(100, 300);
                        let opa = random(0.5, 1);
                        let r = random(this.radius - this.radius * .2, this.radius + this.radius * .2);

                        this.meteors.splice(i, 1, new Meteor(x, y, r, this.angle, opa, this.color, limitY, this.meteorLength));
                    }
                }
            }
        };
        // 渲染
        MeteorShow.prototype.render = function (ctx) {
            for (let i = 0; i < this.meteors.length; i++) {
                this.meteors[i].draw(ctx);
            }
        };
        return MeteorShow;
    }) ();


    let Mountain = (function () {
        // 构造
        function Mountain (startX, startY, endX, endY, displacement, color, maxHeight) {
            this.startX = startX;
            this.startY = startY;
            this.endX = endX;
            this.endY = endY;
            this.displacement = displacement || 140;// 山的坡度，数值越大，山坡越陡
            this.maxHeight = maxHeight || 500;// 在整个canvas中 被减去的高度
            this.color = color || 'red';
            this.points = this.createPoints();// 山的顶点集合
        }
        // 创建
        Mountain.prototype.createPoints = function () {
            let points = [];
            let power = Math.pow(2, Math.ceil(Math.log(this.endX) / (Math.log(2))));
            //console.log(power);// 2048
            //
            points[0] = this.maxHeight;
            points[power] = points[0];
            //
            for (let i = 1; i < power; i *= 2) {
                for (let j = (power / i) / 2; j < power; j += power / i) {
                    points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * - this.displacement + this.displacement);
                }
                this.displacement *= 0.6;
            }
            return points;
        };
        // 更新
        Mountain.prototype.update = function () {
            this.points.push(this.points.shift());
        };
        // 画
        Mountain.prototype.draw = function (ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.moveTo(this.startX, this.points[0]);

            for (let i = 0; i < this.points.length; i++) {
                let x = this.endX / this.points.length * i;
                let h = this.points[i] ;
                ctx.lineTo(x, h);
            }

            ctx.lineTo(this.endX, this.endY);
            ctx.lineTo(this.startX, this.endY);
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        };
        return Mountain;
    }) ();


    let MyAudio = (function () {
        // 构造
        function MyAudio (params) {
            // 传参
            this.url = params.url;
            // 变量
            this.ac = new window.AudioContext() || new window.webkitAudioContext();// 兼容
            this.gainNode = this.ac[this.ac.createGain ? 'createGain' : 'createGainNode']();
            this.gainNode.connect(this.ac.destination);
            this.source = null;
            this.count = 0;
            this.analyser = this.ac.createAnalyser();
            this.size = 128;
            this.analyser.fftSize = 128 * 2;
            this.analyser.connect(this.gainNode);
            this.xhr = new XMLHttpRequest();
            this.loadResource();
        }
        // 服务器获取音乐
        MyAudio.prototype.loadResource = function () {
            let _this = this;

            let n = ++this.count;
            this.source && this.source[this.source.stop ? 'stop' : 'noteOff']();

            this.xhr.open('GET', this.url);
            this.xhr.responseType = 'arraybuffer';

            this.xhr.onload = function () {
                if (n !== _this.count) return;
                _this.ac.decodeAudioData(_this.xhr.response, function (buffer) {
                    if (n !== _this.count) return;
                    let bufferSource = _this.ac.createBufferSource();
                    bufferSource.buffer = buffer;

                    // bufferSource.connect(ac.destination);// 1
                    // bufferSource.connect(gainNode);// 2
                    bufferSource.connect(_this.analyser);
                    bufferSource[bufferSource.start ? 'start' : 'noteOn'](0);
                    _this.source = bufferSource;


                }, function (err) {
                    console.log(err);
                });
            };
            this.xhr.send(null);
        };
        // 获取音乐数据
        MyAudio.prototype.getData = function () {
            let arr = new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(arr);
            return arr;
        };
        return MyAudio;
    }) ();

}) (window.cyber || (cyber = Object.create(null)));