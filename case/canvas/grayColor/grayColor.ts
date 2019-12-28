namespace cyber {



    // +----------------------------------------------------------------------
    // | Img: 获取图片信息
    // +----------------------------------------------------------------------
    export class Img {
        public can: any;
        public ctx: any;
        public oImg: any;
        constructor () {
            this.init();
        }
        public init () {
            this.can = document.createElement('canvas');
            this.ctx = this.can.getContext('2d');
        }
        /**
         * @param options
         *      src: 图片路径
         *      width: 期望以 什么样的宽，高来显示图片
         *      height:
         * @param callback
         */
        public getInfo (options, callback) {
            let _this = this;
            // 获取图片信息
            this.oImg = new Image();
            this.oImg.src = options.src;
            this.oImg.onload = function () {
                // 设置canvas宽高
                _this.can.width = options.width;
                _this.can.height = options.height || options.width * _this.oImg.naturalHeight / _this.oImg.naturalWidth;
                // 绘制图像
                _this.ctx.drawImage(this, 0, 0, _this.oImg.naturalWidth, _this.oImg.naturalHeight, 0, 0, _this.can.width, _this.can.height);
                // 获取图像的像素信息，并根据像素信息重新绘制出粒子效果轮廓图，
                // canvas有一个叫getImageData的接口，通过该接口可以获取到画布上指定位置的全部像素的数据
                let imageData = _this.ctx.getImageData(0, 0, _this.oImg.naturalWidth, _this.oImg.naturalHeight);// 注意获取数据的范围
                // 回调函数
                callback && callback(imageData);
            };
        }
        // 计算并保存坐标
        public calculate (imageData) {
            let result = [];
            for (let i = 0; i < this.oImg.width; i++) {
                for (let j = 0; j < this.oImg.height; j++) {
                    /**
                     * 计算(i, j)在数组中的R的坐标值
                     * # # # . . . .
                     * # # # . . . .
                     * # # # . . . .
                     * . . . . . . .
                     * . . . . . . .
                     * . . . . . . .
                     */
                    let pos = (j * this.oImg.width + i) * 4;
                    if (imageData[pos+3] > 100) {// 判断透明度
                        let particle = {
                            x: i,
                            y: j,
                        };
                        result.push(particle);
                    }
                }
            }
            return result;
        }
    }


}