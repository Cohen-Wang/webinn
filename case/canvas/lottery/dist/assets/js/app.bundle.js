/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/Stats-js/build/stats.min.js":
/*!**************************************************!*\
  !*** ./node_modules/Stats-js/build/stats.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var c=function(){var n=0,l=document.createElement("div");function e(e){return l.appendChild(e.dom),e}function t(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),t(++n%l.children.length)},!1);var i=(performance||Date).now(),a=i,o=0,f=e(new c.Panel("FPS","#0ff","#002")),r=e(new c.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new c.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:l,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(r.update(e-i,200),a+1e3<=e&&(f.update(1e3*o/(e-a),100),a=e,o=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:l,setMode:t}};return c.Panel=function(n,l,i){var a=1/0,o=0,f=Math.round,r=f(window.devicePixelRatio||1),d=80*r,e=48*r,c=3*r,p=2*r,u=3*r,s=15*r,m=74*r,h=30*r,y=document.createElement("canvas");y.width=d,y.height=e,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,d,e),v.fillStyle=l,v.fillText(n,c,p),v.fillRect(u,s,m,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u,s,m,h),{dom:y,update:function(e,t){a=Math.min(a,e),o=Math.max(o,e),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,d,s),v.fillStyle=l,v.fillText(f(e)+" "+n+" ("+f(a)+"-"+f(o)+")",c,p),v.drawImage(y,u+r,s,m-r,h,u,s,m-r,h),v.fillRect(u+m-r,s,r,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u+m-r,s,r,f((1-e/t)*h))}}},c});


/***/ }),

/***/ "./src/assets/js/app/Lottery/Component/PrizeLevel.ts":
/*!***********************************************************!*\
  !*** ./src/assets/js/app/Lottery/Component/PrizeLevel.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __importDefault(__webpack_require__(/*! ../Element/Point */ "./src/assets/js/app/Lottery/Element/Point.ts"));
var Text_1 = __webpack_require__(/*! ../Element/Text */ "./src/assets/js/app/Lottery/Element/Text.ts");
var PrizeLevel = /** @class */ (function () {
    function PrizeLevel(options) {
        this.nameListBornPoints = [];
        this.nameList = []; // ？ 应该用泛型？？？？ Array<SolidText> | Array<ContourText> = [];
        this.backgroundImg = options.backgroundImg;
        this.title = options.title || '标题';
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 0;
        this.height = options.height || 0;
        //
        this.nameListLength = options.nameListLength || 1;
        this.isSpecial = options.isSpecial || false;
        // 创建标题
        this._initTitle();
        this._getNameListBornPoint();
        this._initNameList();
    }
    // 实例化标题文字
    PrizeLevel.prototype._initTitle = function () {
        var options = null;
        if (this.isSpecial) {
            options = {
                x: this.x + this.backgroundImg.naturalWidth / 2,
                y: this.y + 30,
                fontSize: 46,
                fontWeight: 30,
                lineWidth: 5,
                strokeColor: '#f3ea8f',
                fillColor: '#f92730',
                text: this.title,
            };
        }
        else {
            options = {
                x: this.x + this.backgroundImg.naturalWidth / 2,
                y: this.y + 30,
                fontSize: 28,
                fontWeight: 300,
                lineWidth: 5,
                strokeColor: '#f51230',
                fillColor: '#fee300',
                text: this.title,
            };
        }
        this.titleInstance = new Text_1.ContourText(options);
    };
    // 求出出生点
    PrizeLevel.prototype._getNameListBornPoint = function () {
        if (this.isSpecial) {
            var x = this.x + this.backgroundImg.naturalWidth / 2;
            var y = 50;
            this.nameListBornPoints.push(new Point_1.default(x, y));
        }
        else {
            for (var i = 0; i < this.nameListLength; i++) {
                var x = this.x + ((!(i % 2)) ? 60 : 200) + 20;
                var y = this.y + ~~(i / 2) * 30 + 50 + 20;
                this.nameListBornPoints.push(new Point_1.default(x, y));
            }
        }
    };
    // 创建名单
    PrizeLevel.prototype._initNameList = function () {
        if (this.nameListBornPoints.length === 1) {
            var options = {
                x: this.x + this.width / 2,
                y: this.y + 100,
                fontSize: 44,
                fontWeight: 900,
                lineWidth: 3,
                strokeColor: '#ac0006',
                fillColor: '#ff0',
            };
            this.nameList.push(new Text_1.ContourText(options));
        }
        else {
            for (var i = 0, len = this.nameListBornPoints.length; i < len; i++) {
                var options = {
                    x: this.nameListBornPoints[i].x,
                    y: this.nameListBornPoints[i].y,
                    fontSize: 28,
                    fontWeight: 500,
                    color: '#ac0006',
                };
                this.nameList.push(new Text_1.SolidText(options));
            }
        }
    };
    PrizeLevel.prototype.getNameList = function () {
        return this.nameList;
    };
    PrizeLevel.prototype.render = function (ctx) {
        // 画背景图
        ctx.drawImage(this.backgroundImg, this.x, this.y, this.width, this.height);
        // 渲染标题（特等奖，一等奖...)
        this.titleInstance.render(ctx);
        // 测试：渲染名单
        this.nameList.forEach(function (item) {
            item.render(ctx);
        });
    };
    return PrizeLevel;
}());
exports.PrizeLevel = PrizeLevel;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Component/WinnerList.ts":
/*!***********************************************************!*\
  !*** ./src/assets/js/app/Lottery/Component/WinnerList.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PrizeLevel_1 = __webpack_require__(/*! ./PrizeLevel */ "./src/assets/js/app/Lottery/Component/PrizeLevel.ts");
// 获奖名单
var WinnerList = /** @class */ (function () {
    function WinnerList(options) {
        // 等级类的数据配置
        this.config = [
            { title: '特等奖', y: 140, height: 140 },
            { title: '一等奖', y: 300, height: 130 },
            { title: '二等奖', y: 450, height: 170 },
            { title: '三等奖', y: 640, height: 260 },
        ];
        // 等级类实例（特等奖，一等奖，二等奖...）
        this.prizeLevels = [];
        this.backgroundImg = options.backgroundImg;
        this.titleImg = options.titleImg;
        this.levelImg = options.levelImg;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 100;
        this.height = options.height || 100;
        this.prizeLevel = options.prizeLevel || [];
        this.titleImgOpt = {
            marginTop: 10,
            width: 243,
            height: 243 * this.titleImg.naturalHeight / this.titleImg.naturalWidth
        };
        // 创建等级类实例
        this._initPrizeLevels();
    }
    // 创建等级类实例
    WinnerList.prototype._initPrizeLevels = function () {
        for (var i = 0, len = this.prizeLevel.length; i < len; i++) {
            var isSpecial = !i;
            var options = {
                backgroundImg: this.levelImg,
                title: this.config[i].title,
                x: this.x + 10,
                y: this.config[i].y || this.y + this.titleImgOpt.height + 20 + i * 190,
                width: this.width - 20,
                height: this.config[i].height,
                nameListLength: this.prizeLevel[i],
                isSpecial: isSpecial,
            };
            this.prizeLevels.push(new PrizeLevel_1.PrizeLevel(options));
        }
    };
    WinnerList.prototype.getAllNameList = function () {
        var result = [];
        for (var i = 0, len = this.prizeLevels.length; i < len; i++) {
            var nameList = this.prizeLevels[i].getNameList();
            for (var j = 0, lenJ = nameList.length; j < lenJ; j++) {
                result.push(nameList[j]);
            }
        }
        return result;
    };
    WinnerList.prototype.render = function (ctx) {
        // 绘制透明背景
        ctx.drawImage(this.backgroundImg, this.x, this.y, this.width, this.height);
        // 绘制'获奖名单'图片
        ctx.drawImage(this.titleImg, this.x + (this.width - this.titleImgOpt.width) / 2, this.titleImgOpt.marginTop, this.titleImgOpt.width, this.titleImgOpt.height);
        // 绘制 奖励区
        this.prizeLevels.forEach(function (item) {
            item.render(ctx);
        });
    };
    return WinnerList;
}());
exports.WinnerList = WinnerList;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Element/Lantern.ts":
/*!******************************************************!*\
  !*** ./src/assets/js/app/Lottery/Element/Lantern.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __importDefault(__webpack_require__(/*! ./Point */ "./src/assets/js/app/Lottery/Element/Point.ts"));
var Ribbon_1 = __webpack_require__(/*! ./Ribbon */ "./src/assets/js/app/Lottery/Element/Ribbon.ts");
var _random = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.random() * (max - min) + min;
};
var Lantern = /** @class */ (function () {
    function Lantern(options) {
        // ����
        this.lantern = {}; // ?��ע����һ����һ��Ҫ��ʼ��
        this.lantern.oImg = options.lantern.oImg;
        this.lantern.x = options.lantern.x || 0;
        this.lantern.y = options.lantern.y || 0;
        this.lantern.width = options.lantern.width || 100;
        // this.lantern.height = options.lantern.height || 100;// ���ܸ�Ĭ��ֵ
        this.lantern.angle = options.lantern.angle || 0;
        this.lantern.angleSpeed = options.lantern.angleSpeed || 10;
        // �д�
        this.ribbon = {}; // ?��ע����һ����һ��Ҫ��ʼ��
        this.ribbon.num = options.ribbon.num || 2;
        this.ribbon.distance = options.ribbon.distance || 200;
        this.ribbon.color = options.ribbon.color || '#ccc';
        this.ribbon.lineWidth = options.ribbon.lineWidth || 1;
        this.ribbon.globalAlpha = options.ribbon.globalAlpha || 1;
        this.ribbon.bornRange = options.ribbon.bornRange || 10;
        this.ribbon.speed = options.ribbon.speed || 10;
        this.ribbon.range = options.ribbon.range || 10;
        //
        this.beta = 0;
        //
        this.ribbons = [];
        //
        this.initRibbon();
    }
    // ��ʼ���д�
    Lantern.prototype.initRibbon = function () {
        for (var i = 0; i < this.ribbon.num; i++) {
            var distance = this.lantern.height ? this.lantern.height : this.lantern.width * this.lantern.oImg.naturalHeight / this.lantern.oImg.naturalWidth;
            var startX = this.lantern.x + Math.cos(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
            var startY = this.lantern.y + Math.sin(Math.PI / 180 * (this.lantern.angle + 90)) * distance;
            var controlX = startX;
            var controlY = startY + this.ribbon.distance / 3;
            var endX = startX; // ������X���꣨�䶯��
            var endY = startY + _random(this.ribbon.distance - 20, this.ribbon.distance + 20);
            var speed = _random(0.02, 0.03);
            var range = _random(20, 30);
            var options = {
                startPoint: new Point_1.default(startX, startY),
                controlPoint: new Point_1.default(controlX, controlY),
                endPoint: new Point_1.default(endX, endY),
                color: this.ribbon.color,
                lineWidth: this.ribbon.lineWidth,
                globalAlpha: this.ribbon.globalAlpha,
                speed: speed,
                range: range,
            };
            this.ribbons.push(new Ribbon_1.Ribbon(options));
        }
    };
    // ������
    Lantern.prototype.drawLantern = function (ctx) {
        var oImg = this.lantern.oImg;
        var imgWidth = this.lantern.oImg.naturalWidth;
        var imgHeight = this.lantern.oImg.naturalHeight;
        //
        var x = this.lantern.x;
        var y = this.lantern.y;
        var width = this.lantern.width;
        var height = this.lantern.height = width * imgHeight / imgWidth;
        // TODO ����������
        ctx.save();
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.rotate(this.lantern.angle * Math.PI / 180);
        // ����Ч��
        // ctx.fillStyle = 'rgba(255, 255, 0, 0.2)';
        // ctx.fillRect(0, 0, 200, 200);
        ctx.drawImage(oImg, 0, 0, imgWidth, imgHeight, -width / 2, 0, width, height);
        // ����Ч��
        // ctx.drawImage(oImg, 0, 0, imgWidth, imgHeight, 0, 0, width, height);
        // ctx.fillStyle = '#f00';
        // ctx.fillRect(0, 0, 20, 20);
        ctx.closePath();
        ctx.restore();
        ctx.translate(0, 0);
        ctx.rotate(0);
    };
    // ���д�
    Lantern.prototype.drawRibbon = function (ctx) {
        this.ribbons.forEach(function (item) {
            item.render(ctx);
        });
    };
    Lantern.prototype.render = function (ctx) {
        this.drawLantern(ctx);
        this.drawRibbon(ctx);
    };
    return Lantern;
}());
exports.Lantern = Lantern;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Element/MyImage.ts":
/*!******************************************************!*\
  !*** ./src/assets/js/app/Lottery/Element/MyImage.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MyImage = /** @class */ (function () {
    function MyImage(options) {
        this.oImg = options.oImg;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 0;
        this.height = options.height || 0;
        this.scale = options.scale || 1;
        this.opacity = options.opacity || 1;
    }
    MyImage.prototype.render = function (ctx) {
        ctx.save();
        ctx.scale(this.scale, this.scale);
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.oImg, this.x, this.y, this.width, this.height);
        ctx.restore();
    };
    return MyImage;
}());
exports.MyImage = MyImage;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Element/Point.ts":
/*!****************************************************!*\
  !*** ./src/assets/js/app/Lottery/Element/Point.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.default = Point;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Element/Ray.ts":
/*!**************************************************!*\
  !*** ./src/assets/js/app/Lottery/Element/Ray.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _random = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.random() * (max - min) + min;
};
/**
 * ����typescript�� Math.sign Ҫ�������������ĺܣ�����д�����������
 */
var _sign = function (n) {
    if (n > 0) {
        return 1;
    }
    else if (n === 0) {
        return 0;
    }
    else if (n === -0) {
        return -0;
    }
    else if (n < 0) {
        return -1;
    }
    else {
        return NaN;
    }
};
var Ray = /** @class */ (function () {
    function Ray(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // ʹ��ֵ
        this.o = Math.PI / 2 * (Math.random() * this.x - this.height / 2) / this.height;
        if (this.o === 0) {
            this.o = (Math.random() - 0.5) * Math.PI / 2; // �ָ��� -90 ~ +90
        }
        this.s = 2 * Math.PI * (Math.random() * this.y - this.width / 2) / this.width;
        if (this.s === 0) {
            this.s = (Math.random() - 0.5) * Math.PI;
        }
        this.h = 0;
        // �仯ֵ
        this.l = 0.02 * _sign(this.s); // ��������ֵ��1, -1, 0, -0, NaN
        this.c = 0.02 * _sign(this.o); // ��������ֵ��1, -1, 0, -0, NaN
        this.c += _random(-0.005, 0.005);
        this.d = _random(2, 4); // �߳�
    }
    Ray.prototype.render = function (ctx) {
        var startX = this.x + Math.cos(this.s) * this.h / 2;
        var startY = this.y + Math.sin(this.s) * this.h / 2;
        var endX = this.x + Math.cos(this.o) * this.h;
        var endY = this.y + Math.sin(this.o) * this.h;
        ctx.moveTo(this.x, this.y);
        ctx.quadraticCurveTo(startX, startY, endX, endY);
    };
    Ray.prototype.update = function () {
        this.o += this.c * 2; // ����2 ��Ϊ�� ��ʧ���
        this.s += this.l * 2; // ����2 ��Ϊ�� ��ʧ���
        this.h += Math.cos(this.o) * this.d;
    };
    return Ray;
}());
exports.Ray = Ray;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Element/Ribbon.ts":
/*!*****************************************************!*\
  !*** ./src/assets/js/app/Lottery/Element/Ribbon.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Ribbon = /** @class */ (function () {
    function Ribbon(options) {
        this.startPoint = options.startPoint;
        this.controlPoint = options.controlPoint;
        this.endPoint = options.endPoint;
        this.color = options.color || '#ccc';
        this.lineWidth = options.lineWidth || 14;
        this.globalAlpha = options.globalAlpha || 0.8;
        // ��̬����
        this.speed = options.speed || 10; // ����ҡ�ڵ��ٶ�
        this.range = options.range || 40; // ����ҡ�ڵķ�Χ
    }
    Ribbon.prototype.render = function (ctx) {
        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.globalAlpha;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        //ctx.beginPath();// ?��ע�⣺���ﷴ�����ܸ�closePath()����Ȼ��պ�
        ctx.moveTo(this.startPoint.x, this.startPoint.y);
        ctx.quadraticCurveTo(this.controlPoint.x, this.controlPoint.y, this.endPoint.x, this.endPoint.y);
        //ctx.closePath();// ?��ע�⣺���ﷴ�����ܸ�closePath()����Ȼ��պ�
        ctx.stroke();
        ctx.restore();
    };
    return Ribbon;
}());
exports.Ribbon = Ribbon;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Element/Text.ts":
/*!***************************************************!*\
  !*** ./src/assets/js/app/Lottery/Element/Text.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Text = /** @class */ (function () {
    function Text(options) {
        this.text = options.text || '';
        this.x = typeof options.x !== 'undefined' ? options.x : 0;
        this.y = typeof options.y !== 'undefined' ? options.y : 0;
        this.color = options.color || '#000';
        this.opacity = typeof options.opacity !== 'undefined' ? options.opacity : 1;
        this.fontStyle = options.fontStyle || 'normal';
        this.fontVariant = options.fontVariant || 'normal';
        this.fontWeight = typeof options.fontWeight !== 'undefined' ? options.fontWeight : 100;
        this.fontSize = typeof options.fontSize !== 'undefined' ? options.fontSize : 24;
        this.fontFamily = options.fontFamily || 'arial';
        // �˶�����
        this.speedX = options.speedX || 0;
        this.speedY = options.speedY || 0;
        this.speedOpacity = options.speedOpacity || 0;
    }
    return Text;
}());
var SolidText = /** @class */ (function (_super) {
    __extends(SolidText, _super);
    function SolidText(options) {
        return _super.call(this, options) || this;
    }
    SolidText.prototype.render = function (ctx) {
        ctx.save();
        ctx.font = this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
        ctx.fillStyle = this.color; // ������ɫ
        ctx.globalAlpha = this.opacity;
        ctx.textAlign = "center"; // ����ˮƽ���뷽ʽ
        ctx.textBaseline = "middle"; // ���ô�ֱ���뷽ʽ
        ctx.beginPath();
        ctx.fillText(this.text, this.x, this.y);
        ctx.closePath();
        ctx.restore();
    };
    return SolidText;
}(Text));
exports.SolidText = SolidText;
var HollowText = /** @class */ (function (_super) {
    __extends(HollowText, _super);
    function HollowText(options) {
        var _this = _super.call(this, options) || this;
        _this.lineWidth = options.lineWidth || 1;
        return _this;
    }
    HollowText.prototype.render = function (ctx) {
        ctx.save();
        ctx.font = this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
        ctx.strokeStyle = this.color; // ������ɫ
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.textAlign = "center"; // ����ˮƽ���뷽ʽ
        ctx.textBaseline = "middle"; // ���ô�ֱ���뷽ʽ
        ctx.beginPath();
        ctx.strokeText(this.text, this.x, this.y);
        ctx.closePath();
        ctx.restore();
    };
    return HollowText;
}(Text));
exports.HollowText = HollowText;
var ContourText = /** @class */ (function (_super) {
    __extends(ContourText, _super);
    function ContourText(options) {
        var _this = _super.call(this, options) || this;
        _this.lineWidth = options.lineWidth || 1;
        _this.strokeColor = options.strokeColor || '#f00';
        _this.fillColor = options.fillColor || '#ff0';
        return _this;
    }
    ContourText.prototype.render = function (ctx) {
        ctx.save();
        ctx.font = this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
        ctx.strokeStyle = this.strokeColor;
        ctx.fillStyle = this.fillColor;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.textAlign = "center"; // ����ˮƽ���뷽ʽ
        ctx.textBaseline = "middle"; // ���ô�ֱ���뷽ʽ
        ctx.beginPath();
        ctx.strokeText(this.text, this.x, this.y);
        ctx.fillText(this.text, this.x, this.y);
        ctx.closePath();
        ctx.restore();
    };
    return ContourText;
}(Text));
exports.ContourText = ContourText;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Lottery/TreasureBoxDown.ts":
/*!**************************************************************!*\
  !*** ./src/assets/js/app/Lottery/Lottery/TreasureBoxDown.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Text_1 = __webpack_require__(/*! ../Element/Text */ "./src/assets/js/app/Lottery/Element/Text.ts");
