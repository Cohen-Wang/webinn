(function () {
    
    /**
     * 背景类
     * @type {Window.Background}
     */
	let Background = window.Background = function(){
		//着急的北京
		this.image = game.R.bg_day;
		
		//背景的Y
		this.y = 0.75 * game.canvas.height - 396;
		//图片的尺寸，定死了的；图片多大，我们就写多大；
		this.w = 288;
		this.h = 512;
		this.x = 0;
		this.speed = 1;
	};
    
    /**
	 * 更新,动起来
     */
	Background.prototype.update = function(){
		this.x -= this.speed;
		//无缝滚动
		if(this.x < -this.w){
			this.x = 0;
		}
	};
    
    /**
     * 渲染
     */
	Background.prototype.render = function(){
		//渲染图片
		game.ctx.drawImage(this.image , this.x , this.y);
		game.ctx.drawImage(this.image , this.x + this.w , this.y);
		game.ctx.drawImage(this.image , this.x + this.w * 2 , this.y);
		//渲染天空补充颜色
		game.ctx.fillStyle = '#4EC0CA';
		game.ctx.fillRect(0 , 0 , game.canvas.width , this.y);
		//渲染草丛
		game.ctx.fillStyle = '#5ee270';
		game.ctx.fillRect( 0 , this.h + this.y , game.canvas.width , game.canvas.height - this.h - this.y);
	};
}) (window);