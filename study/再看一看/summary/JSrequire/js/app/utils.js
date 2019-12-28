/**
 * 管理工具
 */
define(function () {
    
    let history = [];// 存储历史绘制的数组，（圆形，矩形，线的对象）
    
    /**
     * 直线
     */
    function drawLine (context, line) {
        line.drawMe(context)
    }
    
    /**
     * 矩形
     */
    function drawRect (context, rect) {
        rect.drawMe(context)
    }
    
    /**
     * 圆
     */
    function drawArc (context, arc) {
        arc.drawMe(context)
    }
    
    /**
     * 添加一条绘制轨迹
     */
    function addHistory (item) {
        history.push(item);
    }
    
    /**
     * 画出历史轨迹
     */
    function drawHistory (context) {
        for (let i = 0; i < history.length; i++) {
            let obj = history[i];
            obj.drawMe(context);
        }
    }
    
    /**
     * 撤销
     */
    function repealHistory () {
        history.pop();
    }
    
    /**
     * 清除历史轨迹
     */
    function clearHistory () {
        history = [];
    }
    
    /**
     * 返回对象
     */
    return {
        drawLine : drawLine,
        drawRect : drawRect,
        drawArc : drawArc,
        addHistory : addHistory,
        drawHistory : drawHistory,
        repealHistory : repealHistory,
        clearHistory : clearHistory,
    }
    
});