var MyImage_1 = __webpack_require__(/*! ../Element/MyImage */ "./src/assets/js/app/Lottery/Element/MyImage.ts");
var WinnerList_1 = __webpack_require__(/*! ../Component/WinnerList */ "./src/assets/js/app/Lottery/Component/WinnerList.ts");
var _random = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.random() * (max - min) + min;
};
// 动画步骤
var animationStep;
(function (animationStep) {
    animationStep[animationStep["noAnimation"] = 0] = "noAnimation";
    animationStep[animationStep["treasureBox"] = 1] = "treasureBox";
    animationStep[animationStep["boom"] = 2] = "boom";
    animationStep[animationStep["text"] = 3] = "text";
    animationStep[animationStep["nameBlink"] = 4] = "nameBlink";
})(animationStep || (animationStep = {}));
var TreasureBoxDown = /** @class */ (function () {
    function TreasureBoxDown(options) {
        // 宝箱实例 // 这接口 怎么定义？？？
        this.treasureBoxInstance = null;
        // 宝箱属性
        this.treasureBox = {
            oImg: null,
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            opacity: 1,
            scale: 1,
            duration: 60,
        };
        // 宝箱运动
        this.treasureBoxFrame = 0;
        // 宝箱属性
        this.treasureBoxSpeedY = 0;
        this.treasureBoxSpeedOpacity = 0;
        // 爆炸
        this.boom = {};
        this.boomStep = 0;
        // 文字属性
        this.text = {
            fontSize: 24,
            color: '#000',
            fontWeight: 600,
            duration: 60,
        };
        this.textOnMove = false;
        // 文字移动
        this.textSpeedX = 0;
        this.textSpeedY = 0;
        this.textFontSizeSpeed = 0;
        this.textFontWeightSpeed = 0;
        this.textFrame = 0;
        // 历史
        this.history = {
            x: 0,
            y: 0,
            fontSize: 24,
            color: '#000',
        };
        this.historyPoint = [];
        this.histories = [];
        this.lastIndex = 0;
        // 闪烁名字
        this.nameBlinks = [];
        this.nameBlink = {
            fontSize: 40,
            fontWeight: 600,
            color: '#000',
        };
        //
        this.targetColor = '#000';
        // 动画
        this.animationStep = animationStep.noAnimation;
        // 事件
        this.event = null;
        this.can = options.can;
        this.prizeLevel = options.prizeLevel;
        this.nameList = options.nameList;
        // 宝箱
        this.treasureBox.oImg = options.treasureBox.oImg;
        var treasureBoxImageInfo = {
            width: this.treasureBox.oImg.naturalWidth,
            height: this.treasureBox.oImg.naturalHeight,
        };
        this.treasureBox.width = options.treasureBox.width || 100;
        this.treasureBox.height = options.treasureBox.height || this.treasureBox.width * treasureBoxImageInfo.height / treasureBoxImageInfo.width;
        this.treasureBox.x = options.treasureBox.x || (this.can.width - this.treasureBox.width) / 2;
        this.treasureBox.y = options.treasureBox.y || (this.can.height - this.treasureBox.height) / 2;
        this.treasureBox.opacity = options.treasureBox.opacity || 1;
        this.treasureBox.scale = options.treasureBox.scale || 1;
        this.treasureBox.duration = options.treasureBox.duration || 60;
        // 爆炸图片
        this.boom.oImg = options.boom.oImg;
        // 出生文字
        if (!!options.text) {
            typeof options.text.fontSize !== 'undefined' && (this.text.fontSize = options.text.fontSize);
            typeof options.text.color !== 'undefined' && (this.text.color = options.text.color);
            typeof options.text.duration !== 'undefined' && (this.text.duration = options.text.duration);
        }
        // 历史
        // if (!!options.history) {
        //     typeof options.history.x !== 'undefined' && (this.history.x = options.history.x);
        //     typeof options.history.y !== 'undefined' && (this.history.y = options.history.y);
        //     typeof options.history.fontSize !== 'undefined' && (this.history.fontSize = options.history.fontSize);
        //     typeof options.history.color !=='undefined' && (this.history.color = options.history.color);
        // }
        // 闪烁文字
        if (!!options.nameBlink) {
            typeof options.nameBlink.fontSize !== 'undefined' && (this.nameBlink.fontSize = options.nameBlink.fontSize);
            typeof options.nameBlink.fontWeight !== 'undefined' && (this.nameBlink.fontWeight = options.nameBlink.fontWeight);
            typeof options.nameBlink.color !== 'undefined' && (this.nameBlink.color = options.nameBlink.color);
        }
        this.winnerListOpt = {
            backgroundImg: options.winnerList.backgroundImg,
            titleImg: options.winnerList.titleImg,
            levelImg: options.winnerList.levelImg,
            x: options.winnerList.x,
            y: options.winnerList.y,
            width: options.winnerList.width,
            height: options.winnerList.height,
        };
        // 检查用户名单和奖励等级长度
        // if (!this._checkLengthBetweenPrizeLevelAndNameList()) {
        //     alert('传入的用户名单和奖励等级长度不一样');
        // }
        // 实例化获奖名单
        this._initWinnerList();
        // 由于可能从本地获取老数据，所以要重新过滤数据
        this.filterFromLocalStorage();
        // 初始化宝箱
        this.createTreasureBox();
        // 初始化文字
        this.createText();
        // 添加按钮点击事件
        this.bindKeyDown();
    }
    // 检查传入的名单 和 获奖等级是否一致
    // private _checkLengthBetweenPrizeLevelAndNameList (): boolean {
    //     let nameListLength: number = this.nameList.length;
    //     let prizeLevelLength: number = 0;
    //     this.prizeLevel.forEach((item: Array<any>)=> {
    //         item.forEach((num: number)=> {
    //             prizeLevelLength += num;
    //         })
    //     });
    //     return nameListLength === prizeLevelLength;
    // }
    // 实例化获奖名单
    TreasureBoxDown.prototype._initWinnerList = function () {
        var options = {
            backgroundImg: this.winnerListOpt.backgroundImg,
            titleImg: this.winnerListOpt.titleImg,
            levelImg: this.winnerListOpt.levelImg,
            x: this.winnerListOpt.x,
            y: this.winnerListOpt.y,
            width: this.winnerListOpt.width,
            height: this.winnerListOpt.height,
            prizeLevel: this.prizeLevel,
        };
        this.winnerListInstance = new WinnerList_1.WinnerList(options);
        this.historyPoint = this.winnerListInstance.getAllNameList();
        this.lastIndex = this.historyPoint.length - 1;
    };
    // 由于从本地获取了历史数据，所以导致原生数据的变化
    TreasureBoxDown.prototype.filterFromLocalStorage = function () {
        var arr = TreasureBoxDown.getLocalHistory();
        if (!!arr) {
            this.createHistories(arr);
            //console.log('history:', this.histories);
            this.distinctNameList(arr);
            //console.log('nameList:', this.nameList);
            this.deleteHistoryBornPoint(arr);
            //console.log('historyPoint:', this.historyPoint);
            this.lastIndex = this.historyPoint.length - 1;
        }
    };
    TreasureBoxDown.getLocalHistory = function () {
        var lottery_history = window.localStorage.getItem('lottery_history');
        return !!lottery_history ? JSON.parse(lottery_history) : [];
    };
    TreasureBoxDown.prototype.createHistories = function (localString) {
        for (var i = 0, len = localString.length; i < len; i++) {
            this.histories.push(new Text_1.SolidText(localString[i]));
        }
    };
    TreasureBoxDown.prototype.distinctNameList = function (localString) {
        for (var i = 0, len = localString.length; i < len; i++) {
            var text = localString[i].text;
            this.nameList.splice(this.nameList.indexOf(text), 1);
        }
    };
    // 添加按钮点击事件
    TreasureBoxDown.prototype.bindKeyDown = function () {
        window.addEventListener('keydown', function (e) {
            if (e.shiftKey && e.ctrlKey && e.keyCode === 13) {
                console.log(e);
                window.localStorage.clear();
                alert('删除成功，请刷新');
            }
        });
    };
    TreasureBoxDown.prototype.deleteHistoryBornPoint = function (localString) {
        for (var i = 0, len = localString.length; i < len; i++) {
            this.historyPoint.pop();
        }
    };
    // 添加事件
    TreasureBoxDown.prototype.bindEvent = function () {
        this.event = this.startShow.bind(this);
        this.can.addEventListener('click', this.event);
    };
    // 移除事件
    TreasureBoxDown.prototype.removeEvent = function () {
        this.can.removeEventListener('click', this.event);
        this.event = null;
    };
    // 开始动画显示
    TreasureBoxDown.prototype.startShow = function () {
        // console.log('historyPoint:', this.historyPoint);
        // console.log('nameList:', this.nameList);
        // console.log('lastIndex:', this.lastIndex);
        if (this.animationStep === animationStep.noAnimation && this.lastIndex >= 0) {
            //this.TreasureBoxMove();
            this.animationStep = animationStep.nameBlink;
        }
        else if (this.animationStep === animationStep.nameBlink) {
            // 清空
            this.nameBlinks = [];
            // 改变状态
            this.animationStep = animationStep.treasureBox;
            // 宝箱动
            this.TreasureBoxMove();
        }
    };
    // 实例化当前中奖人的名字
    TreasureBoxDown.prototype.createText = function () {
        var options = {
            x: this.can.width / 2,
            y: this.can.height / 2,
            fontSize: this.text.fontSize,
            fontWeight: this.text.fontWeight,
            color: this.text.color,
        };
        this.textInstance = new Text_1.SolidText(options);
    };
    // 重置文字属性
    TreasureBoxDown.prototype.resetText = function () {
        this.textInstance.x = this.can.width / 2;
        this.textInstance.y = this.can.height / 2;
        this.textInstance.fontSize = this.text.fontSize;
        this.textInstance.color = this.text.color;
    };
    // 文字运动
    TreasureBoxDown.prototype.moveTo = function () {
        this.targetColor = (this.lastIndex !== 0) ? this.historyPoint[this.lastIndex].color : this.historyPoint[this.lastIndex].strokeColor;
        var targetX = this.historyPoint[this.lastIndex]['x'];
        var targetY = this.historyPoint[this.lastIndex]['y'];
        var targetFontSize = this.historyPoint[this.lastIndex]['fontSize'];
        var targetFontWeight = this.historyPoint[this.lastIndex]['fontWeight'];
        var distanceX = targetX - this.textInstance.x;
        var distanceY = targetY - this.textInstance.y;
        var distanceFontSize = targetFontSize - this.textInstance.fontSize;
        var distanceFontWeight = targetFontWeight - this.textInstance.fontWeight;
        var textSpeedX = distanceX / this.text.duration;
        var textSpeedY = distanceY / this.text.duration;
        var textFontSizeSpeed = distanceFontSize / this.text.duration;
        var textFontWeightSpeed = distanceFontWeight / this.text.duration;
        this.textSpeedX = textSpeedX;
        this.textSpeedY = textSpeedY;
        this.textFontSizeSpeed = textFontSizeSpeed;
        this.textFontWeightSpeed = textFontWeightSpeed;
        this.lastIndex--;
        this.textFrame = 0;
        this.textOnMove = true;
    };
    // 实例化宝箱
    TreasureBoxDown.prototype.createTreasureBox = function () {
        var imgWidth = 200;
        var options = {
            oImg: this.treasureBox.oImg,
            x: (this.can.width - imgWidth) / 2,
            y: 0,
            width: imgWidth,
            height: imgWidth * this.treasureBox.oImg.height / this.treasureBox.oImg.width,
            opacity: 0.2,
        };
        this.treasureBoxInstance = new MyImage_1.MyImage(options);
    };
    // 重置宝箱属性
    TreasureBoxDown.prototype.resetTreasureBox = function () {
        var imgWidth = 200;
        this.treasureBoxInstance.x = (this.can.width - imgWidth) / 2;
        this.treasureBoxInstance.y = 0;
        this.treasureBoxInstance.width = imgWidth;
        this.treasureBoxInstance.height = imgWidth * this.treasureBox.oImg.height / this.treasureBox.oImg.width;
        this.treasureBoxInstance.opacity = 0.2;
    };
    // 图片运动
    TreasureBoxDown.prototype.TreasureBoxMove = function () {
        var targetY = (this.can.height - this.treasureBoxInstance.height) / 2;
        var targetOpacity = 1;
        var distanceY = targetY - this.treasureBoxInstance.y;
        var distanceOpacity = targetOpacity - this.treasureBoxInstance.opacity;
        var textSpeedY = distanceY / this.treasureBox.duration;
        var speedOpacity = distanceOpacity / this.treasureBox.duration;
        this.treasureBoxSpeedY = textSpeedY;
        this.treasureBoxSpeedOpacity = speedOpacity;
    };
    // 变化
    TreasureBoxDown.prototype.update = function () {
        var _this = this;
        if (this.animationStep === animationStep.nameBlink) {
            if (this.nameBlinks.length < 10 && Math.random() < 0.5) {
                var randomIndex = ~~_random(0, this.nameList.length); // 注意：Math.random()结果是0 ~ 1（不包含）
                var text = this.nameList[randomIndex]; // 注意这个0
                var options = {
                    x: this.can.width / 2,
                    y: this.can.height / 2,
                    fontSize: this.nameBlink.fontSize,
                    fontWeight: this.nameBlink.fontWeight,
                    color: this.nameBlink.color,
                    speedX: _random(-20, 20),
                    speedY: _random(-20, 20),
                    speedOpacity: _random(0.05, 0.1),
                    text: text,
                };
                this.nameBlinks.push(new Text_1.SolidText(options));
            }
            for (var i = 0, len = this.nameBlinks.length; i < len; i++) {
                this.nameBlinks[i].x += this.nameBlinks[i].speedX;
                this.nameBlinks[i].y += this.nameBlinks[i].speedY;
                this.nameBlinks[i].opacity -= this.nameBlinks[i].speedOpacity;
            }
            for (var i = 0, len = this.nameBlinks.length; i < len; i++) {
                var item = this.nameBlinks[i];
                if (item.opacity <= 0) {
                    this.nameBlinks.splice(i, 1);
                    len--;
                    i--;
                }
            }
        }
        if (this.animationStep === animationStep.treasureBox) {
            this.treasureBoxFrame++;
            if (this.treasureBoxFrame > this.treasureBox.duration) {
                // 重置图片属性
                this.resetTreasureBox();
                this.treasureBoxFrame = 0;
                this.animationStep = animationStep.boom;
                document.getElementById('boom').pause();
                document.getElementById('boom').play();
            }
            this.treasureBoxInstance.y += this.treasureBoxSpeedY;
            this.treasureBoxInstance.opacity += this.treasureBoxSpeedOpacity;
        }
        if (this.animationStep === animationStep.boom) {
            this.boomStep++;
            if (this.boomStep > 7 * 2) {
                // 还原
                this.boomStep = 0;
                // 赋值文字
                var randomIndex = ~~_random(0, this.nameList.length); // 注意：Math.random()结果是0 ~ 1（不包含）
                var text = this.nameList.splice(randomIndex, 1)[0]; // 注意这个0
                this.textInstance.text = text;
                // 进入下一阶段
                this.animationStep = animationStep.text;
                // 2秒后运动
                window.setTimeout(function () {
                    _this.moveTo();
                }, 2000);
                return;
            }
        }
        if (this.animationStep === animationStep.text && this.textOnMove) {
            this.textFrame++;
            if (this.textFrame > this.text.duration) {
                // 添加历史
                this.histories.push(new Text_1.SolidText({
                    x: this.textInstance.x,
                    y: this.textInstance.y,
                    color: this.targetColor,
                    fontSize: this.textInstance.fontSize,
                    text: this.textInstance.text,
                }));
                // 保存本地
                window.localStorage.setItem('lottery_history', JSON.stringify(this.histories));
                // reset
                this.resetText();
                //
                this.textOnMove = false;
                this.animationStep = animationStep.noAnimation;
                this.textFrame = 0;
                return;
            }
            this.textInstance.x += this.textSpeedX;
            this.textInstance.y += this.textSpeedY;
            this.textInstance.fontSize += this.textFontSizeSpeed;
            this.textInstance.fontWeight += this.textFontWeightSpeed;
        }
    };
    // 总渲染
    TreasureBoxDown.prototype.render = function (ctx) {
        // 先渲染'获奖名单'
        this.winnerListInstance.render(ctx);
        // 再渲染'抽奖动画'
        if (this.animationStep === animationStep.nameBlink) {
            this.renderNameBlinks(ctx);
        }
        else if (this.animationStep === animationStep.treasureBox) {
            this.treasureBoxInstance.render(ctx);
        }
        else if (this.animationStep === animationStep.boom) {
            ctx.drawImage(this.boom.oImg, 185 * ~~(this.boomStep / 2), 0, 185, 159, this.can.width / 2 - 100, this.can.height / 2 - 100, 200, 200);
        }
        else if (this.animationStep === animationStep.text) {
            this.textInstance.render(ctx);
        }
        // 渲染历史
        this.renderHistories(ctx);
    };
    TreasureBoxDown.prototype.renderHistories = function (ctx) {
        this.histories.forEach(function (item) {
            item.render(ctx);
        });
    };
    // 渲染闪烁名字
    TreasureBoxDown.prototype.renderNameBlinks = function (ctx) {
        this.nameBlinks.forEach(function (item) {
            item.render(ctx);
        });
    };
    return TreasureBoxDown;
}());
exports.TreasureBoxDown = TreasureBoxDown;


/***/ }),

/***/ "./src/assets/js/app/Lottery/SceneController/SceneController.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/js/app/Lottery/SceneController/SceneController.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasFactory_1 = __importDefault(__webpack_require__(/*! ../Sence/CanvasFactory */ "./src/assets/js/app/Lottery/Sence/CanvasFactory.ts"));
var config_1 = __webpack_require__(/*! ../../../config */ "./src/assets/js/config.ts");
var RayLogo_1 = __webpack_require__(/*! ../Sence/RayLogo */ "./src/assets/js/app/Lottery/Sence/RayLogo.ts");
var Stats = __webpack_require__(/*! Stats-js */ "./node_modules/Stats-js/build/stats.min.js");
/**
 * 并不是所有设备的绘制时间间隔是1000/60 ms, 以及上面并木有cancel相关方法，所以，就有下面这份更全面的兼容方法：
 */
