
/**
 * 并不是所有设备的绘制时间间隔是1000/60 ms, 以及上面并木有cancel相关方法，所以，就有下面这份更全面的兼容方法：
 */
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());



let random = function (min, max) {
    return Math.random() * (max - min) + min;
};

// 创建canvas画布
let canvasFactory = new lottery.CanvasFactory(document.body);
let can = canvasFactory.getCanvas();
let ctx = canvasFactory.getContext();


// +----------------------------------------------------------------------
// | 背景动画
// +----------------------------------------------------------------------
// 所有人的名字所组成的字
let user_list = [...USER_LIST];
let hollow_circle_elements = [];
//
let solid_main_text_elements = [];

// +----------------------------------------------------------------------
// | 抽奖
// +----------------------------------------------------------------------
let isStart = false;
can.addEventListener('click', function () {
    isStart = !isStart;
});
let nowName = '';


let isStartGame = false;
let timer = null;
// +----------------------------------------------------------------------
// | debug
// +----------------------------------------------------------------------



// +----------------------------------------------------------------------
// | // 渲染
// +----------------------------------------------------------------------
let style_color = ~~random(0, 250);



let color = 'hsl(' + style_color + ', 100%, 97%)';
ctx.fillStyle = color;
ctx.fillRect(0, 0, can.width, can.height);

let logo_particle = [];

let myImageData = new lottery.ImageData();
myImageData.getInfo({
    src: './res/image/tiefan.png',
    width: 300,
}, function (imageData) {
    let data = imageData.data;
    let result = myImageData.calculate(data);

    for (let i = 0, len = result.length; i < len; i++) {
        let options = {
            x: can.width / 2 - 150 + result[i].x + (Math.random() - 0.5) * 3,
            y: can.height / 2 - 350 + result[i].y + (Math.random() - 0.5) * 3,
            width: .3,
            height: .3,
            color: `hsl(${style_color}, 100%, 40%)`,
        };
        //
        logo_particle.push(options);
        //
        let solidRect = new lottery.element.SolidRect(options);
        solidRect.render(ctx);
    }

    // 预加载
    let config = RESOURCE_CONFIG.image;
    function loadAllResource (config, callback) {
        let R = {};
        let loadedNumber = 0;
        for (let i = 0, len = config.length; i < len; i++) {
            R[config[i].name] = new Image();// 创建一个同名的key
            R[config[i].name].src = config[i].url;// 请求
            R[config[i].name].onload = function () {// 监听
                loadedNumber++;
                callback && callback(loadedNumber);
            }
        }
    }
    loadAllResource(config, function (loadedNumber) {
        //清屏
        let color = 'hsl(' + style_color + ', 100%, 97%)';
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, can.width, can.height);
        // 画LOGO
        for (let i = 0, len = logo_particle.length; i < len; i++) {
            let solidRect = new lottery.element.SolidRect(logo_particle[i]);
            solidRect.render(ctx);
        }

        //判断是否已经全部加载完毕
        if (loadedNumber !== config.length) {
            // 写加载文字
            let options = {
                x: can.width / 2,
                y: can.height / 2 + 100,
                color: `hsl(${style_color}, 100%, 40%)`,
                fontSize: 20,
                text : '（' + ((loadedNumber / config.length) * 100).toFixed(2) + '%） 资源加载中...',
            };
            let hollowText = new lottery.element.HollowText(options);
            hollowText.render(ctx);
        } else {
            let options = {
                x: can.width / 2,
                y: can.height / 2 + 100,
                color: `hsl(${style_color}, 100%, 40%)`,
                fontSize: 20,
                text : '双击开始',
            };
            let hollowText = new lottery.element.HollowText(options);
            hollowText.render(ctx);


            can.addEventListener('dblclick', function () {
                window.clearInterval(timer);
                timer = window.setInterval(function () {
                    start();
                }, 1000 / 60);
            })


        }
    });



});




