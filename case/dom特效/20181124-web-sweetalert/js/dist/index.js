

let vm = new Vue({


    el : "#alertsweet",


    data : {
        players : [{
            name : "cohen",
            age : 23,
            hobby : 'basketball'
        },{
            name : "kobe",
            age : 38,
            hobby : 'basketball'
        },{
            name : "james",
            age : 33,
            hobby : 'basketball'
        },{
            name : "c罗",
            age : 34,
            hobby : 'football'
        }],


    },


    methods : {

        // 成功
        showSuccess : function () {
            swal({
                type : "success",
                title : "提交成功",
                text : "",
                // 确定按钮
                showConfirmButton : true,
                confirmButtonText : "是的",
                confirmButtonColor : "green",
                timer : 3000,
            });
        },

        // 警告
        showWarning : function () {
            swal({
                type : "warning",
                title : "警告",
                text : "不允许删除此内容",
                // 确定按钮
                showConfirmButton : true,
                confirmButtonText : "确定按钮",
                confirmButtonColor : "gold",
                timer : 3000,
                //
                closeOnConfirm : false,
            });
        },

        // 错误
        showError : function () {
            swal({
                type : "error",
                title : "错误",
                text : "不允许删除此内容",
                // 确定按钮
                showConfirmButton : true,// 是否显示确定按钮
                confirmButtonText : "确定",
                confirmButtonColor : "#DD6B55",
                timer : 3000,
                //
                closeOnConfirm : false,
            });
        },

        // 输入框
        showInput : function () {
            swal({
                type : "input",
                title : "请输入密码？",
                // 确认按钮
                showConfirmButton : true,
                confirmButtonText : "确定",
                confirmButtonColor : "rgb(48,115,172)",
                // 取消按钮。
                showCancelButton : true,
                cancelButtonText : "取消",
                // 点击确认后关闭，默认是true（直接关闭）；
                // 若密码正确，直接关闭是可以的
                // 但密码错误，由于直接关闭，就无法提示密码错误
                // 所以一定要写成false
                closeOnConfirm : false,// 一定要写成false
                //
                inputType : "password",
                inputPlaceholder : "请输入密码",
                inputAutoTrim : true,
            }, function (inputValue) {
                let passwd = "1234";
                if (passwd === inputValue) {
                    // do something


                } else {
                    swal("密码错误", "你输入的密码有误", "error");
                }
            }, function () {
                // do nothing
            });
        },

        // 删除提示
        deletePlayer : function (index) {
            let _this = this;
            // --------------------------------------
            swal ({
                type : "warning",
                title : "您确定要删除这条数据吗",
                text : "删除后将无法恢复，请谨慎操作！",
                // 确认按钮
                confirmButtonColor : "#DD6B55",
                confirmButtonText : "确定删除！",
                // 取消按钮
                showCancelButton : true,
                cancelButtonText : "取消",
                //
                closeOnConfirm : false,
                closeOnCancel : false
            },
            function (isConfirm) {
                if (isConfirm) {
                    // 当点击 "确定" 后，执行代码
                    let url = "./php/dist/index.php";
                    _this.$http.post(url , {
                        action : 'test',
                    }, {
                        emulateJSON:true
                    }).then(function (data) {
                        let result = data.body.result;
                        if (result === true) {
                            this.players.splice(index, 1);
                            swal("操作成功!", "已成功删除数据！", "success");
                        } else {
                            swal("删除失败!", "删除失败，请联系客服人员！", "error");
                        }
                    }, function (response) {
                        console.log(response);
                    });
                } else {
                    swal ({
                        title : "已取消",
                        text : "您取消了删除操作！",
                        type : "error"
                    })
                }
            })
        },
    }
});