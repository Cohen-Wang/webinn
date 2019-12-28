

define(['app/point'], function () {

    return function (startPoint, width, height, color) {
        this.startPoint = startPoint;
        this.width = width;
        this.height = height;
        this.color = color || '#000';

        this.draw = function (ctx) {
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.rect(this.startPoint.x, this.startPoint.y, this.width, this.height);
            ctx.closePath();
            ctx.stroke();
        }
    }

});