let date_practice_vm = new Vue({
    el : "#date_practice",
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