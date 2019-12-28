/*
 *	1.继承至Drag
 * 	2.限制与窗口
 * */

function DragCallback(id, fn){
    DragInBody.call(this,id, fn);
}

DragCallback.prototype = new Drag();
DragCallback.prototype.constructor = DragCallback;

var oldFnMove = DragCallback.prototype.fnMove;

DragCallback.prototype.fnMove = function(e,fn){
    oldFnMove.call(this,e,fn);
    //在原有的方法基础之上新增加的逻辑
    fn()
};
