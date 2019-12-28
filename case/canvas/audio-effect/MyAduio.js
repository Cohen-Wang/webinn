var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cyber;
(function (cyber) {
    // +--------------------------------------------------------------------
    // | 音频
    // +--------------------------------------------------------------------
    var Rect = /** @class */ (function () {
        function Rect(options) {
            this.x = options.x || 0;
            this.y = options.y || 0;
            this.width = options.width || 100;
            this.height = options.height || 100;
            this.color = options.color || '#f00';
        }
        return Rect;
    }());
    var SolidRect = /** @class */ (function (_super) {
        __extends(SolidRect, _super);
        function SolidRect(options) {
            return _super.call(this, options) || this;
        }
        SolidRect.prototype.render = function (ctx) {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        return SolidRect;
    }(Rect));
    cyber.SolidRect = SolidRect;
    // +--------------------------------------------------------------------
    // | 音频
    // +--------------------------------------------------------------------
    var MyAduio = /** @class */ (function () {
        function MyAduio(options) {
            // this.audioContext = new (window.AudioContext || window.webkitAudioContext) ();
            this.audioContext = new AudioContext(); // TODO
            //
            this.gainNode = this.audioContext[this.audioContext.createGain ? 'createGain' : 'createGainNode']();
            this.gainNode.connect(this.audioContext.destination); // 直接链接
            //
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = options.fftSize || 512; // 设置fft属性大小
            this.analyser.connect(this.gainNode); // 直接链接
        }
        /**
         * TODO  相当不完美
         */
        MyAduio.prototype.getInfo = function (url, callback) {
            var _this = this;
            var xhr = new XMLHttpRequest();
            xhr.abort();
            xhr.open('GET', url);
            // 表示二进制数据的缓冲区
            // 可以理解为服务器返回的音频，视频数据是以二进制数据形式返回。
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                //
                var buffer = xhr.response;
                //
                _this.audioContext.decodeAudioData(buffer, function (buffer) {
                    // 创建对象
                    var bufferSource = _this.audioContext.createBufferSource();
                    // 绑定属性
                    bufferSource.buffer = buffer;
                    // 链接destination属性
                    //bufferSource.connect(audioContext.destination);
                    //bufferSource.connect(gainNode);
                    bufferSource.connect(_this.analyser);
                    // 播放
                    //bufferSource.start(0);
                    bufferSource[bufferSource.start ? 'start' : 'noteOn'](0);
                    //
                    //visualizer();// 外面调用，这里每当换音乐的时候，就会反复调用requestAnimationFrame
                    callback && callback(_this.analyser);
                }, function (err) {
                    console.log(err);
                });
            };
            xhr.send();
        };
        return MyAduio;
    }());
    cyber.MyAduio = MyAduio;
})(cyber || (cyber = {}));
