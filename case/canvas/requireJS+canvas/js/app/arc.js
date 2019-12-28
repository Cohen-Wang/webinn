

define(function () {

    return function (startPoint, radius) {
        this.startPoint = startPoint;
        this.radius = radius;

        this.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(this.startPoint.x, this.startPoint.y, this.radius, 0, 2 * Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();
        }
    }
});