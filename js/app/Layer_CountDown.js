/*
 * 
 * 倒计时
 * 
 */

function CountDown(num, startFn, endFn){
	Layer.call(this);
	
	if(typeof num === 'undefined'){
		this.num = 3;
	}else{
		this.num = num;
	}
	
	this.timer = null;
	this.oCountDown = document.createElement('div');
	
	this.init(startFn, endFn);
};

CountDown.prototype = new Layer();
CountDown.prototype.constructor = CountDown;

CountDown.prototype.init = function(startFn, endFn){
	this.show()
	startFn();
	
	this.timer = setInterval(function(){
		
		
		
		this.move(endFn)
		
	}.bind(this),1000)
};

CountDown.prototype.show = function(){
	
	document.body.style.overflow = 'hidden';
	this.oCountDownStyle();
	
	this.oLayer.style.display = 'block';
	
	if(this.num == 0){
		this.oCountDown.innerHTML = 'Go!'
	}else{
		this.oCountDown.innerHTML = this.num;
	};
	this.oCountDown.style.display = 'block';
	
	document.body.appendChild(this.oLayer);
	document.body.appendChild(this.oCountDown);
};

CountDown.prototype.oCountDownStyle = function(){
	this.oCountDown.style.cssText = 'animation:pulse 1s ease infinite;position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;height:200px;text-align: center;display: none;font:900 180px/1 "微软雅黑";color:rgb(226,41,69);text-shadow: 2px 5px 65px #fff;z-index: 9999;text-shadow: 5px 5px 15px #666;';
};

CountDown.prototype.move = function(endFn){
	this.num--;
	switch (this.num){
		case -1:
			clearInterval(this.timer);
			this.oLayer.style.display = 'none';
			this.oCountDown.style.display = 'none';
			document.body.removeChild(this.oCountDown);
			document.body.removeChild(this.oLayer);
			document.body.style.overflow = '';
			this.status = true;
			endFn();
			break;
		case 0:
			this.oCountDown.innerHTML = 'Go!';
			
			break;
		default:
			this.oCountDown.innerHTML = this.num;
	};
};