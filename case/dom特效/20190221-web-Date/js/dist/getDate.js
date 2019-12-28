let vm = new Vue({
    el : "#date",
    data : {
        nowDate : new Date(),
        setDate : new Date(),
        //
        inputDate : "2019-01-01",
        inputTime : "00:00",

    },
    computed : {

        inputDate_timestamp : function () {
            let arr = this.inputDate.split("-").concat(this.inputTime.split(":"));
            let d = new Date(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]), parseInt(arr[3]), parseInt(arr[4]), 0);// ❤最后秒，给0
            return d.getTime();
        },
    },
    methods : {
        // 每秒获取时间
        getNowTime : function () {
            let _this = this;
            let timer = window.setInterval(function () {
                _this.nowDate = new Date();
            })
        },
    },
    created : function () {
        //
        this.getNowTime();
    },
});


// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}