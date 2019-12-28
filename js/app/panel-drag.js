/*
 
 * Cyber lib panel-drag
 * 
 * */
function Panel(id){
	this.oDiv = document.getElementById(id);
	this.oPanel = this.oDiv.getElementsByClassName('panel-heading')[0];
	this.oMinimize = this.oDiv.getElementsByClassName('btn-minimize')[0];
	this.oMedium = this.oDiv.getElementsByClassName('btn-medium')[0];
	
	this.eleStartX = null;
	this.startY = null;
};

Panel.prototype.drag = function(){
	var _this = this;
	
	this.oPanel.addEventListener('mousedown',function(e){
		_this.clickFn(e)
		
		return false;
	})
}

Panel.prototype.clickFn = function(e){
	var e = e || window.event;
	var _this = this;
	
	this.eleStartX = this.oDiv.offsetHeight;
	startY = e.clientY;
	
	document.onmousemove = function(e){
        _this.moveFn(e)
  	};
  	
  	document.onmouseup = function(e){
        _this.upFn(e)
  	};
}

Panel.prototype.moveFn = function(e){
	var e = e || window.event ;
	this.oDiv.style.height = this.eleStartX - (e.clientY - startY) + 'px';
}

Panel.prototype.upFn = function(e){
	var e = e || window.event ;
	document.onmousemove = document.onmouseup = null;
}

