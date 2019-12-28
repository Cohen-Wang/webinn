/* 标准键盘布局
┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
│Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
└───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
│~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
│ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
│ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
│ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
│ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
└─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
*/


let vm = new Vue({

    el : '#box',

    data : {
        //
        english : '',
        chinese : '',
        pronunciation : '',
        //
        words : [{
            english : 'a',
            chinese : 'b',
            pronunciation : 'c',
            date : 'd',
        },{
            english : 'a',
            chinese : 'b',
            pronunciation : 'c',
            date : 'd',
        }],// 存储主体内容

    },

    methods : {

        /**
         * ajax
         */
        // 获取
        readTxt : function () {
            let _this = this;
            let url = "./php/index.php";
            this.$http.post(url, {
                action : 'read',
            }, {
                emulateJSON : true
            }).then(function (data) {
                this.words = [];
                let arr = data.body.content;
                for (let i = 0; i < arr.length; i++) {
                    this.words[i] = {
                        english : arr[i].english,
                        chinese : arr[i].chinese,
                        pronunciation : arr[i].pronunciation,
                        date : _this.getRightDate(arr[i].date),
                    }
                }
            }, function (response) {
                console.info('没有连接，状态码：' + response.status);
            });
        },

        // 写入
        writeTxt : function () {
            let url = "./php/index.php";
            this.$http.post(url, {
                action : 'write',
                //
                english : this.english,
                chinese : this.chinese,
                pronunciation : this.pronunciation,
            }, {
                emulateJSON : true
            }).then(function (data) {
                this.words = [];
                let arr = data.body.content;
                for (let i = 0; i < arr.length; i++) {
                    this.words[i] = {
                        english : arr[i].english,
                        chinese : arr[i].chinese,
                        pronunciation : arr[i].pronunciation,
                        date : arr[i].date,
                    }
                }
            }, function (response) {
                console.info('没有连接，状态码：' + response.status);
            });
        },

        // 拼写日期
        getRightDate : function (timeline) {
            let str = new Date(timeline*1000).getFullYear() + '-'
                + this.double((new Date(timeline*1000).getMonth()+1)) + '-'
                + this.double(new Date(timeline*1000).getDate()) + '  '
                + this.double(new Date(timeline*1000).getHours()) + ':'
                + this.double(new Date(timeline*1000).getMinutes()) + ':'
                + this.double(new Date(timeline*1000).getSeconds());
            return str;
        },

        // 保证两位数
        double : function (num) {
            if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }


    },

    created : function () {
        //
        this.readTxt();
    }

});