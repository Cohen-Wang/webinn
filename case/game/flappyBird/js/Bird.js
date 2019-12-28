(function () {
	
	var Bird = window.Bird = function () {
		//随机一个小鸟的颜色
		this.color = parseInt(Math.random() * 3);
		//决定用图
		this.imageArr = [
			game.R["bird" + this.color + "_0"],
			game.R["bird" + this.color + "_1"],
			game.R["bird" + this.color + "_2"],
		];
		
		//翅膀状态
		this.swing = 0;
		
		//鸟的位置
		this.x = (game.canvas.width * (1 - 0.618)) - 24;//24 是考虑旋转
		this.y = 100;
		//鸟自己的帧， 用于下落
		this.fno = 0;
		//旋转
		this.d = 0;
		//是否拥有能力
		this.hasEnergy = false;
		
	};
	//更新
	Bird.prototype.update = function () {
		//管理翅膀
		game.fno % 10 === 0 && this.swing ++;
		if (this.swing > 2) this.swing = 0;
		
		
		//下落
		if (!this.hasEnergy) {
			this.y += this.fno * 0.6;
		} else {
			//
			this.y -= (20 - this.fno)* 0.5;
			//20帧后 ，没有能力
			if(this.fno > 20){
				this.hasEnergy = false;
				this.fno = 0;
			}
		};
		this.d += 0.05;
		this.fno++;
	};
	
	//渲染
	Bird.prototype.render = function () {
		
		game.ctx.save();
		game.ctx.translate(this.x - 24 , this.y -24);
		game.ctx.rotate(this.d);
		game.ctx.drawImage(this.imageArr[this.swing] , -24 , -24);
		game.ctx.restore();
		
	};
	
	//飞
	Bird.prototype.fly = function () {
		this.hasEnergy = true;
		this.d = -0.6;
		this.fno = 0;
	};
	
	//
	Bird.prototype.bindEvent = function () {
		var _this = this;
		this.canvas.onclick = function () {
			_this.bird.fly();
		}
	};
	
	
})();

