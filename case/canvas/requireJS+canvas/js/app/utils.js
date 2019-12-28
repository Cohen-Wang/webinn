

define(function () {

    let history = [];


    // *-----------------------------------------------------------------------------
    // | 画的方法
    // *-----------------------------------------------------------------------------
    function drawLine (ctx, line) {
        line.draw(ctx);
    }

    function drawRect (ctx, rect) {
        rect.draw(ctx);
    }

    function drawArc (ctx, arc) {
        arc.draw(ctx);
    }


    // *-----------------------------------------------------------------------------
    // | 历史轨迹 操作方法
    // *-----------------------------------------------------------------------------
    function addHistory (item) {
        history.push(item);
    }
    function drawHistory (ctx) {
        history.forEach(function (item) {
            item.draw(ctx);
        })
    }
    function clearHistory () {
        history = [];
    }


    // *-----------------------------------------------------------------------------
    // | 暴露
    // *-----------------------------------------------------------------------------
    return {
        drawLine: drawLine,
        drawRect: drawRect,
        drawArc: drawArc,
        addHistory: addHistory,
        drawHistory: drawHistory,
        clearHistory: clearHistory,
    }


});