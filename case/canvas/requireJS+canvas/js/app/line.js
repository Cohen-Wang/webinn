

define(function () {

    return function (startPoint, endPoint, color) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color || '#000';

        this.draw = function (ctx) {
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.startPoint.x, this.startPoint.y);
            ctx.lineTo(this.endPoint.x, this.endPoint.y);
            ctx.closePath();
            ctx.stroke();
        }
    }
});