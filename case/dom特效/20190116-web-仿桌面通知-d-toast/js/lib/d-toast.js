/**
 * @file 桌面通知、仿桌面通知
 * @author cedar
 * @createDate 2018-09-05 16:21:11
 **/


function _d_toast_init_css() {
    let d_toast_text_node = ".zoom-image{" +
        "width:100%;" +
        "height:0;" +
        "padding-bottom: 100%;" +
        "overflow:hidden;" +
        "background-position: center center;" +
        "background-repeat: no-repeat;-webkit-background-size:cover;" +
        "-moz-background-size:cover;" +
        "background-size:cover;" +
        "}" +
        ".20190116-web-防桌面通知-d-toast-icon{" +
        "width:50px;" +
        "height:50px;" +
        "margin: auto;" +
        "margin-left:20px;" +
        "position: absolute;" +
        "top: 0;" +
        "left: 0;" +
        "bottom: 0;" +
        "right: 0;}" +
        ".20190116-web-防桌面通知-d-toast-close:hover{" +
        "color:#FFFFFF !important" +
        "}" +
        ".20190116-web-防桌面通知-d-toast{" +
        "moz-user-select: -moz-none;" +
        "-moz-user-select: none;" +
        "-o-user-select:none;" +
        "-khtml-user-select:none;" +
        "-webkit-user-select:none;" +
        "-ms-user-select:none;" +
        "user-select:none;" +
        "animation:20190116-web-防桌面通知-d-toast-left-in 0.5s;" +
        "-moz-animation:20190116-web-防桌面通知-d-toast-left-in 0.5s; " +
        "/* Firefox */-webkit-animation:20190116-web-防桌面通知-d-toast-left-in 0.5s; " +
        "/* Safari and Chrome */-o-animation:20190116-web-防桌面通知-d-toast-left-in 0.5s; " +
        "/* Opera */}" +
        ".20190116-web-防桌面通知-d-toast-close::before{content:\"＋\";}" +
        "@keyframes 20190116-web-防桌面通知-d-toast-left-in{" +
        "from {right:-400px ;}" +
        "to {right:30px;}" +
        "}" +
        "@-moz-keyframes 20190116-web-防桌面通知-d-toast-left-in " +
        "/* Firefox */{from {right:-400px;}to {right:30px;}}" +
        "@-webkit-keyframes 20190116-web-防桌面通知-d-toast-left-in " +
        "/* Safari 和 Chrome */{from {right:-400px;}to {right:30px;}}" +
        "@-o-keyframes 20190116-web-防桌面通知-d-toast-left-in " +
        "/* Opera */{from {right:-400px;}to {right:30px;}}" +
        "@keyframes 20190116-web-防桌面通知-d-toast-right-out{from{right: 30px;}to{right: -400px;}}" +
        "@-webkit-keyframes 20190116-web-防桌面通知-d-toast-right-out{from{right: 30px;}to{right: -400px;}}" +
        "@-moz-keyframes 20190116-web-防桌面通知-d-toast-right-out{from{right: 30px;}to{right: -400px;}}" +
        "@-o-keyframes 20190116-web-防桌面通知-d-toast-right-out{from{right: 30px;}to{right: -400px;}}" +
        ".20190116-web-防桌面通知-d-toast-close-start{" +
        "animation: 20190116-web-防桌面通知-d-toast-right-out 0.5s;" +
        "-webkit-animation: 20190116-web-防桌面通知-d-toast-right-out 0.5s;" +
        "-moz-animation: 20190116-web-防桌面通知-d-toast-right-out 0.5s;" +
        "-o-animation: 20190116-web-防桌面通知-d-toast-right-out 0.5s;}";



    let d_toast_style = document.createElement("style");
    d_toast_style.type = "text/css";

    try {
        d_toast_style.appendChild(document.createTextNode(d_toast_text_node));
    } catch (ex) {
        d_toast_style.styleSheet.cssText = d_toast_text_node;
    }
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(d_toast_style);
}

