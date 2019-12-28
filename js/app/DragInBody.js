/*
 *	1.继承至Drag
 * 	2.限制与窗口
 * */

function DragInBody(id){
    Drag.call(this,id);
}

DragInBody.prototype = new Drag();
DragInBody.prototype.constructor = DragInBody;

var oldFnMove = DragInBody.prototype.fnMove;

DragInBody.prototype.fnMove = function(e){
    oldFnMove.call(this,e);
    //在原有的方法基础之上新增加的逻辑
    this.oDrag.offsetLeft < 0 && (this.oDrag.style.left = 0);
    if(this.oDrag.offsetLeft >= document.documentElement.clientWidth - this.oDrag.offsetWidth){
    	this.oDrag.style.left = document.documentElement.clientWidth - this.oDrag.offsetWidth + 'px'
    }
    this.oDrag.offsetTop< 0 && (this.oDrag.style.top = 0);
    if(this.oDrag.offsetTop >= document.documentElement.clientHeight - this.oDrag.offsetHeight){
    	this.oDrag.style.top = document.documentElement.clientHeight - this.oDrag.offsetHeight + 'px'
    }
};