(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[(vendors[x] + 'RequestAnimationFrame')];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
}());
var SceneController = /** @class */ (function () {
    function SceneController(options) {
        this.isShowStats = false;
        this.frame = 0;
        //
        this.event = null;
        var canvasFactory = new CanvasFactory_1.default();
        this.can = canvasFactory.getCanvas();
        this.ctx = canvasFactory.getContext();
        //
        this.resources = {};
        //
        this.resConfig = options.resConfig;
        this.LoadScene = options.LoadScene;
        this.CutScene = options.CutScene;
        this.LotteryScene = options.LotteryScene;
        this.LotteryShow = options.LotteryShow;
        this.timer = null;
        this.allowOvertime = options.allowOvertime || 60 * 1000;
        this.lastOperationTime = null;
        var _this = this;
        var loadScene = new this.LoadScene({
            can: this.can,
        });
        this.loadAllResource(options.resConfig, function (loadedNumber) {
            /** 加载动画 **/
            loadScene.show(loadedNumber, options.resConfig.length);
        }, function (resources) {
            // 实例化
            if (_this.isShowStats) {
                _this.stats = new Stats(); // Stats : 帧检查
                _this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
                document.body.appendChild(_this.stats.dom);
            }
            // 分别初始化'过场场景'
            _this.cutSceneInstance = new RayLogo_1.RayLogo({
                can: _this.can,
                oImg: resources.tiefan
            });
            // 初始化 抽奖方式
            _this.lotteryShowInstance = new _this.LotteryShow({
                can: _this.can,
                treasureBox: {
                    oImg: resources.treasureBox,
                    width: config_1.LOTTERY_SHOW_CONFIG.treasureBox.width,
                    height: config_1.LOTTERY_SHOW_CONFIG.treasureBox.height,
                    duration: config_1.LOTTERY_SHOW_CONFIG.treasureBox.duration,
                },
                boom: {
                    oImg: resources.boom,
                },
                prizeLevel: config_1.LOTTERY_SHOW_CONFIG.prizeLevel,
                nameList: config_1.LOTTERY_SHOW_CONFIG.nameList,
                history: config_1.LOTTERY_SHOW_CONFIG.history,
                text: config_1.LOTTERY_SHOW_CONFIG.text,
                levelText: config_1.LOTTERY_SHOW_CONFIG.levelText,
                nameBlink: config_1.LOTTERY_SHOW_CONFIG.nameBlink,
                winnerList: {
                    backgroundImg: resources.name_list_bg,
                    titleImg: resources.name_list_title,
                    levelImg: resources.prize_level_bg,
                    x: _this.can.width - resources.name_list_bg.naturalWidth,
                    y: 0,
                    width: resources.name_list_bg.naturalWidth,
                    height: _this.can.height,
                }
            });
            document.getElementById('open-show').play(); // TODO
            _this.timer = window.setInterval(function () {
                _this.isShowStats && _this.stats.begin();
                var flag = _this.cutSceneInstance.render();
                if (!flag) {
                    console.log('过场动画结束', 'timer:' + _this.timer);
                    // 通知观察者
                    _this.bindEvent();
                    //
                    document.getElementById('cut-scene').play();
                    // 关闭当前
                    window.clearInterval(_this.timer);
                }
                _this.cutSceneInstance.update();
                _this.isShowStats && _this.stats.end();
            }, 1000 / 60);
        });
    }
    SceneController.prototype.loadAllResource = function (config, loadedFn, loadedAllFn) {
        var _this = this;
        var loadedNumber = 0;
        // 逐一加载
        for (var i = 0, len = config.length; i < len; i++) {
            this.resources[config[i].name] = new Image(); // 创建一个同名的key
            this.resources[config[i].name].src = config[i].url; // 请求
            this.resources[config[i].name].onload = function () {
                ++loadedNumber;
                loadedFn && loadedFn(loadedNumber);
                //判断是否已经全部加载完毕
                if (loadedNumber === config.length) {
                    loadedAllFn && loadedAllFn(_this.resources); // callback.call(_this);// ?
                }
            };
        }
    };
    ;
    // 添加事件
    SceneController.prototype.bindEvent = function () {
        this.event = this.startShow.bind(this);
        this.can.addEventListener('click', this.event);
    };
    // 移除事件
    SceneController.prototype.removeEvent = function () {
        this.can.removeEventListener('click', this.event);
        this.event = null;
    };
    // 管理抽奖动画界面
    SceneController.prototype.startShow = function () {
        document.getElementById('cut-scene').pause();
        document.getElementById('cut-scene').currentTime = 0;
        console.log('点击了点击事件');
        this.lastOperationTime = new Date();
        // 监听操作
        this.checkOperation();
        this.lotterySceneInstance = new this.LotteryScene({
            can: this.can,
            backgroundImg: this.resources.newYearBg,
            lanternImg: this.resources.newYearLantern,
        });
        // 绑定点击事件 - 生成抽奖的人名
        this.lotteryShowInstance.bindEvent();
        document.getElementById('new-year').play();
        var _this = this;
        this.timer = window.setInterval(function () {
            _this.frame++;
            // 测试开始
            _this.isShowStats && _this.stats.begin();
            // 抽奖的背景
            _this.lotterySceneInstance.render();
            _this.lotterySceneInstance.update();
            // 抽奖的展示
            _this.lotteryShowInstance.render(_this.ctx);
            _this.lotteryShowInstance.update();
            // 测试关闭
            _this.isShowStats && _this.stats.end();
        }, 1000 / 60);
        //  监听操作
        this.can.addEventListener('click', _this.changeLastOperationTime.bind(_this));
        this.can.addEventListener('mousemove', _this.changeLastOperationTime.bind(_this));
        // 取消绑定
        this.removeEvent();
    };
    // 当处于抽奖场景的时候，无任何操作超过n秒后，就会跳到过渡场景
    SceneController.prototype.checkOperation = function () {
        var _this = this;
        var checkOperationTimer = window.setInterval(function () {
            var nowTime = new Date();
            if (SceneController.isOvertime(nowTime, _this.lastOperationTime, _this.allowOvertime)) {
                //
                window.clearInterval(_this.timer);
                //
                _this.cutSceneInstance.render();
                //
                document.getElementById('new-year').pause();
                document.getElementById('new-year').currentTime = 0;
                document.getElementById('cut-scene').play();
                // 通知观察者
                _this.bindEvent();
                // 取消抽奖的点击事件
                _this.lotteryShowInstance.animationStep = 0;
                _this.lotteryShowInstance.removeEvent();
                // 关闭检查
                window.clearInterval(checkOperationTimer);
            }
        }, 1000);
    };
    SceneController.isOvertime = function (nowTime, lastTime, allowOvertime) {
        return nowTime - lastTime >= allowOvertime;
    };
    SceneController.prototype.changeLastOperationTime = function () {
        this.lastOperationTime = new Date();
    };
    return SceneController;
}());
exports.SceneController = SceneController;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Sence/CanvasFactory.ts":
/*!**********************************************************!*\
  !*** ./src/assets/js/app/Lottery/Sence/CanvasFactory.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _w = window;
var _b = document.body; // ����html dom�е�body�ڵ� ��<body>
var _d = document.documentElement; // ����html dom�е�root �ڵ� ��<html>
// screen helper
var _screenInfo = function () {
    var width = Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0);
    var height = Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0);
    var scrollx = Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - (_d.clientLeft || 0);
    var scrolly = Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - (_d.clientTop || 0);
    return {
        width: width,
        height: height,
        ratio: width / height,
        centerX: width / 2,
        centerY: height / 2,
        scrollX: scrollx,
        scrollY: scrolly
    };
};
var CanvasFactory = /** @class */ (function () {
    function CanvasFactory(dom) {
        if (dom === void 0) { dom = document.body; }
        this._dom = null; // TODO ����Ӧ����ʲô���ͣ���
        this._canvas = null;
        this._context = null;
        this._dom = dom; // ��ֵ
        this._init(); // ��ʼ��
        // ���canvas����������div������body����ô��Ҫ��֤��bodyͬʱ�ı�Ĵ�С��
        var _this = this;
        if (dom === document.body) {
            window.addEventListener('resize', function () {
                _this._windowResize();
            });
        }
    }
    // ����canvas
    CanvasFactory.prototype._init = function () {
        try {
            this._canvas = document.createElement('canvas');
            // this._canvas.style["display"] = "block";
            // this._canvas.style["position"] = "fixed";
            // this._canvas.style["margin"] = "0";
            // this._canvas.style["padding"] = "0";
            // this._canvas.style["border"] = "0";
            // this._canvas.style["outline"] = "0";
            // this._canvas.style["left"] = "0";
            // this._canvas.style["top"] = "0";
            var _domInfo = this._getDomInfo();
            this._canvas.width = _domInfo['width'];
            this._canvas.height = _domInfo['height'];
            // this._canvas.style["z-index"] = "-1";
            //this._canvas.style["background-color"] = "#ccc";
            this._canvas.id = "bgCanvas";
            this._context = this._canvas.getContext('2d');
            this._dom.appendChild(this._canvas);
        }
        catch (e) {
            console.warn("Canvas Context Error: " + e.toString());
            return;
        }
    };
    // ��ȡ��װcanvas�����ĸ��ڵ����ݣ���������
    CanvasFactory.prototype._getDomInfo = function () {
        var width = this._dom.offsetWidth;
        var height = this._dom.offsetHeight;
        return {
            width: width,
            height: height,
        };
    };
    // �洰�ڱ仯���任
    CanvasFactory.prototype._windowResize = function () {
        var _window = _screenInfo();
        var width = _window['width'];
        var height = _window['height'];
        this._canvas.width = width;
        this._canvas.height = height;
    };
    // �ṩ�ⲿ��ȡcanvasԪ��
    CanvasFactory.prototype.getCanvas = function () {
        return this._canvas;
    };
    // �ṩ�ⲿʹ��canvas��������
    CanvasFactory.prototype.getContext = function () {
        return this._context;
    };
    return CanvasFactory;
}());
exports.default = CanvasFactory;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Sence/RayLogo.ts":
/*!****************************************************!*\
  !*** ./src/assets/js/app/Lottery/Sence/RayLogo.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __importDefault(__webpack_require__(/*! ./Scene */ "./src/assets/js/app/Lottery/Sence/Scene.ts"));
var Ray_1 = __webpack_require__(/*! ../Element/Ray */ "./src/assets/js/app/Lottery/Element/Ray.ts");
/**
 * ��ȡһ��ͼƬ����Ϣ
 * @param options
 *      oImg
 *      width
 *      height
 */
function _getImageData(options) {
    var oImg = options.oImg;
    var width = options.width || 400;
    var height = options.height; // û��Ĭ��ֵ
    // ����canvas������ģ�������ʾ��
    var can = document.createElement('canvas');
    var ctx = can.getContext('2d');
    can.width = width;
    can.height = height || can.width * oImg.naturalHeight / oImg.naturalWidth;
    //
    ctx.drawImage(oImg, 0, 0, oImg.naturalWidth, oImg.naturalHeight, 0, 0, can.width, can.height);
    // ��ȡ���
    return ctx.getImageData(0, 0, can.width, can.height);
}
var RayLogo = /** @class */ (function (_super) {
    __extends(RayLogo, _super);
    function RayLogo(options) {
        var _this = _super.call(this, options) || this;
        _this.oImg = null;
        _this.imageData = [];
        _this.virtualCan = null;
        _this.virtualCtx = null;
        _this.startX = 0;
        _this.startY = 0;
        _this.rays = [];
        _this.timer = null;
        _this.oImg = options.oImg || null;
        _this.imageData = _getImageData({ oImg: _this.oImg, width: 350, });
        // ��������canvas
        _this.virtualCan = document.createElement("canvas");
        _this.virtualCtx = _this.virtualCan.getContext("2d");
        _this.virtualCan.width = _this.imageData.width;
        _this.virtualCan.height = _this.imageData.height;
        // ����ͼƬ׼���ŵ�λ��
        _this.startX = (_this.can.width - _this.imageData.width) / 2;
        _this.startY = (_this.can.height - _this.imageData.height) / 2;
        // ���������ߵĽ���ɫ
        var rayColor1 = "#abcdef";
        var rayColor2 = "#1278de";
        _this.gradient = _this.ctx.createRadialGradient(_this.can.width / 2, _this.can.height / 2, 0, _this.can.width / 2, _this.can.height / 2, _this.imageData.width);
        _this.gradient.addColorStop(0, rayColor1);
        _this.gradient.addColorStop(1, rayColor2);
        // ����������
        _this.createRays();
        _this.showHeight = _this.startY;
        return _this;
    }
    RayLogo.prototype.createRays = function () {
        for (var i = 0, len = this.imageData.data.length; i < len; i += 4) {
            var num = i / 4; // ÿ4��ֵ������һ������
            var opacity = this.imageData.data[i + 3];
            if (opacity >= 200) { // ͸�����ж�
                var x = num % this.imageData.width + this.startX;
                var y = ~~(num / this.imageData.width) + this.startY;
                if (x % 2 && y % 2) {
                    this.rays.push(new Ray_1.Ray(x, y, this.imageData.width, this.imageData.height));
                }
            }
        }
    };
    RayLogo.prototype.update = function () {
        this.showHeight += 6;
    };
    RayLogo.prototype.render = function () {
        var len = 0;
        this.showHeight = Math.min(this.showHeight, this.imageData.height + this.startY);
        // ���
        this.ctx.fillStyle = '#0f0f0f';
        this.ctx.fillRect(0, 0, this.can.width, this.can.height);
        // ��ͼ
        this.ctx.drawImage(this.virtualCan, 0, 0, this.showHeight, this.virtualCan.height, this.startX, this.startY, this.showHeight, this.virtualCan.height); // ����������
        // ��������
        this.ctx.save();
        this.ctx.strokeStyle = this.gradient;
        this.ctx.globalAlpha = 0.2; // �����ߵ���ɫ
        this.ctx.globalCompositeOperation = "lighter";
        this.ctx.beginPath();
        for (var i = 0; i < this.rays.length; i++) {
            if (this.rays[i].y < this.showHeight) {
                if (this.rays[i].h >= 0) {
                    this.rays[i].render(this.ctx);
                    this.rays[i].update();
                }
                else {
                    ++len;
                    this.virtualCtx.fillStyle = '#1278de';
                    this.virtualCtx.fillRect(this.rays[i].x - this.startX, this.rays[i].y - this.startY, 1, 1);
                }
            }
        }
        this.ctx.stroke();
        this.ctx.restore();
        return len < this.rays.length;
    };
    return RayLogo;
}(Scene_1.default));
exports.RayLogo = RayLogo;
var Lantern_1 = __webpack_require__(/*! ../Element/Lantern */ "./src/assets/js/app/Lottery/Element/Lantern.ts");
var _random = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.random() * (max - min) + min;
};
var NewYear = /** @class */ (function (_super) {
    __extends(NewYear, _super);
    function NewYear(options) {
        var _this = _super.call(this, options) || this;
        _this.backgroundImg = options.backgroundImg;
        _this.lanternImg = options.lanternImg;
        _this.num = options.num || 60;
        _this.lanterns = [];
        // ��������
        _this.createLanterns();
        return _this;
    }
    // ������������������
    NewYear.prototype.createLanterns = function () {
        for (var i = 0; i < this.num; i++) {
            var x = this.can.width / this.num * i + _random(-50, 50);
            var y = _random(-10, 10);
            var options = {
                lantern: {
                    oImg: this.lanternImg,
                    x: x,
                    y: y,
                    width: 100,
                    angle: _random(-10, 10),
                    angleSpeed: _random(0.05, 0.1),
                },
                ribbon: {
                    num: 5,
                    distance: _random(100, 150),
                    color: '#dfdc15',
                    lineWidth: 1.5,
                    globalAlpha: 0.8,
                }
            };
            this.lanterns.push(new Lantern_1.Lantern(options));
        }
    };
    NewYear.prototype.setBackground = function () {
        this.ctx.drawImage(this.backgroundImg, 0, 0, this.backgroundImg.naturalWidth, this.backgroundImg.naturalHeight, 0, 0, this.can.width, this.can.height);
    };
    NewYear.prototype.render = function () {
        // ����
        this.setBackground();
        // ÿ������
        for (var i = 0, len = this.lanterns.length; i < len; i++) {
            this.lanterns[i].render(this.ctx);
        }
        return true; // ��ʱд��
    };
    NewYear.prototype.update = function () {
        for (var i = 0, len = this.lanterns.length; i < len; i++) {
            // ͼƬ�䶯
            if (this.lanterns[i].lantern.angle <= -15 || this.lanterns[i].lantern.angle >= 15) {
                this.lanterns[i].lantern.angleSpeed = -this.lanterns[i].lantern.angleSpeed;
            }
            this.lanterns[i].lantern.angle += this.lanterns[i].lantern.angleSpeed;
            // �д��䶯
            this.lanterns[i].beta++; // Math.sin��Ӧ��
            for (var j = 0, ribbonsLength = this.lanterns[i].ribbons.length; j < ribbonsLength; j++) {
                var distance = this.lanterns[i].lantern.height ? this.lanterns[j].lantern.height : this.lanterns[i].lantern.width * this.lanterns[i].lantern.oImg.naturalHeight / this.lanterns[i].lantern.oImg.naturalWidth;
                // �ı����е�
                this.lanterns[i].ribbons[j].startPoint.x = this.lanterns[i].lantern.x + Math.cos(Math.PI / 180 * (this.lanterns[i].lantern.angle + 90)) * distance;
                this.lanterns[i].ribbons[j].startPoint.y = this.lanterns[i].lantern.y + Math.sin(Math.PI / 180 * (this.lanterns[i].lantern.angle + 90)) * distance;
                //
                this.lanterns[i].ribbons[j].controlPoint.x = this.lanterns[i].ribbons[j].startPoint.x;
                this.lanterns[i].ribbons[j].endPoint.x = this.lanterns[i].ribbons[j].startPoint.x;
                // �ٸı������
                this.lanterns[i].ribbons[j].endPoint.x = this.lanterns[i].ribbons[j].startPoint.x + Math.sin(this.lanterns[i].beta * this.lanterns[i].ribbons[j].speed) * this.lanterns[i].ribbons[j].range;
            }
        }
    };
    return NewYear;
}(Scene_1.default));
exports.NewYear = NewYear;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Sence/Scene.ts":
/*!**************************************************!*\
  !*** ./src/assets/js/app/Lottery/Sence/Scene.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scene = /** @class */ (function () {
    function Scene(options) {
        this.can = options.can;
        this.ctx = this.can.getContext('2d');
        this.canRect = this.can.getBoundingClientRect();
    }
    return Scene;
}());
exports.default = Scene;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Sence/TextLoading.ts":
/*!********************************************************!*\
  !*** ./src/assets/js/app/Lottery/Sence/TextLoading.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __importDefault(__webpack_require__(/*! ./Scene */ "./src/assets/js/app/Lottery/Sence/Scene.ts"));
var Text_1 = __webpack_require__(/*! ../Element/Text */ "./src/assets/js/app/Lottery/Element/Text.ts");
var TextLoading = /** @class */ (function (_super) {
    __extends(TextLoading, _super);
    function TextLoading(options) {
        var _this = _super.call(this, options) || this;
        var loadingTextOptions = {
            x: _this.can.width / 2,
            y: _this.can.height / 2,
            color: '#abcdef',
        };
        _this.text = new Text_1.SolidText(loadingTextOptions);
        return _this;
    }
    TextLoading.prototype.show = function (loadedNumber, allNumber) {
        var text = '资源加载中...' + '  （' + loadedNumber + '/' + allNumber + '）';
        this.ctx.fillStyle = '#0f0f0f';
        this.ctx.fillRect(0, 0, this.can.width, this.can.height);
        this.text.text = text;
        this.text.render(this.ctx);
    };
    return TextLoading;
}(Scene_1.default));
exports.TextLoading = TextLoading;


/***/ }),

/***/ "./src/assets/js/config.ts":
/*!*********************************!*\
  !*** ./src/assets/js/config.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// +----------------------------------------------------------------------
// | 名单列表
// +----------------------------------------------------------------------
exports.RESOURCE_CONFIG = {
    image: [
        { name: 'tiefan', url: './assets/res/images/scene/cut/tiefan/logo.png', },
        { name: 'newYearBg', url: './assets/res/images/scene/lottery/new_year/bg.png', },
        { name: 'name_list_title', url: './assets/res/images/scene/lottery/new_year/name_list_title.png', },
        { name: 'name_list_bg', url: './assets/res/images/scene/lottery/new_year/name_list_bg.png', },
        { name: 'prize_level_bg', url: './assets/res/images/scene/lottery/new_year/prize_level_bg.png', },
        { name: 'newYearLantern', url: './assets/res/images/scene/lottery/new_year/lantern_1.png', },
        { name: 'treasureBox', url: './assets/res/images/scene/lottery/new_year/treasureBox.png', },
        { name: 'boom', url: './assets/res/images/scene/lottery/new_year/boom.png', },
    ],
    audio: [
        {
            name: 'open-show',
            url: './res/audio/open-show.mp3',
        }
    ],
};
// +----------------------------------------------------------------------
// | 过场场景的配置
// +----------------------------------------------------------------------
exports.CUT_SCENE_CONFGI = {
    // 当多少秒内，没有任何操作，就返回到过场场景
    allowOvertime: 600 * 1000,
};
// +----------------------------------------------------------------------
// | 抽奖场景的配置
// +----------------------------------------------------------------------
exports.LOTTERY_SHOW_CONFIG = {
    // 奖品等级分布（注意：所有数值综合，一定要和nameList属性的长度一样）
    prizeLevel: [
        [1],
        [2],
        [3],
        [5],
    ],
    // 参与抽奖的人员名字组成的名单
    nameList: [
        '罗可成',
        '赵星',
        '吴俊',
        '王海涛',
        '张强',
        '王思聪',
        '马云',
        '马化腾',
        '刘强东',
        '孙正义',
        '雷军',
        '哈哈',
        '嘿嘿',
        '嘻嘻',
        '呵呵',
        '大王',
        '小王',
        '老张',
        '黄晓明',
        '刘亦菲',
        '赵薇',
    ],
    // 闪烁的文字
    nameBlink: {
        // 文字大小
        fontSize: 80,
        // 文字粗细
        fontWeight: 900,
        // 文字颜色
        color: '#ff0',
    },
    // 宝箱
    treasureBox: {
        // 宝箱图片宽度
        width: 100,
        // 宝箱图片高度（可选），传了就以传参高度计算，不传参则自动根据图片比例结算
        //height: 100
        // 宝箱移动所需帧数，数值越小，速度越快
        duration: 60,
    },
    // 已经抽奖后，存放名称的地方
    history: {
        // 以canvas原点为基础，x越大，越靠右
        x: 200,
        // 以canvas原点为基础，y越大，越靠下
        y: 600,
        // 字体大小
        fontSize: 34,
        // 字体颜色
        color: '#ffe400',
    },
    // 当宝箱爆炸后，生成的名字字体的属性
    text: {
        // 字体颜色
        color: '#ffe400',
        // 字体大小
        fontSize: 120,
        // 字体粗细
        fontWeight: 900,
        // 字体移动所需帧数，数值越小，速度越快
        duration: 60,
    },
    // 奖励等级字体（即：第1等奖，第2等奖...）
    levelText: {
        // 字体颜色
        color: '#ffe400',
        // 字体大小
        fontSize: 30,
        // 字体粗细
        fontWeight: 900,
    },
    // 获奖名单
    winnerList: {
        x: 200,
        y: 200,
    }
};


/***/ }),

