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

/***/ "./src/assets/js/app/Lottery/Lottery/TreasureBoxDown.ts":
/*!**************************************************************!*\
  !*** ./src/assets/js/app/Lottery/Lottery/TreasureBoxDown.ts ***!
  \**************************************************************/
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
var TreasureBoxDown = /** @class */ (function () {
    function TreasureBoxDown(options) {
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
        // 第几等奖几个字
        this.levelTextPoints = [];
        this.levelTexts = [];
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
        // 事件
        this.event = null;
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
        this.textFontSize = options.textFontSize || 60;
        this.textColor = options.color || '#000000';
        //
        this.historiesX = options.historiesX || 0;
        this.historiesY = options.historiesY || 0;
        this.historyFontSize = options.historyFontSize || 30;
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
        // 创建第几等奖
        this.createLevelText();
    }
    // 检查传入的名单 和 获奖等级是否一致
    TreasureBoxDown.prototype._checkLengthBetweenPrizeLevelAndNameList = function () {
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
    TreasureBoxDown.prototype.createHistoryBornPoint = function () {
        var margin = 50; // 每行之间的间距
        for (var i = 0, rowLength = this.prizeLevel.length; i < rowLength; i++) {
            for (var j = 0, colLength = ~~this.prizeLevel[i] + 1; j < colLength; j++) { // 注意：+1是为了写【第n等奖】
                var x = this.historiesX + j * 170;
                var y = this.historiesY + i * (this.historyFontSize + margin);
                if (j === 0) {
                    this.levelTextPoints.push(new Point_1.default(x, y));
                }
                else {
                    this.historyPoint.push(new Point_1.default(x, y));
                }
            }
        }
    };
    TreasureBoxDown.prototype.createLevelText = function () {
        for (var i = 0; i < this.levelTextPoints.length; i++) {
            var options = {
                x: this.levelTextPoints[i].x,
                y: this.levelTextPoints[i].y,
                text: '第' + (i + 1) + '等奖',
                fontSize: 40,
                color: '#000000',
            };
            this.levelTexts.push(new Text_1.SolidText(options));
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
        if (!this.animationStep && this.nameList.length > 0) {
            this.TreasureBoxMove();
            this.animationStep = animationStep.treasureBox;
        }
    };
    // 实例化当前中奖人的名字
    TreasureBoxDown.prototype.createText = function () {
        var options = {
            x: this.can.width / 2,
            y: this.can.height / 2,
            fontSize: this.textFontSize,
            color: this.textColor,
        };
        this.textInstance = new Text_1.SolidText(options);
    };
    // 重置文字属性
    TreasureBoxDown.prototype.resetText = function () {
        this.textInstance.x = this.can.width / 2;
        this.textInstance.y = this.can.height / 2;
        this.textInstance.fontSize = this.textFontSize;
        this.textInstance.color = this.textColor;
    };
    // 文字运动
    TreasureBoxDown.prototype.moveTo = function () {
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
        var textSpeedY = distanceY / this.treasureBoxDuration;
        var speedOpacity = distanceOpacity / this.treasureBoxDuration;
        this.treasureBoxSpeedY = textSpeedY;
        this.treasureBoxSpeedOpacity = speedOpacity;
    };
    TreasureBoxDown.prototype.render = function (ctx) {
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
    TreasureBoxDown.prototype.update = function () {
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
    TreasureBoxDown.prototype.renderHistories = function (ctx) {
        this.histories.forEach(function (item) {
            item.render(ctx);
        });
    };
    TreasureBoxDown.prototype.renderLevelText = function (ctx) {
        this.levelTexts.forEach(function (item) {
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
                    _this.can.style.cursor = 'pointer';
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
        console.log('点击了点击事件');
        this.can.style.cursor = 'pointer';
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
            _this.lotteryShowInstance.renderHistories(_this.ctx);
            _this.lotteryShowInstance.renderLevelText(_this.ctx);
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
                document.getElementById('cut-scene').play();
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
var TreasureBoxDown_1 = __webpack_require__(/*! ./app/Lottery/Lottery/TreasureBoxDown */ "./src/assets/js/app/Lottery/Lottery/TreasureBoxDown.ts");
var config = config_1.RESOURCE_CONFIG.image;
var sceneController = new SceneController_1.SceneController({
    resConfig: config,
    LoadScene: TextLoading_1.TextLoading,
    CutScene: RayLogo_1.RayLogo,
    LotteryScene: RayLogo_1.NewYear,
    LotteryShow: TreasureBoxDown_1.TreasureBoxDown,
    allowOvertime: 10 * 1000,
    isShowStats: false,
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL1N0YXRzLWpzL2J1aWxkL3N0YXRzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvTGFudGVybi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvTXlJbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9FbGVtZW50L1JheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L0VsZW1lbnQvUmliYm9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvRWxlbWVudC9UZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvTG90dGVyeS9UcmVhc3VyZUJveERvd24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9TY2VuZUNvbnRyb2xsZXIvU2NlbmVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYXBwL0xvdHRlcnkvU2VuY2UvQ2FudmFzRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L1NlbmNlL1JheUxvZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAvTG90dGVyeS9TZW5jZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FwcC9Mb3R0ZXJ5L1NlbmNlL1RleHRMb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3Ny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Q1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsMkRBQTJELGVBQWU7QUFDMUUsaUVBQWlFLGVBQWUsT0FBTztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUNBQWlDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0RhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLDJDQUFVO0FBQ2pDLHdCQUF3QixtQkFBTyxDQUFDLHFIQUErQztBQUMvRSxvQkFBb0IsbUJBQU8sQ0FBQyx5RkFBaUM7QUFDN0QsZ0JBQWdCLG1CQUFPLENBQUMsaUZBQTZCO0FBQ3JELHdCQUF3QixtQkFBTyxDQUFDLHFHQUF1QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImpzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hc3NldHMvanMvaW5kZXgudHNcIik7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLlN0YXRzPXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBjPWZ1bmN0aW9uKCl7dmFyIG49MCxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZnVuY3Rpb24gZShlKXtyZXR1cm4gbC5hcHBlbmRDaGlsZChlLmRvbSksZX1mdW5jdGlvbiB0KGUpe2Zvcih2YXIgdD0wO3Q8bC5jaGlsZHJlbi5sZW5ndGg7dCsrKWwuY2hpbGRyZW5bdF0uc3R5bGUuZGlzcGxheT10PT09ZT9cImJsb2NrXCI6XCJub25lXCI7bj1lfWwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjAuOTt6LWluZGV4OjEwMDAwXCIsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksdCgrK24lbC5jaGlsZHJlbi5sZW5ndGgpfSwhMSk7dmFyIGk9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKSxhPWksbz0wLGY9ZShuZXcgYy5QYW5lbChcIkZQU1wiLFwiIzBmZlwiLFwiIzAwMlwiKSkscj1lKG5ldyBjLlBhbmVsKFwiTVNcIixcIiMwZjBcIixcIiMwMjBcIikpO2lmKHNlbGYucGVyZm9ybWFuY2UmJnNlbGYucGVyZm9ybWFuY2UubWVtb3J5KXZhciBkPWUobmV3IGMuUGFuZWwoXCJNQlwiLFwiI2YwOFwiLFwiIzIwMVwiKSk7cmV0dXJuIHQoMCkse1JFVklTSU9OOjE2LGRvbTpsLGFkZFBhbmVsOmUsc2hvd1BhbmVsOnQsYmVnaW46ZnVuY3Rpb24oKXtpPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCl9LGVuZDpmdW5jdGlvbigpe28rKzt2YXIgZT0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpO2lmKHIudXBkYXRlKGUtaSwyMDApLGErMWUzPD1lJiYoZi51cGRhdGUoMWUzKm8vKGUtYSksMTAwKSxhPWUsbz0wLGQpKXt2YXIgdD1wZXJmb3JtYW5jZS5tZW1vcnk7ZC51cGRhdGUodC51c2VkSlNIZWFwU2l6ZS8xMDQ4NTc2LHQuanNIZWFwU2l6ZUxpbWl0LzEwNDg1NzYpfXJldHVybiBlfSx1cGRhdGU6ZnVuY3Rpb24oKXtpPXRoaXMuZW5kKCl9LGRvbUVsZW1lbnQ6bCxzZXRNb2RlOnR9fTtyZXR1cm4gYy5QYW5lbD1mdW5jdGlvbihuLGwsaSl7dmFyIGE9MS8wLG89MCxmPU1hdGgucm91bmQscj1mKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSxkPTgwKnIsZT00OCpyLGM9MypyLHA9MipyLHU9MypyLHM9MTUqcixtPTc0KnIsaD0zMCpyLHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTt5LndpZHRoPWQseS5oZWlnaHQ9ZSx5LnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDo4MHB4O2hlaWdodDo0OHB4XCI7dmFyIHY9eS5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIHYuZm9udD1cImJvbGQgXCIrOSpyK1wicHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZcIix2LnRleHRCYXNlbGluZT1cInRvcFwiLHYuZmlsbFN0eWxlPWksdi5maWxsUmVjdCgwLDAsZCxlKSx2LmZpbGxTdHlsZT1sLHYuZmlsbFRleHQobixjLHApLHYuZmlsbFJlY3QodSxzLG0saCksdi5maWxsU3R5bGU9aSx2Lmdsb2JhbEFscGhhPS45LHYuZmlsbFJlY3QodSxzLG0saCkse2RvbTp5LHVwZGF0ZTpmdW5jdGlvbihlLHQpe2E9TWF0aC5taW4oYSxlKSxvPU1hdGgubWF4KG8sZSksdi5maWxsU3R5bGU9aSx2Lmdsb2JhbEFscGhhPTEsdi5maWxsUmVjdCgwLDAsZCxzKSx2LmZpbGxTdHlsZT1sLHYuZmlsbFRleHQoZihlKStcIiBcIituK1wiIChcIitmKGEpK1wiLVwiK2YobykrXCIpXCIsYyxwKSx2LmRyYXdJbWFnZSh5LHUrcixzLG0tcixoLHUscyxtLXIsaCksdi5maWxsUmVjdCh1K20tcixzLHIsaCksdi5maWxsU3R5bGU9aSx2Lmdsb2JhbEFscGhhPS45LHYuZmlsbFJlY3QodSttLXIscyxyLGYoKDEtZS90KSpoKSl9fX0sY30pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBvaW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUG9pbnRcIikpO1xyXG52YXIgUmliYm9uXzEgPSByZXF1aXJlKFwiLi9SaWJib25cIik7XHJcbnZhciBfcmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XHJcbiAgICBpZiAobWluID09PSB2b2lkIDApIHsgbWluID0gMDsgfVxyXG4gICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDE7IH1cclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn07XHJcbnZhciBMYW50ZXJuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGFudGVybihvcHRpb25zKSB7XHJcbiAgICAgICAgLy8g77+977+977+977+9XHJcbiAgICAgICAgdGhpcy5sYW50ZXJuID0ge307IC8vID/vv73vv73Xou+/ve+/ve+/ve+/vdK777+977+977+977+90rvvv73vv73Squ+/ve+/vcq877+977+9XHJcbiAgICAgICAgdGhpcy5sYW50ZXJuLm9JbWcgPSBvcHRpb25zLmxhbnRlcm4ub0ltZztcclxuICAgICAgICB0aGlzLmxhbnRlcm4ueCA9IG9wdGlvbnMubGFudGVybi54IHx8IDA7XHJcbiAgICAgICAgdGhpcy5sYW50ZXJuLnkgPSBvcHRpb25zLmxhbnRlcm4ueSB8fCAwO1xyXG4gICAgICAgIHRoaXMubGFudGVybi53aWR0aCA9IG9wdGlvbnMubGFudGVybi53aWR0aCB8fCAxMDA7XHJcbiAgICAgICAgLy8gdGhpcy5sYW50ZXJuLmhlaWdodCA9IG9wdGlvbnMubGFudGVybi5oZWlnaHQgfHwgMTAwOy8vIO+/ve+/ve+/vdy477+9xKzvv73vv73WtVxyXG4gICAgICAgIHRoaXMubGFudGVybi5hbmdsZSA9IG9wdGlvbnMubGFudGVybi5hbmdsZSB8fCAwO1xyXG4gICAgICAgIHRoaXMubGFudGVybi5hbmdsZVNwZWVkID0gb3B0aW9ucy5sYW50ZXJuLmFuZ2xlU3BlZWQgfHwgMTA7XHJcbiAgICAgICAgLy8g77+90LTvv71cclxuICAgICAgICB0aGlzLnJpYmJvbiA9IHt9OyAvLyA/77+977+916Lvv73vv73vv73vv73Su++/ve+/ve+/ve+/vdK777+977+90qrvv73vv73KvO+/ve+/vVxyXG4gICAgICAgIHRoaXMucmliYm9uLm51bSA9IG9wdGlvbnMucmliYm9uLm51bSB8fCAyO1xyXG4gICAgICAgIHRoaXMucmliYm9uLmRpc3RhbmNlID0gb3B0aW9ucy5yaWJib24uZGlzdGFuY2UgfHwgMjAwO1xyXG4gICAgICAgIHRoaXMucmliYm9uLmNvbG9yID0gb3B0aW9ucy5yaWJib24uY29sb3IgfHwgJyNjY2MnO1xyXG4gICAgICAgIHRoaXMucmliYm9uLmxpbmVXaWR0aCA9IG9wdGlvbnMucmliYm9uLmxpbmVXaWR0aCB8fCAxO1xyXG4gICAgICAgIHRoaXMucmliYm9uLmdsb2JhbEFscGhhID0gb3B0aW9ucy5yaWJib24uZ2xvYmFsQWxwaGEgfHwgMTtcclxuICAgICAgICB0aGlzLnJpYmJvbi5ib3JuUmFuZ2UgPSBvcHRpb25zLnJpYmJvbi5ib3JuUmFuZ2UgfHwgMTA7XHJcbiAgICAgICAgdGhpcy5yaWJib24uc3BlZWQgPSBvcHRpb25zLnJpYmJvbi5zcGVlZCB8fCAxMDtcclxuICAgICAgICB0aGlzLnJpYmJvbi5yYW5nZSA9IG9wdGlvbnMucmliYm9uLnJhbmdlIHx8IDEwO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5iZXRhID0gMDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMucmliYm9ucyA9IFtdO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5pbml0UmliYm9uKCk7XHJcbiAgICB9XHJcbiAgICAvLyDvv73vv73KvO+/ve+/ve+/vdC077+9XHJcbiAgICBMYW50ZXJuLnByb3RvdHlwZS5pbml0UmliYm9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yaWJib24ubnVtOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5sYW50ZXJuLmhlaWdodCA/IHRoaXMubGFudGVybi5oZWlnaHQgOiB0aGlzLmxhbnRlcm4ud2lkdGggKiB0aGlzLmxhbnRlcm4ub0ltZy5uYXR1cmFsSGVpZ2h0IC8gdGhpcy5sYW50ZXJuLm9JbWcubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRYID0gdGhpcy5sYW50ZXJuLnggKyBNYXRoLmNvcyhNYXRoLlBJIC8gMTgwICogKHRoaXMubGFudGVybi5hbmdsZSArIDkwKSkgKiBkaXN0YW5jZTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0WSA9IHRoaXMubGFudGVybi55ICsgTWF0aC5zaW4oTWF0aC5QSSAvIDE4MCAqICh0aGlzLmxhbnRlcm4uYW5nbGUgKyA5MCkpICogZGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sWCA9IHN0YXJ0WDtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xZID0gc3RhcnRZICsgdGhpcy5yaWJib24uZGlzdGFuY2UgLyAzO1xyXG4gICAgICAgICAgICB2YXIgZW5kWCA9IHN0YXJ0WDsgLy8g77+977+977+977+977+977+9WO+/ve+/ve+/veqjqO+/veS2r++/ve+/vVxyXG4gICAgICAgICAgICB2YXIgZW5kWSA9IHN0YXJ0WSArIF9yYW5kb20odGhpcy5yaWJib24uZGlzdGFuY2UgLSAyMCwgdGhpcy5yaWJib24uZGlzdGFuY2UgKyAyMCk7XHJcbiAgICAgICAgICAgIHZhciBzcGVlZCA9IF9yYW5kb20oMC4wMiwgMC4wMyk7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9IF9yYW5kb20oMjAsIDMwKTtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFBvaW50OiBuZXcgUG9pbnRfMS5kZWZhdWx0KHN0YXJ0WCwgc3RhcnRZKSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xQb2ludDogbmV3IFBvaW50XzEuZGVmYXVsdChjb250cm9sWCwgY29udHJvbFkpLFxyXG4gICAgICAgICAgICAgICAgZW5kUG9pbnQ6IG5ldyBQb2ludF8xLmRlZmF1bHQoZW5kWCwgZW5kWSksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5yaWJib24uY29sb3IsXHJcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IHRoaXMucmliYm9uLmxpbmVXaWR0aCxcclxuICAgICAgICAgICAgICAgIGdsb2JhbEFscGhhOiB0aGlzLnJpYmJvbi5nbG9iYWxBbHBoYSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiBzcGVlZCxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5yaWJib25zLnB1c2gobmV3IFJpYmJvbl8xLlJpYmJvbihvcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgTGFudGVybi5wcm90b3R5cGUuZHJhd0xhbnRlcm4gPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIG9JbWcgPSB0aGlzLmxhbnRlcm4ub0ltZztcclxuICAgICAgICB2YXIgaW1nV2lkdGggPSB0aGlzLmxhbnRlcm4ub0ltZy5uYXR1cmFsV2lkdGg7XHJcbiAgICAgICAgdmFyIGltZ0hlaWdodCA9IHRoaXMubGFudGVybi5vSW1nLm5hdHVyYWxIZWlnaHQ7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB2YXIgeCA9IHRoaXMubGFudGVybi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5sYW50ZXJuLnk7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5sYW50ZXJuLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmxhbnRlcm4uaGVpZ2h0ID0gd2lkdGggKiBpbWdIZWlnaHQgLyBpbWdXaWR0aDtcclxuICAgICAgICAvLyBUT0RPIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLmxhbnRlcm4uYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAvLyDvv73vv73vv73vv73Qp++/ve+/vVxyXG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMCwgMC4yKSc7XHJcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIDIwMCwgMjAwKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKG9JbWcsIDAsIDAsIGltZ1dpZHRoLCBpbWdIZWlnaHQsIC13aWR0aCAvIDIsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/vdCn77+977+9XHJcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShvSW1nLCAwLCAwLCBpbWdXaWR0aCwgaW1nSGVpZ2h0LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJyNmMDAnO1xyXG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCAyMCwgMjApO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgY3R4LnJvdGF0ZSgwKTtcclxuICAgIH07XHJcbiAgICAvLyDvv73vv73vv73QtO+/vVxyXG4gICAgTGFudGVybi5wcm90b3R5cGUuZHJhd1JpYmJvbiA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLnJpYmJvbnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLnJlbmRlcihjdHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExhbnRlcm4ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLmRyYXdMYW50ZXJuKGN0eCk7XHJcbiAgICAgICAgdGhpcy5kcmF3UmliYm9uKGN0eCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExhbnRlcm47XHJcbn0oKSk7XHJcbmV4cG9ydHMuTGFudGVybiA9IExhbnRlcm47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNeUltYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTXlJbWFnZShvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vSW1nID0gb3B0aW9ucy5vSW1nO1xyXG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueCB8fCAwO1xyXG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueSB8fCAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDE7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5IHx8IDE7XHJcbiAgICB9XHJcbiAgICBNeUltYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5vSW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE15SW1hZ2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTXlJbWFnZSA9IE15SW1hZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQb2ludCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUG9pbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX3JhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cclxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG4vKipcclxuICog77+977+977+977+9dHlwZXNjcmlwdO+/ve+/vSBNYXRoLnNpZ24g0qrvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73Eutyj77+977+977+977+977+90LTvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv71cclxuICovXHJcbnZhciBfc2lnbiA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICBpZiAobiA+IDApIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG4gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG4gPT09IC0wKSB7XHJcbiAgICAgICAgcmV0dXJuIC0wO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobiA8IDApIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgfVxyXG59O1xyXG52YXIgUmF5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmF5KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMTAwO1xyXG4gICAgICAgIC8vIMq577+977+91rVcclxuICAgICAgICB0aGlzLm8gPSBNYXRoLlBJIC8gMiAqIChNYXRoLnJhbmRvbSgpICogdGhpcy54IC0gdGhpcy5oZWlnaHQgLyAyKSAvIHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh0aGlzLm8gPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogTWF0aC5QSSAvIDI7IC8vIO+/vda477+977+977+9IC05MCB+ICs5MFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnMgPSAyICogTWF0aC5QSSAqIChNYXRoLnJhbmRvbSgpICogdGhpcy55IC0gdGhpcy53aWR0aCAvIDIpIC8gdGhpcy53aWR0aDtcclxuICAgICAgICBpZiAodGhpcy5zID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucyA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIE1hdGguUEk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaCA9IDA7XHJcbiAgICAgICAgLy8g77+95Luv1rVcclxuICAgICAgICB0aGlzLmwgPSAwLjAyICogX3NpZ24odGhpcy5zKTsgLy8g77+977+977+977+977+977+977+977+91rXvv73vv70xLCAtMSwgMCwgLTAsIE5hTlxyXG4gICAgICAgIHRoaXMuYyA9IDAuMDIgKiBfc2lnbih0aGlzLm8pOyAvLyDvv73vv73vv73vv73vv73vv73vv73vv73Wte+/ve+/vTEsIC0xLCAwLCAtMCwgTmFOXHJcbiAgICAgICAgdGhpcy5jICs9IF9yYW5kb20oLTAuMDA1LCAwLjAwNSk7XHJcbiAgICAgICAgdGhpcy5kID0gX3JhbmRvbSgyLCA0KTsgLy8g77+937Pvv71cclxuICAgIH1cclxuICAgIFJheS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBzdGFydFggPSB0aGlzLnggKyBNYXRoLmNvcyh0aGlzLnMpICogdGhpcy5oIC8gMjtcclxuICAgICAgICB2YXIgc3RhcnRZID0gdGhpcy55ICsgTWF0aC5zaW4odGhpcy5zKSAqIHRoaXMuaCAvIDI7XHJcbiAgICAgICAgdmFyIGVuZFggPSB0aGlzLnggKyBNYXRoLmNvcyh0aGlzLm8pICogdGhpcy5oO1xyXG4gICAgICAgIHZhciBlbmRZID0gdGhpcy55ICsgTWF0aC5zaW4odGhpcy5vKSAqIHRoaXMuaDtcclxuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSk7XHJcbiAgICB9O1xyXG4gICAgUmF5LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5vICs9IHRoaXMuYyAqIDI7IC8vIO+/ve+/ve+/ve+/vTIg77+977+9zqrvv73vv70g77+977+9yqfvv73vv73vv71cclxuICAgICAgICB0aGlzLnMgKz0gdGhpcy5sICogMjsgLy8g77+977+977+977+9MiDvv73vv73Oqu+/ve+/vSDvv73vv73Kp++/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuaCArPSBNYXRoLmNvcyh0aGlzLm8pICogdGhpcy5kO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSYXk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmF5ID0gUmF5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUmliYm9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmliYm9uKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSBvcHRpb25zLnN0YXJ0UG9pbnQ7XHJcbiAgICAgICAgdGhpcy5jb250cm9sUG9pbnQgPSBvcHRpb25zLmNvbnRyb2xQb2ludDtcclxuICAgICAgICB0aGlzLmVuZFBvaW50ID0gb3B0aW9ucy5lbmRQb2ludDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvciB8fCAnI2NjYyc7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBvcHRpb25zLmxpbmVXaWR0aCB8fCAxNDtcclxuICAgICAgICB0aGlzLmdsb2JhbEFscGhhID0gb3B0aW9ucy5nbG9iYWxBbHBoYSB8fCAwLjg7XHJcbiAgICAgICAgLy8g77+977+9zKzvv73vv73vv73vv71cclxuICAgICAgICB0aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZCB8fCAxMDsgLy8g77+977+977+977+90qHvv73ate+/ve+/vdm277+9XHJcbiAgICAgICAgdGhpcy5yYW5nZSA9IG9wdGlvbnMucmFuZ2UgfHwgNDA7IC8vIO+/ve+/ve+/ve+/vdKh77+92rXEt++/vc6nXHJcbiAgICB9XHJcbiAgICBSaWJib24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuZ2xvYmFsQWxwaGE7XHJcbiAgICAgICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgICAgIGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgICAgICAgLy9jdHguYmVnaW5QYXRoKCk7Ly8gP++/ve+/vdei77+94qO677+977+977+977e077+977+977+977+977+93Ljvv71jbG9zZVBhdGgoKe+/ve+/ve+/ve+/vci777+977+91brvv71cclxuICAgICAgICBjdHgubW92ZVRvKHRoaXMuc3RhcnRQb2ludC54LCB0aGlzLnN0YXJ0UG9pbnQueSk7XHJcbiAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8odGhpcy5jb250cm9sUG9pbnQueCwgdGhpcy5jb250cm9sUG9pbnQueSwgdGhpcy5lbmRQb2ludC54LCB0aGlzLmVuZFBvaW50LnkpO1xyXG4gICAgICAgIC8vY3R4LmNsb3NlUGF0aCgpOy8vID/vv73vv73Xou+/veKjuu+/ve+/ve+/ve+3tO+/ve+/ve+/ve+/ve+/vdy477+9Y2xvc2VQYXRoKCnvv73vv73vv73vv73Iu++/ve+/vdW677+9XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJpYmJvbjtcclxufSgpKTtcclxuZXhwb3J0cy5SaWJib24gPSBSaWJib247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRleHQob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55IHx8IDEwMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvciB8fCAnI2NjYyc7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5IHx8IDE7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0IHx8ICdkZWZhdWx0JztcclxuICAgICAgICB0aGlzLmZvbnRTdHlsZSA9IG9wdGlvbnMuZm9udFN0eWxlIHx8ICdub3JtYWwnO1xyXG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnQgPSBvcHRpb25zLmZvbnRWYXJpYW50IHx8ICdub3JtYWwnO1xyXG4gICAgICAgIHRoaXMuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodCB8fCA5MDA7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemUgfHwgMjQ7XHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5ID0gb3B0aW9ucy5mb250RmFtaWx5IHx8ICdhcmlhbCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dDtcclxufSgpKTtcclxudmFyIFNvbGlkVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTb2xpZFRleHQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTb2xpZFRleHQob3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU29saWRUZXh0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRTdHlsZSArIFwiIFwiICsgdGhpcy5mb250VmFyaWFudCArIFwiIFwiICsgdGhpcy5mb250V2VpZ2h0ICsgXCIgXCIgKyB0aGlzLmZvbnRTaXplICsgXCJweCBcIiArIHRoaXMuZm9udEZhbWlseTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjsgLy8g77+977+977+977+977+977+9yatcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IC8vIO+/ve+/ve+/ve+/vcuuxr3vv73vv73vv73rt73KvVxyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiOyAvLyDvv73vv73vv73DtO+/vdax77+977+977+967e9yr1cclxuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLngsIHRoaXMueSk7IC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/vdaj77+977+977+977+977+977+977+90qrQtO+/ve+/ve+/vdaj77+9eO+/ve+/ve+/veqjrHnvv73vv73vv73qo6lcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU29saWRUZXh0O1xyXG59KFRleHQpKTtcclxuZXhwb3J0cy5Tb2xpZFRleHQgPSBTb2xpZFRleHQ7XHJcbnZhciBIb2xsb3dUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEhvbGxvd1RleHQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIb2xsb3dUZXh0KG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxpbmVXaWR0aCA9IG9wdGlvbnMubGluZVdpZHRoIHx8IDE7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgSG9sbG93VGV4dC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250U3R5bGUgKyBcIiBcIiArIHRoaXMuZm9udFZhcmlhbnQgKyBcIiBcIiArIHRoaXMuZm9udFdlaWdodCArIFwiIFwiICsgdGhpcy5mb250U2l6ZSArIFwicHggXCIgKyB0aGlzLmZvbnRGYW1pbHk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjsgLy8g77+977+977+977+977+977+9yatcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyAvLyDvv73vv73vv73vv73Lrsa977+977+977+967e9yr1cclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjsgLy8g77+977+977+9w7Tvv73Wse+/ve+/ve+/veu3vcq9XHJcbiAgICAgICAgY3R4LnN0cm9rZVRleHQodGhpcy50ZXh0LCB0aGlzLngsIHRoaXMueSk7IC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/vdaj77+977+977+977+977+977+977+90qrQtO+/ve+/ve+/vdaj77+9eO+/ve+/ve+/veqjrHnvv73vv73vv73qo6lcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSG9sbG93VGV4dDtcclxufShUZXh0KSk7XHJcbmV4cG9ydHMuSG9sbG93VGV4dCA9IEhvbGxvd1RleHQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQb2ludF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9FbGVtZW50L1BvaW50XCIpKTtcclxudmFyIFRleHRfMSA9IHJlcXVpcmUoXCIuLi9FbGVtZW50L1RleHRcIik7XHJcbnZhciBNeUltYWdlXzEgPSByZXF1aXJlKFwiLi4vRWxlbWVudC9NeUltYWdlXCIpO1xyXG52YXIgX3JhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cclxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG4vLyDliqjnlLvmraXpqqRcclxudmFyIGFuaW1hdGlvblN0ZXA7XHJcbihmdW5jdGlvbiAoYW5pbWF0aW9uU3RlcCkge1xyXG4gICAgYW5pbWF0aW9uU3RlcFthbmltYXRpb25TdGVwW1wibm9BbmltYXRpb25cIl0gPSAwXSA9IFwibm9BbmltYXRpb25cIjtcclxuICAgIGFuaW1hdGlvblN0ZXBbYW5pbWF0aW9uU3RlcFtcInRyZWFzdXJlQm94XCJdID0gMV0gPSBcInRyZWFzdXJlQm94XCI7XHJcbiAgICBhbmltYXRpb25TdGVwW2FuaW1hdGlvblN0ZXBbXCJib29tXCJdID0gMl0gPSBcImJvb21cIjtcclxuICAgIGFuaW1hdGlvblN0ZXBbYW5pbWF0aW9uU3RlcFtcInRleHRcIl0gPSAzXSA9IFwidGV4dFwiO1xyXG59KShhbmltYXRpb25TdGVwIHx8IChhbmltYXRpb25TdGVwID0ge30pKTtcclxudmFyIFRyZWFzdXJlQm94RG93biA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyZWFzdXJlQm94RG93bihvcHRpb25zKSB7XHJcbiAgICAgICAgLy8g5a6d566xXHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveCA9IHt9OyAvLyDlrp3nrrHlrp7kvosgLy8g6L+Z5o6l5Y+jIOaAjuS5iOWumuS5ie+8n++8n++8n1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgLy8g5a6d566x5bGe5oCnXHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveFNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveFNwZWVkT3BhY2l0eSA9IDA7XHJcbiAgICAgICAgLy8g5a6d566x6L+Q5YqoXHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94RHVyYXRpb24gPSAxMDA7XHJcbiAgICAgICAgLy8g54iG54K4XHJcbiAgICAgICAgdGhpcy5ib29tID0ge307XHJcbiAgICAgICAgdGhpcy5ib29tU3RlcCA9IDA7XHJcbiAgICAgICAgLy8g56ys5Yeg562J5aWW5Yeg5Liq5a2XXHJcbiAgICAgICAgdGhpcy5sZXZlbFRleHRQb2ludHMgPSBbXTtcclxuICAgICAgICB0aGlzLmxldmVsVGV4dHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRleHRPbk1vdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyDmloflrZfnp7vliqhcclxuICAgICAgICB0aGlzLnRleHRTcGVlZFggPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dFNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udFNpemVTcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dER1cmF0aW9uID0gMTAwO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeVBvaW50ID0gW107XHJcbiAgICAgICAgdGhpcy5oaXN0b3JpZXMgPSBbXTtcclxuICAgICAgICAvLyDliqjnlLtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSBhbmltYXRpb25TdGVwLm5vQW5pbWF0aW9uO1xyXG4gICAgICAgIC8vIOS6i+S7tlxyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FuID0gb3B0aW9ucy5jYW47XHJcbiAgICAgICAgdGhpcy5wcml6ZUxldmVsID0gb3B0aW9ucy5wcml6ZUxldmVsIHx8IFtbMV0sIFsxXSwgWzFdXTtcclxuICAgICAgICB0aGlzLm5hbWVMaXN0ID0gb3B0aW9ucy5uYW1lTGlzdCB8fCBbJ2tvYmUnLCAnamFtZXMnLCAnY2FybCddO1xyXG4gICAgICAgIC8vIOWuneeusVxyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3gub0ltZyA9IG9wdGlvbnMudHJlYXN1cmVCb3gub0ltZztcclxuICAgICAgICB2YXIgdHJlYXN1cmVCb3hJbWFnZUluZm8gPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnRyZWFzdXJlQm94Lm9JbWcubmF0dXJhbFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMudHJlYXN1cmVCb3gub0ltZy5uYXR1cmFsSGVpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC53aWR0aCA9IG9wdGlvbnMudHJlYXN1cmVCb3gud2lkdGggfHwgMTAwO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3guaGVpZ2h0ID0gb3B0aW9ucy50cmVhc3VyZUJveC5oZWlnaHQgfHwgdGhpcy50cmVhc3VyZUJveC53aWR0aCAqIHRyZWFzdXJlQm94SW1hZ2VJbmZvLmhlaWdodCAvIHRyZWFzdXJlQm94SW1hZ2VJbmZvLndpZHRoO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3gueCA9IG9wdGlvbnMudHJlYXN1cmVCb3gueCB8fCAodGhpcy5jYW4ud2lkdGggLSB0aGlzLnRyZWFzdXJlQm94LndpZHRoKSAvIDI7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveC55ID0gb3B0aW9ucy50cmVhc3VyZUJveC55IHx8ICh0aGlzLmNhbi5oZWlnaHQgLSB0aGlzLnRyZWFzdXJlQm94LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3gub3BhY2l0eSA9IG9wdGlvbnMudHJlYXN1cmVCb3gub3BhY2l0eSB8fCAxO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3guc2NhbGUgPSBvcHRpb25zLnRyZWFzdXJlQm94LnNjYWxlIHx8IDE7XHJcbiAgICAgICAgLy8g54iG54K4XHJcbiAgICAgICAgdGhpcy5ib29tLm9JbWcgPSBvcHRpb25zLmJvb20ub0ltZztcclxuICAgICAgICAvLyDlh7rnlJ/mloflrZdcclxuICAgICAgICB0aGlzLnRleHRGb250U2l6ZSA9IG9wdGlvbnMudGV4dEZvbnRTaXplIHx8IDYwO1xyXG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gb3B0aW9ucy5jb2xvciB8fCAnIzAwMDAwMCc7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLmhpc3Rvcmllc1ggPSBvcHRpb25zLmhpc3Rvcmllc1ggfHwgMDtcclxuICAgICAgICB0aGlzLmhpc3Rvcmllc1kgPSBvcHRpb25zLmhpc3Rvcmllc1kgfHwgMDtcclxuICAgICAgICB0aGlzLmhpc3RvcnlGb250U2l6ZSA9IG9wdGlvbnMuaGlzdG9yeUZvbnRTaXplIHx8IDMwO1xyXG4gICAgICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5uYW1lTGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgIC8vIOajgOafpeeUqOaIt+WQjeWNleWSjOWlluWKseetiee6p+mVv+W6plxyXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tMZW5ndGhCZXR3ZWVuUHJpemVMZXZlbEFuZE5hbWVMaXN0KCkpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ+S8oOWFpeeahOeUqOaIt+WQjeWNleWSjOWlluWKseetiee6p+mVv+W6puS4jeS4gOagtycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliJvlu7rljoblj7LmloflrZfnmoR477yMIHlcclxuICAgICAgICB0aGlzLmNyZWF0ZUhpc3RvcnlCb3JuUG9pbnQoKTtcclxuICAgICAgICAvLyDliJ3lp4vljJblrp3nrrFcclxuICAgICAgICB0aGlzLmNyZWF0ZVRyZWFzdXJlQm94KCk7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5paH5a2XXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgLy8g5Yib5bu656ys5Yeg562J5aWWXHJcbiAgICAgICAgdGhpcy5jcmVhdGVMZXZlbFRleHQoKTtcclxuICAgIH1cclxuICAgIC8vIOajgOafpeS8oOWFpeeahOWQjeWNlSDlkowg6I635aWW562J57qn5piv5ZCm5LiA6Ie0XHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLl9jaGVja0xlbmd0aEJldHdlZW5Qcml6ZUxldmVsQW5kTmFtZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5hbWVMaXN0TGVuZ3RoID0gdGhpcy5uYW1lTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHByaXplTGV2ZWxMZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMucHJpemVMZXZlbC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uZm9yRWFjaChmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgICAgICAgICBwcml6ZUxldmVsTGVuZ3RoICs9IG51bTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVMaXN0TGVuZ3RoID09PSBwcml6ZUxldmVsTGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIC8vIOWIm+W7umhpc3Rvcmllc+WvueixoeeahOWHuueUn+eCuVxyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5jcmVhdGVIaXN0b3J5Qm9yblBvaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYXJnaW4gPSA1MDsgLy8g5q+P6KGM5LmL6Ze055qE6Ze06LedXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHJvd0xlbmd0aCA9IHRoaXMucHJpemVMZXZlbC5sZW5ndGg7IGkgPCByb3dMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgY29sTGVuZ3RoID0gfn50aGlzLnByaXplTGV2ZWxbaV0gKyAxOyBqIDwgY29sTGVuZ3RoOyBqKyspIHsgLy8g5rOo5oSP77yaKzHmmK/kuLrkuoblhpnjgJDnrKxu562J5aWW44CRXHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuaGlzdG9yaWVzWCArIGogKiAxNzA7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMuaGlzdG9yaWVzWSArIGkgKiAodGhpcy5oaXN0b3J5Rm9udFNpemUgKyBtYXJnaW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGogPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVGV4dFBvaW50cy5wdXNoKG5ldyBQb2ludF8xLmRlZmF1bHQoeCwgeSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5UG9pbnQucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KHgsIHkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLmNyZWF0ZUxldmVsVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGV2ZWxUZXh0UG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5sZXZlbFRleHRQb2ludHNbaV0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxUZXh0UG9pbnRzW2ldLnksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn56ysJyArIChpICsgMSkgKyAn562J5aWWJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0cy5wdXNoKG5ldyBUZXh0XzEuU29saWRUZXh0KG9wdGlvbnMpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8g5re75Yqg5LqL5Lu2XHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gdGhpcy5zdGFydFNob3cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIC8vIOenu+mZpOS6i+S7tlxyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNhbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIC8vIOW8gOWni+WKqOeUu+aYvuekulxyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5zdGFydFNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGlvblN0ZXAgJiYgdGhpcy5uYW1lTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVHJlYXN1cmVCb3hNb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAudHJlYXN1cmVCb3g7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIOWunuS+i+WMluW9k+WJjeS4reWlluS6uueahOWQjeWtl1xyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5jcmVhdGVUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmNhbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuY2FuLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnRleHRGb250U2l6ZSxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMudGV4dENvbG9yLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UgPSBuZXcgVGV4dF8xLlNvbGlkVGV4dChvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICAvLyDph43nva7mloflrZflsZ7mgKdcclxuICAgIFRyZWFzdXJlQm94RG93bi5wcm90b3R5cGUucmVzZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGV4dEluc3RhbmNlLnggPSB0aGlzLmNhbi53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UueSA9IHRoaXMuY2FuLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UuZm9udFNpemUgPSB0aGlzLnRleHRGb250U2l6ZTtcclxuICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5jb2xvciA9IHRoaXMudGV4dENvbG9yO1xyXG4gICAgfTtcclxuICAgIC8vIOaWh+Wtl+i/kOWKqFxyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldFggPSB0aGlzLmhpc3RvcnlQb2ludFt0aGlzLmxhc3RJbmRleF1bJ3gnXTtcclxuICAgICAgICB2YXIgdGFyZ2V0WSA9IHRoaXMuaGlzdG9yeVBvaW50W3RoaXMubGFzdEluZGV4XVsneSddO1xyXG4gICAgICAgIHZhciB0YXJnZXRGb250U2l6ZSA9IHRoaXMuaGlzdG9yeUZvbnRTaXplO1xyXG4gICAgICAgIHZhciBkaXN0YW5jZVggPSB0YXJnZXRYIC0gdGhpcy50ZXh0SW5zdGFuY2UueDtcclxuICAgICAgICB2YXIgZGlzdGFuY2VZID0gdGFyZ2V0WSAtIHRoaXMudGV4dEluc3RhbmNlLnk7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlRm9udFNpemUgPSB0YXJnZXRGb250U2l6ZSAtIHRoaXMudGV4dEluc3RhbmNlLmZvbnRTaXplO1xyXG4gICAgICAgIHZhciB0ZXh0U3BlZWRYID0gZGlzdGFuY2VYIC8gdGhpcy50ZXh0RHVyYXRpb247XHJcbiAgICAgICAgdmFyIHRleHRTcGVlZFkgPSBkaXN0YW5jZVkgLyB0aGlzLnRleHREdXJhdGlvbjtcclxuICAgICAgICB2YXIgdGV4dEZvbnRTaXplU3BlZWQgPSBkaXN0YW5jZUZvbnRTaXplIC8gdGhpcy50ZXh0RHVyYXRpb247XHJcbiAgICAgICAgdGhpcy50ZXh0U3BlZWRYID0gdGV4dFNwZWVkWDtcclxuICAgICAgICB0aGlzLnRleHRTcGVlZFkgPSB0ZXh0U3BlZWRZO1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnRTaXplU3BlZWQgPSB0ZXh0Rm9udFNpemVTcGVlZDtcclxuICAgICAgICB0aGlzLmxhc3RJbmRleC0tO1xyXG4gICAgICAgIHRoaXMudGV4dEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnRleHRPbk1vdmUgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8vIOWunuS+i+WMluWuneeusVxyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5jcmVhdGVUcmVhc3VyZUJveCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW1nV2lkdGggPSAyMDA7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG9JbWc6IHRoaXMudHJlYXN1cmVCb3gub0ltZyxcclxuICAgICAgICAgICAgeDogKHRoaXMuY2FuLndpZHRoIC0gaW1nV2lkdGgpIC8gMixcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IGltZ1dpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGltZ1dpZHRoICogdGhpcy50cmVhc3VyZUJveC5vSW1nLmhlaWdodCAvIHRoaXMudHJlYXN1cmVCb3gub0ltZy53aWR0aCxcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4yLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveEluc3RhbmNlID0gbmV3IE15SW1hZ2VfMS5NeUltYWdlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIC8vIOmHjee9ruWuneeuseWxnuaAp1xyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5yZXNldFRyZWFzdXJlQm94ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWdXaWR0aCA9IDIwMDtcclxuICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UueCA9ICh0aGlzLmNhbi53aWR0aCAtIGltZ1dpZHRoKSAvIDI7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLnkgPSAwO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS53aWR0aCA9IGltZ1dpZHRoO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS5oZWlnaHQgPSBpbWdXaWR0aCAqIHRoaXMudHJlYXN1cmVCb3gub0ltZy5oZWlnaHQgLyB0aGlzLnRyZWFzdXJlQm94Lm9JbWcud2lkdGg7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLm9wYWNpdHkgPSAwLjI7XHJcbiAgICB9O1xyXG4gICAgLy8g5Zu+54mH6L+Q5YqoXHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLlRyZWFzdXJlQm94TW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0WSA9ICh0aGlzLmNhbi5oZWlnaHQgLSB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdmFyIHRhcmdldE9wYWNpdHkgPSAxO1xyXG4gICAgICAgIHZhciBkaXN0YW5jZVkgPSB0YXJnZXRZIC0gdGhpcy50cmVhc3VyZUJveEluc3RhbmNlLnk7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlT3BhY2l0eSA9IHRhcmdldE9wYWNpdHkgLSB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2Uub3BhY2l0eTtcclxuICAgICAgICB2YXIgdGV4dFNwZWVkWSA9IGRpc3RhbmNlWSAvIHRoaXMudHJlYXN1cmVCb3hEdXJhdGlvbjtcclxuICAgICAgICB2YXIgc3BlZWRPcGFjaXR5ID0gZGlzdGFuY2VPcGFjaXR5IC8gdGhpcy50cmVhc3VyZUJveER1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZFkgPSB0ZXh0U3BlZWRZO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmVCb3hTcGVlZE9wYWNpdHkgPSBzcGVlZE9wYWNpdHk7XHJcbiAgICB9O1xyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcC50cmVhc3VyZUJveCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWFzdXJlQm94SW5zdGFuY2UucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcC5ib29tKSB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5ib29tLm9JbWcsIDE4NSAqIH5+KHRoaXMuYm9vbVN0ZXAgLyAyKSwgMCwgMTg1LCAxNTksIHRoaXMuY2FuLndpZHRoIC8gMiAtIDEwMCwgdGhpcy5jYW4uaGVpZ2h0IC8gMiAtIDEwMCwgMjAwLCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXAudGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwLnRyZWFzdXJlQm94KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlYXN1cmVCb3hGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50cmVhc3VyZUJveEZyYW1lID4gdGhpcy50cmVhc3VyZUJveER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDph43nva7lm77niYflsZ7mgKdcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUcmVhc3VyZUJveCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVhc3VyZUJveEZyYW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAuYm9vbTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29tJykucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29tJykucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS55ICs9IHRoaXMudHJlYXN1cmVCb3hTcGVlZFk7XHJcbiAgICAgICAgICAgIHRoaXMudHJlYXN1cmVCb3hJbnN0YW5jZS5vcGFjaXR5ICs9IHRoaXMudHJlYXN1cmVCb3hTcGVlZE9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXAuYm9vbSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvb21TdGVwKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvb21TdGVwID4gNyAqIDIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOi/mOWOn1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib29tU3RlcCA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyDotYvlgLzmloflrZdcclxuICAgICAgICAgICAgICAgIHZhciByYW5kb21JbmRleCA9IH5+X3JhbmRvbSgwLCB0aGlzLm5hbWVMaXN0Lmxlbmd0aCk7IC8vIOazqOaEj++8mk1hdGgucmFuZG9tKCnnu5PmnpzmmK8wIH4gMe+8iOS4jeWMheWQq++8iVxyXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSB0aGlzLm5hbWVMaXN0LnNwbGljZShyYW5kb21JbmRleCwgMSlbMF07IC8vIOazqOaEj+i/meS4qjBcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEluc3RhbmNlLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgLy8g6L+b5YWl5LiL5LiA6Zi25q61XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSBhbmltYXRpb25TdGVwLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvLyAy56eS5ZCO6L+Q5YqoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubW92ZVRvKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwLnRleHQgJiYgdGhpcy50ZXh0T25Nb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZyYW1lKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRGcmFtZSA+IHRoaXMudGV4dER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmt7vliqDljoblj7JcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzLnB1c2gobmV3IFRleHRfMS5Tb2xpZFRleHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMudGV4dEluc3RhbmNlLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy50ZXh0SW5zdGFuY2UueSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0SW5zdGFuY2UuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHRoaXMudGV4dEluc3RhbmNlLmZvbnRTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dEluc3RhbmNlLnRleHQsXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRPbk1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RlcCA9IGFuaW1hdGlvblN0ZXAubm9BbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0SW5zdGFuY2UueCArPSB0aGlzLnRleHRTcGVlZFg7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEluc3RhbmNlLnkgKz0gdGhpcy50ZXh0U3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRJbnN0YW5jZS5mb250U2l6ZSArPSB0aGlzLnRleHRGb250U2l6ZVNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUcmVhc3VyZUJveERvd24ucHJvdG90eXBlLnJlbmRlckhpc3RvcmllcyA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLmhpc3Rvcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVHJlYXN1cmVCb3hEb3duLnByb3RvdHlwZS5yZW5kZXJMZXZlbFRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbFRleHRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJlYXN1cmVCb3hEb3duO1xyXG59KCkpO1xyXG5leHBvcnRzLlRyZWFzdXJlQm94RG93biA9IFRyZWFzdXJlQm94RG93bjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENhbnZhc0ZhY3RvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vU2VuY2UvQ2FudmFzRmFjdG9yeVwiKSk7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb25maWdcIik7XHJcbnZhciBSYXlMb2dvXzEgPSByZXF1aXJlKFwiLi4vU2VuY2UvUmF5TG9nb1wiKTtcclxudmFyIFN0YXRzID0gcmVxdWlyZShcIlN0YXRzLWpzXCIpO1xyXG4vKipcclxuICog5bm25LiN5piv5omA5pyJ6K6+5aSH55qE57uY5Yi25pe26Ze06Ze06ZqU5pivMTAwMC82MCBtcywg5Lul5Y+K5LiK6Z2i5bm25pyo5pyJY2FuY2Vs55u45YWz5pa55rOV77yM5omA5Lul77yM5bCx5pyJ5LiL6Z2i6L+Z5Lu95pu05YWo6Z2i55qE5YW85a655pa55rOV77yaXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcclxuICAgIHZhciB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J107XHJcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93Wyh2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZScpXTtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IC8vIFdlYmtpdOS4reatpOWPlua2iOaWueazleeahOWQjeWtl+WPmOS6hlxyXG4gICAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgIH1cclxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XHJcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0oKSk7XHJcbnZhciBTY2VuZUNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTY2VuZUNvbnRyb2xsZXIob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaXNTaG93U3RhdHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBudWxsO1xyXG4gICAgICAgIHZhciBjYW52YXNGYWN0b3J5ID0gbmV3IENhbnZhc0ZhY3RvcnlfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jYW4gPSBjYW52YXNGYWN0b3J5LmdldENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzRmFjdG9yeS5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5yZXNDb25maWcgPSBvcHRpb25zLnJlc0NvbmZpZztcclxuICAgICAgICB0aGlzLkxvYWRTY2VuZSA9IG9wdGlvbnMuTG9hZFNjZW5lO1xyXG4gICAgICAgIHRoaXMuQ3V0U2NlbmUgPSBvcHRpb25zLkN1dFNjZW5lO1xyXG4gICAgICAgIHRoaXMuTG90dGVyeVNjZW5lID0gb3B0aW9ucy5Mb3R0ZXJ5U2NlbmU7XHJcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5U2hvdyA9IG9wdGlvbnMuTG90dGVyeVNob3c7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hbGxvd092ZXJ0aW1lID0gb3B0aW9ucy5hbGxvd092ZXJ0aW1lIHx8IDYwICogMTAwMDtcclxuICAgICAgICB0aGlzLmxhc3RPcGVyYXRpb25UaW1lID0gbnVsbDtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsb2FkU2NlbmUgPSBuZXcgdGhpcy5Mb2FkU2NlbmUoe1xyXG4gICAgICAgICAgICBjYW46IHRoaXMuY2FuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZEFsbFJlc291cmNlKG9wdGlvbnMucmVzQ29uZmlnLCBmdW5jdGlvbiAobG9hZGVkTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIC8qKiDliqDovb3liqjnlLsgKiovXHJcbiAgICAgICAgICAgIGxvYWRTY2VuZS5zaG93KGxvYWRlZE51bWJlciwgb3B0aW9ucy5yZXNDb25maWcubGVuZ3RoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIC8vIOWunuS+i+WMllxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNTaG93U3RhdHMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7IC8vIFN0YXRzIDog5bin5qOA5p+lXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGF0cy5zaG93UGFuZWwoMSk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF90aGlzLnN0YXRzLmRvbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5YiG5Yir5Yid5aeL5YyWJ+i/h+WcuuWcuuaZrydcclxuICAgICAgICAgICAgX3RoaXMuY3V0U2NlbmVJbnN0YW5jZSA9IG5ldyBSYXlMb2dvXzEuUmF5TG9nbyh7XHJcbiAgICAgICAgICAgICAgICBjYW46IF90aGlzLmNhbixcclxuICAgICAgICAgICAgICAgIG9JbWc6IHJlc291cmNlcy50aWVmYW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOWIneWni+WMliDmir3lpZbmlrnlvI9cclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNob3dJbnN0YW5jZSA9IG5ldyBfdGhpcy5Mb3R0ZXJ5U2hvdyh7XHJcbiAgICAgICAgICAgICAgICBjYW46IF90aGlzLmNhbixcclxuICAgICAgICAgICAgICAgIGhpc3Rvcmllc1g6IDIwMCxcclxuICAgICAgICAgICAgICAgIGhpc3Rvcmllc1k6IDIwMCxcclxuICAgICAgICAgICAgICAgIHByaXplTGV2ZWw6IGNvbmZpZ18xLlBSSVpFX0xFVkVMLFxyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q6IGNvbmZpZ18xLk5BTUVfTElTVCxcclxuICAgICAgICAgICAgICAgIHRyZWFzdXJlQm94OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb0ltZzogcmVzb3VyY2VzLnRyZWFzdXJlQm94LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBvSW1nOiByZXNvdXJjZXMuYm9vbSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLXNob3cnKS5wbGF5KCk7IC8vIFRPRE9cclxuICAgICAgICAgICAgX3RoaXMudGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTaG93U3RhdHMgJiYgX3RoaXMuc3RhdHMuYmVnaW4oKTtcclxuICAgICAgICAgICAgICAgIHZhciBmbGFnID0gX3RoaXMuY3V0U2NlbmVJbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov4flnLrliqjnlLvnu5PmnZ8nLCAndGltZXI6JyArIF90aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDpgJrnn6Xop4Llr5/ogIVcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYW4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJpbmRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1dC1zY2VuZScpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlhbPpl63lvZPliY1cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChfdGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXRTY2VuZUluc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTaG93U3RhdHMgJiYgX3RoaXMuc3RhdHMuZW5kKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDAgLyA2MCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBTY2VuZUNvbnRyb2xsZXIucHJvdG90eXBlLmxvYWRBbGxSZXNvdXJjZSA9IGZ1bmN0aW9uIChjb25maWcsIGxvYWRlZEZuLCBsb2FkZWRBbGxGbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGxvYWRlZE51bWJlciA9IDA7XHJcbiAgICAgICAgLy8g6YCQ5LiA5Yqg6L29XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbmZpZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlc1tjb25maWdbaV0ubmFtZV0gPSBuZXcgSW1hZ2UoKTsgLy8g5Yib5bu65LiA5Liq5ZCM5ZCN55qEa2V5XHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzW2NvbmZpZ1tpXS5uYW1lXS5zcmMgPSBjb25maWdbaV0udXJsOyAvLyDor7fmsYJcclxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbY29uZmlnW2ldLm5hbWVdLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICsrbG9hZGVkTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkRm4gJiYgbG9hZGVkRm4obG9hZGVkTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5bey57uP5YWo6YOo5Yqg6L295a6M5q+VXHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZGVkTnVtYmVyID09PSBjb25maWcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkQWxsRm4gJiYgbG9hZGVkQWxsRm4oX3RoaXMucmVzb3VyY2VzKTsgLy8gY2FsbGJhY2suY2FsbChfdGhpcyk7Ly8gP1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvLyDmt7vliqDkuovku7ZcclxuICAgIFNjZW5lQ29udHJvbGxlci5wcm90b3R5cGUuYmluZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSB0aGlzLnN0YXJ0U2hvdy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudCk7XHJcbiAgICB9O1xyXG4gICAgLy8g56e76Zmk5LqL5Lu2XHJcbiAgICBTY2VuZUNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudCk7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgLy8g566h55CG5oq95aWW5Yqo55S755WM6Z2iXHJcbiAgICBTY2VuZUNvbnRyb2xsZXIucHJvdG90eXBlLnN0YXJ0U2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3V0LXNjZW5lJykucGF1c2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn54K55Ye75LqG54K55Ye75LqL5Lu2Jyk7XHJcbiAgICAgICAgdGhpcy5jYW4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgIHRoaXMubGFzdE9wZXJhdGlvblRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIC8vIOebkeWQrOaTjeS9nFxyXG4gICAgICAgIHRoaXMuY2hlY2tPcGVyYXRpb24oKTtcclxuICAgICAgICB0aGlzLmxvdHRlcnlTY2VuZUluc3RhbmNlID0gbmV3IHRoaXMuTG90dGVyeVNjZW5lKHtcclxuICAgICAgICAgICAgY2FuOiB0aGlzLmNhbixcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltZzogdGhpcy5yZXNvdXJjZXMubmV3WWVhckJnLFxyXG4gICAgICAgICAgICBsYW50ZXJuSW1nOiB0aGlzLnJlc291cmNlcy5uZXdZZWFyTGFudGVybixcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7YgLSDnlJ/miJDmir3lpZbnmoTkurrlkI1cclxuICAgICAgICB0aGlzLmxvdHRlcnlTaG93SW5zdGFuY2UuYmluZEV2ZW50KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy15ZWFyJykucGxheSgpO1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmZyYW1lKys7XHJcbiAgICAgICAgICAgIC8vIOa1i+ivleW8gOWni1xyXG4gICAgICAgICAgICBfdGhpcy5pc1Nob3dTdGF0cyAmJiBfdGhpcy5zdGF0cy5iZWdpbigpO1xyXG4gICAgICAgICAgICAvLyDmir3lpZbnmoTog4zmma9cclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNjZW5lSW5zdGFuY2UucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmxvdHRlcnlTY2VuZUluc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAvLyDmir3lpZbnmoTlsZXnpLpcclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNob3dJbnN0YW5jZS5yZW5kZXJIaXN0b3JpZXMoX3RoaXMuY3R4KTtcclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNob3dJbnN0YW5jZS5yZW5kZXJMZXZlbFRleHQoX3RoaXMuY3R4KTtcclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNob3dJbnN0YW5jZS5yZW5kZXIoX3RoaXMuY3R4KTtcclxuICAgICAgICAgICAgX3RoaXMubG90dGVyeVNob3dJbnN0YW5jZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgLy8g5rWL6K+V5YWz6ZetXHJcbiAgICAgICAgICAgIF90aGlzLmlzU2hvd1N0YXRzICYmIF90aGlzLnN0YXRzLmVuZCgpO1xyXG4gICAgICAgIH0sIDEwMDAgLyA2MCk7XHJcbiAgICAgICAgLy8gIOebkeWQrOaTjeS9nFxyXG4gICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMuY2hhbmdlTGFzdE9wZXJhdGlvblRpbWUuYmluZChfdGhpcykpO1xyXG4gICAgICAgIHRoaXMuY2FuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLmNoYW5nZUxhc3RPcGVyYXRpb25UaW1lLmJpbmQoX3RoaXMpKTtcclxuICAgICAgICAvLyDlj5bmtojnu5HlrppcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XHJcbiAgICB9O1xyXG4gICAgLy8g5b2T5aSE5LqO5oq95aWW5Zy65pmv55qE5pe25YCZ77yM5peg5Lu75L2V5pON5L2c6LaF6L+HbuenkuWQju+8jOWwseS8mui3s+WIsOi/h+a4oeWcuuaZr1xyXG4gICAgU2NlbmVDb250cm9sbGVyLnByb3RvdHlwZS5jaGVja09wZXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjaGVja09wZXJhdGlvblRpbWVyID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5vd1RpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoU2NlbmVDb250cm9sbGVyLmlzT3ZlcnRpbWUobm93VGltZSwgX3RoaXMubGFzdE9wZXJhdGlvblRpbWUsIF90aGlzLmFsbG93T3ZlcnRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoX3RoaXMudGltZXIpO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIF90aGlzLmN1dFNjZW5lSW5zdGFuY2UucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy15ZWFyJykucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXQtc2NlbmUnKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDpgJrnn6Xop4Llr5/ogIVcclxuICAgICAgICAgICAgICAgIF90aGlzLmJpbmRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+W5raI5oq95aWW55qE54K55Ye75LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb3R0ZXJ5U2hvd0luc3RhbmNlLnJlbW92ZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDlhbPpl63mo4Dmn6VcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGNoZWNrT3BlcmF0aW9uVGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVDb250cm9sbGVyLmlzT3ZlcnRpbWUgPSBmdW5jdGlvbiAobm93VGltZSwgbGFzdFRpbWUsIGFsbG93T3ZlcnRpbWUpIHtcclxuICAgICAgICByZXR1cm4gbm93VGltZSAtIGxhc3RUaW1lID49IGFsbG93T3ZlcnRpbWU7XHJcbiAgICB9O1xyXG4gICAgU2NlbmVDb250cm9sbGVyLnByb3RvdHlwZS5jaGFuZ2VMYXN0T3BlcmF0aW9uVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxhc3RPcGVyYXRpb25UaW1lID0gbmV3IERhdGUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2NlbmVDb250cm9sbGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLlNjZW5lQ29udHJvbGxlciA9IFNjZW5lQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIF93ID0gd2luZG93O1xyXG52YXIgX2IgPSBkb2N1bWVudC5ib2R5OyAvLyDvv73vv73vv73vv71odG1sIGRvbe+/vdC177+9Ym9kee+/vdq177+9IO+/ve+/vTxib2R5PlxyXG52YXIgX2QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8vIO+/ve+/ve+/ve+/vWh0bWwgZG9t77+90LXvv71yb290IO+/vdq177+9IO+/ve+/vTxodG1sPlxyXG4vLyBzY3JlZW4gaGVscGVyXHJcbnZhciBfc2NyZWVuSW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KDAsIF93LmlubmVyV2lkdGggfHwgX2QuY2xpZW50V2lkdGggfHwgX2IuY2xpZW50V2lkdGggfHwgMCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoMCwgX3cuaW5uZXJIZWlnaHQgfHwgX2QuY2xpZW50SGVpZ2h0IHx8IF9iLmNsaWVudEhlaWdodCB8fCAwKTtcclxuICAgIHZhciBzY3JvbGx4ID0gTWF0aC5tYXgoMCwgX3cucGFnZVhPZmZzZXQgfHwgX2Quc2Nyb2xsTGVmdCB8fCBfYi5zY3JvbGxMZWZ0IHx8IDApIC0gKF9kLmNsaWVudExlZnQgfHwgMCk7XHJcbiAgICB2YXIgc2Nyb2xseSA9IE1hdGgubWF4KDAsIF93LnBhZ2VZT2Zmc2V0IHx8IF9kLnNjcm9sbFRvcCB8fCBfYi5zY3JvbGxUb3AgfHwgMCkgLSAoX2QuY2xpZW50VG9wIHx8IDApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgcmF0aW86IHdpZHRoIC8gaGVpZ2h0LFxyXG4gICAgICAgIGNlbnRlclg6IHdpZHRoIC8gMixcclxuICAgICAgICBjZW50ZXJZOiBoZWlnaHQgLyAyLFxyXG4gICAgICAgIHNjcm9sbFg6IHNjcm9sbHgsXHJcbiAgICAgICAgc2Nyb2xsWTogc2Nyb2xseVxyXG4gICAgfTtcclxufTtcclxudmFyIENhbnZhc0ZhY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNGYWN0b3J5KGRvbSkge1xyXG4gICAgICAgIGlmIChkb20gPT09IHZvaWQgMCkgeyBkb20gPSBkb2N1bWVudC5ib2R5OyB9XHJcbiAgICAgICAgdGhpcy5fZG9tID0gbnVsbDsgLy8gVE9ETyDvv73vv73vv73vv73Tpu+/ve+/ve+/ve+/vcqyw7Tvv73vv73vv73No++/ve+/ve+/vVxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZG9tID0gZG9tOyAvLyDvv73vv73WtVxyXG4gICAgICAgIHRoaXMuX2luaXQoKTsgLy8g77+977+9yrzvv73vv71cclxuICAgICAgICAvLyDvv73vv73vv71jYW52YXPvv73vv73vv73vv73vv73vv73vv73vv73vv73vv71kaXbvv73vv73vv73vv73vv73vv71ib2R577+977+977+977+9w7Tvv73vv73Squ+/ve+/vdak77+977+9Ym9kec2syrHvv73Ese+/vcS077+90KHvv73vv71cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChkb20gPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl93aW5kb3dSZXNpemUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g77+977+977+977+9Y2FudmFzXHJcbiAgICBDYW52YXNGYWN0b3J5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1wicG9zaXRpb25cIl0gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcIm1hcmdpblwiXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9jYW52YXMuc3R5bGVbXCJwYWRkaW5nXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcImJvcmRlclwiXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9jYW52YXMuc3R5bGVbXCJvdXRsaW5lXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcImxlZnRcIl0gPSBcIjBcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlW1widG9wXCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHZhciBfZG9tSW5mbyA9IHRoaXMuX2dldERvbUluZm8oKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gX2RvbUluZm9bJ3dpZHRoJ107XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBfZG9tSW5mb1snaGVpZ2h0J107XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZVtcInotaW5kZXhcIl0gPSBcIi0xXCI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5fY2FudmFzLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiI2NjY1wiO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuaWQgPSBcImJnQ2FudmFzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgdGhpcy5fZG9tLmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbnZhcyBDb250ZXh0IEVycm9yOiBcIiArIGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8g77+977+9yKHvv73vv73XsGNhbnZhc++/ve+/ve+/ve+/ve+/vcS477+977+92rXvv73vv73vv73vv73do++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuX2dldERvbUluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fZG9tLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvLyDvv73mtLDvv73aseS7r++/ve+/ve+/veS7u1xyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuX3dpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3dpbmRvdyA9IF9zY3JlZW5JbmZvKCk7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gX3dpbmRvd1snd2lkdGgnXTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gX3dpbmRvd1snaGVpZ2h0J107XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH07XHJcbiAgICAvLyDvv73huanvv73isr/vv73vv73IoWNhbnZhc9Sq77+977+9XHJcbiAgICBDYW52YXNGYWN0b3J5LnByb3RvdHlwZS5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcztcclxuICAgIH07XHJcbiAgICAvLyDvv73huanvv73isr/Kue+/ve+/vWNhbnZhc++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgQ2FudmFzRmFjdG9yeS5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzRmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzRmFjdG9yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lXCIpKTtcclxudmFyIFJheV8xID0gcmVxdWlyZShcIi4uL0VsZW1lbnQvUmF5XCIpO1xyXG4vKipcclxuICog77+977+9yKHSu++/ve+/vc28xqzvv73vv73vv73vv73PolxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKiAgICAgIG9JbWdcclxuICogICAgICB3aWR0aFxyXG4gKiAgICAgIGhlaWdodFxyXG4gKi9cclxuZnVuY3Rpb24gX2dldEltYWdlRGF0YShvcHRpb25zKSB7XHJcbiAgICB2YXIgb0ltZyA9IG9wdGlvbnMub0ltZztcclxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgNDAwO1xyXG4gICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0OyAvLyDDu++/ve+/vcSs77+977+91rVcclxuICAgIC8vIO+/ve+/ve+/ve+/vWNhbnZhc++/ve+/ve+/ve+/ve+/ve+/vcSj77+977+977+977+977+977+977+9yr7vv73vv71cclxuICAgIHZhciBjYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBjdHggPSBjYW4uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbi53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FuLmhlaWdodCA9IGhlaWdodCB8fCBjYW4ud2lkdGggKiBvSW1nLm5hdHVyYWxIZWlnaHQgLyBvSW1nLm5hdHVyYWxXaWR0aDtcclxuICAgIC8vXHJcbiAgICBjdHguZHJhd0ltYWdlKG9JbWcsIDAsIDAsIG9JbWcubmF0dXJhbFdpZHRoLCBvSW1nLm5hdHVyYWxIZWlnaHQsIDAsIDAsIGNhbi53aWR0aCwgY2FuLmhlaWdodCk7XHJcbiAgICAvLyDvv73vv73Ioe+/ve+/ve+/vVxyXG4gICAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FuLndpZHRoLCBjYW4uaGVpZ2h0KTtcclxufVxyXG52YXIgUmF5TG9nbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSYXlMb2dvLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmF5TG9nbyhvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5vSW1nID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5pbWFnZURhdGEgPSBbXTtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ2FuID0gbnVsbDtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ3R4ID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5zdGFydFggPSAwO1xyXG4gICAgICAgIF90aGlzLnN0YXJ0WSA9IDA7XHJcbiAgICAgICAgX3RoaXMucmF5cyA9IFtdO1xyXG4gICAgICAgIF90aGlzLnRpbWVyID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5vSW1nID0gb3B0aW9ucy5vSW1nIHx8IG51bGw7XHJcbiAgICAgICAgX3RoaXMuaW1hZ2VEYXRhID0gX2dldEltYWdlRGF0YSh7IG9JbWc6IF90aGlzLm9JbWcsIHdpZHRoOiAzNTAsIH0pO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vWNhbnZhc1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDdHggPSBfdGhpcy52aXJ0dWFsQ2FuLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBfdGhpcy52aXJ0dWFsQ2FuLndpZHRoID0gX3RoaXMuaW1hZ2VEYXRhLndpZHRoO1xyXG4gICAgICAgIF90aGlzLnZpcnR1YWxDYW4uaGVpZ2h0ID0gX3RoaXMuaW1hZ2VEYXRhLmhlaWdodDtcclxuICAgICAgICAvLyDvv73vv73vv73vv73NvMas17zvv73vv73vv73Fte+/vc6777+977+9XHJcbiAgICAgICAgX3RoaXMuc3RhcnRYID0gKF90aGlzLmNhbi53aWR0aCAtIF90aGlzLmltYWdlRGF0YS53aWR0aCkgLyAyO1xyXG4gICAgICAgIF90aGlzLnN0YXJ0WSA9IChfdGhpcy5jYW4uaGVpZ2h0IC0gX3RoaXMuaW1hZ2VEYXRhLmhlaWdodCkgLyAyO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vd+1xL3vv73vv73vv73Jq1xyXG4gICAgICAgIHZhciByYXlDb2xvcjEgPSBcIiNhYmNkZWZcIjtcclxuICAgICAgICB2YXIgcmF5Q29sb3IyID0gXCIjMTI3OGRlXCI7XHJcbiAgICAgICAgX3RoaXMuZ3JhZGllbnQgPSBfdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoX3RoaXMuY2FuLndpZHRoIC8gMiwgX3RoaXMuY2FuLmhlaWdodCAvIDIsIDAsIF90aGlzLmNhbi53aWR0aCAvIDIsIF90aGlzLmNhbi5oZWlnaHQgLyAyLCBfdGhpcy5pbWFnZURhdGEud2lkdGgpO1xyXG4gICAgICAgIF90aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCByYXlDb2xvcjEpO1xyXG4gICAgICAgIF90aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCByYXlDb2xvcjIpO1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgIF90aGlzLmNyZWF0ZVJheXMoKTtcclxuICAgICAgICBfdGhpcy5zaG93SGVpZ2h0ID0gX3RoaXMuc3RhcnRZO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJheUxvZ28ucHJvdG90eXBlLmNyZWF0ZVJheXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IGkgLyA0OyAvLyDDvzTvv73vv73Wte+/ve+/ve+/ve+/ve+/ve+/vdK777+977+977+977+977+977+9XHJcbiAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgM107XHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ID49IDIwMCkgeyAvLyDNuO+/ve+/ve+/ve+/ve+/vdC277+9XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IG51bSAlIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgdGhpcy5zdGFydFg7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IH5+KG51bSAvIHRoaXMuaW1hZ2VEYXRhLndpZHRoKSArIHRoaXMuc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgaWYgKHggJSAyICYmIHkgJSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXlzLnB1c2gobmV3IFJheV8xLlJheSh4LCB5LCB0aGlzLmltYWdlRGF0YS53aWR0aCwgdGhpcy5pbWFnZURhdGEuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmF5TG9nby5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0hlaWdodCArPSA2O1xyXG4gICAgfTtcclxuICAgIFJheUxvZ28ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuID0gMDtcclxuICAgICAgICB0aGlzLnNob3dIZWlnaHQgPSBNYXRoLm1pbih0aGlzLnNob3dIZWlnaHQsIHRoaXMuaW1hZ2VEYXRhLmhlaWdodCArIHRoaXMuc3RhcnRZKTtcclxuICAgICAgICAvLyDvv73vv73vv71cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzBmMGYwZic7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW4ud2lkdGgsIHRoaXMuY2FuLmhlaWdodCk7XHJcbiAgICAgICAgLy8g77+977+9zbxcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy52aXJ0dWFsQ2FuLCAwLCAwLCB0aGlzLnNob3dIZWlnaHQsIHRoaXMudmlydHVhbENhbi5oZWlnaHQsIHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgdGhpcy5zaG93SGVpZ2h0LCB0aGlzLnZpcnR1YWxDYW4uaGVpZ2h0KTsgLy8g77+977+977+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgLy8g77+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5ncmFkaWVudDtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDAuMjsgLy8g77+977+977+977+977+937Xvv73vv73vv73Jq1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJheXNbaV0ueSA8IHRoaXMuc2hvd0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmF5c1tpXS5oID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJheXNbaV0ucmVuZGVyKHRoaXMuY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJheXNbaV0udXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICArK2xlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpcnR1YWxDdHguZmlsbFN0eWxlID0gJyMxMjc4ZGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlydHVhbEN0eC5maWxsUmVjdCh0aGlzLnJheXNbaV0ueCAtIHRoaXMuc3RhcnRYLCB0aGlzLnJheXNbaV0ueSAtIHRoaXMuc3RhcnRZLCAxLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgcmV0dXJuIGxlbiA8IHRoaXMucmF5cy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJheUxvZ287XHJcbn0oU2NlbmVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuUmF5TG9nbyA9IFJheUxvZ287XHJcbnZhciBMYW50ZXJuXzEgPSByZXF1aXJlKFwiLi4vRWxlbWVudC9MYW50ZXJuXCIpO1xyXG52YXIgX3JhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cclxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG52YXIgTmV3WWVhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhOZXdZZWFyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTmV3WWVhcihvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kSW1nID0gb3B0aW9ucy5iYWNrZ3JvdW5kSW1nO1xyXG4gICAgICAgIF90aGlzLmxhbnRlcm5JbWcgPSBvcHRpb25zLmxhbnRlcm5JbWc7XHJcbiAgICAgICAgX3RoaXMubnVtID0gb3B0aW9ucy5udW0gfHwgNjA7XHJcbiAgICAgICAgX3RoaXMubGFudGVybnMgPSBbXTtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBfdGhpcy5jcmVhdGVMYW50ZXJucygpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgTmV3WWVhci5wcm90b3R5cGUuY3JlYXRlTGFudGVybnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jYW4ud2lkdGggLyB0aGlzLm51bSAqIGkgKyBfcmFuZG9tKC01MCwgNTApO1xyXG4gICAgICAgICAgICB2YXIgeSA9IF9yYW5kb20oLTEwLCAxMCk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbGFudGVybjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9JbWc6IHRoaXMubGFudGVybkltZyxcclxuICAgICAgICAgICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogX3JhbmRvbSgtMTAsIDEwKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZVNwZWVkOiBfcmFuZG9tKDAuMDUsIDAuMSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmliYm9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBfcmFuZG9tKDEwMCwgMTUwKSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNkZmRjMTUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMS41LFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEFscGhhOiAwLjgsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMubGFudGVybnMucHVzaChuZXcgTGFudGVybl8xLkxhbnRlcm4ob3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOZXdZZWFyLnByb3RvdHlwZS5zZXRCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWcsIDAsIDAsIHRoaXMuYmFja2dyb3VuZEltZy5uYXR1cmFsV2lkdGgsIHRoaXMuYmFja2dyb3VuZEltZy5uYXR1cmFsSGVpZ2h0LCAwLCAwLCB0aGlzLmNhbi53aWR0aCwgdGhpcy5jYW4uaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBOZXdZZWFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g77+977+977+977+9XHJcbiAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgLy8gw7/vv73vv73vv73vv73vv73vv71cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5sYW50ZXJucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJlbmRlcih0aGlzLmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyDvv73vv73KsdC077+977+9XHJcbiAgICB9O1xyXG4gICAgTmV3WWVhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxhbnRlcm5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIM28xqzvv73ktq9cclxuICAgICAgICAgICAgaWYgKHRoaXMubGFudGVybnNbaV0ubGFudGVybi5hbmdsZSA8PSAtMTUgfHwgdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmFuZ2xlID49IDE1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGVTcGVlZCA9IC10aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGVTcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGUgKz0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmFuZ2xlU3BlZWQ7XHJcbiAgICAgICAgICAgIC8vIO+/vdC077+977+95LavXHJcbiAgICAgICAgICAgIHRoaXMubGFudGVybnNbaV0uYmV0YSsrOyAvLyBNYXRoLnNpbu+/ve+/vdOm77+977+9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCByaWJib25zTGVuZ3RoID0gdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zLmxlbmd0aDsgaiA8IHJpYmJvbnNMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLmhlaWdodCA/IHRoaXMubGFudGVybnNbal0ubGFudGVybi5oZWlnaHQgOiB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4ud2lkdGggKiB0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4ub0ltZy5uYXR1cmFsSGVpZ2h0IC8gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLm9JbWcubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgLy8g77+9xLHvv73vv73vv73vv73Qte+/vVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLnN0YXJ0UG9pbnQueCA9IHRoaXMubGFudGVybnNbaV0ubGFudGVybi54ICsgTWF0aC5jb3MoTWF0aC5QSSAvIDE4MCAqICh0aGlzLmxhbnRlcm5zW2ldLmxhbnRlcm4uYW5nbGUgKyA5MCkpICogZGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC55ID0gdGhpcy5sYW50ZXJuc1tpXS5sYW50ZXJuLnkgKyBNYXRoLnNpbihNYXRoLlBJIC8gMTgwICogKHRoaXMubGFudGVybnNbaV0ubGFudGVybi5hbmdsZSArIDkwKSkgKiBkaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uY29udHJvbFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLmVuZFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54O1xyXG4gICAgICAgICAgICAgICAgLy8g77+92bjEse+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLmVuZFBvaW50LnggPSB0aGlzLmxhbnRlcm5zW2ldLnJpYmJvbnNbal0uc3RhcnRQb2ludC54ICsgTWF0aC5zaW4odGhpcy5sYW50ZXJuc1tpXS5iZXRhICogdGhpcy5sYW50ZXJuc1tpXS5yaWJib25zW2pdLnNwZWVkKSAqIHRoaXMubGFudGVybnNbaV0ucmliYm9uc1tqXS5yYW5nZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTmV3WWVhcjtcclxufShTY2VuZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5OZXdZZWFyID0gTmV3WWVhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2NlbmUob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2FuID0gb3B0aW9ucy5jYW47XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbi5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FuUmVjdCA9IHRoaXMuY2FuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjZW5lXCIpKTtcclxudmFyIFRleHRfMSA9IHJlcXVpcmUoXCIuLi9FbGVtZW50L1RleHRcIik7XHJcbnZhciBUZXh0TG9hZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0TG9hZGluZywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHRMb2FkaW5nKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xyXG4gICAgICAgIHZhciBsb2FkaW5nVGV4dE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHg6IF90aGlzLmNhbi53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IF90aGlzLmNhbi5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhYmNkZWYnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMudGV4dCA9IG5ldyBUZXh0XzEuU29saWRUZXh0KGxvYWRpbmdUZXh0T3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVGV4dExvYWRpbmcucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAobG9hZGVkTnVtYmVyLCBhbGxOdW1iZXIpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICfotYTmupDliqDovb3kuK0uLi4nICsgJyAg77yIJyArIGxvYWRlZE51bWJlciArICcvJyArIGFsbE51bWJlciArICfvvIknO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjMGYwZjBmJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbi53aWR0aCwgdGhpcy5jYW4uaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0LnJlbmRlcih0aGlzLmN0eCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHRMb2FkaW5nO1xyXG59KFNjZW5lXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLlRleHRMb2FkaW5nID0gVGV4dExvYWRpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHwg5aWW5ZOB562J57qn5YiG5biDXHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydHMuUFJJWkVfTEVWRUwgPSBbXHJcbiAgICBbMV0sXHJcbiAgICBbMl0sXHJcbiAgICBbM10sXHJcbiAgICBbNV0sXHJcbl07XHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHwg5ZCN5Y2V5YiX6KGoXHJcbi8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydHMuTkFNRV9MSVNUID0gW1xyXG4gICAgJ+e9l+WPr+aIkCcsXHJcbiAgICAn6LW15pifJyxcclxuICAgICflkLTkv4onLFxyXG4gICAgJ+eOi+a1t+a2mycsXHJcbiAgICAn5byg5by6JyxcclxuICAgICfpmoblsKcnLFxyXG4gICAgJ+W8oOS4iScsXHJcbiAgICAn5p2O5ZubJyxcclxuICAgICfnjovkupQnLFxyXG4gICAgJ+Wtmeato+S5iScsXHJcbiAgICAn5YiY5b635Y2OJyxcclxuXTtcclxuLy8gKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gfCDlkI3ljZXliJfooahcclxuLy8gKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0cy5SRVNPVVJDRV9DT05GSUcgPSB7XHJcbiAgICBpbWFnZTogW1xyXG4gICAgICAgIHsgbmFtZTogJ3RpZWZhbicsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvc2NlbmUvY3V0L3RpZWZhbi9sb2dvLnBuZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbmV3WWVhckJnJywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy9zY2VuZS9sb3R0ZXJ5L25ld195ZWFyL2JnLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbmV3WWVhckxhbnRlcm4nLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3NjZW5lL2xvdHRlcnkvbmV3X3llYXIvbGFudGVybl8xLnBuZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndHJlYXN1cmVCb3gnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3NjZW5lL2xvdHRlcnkvbmV3X3llYXIvdHJlYXN1cmVCb3gucG5nJywgfSxcclxuICAgICAgICB7IG5hbWU6ICdib29tJywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy9zY2VuZS9sb3R0ZXJ5L25ld195ZWFyL2Jvb20ucG5nJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MScsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICgxKS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3QyJywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDIpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDMnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMykuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0NCcsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICg0KS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3Q1JywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDUpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDYnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoNikuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0NycsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICg3KS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3Q4JywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDgpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDknLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoOSkuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MTAnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMTApLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDExJywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDExKS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3QxMicsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICgxMikuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MTMnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMTMpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDE0JywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDE0KS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3QxNScsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICgxNSkuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MTYnLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMTYpLmpwZycsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndGVzdDE3JywgdXJsOiAnLi9hc3NldHMvcmVzL2ltYWdlcy90ZW1wL2EgKDE3KS5qcGcnLCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3Rlc3QxOCcsIHVybDogJy4vYXNzZXRzL3Jlcy9pbWFnZXMvdGVtcC9hICgxOCkuanBnJywgfSxcclxuICAgICAgICB7IG5hbWU6ICd0ZXN0MTknLCB1cmw6ICcuL2Fzc2V0cy9yZXMvaW1hZ2VzL3RlbXAvYSAoMTkpLmpwZycsIH0sXHJcbiAgICBdLFxyXG4gICAgYXVkaW86IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdvcGVuLXNob3cnLFxyXG4gICAgICAgICAgICB1cmw6ICcuL3Jlcy9hdWRpby9vcGVuLXNob3cubXAzJyxcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XHJcbnZhciBTY2VuZUNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL2FwcC9Mb3R0ZXJ5L1NjZW5lQ29udHJvbGxlci9TY2VuZUNvbnRyb2xsZXJcIik7XHJcbnZhciBUZXh0TG9hZGluZ18xID0gcmVxdWlyZShcIi4vYXBwL0xvdHRlcnkvU2VuY2UvVGV4dExvYWRpbmdcIik7XHJcbnZhciBSYXlMb2dvXzEgPSByZXF1aXJlKFwiLi9hcHAvTG90dGVyeS9TZW5jZS9SYXlMb2dvXCIpO1xyXG52YXIgVHJlYXN1cmVCb3hEb3duXzEgPSByZXF1aXJlKFwiLi9hcHAvTG90dGVyeS9Mb3R0ZXJ5L1RyZWFzdXJlQm94RG93blwiKTtcclxudmFyIGNvbmZpZyA9IGNvbmZpZ18xLlJFU09VUkNFX0NPTkZJRy5pbWFnZTtcclxudmFyIHNjZW5lQ29udHJvbGxlciA9IG5ldyBTY2VuZUNvbnRyb2xsZXJfMS5TY2VuZUNvbnRyb2xsZXIoe1xyXG4gICAgcmVzQ29uZmlnOiBjb25maWcsXHJcbiAgICBMb2FkU2NlbmU6IFRleHRMb2FkaW5nXzEuVGV4dExvYWRpbmcsXHJcbiAgICBDdXRTY2VuZTogUmF5TG9nb18xLlJheUxvZ28sXHJcbiAgICBMb3R0ZXJ5U2NlbmU6IFJheUxvZ29fMS5OZXdZZWFyLFxyXG4gICAgTG90dGVyeVNob3c6IFRyZWFzdXJlQm94RG93bl8xLlRyZWFzdXJlQm94RG93bixcclxuICAgIGFsbG93T3ZlcnRpbWU6IDEwICogMTAwMCxcclxuICAgIGlzU2hvd1N0YXRzOiBmYWxzZSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=