/**
 * 标准键盘布局
 * ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 * │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 * └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 * │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 * │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 * ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 * │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 * ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 * │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 * └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 */

let vm = new Vue({


    el : '#app',


    data : {
        // 模拟数据
        list : [{
            title : 'Chrome更新了',
            imgUrl : 'images/Chrome.png',
            tips : '不再支持Flash视频播放',
            time : '上午 8:30'
        },{
            title : '电影新资讯',
            imgUrl : 'images/Sina.png',
            tips : '电影《红海行动》上映以来票房暴涨，很多国人表示对国产电影有了新的改观',
            time : '上午 12:00'
        },{
            title : '聚焦两会·共筑中国梦',
            imgUrl : 'images/qq.png',
            tips : '习近平代表的两会故事',
            time : '下午 17:45'
        }],
        // 为了滑动
        startX : 0,
        endX : 0,
    },


    methods: {
        // 跳转
        skip : function () {
            if (this.checkSlide()) {
                this.restSlide();
            } else {
                alert('You click the slide!')
            }
        },

        // 滑动开始
        touchStart : function (e) {
            // 记录初始位置
            this.startX = e.touches[0].clientX;
        },

        // 滑动结束
        touchEnd : function (e) {
            // 当前滑动的父级元素
            let parentElement = e.currentTarget.parentElement;
            // 记录结束位置
            this.endX = e.changedTouches[0].clientX;
            // 左滑
            if (parentElement.dataset.type === "0" && this.startX - this.endX > 30) {
                this.restSlide();
                parentElement.dataset.type = "1";
            }
            // 右滑
            if (parentElement.dataset.type === "1" && this.startX - this.endX < -30) {
                this.restSlide();
                parentElement.dataset.type = "0";
            }
            //
            this.startX = 0;
            this.endX = 0;
        },

        // 判断当前是否有滑块处于滑动状态
        checkSlide : function () {
            let listItems = document.querySelectorAll('.list-item');
            for (let i = 0; i < listItems.length; i++) {
                if (listItems[i].dataset.type === "1") {
                    return true;
                }
            }
            return false;
        },

        // 复位滑动状态
        restSlide : function () {
            let listItems = document.querySelectorAll('.list-item');
            // 复位
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].dataset.type = "0";
            }
        },

        // 删除
        deleteItem : function (e) {
            let confirm = window.confirm("确定删除？");
            if (confirm) {
                // 当前索引
                let index = e.currentTarget.dataset.index;
                // 复位
                this.restSlide();
                // 删除
                this.list.splice(index, 1);
            }
        }
    }

});