/***/ "./src/assets/js/index.ts":
/*!********************************!*\
  !*** ./src/assets/js/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./src/assets/js/config.ts");
var SceneController_1 = __webpack_require__(/*! ./app/Lottery/SceneController/SceneController */ "./src/assets/js/app/Lottery/SceneController/SceneController.ts");
var TextLoading_1 = __webpack_require__(/*! ./app/Lottery/Sence/TextLoading */ "./src/assets/js/app/Lottery/Sence/TextLoading.ts");
var RayLogo_1 = __webpack_require__(/*! ./app/Lottery/Sence/RayLogo */ "./src/assets/js/app/Lottery/Sence/RayLogo.ts");
var TreasureBoxDown_1 = __webpack_require__(/*! ./app/Lottery/Lottery/TreasureBoxDown */ "./src/assets/js/app/Lottery/Lottery/TreasureBoxDown.ts");
var config = config_1.RESOURCE_CONFIG.image;
var sceneController = new SceneController_1.SceneController({
    resConfig: config,
    LoadScene: TextLoading_1.TextLoading,
    CutScene: RayLogo_1.RayLogo,
    LotteryScene: RayLogo_1.NewYear,
    LotteryShow: TreasureBoxDown_1.TreasureBoxDown,
    allowOvertime: config_1.CUT_SCENE_CONFGI.allowOvertime,
    isShowStats: false,
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL1N0YXRzLWpzL2J1aWxkL3N0YXRzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0NvbXBvbmVudC9Qcml6ZUxldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvQ29tcG9uZW50L1dpbm5lckxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9FbGVtZW50L0xhbnRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9FbGVtZW50L015SW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9FbGVtZW50L1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvRWxlbWVudC9SYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9FbGVtZW50L1JpYmJvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0xvdHRlcnkvVHJlYXN1cmVCb3hEb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvU2NlbmVDb250cm9sbGVyL1NjZW5lQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L1NlbmNlL0NhbnZhc0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9TZW5jZS9SYXlMb2dvLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvU2VuY2UvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9TZW5jZS9UZXh0TG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxlQUFlLEtBQW9ELG9CQUFvQixTQUEyRCxDQUFDLGlCQUFpQixhQUFhLGlCQUFpQix3Q0FBd0MsY0FBYyw4QkFBOEIsY0FBYyxZQUFZLG9CQUFvQixxREFBcUQsSUFBSSxnQ0FBZ0MsTUFBTSxPQUFPLGVBQWUsWUFBWSxzREFBc0QsNENBQTRDLEtBQUssbUhBQW1ILHNGQUFzRixhQUFhLDBEQUEwRCw0QkFBNEIsZ0JBQWdCLElBQUksZ0NBQWdDLHNFQUFzRSx5QkFBeUIsNkRBQTZELFNBQVMsbUJBQW1CLGFB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QTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDckQsd0JBQXdCLG1CQUFPLENBQUMscUdBQXVDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoianMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Fzc2V0cy9qcy9pbmRleC50c1wiKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuU3RhdHM9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9ZnVuY3Rpb24oKXt2YXIgbj0wLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmdW5jdGlvbiBlKGUpe3JldHVybiBsLmFwcGVuZENoaWxkKGUuZG9tKSxlfWZ1bmN0aW9uIHQoZSl7Zm9yKHZhciB0PTA7dDxsLmNoaWxkcmVuLmxlbmd0aDt0KyspbC5jaGlsZHJlblt0XS5zdHlsZS5kaXNwbGF5PXQ9PT1lP1wiYmxvY2tcIjpcIm5vbmVcIjtuPWV9bC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC45O3otaW5kZXg6MTAwMDBcIixsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSx0KCsrbiVsLmNoaWxkcmVuLmxlbmd0aCl9LCExKTt2YXIgaT0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpLGE9aSxvPTAsZj1lKG5ldyBjLlBhbmVsKFwiRlBTXCIsXCIjMGZmXCIsXCIjMDAyXCIpKSxyPWUobmV3IGMuUGFuZWwoXCJNU1wiLFwiIzBmMFwiLFwiIzAyMFwiKSk7aWYoc2VsZi5wZXJmb3JtYW5jZSYmc2VsZi5wZXJmb3JtYW5jZS5tZW1vcnkpdmFyIGQ9ZShuZXcgYy5QYW5lbChcIk1CXCIsXCIjZjA4XCIsXCIjMjAxXCIpKTtyZXR1cm4gdCgwKSx7UkVWSVNJT046MTYsZG9tOmwsYWRkUGFuZWw6ZSxzaG93UGFuZWw6dCxiZWdpbjpmdW5jdGlvbigpe2k9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7bysrO3ZhciBlPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCk7aWYoci51cGRhdGUoZS1pLDIwMCksYSsxZTM8PWUmJihmLnVwZGF0ZSgxZTMqby8oZS1hKSwxMDApLGE9ZSxvPTAsZCkpe3ZhciB0PXBlcmZvcm1hbmNlLm1lbW9yeTtkLnVwZGF0ZSh0LnVzZWRKU0hlYXBTaXplLzEwNDg1NzYsdC5qc0hlYXBTaXplTGltaXQvMTA0ODU3Nil9cmV0dXJuIGV9LHVwZGF0ZTpmdW5jdGlvbigpe2k9dGhpcy5lbmQoKX0sZG9tRWxlbWVudDpsLHNldE1vZGU6dH19O3JldHVybiBjLlBhbmVsPWZ1bmN0aW9uKG4sbCxpKXt2YXIgYT0xLzAsbz0wLGY9TWF0aC5yb3VuZCxyPWYod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpLGQ9ODAqcixlPTQ4KnIsYz0zKnIscD0yKnIsdT0zKnIscz0xNSpyLG09NzQqcixoPTMwKnIseT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3kud2lkdGg9ZCx5LmhlaWdodD1lLHkuc3R5bGUuY3NzVGV4dD1cIndpZHRoOjgwcHg7aGVpZ2h0OjQ4cHhcIjt2YXIgdj15LmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gdi5mb250PVwiYm9sZCBcIis5KnIrXCJweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZlwiLHYudGV4dEJhc2VsaW5lPVwidG9wXCIsdi5maWxsU3R5bGU9aSx2LmZpbGxSZWN0KDAsMCxkLGUpLHYuZmlsbFN0eWxlPWwsdi5maWxsVGV4dChuLGMscCksdi5maWxsUmVjdCh1LHMsbSxoKSx2LmZpbGxTdHlsZT1pLHYuZ2xvYmFsQWxwaGE9Ljksdi5maWxsUmVjdCh1LHMsbSxoKSx7ZG9tOnksdXBkYXRlOmZ1bmN0aW9uKGUsdCl7YT1NYXRoLm1pbihhLGUpLG89TWF0aC5tYXgobyxlKSx2LmZpbGxTdHlsZT1pLHYuZ2xvYmFsQWxwaGE9MSx2LmZpbGxSZWN0KDAsMCxkLHMpLHYuZmlsbFN0eWxlPWwsdi5maWxsVGV4dChmKGUpK1wiIFwiK24rXCIgKFwiK2YoYSkrXCItXCIrZihvKStcIilcIixjLHApLHYuZHJhd0ltYWdlKHksdStyLHMsbS1yLGgsdSxzLG0tcixoKSx2LmZpbGxSZWN0KHUrbS1yLHMscixoKSx2LmZpbGxTdHlsZT1pLHYuZ2xvYmFsQWxwaGE9Ljksdi5maWxsUmVjdCh1K20tcixzLHIsZigoMS1lL3QpKmgpKX19fSxjfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUG9pbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vRWxlbWVudC9Qb2ludFwiKSk7XHJcbnZhciBUZXh0XzEgPSByZXF1aXJlKFwiLi4vRWxlbWVudC9UZXh0XCIpO1xyXG52YXIgUHJpemVMZXZlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByaXplTGV2ZWwob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubmFtZUxpc3RCb3JuUG9pbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5uYW1lTGlzdCA9IFtdOyAvLyDvvJ8g5bqU6K+l55So5rOb5Z6L77yf77yf77yf77yfIEFycmF5PFNvbGlkVGV4dD4gfCBBcnJheTxDb250b3VyVGV4dD4gPSBbXTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWcgPSBvcHRpb25zLmJhY2tncm91bmRJbWc7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IG9wdGlvbnMudGl0bGUgfHwgJ+agh+mimCc7XHJcbiAgICAgICAgdGhpcy54ID0gb3B0aW9ucy54IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55IHx8IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDA7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm5hbWVMaXN0TGVuZ3RoID0gb3B0aW9ucy5uYW1lTGlzdExlbmd0aCB8fCAxO1xyXG4gICAgICAgIHRoaXMuaXNTcGVjaWFsID0gb3B0aW9ucy5pc1NwZWNpYWwgfHwgZmFsc2U7XHJcbiAgICAgICAgLy8g5Yib5bu65qCH6aKYXHJcbiAgICAgICAgdGhpcy5faW5pdFRpdGxlKCk7XHJcbiAgICAgICAgdGhpcy5fZ2V0TmFtZUxpc3RCb3JuUG9pbnQoKTtcclxuICAgICAgICB0aGlzLl9pbml0TmFtZUxpc3QoKTtcclxuICAgIH1cclxuICAgIC8vIOWunuS+i+WMluagh+mimOaWh+Wtl1xyXG4gICAgUHJpemVMZXZlbC5wcm90b3R5cGUuX2luaXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnggKyB0aGlzLmJhY2tncm91bmRJbWcubmF0dXJhbFdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSArIDMwLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDQ2LFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJyNmM2VhOGYnLFxyXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2Y5MjczMCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCArIHRoaXMuYmFja2dyb3VuZEltZy5uYXR1cmFsV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy55ICsgMzAsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJyNmNTEyMzAnLFxyXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZlZTMwMCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpdGxlSW5zdGFuY2UgPSBuZXcgVGV4dF8xLkNvbnRvdXJUZXh0KG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIC8vIOaxguWHuuWHuueUn+eCuVxyXG4gICAgUHJpemVMZXZlbC5wcm90b3R5cGUuX2dldE5hbWVMaXN0Qm9yblBvaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3BlY2lhbCkge1xyXG4gICAgICAgICAgICB2YXIgeCA9IHRoaXMueCArIHRoaXMuYmFja2dyb3VuZEltZy5uYXR1cmFsV2lkdGggLyAyO1xyXG4gICAgICAgICAgICB2YXIgeSA9IDUwO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVMaXN0Qm9yblBvaW50cy5wdXNoKG5ldyBQb2ludF8xLmRlZmF1bHQoeCwgeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5hbWVMaXN0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy54ICsgKCghKGkgJSAyKSkgPyA2MCA6IDIwMCkgKyAyMDtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy55ICsgfn4oaSAvIDIpICogMzAgKyA1MCArIDIwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lTGlzdEJvcm5Qb2ludHMucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KHgsIHkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDliJvlu7rlkI3ljZVcclxuICAgIFByaXplTGV2ZWwucHJvdG90eXBlLl9pbml0TmFtZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZUxpc3RCb3JuUG9pbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCArIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy55ICsgMTAwLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDQ0LFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICcjYWMwMDA2JyxcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZjAnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVMaXN0LnB1c2gobmV3IFRleHRfMS5Db250b3VyVGV4dChvcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5uYW1lTGlzdEJvcm5Qb2ludHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMubmFtZUxpc3RCb3JuUG9pbnRzW2ldLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5uYW1lTGlzdEJvcm5Qb2ludHNbaV0ueSxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FjMDAwNicsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lTGlzdC5wdXNoKG5ldyBUZXh0XzEuU29saWRUZXh0KG9wdGlvbnMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcml6ZUxldmVsLnByb3RvdHlwZS5nZXROYW1lTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lTGlzdDtcclxuICAgIH07XHJcbiAgICBQcml6ZUxldmVsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgLy8g55S76IOM5pmv5Zu+XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgLy8g5riy5p+T5qCH6aKY77yI54m5562J5aWW77yM5LiA562J5aWWLi4uKVxyXG4gICAgICAgIHRoaXMudGl0bGVJbnN0YW5jZS5yZW5kZXIoY3R4KTtcclxuICAgICAgICAvLyDmtYvor5XvvJrmuLLmn5PlkI3ljZVcclxuICAgICAgICB0aGlzLm5hbWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUHJpemVMZXZlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Qcml6ZUxldmVsID0gUHJpemVMZXZlbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFByaXplTGV2ZWxfMSA9IHJlcXVpcmUoXCIuL1ByaXplTGV2ZWxcIik7XHJcbi8vIOiOt+WlluWQjeWNlVxyXG52YXIgV2lubmVyTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdpbm5lckxpc3Qob3B0aW9ucykge1xyXG4gICAgICAgIC8vIOetiee6p+exu+eahOaVsOaNrumFjee9rlxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gW1xyXG4gICAgICAgICAgICB7IHRpdGxlOiAn54m5562J5aWWJywgeTogMTQwLCBoZWlnaHQ6IDE0MCB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiAn5LiA562J5aWWJywgeTogMzAwLCBoZWlnaHQ6IDEzMCB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiAn5LqM562J5aWWJywgeTogNDUwLCBoZWlnaHQ6IDE3MCB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiAn5LiJ562J5aWWJywgeTogNjQwLCBoZWlnaHQ6IDI2MCB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy8g562J57qn57G75a6e5L6L77yI54m5562J5aWW77yM5LiA562J5aWW77yM5LqM562J5aWWLi4u77yJXHJcbiAgICAgICAgdGhpcy5wcml6ZUxldmVscyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltZyA9IG9wdGlvbnMuYmFja2dyb3VuZEltZztcclxuICAgICAgICB0aGlzLnRpdGxlSW1nID0gb3B0aW9ucy50aXRsZUltZztcclxuICAgICAgICB0aGlzLmxldmVsSW1nID0gb3B0aW9ucy5sZXZlbEltZztcclxuICAgICAgICB0aGlzLnggPSBvcHRpb25zLnggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnkgfHwgMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy5wcml6ZUxldmVsID0gb3B0aW9ucy5wcml6ZUxldmVsIHx8IFtdO1xyXG4gICAgICAgIHRoaXMudGl0bGVJbWdPcHQgPSB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNDMsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjQzICogdGhpcy50aXRsZUltZy5uYXR1cmFsSGVpZ2h0IC8gdGhpcy50aXRsZUltZy5uYXR1cmFsV2lkdGhcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIOWIm+W7uuetiee6p+exu+WunuS+i1xyXG4gICAgICAgIHRoaXMuX2luaXRQcml6ZUxldmVscygpO1xyXG4gICAgfVxyXG4gICAgLy8g5Yib5bu6562J57qn57G75a6e5L6LXHJcbiAgICBXaW5uZXJMaXN0LnByb3RvdHlwZS5faW5pdFByaXplTGV2ZWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLnByaXplTGV2ZWwubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGlzU3BlY2lhbCA9ICFpO1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWc6IHRoaXMubGV2ZWxJbWcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5jb25maWdbaV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnggKyAxMCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuY29uZmlnW2ldLnkgfHwgdGhpcy55ICsgdGhpcy50aXRsZUltZ09wdC5oZWlnaHQgKyAyMCArIGkgKiAxOTAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCAtIDIwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZ1tpXS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdExlbmd0aDogdGhpcy5wcml6ZUxldmVsW2ldLFxyXG4gICAgICAgICAgICAgICAgaXNTcGVjaWFsOiBpc1NwZWNpYWwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucHJpemVMZXZlbHMucHVzaChuZXcgUHJpemVMZXZlbF8xLlByaXplTGV2ZWwob3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBXaW5uZXJMaXN0LnByb3RvdHlwZS5nZXRBbGxOYW1lTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMucHJpemVMZXZlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG5hbWVMaXN0ID0gdGhpcy5wcml6ZUxldmVsc1tpXS5nZXROYW1lTGlzdCgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuSiA9IG5hbWVMaXN0Lmxlbmd0aDsgaiA8IGxlbko7IGorKykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmFtZUxpc3Rbal0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgV2lubmVyTGlzdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIC8vIOe7mOWItumAj+aYjuiDjOaZr1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kSW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIC8vIOe7mOWItifojrflpZblkI3ljZUn5Zu+54mHXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnRpdGxlSW1nLCB0aGlzLnggKyAodGhpcy53aWR0aCAtIHRoaXMudGl0bGVJbWdPcHQud2lkdGgpIC8gMiwgdGhpcy50aXRsZUltZ09wdC5tYXJnaW5Ub3AsIHRoaXMudGl0bGVJbWdPcHQud2lkdGgsIHRoaXMudGl0bGVJbWdPcHQuaGVpZ2h0KTtcclxuICAgICAgICAvLyDnu5jliLYg5aWW5Yqx5Yy6XHJcbiAgICAgICAgdGhpcy5wcml6ZUxldmVscy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdpbm5lckxpc3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV2lubmVyTGlzdCA9IFdpbm5lckxpc3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQb2ludF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BvaW50XCIpKTtcclxudmFyIFJpYmJvbl8xID0gcmVxdWlyZShcIi4vUmliYm9uXCIpO1xyXG52YXIgX3JhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cclxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG52YXIgTGFudGVybiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExhbnRlcm4ob3B0aW9ucykge1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMubGFudGVybiA9IHt9OyAvLyA/77+977+916Lvv73vv73vv73vv73Su++/ve+/ve+/ve+/vdK777+977+90qrvv73vv73KvO+/ve+/vVxyXG4gICAgICAgIHRoaXMubGFudGVybi5vSW1nID0gb3B0aW9ucy5sYW50ZXJuLm9JbWc7XHJcbiAgICAgICAgdGhpcy5sYW50ZXJuLnggPSBvcHRpb25zLmxhbnRlcm4ueCB8fCAwO1xyXG4gICAgICAgIHRoaXMubGFudGVybi55ID0gb3B0aW9ucy5sYW50ZXJuLnkgfHwgMDtcclxuICAgICAgICB0aGlzLmxhbnRlcm4ud2lkdGggPSBvcHRpb25zLmxhbnRlcm4ud2lkdGggfHwgMTAwO1xyXG4gICAgICAgIC8vIHRoaXMubGFudGVybi5oZWlnaHQgPSBvcHRpb25zLmxhbnRlcm4uaGVpZ2h0IHx8IDEwMDsvLyDvv73vv73vv73cuO+/vcSs77+977+91rVcclxuICAgICAgICB0aGlzLmxhbnRlcm4uYW5nbGUgPSBvcHRpb25zLmxhbnRlcm4uYW5nbGUgfHwgMDtcclxuICAgICAgICB0aGlzLmxhbnRlcm4uYW5nbGVTcGVlZCA9IG9wdGlvbnMubGFudGVybi5hbmdsZVNwZWVkIHx8IDEwO1xyXG4gICAgICAgIC8vIO+/vdC077+9XHJcbiAgICAgICAgdGhpcy5yaWJib24gPSB7fTsgLy8gP++/ve+/vdei77+977+977+977+90rvvv73vv73vv73vv73Su++/ve+/vdKq77+977+9yrzvv73vv71cclxuICAgICAgICB0aGlzLnJpYmJvbi5udW0gPSBvcHRpb25zLnJpYmJvbi5udW0gfHwgMjtcclxuICAgICAgICB0aGlzLnJpYmJvbi5kaXN0YW5jZSA9IG9wdGlvbnMucmliYm9uLmRpc3RhbmNlIHx8IDIwMDtcclxuICAgICAgICB0aGlzLnJpYmJvbi5jb2xvciA9IG9wdGlvbnMucmliYm9uLmNvbG9yIHx8ICcjY2NjJztcclxuICAgICAgICB0aGlzLnJpYmJvbi5saW5lV2lkdGggPSBvcHRpb25zLnJpYmJvbi5saW5lV2lkdGggfHwgMTtcclxuICAgICAgICB0aGlzLnJpYmJvbi5nbG9iYWxBbHBoYSA9IG9wdGlvbnMucmliYm9uLmdsb2JhbEFscGhhIHx8IDE7XHJcbiAgICAgICAgdGhpcy5yaWJib24uYm9yblJhbmdlID0gb3B0aW9ucy5yaWJib24uYm9yblJhbmdlIHx8IDEwO1xyXG4gICAgICAgIHRoaXMucmliYm9uLnNwZWVkID0gb3B0aW9ucy5yaWJib24uc3BlZWQgfHwgMTA7XHJcbiAgICAgICAgdGhpcy5yaWJib24ucmFuZ2UgPSBvcHRpb25zLnJpYmJvbi5yYW5nZSB8fCAxMDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuYmV0YSA9IDA7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLnJpYmJvbnMgPSBbXTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuaW5pdFJpYmJvbigpO1xyXG4gICAgfVxyXG4gICAgLy8g77+977+9yrzvv73vv73vv73QtO+/vVxyXG4gICAgTGFudGVybi5wcm90b3R5cGUuaW5pdFJpYmJvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmliYm9uLm51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IHRoaXMubGFudGVybi5oZWlnaHQgPyB0aGlzLmxhbnRlcm4uaGVpZ2h0IDogdGhpcy5sYW50ZXJuLndpZHRoICogdGhpcy5sYW50ZXJuLm9JbWcubmF0dXJhbEhlaWdodCAvIHRoaXMubGFudGVybi5vSW1nLm5hdHVyYWxXaWR0aDtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0WCA9IHRoaXMubGFudGVybi54ICsgTWF0aC5jb3MoTWF0aC5QSSAvIDE4MCAqICh0aGlzLmxhbnRlcm4uYW5nbGUgKyA5MCkpICogZGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFkgPSB0aGlzLmxhbnRlcm4ueSArIE1hdGguc2luKE1hdGguUEkgLyAxODAgKiAodGhpcy5sYW50ZXJuLmFuZ2xlICsgOTApKSAqIGRpc3RhbmNlO1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbFggPSBzdGFydFg7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sWSA9IHN0YXJ0WSArIHRoaXMucmliYm9uLmRpc3RhbmNlIC8gMztcclxuICAgICAgICAgICAgdmFyIGVuZFggPSBzdGFydFg7IC8vIO+/ve+/ve+/ve+/ve+/ve+/vVjvv73vv73vv73qo6jvv73ktq/vv73vv71cclxuICAgICAgICAgICAgdmFyIGVuZFkgPSBzdGFydFkgKyBfcmFuZG9tKHRoaXMucmliYm9uLmRpc3RhbmNlIC0gMjAsIHRoaXMucmliYm9uLmRpc3RhbmNlICsgMjApO1xyXG4gICAgICAgICAgICB2YXIgc3BlZWQgPSBfcmFuZG9tKDAuMDIsIDAuMDMpO1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBfcmFuZG9tKDIwLCAzMCk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRQb2ludDogbmV3IFBvaW50XzEuZGVmYXVsdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgICAgICAgICBjb250cm9sUG9pbnQ6IG5ldyBQb2ludF8xLmRlZmF1bHQoY29udHJvbFgsIGNvbnRyb2xZKSxcclxuICAgICAgICAgICAgICAgIGVuZFBvaW50OiBuZXcgUG9pbnRfMS5kZWZhdWx0KGVuZFgsIGVuZFkpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucmliYm9uLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiB0aGlzLnJpYmJvbi5saW5lV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxBbHBoYTogdGhpcy5yaWJib24uZ2xvYmFsQWxwaGEsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogc3BlZWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucmliYm9ucy5wdXNoKG5ldyBSaWJib25fMS5SaWJib24ob3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDvv73vv73vv73vv73vv73vv71cclxuICAgIExhbnRlcm4ucHJvdG90eXBlLmRyYXdMYW50ZXJuID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBvSW1nID0gdGhpcy5sYW50ZXJuLm9JbWc7XHJcbiAgICAgICAgdmFyIGltZ1dpZHRoID0gdGhpcy5sYW50ZXJuLm9JbWcubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgIHZhciBpbWdIZWlnaHQgPSB0aGlzLmxhbnRlcm4ub0ltZy5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmxhbnRlcm4ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMubGFudGVybi55O1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMubGFudGVybi53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5sYW50ZXJuLmhlaWdodCA9IHdpZHRoICogaW1nSGVpZ2h0IC8gaW1nV2lkdGg7XHJcbiAgICAgICAgLy8gVE9ETyDvv73vv73vv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5sYW50ZXJuLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgLy8g77+977+977+977+90Kfvv73vv71cclxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDAsIDAuMiknO1xyXG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCAyMDAsIDIwMCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShvSW1nLCAwLCAwLCBpbWdXaWR0aCwgaW1nSGVpZ2h0LCAtd2lkdGggLyAyLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvLyDvv73vv73vv73vv73Qp++/ve+/vVxyXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2Uob0ltZywgMCwgMCwgaW1nV2lkdGgsIGltZ0hlaWdodCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICcjZjAwJztcclxuICAgICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgMjAsIDIwKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIGN0eC5yb3RhdGUoMCk7XHJcbiAgICB9O1xyXG4gICAgLy8g77+977+977+90LTvv71cclxuICAgIExhbnRlcm4ucHJvdG90eXBlLmRyYXdSaWJib24gPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5yaWJib25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMYW50ZXJuLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5kcmF3TGFudGVybihjdHgpO1xyXG4gICAgICAgIHRoaXMuZHJhd1JpYmJvbihjdHgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMYW50ZXJuO1xyXG59KCkpO1xyXG5leHBvcnRzLkxhbnRlcm4gPSBMYW50ZXJuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTXlJbWFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE15SW1hZ2Uob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub0ltZyA9IG9wdGlvbnMub0ltZztcclxuICAgICAgICB0aGlzLnggPSBvcHRpb25zLnggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnkgfHwgMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgMDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCAxO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG9wdGlvbnMub3BhY2l0eSB8fCAxO1xyXG4gICAgfVxyXG4gICAgTXlJbWFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMub0ltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNeUltYWdlO1xyXG59KCkpO1xyXG5leHBvcnRzLk15SW1hZ2UgPSBNeUltYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XHJcbiAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gMDsgfVxyXG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IDA7IH1cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUG9pbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX3JhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cclxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG4vKipcclxuICog77+977+977+977+9dHlwZXNjcmlwdO+/ve+/vSBNYXRoLnNpZ24g0qrvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73Eutyj77+977+977+977+977+90LTvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv71cclxuICovXHJcbnZhciBfc2lnbiA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICBpZiAobiA+IDApIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG4gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG4gPT09IC0wKSB7XHJcbiAgICAgICAgcmV0dXJuIC0wO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobiA8IDApIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgfVxyXG59O1xyXG52YXIgUmF5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmF5KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAwOyB9XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gMDsgfVxyXG4gICAgICAgIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7IHdpZHRoID0gMTsgfVxyXG4gICAgICAgIGlmIChoZWlnaHQgPT09IHZvaWQgMCkgeyBoZWlnaHQgPSAxOyB9XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAvLyDKue+/ve+/vda1XHJcbiAgICAgICAgdGhpcy5vID0gTWF0aC5QSSAvIDIgKiAoTWF0aC5yYW5kb20oKSAqIHRoaXMueCAtIHRoaXMuaGVpZ2h0IC8gMikgLyB0aGlzLmhlaWdodDtcclxuICAgICAgICBpZiAodGhpcy5vID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubyA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIE1hdGguUEkgLyAyOyAvLyDvv73WuO+/ve+/ve+/vSAtOTAgfiArOTBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zID0gMiAqIE1hdGguUEkgKiAoTWF0aC5yYW5kb20oKSAqIHRoaXMueSAtIHRoaXMud2lkdGggLyAyKSAvIHRoaXMud2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMucyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnMgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmggPSAwO1xyXG4gICAgICAgIC8vIO+/veS7r9a1XHJcbiAgICAgICAgdGhpcy5sID0gMC4wMiAqIF9zaWduKHRoaXMucyk7IC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vda177+977+9MSwgLTEsIDAsIC0wLCBOYU5cclxuICAgICAgICB0aGlzLmMgPSAwLjAyICogX3NpZ24odGhpcy5vKTsgLy8g77+977+977+977+977+977+977+977+91rXvv73vv70xLCAtMSwgMCwgLTAsIE5hTlxyXG4gICAgICAgIHRoaXMuYyArPSBfcmFuZG9tKC0wLjAwNSwgMC4wMDUpO1xyXG4gICAgICAgIHRoaXMuZCA9IF9yYW5kb20oMiwgNCk7IC8vIO+/vd+z77+9XHJcbiAgICB9XHJcbiAgICBSYXkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgc3RhcnRYID0gdGhpcy54ICsgTWF0aC5jb3ModGhpcy5zKSAqIHRoaXMuaCAvIDI7XHJcbiAgICAgICAgdmFyIHN0YXJ0WSA9IHRoaXMueSArIE1hdGguc2luKHRoaXMucykgKiB0aGlzLmggLyAyO1xyXG4gICAgICAgIHZhciBlbmRYID0gdGhpcy54ICsgTWF0aC5jb3ModGhpcy5vKSAqIHRoaXMuaDtcclxuICAgICAgICB2YXIgZW5kWSA9IHRoaXMueSArIE1hdGguc2luKHRoaXMubykgKiB0aGlzLmg7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFkpO1xyXG4gICAgfTtcclxuICAgIFJheS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubyArPSB0aGlzLmMgKiAyOyAvLyDvv73vv73vv73vv70yIO+/ve+/vc6q77+977+9IO+/ve+/vcqn77+977+977+9XHJcbiAgICAgICAgdGhpcy5zICs9IHRoaXMubCAqIDI7IC8vIO+/ve+/ve+/ve+/vTIg77+977+9zqrvv73vv70g77+977+9yqfvv73vv73vv71cclxuICAgICAgICB0aGlzLmggKz0gTWF0aC5jb3ModGhpcy5vKSAqIHRoaXMuZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmF5O1xyXG59KCkpO1xyXG5leHBvcnRzLlJheSA9IFJheTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFJpYmJvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJpYmJvbihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvaW50ID0gb3B0aW9ucy5zdGFydFBvaW50O1xyXG4gICAgICAgIHRoaXMuY29udHJvbFBvaW50ID0gb3B0aW9ucy5jb250cm9sUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5lbmRQb2ludCA9IG9wdGlvbnMuZW5kUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJyNjY2MnO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGggfHwgMTQ7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxBbHBoYSA9IG9wdGlvbnMuZ2xvYmFsQWxwaGEgfHwgMC44O1xyXG4gICAgICAgIC8vIO+/ve+/vcys77+977+977+977+9XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQgfHwgMTA7IC8vIO+/ve+/ve+/ve+/vdKh77+92rXvv73vv73Ztu+/vVxyXG4gICAgICAgIHRoaXMucmFuZ2UgPSBvcHRpb25zLnJhbmdlIHx8IDQwOyAvLyDvv73vv73vv73vv73Soe+/vdq1xLfvv73Op1xyXG4gICAgfVxyXG4gICAgUmliYm9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmdsb2JhbEFscGhhO1xyXG4gICAgICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgICAgICBjdHgubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgICAgIC8vY3R4LmJlZ2luUGF0aCgpOy8vID/vv73vv73Xou+/veKjuu+/ve+/ve+/ve+3tO+/ve+/ve+/ve+/ve+/vdy477+9Y2xvc2VQYXRoKCnvv73vv73vv73vv73Iu++/ve+/vdW677+9XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnN0YXJ0UG9pbnQueCwgdGhpcy5zdGFydFBvaW50LnkpO1xyXG4gICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHRoaXMuY29udHJvbFBvaW50LngsIHRoaXMuY29udHJvbFBvaW50LnksIHRoaXMuZW5kUG9pbnQueCwgdGhpcy5lbmRQb2ludC55KTtcclxuICAgICAgICAvL2N0eC5jbG9zZVBhdGgoKTsvLyA/77+977+916Lvv73io7rvv73vv73vv73vt7Tvv73vv73vv73vv73vv73cuO+/vWNsb3NlUGF0aCgp77+977+977+977+9yLvvv73vv73Vuu+/vVxyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSaWJib247XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmliYm9uID0gUmliYm9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZXh0KG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQgfHwgJyc7XHJcbiAgICAgICAgdGhpcy54ID0gdHlwZW9mIG9wdGlvbnMueCAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnggOiAwO1xyXG4gICAgICAgIHRoaXMueSA9IHR5cGVvZiBvcHRpb25zLnkgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy55IDogMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvciB8fCAnIzAwMCc7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gdHlwZW9mIG9wdGlvbnMub3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLm9wYWNpdHkgOiAxO1xyXG4gICAgICAgIHRoaXMuZm9udFN0eWxlID0gb3B0aW9ucy5mb250U3R5bGUgfHwgJ25vcm1hbCc7XHJcbiAgICAgICAgdGhpcy5mb250VmFyaWFudCA9IG9wdGlvbnMuZm9udFZhcmlhbnQgfHwgJ25vcm1hbCc7XHJcbiAgICAgICAgdGhpcy5mb250V2VpZ2h0ID0gdHlwZW9mIG9wdGlvbnMuZm9udFdlaWdodCAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmZvbnRXZWlnaHQgOiAxMDA7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHR5cGVvZiBvcHRpb25zLmZvbnRTaXplICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuZm9udFNpemUgOiAyNDtcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHkgfHwgJ2FyaWFsJztcclxuICAgICAgICAvLyDvv73Ltu+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gb3B0aW9ucy5zcGVlZFggfHwgMDtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IG9wdGlvbnMuc3BlZWRZIHx8IDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZE9wYWNpdHkgPSBvcHRpb25zLnNwZWVkT3BhY2l0eSB8fCAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRleHQ7XHJcbn0oKSk7XHJcbnZhciBTb2xpZFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU29saWRUZXh0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU29saWRUZXh0KG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNvbGlkVGV4dC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRTdHlsZSArIFwiIFwiICsgdGhpcy5mb250VmFyaWFudCArIFwiIFwiICsgdGhpcy5mb250V2VpZ2h0ICsgXCIgXCIgKyB0aGlzLmZvbnRTaXplICsgXCJweCBcIiArIHRoaXMuZm9udEZhbWlseTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjsgLy8g77+977+977+977+977+977+9yatcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IC8vIO+/ve+/ve+/ve+/vcuuxr3vv73vv73vv73rt73KvVxyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiOyAvLyDvv73vv73vv73DtO+/vdax77+977+977+967e9yr1cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTb2xpZFRleHQ7XHJcbn0oVGV4dCkpO1xyXG5leHBvcnRzLlNvbGlkVGV4dCA9IFNvbGlkVGV4dDtcclxudmFyIEhvbGxvd1RleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSG9sbG93VGV4dCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEhvbGxvd1RleHQob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGggfHwgMTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBIb2xsb3dUZXh0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZm9udCA9IHRoaXMuZm9udFN0eWxlICsgXCIgXCIgKyB0aGlzLmZvbnRWYXJpYW50ICsgXCIgXCIgKyB0aGlzLmZvbnRXZWlnaHQgKyBcIiBcIiArIHRoaXMuZm9udFNpemUgKyBcInB4IFwiICsgdGhpcy5mb250RmFtaWx5O1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7IC8vIO+/ve+/ve+/ve+/ve+/ve+/vcmrXHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgLy8g77+977+977+977+9y67Gve+/ve+/ve+/veu3vcq9XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7IC8vIO+/ve+/ve+/vcO077+91rHvv73vv73vv73rt73KvVxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlVGV4dCh0aGlzLnRleHQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSG9sbG93VGV4dDtcclxufShUZXh0KSk7XHJcbmV4cG9ydHMuSG9sbG93VGV4dCA9IEhvbGxvd1RleHQ7XHJcbnZhciBDb250b3VyVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb250b3VyVGV4dCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbnRvdXJUZXh0KG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxpbmVXaWR0aCA9IG9wdGlvbnMubGluZVdpZHRoIHx8IDE7XHJcbiAgICAgICAgX3RoaXMuc3Ryb2tlQ29sb3IgPSBvcHRpb25zLnN0cm9rZUNvbG9yIHx8ICcjZjAwJztcclxuICAgICAgICBfdGhpcy5maWxsQ29sb3IgPSBvcHRpb25zLmZpbGxDb2xvciB8fCAnI2ZmMCc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQ29udG91clRleHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250U3R5bGUgKyBcIiBcIiArIHRoaXMuZm9udFZhcmlhbnQgKyBcIiBcIiArIHRoaXMuZm9udFdlaWdodCArIFwiIFwiICsgdGhpcy5mb250U2l6ZSArIFwicHggXCIgKyB0aGlzLmZvbnRGYW1pbHk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VDb2xvcjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgLy8g77+977+977+977+9y67Gve+/ve+/ve+/veu3vcq9XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7IC8vIO+/ve+/ve+/vcO077+91rHvv73vv73vv73rt73KvVxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlVGV4dCh0aGlzLnRleHQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbnRvdXJUZXh0O1xyXG59KFRleHQpKTtcclxuZXhwb3J0cy5Db250b3VyVGV4dCA9IENvbnRvdXJUZXh0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVGV4dF8xID0gcmVxdWlyZShcIi4uL0VsZW1lbnQvVGV4dFwiKTtcclxudmFyIE15SW1hZ2VfMSA9IHJlcXVpcmUoXCIuLi9FbGVtZW50L015SW1hZ2VcIik7XHJcbnZhciBXaW5uZXJMaXN0XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50L1dpbm5lckxpc3RcIik7XHJcbnZhciBfcmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XHJcbiAgICBpZiAobWluID09PSB2b2lkIDApIHsgbWluID0gMDsgfVxyXG4gICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDE7IH1cclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn07XHJcbi8vIOWKqOeUu+atpemqpFxyXG52YXIgYW5pbWF0aW9uU3RlcDtcclxuKGZ1bmN0aW9uIChhbmltYXRpb25TdGVwKSB7XHJcbiAgICBhbmltYXRpb25TdGVwW2FuaW1hdGlvblN0ZXBbXCJub0FuaW1hdGlvblwiXSA9IDBdID0gXCJub0FuaW1hdGlvblwiO1xyXG4gICAgYW5pbWF0aW9uU3RlcFthbmltYXRpb25TdGVwW1widHJlYXN1cmVCb3hcIl0gPSAxXSA9IFwidHJlYXN1cmVCb3hcIjtcclxuICAgIGFuaW1hdGlvblN0ZXBbYW5pbWF0aW9uU3RlcFtcImJvb21cIl0gPSAyXSA9IFwiYm9vbVwiO1xyXG4gICAgYW5pbWF0aW9uU3RlcFthbmltYXRpb25TdGVwW1widGV4dFwiXSA9IDNdID0gXCJ0ZXh0XCI7XHJcbiAgICBhbmltYXRpb25TdGVwW2FuaW1hdGlvblN0ZXBbXCJuYW1lQmxpbmtcIl0gPSA0XSA9IFwibmFtZUJsaW5rXCI7XHJcbn0pKGFuaW1hdGlvblN0ZXAgfHwgKGFuaW1hdGlvblN0ZXAgPSB7fSkpO1xyXG52YXIgVHJlYXN1cmVCb3hEb3duID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJlYXN1cmVCb3hEb3duKG9wdGlvbnMpIHtcclxuICAgICAgICAvLyDlrp3nrrHlrp7kvosgLy8g6L+Z5o6l5Y+jIOaAjuS5iOWumuS5ie+8n++8n++8n1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgLy8g5a6d566x5bGe5oCnXHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveCA9IHtcclxuICAgICAgICAgICAgb0ltZzogbnVsbCxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNjAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDlrp3nrrHov5DliqhcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94RnJhbWUgPSAwO1xyXG4gICAgICAgIC8vIOWuneeuseWxnuaAp1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZFkgPSAwO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZE9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vIOeIhueCuFxyXG4gICAgICAgIHRoaXMuYm9vbSA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm9vbVN0ZXAgPSAwO1xyXG4gICAgICAgIC8vIOaWh+Wtl+WxnuaAp1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudGV4dE9uTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOaWh+Wtl+enu+WKqFxyXG4gICAgICAgIHRoaXMudGV4dFNwZWVkWCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0U3BlZWRZID0gMDtcclxuICAgICAgICB0aGlzLnRleHRGb250U2l6ZVNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLnRleHRGb250V2VpZ2h0U3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dEZyYW1lID0gMDtcclxuICAgICAgICAvLyDljoblj7JcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeVBvaW50ID0gW107XHJcbiAgICAgICAgdGhpcy5oaXN0b3JpZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgLy8g6Zeq54OB5ZCN5a2XXHJcbiAgICAgICAgdGhpcy5uYW1lQmxpbmtzID0gW107XHJcbiAgICAgICAgdGhpcy5uYW1lQmxpbmsgPSB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLnRhcmdldENvbG9yID0gJyMwMDAnO1xyXG4gICAgICAgIC8vIOWKqOeUu1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAubm9BbmltYXRpb247XHJcbiAgICAgICAgLy8g5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jYW4gPSBvcHRpb25zLmNhbjtcclxuICAgICAgICB0aGlzLnByaXplTGV2ZWwgPSBvcHRpb25zLnByaXplTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5uYW1lTGlzdCA9IG9wdGlvbnMubmFtZUxpc3Q7XHJcbiAgICAgICAgLy8g5a6d566xXHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC5vSW1nID0gb3B0aW9ucy50cmVhc3VyZUJveC5vSW1nO1xyXG4gICAgICAgIHZhciB0cmVhc3VyZUJveEltYWdlSW5mbyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMudHJlYXN1cmVCb3gub0ltZy5uYXR1cmFsV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy50cmVhc3VyZUJveC5vSW1nLm5hdHVyYWxIZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94LndpZHRoID0gb3B0aW9ucy50cmVhc3VyZUJveC53aWR0aCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC5oZWlnaHQgPSBvcHRpb25zLnRyZWFzdXJlQm94LmhlaWdodCB8fCB0aGlzLnRyZWFzdXJlQm94LndpZHRoICogdHJlYXN1cmVCb3hJbWFnZUluZm8uaGVpZ2h0IC8gdHJlYXN1cmVCb3hJbWFnZUluZm8ud2lkdGg7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC54ID0gb3B0aW9ucy50cmVhc3VyZUJveC54IHx8ICh0aGlzLmNhbi53aWR0aCAtIHRoaXMudHJlYXN1cmVCb3gud2lkdGgpIC8gMjtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94LnkgPSBvcHRpb25zLnRyZWFzdXJlQm94LnkgfHwgKHRoaXMuY2FuLmhlaWdodCAtIHRoaXMudHJlYXN1cmVCb3guaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC5vcGFjaXR5ID0gb3B0aW9ucy50cmVhc3VyZUJveC5vcGFjaXR5IHx8IDE7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC5zY2FsZSA9IG9wdGlvbnMudHJlYXN1cmVCb3guc2NhbGUgfHwgMTtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94LmR1cmF0aW9uID0gb3B0aW9ucy50cmVhc3VyZUJveC5kdXJhdGlvbiB8fCA2MDtcclxuICAgICAgICAvLyDniIbngrjlm77niYdcclxuICAgICAgICB0aGlzLmJvb20ub0ltZyA9IG9wdGlvbnMuYm9vbS5vSW1nO1xyXG4gICAgICAgIC8vIOWHuueUn+aWh+Wtl1xyXG4gICAgICAgIGlmICghIW9wdGlvbnMudGV4dCkge1xyXG4gICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy50ZXh0LmZvbnRTaXplICE9PSAndW5kZWZpbmVkJyAmJiAodGhpcy50ZXh0LmZvbnRTaXplID0gb3B0aW9ucy50ZXh0LmZvbnRTaXplKTtcclxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMudGV4dC5jb2xvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKHRoaXMudGV4dC5jb2xvciA9IG9wdGlvbnMudGV4dC5jb2xvcik7XHJcbiAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLnRleHQuZHVyYXRpb24gIT09ICd1bmRlZmluZWQnICYmICh0aGlzLnRleHQuZHVyYXRpb24gPSBvcHRpb25zLnRleHQuZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDljoblj7JcclxuICAgICAgICAvLyBpZiAoISFvcHRpb25zLmhpc3RvcnkpIHtcclxuICAgICAgICAvLyAgICAgdHlwZW9mIG9wdGlvbnMuaGlzdG9yeS54ICE9PSAndW5kZWZpbmVkJyAmJiAodGhpcy5oaXN0b3J5LnggPSBvcHRpb25zLmhpc3RvcnkueCk7XHJcbiAgICAgICAgLy8gICAgIHR5cGVvZiBvcHRpb25zLmhpc3RvcnkueSAhPT0gJ3VuZGVmaW5lZCcgJiYgKHRoaXMuaGlzdG9yeS55ID0gb3B0aW9ucy5oaXN0b3J5LnkpO1xyXG4gICAgICAgIC8vICAgICB0eXBlb2Ygb3B0aW9ucy5oaXN0b3J5LmZvbnRTaXplICE9PSAndW5kZWZpbmVkJyAmJiAodGhpcy5oaXN0b3J5LmZvbnRTaXplID0gb3B0aW9ucy5oaXN0b3J5LmZvbnRTaXplKTtcclxuICAgICAgICAvLyAgICAgdHlwZW9mIG9wdGlvbnMuaGlzdG9yeS5jb2xvciAhPT0ndW5kZWZpbmVkJyAmJiAodGhpcy5oaXN0b3J5LmNvbG9yID0gb3B0aW9ucy5oaXN0b3J5LmNvbG9yKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8g6Zeq54OB5paH5a2XXHJcbiAgICAgICAgaWYgKCEhb3B0aW9ucy5uYW1lQmxpbmspIHtcclxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubmFtZUJsaW5rLmZvbnRTaXplICE9PSAndW5kZWZpbmVkJyAmJiAodGhpcy5uYW1lQmxpbmsuZm9udFNpemUgPSBvcHRpb25zLm5hbWVCbGluay5mb250U2l6ZSk7XHJcbiAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLm5hbWVCbGluay5mb250V2VpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiAodGhpcy5uYW1lQmxpbmsuZm9udFdlaWdodCA9IG9wdGlvbnMubmFtZUJsaW5rLmZvbnRXZWlnaHQpO1xyXG4gICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5uYW1lQmxpbmsuY29sb3IgIT09ICd1bmRlZmluZWQnICYmICh0aGlzLm5hbWVCbGluay5jb2xvciA9IG9wdGlvbnMubmFtZUJsaW5rLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53aW5uZXJMaXN0T3B0ID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1nOiBvcHRpb25zLndpbm5lckxpc3QuYmFja2dyb3VuZEltZyxcclxuICAgICAgICAgICAgdGl0bGVJbWc6IG9wdGlvbnMud2lubmVyTGlzdC50aXRsZUltZyxcclxuICAgICAgICAgICAgbGV2ZWxJbWc6IG9wdGlvbnMud2lubmVyTGlzdC5sZXZlbEltZyxcclxuICAgICAgICAgICAgeDogb3B0aW9ucy53aW5uZXJMaXN0LngsXHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMud2lubmVyTGlzdC55LFxyXG4gICAgICAgICAgICB3aWR0aDogb3B0aW9ucy53aW5uZXJMaXN0LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG9wdGlvbnMud2lubmVyTGlzdC5oZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDmo4Dmn6XnlKjmiLflkI3ljZXlkozlpZblirHnrYnnuqfplb/luqZcclxuICAgICAgICAvLyBpZiAoIXRoaXMuX2NoZWNrTGVuZ3RoQmV0d2VlblByaXplTGV2ZWxBbmROYW1lTGlzdCgpKSB7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KCfkvKDlhaXnmoTnlKjmiLflkI3ljZXlkozlpZblirHnrYnnuqfplb/luqbkuI3kuIDmoLcnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8g5a6e5L6L5YyW6I635aWW5ZCN5Y2VXHJcbiAgICAgICAgdGhpcy5faW5pdFdpbm5lckxpc3QoKTtcclxuICAgICAgICAvLyDnlLHkuo7lj6/og73ku47mnKzlnLDojrflj5bogIHmlbDmja7vvIzmiYDku6XopoHph43mlrDov4fmu6TmlbDmja5cclxuICAgICAgICB0aGlzLmZpbHRlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAvLyDliJ3lp4vljJblrp3nrrFcclxuICAgICAgICB0aGlzLmNyZWF0ZVRyZWFzdXJlQm94KCk7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5paH5a2XXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgLy8g5re75Yqg5oyJ6ZKu54K55Ye75LqL5Lu2XHJcbiAgICAgICAgdGhpcy5iaW5kS2V5RG93bigpO1xyXG4gICAgfVxyXG4gICAgLy8g5qOA5p+l5Lyg5YWl55qE5ZCN5Y2VIOWSjCDojrflpZbnrYnnuqfmmK/lkKbkuIDoh7RcclxuICAgIC8vIHByaXZhdGUgX2NoZWNrTGVuZ3RoQmV0d2VlblByaXplTGV2ZWxBbmROYW1lTGlzdCAoKTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgbGV0IG5hbWVMaXN0TGVuZ3RoOiBudW1iZXIgPSB0aGlzLm5hbWVMaXN0Lmxlbmd0aDtcclxuICAgIC8vICAgICBsZXQgcHJpemVMZXZlbExlbmd0aDogbnVtYmVyID0gMDtcclxuICAgIC8vICAgICB0aGlzLnByaXplTGV2ZWwuZm9yRWFjaCgoaXRlbTogQXJyYXk8YW55Pik9PiB7XHJcbiAgICAvLyAgICAgICAgIGl0ZW0uZm9yRWFjaCgobnVtOiBudW1iZXIpPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcHJpemVMZXZlbExlbmd0aCArPSBudW07XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5hbWVMaXN0TGVuZ3RoID09PSBwcml6ZUxldmVsTGVuZ3RoO1xyXG4gICAgLy8gfVxyXG4gICAgLy8g5a6e5L6L5YyW6I635aWW5ZCN5Y2VXHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLl9pbml0V2lubmVyTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltZzogdGhpcy53aW5uZXJMaXN0T3B0LmJhY2tncm91bmRJbWcsXHJcbiAgICAgICAgICAgIHRpdGxlSW1nOiB0aGlzLndpbm5lckxpc3RPcHQudGl0bGVJbWcsXHJcbiAgICAgICAgICAgIGxldmVsSW1nOiB0aGlzLndpbm5lckxpc3RPcHQubGV2ZWxJbWcsXHJcbiAgICAgICAgICAgIHg6IHRoaXMud2lubmVyTGlzdE9wdC54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLndpbm5lckxpc3RPcHQueSxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lubmVyTGlzdE9wdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLndpbm5lckxpc3RPcHQuaGVpZ2h0LFxyXG4gICAgICAgICAgICBwcml6ZUxldmVsOiB0aGlzLnByaXplTGV2ZWwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndpbm5lckxpc3RJbnN0YW5jZSA9IG5ldyBXaW5uZXJMaXN0XzEuV2lubmVyTGlzdChvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmhpc3RvcnlQb2ludCA9IHRoaXMud2lubmVyTGlzdEluc3RhbmNlLmdldEFsbE5hbWVMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmhpc3RvcnlQb2ludC5sZW5ndGggLSAxO1xyXG4gICAgfTtcclxuICAgIC8vIOeUseS6juS7juacrOWcsOiOt+WPluS6huWOhuWPsuaVsOaNru+8jOaJgOS7peWvvOiHtOWOn+eUn+aVsOaNrueahOWPmOWMllxyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5maWx0ZXJGcm9tTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBUcmVhc3VyZUJveERvd24uZ2V0TG9jYWxIaXN0b3J5KCk7XHJcbiAgICAgICAgaWYgKCEhYXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSGlzdG9yaWVzKGFycik7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hpc3Rvcnk6JywgdGhpcy5oaXN0b3JpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3RpbmN0TmFtZUxpc3QoYXJyKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnbmFtZUxpc3Q6JywgdGhpcy5uYW1lTGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlSGlzdG9yeUJvcm5Qb2ludChhcnIpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoaXN0b3J5UG9pbnQ6JywgdGhpcy5oaXN0b3J5UG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaGlzdG9yeVBvaW50Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRyZWFzdXJlQm94RG93bi5nZXRMb2NhbEhpc3RvcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvdHRlcnlfaGlzdG9yeSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG90dGVyeV9oaXN0b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuICEhbG90dGVyeV9oaXN0b3J5ID8gSlNPTi5wYXJzZShsb3R0ZXJ5X2hpc3RvcnkpIDogW107XHJcbiAgICB9O1xyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5jcmVhdGVIaXN0b3JpZXMgPSBmdW5jdGlvbiAobG9jYWxTdHJpbmcpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbG9jYWxTdHJpbmcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5oaXN0b3JpZXMucHVzaChuZXcgVGV4dF8xLlNvbGlkVGV4dChsb2NhbFN0cmluZ1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLmRpc3RpbmN0TmFtZUxpc3QgPSBmdW5jdGlvbiAobG9jYWxTdHJpbmcpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbG9jYWxTdHJpbmcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBsb2NhbFN0cmluZ1tpXS50ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVMaXN0LnNwbGljZSh0aGlzLm5hbWVMaXN0LmluZGV4T2YodGV4dCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDmt7vliqDmjInpkq7ngrnlh7vkuovku7ZcclxuICAgIFRyZWFzdXJlQm94RG93bi5wcm90b3R5cGUuYmluZEtleURvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiBlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn5Yig6Zmk5oiQ5Yqf77yM6K+35Yi35pawJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLmRlbGV0ZUhpc3RvcnlCb3JuUG9pbnQgPSBmdW5jdGlvbiAobG9jYWxTdHJpbmcpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbG9jYWxTdHJpbmcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5oaXN0b3J5UG9pbnQucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIOa3u+WKoOS6i+S7tlxyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IHRoaXMuc3RhcnRTaG93LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50KTtcclxuICAgIH07XHJcbiAgICAvLyDnp7vpmaTkuovku7ZcclxuICAgIFRyZWFzdXJlQm94RG93bi5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50KTtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICAvLyDlvIDlp4vliqjnlLvmmL7npLpcclxuICAgIFRyZWFzdXJlQm94RG93bi5wcm90b3R5cGUuc3RhcnRTaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdoaXN0b3J5UG9pbnQ6JywgdGhpcy5oaXN0b3J5UG9pbnQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduYW1lTGlzdDonLCB0aGlzLm5hbWVMaXN0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbGFzdEluZGV4OicsIHRoaXMubGFzdEluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwLm5vQW5pbWF0aW9uICYmIHRoaXMubGFzdEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgLy90aGlzLlRyZWFzdXJlQm94TW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSBhbmltYXRpb25TdGVwLm5hbWVCbGluaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwLm5hbWVCbGluaykge1xyXG4gICAgICAgICAgICAvLyDmuIXnqbpcclxuICAgICAgICAgICAgdGhpcy5uYW1lQmxpbmtzID0gW107XHJcbiAgICAgICAgICAgIC8vIOaUueWPmOeKtuaAgVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSBhbmltYXRpb25TdGVwLnRyZWFzdXJlQm94O1xyXG4gICAgICAgICAgICAvLyDlrp3nrrHliqhcclxuICAgICAgICAgICAgdGhpcy5UcmVhc3VyZUJveE1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8g5a6e5L6L5YyW5b2T5YmN5Lit5aWW5Lq655qE5ZCN5a2XXHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLmNyZWF0ZVRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuY2FuLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogdGhpcy5jYW4uaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMudGV4dC5mb250U2l6ZSxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogdGhpcy50ZXh0LmZvbnRXZWlnaHQsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnRleHQuY29sb3IsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRleHRJbnN0YW5jZSA9IG5ldyBUZXh0XzEuU29saWRUZXh0KG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIC8vIOmHjee9ruaWh+Wtl+WxnuaAp1xyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5yZXNldFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UueCA9IHRoaXMuY2FuLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS55ID0gdGhpcy5jYW4uaGVpZ2h0IC8gMjtcclxuICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5mb250U2l6ZSA9IHRoaXMudGV4dC5mb250U2l6ZTtcclxuICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5jb2xvciA9IHRoaXMudGV4dC5jb2xvcjtcclxuICAgIH07XHJcbiAgICAvLyDmloflrZfov5DliqhcclxuICAgIFRyZWFzdXJlQm94RG93bi5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0Q29sb3IgPSAodGhpcy5sYXN0SW5kZXggIT09IDApID8gdGhpcy5oaXN0b3J5UG9pbnRbdGhpcy5sYXN0SW5kZXhdLmNvbG9yIDogdGhpcy5oaXN0b3J5UG9pbnRbdGhpcy5sYXN0SW5kZXhdLnN0cm9rZUNvbG9yO1xyXG4gICAgICAgIHZhciB0YXJnZXRYID0gdGhpcy5oaXN0b3J5UG9pbnRbdGhpcy5sYXN0SW5kZXhdWyd4J107XHJcbiAgICAgICAgdmFyIHRhcmdldFkgPSB0aGlzLmhpc3RvcnlQb2ludFt0aGlzLmxhc3RJbmRleF1bJ3knXTtcclxuICAgICAgICB2YXIgdGFyZ2V0Rm9udFNpemUgPSB0aGlzLmhpc3RvcnlQb2ludFt0aGlzLmxhc3RJbmRleF1bJ2ZvbnRTaXplJ107XHJcbiAgICAgICAgdmFyIHRhcmdldEZvbnRXZWlnaHQgPSB0aGlzLmhpc3RvcnlQb2ludFt0aGlzLmxhc3RJbmRleF1bJ2ZvbnRXZWlnaHQnXTtcclxuICAgICAgICB2YXIgZGlzdGFuY2VYID0gdGFyZ2V0WCAtIHRoaXMudGV4dEluc3RhbmNlLng7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlWSA9IHRhcmdldFkgLSB0aGlzLnRleHRJbnN0YW5jZS55O1xyXG4gICAgICAgIHZhciBkaXN0YW5jZUZvbnRTaXplID0gdGFyZ2V0Rm9udFNpemUgLSB0aGlzLnRleHRJbnN0YW5jZS5mb250U2l6ZTtcclxuICAgICAgICB2YXIgZGlzdGFuY2VGb250V2VpZ2h0ID0gdGFyZ2V0Rm9udFdlaWdodCAtIHRoaXMudGV4dEluc3RhbmNlLmZvbnRXZWlnaHQ7XHJcbiAgICAgICAgdmFyIHRleHRTcGVlZFggPSBkaXN0YW5jZVggLyB0aGlzLnRleHQuZHVyYXRpb247XHJcbiAgICAgICAgdmFyIHRleHRTcGVlZFkgPSBkaXN0YW5jZVkgLyB0aGlzLnRleHQuZHVyYXRpb247XHJcbiAgICAgICAgdmFyIHRleHRGb250U2l6ZVNwZWVkID0gZGlzdGFuY2VGb250U2l6ZSAvIHRoaXMudGV4dC5kdXJhdGlvbjtcclxuICAgICAgICB2YXIgdGV4dEZvbnRXZWlnaHRTcGVlZCA9IGRpc3RhbmNlRm9udFdlaWdodCAvIHRoaXMudGV4dC5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLnRleHRTcGVlZFggPSB0ZXh0U3BlZWRYO1xyXG4gICAgICAgIHRoaXMudGV4dFNwZWVkWSA9IHRleHRTcGVlZFk7XHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udFNpemVTcGVlZCA9IHRleHRGb250U2l6ZVNwZWVkO1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnRXZWlnaHRTcGVlZCA9IHRleHRGb250V2VpZ2h0U3BlZWQ7XHJcbiAgICAgICAgdGhpcy5sYXN0SW5kZXgtLTtcclxuICAgICAgICB0aGlzLnRleHRGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0T25Nb3ZlID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICAvLyDlrp7kvovljJblrp3nrrFcclxuICAgIFRyZWFzdXJlQm94RG93bi5wcm90b3R5cGUuY3JlYXRlVHJlYXN1cmVCb3ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltZ1dpZHRoID0gMjAwO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBvSW1nOiB0aGlzLnRyZWFzdXJlQm94Lm9JbWcsXHJcbiAgICAgICAgICAgIHg6ICh0aGlzLmNhbi53aWR0aCAtIGltZ1dpZHRoKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBpbWdXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbWdXaWR0aCAqIHRoaXMudHJlYXN1cmVCb3gub0ltZy5oZWlnaHQgLyB0aGlzLnRyZWFzdXJlQm94Lm9JbWcud2lkdGgsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZSA9IG5ldyBNeUltYWdlXzEuTXlJbWFnZShvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICAvLyDph43nva7lrp3nrrHlsZ7mgKdcclxuICAgIFRyZWFzdXJlQm94RG93bi5wcm90b3R5cGUucmVzZXRUcmVhc3VyZUJveCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW1nV2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLnggPSAodGhpcy5jYW4ud2lkdGggLSBpbWdXaWR0aCkgLyAyO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS55ID0gMDtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2Uud2lkdGggPSBpbWdXaWR0aDtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UuaGVpZ2h0ID0gaW1nV2lkdGggKiB0aGlzLnRyZWFzdXJlQm94Lm9JbWcuaGVpZ2h0IC8gdGhpcy50cmVhc3VyZUJveC5vSW1nLndpZHRoO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS5vcGFjaXR5ID0gMC4yO1xyXG4gICAgfTtcclxuICAgIC8vIOWbvueJh+i/kOWKqFxyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5UcmVhc3VyZUJveE1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFkgPSAodGhpcy5jYW4uaGVpZ2h0IC0gdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHZhciB0YXJnZXRPcGFjaXR5ID0gMTtcclxuICAgICAgICB2YXIgZGlzdGFuY2VZID0gdGFyZ2V0WSAtIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS55O1xyXG4gICAgICAgIHZhciBkaXN0YW5jZU9wYWNpdHkgPSB0YXJnZXRPcGFjaXR5IC0gdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLm9wYWNpdHk7XHJcbiAgICAgICAgdmFyIHRleHRTcGVlZFkgPSBkaXN0YW5jZVkgLyB0aGlzLnRyZWFzdXJlQm94LmR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBzcGVlZE9wYWNpdHkgPSBkaXN0YW5jZU9wYWNpdHkgLyB0aGlzLnRyZWFzdXJlQm94LmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZFkgPSB0ZXh0U3BlZWRZO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZE9wYWNpdHkgPSBzcGVlZE9wYWNpdHk7XHJcbiAgICB9O1xyXG4gICAgLy8g5Y+Y5YyWXHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXAubmFtZUJsaW5rKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWVCbGlua3MubGVuZ3RoIDwgMTAgJiYgTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRvbUluZGV4ID0gfn5fcmFuZG9tKDAsIHRoaXMubmFtZUxpc3QubGVuZ3RoKTsgLy8g5rOo5oSP77yaTWF0aC5yYW5kb20oKee7k+aenOaYrzAgfiAx77yI5LiN5YyF5ZCr77yJXHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IHRoaXMubmFtZUxpc3RbcmFuZG9tSW5kZXhdOyAvLyDms6jmhI/ov5nkuKowXHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLmNhbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5jYW4uaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogdGhpcy5uYW1lQmxpbmsuZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogdGhpcy5uYW1lQmxpbmsuZm9udFdlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5uYW1lQmxpbmsuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWRYOiBfcmFuZG9tKC0yMCwgMjApLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkWTogX3JhbmRvbSgtMjAsIDIwKSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZE9wYWNpdHk6IF9yYW5kb20oMC4wNSwgMC4xKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUJsaW5rcy5wdXNoKG5ldyBUZXh0XzEuU29saWRUZXh0KG9wdGlvbnMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5uYW1lQmxpbmtzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVCbGlua3NbaV0ueCArPSB0aGlzLm5hbWVCbGlua3NbaV0uc3BlZWRYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lQmxpbmtzW2ldLnkgKz0gdGhpcy5uYW1lQmxpbmtzW2ldLnNwZWVkWTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUJsaW5rc1tpXS5vcGFjaXR5IC09IHRoaXMubmFtZUJsaW5rc1tpXS5zcGVlZE9wYWNpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubmFtZUJsaW5rcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLm5hbWVCbGlua3NbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5vcGFjaXR5IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWVCbGlua3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlbi0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwLnRyZWFzdXJlQm94KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlYXN1cmVCb3hGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50cmVhc3VyZUJveEZyYW1lID4gdGhpcy50cmVhc3VyZUJveC5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy8g6YeN572u5Zu+54mH5bGe5oCnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VHJlYXN1cmVCb3goKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlYXN1cmVCb3hGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSBhbmltYXRpb25TdGVwLmJvb207XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vbScpLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vbScpLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UueSArPSB0aGlzLnRyZWFzdXJlQm94U3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2Uub3BhY2l0eSArPSB0aGlzLnRyZWFzdXJlQm94U3BlZWRPcGFjaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwLmJvb20pIHtcclxuICAgICAgICAgICAgdGhpcy5ib29tU3RlcCsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib29tU3RlcCA+IDcgKiAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDov5jljp9cclxuICAgICAgICAgICAgICAgIHRoaXMuYm9vbVN0ZXAgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8g6LWL5YC85paH5a2XXHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tSW5kZXggPSB+fl9yYW5kb20oMCwgdGhpcy5uYW1lTGlzdC5sZW5ndGgpOyAvLyDms6jmhI/vvJpNYXRoLnJhbmRvbSgp57uT5p6c5pivMCB+IDHvvIjkuI3ljIXlkKvvvIlcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gdGhpcy5uYW1lTGlzdC5zcGxpY2UocmFuZG9tSW5kZXgsIDEpWzBdOyAvLyDms6jmhI/ov5nkuKowXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS50ZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgICAgIC8vIOi/m+WFpeS4i+S4gOmYtuautVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwID0gYW5pbWF0aW9uU3RlcC50ZXh0O1xyXG4gICAgICAgICAgICAgICAgLy8gMuenkuWQjui/kOWKqFxyXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdmVUbygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcC50ZXh0ICYmIHRoaXMudGV4dE9uTW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0RnJhbWUgPiB0aGlzLnRleHQuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIOa3u+WKoOWOhuWPslxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3JpZXMucHVzaChuZXcgVGV4dF8xLlNvbGlkVGV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy50ZXh0SW5zdGFuY2UueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnRleHRJbnN0YW5jZS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnRhcmdldENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnRleHRJbnN0YW5jZS5mb250U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHRJbnN0YW5jZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5L+d5a2Y5pys5ZywXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvdHRlcnlfaGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlzdG9yaWVzKSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRPbk1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAubm9BbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UueCArPSB0aGlzLnRleHRTcGVlZFg7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEluc3RhbmNlLnkgKz0gdGhpcy50ZXh0U3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5mb250U2l6ZSArPSB0aGlzLnRleHRGb250U2l6ZVNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5mb250V2VpZ2h0ICs9IHRoaXMudGV4dEZvbnRXZWlnaHRTcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8g5oC75riy5p+TXHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAvLyDlhYjmuLLmn5Mn6I635aWW5ZCN5Y2VJ1xyXG4gICAgICAgIHRoaXMud2lubmVyTGlzdEluc3RhbmNlLnJlbmRlcihjdHgpO1xyXG4gICAgICAgIC8vIOWGjea4suafkyfmir3lpZbliqjnlLsnXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcC5uYW1lQmxpbmspIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJOYW1lQmxpbmtzKGN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcC50cmVhc3VyZUJveCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcC5ib29tKSB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5ib29tLm9JbWcsIDE4NSAqIH5+KHRoaXMuYm9vbVN0ZXAgLyAyKSwgMCwgMTg1LCAxNTksIHRoaXMuY2FuLndpZHRoIC8gMiAtIDEwMCwgdGhpcy5jYW4uaGVpZ2h0IC8gMiAtIDEwMCwgMjAwLCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXAudGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5riy5p+T5Y6G5Y+yXHJcbiAgICAgICAgdGhpcy5yZW5kZXJIaXN0b3JpZXMoY3R4KTtcclxuICAgIH07XHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLnJlbmRlckhpc3RvcmllcyA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLmhpc3Rvcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8g5riy5p+T6Zeq54OB5ZCN5a2XXHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLnJlbmRlck5hbWVCbGlua3MgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lQmxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJlYXN1cmVCb3hEb3duO1xyXG59KCkpO1xyXG5leHBvcnRzLlRyZWFzdXJlQm94RG93biA9IFRyZWFzdXJlQm94RG93bjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENhbnZhc0ZhY3RvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vU2VuY2UvQ2FudmFzRmFjdG9yeVwiKSk7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb25maWdcIik7XHJcbnZhciBSYXlMb2dvXzEgPSByZXF1aXJlKFwiLi4vU2VuY2UvUmF5TG9nb1wiKTtcclxudmFyIFN0YXRzID0gcmVxdWlyZShcIlN0YXRzLWpzXCIpO1xyXG4vKipcclxuICog5bm25LiN5piv5omA5pyJ6K6+5aSH55qE57uY5Yi25pe26Ze06Ze06ZqU5pivMTAwMC82MCBtcywg5Lul5Y+K5LiK6Z2i5bm25pyo5pyJY2FuY2Vs55u45YWz5pa55rOV77yM5omA5Lul77yM5bCx5pyJ5LiL6Z2i6L+Z5Lu95pu05YWo6Z2i55qE5YW85a655pa55rOV77yaXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcclxuICAgIHZhciB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J107XHJcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93Wyh2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZScpXTtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IC8vIFdlYmtpdOS4reatpOWPlua2iOaWueazleeahOWQjeWtl+WPmOS6hlxyXG4gICAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgIH1cclxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XHJcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0oKSk7XHJcbnZhciBTY2VuZUNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTY2VuZUNvbnRyb2xsZXIob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaXNTaG93U3RhdHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBudWxsO1xyXG4gICAgICAgIHZhciBjYW52YXNGYWN0b3J5ID0gbmV3IENhbnZhc0ZhY3RvcnlfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jYW4gPSBjYW52YXNGYWN0b3J5LmdldENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzRmFjdG9yeS5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5yZXNDb25maWcgPSBvcHRpb25zLnJlc0NvbmZpZztcclxuICAgICAgICB0aGlzLkxvYWRTY2VuZSA9IG9wdGlvbnMuTG9hZFNjZW5lO1xyXG4gICAgICAgIHRoaXMuQ3V0U2NlbmUgPSBvcHRpb25zLkN1dFNjZW5lO1xyXG4gICAgICAgIHRoaXMuTG90dGVyeVNjZW5lID0gb3B0aW9ucy5Mb3R0ZXJ5U2NlbmU7XHJcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5U2hvdyA9IG9wdGlvbnMuTG90dGVyeVNob3c7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hbGxvd092ZXJ0aW1lID0gb3B0aW9ucy5hbGxvd092ZXJ0aW1lIHx8IDYwICogMTAwMDtcclxuICAgICAgICB0aGlzLmxhc3RPcGVyYXRpb25UaW1lID0gbnVsbDtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsb2FkU2NlbmUgPSBuZXcgdGhpcy5Mb2FkU2NlbmUoe1xyXG4gICAgICAgICAgICBjYW46IHRoaXMuY2FuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZEFsbFJlc291cmNlKG9wdGlvbnMucmVzQ29uZmlnLCBmdW5jdGlvbiAobG9hZGVkTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIC8qKiDliqDovb3liqjnlLsgKiovXHJcbiAgICAgICAgICAgIGxvYWRTY2VuZS5zaG93KGxvYWRlZE51bWJlciwgb3B0aW9ucy5yZXNDb25maWcubGVuZ3RoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIC8vIOWunuS+i+WMllxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNTaG93U3RhdHMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7IC8vIFN0YXRzIDog5bin5qOA5p+lXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGF0cy5zaG93UGFuZWwoMSk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF90aGlzLnN0YXRzLmRvbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5YiG5Yir5Yid5aeL5YyWJ+i/h+WcuuWcuuaZrydcclxuICAgICAgICAgICAgX3RoaXMuY3V0U2NlbmVJbnN0YW5jZSA9IG5ldyBSYXlMb2dvXzEuUmF5TG9nbyh7XHJcbiAgICAgICAgICAgICAgICBjYW46IF90aGlzLmNhbixcclxuICAgICAgICAgICAgICAgIG9JbWc6IHJlc291cmNlcy50aWVmYW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOWIneWni+WMliDmir3lpZbmlrnlvI9cclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNob3dJbnN0YW5jZSA9IG5ldyBfdGhpcy5Mb3R0ZXJ5U2hvdyh7XHJcbiAgICAgICAgICAgICAgICBjYW46IF90aGlzLmNhbixcclxuICAgICAgICAgICAgICAgIHRyZWFzdXJlQm94OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb0ltZzogcmVzb3VyY2VzLnRyZWFzdXJlQm94LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb25maWdfMS5MT1RURVJZX1NIT1dfQ09ORklHLnRyZWFzdXJlQm94LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnXzEuTE9UVEVSWV9TSE9XX0NPTkZJRy50cmVhc3VyZUJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGNvbmZpZ18xLkxPVFRFUllfU0hPV19DT05GSUcudHJlYXN1cmVCb3guZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG9JbWc6IHJlc291cmNlcy5ib29tLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByaXplTGV2ZWw6IGNvbmZpZ18xLkxPVFRFUllfU0hPV19DT05GSUcucHJpemVMZXZlbCxcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0OiBjb25maWdfMS5MT1RURVJZX1NIT1dfQ09ORklHLm5hbWVMaXN0LFxyXG4gICAgICAgICAgICAgICAgaGlzdG9yeTogY29uZmlnXzEuTE9UVEVSWV9TSE9XX0NPTkZJRy5oaXN0b3J5LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogY29uZmlnXzEuTE9UVEVSWV9TSE9XX0NPTkZJRy50ZXh0LFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxUZXh0OiBjb25maWdfMS5MT1RURVJZX1NIT1dfQ09ORklHLmxldmVsVGV4dCxcclxuICAgICAgICAgICAgICAgIG5hbWVCbGluazogY29uZmlnXzEuTE9UVEVSWV9TSE9XX0NPTkZJRy5uYW1lQmxpbmssXHJcbiAgICAgICAgICAgICAgICB3aW5uZXJMaXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltZzogcmVzb3VyY2VzLm5hbWVfbGlzdF9iZyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUltZzogcmVzb3VyY2VzLm5hbWVfbGlzdF90aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbEltZzogcmVzb3VyY2VzLnByaXplX2xldmVsX2JnLFxyXG4gICAgICAgICAgICAgICAgICAgIHg6IF90aGlzLmNhbi53aWR0aCAtIHJlc291cmNlcy5uYW1lX2xpc3RfYmcubmF0dXJhbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlc291cmNlcy5uYW1lX2xpc3RfYmcubmF0dXJhbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogX3RoaXMuY2FuLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLXNob3cnKS5wbGF5KCk7IC8vIFRPRE9cclxuICAgICAgICAgICAgX3RoaXMudGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTaG93U3RhdHMgJiYgX3RoaXMuc3RhdHMuYmVnaW4oKTtcclxuICAgICAgICAgICAgICAgIHZhciBmbGFnID0gX3RoaXMuY3V0U2NlbmVJbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov4flnLrliqjnlLvnu5PmnZ8nLCAndGltZXI6JyArIF90aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDpgJrnn6Xop4Llr5/ogIVcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5iaW5kRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXQtc2NlbmUnKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWz6Zet5b2T5YmNXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoX3RoaXMudGltZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3V0U2NlbmVJbnN0YW5jZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmlzU2hvd1N0YXRzICYmIF90aGlzLnN0YXRzLmVuZCgpO1xyXG4gICAgICAgICAgICB9LCAxMDAwIC8gNjApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgU2NlbmVDb250cm9sbGVyLnByb3RvdHlwZS5sb2FkQWxsUmVzb3VyY2UgPSBmdW5jdGlvbiAoY29uZmlnLCBsb2FkZWRGbiwgbG9hZGVkQWxsRm4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsb2FkZWROdW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIOmAkOS4gOWKoOi9vVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb25maWcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbY29uZmlnW2ldLm5hbWVdID0gbmV3IEltYWdlKCk7IC8vIOWIm+W7uuS4gOS4quWQjOWQjeeahGtleVxyXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlc1tjb25maWdbaV0ubmFtZV0uc3JjID0gY29uZmlnW2ldLnVybDsgLy8g6K+35rGCXHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzW2NvbmZpZ1tpXS5uYW1lXS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICArK2xvYWRlZE51bWJlcjtcclxuICAgICAgICAgICAgICAgIGxvYWRlZEZuICYmIGxvYWRlZEZuKGxvYWRlZE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaYr+WQpuW3sue7j+WFqOmDqOWKoOi9veWujOavlVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRlZE51bWJlciA9PT0gY29uZmlnLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZEFsbEZuICYmIGxvYWRlZEFsbEZuKF90aGlzLnJlc291cmNlcyk7IC8vIGNhbGxiYWNrLmNhbGwoX3RoaXMpOy8vID9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8g5re75Yqg5LqL5Lu2XHJcbiAgICBTY2VuZUNvbnRyb2xsZXIucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gdGhpcy5zdGFydFNob3cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIC8vIOenu+mZpOS6i+S7tlxyXG4gICAgU2NlbmVDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNhbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIC8vIOeuoeeQhuaKveWlluWKqOeUu+eVjOmdolxyXG4gICAgU2NlbmVDb250cm9sbGVyLnByb3RvdHlwZS5zdGFydFNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1dC1zY2VuZScpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1dC1zY2VuZScpLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZygn54K55Ye75LqG54K55Ye75LqL5Lu2Jyk7XHJcbiAgICAgICAgdGhpcy5sYXN0T3BlcmF0aW9uVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgLy8g55uR5ZCs5pON5L2cXHJcbiAgICAgICAgdGhpcy5jaGVja09wZXJhdGlvbigpO1xyXG4gICAgICAgIHRoaXMubG90dGVyeVNjZW5lSW5zdGFuY2UgPSBuZXcgdGhpcy5Mb3R0ZXJ5U2NlbmUoe1xyXG4gICAgICAgICAgICBjYW46IHRoaXMuY2FuLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1nOiB0aGlzLnJlc291cmNlcy5uZXdZZWFyQmcsXHJcbiAgICAgICAgICAgIGxhbnRlcm5JbWc6IHRoaXMucmVzb3VyY2VzLm5ld1llYXJMYW50ZXJuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOe7keWumueCueWHu+S6i+S7tiAtIOeUn+aIkOaKveWllueahOS6uuWQjVxyXG4gICAgICAgIHRoaXMubG90dGVyeVNob3dJbnN0YW5jZS5iaW5kRXZlbnQoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXllYXInKS5wbGF5KCk7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZnJhbWUrKztcclxuICAgICAgICAgICAgLy8g5rWL6K+V5byA5aeLXHJcbiAgICAgICAgICAgIF90aGlzLmlzU2hvd1N0YXRzICYmIF90aGlzLnN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgICAgIC8vIOaKveWllueahOiDjOaZr1xyXG4gICAgICAgICAgICBfdGhpcy5sb3R0ZXJ5U2NlbmVJbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNjZW5lSW5zdGFuY2UudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIC8vIOaKveWllueahOWxleekulxyXG4gICAgICAgICAgICBfdGhpcy5sb3R0ZXJ5U2hvd0luc3RhbmNlLnJlbmRlcihfdGhpcy5jdHgpO1xyXG4gICAgICAgICAgICBfdGhpcy5sb3R0ZXJ5U2hvd0luc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAvLyDmtYvor5XlhbPpl61cclxuICAgICAgICAgICAgX3RoaXMuaXNTaG93U3RhdHMgJiYgX3RoaXMuc3RhdHMuZW5kKCk7XHJcbiAgICAgICAgfSwgMTAwMCAvIDYwKTtcclxuICAgICAgICAvLyAg55uR5ZCs5pON5L2cXHJcbiAgICAgICAgdGhpcy5jYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5jaGFuZ2VMYXN0T3BlcmF0aW9uVGltZS5iaW5kKF90aGlzKSk7XHJcbiAgICAgICAgdGhpcy5jYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMuY2hhbmdlTGFzdE9wZXJhdGlvblRpbWUuYmluZChfdGhpcykpO1xyXG4gICAgICAgIC8vIOWPlua2iOe7keWumlxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcclxuICAgIH07XHJcbiAgICAvLyDlvZPlpITkuo7mir3lpZblnLrmma/nmoTml7blgJnvvIzml6Dku7vkvZXmk43kvZzotoXov4du56eS5ZCO77yM5bCx5Lya6Lez5Yiw6L+H5rih5Zy65pmvXHJcbiAgICBTY2VuZUNvbnRyb2xsZXIucHJvdG90eXBlLmNoZWNrT3BlcmF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNoZWNrT3BlcmF0aW9uVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbm93VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChTY2VuZUNvbnRyb2xsZXIuaXNPdmVydGltZShub3dUaW1lLCBfdGhpcy5sYXN0T3BlcmF0aW9uVGltZSwgX3RoaXMuYWxsb3dPdmVydGltZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChfdGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3V0U2NlbmVJbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXllYXInKS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy15ZWFyJykuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1dC1zY2VuZScpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIC8vIOmAmuefpeinguWvn+iAhVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuYmluZEV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDlj5bmtojmir3lpZbnmoTngrnlh7vkuovku7ZcclxuICAgICAgICAgICAgICAgIF90aGlzLmxvdHRlcnlTaG93SW5zdGFuY2UuYW5pbWF0aW9uU3RlcCA9IDA7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb3R0ZXJ5U2hvd0luc3RhbmNlLnJlbW92ZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDlhbPpl63mo4Dmn6VcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGNoZWNrT3BlcmF0aW9uVGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVDb250cm9sbGVyLmlzT3ZlcnRpbWUgPSBmdW5jdGlvbiAobm93VGltZSwgbGFzdFRpbWUsIGFsbG93T3ZlcnRpbWUpIHtcclxuICAgICAgICByZXR1cm4gbm93VGltZSAtIGxhc3RUaW1lID49IGFsbG93T3ZlcnRpbWU7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVDb250cm9sbGVyLnByb3RvdHlwZS5jaGFuZ2VMYXN0T3BlcmF0aW9uVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxhc3RPcGVyYXRpb25UaW1lID0gbmV3IERhdGUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2NlbmVDb250cm9sbGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLlNjZW5lQ29udHJvbGxlciA9IFNjZW5lQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIF93ID0gd2luZG93O1xyXG52YXIgX2IgPSBkb2N1bWVudC5ib2R5OyAvLyDvv73vv73vv73vv71odG1sIGRvbe+/vdC177+9Ym9kee+/vdq177+9IO+/ve+/vTxib2R5PlxyXG52YXIgX2QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8vIO+/ve+/ve+/ve+/vWh0bWwgZG9t77+90LXvv71yb290IO+/vdq177+9IO+/ve+/vTxodG1sPlxyXG4vLyBzY3JlZW4gaGVscGVyXHJcbnZhciBfc2NyZWVuSW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KDAsIF93LmlubmVyV2lkdGggfHwgX2QuY2xpZW50V2lkdGggfHwgX2IuY2xpZW50V2lkdGggfHwgMCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoMCwgX3cuaW5uZXJIZWlnaHQgfHwgX2QuY2xpZW50SGVpZ2h0IHx8IF9iLmNsaWVudEhlaWdodCB8fCAwKTtcclxuICAgIHZhciBzY3JvbGx4ID0gTWF0aC5tYXgoMCwgX3cucGFnZVhPZmZzZXQgfHwgX2Quc2Nyb2xsTGVmdCB8fCBfYi5zY3JvbGxMZWZ0IHx8IDApIC0gKF9kLmNsaWVudExlZnQgfHwgMCk7XHJcbiAgICB2YXIgc2Nyb2xseSA9IE1hdGgubWF4KDAsIF93LnBhZ2VZT2Zmc2V0IHx8IF9kLnNjcm9sbFRvcCB8fCBfYi5zY3JvbGxUb3AgfHwgMCkgLSAoX2QuY2xpZW50VG9wIHx8IDApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgcmF0aW86IHdpZHRoIC8gaGVpZ2h0LFxyXG4gICAgICAgIGNlbnRlclg6IHdpZHRoIC8gMixcclxuICAgICAgICBjZW50ZXJZOiBoZWlnaHQgLyAyLFxyXG4gICAgICAgIHNjcm9sbFg6IHNjcm9sbHgsXHJcbiAgICAgICAgc2Nyb2xsWTogc2Nyb2xseVxyXG4gICAgfTtcclxufTtcclxudmFyIENhbnZhc0ZhY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNGYWN0b3J5KGRvbSkge1xyXG4gICAgICAgIGlmIChkb20gPT09IHZvaWQgMCkgeyBkb20gPSBkb2N1bWVudC5ib2R5OyB9XHJcbiAgICAgICAgdGhpcy5fZG9tID0gbnVsbDsgLy8gVE9ETyDvv73vv73vv73vv73Tpu+/ve+/ve+/ve+/vcqyw7Tvv73vv73vv73No++/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZG9tID0gZG9tOyAvLyDvv73vv73WtVxyXG4gICAgICAgIHRoaXMuX2luaXQoKTsgLy8g77+977+9yrzvv73vv71cclxuICAgICAgICAvLyDvv73vv73vv71jYW52YXPvv73vv73vv73vv73vv73vv73vv73vv73vv73vv71kaXbvv73vv73vv73vv73vv73vv71ib2R577+977+977+977+9w7Tvv73vv73Squ+/ve+/vdak77+977+9Ym9kec2syrHvv73Ese+/vcS077+90KHvv73vv71cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChkb20gPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl93aW5kb3dSZXNpemUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g77+977+977+977+9Y2FudmFzXHJcbiAgICBDYW52YXNGYWN0b3J5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1wicG9zaXRpb25cIl0gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcIm1hcmdpblwiXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9jYW52YXMuc3R5bGVbXCJwYWRkaW5nXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcImJvcmRlclwiXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9jYW52YXMuc3R5bGVbXCJvdXRsaW5lXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcImxlZnRcIl0gPSBcIjBcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1widG9wXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHZhciBfZG9tSW5mbyA9IHRoaXMuX2dldERvbUluZm8oKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gX2RvbUluZm9bJ3dpZHRoJ107XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBfZG9tSW5mb1snaGVpZ2h0J107XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcInotaW5kZXhcIl0gPSBcIi0xXCI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5fY2FudmFzLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiI2NjY1wiO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuaWQgPSBcImJnQ2FudmFzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgdGhpcy5fZG9tLmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbnZhcyBDb250ZXh0IEVycm9yOiBcIiArIGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8g77+977+9yKHvv73vv73XsGNhbnZhc++/ve+/ve+/ve+/ve+/vcS477+977+92rXvv73vv73vv73vv73do++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuX2dldERvbUluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fZG9tLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvLyDvv73mtLDvv73aseS7r++/ve+/ve+/veS7u1xyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuX3dpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3dpbmRvdyA9IF9zY3JlZW5JbmZvKCk7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gX3dpbmRvd1snd2lkdGgnXTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gX3dpbmRvd1snaGVpZ2h0J107XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH07XHJcbiAgICAvLyDvv73huanvv73isr/vv73vv73IoWNhbnZhc9Sq77+977+9XHJcbiAgICBDYW52YXNGYWN0b3J5LnByb3RvdHlwZS5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcztcclxuICAgIH07XHJcbiAgICAvLyDvv73huanvv73isr/Kue+/ve+/vWNhbnZhc++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzRmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzRmFjdG9yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lXCIpKTtcclxudmFyIFJheV8xID0gcmVxdWlyZShcIi4uL0VsZW1lbnQvUmF5XCIpO1xyXG4vKipcclxuICog77+977+9yKHSu++/ve+/vc28xqzvv73vv73vv73vv73PolxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKiAgICAgIG9JbWdcclxuICogICAgICB3aWR0aFxyXG4gKiAgICAgIGhlaWdodFxyXG4gKi9cclxuZnVuY3Rpb24gX2dldEltYWdlRGF0YShvcHRpb25zKSB7XHJcbiAgICB2YXIgb0ltZyA9IG9wdGlvbnMub0ltZztcclxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgNDAwO1xyXG4gICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0OyAvLyDDu++/ve+/vcSs77+977+91rVcclxuICAgIC8vIO+/ve+/ve+/ve+/vWNhbnZhc++/ve+/ve+/ve+/ve+/ve+/vcSj77+977+977+977+977+977+977+9yr7vv73vv71cclxuICAgIHZhciBjYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBjdHggPSBjYW4uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbi53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FuLmhlaWdodCA9IGhlaWdodCB8fCBjYW4ud2lkdGggKiBvSW1nLm5hdHVyYWxIZWlnaHQgLyBvSW1nLm5hdHVyYWxXaWR0aDtcclxuICAgIC8vXHJcbiAgICBjdHguZHJhd0ltYWdlKG9JbWcsIDAsIDAsIG9JbWcubmF0dXJhbFdpZHRoLCBvSW1nLm5hdHVyYWxIZWlnaHQsIDAsIDAsIGNhbi53aWR0aCwgY2FuLmhlaWdodCk7XHJcbiAgICAvLyDvv73vv73Ioe+/ve+/ve+/vVxyXG4gICAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FuLndpZHRoLCBjYW4uaGVpZ2h0KTtcclxufVxyXG52YXIgUmF5TG9nbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSYXlMb2dvLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmF5TG9nbyhvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5vSW1nID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5pbWFnZURhdGEgPSBbXTtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ2FuID0gbnVsbDtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ3R4ID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5zdGFydFggPSAwO1xyXG4gICAgICAgIF90aGlzLnN0YXJ0WSA9IDA7XHJcbiAgICAgICAgX3RoaXMucmF5cyA9IFtdO1xyXG4gICAgICAgIF90aGlzLnRpbWVyID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5vSW1nID0gb3B0aW9ucy5vSW1nIHx8IG51bGw7XHJcbiAgICAgICAgX3RoaXMuaW1hZ2VEYXRhID0gX2dldEltYWdlRGF0YSh7IG9JbWc6IF90aGlzLm9JbWcsIHdpZHRoOiAzNTAsIH0pO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vWNhbnZhc1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDdHggPSBfdGhpcy52aXJ0dWFsQ2FuLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ2FuLndpZHRoID0gX3RoaXMuaW1hZ2VEYXRhLndpZHRoO1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDYW4uaGVpZ2h0ID0gX3RoaXMuaW1hZ2VEYXRhLmhlaWdodDtcclxuICAgICAgICAvLyDvv73vv73vv73vv73NvMas17zvv73vv73vv73Fte+/vc6777+977+9XHJcbiAgICAgICAgX3RoaXMuc3RhcnRYID0gKF90aGlzLmNhbi53aWR0aCAtIF90aGlzLmltYWdlRGF0YS53aWR0aCkgLyAyO1xyXG4gICAgICAgIF90aGlzLnN0YXJ0WSA9IChfdGhpcy5jYW4uaGVpZ2h0IC0gX3RoaXMuaW1hZ2VEYXRhLmhlaWdodCkgLyAyO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vd+1xL3vv73vv73vv73Jq1xyXG4gICAgICAgIHZhciByYXlDb2xvcjEgPSBcIiNhYmNkZWZcIjtcclxuICAgICAgICB2YXIgcmF5Q29sb3IyID0gXCIjMTI3OGRlXCI7XHJcbiAgICAgICAgX3RoaXMuZ3JhZGllbnQgPSBfdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoX3RoaXMuY2FuLndpZHRoIC8gMiwgX3RoaXMuY2FuLmhlaWdodCAvIDIsIDAsIF90aGlzLmNhbi53aWR0aCAvIDIsIF90aGlzLmNhbi5oZWlnaHQgLyAyLCBfdGhpcy5pbWFnZURhdGEud2lkdGgpO1xyXG4gICAgICAgIF90aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCByYXlDb2xvcjEpO1xyXG4gICAgICAgIF90aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCByYXlDb2xvcjIpO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIF90aGlzLmNyZWF0ZVJheXMoKTtcclxuICAgICAgICBfdGhpcy5zaG93SGVpZ2h0ID0gX3RoaXMuc3RhcnRZO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJheUxvZ28ucHJvdG90eXBlLmNyZWF0ZVJheXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IGkgLyA0OyAvLyDDvzTvv73vv73Wte+/ve+/ve+/ve+/ve+/ve+/vdK777+977+977+977+977+977+9XHJcbiAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgM107XHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ID49IDIwMCkgeyAvLyDNuO+/ve+/ve+/ve+/ve+/vdC277+9XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IG51bSAlIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgdGhpcy5zdGFydFg7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IH5+KG51bSAvIHRoaXMuaW1hZ2VEYXRhLndpZHRoKSArIHRoaXMuc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgaWYgKHggJSAyICYmIHkgJSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXlzLnB1c2gobmV3IFJheV8xLlJheSh4LCB5LCB0aGlzLmltYWdlRGF0YS53aWR0aCwgdGhpcy5pbWFnZURhdGEuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmF5TG9nby5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0hlaWdodCArPSA2O1xyXG4gICAgfTtcclxuICAgIFJheUxvZ28ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuID0gMDtcclxuICAgICAgICB0aGlzLnNob3dIZWlnaHQgPSBNYXRoLm1pbih0aGlzLnNob3dIZWlnaHQsIHRoaXMuaW1hZ2VEYXRhLmhlaWdodCArIHRoaXMuc3RhcnRZKTtcclxuICAgICAgICAvLyDvv73vv73vv71cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzBmMGYwZic7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW4ud2lkdGgsIHRoaXMuY2FuLmhlaWdodCk7XHJcbiAgICAgICAgLy8g77+977+9zbxcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy52aXJ0dWFsQ2FuLCAwLCAwLCB0aGlzLnNob3dIZWlnaHQsIHRoaXMudmlydHVhbENhbi5oZWlnaHQsIHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgdGhpcy5zaG93SGVpZ2h0LCB0aGlzLnZpcnR1YWxDYW4uaGVpZ2h0KTsgLy8g77+977+977+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5ncmFkaWVudDtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDAuMjsgLy8g77+977+977+977+977+937Xvv73vv73vv73Jq1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJheXNbaV0ueSA8IHRoaXMuc2hvd0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmF5c1tpXS5oID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJheXNbaV0ucmVuZGVyKHRoaXMuY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJheXNbaV0udXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICArK2xlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpcnR1YWxDdHguZmlsbFN0eWxlID0gJyMxMjc4ZGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlydHVhbEN0eC5maWxsUmVjdCh0aGlzLnJheXNbaV0ueCAtIHRoaXMuc3RhcnRYLCB0aGlzLnJheXNbaV0ueSAtIHRoaXMuc3RhcnRZLCAxLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgcmV0dXJuIGxlbiA8IHRoaXMucmF5cy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJheUxvZ287XHJcbn0oU2NlbmVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuUmF5TG9nbyA9IFJheUxvZ287XHJcbnZhciBMYW50ZXJuXzEgPSByZXF1aXJlKFwiLi4vRWxlbWVudC9MYW50ZXJuXCIpO1xyXG52YXIgX3JhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cclxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG52YXIgTmV3WWVhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhOZXdZZWFyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTmV3WWVhcihvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kSW1nID0gb3B0aW9ucy5iYWNrZ3JvdW5kSW1nO1xyXG4gICAgICAgIF90aGlzLmxhbnRlcm5JbWcgPSBvcHRpb25zLmxhbnRlcm5JbWc7XHJcbiAgICAgICAgX3RoaXMubnVtID0gb3B0aW9ucy5udW0gfHwgNjA7XHJcbiAgICAgICAgX3RoaXMubGFudGVybnMgPSBbXTtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBfdGhpcy5jcmVhdGVMYW50ZXJucygpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgTmV3WWVhci5wcm90b3R5cGUuY3JlYXRlTGFudGVybnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jYW4ud2lkdGggLyB0aGlzLm51bSAqIGkgKyBfcmFuZG9tKC01MCwgNTApO1xyXG4gICAgICAgICAgICB2YXIgeSA9IF9yYW5kb20oLTEwLCAxMCk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbGFudGVybjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9JbWc6IHRoaXMubGFudGVybkltZyxcclxuICAgICAgICAgICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogX3JhbmRvbSgtMTAsIDEwKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZVNwZWVkOiBfcmFuZG9tKDAuMDUsIDAuMSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmliYm9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBfcmFuZG9tKDEwMCwgMTUwKSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNkZmRjMTUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMS41LFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEFscGhhOiAwLjgsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMubGFudGVybnMucHVzaChuZXcgTGFudGVybl8xLkxhbnRlcm4ob3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOZXdZZWFyLnByb3RvdHlwZS5zZXRCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWcsIDAsIDAsIHRoaXMuYmFja2dyb3VuZEltZy5uYXR1cmFsV2lkdGgsIHRoaXMuYmFja2dyb3VuZEltZy5uYXR1cmFsSGVpZ2h0LCAwLCAwLCB0aGlzLmNhbi53aWR0aCwgdGhpcy5jYW4uaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBOZXdZZWFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g77+977+977+977+9XHJcbiAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgLy8gw7/vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5sYW50ZXJucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJlbmRlcih0aGlzLmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyDvv73vv73KsdC077+977+9XHJcbiAgICB9O1xyXG4gICAgTmV3WWVhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxhbnRlcm5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIM28xqzvv73ktq9cclxuICAgICAgICAgICAgaWYgKHRoaXMubGFudGVybnNbaV0ubGFudGVybi5hbmdsZSA8PSAtMTUgfHwgdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmFuZ2xlID49IDE1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGVTcGVlZCA9IC10aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGVTcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGUgKz0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmFuZ2xlU3BlZWQ7XHJcbiAgICAgICAgICAgIC8vIO+/vdC077+977+95LavXHJcbiAgICAgICAgICAgIHRoaXMubGFudGVybnNbaV0uYmV0YSsrOyAvLyBNYXRoLnNpbu+/ve+/vdOm77+977+9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCByaWJib25zTGVuZ3RoID0gdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zLmxlbmd0aDsgaiA8IHJpYmJvbnNMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmhlaWdodCA/IHRoaXMubGFudGVybnNbal0ubGFudGVybi5oZWlnaHQgOiB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4ud2lkdGggKiB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4ub0ltZy5uYXR1cmFsSGVpZ2h0IC8gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLm9JbWcubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgLy8g77+9xLHvv73vv73vv73vv73Qte+/vVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLnN0YXJ0UG9pbnQueCA9IHRoaXMubGFudGVybnNbaV0ubGFudGVybi54ICsgTWF0aC5jb3MoTWF0aC5QSSAvIDE4MCAqICh0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGUgKyA5MCkpICogZGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC55ID0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLnkgKyBNYXRoLnNpbihNYXRoLlBJIC8gMTgwICogKHRoaXMubGFudGVybnNbaV0ubGFudGVybi5hbmdsZSArIDkwKSkgKiBkaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uY29udHJvbFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLmVuZFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54O1xyXG4gICAgICAgICAgICAgICAgLy8g77+92bjEse+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLmVuZFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54ICsgTWF0aC5zaW4odGhpcy5sYW50ZXJuc1tpXS5iZXRhICogdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLnNwZWVkKSAqIHRoaXMubGFudGVybnNbaV0ucmliYm9uc1tqXS5yYW5nZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTmV3WWVhcjtcclxufShTY2VuZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5OZXdZZWFyID0gTmV3WWVhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2NlbmUob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2FuID0gb3B0aW9ucy5jYW47XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbi5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FuUmVjdCA9IHRoaXMuY2FuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lXCIpKTtcclxudmFyIFRleHRfMSA9IHJlcXVpcmUoXCIuLi9FbGVtZW50L1RleHRcIik7XHJcbnZhciBUZXh0TG9hZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0TG9hZGluZywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHRMb2FkaW5nKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xyXG4gICAgICAgIHZhciBsb2FkaW5nVGV4dE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHg6IF90aGlzLmNhbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IF90aGlzLmNhbi5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhYmNkZWYnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMudGV4dCA9IG5ldyBUZXh0XzEuU29saWRUZXh0KGxvYWRpbmdUZXh0T3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVGV4dExvYWRpbmcucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAobG9hZGVkTnVtYmVyLCBhbGxOdW1iZXIpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICfotYTmupDliqDovb3kuK0uLi4nICsgJyAg77yIJyArIGxvYWRlZE51bWJlciArICcvJyArIGFsbE51bWJlciArICfvvIknO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjMGYwZjBmJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbi53aWR0aCwgdGhpcy5jYW4uaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0LnJlbmRlcih0aGlzLmN0eCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHRMb2FkaW5nO1xyXG59KFNjZW5lXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLlRleHRMb2FkaW5nID0gVGV4dExvYWRpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHwg5ZCN5Y2V5YiX6KGoXHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydHMuUkVTT1VSQ0VfQ09ORklHID0ge1xyXG4gICAgaW1hZ2U6IFtcclxuICAgICAgICB7IG5hbWU6ICd0aWVmYW4nLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3NjZW5lL2N1dC90aWVmYW4vbG9nby5wbmcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ25ld1llYXJCZycsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvc2NlbmUvbG90dGVyeS9uZXdfeWVhci9iZy5wbmcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ25hbWVfbGlzdF90aXRsZScsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvc2NlbmUvbG90dGVyeS9uZXdfeWVhci9uYW1lX2xpc3RfdGl0bGUucG5nJywgfSxcclxuICAgICAgICB7IG5hbWU6ICduYW1lX2xpc3RfYmcnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3NjZW5lL2xvdHRlcnkvbmV3X3llYXIvbmFtZV9saXN0X2JnLnBuZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAncHJpemVfbGV2ZWxfYmcnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3NjZW5lL2xvdHRlcnkvbmV3X3llYXIvcHJpemVfbGV2ZWxfYmcucG5nJywgfSxcclxuICAgICAgICB7IG5hbWU6ICduZXdZZWFyTGFudGVybicsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvc2NlbmUvbG90dGVyeS9uZXdfeWVhci9sYW50ZXJuXzEucG5nJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0cmVhc3VyZUJveCcsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvc2NlbmUvbG90dGVyeS9uZXdfeWVhci90cmVhc3VyZUJveC5wbmcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2Jvb20nLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3NjZW5lL2xvdHRlcnkvbmV3X3llYXIvYm9vbS5wbmcnLCB9LFxyXG4gICAgXSxcclxuICAgIGF1ZGlvOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnb3Blbi1zaG93JyxcclxuICAgICAgICAgICAgdXJsOiAnLi9yZXMvYXVkaW8vb3Blbi1zaG93Lm1wMycsXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxufTtcclxuLy8gKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gfCDov4flnLrlnLrmma/nmoTphY3nva5cclxuLy8gKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0cy5DVVRfU0NFTkVfQ09ORkdJID0ge1xyXG4gICAgLy8g5b2T5aSa5bCR56eS5YaF77yM5rKh5pyJ5Lu75L2V5pON5L2c77yM5bCx6L+U5Zue5Yiw6L+H5Zy65Zy65pmvXHJcbiAgICBhbGxvd092ZXJ0aW1lOiA2MDAgKiAxMDAwLFxyXG59O1xyXG4vLyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyB8IOaKveWlluWcuuaZr+eahOmFjee9rlxyXG4vLyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnRzLkxPVFRFUllfU0hPV19DT05GSUcgPSB7XHJcbiAgICAvLyDlpZblk4HnrYnnuqfliIbluIPvvIjms6jmhI/vvJrmiYDmnInmlbDlgLznu7zlkIjvvIzkuIDlrpropoHlkoxuYW1lTGlzdOWxnuaAp+eahOmVv+W6puS4gOagt++8iVxyXG4gICAgcHJpemVMZXZlbDogW1xyXG4gICAgICAgIFsxXSxcclxuICAgICAgICBbMl0sXHJcbiAgICAgICAgWzNdLFxyXG4gICAgICAgIFs1XSxcclxuICAgIF0sXHJcbiAgICAvLyDlj4LkuI7mir3lpZbnmoTkurrlkZjlkI3lrZfnu4TmiJDnmoTlkI3ljZVcclxuICAgIG5hbWVMaXN0OiBbXHJcbiAgICAgICAgJ+e9l+WPr+aIkCcsXHJcbiAgICAgICAgJ+i1teaYnycsXHJcbiAgICAgICAgJ+WQtOS/iicsXHJcbiAgICAgICAgJ+eOi+a1t+a2mycsXHJcbiAgICAgICAgJ+W8oOW8uicsXHJcbiAgICAgICAgJ+eOi+aAneiBqicsXHJcbiAgICAgICAgJ+mprOS6kScsXHJcbiAgICAgICAgJ+mprOWMluiFvicsXHJcbiAgICAgICAgJ+WImOW8uuS4nCcsXHJcbiAgICAgICAgJ+Wtmeato+S5iScsXHJcbiAgICAgICAgJ+mbt+WGmycsXHJcbiAgICAgICAgJ+WTiOWTiCcsXHJcbiAgICAgICAgJ+WYv+WYvycsXHJcbiAgICAgICAgJ+WYu+WYuycsXHJcbiAgICAgICAgJ+WRteWRtScsXHJcbiAgICAgICAgJ+Wkp+eOiycsXHJcbiAgICAgICAgJ+Wwj+eOiycsXHJcbiAgICAgICAgJ+iAgeW8oCcsXHJcbiAgICAgICAgJ+m7hOaZk+aYjicsXHJcbiAgICAgICAgJ+WImOS6puiPsicsXHJcbiAgICAgICAgJ+i1teiWhycsXHJcbiAgICBdLFxyXG4gICAgLy8g6Zeq54OB55qE5paH5a2XXHJcbiAgICBuYW1lQmxpbms6IHtcclxuICAgICAgICAvLyDmloflrZflpKflsI9cclxuICAgICAgICBmb250U2l6ZTogODAsXHJcbiAgICAgICAgLy8g5paH5a2X57KX57uGXHJcbiAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgIC8vIOaWh+Wtl+minOiJslxyXG4gICAgICAgIGNvbG9yOiAnI2ZmMCcsXHJcbiAgICB9LFxyXG4gICAgLy8g5a6d566xXHJcbiAgICB0cmVhc3VyZUJveDoge1xyXG4gICAgICAgIC8vIOWuneeuseWbvueJh+WuveW6plxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgLy8g5a6d566x5Zu+54mH6auY5bqm77yI5Y+v6YCJ77yJ77yM5Lyg5LqG5bCx5Lul5Lyg5Y+C6auY5bqm6K6h566X77yM5LiN5Lyg5Y+C5YiZ6Ieq5Yqo5qC55o2u5Zu+54mH5q+U5L6L57uT566XXHJcbiAgICAgICAgLy9oZWlnaHQ6IDEwMFxyXG4gICAgICAgIC8vIOWuneeuseenu+WKqOaJgOmcgOW4p+aVsO+8jOaVsOWAvOi2iuWwj++8jOmAn+W6pui2iuW/q1xyXG4gICAgICAgIGR1cmF0aW9uOiA2MCxcclxuICAgIH0sXHJcbiAgICAvLyDlt7Lnu4/mir3lpZblkI7vvIzlrZjmlL7lkI3np7DnmoTlnLDmlrlcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgICAvLyDku6VjYW52YXPljp/ngrnkuLrln7rnoYDvvIx46LaK5aSn77yM6LaK6Z2g5Y+zXHJcbiAgICAgICAgeDogMjAwLFxyXG4gICAgICAgIC8vIOS7pWNhbnZhc+WOn+eCueS4uuWfuuehgO+8jHnotorlpKfvvIzotorpnaDkuItcclxuICAgICAgICB5OiA2MDAsXHJcbiAgICAgICAgLy8g5a2X5L2T5aSn5bCPXHJcbiAgICAgICAgZm9udFNpemU6IDM0LFxyXG4gICAgICAgIC8vIOWtl+S9k+minOiJslxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZTQwMCcsXHJcbiAgICB9LFxyXG4gICAgLy8g5b2T5a6d566x54iG54K45ZCO77yM55Sf5oiQ55qE5ZCN5a2X5a2X5L2T55qE5bGe5oCnXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgLy8g5a2X5L2T6aKc6ImyXHJcbiAgICAgICAgY29sb3I6ICcjZmZlNDAwJyxcclxuICAgICAgICAvLyDlrZfkvZPlpKflsI9cclxuICAgICAgICBmb250U2l6ZTogMTIwLFxyXG4gICAgICAgIC8vIOWtl+S9k+eyl+e7hlxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgICAvLyDlrZfkvZPnp7vliqjmiYDpnIDluKfmlbDvvIzmlbDlgLzotorlsI/vvIzpgJ/luqbotorlv6tcclxuICAgICAgICBkdXJhdGlvbjogNjAsXHJcbiAgICB9LFxyXG4gICAgLy8g5aWW5Yqx562J57qn5a2X5L2T77yI5Y2z77ya56ysMeetieWllu+8jOesrDLnrYnlpZYuLi7vvIlcclxuICAgIGxldmVsVGV4dDoge1xyXG4gICAgICAgIC8vIOWtl+S9k+minOiJslxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZTQwMCcsXHJcbiAgICAgICAgLy8g5a2X5L2T5aSn5bCPXHJcbiAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgIC8vIOWtl+S9k+eyl+e7hlxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgIH0sXHJcbiAgICAvLyDojrflpZblkI3ljZVcclxuICAgIHdpbm5lckxpc3Q6IHtcclxuICAgICAgICB4OiAyMDAsXHJcbiAgICAgICAgeTogMjAwLFxyXG4gICAgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XHJcbnZhciBTY2VuZUNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL2FwcC9Mb3R0ZXJ5L1NjZW5lQ29udHJvbGxlci9TY2VuZUNvbnRyb2xsZXJcIik7XHJcbnZhciBUZXh0TG9hZGluZ18xID0gcmVxdWlyZShcIi4vYXBwL0xvdHRlcnkvU2VuY2UvVGV4dExvYWRpbmdcIik7XHJcbnZhciBSYXlMb2dvXzEgPSByZXF1aXJlKFwiLi9hcHAvTG90dGVyeS9TZW5jZS9SYXlMb2dvXCIpO1xyXG52YXIgVHJlYXN1cmVCb3hEb3duXzEgPSByZXF1aXJlKFwiLi9hcHAvTG90dGVyeS9Mb3R0ZXJ5L1RyZWFzdXJlQm94RG93blwiKTtcclxudmFyIGNvbmZpZyA9IGNvbmZpZ18xLlJFU09VUkNFX0NPTkZJRy5pbWFnZTtcclxudmFyIHNjZW5lQ29udHJvbGxlciA9IG5ldyBTY2VuZUNvbnRyb2xsZXJfMS5TY2VuZUNvbnRyb2xsZXIoe1xyXG4gICAgcmVzQ29uZmlnOiBjb25maWcsXHJcbiAgICBMb2FkU2NlbmU6IFRleHRMb2FkaW5nXzEuVGV4dExvYWRpbmcsXHJcbiAgICBDdXRTY2VuZTogUmF5TG9nb18xLlJheUxvZ28sXHJcbiAgICBMb3R0ZXJ5U2NlbmU6IFJheUxvZ29fMS5OZXdZZWFyLFxyXG4gICAgTG90dGVyeVNob3c6IFRyZWFzdXJlQm94RG93bl8xLlRyZWFzdXJlQm94RG93bixcclxuICAgIGFsbG93T3ZlcnRpbWU6IGNvbmZpZ18xLkNVVF9TQ0VORV9DT05GR0kuYWxsb3dPdmVydGltZSxcclxuICAgIGlzU2hvd1N0YXRzOiBmYWxzZSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=