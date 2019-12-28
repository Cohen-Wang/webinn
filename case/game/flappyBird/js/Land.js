(function(){
	
	var Land = window.Land = function(){
		//自己的背景
		this.image = game.R.land;
		//
		this.y = game.canvas.height * 0.75;
		this.x = 0;
		this.w = 336;
		this.h = 112;
		this.speed = 2;
	};

	//更新
	Land.prototype.update = function(){
		this.x -= this.speed;
		if(this.x < -this.w){
			this.x = 0;
		}
	};
	
	//渲染
	Land.prototype.render = function(){
		
		game.ctx.drawImage(this.image , this.x , this.y);
		game.ctx.drawImage(this.image , this.x + this.w , this.y);
		game.ctx.drawImage(this.image , this.x + this.w * 2, this.y);
		//补色
		game.ctx.fillStyle = '#ded895';
		game.ctx.fillRect(0 , this.y + this.h , game.canvas.width , game.canvas.height * 0.25 - 112);
	};
	
	
})();

