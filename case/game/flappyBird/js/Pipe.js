
(function () {
	
	let Pipe = window.Pipe = function () {
		//自己的背景
		this.imageDown = game.R.pipe_down;
		this.imageUp = game.R.pipe_up;
		
		this.pipeHeight = 320;
		//总高
		this.allHeight = game.canvas.height * 0.75;
		//空隙
		this.interSpace = 150;
		//随机上管子
		this.UpHeight = 100 + parseInt( Math.random() * (this.pipeHeight - 100));
		//获取下馆子
		this.downHeight = this.allHeight - this.interSpace - this.UpHeight;
		
		this.x = game.canvas.width;
		this.speed = 2;
		
		//将自己推入管子数组
		game.pipeArr.push(this);
	};
	//更新
	Pipe.prototype.update = function () {
		this.x -= this.speed;
	};
	
	//渲染
	Pipe.prototype.render = function () {
		game.ctx.drawImage(this.imageDown , 0 , this.pipeHeight - this.UpHeight , 52 , this.UpHeight , this.x , 0 , 52 , this.UpHeight);
		game.ctx.drawImage(this.imageUp , 0 , 0 , 52 , this.downHeight , this.x , this.UpHeight + this.interSpace , 52 ,  this.downHeight);
	};
	
})();

