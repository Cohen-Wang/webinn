/**
 * 点
 */
define(function () {
    return function (x, y) {
        // 属性
        this.x = x;
        this.y = y;
        // 方法
        this.equals = function (point) {
            return this.x === point.x && this.y === point.y;
        }
    }
});