_d_toast_init_css();


/**
 * 类
 */
class dToast {


    /**
     * constructor
     * @param config
     */
    constructor (config) {
        if (typeof config === "string") {
            config = {
                title: "新消息",
                body: config,
            }
        } else if (typeof config.title === "undefined") {
            config.title = "新消息";
        }
        //
        this.toast(config);
    };

    /**
     *
     * @param config
     */
    inner (config) {
        let date = new Date();
        date = date.getHours() + ":" + date.getMinutes();
        let _div = document.createElement("div");
        let _div_icon = document.createElement("div");
        let _div_content = document.createElement("div");
        let _close = document.createElement('span');
        let _div_img = document.createElement("div");
        let _div_ul = document.createElement("ul");
        let _div_li_1 = document.createElement("li");
        let _div_li_2 = document.createElement("li");
        let _div_li_3 = document.createElement("li");

        _div.oncontextmenu="return false";
        _div.onselectstart="return false";
        _close.className = "20190116-web-防桌面通知-d-toast-close";
        _close.style.transform = "rotate(45deg)";
        _close.style.webkitTransform = "rotate(45deg)";
        _close.style.mskitTransform = "rotate(45deg)";
        _close.style.mozkitTransform = "rotate(45deg)";
        _close.style.oTransform = "rotate(45deg)";
        _close.style.color = "#ADADAD";
        _close.style.fontSize = "26px";
        _close.style.fontWeight = "normal";
        _close.style.position = "absolute";
        _close.style.top = "6px";
        _close.style.right = "6px";
        _close.style.display = "none";
        _div_icon.style.width = "50px";
        _div_icon.style.height = "50px";
        _div_icon.style.margin = "auto";
        _div_icon.style.marginLeft = "20px";
        _div_icon.style.position = "absolute";
        _div_icon.style.top = "0";
        _div_icon.style.right = "0";
        _div_icon.style.buttom = "0";
        _div_icon.style.right = "0";

        let toast_data = config.data;
        _div_li_1.innerText = config.title;
        _div_li_2.innerText = config.body;
        _div_li_3.innerHTML = date + "<span style='font-size:16px;font-weight:bold;'> · </span>" + document.domain;

        if (config.icon !== undefined && config.icon != null && config.icon !== "") {
            _div_img.classList.add("zoom-image");
            _div_img.style.backgroundImage = "url(" + config.icon + ")";_div_li_1.style.maxWidth = "260px";
            _div_li_2.style.maxWidth = "260px";_div_li_3.style.maxWidth = "260px";
        } else {
            _div_li_1.style.maxWidth = "330px";
            _div_li_2.style.maxWidth = "330px";
            _div_li_3.style.maxWidth = "330px";
            _div_li_1.style.marginLeft = "-10px";
            _div_li_2.style.marginLeft = "-10px";
            _div_li_3.style.marginLeft = "-10px";
        }

        _div_li_1.style.wordWrap = "break-word";
        _div_li_2.style.wordWrap = "break-word";
        _div_li_3.style.wordWrap = "break-word";
        _div.onmouseover = function (e) {
            _close.style.display = "block";
        };

        _div.onmouseout = function (e) {
            _close.style.display = "none";
        };

        _close.onclick = function (e) {
            _div.className = "20190116-web-防桌面通知-d-toast-close-start";
            setTimeout(function () {
                _div.remove();
                if (typeof onclose === "function") {
                    config.onclose(e);
                }
            }, 500);
        };


        _close.onselectstart = function () {
            return false;};
        let toast_items = document.getElementsByClassName("20190116-web-防桌面通知-d-toast");
        let _width = 0;

        for (let i = 0; i < toast_items.length; i++) {
            let item = toast_items[i];
            _width += item.offsetHeight + 20;
        }

        let _div_bottom = _width + 20;
        let _body_height = document.documentElement.clientHeight;
        if (_body_height - 200 < _div_bottom) {
            for (let i = toast_items.length - 1; i >= 0; i--) {
                toast_items[i].remove();}_div_bottom = 20;
        }

        if (typeof config.onclick === "function") {
            _div.onclick = function (e) {
                let _target = e.target;
                if (_target.nodeName === "SPAN") {
                    _close.click;
                } else {
                    config.onclick(toast_data);
                }
            };
        }

        _div.style.cursor = "default";
        _div.style.width = "360px";
        _div.style.padding = "10px";
        _div.style.position = "fixed";
        _div.style.bottom = _div_bottom + "px";
        _div.style.right = "20px";
        _div.style.backgroundColor = "#474747";
        _div_content.style.margin = "20px;";
        _div_content.style.position = "relative";
        _div_content.style.left = "80px";
        _div_ul.style.listStyle = "none";
        _div_ul.style.paddingLeft = "0px";
        _div_ul.style.marginTop = "10px";
        _div_ul.style.marginBottom = "10px";
        _div_li_1.style.color = "#FFFFFF";
        _div_li_1.style.fontWeight = "bold";
        _div_li_1.style.fontSize = "16px";
        _div_li_2.style.color = "#ADADAD";
        _div_li_2.style.fontSize = "16px";
        _div_li_3.style.color = "#ADADAD";
        _div_li_3.style.fontSize = "12px";
        _div_li_3.style.marginTop = "-3px";
        _div.className = "20190116-web-防桌面通知-d-toast";
        _div_icon.className = "20190116-web-防桌面通知-d-toast-icon";
        _div_content.className = "20190116-web-防桌面通知-d-toast-content";
        _div_li_1.className = "20190116-web-防桌面通知-d-toast-title";
        _div_li_2.className = "20190116-web-防桌面通知-d-toast-body";
        _div_li_3.className = "20190116-web-防桌面通知-d-toast-info";
        _div_ul.appendChild(_div_li_1);
        _div_ul.appendChild(_div_li_2);
        _div_ul.appendChild(_div_li_3);
        _div_icon.appendChild(_div_img);
        _div_content.appendChild(_div_ul);

        if (typeof config.icon === "string") {
            _div.appendChild(_div_icon);
        } else {
            _div_content.style.left = "30px";
        }

        _div.appendChild(_div_content);
        _div.appendChild(_close);
        let _d_toast_timeout = config.timeout;

        if (typeof _d_toast_timeout === "undefined") {
            _d_toast_timeout = 6500;
        }

        document.body.appendChild(_div);
        if (_d_toast_timeout > 0) {
            setTimeout(function () {
                _div.className = "20190116-web-防桌面通知-d-toast-close-start";
                setTimeout(function () {
                    _div.remove();
                }, 500);
            }, _d_toast_timeout);
        }
    };


