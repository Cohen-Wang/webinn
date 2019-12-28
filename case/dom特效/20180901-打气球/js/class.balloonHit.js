

let balloonHit = function () {

    let num = 20;
    let wH = window.innerHeight || document.documentElement.clientHeight;
    let wW = window.innerWidth || document.documentElement.clientWidth;
    let bZ = 60;
    let balloons = [];// 为了不重新获取节点
    let timer = null;

    function init (num) {
        let fragment = document.createDocumentFragment();// 浏览器渲染回流，创建文档碎片

        for (let i = 0; i < num; i++) {
            let randomX = ~~(Math.random() * wW) - bZ;

            randomX = Math.max(0, randomX);// 我会用if判断，但不如这个方法

            let oBalloon = document.createElement('div');
            oBalloon.className = 'balloon';
            oBalloon.style.top = wH - bZ + 'px';
            oBalloon.style.left = randomX + 'px';
            balloons.push(oBalloon);// 为了不重新获取节点

            oBalloon.speed = ~~(Math.random() * 4) + 2;
            fragment.appendChild(oBalloon);
            //console.log(randomX);
        }
        document.body.appendChild(fragment);
    }
    init(num);

    function move () {
        //获取多个，节点集合，IE8及其以上
        //let aBalloons = document.querySelectorAll('.balloon');
        //console.log(balloons)
        for (let i = 0, len = balloons.length; i < len; i++) {
            balloons[i].style.top = balloons[i].offsetTop-balloons[i].speed+'px';
            if (balloons[i].offsetTop < 0) {
                balloons[i].parentNode.removeChild(balloons[i]);
                init(1);
            }
            //balloons[i].onclick=function(){};//绑定了10 次，浪费资源；
            /*要用事件监听*/

        }
    }
    //move();
    //timer = setInterval(move,1000/60);
    function recall () {
        move();
        //timer=setTimeout(arguments.callee,1000/30);
        timer=setTimeout(recall,1000/30);
    }
    recall();

    function boom (callback) {// 爆炸动画，this都是被点击的节点
        this.timer = setInterval (function () {
            if (this.offsetWidth<10) {
                clearInterval(this.timer);
                //this.parentNode.removeChild(this);
                callback && callback();
            }
            this.speed++;// 速度增加
            this.style.width = this.offsetWidth - 10 + 'px';
            this.style.height=this.offsetHeight - 10 + 'px';
        }.bind(this), 1000/60)
    }

    document.body.addEventListener('click', function (event) {
        if (event.target.className === 'balloon') {// 判断触发事件的
            //alert('1');
            //event.target.parentNode.removeChild(event.target);

            //boom();//如何改变指针问题
            boom.call(event.target, function () {
                this.parentNode.removeChild(this);
                init(1);
            }.bind(event.target));// 替换函数内部的this
        }
    })
};