// 动画
// (function show () {
//     start();
//     // 动画
//     window.requestAnimationFrame(show);
// }());





function start () {
    // 改变数值
    style_color += 0.1;
    let color = 'hsl(' + style_color + ', 100%, 97%)';
    ctx.fillStyle = color;


    // +----------------------------------------------------------------------
    // | 背景（用画方型的方法清空画布）
    // +----------------------------------------------------------------------
    ctx.fillRect(0, 0, can.width, can.height);

    // +----------------------------------------------------------------------
    // | 背景动画
    // +----------------------------------------------------------------------



    // 空心圆
    if (hollow_circle_elements.length < HOLLOW_CIRCLE_CONFIG['num'] && Math.random() <= HOLLOW_CIRCLE_CONFIG['create_probability']) {
        let options = {
            x: random(0, can.width),
            y: random(0, can.height),
            radius: random(6, 12),
            opacity: random(.3, .5),
            color: `hsl(${style_color}, 100%, ` + random(40, 70) + `%)`,
        };
        let animation_options = {
            radius_speed: random(.08, .16),
            opacity_speed: random(.003, .006)
        };
        let hollowCircle = new lottery.element.HollowCircle(options);
        hollow_circle_elements.push({
            item: hollowCircle,
            animation_options: animation_options,
        });
    }
    //
    for (let i = 0,len = hollow_circle_elements.length; i < len; i++) {
        let item = hollow_circle_elements[i].item;
        let animation_options = hollow_circle_elements[i].animation_options;
        if (item.opacity <= 0) {
            hollow_circle_elements.splice(i, 1);
            item = null;
            len--;
            i--;
        } else {
            lottery.animation.bigOut(item, ctx, animation_options);
        }
    }



    // +----------------------------------------------------------------------
    // | 抽奖动画
    // +----------------------------------------------------------------------
    if (isStart) {
        if (solid_main_text_elements.length < 100 && Math.random() <= .4) {
            let n = random(0, user_list.length - 1);
            let index = Math.floor(n);
            let text = user_list[index];
            let options = {
                x: can.width / 2,
                y: can.height / 2,
                opacity: 1,
                fontSize: 80,
                color: `hsl(${style_color}, 100%, ` + random(40, 70) + `%)`,
                text: text,
            };

            let animation_options = {
                isText: true,
                x_speed: random(-20, 20),
                y_speed: random(-10, 10),
                fontSize_speed: random(2, 4),
                opacity_speed: random(.05, .1)
            };

            let solidText = new lottery.element.SolidText(options);
            solid_main_text_elements.push({
                item: solidText,
                animation_options: animation_options,
            });
        }
        //
        for (let i = 0,len = solid_main_text_elements.length; i < len; i++) {
            let item = solid_main_text_elements[i].item;
            let animation_options = solid_main_text_elements[i].animation_options;
            if (item.opacity <= 0) {
                solid_main_text_elements.splice(i, 1);
                item = null;
                len--;
                i--;
            } else {
                lottery.animation.moveSmallOut(item, ctx, animation_options);
            }
        }
    } else {
        if (solid_main_text_elements.length >= 1) {
            console.log('length' + solid_main_text_elements.length);
            nowName = solid_main_text_elements[solid_main_text_elements.length - 1].item.text;
            console.log(nowName);

            // 删除当前人名
            let index = user_list.indexOf(nowName);
            console.log(index);
            user_list.splice(index, 1);

            solid_main_text_elements = [];

        }
    }


    //
    if (nowName !== '' && !isStart) {
        let options = {
            x: can.width / 2,
            y: can.height / 2,
            color: '#000',
            fontSize: 120,
            text: nowName,
        };
        let now = new lottery.element.SolidText(options);
        now.render(ctx);
    }

    // +----------------------------------------------------------------------
    // | 测试
    // +----------------------------------------------------------------------
    // hollowRect.render(ctx);
    // test.render(ctx);



}