    /**
     *
     * @param config
     */
    toast(config) {
        let self = this;
        let toast_config = config;

        if (window.Notification && Notification.permission !== "denied" && config.inner !== true) {
            Notification.requestPermission(function (status) {
                if (status === "granted") {
                    let _config = {
                        lang: "zh-CN",
                        tag: "toast-" + (+new Date()),
                        body: config.body,
                    };

                    if (typeof config.icon === "string") {
                        _config.icon = config.icon;
                    }

                    if (typeof config.data !== "undefined") {
                        _config.data = config.data;
                    }

                    if (typeof config.timeout !== "undefined") {
                        _config.timestamp = config.timeout;
                    }

                    const d_toast_n = new Notification(config.title, _config);
                    let d_toast_data = config.data;

                    d_toast_n.onclick = function (e) {
                        if (typeof toast_config.onclick === "function") {
                            toast_config.onclick(d_toast_data);
                        }
                    };
                } else {
                    if (config.dev === true) {
                        console.warn('请允许通知！');
                    }
                    self.inner(config);
                }
            });

        } else {
            if (config.dev === true) {
                console.warn("你的浏览器不支持！\n1、被禁止通知\n2、请更换浏览器\n3、已设置成浏览器通知");
            }
            self.inner(config);
        }
    };
}