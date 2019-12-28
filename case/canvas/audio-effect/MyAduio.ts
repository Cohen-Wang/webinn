namespace cyber {

    interface Element {
        render (ctx: any): void;
    }

    // +--------------------------------------------------------------------
    // | 音频
    // +--------------------------------------------------------------------
    class Rect {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        public color: string;
        constructor (options) {
            this.x = options.x || 0;
            this.y = options.y || 0;
            this.width = options.width || 100;
            this.height = options.height || 100;
            this.color = options.color || '#f00';
        }
    }
    export class SolidRect extends Rect implements Element {
        constructor (options) {
            super(options)
        }
        render (ctx: any): void {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }




    // +--------------------------------------------------------------------
    // | 音频
    // +--------------------------------------------------------------------
    export class MyAduio {
        public audioContext: any;
        public gainNode: any;
        public analyser: any;
        constructor (options: any) {
            // this.audioContext = new (window.AudioContext || window.webkitAudioContext) ();
            this.audioContext = new AudioContext();// TODO
            //
            this.gainNode = this.audioContext[this.audioContext.createGain ? 'createGain' : 'createGainNode'] ();
            this.gainNode.connect(this.audioContext.destination);// 直接链接
            //
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = options.fftSize || 512;// 设置fft属性大小
            this.analyser.connect(this.gainNode);// 直接链接
        }

        /**
         * TODO  相当不完美
         */
        public getInfo (url, callback): void {
            let _this = this;
            const xhr = new XMLHttpRequest();
            xhr.abort();
            xhr.open('GET', url);
            // 表示二进制数据的缓冲区
            // 可以理解为服务器返回的音频，视频数据是以二进制数据形式返回。
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                //
                let buffer = xhr.response;
                //
                _this.audioContext.decodeAudioData(buffer, function (buffer) {
                    // 创建对象
                    let bufferSource = _this.audioContext.createBufferSource();
                    // 绑定属性
                    bufferSource.buffer = buffer;
                    // 链接destination属性
                    //bufferSource.connect(audioContext.destination);
                    //bufferSource.connect(gainNode);
                    bufferSource.connect(_this.analyser);
                    // 播放
                    //bufferSource.start(0);
                    bufferSource[bufferSource.start ? 'start' : 'noteOn'] (0);
                    //
                    //visualizer();// 外面调用，这里每当换音乐的时候，就会反复调用requestAnimationFrame
                    callback && callback(_this.analyser);
                }, function (err) {
                    console.log(err);
                })
            };
            xhr.send();
        }
    }
}