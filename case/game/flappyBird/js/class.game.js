(function () {
	
	let Game = window.Game = function (params) {
		// 传参
		this.id = params.id;
        this.config = params.config;
		// 变量
		this.canvas = document.getElementById(this.id);//得到画布
		this.ctx = this.canvas.getContext('2d');//得到上下文 
		// 帧编号
		this.fno = 0;
		// 设置画布宽高
		this.init();
		// 读取资源
        let _this = this;
		this.loadAllResource(function () {
			// 这里表明全部资源读取完毕；
			//console.log('done');
			_this.start();
			
			// 绑定监听
			_this.bindEvent();
		});
	};
    
    /**
	 * 初始化
     */
	Game.prototype.init = function () {
        let windowH = document.documentElement.clientHeight;
        let windowW = document.documentElement.clientWidth;
		
		// 各种屏幕大小，但是有一定范围；
		if (windowH > 736) {
			windowH = 736
		} else if (windowH < 500) {
			windowH = 500;
		}
		
		if (windowW > 414) {
			windowW = 414;
		} else if (windowW < 320) {
			windowW = 320;
		}
		
		this.canvas.height = windowH;
		this.canvas.width = windowW;
	};
    
    /**
	 * 加载资源后，回调
     * @param callback
     */
	Game.prototype.loadAllResource = function (callback) {
		// 准备一个R对象；
		this.R = {};
        let _this = this;
        let alreadyDoneNumber = 0;
		// 发出请求，请求一个JSON文件；
        let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
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
                        _this.ctx.clearRect(0 , 0 , _this.canvas.width , _this.canvas.height);
                        //提示文字
                        let txt = '正在加载' + alreadyDoneNumber + '/' + resourceObj.images.length + ",请稍后";
                        _this.ctx.textAlign = "center";
                        _this.ctx.font = '30px 宋体';
                        _this.ctx.fillText(txt , _this.canvas.width/2 , _this.canvas.height * (1-0.618) );

                        //判断是否已经全部加载完毕
                        if (alreadyDoneNumber === resourceObj.images.length) {
                            callback();// callback.call(_this);// ❤
                        }
                    }
				}
			}
		};

		xhr.open('get' , this.config , true);
		xhr.send(null);
	};
    
    /**
	 * 开始游戏
     */
	Game.prototype.start = function () {
		// 实例化背景
		this.background = new Background();
		// 实例化大地
		this.land = new Land();
		// 实例化管子-数组；
		this.pipeArr = [];
		// 鸟
		this.bird = new Bird();
        
        
        let _this = this;
		// 设置定时器
		this.timer = setInterval(function () {
			// 清屏
			_this.ctx.clearRect(0 , 0 , _this.canvas.width , _this.canvas.height);
			
			// 更新渲染背景
			_this.background.update();
			_this.background.render();
			// 更新，渲染大地
			_this.land.update();
			_this.land.render();
			// 更新,渲染管子
			for (let i = 0 ; i < _this.pipeArr.length ; i ++ ) {
				_this.pipeArr[i].update();
				_this.pipeArr[i].render();
			}
			// 每多少帧 ，实例化管子
			_this.fno % 200 === 0 && new Pipe();
			// 渲染 ，更新 鸟
			_this.bird.update();
			_this.bird.render();
			
			
			// 帧编号
			_this.fno ++;
			// 打印帧编号
			_this.ctx.font = '16px 微软雅黑';
			_this.ctx.textAlign = 'left';
			_this.ctx.fillText('fno :' + _this.fno , 20 , 20);
			
			
		}, 1000/60);
	};
    
    /**
	 * 绑定
     */
	Game.prototype.bindEvent = function () {
        let _this = this;
		this.canvas.onclick = function () {
			_this.bird.fly();
		}
	};
 
}) (window);
