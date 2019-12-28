/**
 * 矩形
 */
define(['app/class.point'], function () {
    return function (startPoint, width, height) {
        // 属性
        this.startPoint = startPoint;
        this.width = width;
        this.height = height;
        // 方法
        this.drawMe = function (context) {
            context.strokeStyle = '#000';
            context.beginPath();
            context.strokeRect(this.startPoint.x, this.startPoint.y, this.width, this.height);
            context.closePath();
        }
    }
});