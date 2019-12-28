/*
 *	1.继承至Drag
 * 	2.限制与窗口
 * */

function DragInParent(id){
    Drag.call(this,id);
}

DragInParent.prototype = new Drag();
DragInParent.prototype.constructor = DragInParent;

var oldFnMove = DragInParent.prototype.fnMove;

DragInParent.prototype.fnMove = function(e){
    oldFnMove.call(this,e);
    //在原有的方法基础之上新增加的逻辑
    this.oDrag.offsetLeft < 0 && (this.oDrag.style.left = 0);
    if(this.oDrag.offsetLeft >= this.oDrag.parentNode.offsetWidth - this.oDrag.offsetWidth){
    	this.oDrag.style.left = this.oDrag.parentNode.offsetWidth - this.oDrag.offsetWidth + 'px'
    }
    this.oDrag.offsetTop< 0 && (this.oDrag.style.top = 0);
    if(this.oDrag.offsetTop >= this.oDrag.parentNode.offsetHeight - this.oDrag.offsetHeight){
    	this.oDrag.style.top = this.oDrag.parentNode.offsetHeight - this.oDrag.offsetHeight + 'px'
    }
};
