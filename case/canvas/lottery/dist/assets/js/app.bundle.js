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
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 100;
        this.height = height || 100;
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
        this.x = options.x || 100;
        this.y = options.y || 100;
        this.color = options.color || '#ccc';
        this.opacity = options.opacity || 1;
        this.text = options.text || 'default';
        this.fontStyle = options.fontStyle || 'normal';
        this.fontVariant = options.fontVariant || 'normal';
        this.fontWeight = options.fontWeight || 900;
        this.fontSize = options.fontSize || 24;
        this.fontFamily = options.fontFamily || 'arial';
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
        ctx.beginPath();
        ctx.font = this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
        ctx.fillStyle = this.color; // ������ɫ
        ctx.globalAlpha = this.opacity;
        ctx.textAlign = "center"; // ����ˮƽ���뷽ʽ
        ctx.textBaseline = "middle"; // ���ô�ֱ���뷽ʽ
        ctx.fillText(this.text, this.x, this.y); // �������֣�������Ҫд���֣�x���꣬y���꣩
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
        ctx.beginPath();
        ctx.font = this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
        ctx.strokeStyle = this.color; // ������ɫ
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.textAlign = "center"; // ����ˮƽ���뷽ʽ
        ctx.textBaseline = "middle"; // ���ô�ֱ���뷽ʽ
        ctx.strokeText(this.text, this.x, this.y); // �������֣�������Ҫд���֣�x���꣬y���꣩
        ctx.closePath();
        ctx.restore();
    };
    return HollowText;
}(Text));
exports.HollowText = HollowText;


/***/ }),

/***/ "./src/assets/js/app/Lottery/Lottery/NameBlink.ts":
/*!********************************************************!*\
  !*** ./src/assets/js/app/Lottery/Lottery/NameBlink.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __importDefault(__webpack_require__(/*! ../Element/Point */ "./src/assets/js/app/Lottery/Element/Point.ts"));
