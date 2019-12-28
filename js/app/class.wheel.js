/*
 
 * Wheel----滚动缩放
 * */
function Wheel(id ){
	if(typeof id === 'string'){
		this.oDiv = document.getElementById(id);
	}else{
		this.oDiv = id;
	}
 	
}
/*
 
 * 1.没有解决中心点
 * 2.没有解决卡顿；
 * 3.没有解决减速国故
 * */
Wheel.prototype.wheel = function (){
	this.oDiv.onmousewheel = function(e){
		var e = e || window.event;
		if(e.wheelDelta > 0){
			if( this.offsetWidth >= 2000){
				this.style.width = 2000 + 'px';
			}else{
				this.style.width = this.offsetWidth + 10 + 'px';
				this.style.height = this.offsetHeight + 10 + 'px';
			}
			
		}
		else if(e.wheelDelta < 0){
			if( this.offsetWidth <= 500){
				this.offsetWidth = 500
			}else{
				this.style.width = this.offsetWidth - 10 + 'px';
				this.style.height = this.offsetHeight - 10 + 'px';
			}
		}
		return false;
	}
};

Wheel.prototype.scaleWheel = function(){
	var x = 100;
	var opa;
	var oHint = document.getElementById('hint');
	
	this.oDiv.onmousewheel = function(e){
		var e = e || window.event;
		if(e.wheelDelta > 0){
			x += 1;
		}
		else if(e.wheelDelta < 0){
			x <= 1 ? x = 1 : x -= 1;
		}
		this.style.transform = 'scale(' + x/100 + ')';
		
		opa = 100;
		
		var str = this.style.transform;
		var result = str.substring((str.indexOf('(') + 1), str.lastIndexOf(')'));
		var percent = parseInt(result * 100) + '%';
		
		oHint.innerHTML = percent;
		oHint.style.left = e.clientX + 20 + 'px';
		oHint.style.top = e.clientY - 50 + 'px';
		oHint.style.opacity = opa/100;	
		
		var timer = setInterval(function(){
			opa -= 1;
			oHint.style.opacity = opa/100;
			if(opa <= 0){
				clearInterval(timer)
			}
		},1000/60)
		
		return false;
	}
}
