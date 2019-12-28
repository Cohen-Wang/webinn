/**
 * 直线
 */
define(function () {
    return function (startPoint, endPoint) {
        // 属性
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        //方法
        this.drawMe = function (context) {
            context.strokeStyle = '#000';
            context.beginPath();
            context.moveTo(this.startPoint.x, this.startPoint.y);
            context.lineTo(this.endPoint.x, this.endPoint.y);
            context.closePath();
            context.stroke();
        }
    }
});