var Text_1 = __webpack_require__(/*! ../Element/Text */ "./src/assets/js/app/Lottery/Element/Text.ts");
var MyImage_1 = __webpack_require__(/*! ../Element/MyImage */ "./src/assets/js/app/Lottery/Element/MyImage.ts");
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
})(animationStep || (animationStep = {}));
var NameBlink = /** @class */ (function () {
    function NameBlink(options) {
        // 宝箱
        this.treasureBox = {}; // 宝箱实例 // 这接口 怎么定义？？？
        this.treasureBoxInstance = null;
        // 宝箱属性
        this.treasureBoxSpeedY = 0;
        this.treasureBoxSpeedOpacity = 0;
        // 宝箱运动
        this.treasureBoxFrame = 0;
        this.treasureBoxDuration = 100;
        // 爆炸
        this.boom = {};
        this.boomStep = 0;
        this.textOnMove = false;
        // 文字移动
        this.textSpeedX = 0;
        this.textSpeedY = 0;
        this.textFontSizeSpeed = 0;
        this.textFrame = 0;
        this.textDuration = 100;
        this.historyPoint = [];
        this.histories = [];
        // 动画
        this.animationStep = animationStep.noAnimation;
        this.can = options.can;
        this.prizeLevel = options.prizeLevel || [[1], [1], [1]];
        this.nameList = options.nameList || ['kobe', 'james', 'carl'];
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
        // 爆炸
        this.boom.oImg = options.boom.oImg;
        // 出生文字
        this.textFontSize = options.textFontSize || 40;
        this.textColor = options.color || '#ff0';
        //
        this.historiesX = options.historiesX || 0;
        this.historiesY = options.historiesY || 0;
        this.historyFontSize = options.historyFontSize || 20;
        this.lastIndex = this.nameList.length - 1;
        // 检查用户名单和奖励等级长度
        if (!this._checkLengthBetweenPrizeLevelAndNameList()) {
            alert('传入的用户名单和奖励等级长度不一样');
        }
        // 创建历史文字的x， y
        this.createHistoryBornPoint();
        // 初始化宝箱
        this.createTreasureBox();
        // 初始化文字
        this.createText();
    }
    // 检查传入的名单 和 获奖等级是否一致
    NameBlink.prototype._checkLengthBetweenPrizeLevelAndNameList = function () {
        var nameListLength = this.nameList.length;
        var prizeLevelLength = 0;
        this.prizeLevel.forEach(function (item) {
            item.forEach(function (num) {
                prizeLevelLength += num;
            });
        });
        return nameListLength === prizeLevelLength;
    };
    // 创建histories对象的出生点
    NameBlink.prototype.createHistoryBornPoint = function () {
        var margin = 20; // 每行之间的间距
        for (var i = 0, rowLength = this.prizeLevel.length; i < rowLength; i++) {
            for (var j = 0, colLength = this.prizeLevel[i]; j < colLength; j++) {
                var x = this.historiesX + j * 150;
                var y = this.historiesY + i * (this.historyFontSize + margin);
                this.historyPoint.push(new Point_1.default(x, y));
            }
        }
    };
    // 移除事件
    NameBlink.prototype.bindEvent = function () {
        var _this = this;
        this.can.addEventListener('click', function () {
            if (!_this.animationStep && _this.nameList.length > 0) {
                _this.TreasureBoxMove();
                _this.animationStep = animationStep.treasureBox;
            }
        }.bind(_this));
    };
    // 移除事件
    NameBlink.prototype.removeEvent = function () {
        var _this = this;
        this.can.removeEventListener('click', _this.createText); // TODO BUG
    };
    // 实例化当前中奖人的名字
    NameBlink.prototype.createText = function () {
        var options = {
            x: this.can.width / 2,
            y: this.can.height / 2,
            fontSize: this.textFontSize,
            color: this.textColor,
        };
        this.textInstance = new Text_1.SolidText(options);
    };
    // 重置文字属性
    NameBlink.prototype.resetText = function () {
        this.textInstance.x = this.can.width / 2;
        this.textInstance.y = this.can.height / 2;
        this.textInstance.fontSize = this.textFontSize;
        this.textInstance.color = this.textColor;
    };
    // 文字运动
    NameBlink.prototype.moveTo = function () {
        var targetX = this.historyPoint[this.lastIndex]['x'];
        var targetY = this.historyPoint[this.lastIndex]['y'];
        var targetFontSize = this.historyFontSize;
        var distanceX = targetX - this.textInstance.x;
        var distanceY = targetY - this.textInstance.y;
        var distanceFontSize = targetFontSize - this.textInstance.fontSize;
        var textSpeedX = distanceX / this.textDuration;
        var textSpeedY = distanceY / this.textDuration;
        var textFontSizeSpeed = distanceFontSize / this.textDuration;
        this.textSpeedX = textSpeedX;
        this.textSpeedY = textSpeedY;
        this.textFontSizeSpeed = textFontSizeSpeed;
        this.lastIndex--;
        this.textFrame = 0;
        this.textOnMove = true;
    };
    // 实例化宝箱
    NameBlink.prototype.createTreasureBox = function () {
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
    NameBlink.prototype.resetTreasureBox = function () {
        var imgWidth = 200;
        this.treasureBoxInstance.x = (this.can.width - imgWidth) / 2;
        this.treasureBoxInstance.y = 0;
        this.treasureBoxInstance.width = imgWidth;
        this.treasureBoxInstance.height = imgWidth * this.treasureBox.oImg.height / this.treasureBox.oImg.width;
        this.treasureBoxInstance.opacity = 0.2;
    };
    // 图片运动
    NameBlink.prototype.TreasureBoxMove = function () {
        var targetY = (this.can.height - this.treasureBoxInstance.height) / 2;
        var targetOpacity = 1;
        var distanceY = targetY - this.treasureBoxInstance.y;
        var distanceOpacity = targetOpacity - this.treasureBoxInstance.opacity;
        var textSpeedY = distanceY / this.treasureBoxDuration;
        var speedOpacity = distanceOpacity / this.treasureBoxDuration;
        this.treasureBoxSpeedY = textSpeedY;
        this.treasureBoxSpeedOpacity = speedOpacity;
    };
    NameBlink.prototype.render = function (ctx) {
        if (this.animationStep === animationStep.treasureBox) {
            this.treasureBoxInstance.render(ctx);
        }
        else if (this.animationStep === animationStep.boom) {
            ctx.drawImage(this.boom.oImg, 185 * ~~(this.boomStep / 2), 0, 185, 159, this.can.width / 2 - 100, this.can.height / 2 - 100, 200, 200);
        }
        else if (this.animationStep === animationStep.text) {
            this.textInstance.render(ctx);
        }
    };
    NameBlink.prototype.update = function () {
        var _this = this;
        if (this.animationStep === animationStep.treasureBox) {
            this.treasureBoxFrame++;
            if (this.treasureBoxFrame > this.treasureBoxDuration) {
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
            if (this.textFrame > this.textDuration) {
                // 添加历史
                this.histories.push(new Text_1.SolidText({
                    x: this.textInstance.x,
                    y: this.textInstance.y,
                    color: this.textInstance.color,
                    fontSize: this.textInstance.fontSize,
                    text: this.textInstance.text,
                }));
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
        }
    };
    NameBlink.prototype.renderHistories = function (ctx) {
        this.histories.forEach(function (item) {
            item.render(ctx);
        });
    };
    return NameBlink;
}());
exports.NameBlink = NameBlink;


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
            _this.cutSceneInstance = new _this.CutScene({
                can: _this.can,
                oImg: resources.tiefan
            });
            // 初始化 抽奖方式
            _this.lotteryShowInstance = new _this.LotteryShow({
                can: _this.can,
                historiesX: 200,
                historiesY: 200,
                prizeLevel: config_1.PRIZE_LEVEL,
                nameList: config_1.NAME_LIST,
                treasureBox: {
                    oImg: resources.treasureBox,
                },
                boom: {
                    oImg: resources.boom,
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
    SceneController.prototype.bindEvent = function () {
        console.log('绑定点击事件');
        this.can.style.cursor = 'pointer';
        this.can.addEventListener('click', fn);
        var _this = this;
        function fn() {
            console.log('点击了点击事件');
            _this.can.style.cursor = 'pointer';
            _this.lastOperationTime = new Date();
            // 监听操作
            _this.checkOperation();
            _this.lotterySceneInstance = new _this.LotteryScene({
                can: _this.can,
                backgroundImg: _this.resources.newYearBg,
                lanternImg: _this.resources.newYearLantern,
            });
            // 绑定点击事件 - 生成抽奖的人名
            _this.lotteryShowInstance.bindEvent();
            document.getElementById('new-year').play();
            _this.timer = window.setInterval(function () {
                _this.frame++;
                // 测试开始
                _this.isShowStats && _this.stats.begin();
                // 抽奖的背景
                _this.lotterySceneInstance.render();
                _this.lotterySceneInstance.update();
                // 抽奖的展示
                _this.lotteryShowInstance.render(_this.ctx);
                _this.lotteryShowInstance.update();
                _this.lotteryShowInstance.renderHistories(_this.ctx);
                // 测试关闭
                _this.isShowStats && _this.stats.end();
            }, 1000 / 60);
            //  监听操作
            _this.can.addEventListener('click', _this.changeLastOperationTime.bind(_this));
            _this.can.addEventListener('mousemove', _this.changeLastOperationTime.bind(_this));
            _this.can.removeEventListener('click', fn); // 取消绑定
        }
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
                document.getElementById('a-ou').play();
                // 通知观察者
                _this.bindEvent();
                // 取消抽奖的点击事件
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
// | 奖品等级分布
// +----------------------------------------------------------------------
exports.PRIZE_LEVEL = [
    [1],
    [2],
    [3],
    [5],
];
// +----------------------------------------------------------------------
// | 名单列表
// +----------------------------------------------------------------------
exports.NAME_LIST = [
    '罗可成',
    '赵星',
    '吴俊',
    '王海涛',
    '张强',
    '隆尧',
    '张三',
    '李四',
    '王五',
    '孙正义',
    '刘德华',
];
// +----------------------------------------------------------------------
// | 名单列表
// +----------------------------------------------------------------------
exports.RESOURCE_CONFIG = {
    image: [
        { name: 'tiefan', url: './assets/res/images/scene/cut/tiefan/logo.png', },
        { name: 'newYearBg', url: './assets/res/images/scene/lottery/new_year/bg.jpg', },
        { name: 'newYearLantern', url: './assets/res/images/scene/lottery/new_year/lantern_1.png', },
        { name: 'treasureBox', url: './assets/res/images/scene/lottery/new_year/treasureBox.png', },
        { name: 'boom', url: './assets/res/images/scene/lottery/new_year/boom.png', },
        { name: 'test1', url: './assets/res/images/temp/a (1).jpg', },
        { name: 'test2', url: './assets/res/images/temp/a (2).jpg', },
        { name: 'test3', url: './assets/res/images/temp/a (3).jpg', },
        { name: 'test4', url: './assets/res/images/temp/a (4).jpg', },
        { name: 'test5', url: './assets/res/images/temp/a (5).jpg', },
        { name: 'test6', url: './assets/res/images/temp/a (6).jpg', },
        { name: 'test7', url: './assets/res/images/temp/a (7).jpg', },
        { name: 'test8', url: './assets/res/images/temp/a (8).jpg', },
        { name: 'test9', url: './assets/res/images/temp/a (9).jpg', },
        { name: 'test10', url: './assets/res/images/temp/a (10).jpg', },
        { name: 'test11', url: './assets/res/images/temp/a (11).jpg', },
        { name: 'test12', url: './assets/res/images/temp/a (12).jpg', },
        { name: 'test13', url: './assets/res/images/temp/a (13).jpg', },
        { name: 'test14', url: './assets/res/images/temp/a (14).jpg', },
        { name: 'test15', url: './assets/res/images/temp/a (15).jpg', },
        { name: 'test16', url: './assets/res/images/temp/a (16).jpg', },
        { name: 'test17', url: './assets/res/images/temp/a (17).jpg', },
        { name: 'test18', url: './assets/res/images/temp/a (18).jpg', },
        { name: 'test19', url: './assets/res/images/temp/a (19).jpg', },
    ],
    audio: [
        {
            name: 'open-show',
            url: './res/audio/open-show.mp3',
        }
    ],
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
var NameBlink_1 = __webpack_require__(/*! ./app/Lottery/Lottery/NameBlink */ "./src/assets/js/app/Lottery/Lottery/NameBlink.ts");
var config = config_1.RESOURCE_CONFIG.image;
var sceneController = new SceneController_1.SceneController({
    resConfig: config,
    LoadScene: TextLoading_1.TextLoading,
    CutScene: RayLogo_1.RayLogo,
    LotteryScene: RayLogo_1.NewYear,
    LotteryShow: NameBlink_1.NameBlink,
    allowOvertime: 300 * 1000,
    isShowStats: false,
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL1N0YXRzLWpzL2J1aWxkL3N0YXRzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvTGFudGVybi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvTXlJbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9FbGVtZW50L1JheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvUmliYm9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvRWxlbWVudC9UZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvTG90dGVyeS9OYW1lQmxpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9TY2VuZUNvbnRyb2xsZXIvU2NlbmVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvU2VuY2UvQ2FudmFzRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L1NlbmNlL1JheUxvZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9TZW5jZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L1NlbmNlL1RleHRMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3Nl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RCxlQUFlO0FBQzFFLDJEQUEyRCxlQUFlO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFD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QTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJqcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXNzZXRzL2pzL2luZGV4LnRzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6ZS5TdGF0cz10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgYz1mdW5jdGlvbigpe3ZhciBuPTAsbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIGwuYXBwZW5kQ2hpbGQoZS5kb20pLGV9ZnVuY3Rpb24gdChlKXtmb3IodmFyIHQ9MDt0PGwuY2hpbGRyZW4ubGVuZ3RoO3QrKylsLmNoaWxkcmVuW3RdLnN0eWxlLmRpc3BsYXk9dD09PWU/XCJibG9ja1wiOlwibm9uZVwiO249ZX1sLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMFwiLGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHQoKytuJWwuY2hpbGRyZW4ubGVuZ3RoKX0sITEpO3ZhciBpPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCksYT1pLG89MCxmPWUobmV3IGMuUGFuZWwoXCJGUFNcIixcIiMwZmZcIixcIiMwMDJcIikpLHI9ZShuZXcgYy5QYW5lbChcIk1TXCIsXCIjMGYwXCIsXCIjMDIwXCIpKTtpZihzZWxmLnBlcmZvcm1hbmNlJiZzZWxmLnBlcmZvcm1hbmNlLm1lbW9yeSl2YXIgZD1lKG5ldyBjLlBhbmVsKFwiTUJcIixcIiNmMDhcIixcIiMyMDFcIikpO3JldHVybiB0KDApLHtSRVZJU0lPTjoxNixkb206bCxhZGRQYW5lbDplLHNob3dQYW5lbDp0LGJlZ2luOmZ1bmN0aW9uKCl7aT0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpfSxlbmQ6ZnVuY3Rpb24oKXtvKys7dmFyIGU9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKTtpZihyLnVwZGF0ZShlLWksMjAwKSxhKzFlMzw9ZSYmKGYudXBkYXRlKDFlMypvLyhlLWEpLDEwMCksYT1lLG89MCxkKSl7dmFyIHQ9cGVyZm9ybWFuY2UubWVtb3J5O2QudXBkYXRlKHQudXNlZEpTSGVhcFNpemUvMTA0ODU3Nix0LmpzSGVhcFNpemVMaW1pdC8xMDQ4NTc2KX1yZXR1cm4gZX0sdXBkYXRlOmZ1bmN0aW9uKCl7aT10aGlzLmVuZCgpfSxkb21FbGVtZW50Omwsc2V0TW9kZTp0fX07cmV0dXJuIGMuUGFuZWw9ZnVuY3Rpb24obixsLGkpe3ZhciBhPTEvMCxvPTAsZj1NYXRoLnJvdW5kLHI9Zih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSksZD04MCpyLGU9NDgqcixjPTMqcixwPTIqcix1PTMqcixzPTE1KnIsbT03NCpyLGg9MzAqcix5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7eS53aWR0aD1kLHkuaGVpZ2h0PWUseS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6ODBweDtoZWlnaHQ6NDhweFwiO3ZhciB2PXkuZ2V0Q29udGV4dChcIjJkXCIpO3JldHVybiB2LmZvbnQ9XCJib2xkIFwiKzkqcitcInB4IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmXCIsdi50ZXh0QmFzZWxpbmU9XCJ0b3BcIix2LmZpbGxTdHlsZT1pLHYuZmlsbFJlY3QoMCwwLGQsZSksdi5maWxsU3R5bGU9bCx2LmZpbGxUZXh0KG4sYyxwKSx2LmZpbGxSZWN0KHUscyxtLGgpLHYuZmlsbFN0eWxlPWksdi5nbG9iYWxBbHBoYT0uOSx2LmZpbGxSZWN0KHUscyxtLGgpLHtkb206eSx1cGRhdGU6ZnVuY3Rpb24oZSx0KXthPU1hdGgubWluKGEsZSksbz1NYXRoLm1heChvLGUpLHYuZmlsbFN0eWxlPWksdi5nbG9iYWxBbHBoYT0xLHYuZmlsbFJlY3QoMCwwLGQscyksdi5maWxsU3R5bGU9bCx2LmZpbGxUZXh0KGYoZSkrXCIgXCIrbitcIiAoXCIrZihhKStcIi1cIitmKG8pK1wiKVwiLGMscCksdi5kcmF3SW1hZ2UoeSx1K3IscyxtLXIsaCx1LHMsbS1yLGgpLHYuZmlsbFJlY3QodSttLXIscyxyLGgpLHYuZmlsbFN0eWxlPWksdi5nbG9iYWxBbHBoYT0uOSx2LmZpbGxSZWN0KHUrbS1yLHMscixmKCgxLWUvdCkqaCkpfX19LGN9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQb2ludF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BvaW50XCIpKTtcclxudmFyIFJpYmJvbl8xID0gcmVxdWlyZShcIi4vUmliYm9uXCIpO1xyXG52YXIgX3JhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cclxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG52YXIgTGFudGVybiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExhbnRlcm4ob3B0aW9ucykge1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMubGFudGVybiA9IHt9OyAvLyA/77+977+916Lvv73vv73vv73vv73Su++/ve+/ve+/ve+/vdK777+977+90qrvv73vv73KvO+/ve+/vVxyXG4gICAgICAgIHRoaXMubGFudGVybi5vSW1nID0gb3B0aW9ucy5sYW50ZXJuLm9JbWc7XHJcbiAgICAgICAgdGhpcy5sYW50ZXJuLnggPSBvcHRpb25zLmxhbnRlcm4ueCB8fCAwO1xyXG4gICAgICAgIHRoaXMubGFudGVybi55ID0gb3B0aW9ucy5sYW50ZXJuLnkgfHwgMDtcclxuICAgICAgICB0aGlzLmxhbnRlcm4ud2lkdGggPSBvcHRpb25zLmxhbnRlcm4ud2lkdGggfHwgMTAwO1xyXG4gICAgICAgIC8vIHRoaXMubGFudGVybi5oZWlnaHQgPSBvcHRpb25zLmxhbnRlcm4uaGVpZ2h0IHx8IDEwMDsvLyDvv73vv73vv73cuO+/vcSs77+977+91rVcclxuICAgICAgICB0aGlzLmxhbnRlcm4uYW5nbGUgPSBvcHRpb25zLmxhbnRlcm4uYW5nbGUgfHwgMDtcclxuICAgICAgICB0aGlzLmxhbnRlcm4uYW5nbGVTcGVlZCA9IG9wdGlvbnMubGFudGVybi5hbmdsZVNwZWVkIHx8IDEwO1xyXG4gICAgICAgIC8vIO+/vdC077+9XHJcbiAgICAgICAgdGhpcy5yaWJib24gPSB7fTsgLy8gP++/ve+/vdei77+977+977+977+90rvvv73vv73vv73vv73Su++/ve+/vdKq77+977+9yrzvv73vv71cclxuICAgICAgICB0aGlzLnJpYmJvbi5udW0gPSBvcHRpb25zLnJpYmJvbi5udW0gfHwgMjtcclxuICAgICAgICB0aGlzLnJpYmJvbi5kaXN0YW5jZSA9IG9wdGlvbnMucmliYm9uLmRpc3RhbmNlIHx8IDIwMDtcclxuICAgICAgICB0aGlzLnJpYmJvbi5jb2xvciA9IG9wdGlvbnMucmliYm9uLmNvbG9yIHx8ICcjY2NjJztcclxuICAgICAgICB0aGlzLnJpYmJvbi5saW5lV2lkdGggPSBvcHRpb25zLnJpYmJvbi5saW5lV2lkdGggfHwgMTtcclxuICAgICAgICB0aGlzLnJpYmJvbi5nbG9iYWxBbHBoYSA9IG9wdGlvbnMucmliYm9uLmdsb2JhbEFscGhhIHx8IDE7XHJcbiAgICAgICAgdGhpcy5yaWJib24uYm9yblJhbmdlID0gb3B0aW9ucy5yaWJib24uYm9yblJhbmdlIHx8IDEwO1xyXG4gICAgICAgIHRoaXMucmliYm9uLnNwZWVkID0gb3B0aW9ucy5yaWJib24uc3BlZWQgfHwgMTA7XHJcbiAgICAgICAgdGhpcy5yaWJib24ucmFuZ2UgPSBvcHRpb25zLnJpYmJvbi5yYW5nZSB8fCAxMDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuYmV0YSA9IDA7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLnJpYmJvbnMgPSBbXTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuaW5pdFJpYmJvbigpO1xyXG4gICAgfVxyXG4gICAgLy8g77+977+9yrzvv73vv73vv73QtO+/vVxyXG4gICAgTGFudGVybi5wcm90b3R5cGUuaW5pdFJpYmJvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmliYm9uLm51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IHRoaXMubGFudGVybi5oZWlnaHQgPyB0aGlzLmxhbnRlcm4uaGVpZ2h0IDogdGhpcy5sYW50ZXJuLndpZHRoICogdGhpcy5sYW50ZXJuLm9JbWcubmF0dXJhbEhlaWdodCAvIHRoaXMubGFudGVybi5vSW1nLm5hdHVyYWxXaWR0aDtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0WCA9IHRoaXMubGFudGVybi54ICsgTWF0aC5jb3MoTWF0aC5QSSAvIDE4MCAqICh0aGlzLmxhbnRlcm4uYW5nbGUgKyA5MCkpICogZGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFkgPSB0aGlzLmxhbnRlcm4ueSArIE1hdGguc2luKE1hdGguUEkgLyAxODAgKiAodGhpcy5sYW50ZXJuLmFuZ2xlICsgOTApKSAqIGRpc3RhbmNlO1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbFggPSBzdGFydFg7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sWSA9IHN0YXJ0WSArIHRoaXMucmliYm9uLmRpc3RhbmNlIC8gMztcclxuICAgICAgICAgICAgdmFyIGVuZFggPSBzdGFydFg7IC8vIO+/ve+/ve+/ve+/ve+/ve+/vVjvv73vv73vv73qo6jvv73ktq/vv73vv71cclxuICAgICAgICAgICAgdmFyIGVuZFkgPSBzdGFydFkgKyBfcmFuZG9tKHRoaXMucmliYm9uLmRpc3RhbmNlIC0gMjAsIHRoaXMucmliYm9uLmRpc3RhbmNlICsgMjApO1xyXG4gICAgICAgICAgICB2YXIgc3BlZWQgPSBfcmFuZG9tKDAuMDIsIDAuMDMpO1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBfcmFuZG9tKDIwLCAzMCk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRQb2ludDogbmV3IFBvaW50XzEuZGVmYXVsdChzdGFydFgsIHN0YXJ0WSksXHJcbiAgICAgICAgICAgICAgICBjb250cm9sUG9pbnQ6IG5ldyBQb2ludF8xLmRlZmF1bHQoY29udHJvbFgsIGNvbnRyb2xZKSxcclxuICAgICAgICAgICAgICAgIGVuZFBvaW50OiBuZXcgUG9pbnRfMS5kZWZhdWx0KGVuZFgsIGVuZFkpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucmliYm9uLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiB0aGlzLnJpYmJvbi5saW5lV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxBbHBoYTogdGhpcy5yaWJib24uZ2xvYmFsQWxwaGEsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogc3BlZWQsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucmliYm9ucy5wdXNoKG5ldyBSaWJib25fMS5SaWJib24ob3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDvv73vv73vv73vv73vv73vv71cclxuICAgIExhbnRlcm4ucHJvdG90eXBlLmRyYXdMYW50ZXJuID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBvSW1nID0gdGhpcy5sYW50ZXJuLm9JbWc7XHJcbiAgICAgICAgdmFyIGltZ1dpZHRoID0gdGhpcy5sYW50ZXJuLm9JbWcubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgIHZhciBpbWdIZWlnaHQgPSB0aGlzLmxhbnRlcm4ub0ltZy5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmxhbnRlcm4ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMubGFudGVybi55O1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMubGFudGVybi53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5sYW50ZXJuLmhlaWdodCA9IHdpZHRoICogaW1nSGVpZ2h0IC8gaW1nV2lkdGg7XHJcbiAgICAgICAgLy8gVE9ETyDvv73vv73vv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5sYW50ZXJuLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgLy8g77+977+977+977+90Kfvv73vv71cclxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDAsIDAuMiknO1xyXG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCAyMDAsIDIwMCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShvSW1nLCAwLCAwLCBpbWdXaWR0aCwgaW1nSGVpZ2h0LCAtd2lkdGggLyAyLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvLyDvv73vv73vv73vv73Qp++/ve+/vVxyXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2Uob0ltZywgMCwgMCwgaW1nV2lkdGgsIGltZ0hlaWdodCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICcjZjAwJztcclxuICAgICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgMjAsIDIwKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIGN0eC5yb3RhdGUoMCk7XHJcbiAgICB9O1xyXG4gICAgLy8g77+977+977+90LTvv71cclxuICAgIExhbnRlcm4ucHJvdG90eXBlLmRyYXdSaWJib24gPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5yaWJib25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMYW50ZXJuLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5kcmF3TGFudGVybihjdHgpO1xyXG4gICAgICAgIHRoaXMuZHJhd1JpYmJvbihjdHgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMYW50ZXJuO1xyXG59KCkpO1xyXG5leHBvcnRzLkxhbnRlcm4gPSBMYW50ZXJuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTXlJbWFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE15SW1hZ2Uob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub0ltZyA9IG9wdGlvbnMub0ltZztcclxuICAgICAgICB0aGlzLnggPSBvcHRpb25zLnggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnkgfHwgMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgMDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCAxO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG9wdGlvbnMub3BhY2l0eSB8fCAxO1xyXG4gICAgfVxyXG4gICAgTXlJbWFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMub0ltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNeUltYWdlO1xyXG59KCkpO1xyXG5leHBvcnRzLk15SW1hZ2UgPSBNeUltYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBvaW50O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQb2ludDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIF9yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcclxuICAgIGlmIChtaW4gPT09IHZvaWQgMCkgeyBtaW4gPSAwOyB9XHJcbiAgICBpZiAobWF4ID09PSB2b2lkIDApIHsgbWF4ID0gMTsgfVxyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufTtcclxuLyoqXHJcbiAqIO+/ve+/ve+/ve+/vXR5cGVzY3JpcHTvv73vv70gTWF0aC5zaWduINKq77+977+977+977+977+977+977+977+977+977+977+977+977+9xLrco++/ve+/ve+/ve+/ve+/vdC077+977+977+977+977+977+977+977+977+977+977+9XHJcbiAqL1xyXG52YXIgX3NpZ24gPSBmdW5jdGlvbiAobikge1xyXG4gICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuID09PSAtMCkge1xyXG4gICAgICAgIHJldHVybiAtMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIE5hTjtcclxuICAgIH1cclxufTtcclxudmFyIFJheSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJheSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgMTAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDEwMDtcclxuICAgICAgICAvLyDKue+/ve+/vda1XHJcbiAgICAgICAgdGhpcy5vID0gTWF0aC5QSSAvIDIgKiAoTWF0aC5yYW5kb20oKSAqIHRoaXMueCAtIHRoaXMuaGVpZ2h0IC8gMikgLyB0aGlzLmhlaWdodDtcclxuICAgICAgICBpZiAodGhpcy5vID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubyA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIE1hdGguUEkgLyAyOyAvLyDvv73WuO+/ve+/ve+/vSAtOTAgfiArOTBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zID0gMiAqIE1hdGguUEkgKiAoTWF0aC5yYW5kb20oKSAqIHRoaXMueSAtIHRoaXMud2lkdGggLyAyKSAvIHRoaXMud2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMucyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnMgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmggPSAwO1xyXG4gICAgICAgIC8vIO+/veS7r9a1XHJcbiAgICAgICAgdGhpcy5sID0gMC4wMiAqIF9zaWduKHRoaXMucyk7IC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vda177+977+9MSwgLTEsIDAsIC0wLCBOYU5cclxuICAgICAgICB0aGlzLmMgPSAwLjAyICogX3NpZ24odGhpcy5vKTsgLy8g77+977+977+977+977+977+977+977+91rXvv73vv70xLCAtMSwgMCwgLTAsIE5hTlxyXG4gICAgICAgIHRoaXMuYyArPSBfcmFuZG9tKC0wLjAwNSwgMC4wMDUpO1xyXG4gICAgICAgIHRoaXMuZCA9IF9yYW5kb20oMiwgNCk7IC8vIO+/vd+z77+9XHJcbiAgICB9XHJcbiAgICBSYXkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgc3RhcnRYID0gdGhpcy54ICsgTWF0aC5jb3ModGhpcy5zKSAqIHRoaXMuaCAvIDI7XHJcbiAgICAgICAgdmFyIHN0YXJ0WSA9IHRoaXMueSArIE1hdGguc2luKHRoaXMucykgKiB0aGlzLmggLyAyO1xyXG4gICAgICAgIHZhciBlbmRYID0gdGhpcy54ICsgTWF0aC5jb3ModGhpcy5vKSAqIHRoaXMuaDtcclxuICAgICAgICB2YXIgZW5kWSA9IHRoaXMueSArIE1hdGguc2luKHRoaXMubykgKiB0aGlzLmg7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFkpO1xyXG4gICAgfTtcclxuICAgIFJheS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubyArPSB0aGlzLmMgKiAyOyAvLyDvv73vv73vv73vv70yIO+/ve+/vc6q77+977+9IO+/ve+/vcqn77+977+977+9XHJcbiAgICAgICAgdGhpcy5zICs9IHRoaXMubCAqIDI7IC8vIO+/ve+/ve+/ve+/vTIg77+977+9zqrvv73vv70g77+977+9yqfvv73vv73vv71cclxuICAgICAgICB0aGlzLmggKz0gTWF0aC5jb3ModGhpcy5vKSAqIHRoaXMuZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmF5O1xyXG59KCkpO1xyXG5leHBvcnRzLlJheSA9IFJheTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFJpYmJvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJpYmJvbihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvaW50ID0gb3B0aW9ucy5zdGFydFBvaW50O1xyXG4gICAgICAgIHRoaXMuY29udHJvbFBvaW50ID0gb3B0aW9ucy5jb250cm9sUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5lbmRQb2ludCA9IG9wdGlvbnMuZW5kUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJyNjY2MnO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGggfHwgMTQ7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxBbHBoYSA9IG9wdGlvbnMuZ2xvYmFsQWxwaGEgfHwgMC44O1xyXG4gICAgICAgIC8vIO+/ve+/vcys77+977+977+977+9XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQgfHwgMTA7IC8vIO+/ve+/ve+/ve+/vdKh77+92rXvv73vv73Ztu+/vVxyXG4gICAgICAgIHRoaXMucmFuZ2UgPSBvcHRpb25zLnJhbmdlIHx8IDQwOyAvLyDvv73vv73vv73vv73Soe+/vdq1xLfvv73Op1xyXG4gICAgfVxyXG4gICAgUmliYm9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmdsb2JhbEFscGhhO1xyXG4gICAgICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgICAgICBjdHgubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgICAgIC8vY3R4LmJlZ2luUGF0aCgpOy8vID/vv73vv73Xou+/veKjuu+/ve+/ve+/ve+3tO+/ve+/ve+/ve+/ve+/vdy477+9Y2xvc2VQYXRoKCnvv73vv73vv73vv73Iu++/ve+/vdW677+9XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnN0YXJ0UG9pbnQueCwgdGhpcy5zdGFydFBvaW50LnkpO1xyXG4gICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHRoaXMuY29udHJvbFBvaW50LngsIHRoaXMuY29udHJvbFBvaW50LnksIHRoaXMuZW5kUG9pbnQueCwgdGhpcy5lbmRQb2ludC55KTtcclxuICAgICAgICAvL2N0eC5jbG9zZVBhdGgoKTsvLyA/77+977+916Lvv73io7rvv73vv73vv73vt7Tvv73vv73vv73vv73vv73cuO+/vWNsb3NlUGF0aCgp77+977+977+977+9yLvvv73vv73Vuu+/vVxyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSaWJib247XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmliYm9uID0gUmliYm9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZXh0KG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnggPSBvcHRpb25zLnggfHwgMTAwO1xyXG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueSB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJyNjY2MnO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG9wdGlvbnMub3BhY2l0eSB8fCAxO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dCB8fCAnZGVmYXVsdCc7XHJcbiAgICAgICAgdGhpcy5mb250U3R5bGUgPSBvcHRpb25zLmZvbnRTdHlsZSB8fCAnbm9ybWFsJztcclxuICAgICAgICB0aGlzLmZvbnRWYXJpYW50ID0gb3B0aW9ucy5mb250VmFyaWFudCB8fCAnbm9ybWFsJztcclxuICAgICAgICB0aGlzLmZvbnRXZWlnaHQgPSBvcHRpb25zLmZvbnRXZWlnaHQgfHwgOTAwO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplIHx8IDI0O1xyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSA9IG9wdGlvbnMuZm9udEZhbWlseSB8fCAnYXJpYWwnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRleHQ7XHJcbn0oKSk7XHJcbnZhciBTb2xpZFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU29saWRUZXh0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU29saWRUZXh0KG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNvbGlkVGV4dC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250U3R5bGUgKyBcIiBcIiArIHRoaXMuZm9udFZhcmlhbnQgKyBcIiBcIiArIHRoaXMuZm9udFdlaWdodCArIFwiIFwiICsgdGhpcy5mb250U2l6ZSArIFwicHggXCIgKyB0aGlzLmZvbnRGYW1pbHk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7IC8vIO+/ve+/ve+/ve+/ve+/ve+/vcmrXHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyAvLyDvv73vv73vv73vv73Lrsa977+977+977+967e9yr1cclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjsgLy8g77+977+977+9w7Tvv73Wse+/ve+/ve+/veu3vcq9XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy54LCB0aGlzLnkpOyAvLyDvv73vv73vv73vv73vv73vv73vv73Wo++/ve+/ve+/ve+/ve+/ve+/ve+/vdKq0LTvv73vv73vv73Wo++/vXjvv73vv73vv73qo6x577+977+977+96qOpXHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNvbGlkVGV4dDtcclxufShUZXh0KSk7XHJcbmV4cG9ydHMuU29saWRUZXh0ID0gU29saWRUZXh0O1xyXG52YXIgSG9sbG93VGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIb2xsb3dUZXh0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSG9sbG93VGV4dChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5saW5lV2lkdGggPSBvcHRpb25zLmxpbmVXaWR0aCB8fCAxO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEhvbGxvd1RleHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguZm9udCA9IHRoaXMuZm9udFN0eWxlICsgXCIgXCIgKyB0aGlzLmZvbnRWYXJpYW50ICsgXCIgXCIgKyB0aGlzLmZvbnRXZWlnaHQgKyBcIiBcIiArIHRoaXMuZm9udFNpemUgKyBcInB4IFwiICsgdGhpcy5mb250RmFtaWx5O1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7IC8vIO+/ve+/ve+/ve+/ve+/ve+/vcmrXHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgLy8g77+977+977+977+9y67Gve+/ve+/ve+/veu3vcq9XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7IC8vIO+/ve+/ve+/vcO077+91rHvv73vv73vv73rt73KvVxyXG4gICAgICAgIGN0eC5zdHJva2VUZXh0KHRoaXMudGV4dCwgdGhpcy54LCB0aGlzLnkpOyAvLyDvv73vv73vv73vv73vv73vv73vv73Wo++/ve+/ve+/ve+/ve+/ve+/ve+/vdKq0LTvv73vv73vv73Wo++/vXjvv73vv73vv73qo6x577+977+977+96qOpXHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEhvbGxvd1RleHQ7XHJcbn0oVGV4dCkpO1xyXG5leHBvcnRzLkhvbGxvd1RleHQgPSBIb2xsb3dUZXh0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUG9pbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vRWxlbWVudC9Qb2ludFwiKSk7XHJcbnZhciBUZXh0XzEgPSByZXF1aXJlKFwiLi4vRWxlbWVudC9UZXh0XCIpO1xyXG52YXIgTXlJbWFnZV8xID0gcmVxdWlyZShcIi4uL0VsZW1lbnQvTXlJbWFnZVwiKTtcclxudmFyIF9yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcclxuICAgIGlmIChtaW4gPT09IHZvaWQgMCkgeyBtaW4gPSAwOyB9XHJcbiAgICBpZiAobWF4ID09PSB2b2lkIDApIHsgbWF4ID0gMTsgfVxyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufTtcclxuLy8g5Yqo55S75q2l6aqkXHJcbnZhciBhbmltYXRpb25TdGVwO1xyXG4oZnVuY3Rpb24gKGFuaW1hdGlvblN0ZXApIHtcclxuICAgIGFuaW1hdGlvblN0ZXBbYW5pbWF0aW9uU3RlcFtcIm5vQW5pbWF0aW9uXCJdID0gMF0gPSBcIm5vQW5pbWF0aW9uXCI7XHJcbiAgICBhbmltYXRpb25TdGVwW2FuaW1hdGlvblN0ZXBbXCJ0cmVhc3VyZUJveFwiXSA9IDFdID0gXCJ0cmVhc3VyZUJveFwiO1xyXG4gICAgYW5pbWF0aW9uU3RlcFthbmltYXRpb25TdGVwW1wiYm9vbVwiXSA9IDJdID0gXCJib29tXCI7XHJcbiAgICBhbmltYXRpb25TdGVwW2FuaW1hdGlvblN0ZXBbXCJ0ZXh0XCJdID0gM10gPSBcInRleHRcIjtcclxufSkoYW5pbWF0aW9uU3RlcCB8fCAoYW5pbWF0aW9uU3RlcCA9IHt9KSk7XHJcbnZhciBOYW1lQmxpbmsgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOYW1lQmxpbmsob3B0aW9ucykge1xyXG4gICAgICAgIC8vIOWuneeusVxyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3ggPSB7fTsgLy8g5a6d566x5a6e5L6LIC8vIOi/meaOpeWPoyDmgI7kuYjlrprkuYnvvJ/vvJ/vvJ9cclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIC8vIOWuneeuseWxnuaAp1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZFkgPSAwO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZE9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vIOWuneeusei/kOWKqFxyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveER1cmF0aW9uID0gMTAwO1xyXG4gICAgICAgIC8vIOeIhueCuFxyXG4gICAgICAgIHRoaXMuYm9vbSA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm9vbVN0ZXAgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dE9uTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOaWh+Wtl+enu+WKqFxyXG4gICAgICAgIHRoaXMudGV4dFNwZWVkWCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0U3BlZWRZID0gMDtcclxuICAgICAgICB0aGlzLnRleHRGb250U2l6ZVNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLnRleHRGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0RHVyYXRpb24gPSAxMDA7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5UG9pbnQgPSBbXTtcclxuICAgICAgICB0aGlzLmhpc3RvcmllcyA9IFtdO1xyXG4gICAgICAgIC8vIOWKqOeUu1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAubm9BbmltYXRpb247XHJcbiAgICAgICAgdGhpcy5jYW4gPSBvcHRpb25zLmNhbjtcclxuICAgICAgICB0aGlzLnByaXplTGV2ZWwgPSBvcHRpb25zLnByaXplTGV2ZWwgfHwgW1sxXSwgWzFdLCBbMV1dO1xyXG4gICAgICAgIHRoaXMubmFtZUxpc3QgPSBvcHRpb25zLm5hbWVMaXN0IHx8IFsna29iZScsICdqYW1lcycsICdjYXJsJ107XHJcbiAgICAgICAgLy8g5a6d566xXHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC5vSW1nID0gb3B0aW9ucy50cmVhc3VyZUJveC5vSW1nO1xyXG4gICAgICAgIHZhciB0cmVhc3VyZUJveEltYWdlSW5mbyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMudHJlYXN1cmVCb3gub0ltZy5uYXR1cmFsV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy50cmVhc3VyZUJveC5vSW1nLm5hdHVyYWxIZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94LndpZHRoID0gb3B0aW9ucy50cmVhc3VyZUJveC53aWR0aCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC5oZWlnaHQgPSBvcHRpb25zLnRyZWFzdXJlQm94LmhlaWdodCB8fCB0aGlzLnRyZWFzdXJlQm94LndpZHRoICogdHJlYXN1cmVCb3hJbWFnZUluZm8uaGVpZ2h0IC8gdHJlYXN1cmVCb3hJbWFnZUluZm8ud2lkdGg7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC54ID0gb3B0aW9ucy50cmVhc3VyZUJveC54IHx8ICh0aGlzLmNhbi53aWR0aCAtIHRoaXMudHJlYXN1cmVCb3gud2lkdGgpIC8gMjtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94LnkgPSBvcHRpb25zLnRyZWFzdXJlQm94LnkgfHwgKHRoaXMuY2FuLmhlaWdodCAtIHRoaXMudHJlYXN1cmVCb3guaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC5vcGFjaXR5ID0gb3B0aW9ucy50cmVhc3VyZUJveC5vcGFjaXR5IHx8IDE7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC5zY2FsZSA9IG9wdGlvbnMudHJlYXN1cmVCb3guc2NhbGUgfHwgMTtcclxuICAgICAgICAvLyDniIbngrhcclxuICAgICAgICB0aGlzLmJvb20ub0ltZyA9IG9wdGlvbnMuYm9vbS5vSW1nO1xyXG4gICAgICAgIC8vIOWHuueUn+aWh+Wtl1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnRTaXplID0gb3B0aW9ucy50ZXh0Rm9udFNpemUgfHwgNDA7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBvcHRpb25zLmNvbG9yIHx8ICcjZmYwJztcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuaGlzdG9yaWVzWCA9IG9wdGlvbnMuaGlzdG9yaWVzWCB8fCAwO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yaWVzWSA9IG9wdGlvbnMuaGlzdG9yaWVzWSB8fCAwO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeUZvbnRTaXplID0gb3B0aW9ucy5oaXN0b3J5Rm9udFNpemUgfHwgMjA7XHJcbiAgICAgICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLm5hbWVMaXN0Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgLy8g5qOA5p+l55So5oi35ZCN5Y2V5ZKM5aWW5Yqx562J57qn6ZW/5bqmXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja0xlbmd0aEJldHdlZW5Qcml6ZUxldmVsQW5kTmFtZUxpc3QoKSkge1xyXG4gICAgICAgICAgICBhbGVydCgn5Lyg5YWl55qE55So5oi35ZCN5Y2V5ZKM5aWW5Yqx562J57qn6ZW/5bqm5LiN5LiA5qC3Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWIm+W7uuWOhuWPsuaWh+Wtl+eahHjvvIwgeVxyXG4gICAgICAgIHRoaXMuY3JlYXRlSGlzdG9yeUJvcm5Qb2ludCgpO1xyXG4gICAgICAgIC8vIOWIneWni+WMluWuneeusVxyXG4gICAgICAgIHRoaXMuY3JlYXRlVHJlYXN1cmVCb3goKTtcclxuICAgICAgICAvLyDliJ3lp4vljJbmloflrZdcclxuICAgICAgICB0aGlzLmNyZWF0ZVRleHQoKTtcclxuICAgIH1cclxuICAgIC8vIOajgOafpeS8oOWFpeeahOWQjeWNlSDlkowg6I635aWW562J57qn5piv5ZCm5LiA6Ie0XHJcbiAgICBOYW1lQmxpbmsucHJvdG90eXBlLl9jaGVja0xlbmd0aEJldHdlZW5Qcml6ZUxldmVsQW5kTmFtZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5hbWVMaXN0TGVuZ3RoID0gdGhpcy5uYW1lTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHByaXplTGV2ZWxMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMucHJpemVMZXZlbC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uZm9yRWFjaChmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgICAgICAgICBwcml6ZUxldmVsTGVuZ3RoICs9IG51bTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVMaXN0TGVuZ3RoID09PSBwcml6ZUxldmVsTGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIC8vIOWIm+W7umhpc3Rvcmllc+WvueixoeeahOWHuueUn+eCuVxyXG4gICAgTmFtZUJsaW5rLnByb3RvdHlwZS5jcmVhdGVIaXN0b3J5Qm9yblBvaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXJnaW4gPSAyMDsgLy8g5q+P6KGM5LmL6Ze055qE6Ze06LedXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHJvd0xlbmd0aCA9IHRoaXMucHJpemVMZXZlbC5sZW5ndGg7IGkgPCByb3dMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgY29sTGVuZ3RoID0gdGhpcy5wcml6ZUxldmVsW2ldOyBqIDwgY29sTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy5oaXN0b3JpZXNYICsgaiAqIDE1MDtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5oaXN0b3JpZXNZICsgaSAqICh0aGlzLmhpc3RvcnlGb250U2l6ZSArIG1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnlQb2ludC5wdXNoKG5ldyBQb2ludF8xLmRlZmF1bHQoeCwgeSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIOenu+mZpOS6i+S7tlxyXG4gICAgTmFtZUJsaW5rLnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5hbmltYXRpb25TdGVwICYmIF90aGlzLm5hbWVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLlRyZWFzdXJlQm94TW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAudHJlYXN1cmVCb3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQoX3RoaXMpKTtcclxuICAgIH07XHJcbiAgICAvLyDnp7vpmaTkuovku7ZcclxuICAgIE5hbWVCbGluay5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNhbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLmNyZWF0ZVRleHQpOyAvLyBUT0RPIEJVR1xyXG4gICAgfTtcclxuICAgIC8vIOWunuS+i+WMluW9k+WJjeS4reWlluS6uueahOWQjeWtl1xyXG4gICAgTmFtZUJsaW5rLnByb3RvdHlwZS5jcmVhdGVUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmNhbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuY2FuLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnRleHRGb250U2l6ZSxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMudGV4dENvbG9yLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UgPSBuZXcgVGV4dF8xLlNvbGlkVGV4dChvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICAvLyDph43nva7mloflrZflsZ7mgKdcclxuICAgIE5hbWVCbGluay5wcm90b3R5cGUucmVzZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGV4dEluc3RhbmNlLnggPSB0aGlzLmNhbi53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UueSA9IHRoaXMuY2FuLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UuZm9udFNpemUgPSB0aGlzLnRleHRGb250U2l6ZTtcclxuICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5jb2xvciA9IHRoaXMudGV4dENvbG9yO1xyXG4gICAgfTtcclxuICAgIC8vIOaWh+Wtl+i/kOWKqFxyXG4gICAgTmFtZUJsaW5rLnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFggPSB0aGlzLmhpc3RvcnlQb2ludFt0aGlzLmxhc3RJbmRleF1bJ3gnXTtcclxuICAgICAgICB2YXIgdGFyZ2V0WSA9IHRoaXMuaGlzdG9yeVBvaW50W3RoaXMubGFzdEluZGV4XVsneSddO1xyXG4gICAgICAgIHZhciB0YXJnZXRGb250U2l6ZSA9IHRoaXMuaGlzdG9yeUZvbnRTaXplO1xyXG4gICAgICAgIHZhciBkaXN0YW5jZVggPSB0YXJnZXRYIC0gdGhpcy50ZXh0SW5zdGFuY2UueDtcclxuICAgICAgICB2YXIgZGlzdGFuY2VZID0gdGFyZ2V0WSAtIHRoaXMudGV4dEluc3RhbmNlLnk7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlRm9udFNpemUgPSB0YXJnZXRGb250U2l6ZSAtIHRoaXMudGV4dEluc3RhbmNlLmZvbnRTaXplO1xyXG4gICAgICAgIHZhciB0ZXh0U3BlZWRYID0gZGlzdGFuY2VYIC8gdGhpcy50ZXh0RHVyYXRpb247XHJcbiAgICAgICAgdmFyIHRleHRTcGVlZFkgPSBkaXN0YW5jZVkgLyB0aGlzLnRleHREdXJhdGlvbjtcclxuICAgICAgICB2YXIgdGV4dEZvbnRTaXplU3BlZWQgPSBkaXN0YW5jZUZvbnRTaXplIC8gdGhpcy50ZXh0RHVyYXRpb247XHJcbiAgICAgICAgdGhpcy50ZXh0U3BlZWRYID0gdGV4dFNwZWVkWDtcclxuICAgICAgICB0aGlzLnRleHRTcGVlZFkgPSB0ZXh0U3BlZWRZO1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnRTaXplU3BlZWQgPSB0ZXh0Rm9udFNpemVTcGVlZDtcclxuICAgICAgICB0aGlzLmxhc3RJbmRleC0tO1xyXG4gICAgICAgIHRoaXMudGV4dEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnRleHRPbk1vdmUgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8vIOWunuS+i+WMluWuneeusVxyXG4gICAgTmFtZUJsaW5rLnByb3RvdHlwZS5jcmVhdGVUcmVhc3VyZUJveCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW1nV2lkdGggPSAyMDA7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG9JbWc6IHRoaXMudHJlYXN1cmVCb3gub0ltZyxcclxuICAgICAgICAgICAgeDogKHRoaXMuY2FuLndpZHRoIC0gaW1nV2lkdGgpIC8gMixcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IGltZ1dpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGltZ1dpZHRoICogdGhpcy50cmVhc3VyZUJveC5vSW1nLmhlaWdodCAvIHRoaXMudHJlYXN1cmVCb3gub0ltZy53aWR0aCxcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4yLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveEluc3RhbmNlID0gbmV3IE15SW1hZ2VfMS5NeUltYWdlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIC8vIOmHjee9ruWuneeuseWxnuaAp1xyXG4gICAgTmFtZUJsaW5rLnByb3RvdHlwZS5yZXNldFRyZWFzdXJlQm94ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWdXaWR0aCA9IDIwMDtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UueCA9ICh0aGlzLmNhbi53aWR0aCAtIGltZ1dpZHRoKSAvIDI7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLnkgPSAwO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS53aWR0aCA9IGltZ1dpZHRoO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS5oZWlnaHQgPSBpbWdXaWR0aCAqIHRoaXMudHJlYXN1cmVCb3gub0ltZy5oZWlnaHQgLyB0aGlzLnRyZWFzdXJlQm94Lm9JbWcud2lkdGg7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLm9wYWNpdHkgPSAwLjI7XHJcbiAgICB9O1xyXG4gICAgLy8g5Zu+54mH6L+Q5YqoXHJcbiAgICBOYW1lQmxpbmsucHJvdG90eXBlLlRyZWFzdXJlQm94TW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0WSA9ICh0aGlzLmNhbi5oZWlnaHQgLSB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdmFyIHRhcmdldE9wYWNpdHkgPSAxO1xyXG4gICAgICAgIHZhciBkaXN0YW5jZVkgPSB0YXJnZXRZIC0gdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLnk7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlT3BhY2l0eSA9IHRhcmdldE9wYWNpdHkgLSB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2Uub3BhY2l0eTtcclxuICAgICAgICB2YXIgdGV4dFNwZWVkWSA9IGRpc3RhbmNlWSAvIHRoaXMudHJlYXN1cmVCb3hEdXJhdGlvbjtcclxuICAgICAgICB2YXIgc3BlZWRPcGFjaXR5ID0gZGlzdGFuY2VPcGFjaXR5IC8gdGhpcy50cmVhc3VyZUJveER1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZFkgPSB0ZXh0U3BlZWRZO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZE9wYWNpdHkgPSBzcGVlZE9wYWNpdHk7XHJcbiAgICB9O1xyXG4gICAgTmFtZUJsaW5rLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcC50cmVhc3VyZUJveCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcC5ib29tKSB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5ib29tLm9JbWcsIDE4NSAqIH5+KHRoaXMuYm9vbVN0ZXAgLyAyKSwgMCwgMTg1LCAxNTksIHRoaXMuY2FuLndpZHRoIC8gMiAtIDEwMCwgdGhpcy5jYW4uaGVpZ2h0IC8gMiAtIDEwMCwgMjAwLCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXAudGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTmFtZUJsaW5rLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwLnRyZWFzdXJlQm94KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlYXN1cmVCb3hGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50cmVhc3VyZUJveEZyYW1lID4gdGhpcy50cmVhc3VyZUJveER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDph43nva7lm77niYflsZ7mgKdcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUcmVhc3VyZUJveCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVhc3VyZUJveEZyYW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAuYm9vbTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29tJykucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29tJykucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS55ICs9IHRoaXMudHJlYXN1cmVCb3hTcGVlZFk7XHJcbiAgICAgICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS5vcGFjaXR5ICs9IHRoaXMudHJlYXN1cmVCb3hTcGVlZE9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXAuYm9vbSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvb21TdGVwKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvb21TdGVwID4gNyAqIDIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOi/mOWOn1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib29tU3RlcCA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyDotYvlgLzmloflrZdcclxuICAgICAgICAgICAgICAgIHZhciByYW5kb21JbmRleCA9IH5+X3JhbmRvbSgwLCB0aGlzLm5hbWVMaXN0Lmxlbmd0aCk7IC8vIOazqOaEj++8mk1hdGgucmFuZG9tKCnnu5PmnpzmmK8wIH4gMe+8iOS4jeWMheWQq++8iVxyXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSB0aGlzLm5hbWVMaXN0LnNwbGljZShyYW5kb21JbmRleCwgMSlbMF07IC8vIOazqOaEj+i/meS4qjBcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEluc3RhbmNlLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgLy8g6L+b5YWl5LiL5LiA6Zi25q61XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSBhbmltYXRpb25TdGVwLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvLyAy56eS5ZCO6L+Q5YqoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubW92ZVRvKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwLnRleHQgJiYgdGhpcy50ZXh0T25Nb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZyYW1lKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRGcmFtZSA+IHRoaXMudGV4dER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmt7vliqDljoblj7JcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzLnB1c2gobmV3IFRleHRfMS5Tb2xpZFRleHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMudGV4dEluc3RhbmNlLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy50ZXh0SW5zdGFuY2UueSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0SW5zdGFuY2UuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHRoaXMudGV4dEluc3RhbmNlLmZvbnRTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dEluc3RhbmNlLnRleHQsXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRPbk1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAubm9BbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UueCArPSB0aGlzLnRleHRTcGVlZFg7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEluc3RhbmNlLnkgKz0gdGhpcy50ZXh0U3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5mb250U2l6ZSArPSB0aGlzLnRleHRGb250U2l6ZVNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOYW1lQmxpbmsucHJvdG90eXBlLnJlbmRlckhpc3RvcmllcyA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLmhpc3Rvcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5hbWVCbGluaztcclxufSgpKTtcclxuZXhwb3J0cy5OYW1lQmxpbmsgPSBOYW1lQmxpbms7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDYW52YXNGYWN0b3J5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1NlbmNlL0NhbnZhc0ZhY3RvcnlcIikpO1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29uZmlnXCIpO1xyXG52YXIgU3RhdHMgPSByZXF1aXJlKFwiU3RhdHMtanNcIik7XHJcbi8qKlxyXG4gKiDlubbkuI3mmK/miYDmnInorr7lpIfnmoTnu5jliLbml7bpl7Tpl7TpmpTmmK8xMDAwLzYwIG1zLCDku6Xlj4rkuIrpnaLlubbmnKjmnIljYW5jZWznm7jlhbPmlrnms5XvvIzmiYDku6XvvIzlsLHmnInkuIvpnaLov5nku73mm7TlhajpnaLnmoTlhbzlrrnmlrnms5XvvJpcclxuICovXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xyXG4gICAgdmFyIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXTtcclxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbKHZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJyldO1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgLy8gV2Via2l05Lit5q2k5Y+W5raI5pa55rOV55qE5ZCN5a2X5Y+Y5LqGXHJcbiAgICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG4gICAgfVxyXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcclxuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSgpKTtcclxudmFyIFNjZW5lQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjZW5lQ29udHJvbGxlcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dTdGF0cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgICAgIHZhciBjYW52YXNGYWN0b3J5ID0gbmV3IENhbnZhc0ZhY3RvcnlfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jYW4gPSBjYW52YXNGYWN0b3J5LmdldENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzRmFjdG9yeS5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5yZXNDb25maWcgPSBvcHRpb25zLnJlc0NvbmZpZztcclxuICAgICAgICB0aGlzLkxvYWRTY2VuZSA9IG9wdGlvbnMuTG9hZFNjZW5lO1xyXG4gICAgICAgIHRoaXMuQ3V0U2NlbmUgPSBvcHRpb25zLkN1dFNjZW5lO1xyXG4gICAgICAgIHRoaXMuTG90dGVyeVNjZW5lID0gb3B0aW9ucy5Mb3R0ZXJ5U2NlbmU7XHJcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5U2hvdyA9IG9wdGlvbnMuTG90dGVyeVNob3c7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hbGxvd092ZXJ0aW1lID0gb3B0aW9ucy5hbGxvd092ZXJ0aW1lIHx8IDYwICogMTAwMDtcclxuICAgICAgICB0aGlzLmxhc3RPcGVyYXRpb25UaW1lID0gbnVsbDtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsb2FkU2NlbmUgPSBuZXcgdGhpcy5Mb2FkU2NlbmUoe1xyXG4gICAgICAgICAgICBjYW46IHRoaXMuY2FuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZEFsbFJlc291cmNlKG9wdGlvbnMucmVzQ29uZmlnLCBmdW5jdGlvbiAobG9hZGVkTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIC8qKiDliqDovb3liqjnlLsgKiovXHJcbiAgICAgICAgICAgIGxvYWRTY2VuZS5zaG93KGxvYWRlZE51bWJlciwgb3B0aW9ucy5yZXNDb25maWcubGVuZ3RoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIC8vIOWunuS+i+WMllxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNTaG93U3RhdHMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7IC8vIFN0YXRzIDog5bin5qOA5p+lXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGF0cy5zaG93UGFuZWwoMSk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF90aGlzLnN0YXRzLmRvbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5YiG5Yir5Yid5aeL5YyWJ+i/h+WcuuWcuuaZrydcclxuICAgICAgICAgICAgX3RoaXMuY3V0U2NlbmVJbnN0YW5jZSA9IG5ldyBfdGhpcy5DdXRTY2VuZSh7XHJcbiAgICAgICAgICAgICAgICBjYW46IF90aGlzLmNhbixcclxuICAgICAgICAgICAgICAgIG9JbWc6IHJlc291cmNlcy50aWVmYW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOWIneWni+WMliDmir3lpZbmlrnlvI9cclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNob3dJbnN0YW5jZSA9IG5ldyBfdGhpcy5Mb3R0ZXJ5U2hvdyh7XHJcbiAgICAgICAgICAgICAgICBjYW46IF90aGlzLmNhbixcclxuICAgICAgICAgICAgICAgIGhpc3Rvcmllc1g6IDIwMCxcclxuICAgICAgICAgICAgICAgIGhpc3Rvcmllc1k6IDIwMCxcclxuICAgICAgICAgICAgICAgIHByaXplTGV2ZWw6IGNvbmZpZ18xLlBSSVpFX0xFVkVMLFxyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q6IGNvbmZpZ18xLk5BTUVfTElTVCxcclxuICAgICAgICAgICAgICAgIHRyZWFzdXJlQm94OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb0ltZzogcmVzb3VyY2VzLnRyZWFzdXJlQm94LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBvSW1nOiByZXNvdXJjZXMuYm9vbSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLXNob3cnKS5wbGF5KCk7IC8vIFRPRE9cclxuICAgICAgICAgICAgX3RoaXMudGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTaG93U3RhdHMgJiYgX3RoaXMuc3RhdHMuYmVnaW4oKTtcclxuICAgICAgICAgICAgICAgIHZhciBmbGFnID0gX3RoaXMuY3V0U2NlbmVJbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov4flnLrliqjnlLvnu5PmnZ8nLCAndGltZXI6JyArIF90aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDpgJrnn6Xop4Llr5/ogIVcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5iaW5kRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlhbPpl63lvZPliY1cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChfdGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXRTY2VuZUluc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTaG93U3RhdHMgJiYgX3RoaXMuc3RhdHMuZW5kKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDAgLyA2MCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBTY2VuZUNvbnRyb2xsZXIucHJvdG90eXBlLmxvYWRBbGxSZXNvdXJjZSA9IGZ1bmN0aW9uIChjb25maWcsIGxvYWRlZEZuLCBsb2FkZWRBbGxGbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGxvYWRlZE51bWJlciA9IDA7XHJcbiAgICAgICAgLy8g6YCQ5LiA5Yqg6L29XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbmZpZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlc1tjb25maWdbaV0ubmFtZV0gPSBuZXcgSW1hZ2UoKTsgLy8g5Yib5bu65LiA5Liq5ZCM5ZCN55qEa2V5XHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzW2NvbmZpZ1tpXS5uYW1lXS5zcmMgPSBjb25maWdbaV0udXJsOyAvLyDor7fmsYJcclxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbY29uZmlnW2ldLm5hbWVdLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICsrbG9hZGVkTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkRm4gJiYgbG9hZGVkRm4obG9hZGVkTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5bey57uP5YWo6YOo5Yqg6L295a6M5q+VXHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZGVkTnVtYmVyID09PSBjb25maWcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkQWxsRm4gJiYgbG9hZGVkQWxsRm4oX3RoaXMucmVzb3VyY2VzKTsgLy8gY2FsbGJhY2suY2FsbChfdGhpcyk7Ly8gP1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBTY2VuZUNvbnRyb2xsZXIucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn57uR5a6a54K55Ye75LqL5Lu2Jyk7XHJcbiAgICAgICAgdGhpcy5jYW4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm4pO1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gZm4oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfngrnlh7vkuobngrnlh7vkuovku7YnKTtcclxuICAgICAgICAgICAgX3RoaXMuY2FuLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgX3RoaXMubGFzdE9wZXJhdGlvblRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAvLyDnm5HlkKzmk43kvZxcclxuICAgICAgICAgICAgX3RoaXMuY2hlY2tPcGVyYXRpb24oKTtcclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNjZW5lSW5zdGFuY2UgPSBuZXcgX3RoaXMuTG90dGVyeVNjZW5lKHtcclxuICAgICAgICAgICAgICAgIGNhbjogX3RoaXMuY2FuLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltZzogX3RoaXMucmVzb3VyY2VzLm5ld1llYXJCZyxcclxuICAgICAgICAgICAgICAgIGxhbnRlcm5JbWc6IF90aGlzLnJlc291cmNlcy5uZXdZZWFyTGFudGVybixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOe7keWumueCueWHu+S6i+S7tiAtIOeUn+aIkOaKveWllueahOS6uuWQjVxyXG4gICAgICAgICAgICBfdGhpcy5sb3R0ZXJ5U2hvd0luc3RhbmNlLmJpbmRFdmVudCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXllYXInKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIF90aGlzLnRpbWVyID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmZyYW1lKys7XHJcbiAgICAgICAgICAgICAgICAvLyDmtYvor5XlvIDlp4tcclxuICAgICAgICAgICAgICAgIF90aGlzLmlzU2hvd1N0YXRzICYmIF90aGlzLnN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDmir3lpZbnmoTog4zmma9cclxuICAgICAgICAgICAgICAgIF90aGlzLmxvdHRlcnlTY2VuZUluc3RhbmNlLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubG90dGVyeVNjZW5lSW5zdGFuY2UudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDmir3lpZbnmoTlsZXnpLpcclxuICAgICAgICAgICAgICAgIF90aGlzLmxvdHRlcnlTaG93SW5zdGFuY2UucmVuZGVyKF90aGlzLmN0eCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb3R0ZXJ5U2hvd0luc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubG90dGVyeVNob3dJbnN0YW5jZS5yZW5kZXJIaXN0b3JpZXMoX3RoaXMuY3R4KTtcclxuICAgICAgICAgICAgICAgIC8vIOa1i+ivleWFs+mXrVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTaG93U3RhdHMgJiYgX3RoaXMuc3RhdHMuZW5kKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDAgLyA2MCk7XHJcbiAgICAgICAgICAgIC8vICDnm5HlkKzmk43kvZxcclxuICAgICAgICAgICAgX3RoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMuY2hhbmdlTGFzdE9wZXJhdGlvblRpbWUuYmluZChfdGhpcykpO1xyXG4gICAgICAgICAgICBfdGhpcy5jYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMuY2hhbmdlTGFzdE9wZXJhdGlvblRpbWUuYmluZChfdGhpcykpO1xyXG4gICAgICAgICAgICBfdGhpcy5jYW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbik7IC8vIOWPlua2iOe7keWumlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDlvZPlpITkuo7mir3lpZblnLrmma/nmoTml7blgJnvvIzml6Dku7vkvZXmk43kvZzotoXov4du56eS5ZCO77yM5bCx5Lya6Lez5Yiw6L+H5rih5Zy65pmvXHJcbiAgICBTY2VuZUNvbnRyb2xsZXIucHJvdG90eXBlLmNoZWNrT3BlcmF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNoZWNrT3BlcmF0aW9uVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbm93VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChTY2VuZUNvbnRyb2xsZXIuaXNPdmVydGltZShub3dUaW1lLCBfdGhpcy5sYXN0T3BlcmF0aW9uVGltZSwgX3RoaXMuYWxsb3dPdmVydGltZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChfdGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3V0U2NlbmVJbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXllYXInKS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Etb3UnKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDpgJrnn6Xop4Llr5/ogIVcclxuICAgICAgICAgICAgICAgIF90aGlzLmJpbmRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+W5raI5oq95aWW55qE54K55Ye75LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb3R0ZXJ5U2hvd0luc3RhbmNlLnJlbW92ZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDlhbPpl63mo4Dmn6VcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGNoZWNrT3BlcmF0aW9uVGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVDb250cm9sbGVyLmlzT3ZlcnRpbWUgPSBmdW5jdGlvbiAobm93VGltZSwgbGFzdFRpbWUsIGFsbG93T3ZlcnRpbWUpIHtcclxuICAgICAgICByZXR1cm4gbm93VGltZSAtIGxhc3RUaW1lID49IGFsbG93T3ZlcnRpbWU7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVDb250cm9sbGVyLnByb3RvdHlwZS5jaGFuZ2VMYXN0T3BlcmF0aW9uVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxhc3RPcGVyYXRpb25UaW1lID0gbmV3IERhdGUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2NlbmVDb250cm9sbGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLlNjZW5lQ29udHJvbGxlciA9IFNjZW5lQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIF93ID0gd2luZG93O1xyXG52YXIgX2IgPSBkb2N1bWVudC5ib2R5OyAvLyDvv73vv73vv73vv71odG1sIGRvbe+/vdC177+9Ym9kee+/vdq177+9IO+/ve+/vTxib2R5PlxyXG52YXIgX2QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8vIO+/ve+/ve+/ve+/vWh0bWwgZG9t77+90LXvv71yb290IO+/vdq177+9IO+/ve+/vTxodG1sPlxyXG4vLyBzY3JlZW4gaGVscGVyXHJcbnZhciBfc2NyZWVuSW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KDAsIF93LmlubmVyV2lkdGggfHwgX2QuY2xpZW50V2lkdGggfHwgX2IuY2xpZW50V2lkdGggfHwgMCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoMCwgX3cuaW5uZXJIZWlnaHQgfHwgX2QuY2xpZW50SGVpZ2h0IHx8IF9iLmNsaWVudEhlaWdodCB8fCAwKTtcclxuICAgIHZhciBzY3JvbGx4ID0gTWF0aC5tYXgoMCwgX3cucGFnZVhPZmZzZXQgfHwgX2Quc2Nyb2xsTGVmdCB8fCBfYi5zY3JvbGxMZWZ0IHx8IDApIC0gKF9kLmNsaWVudExlZnQgfHwgMCk7XHJcbiAgICB2YXIgc2Nyb2xseSA9IE1hdGgubWF4KDAsIF93LnBhZ2VZT2Zmc2V0IHx8IF9kLnNjcm9sbFRvcCB8fCBfYi5zY3JvbGxUb3AgfHwgMCkgLSAoX2QuY2xpZW50VG9wIHx8IDApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgcmF0aW86IHdpZHRoIC8gaGVpZ2h0LFxyXG4gICAgICAgIGNlbnRlclg6IHdpZHRoIC8gMixcclxuICAgICAgICBjZW50ZXJZOiBoZWlnaHQgLyAyLFxyXG4gICAgICAgIHNjcm9sbFg6IHNjcm9sbHgsXHJcbiAgICAgICAgc2Nyb2xsWTogc2Nyb2xseVxyXG4gICAgfTtcclxufTtcclxudmFyIENhbnZhc0ZhY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNGYWN0b3J5KGRvbSkge1xyXG4gICAgICAgIGlmIChkb20gPT09IHZvaWQgMCkgeyBkb20gPSBkb2N1bWVudC5ib2R5OyB9XHJcbiAgICAgICAgdGhpcy5fZG9tID0gbnVsbDsgLy8gVE9ETyDvv73vv73vv73vv73Tpu+/ve+/ve+/ve+/vcqyw7Tvv73vv73vv73No++/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZG9tID0gZG9tOyAvLyDvv73vv73WtVxyXG4gICAgICAgIHRoaXMuX2luaXQoKTsgLy8g77+977+9yrzvv73vv71cclxuICAgICAgICAvLyDvv73vv73vv71jYW52YXPvv73vv73vv73vv73vv73vv73vv73vv73vv73vv71kaXbvv73vv73vv73vv73vv73vv71ib2R577+977+977+977+9w7Tvv73vv73Squ+/ve+/vdak77+977+9Ym9kec2syrHvv73Ese+/vcS077+90KHvv73vv71cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChkb20gPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl93aW5kb3dSZXNpemUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g77+977+977+977+9Y2FudmFzXHJcbiAgICBDYW52YXNGYWN0b3J5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1wicG9zaXRpb25cIl0gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcIm1hcmdpblwiXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9jYW52YXMuc3R5bGVbXCJwYWRkaW5nXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcImJvcmRlclwiXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9jYW52YXMuc3R5bGVbXCJvdXRsaW5lXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcImxlZnRcIl0gPSBcIjBcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1widG9wXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHZhciBfZG9tSW5mbyA9IHRoaXMuX2dldERvbUluZm8oKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gX2RvbUluZm9bJ3dpZHRoJ107XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBfZG9tSW5mb1snaGVpZ2h0J107XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcInotaW5kZXhcIl0gPSBcIi0xXCI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5fY2FudmFzLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiI2NjY1wiO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuaWQgPSBcImJnQ2FudmFzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgdGhpcy5fZG9tLmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbnZhcyBDb250ZXh0IEVycm9yOiBcIiArIGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8g77+977+9yKHvv73vv73XsGNhbnZhc++/ve+/ve+/ve+/ve+/vcS477+977+92rXvv73vv73vv73vv73do++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuX2dldERvbUluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fZG9tLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvLyDvv73mtLDvv73aseS7r++/ve+/ve+/veS7u1xyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuX3dpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3dpbmRvdyA9IF9zY3JlZW5JbmZvKCk7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gX3dpbmRvd1snd2lkdGgnXTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gX3dpbmRvd1snaGVpZ2h0J107XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH07XHJcbiAgICAvLyDvv73huanvv73isr/vv73vv73IoWNhbnZhc9Sq77+977+9XHJcbiAgICBDYW52YXNGYWN0b3J5LnByb3RvdHlwZS5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcztcclxuICAgIH07XHJcbiAgICAvLyDvv73huanvv73isr/Kue+/ve+/vWNhbnZhc++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzRmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzRmFjdG9yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lXCIpKTtcclxudmFyIFJheV8xID0gcmVxdWlyZShcIi4uL0VsZW1lbnQvUmF5XCIpO1xyXG4vKipcclxuICog77+977+9yKHSu++/ve+/vc28xqzvv73vv73vv73vv73PolxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKiAgICAgIG9JbWdcclxuICogICAgICB3aWR0aFxyXG4gKiAgICAgIGhlaWdodFxyXG4gKi9cclxuZnVuY3Rpb24gX2dldEltYWdlRGF0YShvcHRpb25zKSB7XHJcbiAgICB2YXIgb0ltZyA9IG9wdGlvbnMub0ltZztcclxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgNDAwO1xyXG4gICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0OyAvLyDDu++/ve+/vcSs77+977+91rVcclxuICAgIC8vIO+/ve+/ve+/ve+/vWNhbnZhc++/ve+/ve+/ve+/ve+/ve+/vcSj77+977+977+977+977+977+977+9yr7vv73vv71cclxuICAgIHZhciBjYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBjdHggPSBjYW4uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbi53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FuLmhlaWdodCA9IGhlaWdodCB8fCBjYW4ud2lkdGggKiBvSW1nLm5hdHVyYWxIZWlnaHQgLyBvSW1nLm5hdHVyYWxXaWR0aDtcclxuICAgIC8vXHJcbiAgICBjdHguZHJhd0ltYWdlKG9JbWcsIDAsIDAsIG9JbWcubmF0dXJhbFdpZHRoLCBvSW1nLm5hdHVyYWxIZWlnaHQsIDAsIDAsIGNhbi53aWR0aCwgY2FuLmhlaWdodCk7XHJcbiAgICAvLyDvv73vv73Ioe+/ve+/ve+/vVxyXG4gICAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FuLndpZHRoLCBjYW4uaGVpZ2h0KTtcclxufVxyXG52YXIgUmF5TG9nbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSYXlMb2dvLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmF5TG9nbyhvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5vSW1nID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5pbWFnZURhdGEgPSBbXTtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ2FuID0gbnVsbDtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ3R4ID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5zdGFydFggPSAwO1xyXG4gICAgICAgIF90aGlzLnN0YXJ0WSA9IDA7XHJcbiAgICAgICAgX3RoaXMucmF5cyA9IFtdO1xyXG4gICAgICAgIF90aGlzLnRpbWVyID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5vSW1nID0gb3B0aW9ucy5vSW1nIHx8IG51bGw7XHJcbiAgICAgICAgX3RoaXMuaW1hZ2VEYXRhID0gX2dldEltYWdlRGF0YSh7IG9JbWc6IF90aGlzLm9JbWcsIHdpZHRoOiAzNTAsIH0pO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vWNhbnZhc1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDdHggPSBfdGhpcy52aXJ0dWFsQ2FuLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ2FuLndpZHRoID0gX3RoaXMuaW1hZ2VEYXRhLndpZHRoO1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDYW4uaGVpZ2h0ID0gX3RoaXMuaW1hZ2VEYXRhLmhlaWdodDtcclxuICAgICAgICAvLyDvv73vv73vv73vv73NvMas17zvv73vv73vv73Fte+/vc6777+977+9XHJcbiAgICAgICAgX3RoaXMuc3RhcnRYID0gKF90aGlzLmNhbi53aWR0aCAtIF90aGlzLmltYWdlRGF0YS53aWR0aCkgLyAyO1xyXG4gICAgICAgIF90aGlzLnN0YXJ0WSA9IChfdGhpcy5jYW4uaGVpZ2h0IC0gX3RoaXMuaW1hZ2VEYXRhLmhlaWdodCkgLyAyO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vd+1xL3vv73vv73vv73Jq1xyXG4gICAgICAgIHZhciByYXlDb2xvcjEgPSBcIiNhYmNkZWZcIjtcclxuICAgICAgICB2YXIgcmF5Q29sb3IyID0gXCIjMTI3OGRlXCI7XHJcbiAgICAgICAgX3RoaXMuZ3JhZGllbnQgPSBfdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoX3RoaXMuY2FuLndpZHRoIC8gMiwgX3RoaXMuY2FuLmhlaWdodCAvIDIsIDAsIF90aGlzLmNhbi53aWR0aCAvIDIsIF90aGlzLmNhbi5oZWlnaHQgLyAyLCBfdGhpcy5pbWFnZURhdGEud2lkdGgpO1xyXG4gICAgICAgIF90aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCByYXlDb2xvcjEpO1xyXG4gICAgICAgIF90aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCByYXlDb2xvcjIpO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIF90aGlzLmNyZWF0ZVJheXMoKTtcclxuICAgICAgICBfdGhpcy5zaG93SGVpZ2h0ID0gX3RoaXMuc3RhcnRZO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJheUxvZ28ucHJvdG90eXBlLmNyZWF0ZVJheXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IGkgLyA0OyAvLyDDvzTvv73vv73Wte+/ve+/ve+/ve+/ve+/ve+/vdK777+977+977+977+977+977+9XHJcbiAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgM107XHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ID49IDIwMCkgeyAvLyDNuO+/ve+/ve+/ve+/ve+/vdC277+9XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IG51bSAlIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgdGhpcy5zdGFydFg7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IH5+KG51bSAvIHRoaXMuaW1hZ2VEYXRhLndpZHRoKSArIHRoaXMuc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgaWYgKHggJSAyICYmIHkgJSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXlzLnB1c2gobmV3IFJheV8xLlJheSh4LCB5LCB0aGlzLmltYWdlRGF0YS53aWR0aCwgdGhpcy5pbWFnZURhdGEuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmF5TG9nby5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0hlaWdodCArPSA2O1xyXG4gICAgfTtcclxuICAgIFJheUxvZ28ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuID0gMDtcclxuICAgICAgICB0aGlzLnNob3dIZWlnaHQgPSBNYXRoLm1pbih0aGlzLnNob3dIZWlnaHQsIHRoaXMuaW1hZ2VEYXRhLmhlaWdodCArIHRoaXMuc3RhcnRZKTtcclxuICAgICAgICAvLyDvv73vv73vv71cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzBmMGYwZic7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW4ud2lkdGgsIHRoaXMuY2FuLmhlaWdodCk7XHJcbiAgICAgICAgLy8g77+977+9zbxcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy52aXJ0dWFsQ2FuLCAwLCAwLCB0aGlzLnNob3dIZWlnaHQsIHRoaXMudmlydHVhbENhbi5oZWlnaHQsIHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgdGhpcy5zaG93SGVpZ2h0LCB0aGlzLnZpcnR1YWxDYW4uaGVpZ2h0KTsgLy8g77+977+977+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5ncmFkaWVudDtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDAuMjsgLy8g77+977+977+977+977+937Xvv73vv73vv73Jq1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJheXNbaV0ueSA8IHRoaXMuc2hvd0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmF5c1tpXS5oID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJheXNbaV0ucmVuZGVyKHRoaXMuY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJheXNbaV0udXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICArK2xlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpcnR1YWxDdHguZmlsbFN0eWxlID0gJyMxMjc4ZGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlydHVhbEN0eC5maWxsUmVjdCh0aGlzLnJheXNbaV0ueCAtIHRoaXMuc3RhcnRYLCB0aGlzLnJheXNbaV0ueSAtIHRoaXMuc3RhcnRZLCAxLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgcmV0dXJuIGxlbiA8IHRoaXMucmF5cy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJheUxvZ287XHJcbn0oU2NlbmVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuUmF5TG9nbyA9IFJheUxvZ287XHJcbnZhciBMYW50ZXJuXzEgPSByZXF1aXJlKFwiLi4vRWxlbWVudC9MYW50ZXJuXCIpO1xyXG52YXIgX3JhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cclxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG52YXIgTmV3WWVhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhOZXdZZWFyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTmV3WWVhcihvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kSW1nID0gb3B0aW9ucy5iYWNrZ3JvdW5kSW1nO1xyXG4gICAgICAgIF90aGlzLmxhbnRlcm5JbWcgPSBvcHRpb25zLmxhbnRlcm5JbWc7XHJcbiAgICAgICAgX3RoaXMubnVtID0gb3B0aW9ucy5udW0gfHwgNjA7XHJcbiAgICAgICAgX3RoaXMubGFudGVybnMgPSBbXTtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBfdGhpcy5jcmVhdGVMYW50ZXJucygpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgTmV3WWVhci5wcm90b3R5cGUuY3JlYXRlTGFudGVybnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jYW4ud2lkdGggLyB0aGlzLm51bSAqIGkgKyBfcmFuZG9tKC01MCwgNTApO1xyXG4gICAgICAgICAgICB2YXIgeSA9IF9yYW5kb20oLTEwLCAxMCk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbGFudGVybjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9JbWc6IHRoaXMubGFudGVybkltZyxcclxuICAgICAgICAgICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogX3JhbmRvbSgtMTAsIDEwKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZVNwZWVkOiBfcmFuZG9tKDAuMDUsIDAuMSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmliYm9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBfcmFuZG9tKDEwMCwgMTUwKSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNkZmRjMTUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMS41LFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEFscGhhOiAwLjgsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMubGFudGVybnMucHVzaChuZXcgTGFudGVybl8xLkxhbnRlcm4ob3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOZXdZZWFyLnByb3RvdHlwZS5zZXRCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWcsIDAsIDAsIHRoaXMuYmFja2dyb3VuZEltZy5uYXR1cmFsV2lkdGgsIHRoaXMuYmFja2dyb3VuZEltZy5uYXR1cmFsSGVpZ2h0LCAwLCAwLCB0aGlzLmNhbi53aWR0aCwgdGhpcy5jYW4uaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBOZXdZZWFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g77+977+977+977+9XHJcbiAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgLy8gw7/vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5sYW50ZXJucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJlbmRlcih0aGlzLmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyDvv73vv73KsdC077+977+9XHJcbiAgICB9O1xyXG4gICAgTmV3WWVhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxhbnRlcm5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIM28xqzvv73ktq9cclxuICAgICAgICAgICAgaWYgKHRoaXMubGFudGVybnNbaV0ubGFudGVybi5hbmdsZSA8PSAtMTUgfHwgdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmFuZ2xlID49IDE1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGVTcGVlZCA9IC10aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGVTcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGUgKz0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmFuZ2xlU3BlZWQ7XHJcbiAgICAgICAgICAgIC8vIO+/vdC077+977+95LavXHJcbiAgICAgICAgICAgIHRoaXMubGFudGVybnNbaV0uYmV0YSsrOyAvLyBNYXRoLnNpbu+/ve+/vdOm77+977+9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCByaWJib25zTGVuZ3RoID0gdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zLmxlbmd0aDsgaiA8IHJpYmJvbnNMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmhlaWdodCA/IHRoaXMubGFudGVybnNbal0ubGFudGVybi5oZWlnaHQgOiB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4ud2lkdGggKiB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4ub0ltZy5uYXR1cmFsSGVpZ2h0IC8gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLm9JbWcubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgLy8g77+9xLHvv73vv73vv73vv73Qte+/vVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLnN0YXJ0UG9pbnQueCA9IHRoaXMubGFudGVybnNbaV0ubGFudGVybi54ICsgTWF0aC5jb3MoTWF0aC5QSSAvIDE4MCAqICh0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGUgKyA5MCkpICogZGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC55ID0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLnkgKyBNYXRoLnNpbihNYXRoLlBJIC8gMTgwICogKHRoaXMubGFudGVybnNbaV0ubGFudGVybi5hbmdsZSArIDkwKSkgKiBkaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uY29udHJvbFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLmVuZFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54O1xyXG4gICAgICAgICAgICAgICAgLy8g77+92bjEse+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLmVuZFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54ICsgTWF0aC5zaW4odGhpcy5sYW50ZXJuc1tpXS5iZXRhICogdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLnNwZWVkKSAqIHRoaXMubGFudGVybnNbaV0ucmliYm9uc1tqXS5yYW5nZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTmV3WWVhcjtcclxufShTY2VuZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5OZXdZZWFyID0gTmV3WWVhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2NlbmUob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2FuID0gb3B0aW9ucy5jYW47XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbi5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FuUmVjdCA9IHRoaXMuY2FuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lXCIpKTtcclxudmFyIFRleHRfMSA9IHJlcXVpcmUoXCIuLi9FbGVtZW50L1RleHRcIik7XHJcbnZhciBUZXh0TG9hZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0TG9hZGluZywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHRMb2FkaW5nKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xyXG4gICAgICAgIHZhciBsb2FkaW5nVGV4dE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHg6IF90aGlzLmNhbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IF90aGlzLmNhbi5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhYmNkZWYnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMudGV4dCA9IG5ldyBUZXh0XzEuU29saWRUZXh0KGxvYWRpbmdUZXh0T3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVGV4dExvYWRpbmcucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAobG9hZGVkTnVtYmVyLCBhbGxOdW1iZXIpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICfotYTmupDliqDovb3kuK0uLi4nICsgJyAg77yIJyArIGxvYWRlZE51bWJlciArICcvJyArIGFsbE51bWJlciArICfvvIknO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjMGYwZjBmJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbi53aWR0aCwgdGhpcy5jYW4uaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0LnJlbmRlcih0aGlzLmN0eCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHRMb2FkaW5nO1xyXG59KFNjZW5lXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLlRleHRMb2FkaW5nID0gVGV4dExvYWRpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHwg5aWW5ZOB562J57qn5YiG5biDXHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydHMuUFJJWkVfTEVWRUwgPSBbXHJcbiAgICBbMV0sXHJcbiAgICBbMl0sXHJcbiAgICBbM10sXHJcbiAgICBbNV0sXHJcbl07XHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHwg5ZCN5Y2V5YiX6KGoXHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydHMuTkFNRV9MSVNUID0gW1xyXG4gICAgJ+e9l+WPr+aIkCcsXHJcbiAgICAn6LW15pifJyxcclxuICAgICflkLTkv4onLFxyXG4gICAgJ+eOi+a1t+a2mycsXHJcbiAgICAn5byg5by6JyxcclxuICAgICfpmoblsKcnLFxyXG4gICAgJ+W8oOS4iScsXHJcbiAgICAn5p2O5ZubJyxcclxuICAgICfnjovkupQnLFxyXG4gICAgJ+Wtmeato+S5iScsXHJcbiAgICAn5YiY5b635Y2OJyxcclxuXTtcclxuLy8gKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gfCDlkI3ljZXliJfooahcclxuLy8gKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0cy5SRVNPVVJDRV9DT05GSUcgPSB7XHJcbiAgICBpbWFnZTogW1xyXG4gICAgICAgIHsgbmFtZTogJ3RpZWZhbicsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvc2NlbmUvY3V0L3RpZWZhbi9sb2dvLnBuZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbmV3WWVhckJnJywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy9zY2VuZS9sb3R0ZXJ5L25ld195ZWFyL2JnLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbmV3WWVhckxhbnRlcm4nLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3NjZW5lL2xvdHRlcnkvbmV3X3llYXIvbGFudGVybl8xLnBuZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndHJlYXN1cmVCb3gnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3NjZW5lL2xvdHRlcnkvbmV3X3llYXIvdHJlYXN1cmVCb3gucG5nJywgfSxcclxuICAgICAgICB7IG5hbWU6ICdib29tJywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy9zY2VuZS9sb3R0ZXJ5L25ld195ZWFyL2Jvb20ucG5nJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MScsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICgxKS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3QyJywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDIpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDMnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMykuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0NCcsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICg0KS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3Q1JywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDUpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDYnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoNikuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0NycsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICg3KS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3Q4JywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDgpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDknLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoOSkuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MTAnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMTApLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDExJywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDExKS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3QxMicsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICgxMikuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MTMnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMTMpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDE0JywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDE0KS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3QxNScsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICgxNSkuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MTYnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMTYpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDE3JywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDE3KS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3QxOCcsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICgxOCkuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MTknLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMTkpLmpwZycsIH0sXHJcbiAgICBdLFxyXG4gICAgYXVkaW86IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdvcGVuLXNob3cnLFxyXG4gICAgICAgICAgICB1cmw6ICcuL3Jlcy9hdWRpby9vcGVuLXNob3cubXAzJyxcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XHJcbnZhciBTY2VuZUNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL2FwcC9Mb3R0ZXJ5L1NjZW5lQ29udHJvbGxlci9TY2VuZUNvbnRyb2xsZXJcIik7XHJcbnZhciBUZXh0TG9hZGluZ18xID0gcmVxdWlyZShcIi4vYXBwL0xvdHRlcnkvU2VuY2UvVGV4dExvYWRpbmdcIik7XHJcbnZhciBSYXlMb2dvXzEgPSByZXF1aXJlKFwiLi9hcHAvTG90dGVyeS9TZW5jZS9SYXlMb2dvXCIpO1xyXG52YXIgTmFtZUJsaW5rXzEgPSByZXF1aXJlKFwiLi9hcHAvTG90dGVyeS9Mb3R0ZXJ5L05hbWVCbGlua1wiKTtcclxudmFyIGNvbmZpZyA9IGNvbmZpZ18xLlJFU09VUkNFX0NPTkZJRy5pbWFnZTtcclxudmFyIHNjZW5lQ29udHJvbGxlciA9IG5ldyBTY2VuZUNvbnRyb2xsZXJfMS5TY2VuZUNvbnRyb2xsZXIoe1xyXG4gICAgcmVzQ29uZmlnOiBjb25maWcsXHJcbiAgICBMb2FkU2NlbmU6IFRleHRMb2FkaW5nXzEuVGV4dExvYWRpbmcsXHJcbiAgICBDdXRTY2VuZTogUmF5TG9nb18xLlJheUxvZ28sXHJcbiAgICBMb3R0ZXJ5U2NlbmU6IFJheUxvZ29fMS5OZXdZZWFyLFxyXG4gICAgTG90dGVyeVNob3c6IE5hbWVCbGlua18xLk5hbWVCbGluayxcclxuICAgIGFsbG93T3ZlcnRpbWU6IDMwMCAqIDEwMDAsXHJcbiAgICBpc1Nob3dTdGF0czogZmFsc2UsXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9