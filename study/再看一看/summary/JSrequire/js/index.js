require([
        'app/class.point',
        'app/class.line',
        'app/class.rect',
        'app/class.arc',
        'app/utils'],
function (Point, Line, Rect, Arc, Utils) {
    //
    let canvasContainer = document.getElementById('canvas-container');
    let canvasContainerWidth = canvasContainer.offsetWidth;
    let canvasContainerHeight = canvasContainer.offsetHeight;
    // 获取
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    // 设置
    canvas.width = canvasContainerWidth;
    canvas.height = canvasContainerHeight;
    // 变量
    let canvasRect = canvas.getBoundingClientRect();
    
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    
    /**
     * 绑定点击事件的函数
     */
    function bindClick (domID, handler) {
        document.getElementById(domID).addEventListener('click', handler);
    }
    
    bindClick('btn-line', menuBtnClicked);// 0
    bindClick('btn-rect', menuBtnClicked);// 1
    bindClick('btn-oval', menuBtnClicked);// 2
    bindClick('btn-pencil', menuBtnClicked);// 3
    bindClick('btn-clear', menuBtnClicked);
    bindClick('btn-repeal', menuBtnClicked);
    bindClick('btn-save', menuBtnClicked);
    
    // 变量
    let mouseDown = false;
    let select = 0;// 0:line;   1:rect;   2:arc
    // 绘图对象创建
    let downPoint = new Point(0,0);
    let movePoint = new Point(0,0);
    let upPoint = new Point(0,0);
    // 图形对象
    let line,
        rect,
        arc;
    
    /**
     * 按下
     */
    function handleMouseDown (event) {
        //
        downPoint.x = event.clientX - canvasRect.left;
        downPoint.y = event.clientY - canvasRect.top;
        //
        switch (select) {
            case 0 :
                line = new Line(downPoint, downPoint);
                line.startPoint = downPoint;
                break;
            
            case 1 :
                rect = new Rect(new Point(downPoint.x, downPoint.y), 0, 0);
                break;
            
            case 2 :
                arc = new Arc(new Point(downPoint.x, downPoint.y), 0);
                break;
                
            case 4 :
                line = new Line(downPoint, downPoint);
                line.startPoint = downPoint;
                break;
        }
        //
        mouseDown = true;
    }
    
    /**
     * 移动
     */
    function handleMouseMove (event) {
        //
        movePoint.x = event.clientX - canvasRect.left;
        movePoint.y = event.clientY - canvasRect.top;
        //
        if (movePoint.x === downPoint.x && movePoint.y === downPoint.y) {
            return;
        }
        if (movePoint.x === upPoint.x && movePoint.y === upPoint.y) {
            return;
        }
        //
        if (mouseDown) {
            //  清除
            clearCanvas();
            //
            switch (select) {
                case 0 :
                    line.endPoint = movePoint;
                    Utils.drawLine(context, line);
                    break;
                
                case 1 :
                    rect.width = movePoint.x - downPoint.x;
                    rect.height = movePoint.y - downPoint.y;
                    Utils.drawRect(context, rect);
                    break;
                
                case 2 :
                    //
                    let x = movePoint.x - downPoint.x;
                    let y = movePoint.y - downPoint.y;
                    //
                    arc.radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                    // 绘制
                    arc.startPoint.x = downPoint.x;
                    arc.startPoint.y = downPoint.y;
                    Utils.drawArc(context, arc);
                    break;
                    
                case 3 :
                    line.startPoint = line.endPoint;
                    line.endPoint = movePoint;
                    Utils.drawLine(context, line);
                    break;
            }
            // 历史
            Utils.drawHistory(context);
        }
    }
    
    /**
     * 抬起
     */
    function handleMouseUp (event) {
        upPoint.x = event.clientX - canvasRect.left;
        upPoint.y = event.clientY - canvasRect.top;
        //
        if (mouseDown) {
            //
            mouseDown = false;
            //
            switch (select) {
                case 0 :
                    line.endPoint = upPoint;
                    // 不存在时
                    if (!downPoint.equals(upPoint)) {
                        Utils.addHistory(new Line(new Point(downPoint.x, downPoint.y), new Point(upPoint.x, upPoint.y)));
                    }
                    break;
                
                case 1 :
                    rect.width = upPoint.x - downPoint.x;
                    rect.height = upPoint.y - downPoint.y;
                    //
                    Utils.addHistory(new Rect(new Point(downPoint.x, downPoint.y), rect.width, rect.height));
                    break;
                
                case 2 :
                    //
                    Utils.addHistory(new Arc(new Point(arc.startPoint.x, arc.startPoint.y), arc.radius));
                    break;
                    
                case 3 :
                    line.endPoint = upPoint;
                    // 不存在时
                    if (!downPoint.equals(upPoint)) {
                        Utils.addHistory(new Line(new Point(downPoint.x, downPoint.y), new Point(upPoint.x, upPoint.y)));
                    }
                    break;
            }
            // 清空
            //clearCanvas();
            //
            Utils.drawHistory(context);
            
        }
    }
    
    /**
     * 清空
     */
    function clearCanvas () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    /**
     * 保存
     */
    function saveCanvas () {
        let reg = canvas.toDataURL("image/png");//跳转页面手动保存
        console.log(reg);
        //let reg=canvas.toDataURL("images/png").replace("images/png","images/octet-stream");// 直接自动保存下载
        location.href = reg ;
    }
    
    /**
     * 菜单按钮点击事件
     */
    function menuBtnClicked (event) {
        let domID = event.srcElement.id;
        //
        switch (domID) {
            // 直线
            case 'btn-line' :
                select = 0;
                showHint('当前操作：画直线');
                break;
            // 矩形
            case 'btn-rect' :
                select = 1;
                showHint('当前操作：画方形');
                break;
            // 圆
            case 'btn-oval' :
                select = 2;
                showHint('当前操作：画圆形');
                break;
            // 画笔
            case 'btn-pencil' :
                select = 3;
                showHint('当前操作：画笔');
                break;
            // 清空
            case 'btn-clear' :
                Utils.clearHistory();
                clearCanvas();
                Utils.drawHistory(context);
                showHint('当前操作：清空画布');
                break;
            // 撤销
            case 'btn-repeal' :
                Utils.repealHistory();
                clearCanvas();
                Utils.drawHistory(context);
                showHint('当前操作：撤销');
                break;
            // 保存
            case 'btn-save' :
                saveCanvas();
                break;
            
        }
    }
    
    /**
     *
     */
    function showHint (msg) {
        document.getElementById('hint').innerHTML = msg;
    }
});