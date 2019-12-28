/*
 *	Layer 遮罩层
 * */

function Layer(){
	this.oLayer = document.createElement('div');
	this.CoverStyle();
}

Layer.prototype.init = function(){
	this.show()
}

Layer.prototype.CoverStyle = function(){
	this.oLayer.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background-color: rgb(255,255,255);opacity:0.65;z-index: 9990;display: block;cursor:  not-allowed;filter: blur(10px);";
	this.oLayer.className = 'blur';
	this.oLayer.onselectstart = function(){return false};
}

Layer.prototype.show = function(){
	document.body.style.overflow = 'hidden';
	document.body.appendChild(this.oLayer);
}

Layer.prototype.hide = function(){
	document.body.removeChild(this.oLayer);
	document.body.style.overflow = '';
}