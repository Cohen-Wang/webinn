//
////自定义滚动条
//function ScrollBar(id){
//	
//	this.oDiv = document.getElementById(id);
//	
//	this.oDivH = this.oDiv.offsetHeight;
//	
//	//var h = this.oDiv.offsetHeight;
//	
//	this.createSlider();
//};
//
//
//ScrollBar.prototype.init = function(){
//	
//};
//
//
//ScrollBar.prototype.createSlider = function(){
//	
//	var oSliderBar = document.createElement('div');
//	var oSlider = document.createElement('div');
//	
//	oSliderBar.style.width = '10px';
//	oSliderBar.style.height = this.oDivH + 'px';
//	oSliderBar.style.background = 'rgb(14,150,198)';
//	oSliderBar.style.position = 'absolute';
//	oSliderBar.style.top = '0px';
//	oSliderBar.style.right = '0px';
//	
//	oSlider.style.width = '10px';
//	oSlider.style.background = 'rgb(50,123,174)';
//	oSlider.style.position = 'absolute';
//	oSlider.style.top = '0px';
//	oSlider.style.right = '0px';
//	
//	
//	//oSliderH  oSliderBarH = oBoxH  :  contentH 
//	var h = this.oDivH * this.oDiv.offsetHeight / this.oDiv.style.maxHeight ;
//	
//	if(h <= 30){h = 30}
//	else if(this.oDiv.style.maxHeight <= this.oDiv.offsetHeight){
//		oSliderBar.style.display = 'none';
//		h = this.oDiv.offsetHeight
//	};
//	
//	oSlider.style.height = h + 'px';
//	
//	oSliderBar.appendChild(oSlider);
//	this.oDiv.appendChild(oSliderBar);
//	
//	var y = 0;
//	
//	oSlider.onmousedown = function(e){
//		var e = e || window.event;
//		var y1 = e.offsetY;
//		//var disY = e.offsetY - oSlider.offsetTop;
//		
//		document.onmousemove = function(e){
//			var e = e || window.event;
//			var y = e.clientY - y1;
//			
//			if(y <= 0){y = 0}
//			else if(y >= oSliderBar.offsetHeight - oSlider.offsetHeight){y = oSliderBar.offsetHeight - oSlider.offsetHeight}
//			
//			oSlider.style.top = y + 'px';
//			
//			var cont = document.getElementById('mapImage-info-box');
//			cont.style.top = - y * cont.offsetHeight / oSliderBar.offsetHeight + 'px';
//			
//			return false;
//		};
//		document.onmouseup = function(){
//			document.onmousemove = null;
//			document.onmousemup = null;
//		};
//	};
//	
//	this.oDiv.onmousewheel = function(e){
//		var e = e || window.event;
//		if(e.wheelDelta > 0){
//			y -= 10 ;
//		}else{
//			y += 10;
//		};
//		
//		if(y <= 0){y = 0}
//		else if(y >= oSliderBar.offsetHeight - oSlider.offsetHeight){y = oSliderBar.offsetHeight - oSlider.offsetHeight};
//		oSlider.style.top = y + 'px';
//		var cont = document.getElementById('mapImage-info-box');
//		cont.style.top = - y * cont.offsetHeight / oSliderBar.offsetHeight + 'px';
//		
//		return false;
//	};
//	
//	this.oDiv.onkeydown = function(e){
//		//如何 keydown事件  控制??????????????????????????????????????
//	};
//};
//
//ScrollBar.prototype.wheel = function(){
//	
//};
//
//ScrollBar.prototype.move = function(){
//	
//};


//封装
function ScrollBar(elementID){
 	this.element = document.getElementById(elementID);
 	
 	this.oSlider = document.createElement("div");
 	this.oSliderBar = document.createElement("div");
 	this.replaceDiv = document.createElement("div");
 	
 	this.createDiv();
	this.addAudo();
};

ScrollBar.prototype.createDiv = function(){
	//滚动槽
	this.oSlider.className = "slider";
	//滚动条
	this.oSliderBar.className = "sliderBar";
	
	//代替 主角的 DIV
	this.replaceDiv.className = "replace";
	this.replaceDiv.innerHTML = this.element.innerHTML;
	
	//主角装 配角
	this.element.innerHTML = "";
	this.element.appendChild(this.replaceDiv);
	
	//滚动槽 装 滚动条
	this.oSlider.appendChild(this.oSliderBar);
	document.body.appendChild(this.oSlider);
	
	this.oSlider.style.height = getComputedStyle(this.element,null).height;
	this.oSlider.style.left = (this.element.offsetLeft+(parseInt(getComputedStyle(this.element,null).width)-parseInt(getComputedStyle(this.oSlider,null).width)))+"px";
	this.oSlider.style.top = this.element.offsetTop+"px";
	this.oSliderBar.style.top = "0px";
 	}
 
 	ScrollBar.prototype.addAudo = function(){
  		var YY = null;//前鼠标位置
	var topXX = 0;//前top位置
	var topX = 0;//后top值
	
	//replaceDiv ： this.element
	var mainRadio = parseInt(getComputedStyle(this.replaceDiv,null).height) - parseInt(getComputedStyle(this.element,null).height);
	
	var result = 0;
	//最大top移动位置
	var top_x = parseInt(getComputedStyle(this.oSlider,null).height) - parseInt(getComputedStyle(this.oSliderBar,null).height);
	var _this = this;
	
	
	this.oSliderBar.onmousedown=function(e){
		YY = e.clientY;
		topXX = parseInt(this.style.top);
		return false;
	};
	
	document.onmousemove = function(e){
		fun(e.clientY);
	};
	
	document.onmouseup=function(){
		YY = null;
		return true;
	};
	
	function fun(y){
		if(top_x >= topX && topX >= 0 && YY != null){
    		topX = y - YY + topXX;
    		if(topX < 0) topX = 0;
    		if(topX > top_x) topX = top_x-1;
    		_this.oSliderBar.style.top = (topX-1)+"px";
    		result = topX * mainRadio / top_x;
    		_this.element.scrollTop = result;
		};
	};
};
