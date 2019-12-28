
function Drag(id){
    if(!id)return;
    this.oDrag = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
    this.init();
}
Drag.prototype.init=function(){
    var _this = this;
    this.oDrag.addEventListener('mousedown',function(e){
        _this.fnDown(e);
    },false);
};
Drag.prototype.fnDown = function(e){
    var _this = this;
    _this.disX = e.clientX - _this.oDrag.offsetLeft;
    _this.disY = e.clientY - _this.oDrag.offsetTop;
    document.onmousemove = function(e){
        _this.fnMove(e)
    };
    document.onmouseup = function(){
        _this.fnUp()
    };
    //_this.oDrag.setCapture&&_this.oDrag.setCapture();
    return false;
};

Drag.prototype.fnMove = function(e){
    this.oDrag.style.left = e.clientX - this.disX + 'px';
    this.oDrag.style.top = e.clientY - this.disY + 'px' ;
};

Drag.prototype.fnUp = function(){
    document.onmousemove = null;
    document.onmouseup = null;
    //this.oDrag.releaseCapture&&this.oDrag.releaseCapture();
};


//function Drag(id){
//	this.oDiv = document.getElementById(id);
//}
//Drag.prototype.drag = function(){
//	this.oDiv.onmousedown = function(e){
//		var e = e || window.event;
//		var disX = e.clientX - this.offsetLeft,
//			disY = e.clientY - this.offsetTop;
//			
//		document.onmousemove = function(e){
//			var e = e || window.event;
//			this.style.left = e.clientX - disX + 'px';
//			this.style.top = e.clientY - disY + 'px';
//		}.bind(this);
//		document.onmouseup = function(e){
//			
//			document.onmousemove = null;
//			document.onmouseup = null;
//		}.bind(this);
//		
//		e.cancelBubble = true;
//     	e.stopPropagation();
//		return false;
//	}
//}

//Drag.prototype.resDragBody = function(){
//	this.oDiv.onmousedown = function(e){
//		var e = e || window.event;
//		var disX = e.clientX - this.offsetLeft,
//			disY = e.clientY - this.offsetTop,
//			winWidth = document.documentElement.clientWidth,
//			winHiehgt = document.documentElement.clientHeight;
//			
//		document.onmousemove = function(e){
//			var e = e || window.event;
//			var l = e.clientX - disX,
//				t = e.clientY - disY;
//			if(l <= 0){
//				l = 0;
//			}
//			else if(l >= winWidth - this.offsetWidth ){
//				l = winWidth - this.offsetWidth;
//			}
//			if(t <= 0){
//				t = 0;
//			}
//			else if(t >= winHiehgt - this.offsetHeight ){
//				t = winHiehgt - this.offsetHeight;
//			}
//			this.style.left = l + 'px';
//			this.style.top = t + 'px';
//		}.bind(this);
//		document.onmouseup = function(e){
//			
//			document.onmousemove = null;
//			document.onmouseup = null;
//		}.bind(this);
//		return false;
//	}
//}



//Drag.prototype.resDragParent = function(){
//	this.oDiv.onmousedown = function(e){
//		var e = e || window.event;
//		var disX = e.clientX - this.offsetLeft,
//			disY = e.clientY - this.offsetTop,
//			parentWidth = this.parentNode.offsetWidth,
//			parentHiehgt = this.parentNode.offsetHeight;
//			
//		document.onmousemove = function(e){
//			var e = e || window.event;
//			var l = e.clientX - disX,
//				t = e.clientY - disY;
//			if(l <= 0){
//				l = 0;
//			}
//			else if(l >= parentWidth - this.offsetWidth ){
//				l = parentWidth - this.offsetWidth;
//			}
//			if(t <= 0){
//				t = 0;
//			}
//			else if(t >= parentHiehgt - this.offsetHeight ){
//				t = parentHiehgt - this.offsetHeight;
//			}
//			this.style.left = l + 'px';
//			this.style.top = t + 'px';
//		}.bind(this);
//		
//		
//		document.onmouseup = function(e){
//			
//			document.onmousemove = null;
//			document.onmouseup = null;
//		}.bind(this);
//		return false;
//	}
//}
