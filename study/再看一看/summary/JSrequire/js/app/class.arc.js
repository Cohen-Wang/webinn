/**
 * 绘制圆形
 */
define(function () {
    return function (startPoint, radius) {
        // 属性
        this.startPoint = startPoint;
        this.radius = radius;
        // 方法
        this.drawMe = function (context) {
            context.beginPath();
            context.arc(this.startPoint.x, this.startPoint.y, this.radius, 0, 2 * Math.PI);
            context.closePath();
            context.stroke();
        }
    }
});