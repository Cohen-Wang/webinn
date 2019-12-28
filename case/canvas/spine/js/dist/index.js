/* 标准键盘布局
┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
│Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
└───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
│~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
│ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
│ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
│ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
│ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
└─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
*/

let vm = new Vue({

    /**
     * el
     */
    el : '#spine',

    /**
     * data
     */
    data : {
        //
        FILESSUFFIX : ['png', 'atlas', 'json'],// 文件后缀名

        // 存储
        json : {},
        animations : [],

    },

    /**
     * methods
     */
    methods : {

        // 加载文件
        uploadFiles : function (event) {
            let oEvent = event || window.event;
            let oFiles = oEvent.target.files;
            let _this = this;
            // 判断有无文件
            console.log(oFiles[0]);
            if (!oFiles) return;
            // 判断是否刚好上传了3张图片
            if (oFiles.length !== 3) {
                alert('请上传和spine相关的3份文件，"atlas", "png", "json"');
                return;
            }
            // 判断文件名称 和 文件格式
            for (let i = 0; i < oFiles.length; i++) {

                // 判断文件名称
                for (let j = i + 1; j < oFiles.length; j++) {
                    if (cyber.getFilename(oFiles[i].name) !== cyber.getFilename(oFiles[j].name)) {
                        alert('你上传的文件名称不一致，请审查');
                        return;
                    }
                }

                // 判断文件格式
                // for (let k = 0; k < this.FILESSUFFIX.length; i++) {
                //     if (cyber.getSuffix(oFiles[i].name) === this.FILESSUFFIX[k]) {
                //         console.log(cyber.getSuffix(oFiles[i].name));
                //         console.log(this.FILESSUFFIX[k]);
                //     }
                // }

                // 开始执行
                // json
                if (cyber.getSuffix(oFiles[i].name) === 'json') {
                    let reader = new FileReader();
                    reader.readAsText(oFiles[i], 'utf-8');
                    reader.onload = function () {
                        // 赋值json
                        _this.json = JSON.parse(this.result);
                        // 赋值animations
                        for (let i in _this.json.animations) {
                           if (_this.json.animations.hasOwnProperty(i)) {
                               _this.animations.push(i);
                           }
                        }
                    }
                }
                // atlas
                if (cyber.getSuffix(oFiles[i].name) === 'atlas') {
                    let reader = new FileReader();
                    reader.readAsText(oFiles[i], 'utf-8');
                    reader.onload = function () {
                       //console.log(this.result);
                    }
                }
                // png
                if (cyber.getSuffix(oFiles[i].name) === 'png') {
                    let reader = new FileReader();
                    reader.readAsDataURL(oFiles[i]);
                    reader.onload = function () {
                        let oImg = new Image();
                        oImg.src = this.result;
                    }
                }
            }
            this.do();
        },

        // 设置canvas 大小
        setCanvasSize : function () {
            this.can.width = this.can.parentNode.offsetWidth;
            this.can.height = this.can.parentNode.offsetHeight;
        },

        //
        do : function () {
            console.log('do');
            //
            let lastFrameTime = Date.now() / 1000;
            //
            let can = document.getElementById("canvas");
            let ctx = can.getContext("2d");

            //
            let assetManager;
            let skeleton;
            let state;
            let bounds;
            //
            let skeletonRenderer;// 骨骼渲染器
            //
            let skelName = "spineboy";
            let animName = "idle";


            init();
            function init () {
                // 骨骼渲染器
                skeletonRenderer = new spine.canvas.SkeletonRenderer(ctx);
                skeletonRenderer.debugRendering = true;// 支持调试渲染
                skeletonRenderer.triangleRendering = false;// 支持三角渲染, 支持网页。
                // 资源管理
                assetManager = new spine.canvas.AssetManager();
                assetManager.loadText("res/" + skelName + ".json");
                assetManager.loadText("res/" + skelName + ".atlas");
                assetManager.loadTexture("res/" + skelName + ".png");
                //
                requestAnimationFrame(load);
            }

            /**
             *
             */
            function load () {
                if (assetManager.isLoadingComplete()) {
                    let data = loadSkeleton(skelName, animName, "default");
                    skeleton = data.skeleton;
                    state = data.state;
                    bounds = data.bounds;
                    requestAnimationFrame(render);
                } else {
                    requestAnimationFrame(load);
                }
            }

            /**
             * 加载骨架
             */
            function loadSkeleton (name, initialAnimation, skin) {
                // 皮肤
                if (skin === undefined) skin = "default";

                // 加载atlas
                let atlas = new spine.TextureAtlas(assetManager.get("res/" + name + ".atlas"), function(path) {
                    return assetManager.get("res/" + path);
                });
                // 创建一个AtlasAttachmentLoader
                let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
                // 实例化SkeletonJson用于解析.json文件
                let skeletonJson = new spine.SkeletonJson(atlasLoader);

                // 在解析中设置大小比例用于应用；parse the file, 创建一个骨架
                let skeletonData = skeletonJson.readSkeletonData(assetManager.get("res/" + name + ".json"));
                let skeleton = new spine.Skeleton(skeletonData);
                skeleton.flipY = true;
                //
                let bounds = calculateBounds(skeleton);
                skeleton.setSkinByName(skin);

                // 创建一个动画状态, 设置初始化动画循环；
                let animationState = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
                animationState.setAnimation(0, initialAnimation, true);
                animationState.addListener({
                    event: function(trackIndex, event) {
                        // console.log("Event on track " + trackIndex + ": " + JSON.stringify(event));
                    },
                    complete: function(trackIndex, loopCount) {
                        // console.log("Animation on track " + trackIndex + " completed, loop count: " + loopCount);
                    },
                    start: function(trackIndex) {
                        // console.log("Animation on track " + trackIndex + " started");
                    },
                    end: function(trackIndex) {
                        // console.log("Animation on track " + trackIndex + " ended");
                    }
                });

                // Pack everything up and return to caller.
                return {
                    skeleton: skeleton,
                    state: animationState,
                    bounds: bounds
                };
            }

            /**
             *
             * @param skeleton
             * @returns {{offset: (Vector2|THREE.Vector2), size: (Vector2|THREE.Vector2)}}
             */
            function calculateBounds(skeleton) {
                let data = skeleton.data;
                skeleton.setToSetupPose();
                skeleton.updateWorldTransform();
                let offset = new spine.Vector2();
                let size = new spine.Vector2();
                skeleton.getBounds(offset, size, []);
                return {
                    offset: offset,
                    size: size
                };
            }

            /**
             *
             */
            function render () {
                let now = Date.now() / 1000;
                let delta = now - lastFrameTime;
                lastFrameTime = now;

                resize();

                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, can.width, can.height);
                ctx.restore();

                state.update(delta);
                state.apply(skeleton);
                skeleton.updateWorldTransform();
                skeletonRenderer.draw(skeleton);

                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(-1000, 0);
                ctx.lineTo(1000, 0);
                ctx.moveTo(0, -1000);
                ctx.lineTo(0, 1000);
                ctx.stroke();

                requestAnimationFrame(render);
            }

            /**
             *
             */
            function resize () {
                // magic
                let centerX = bounds.offset.x + bounds.size.x / 2;
                let centerY = bounds.offset.y + bounds.size.y / 2;
                //
                let scaleX = bounds.size.x / can.width;
                let scaleY = bounds.size.y / can.height;
                let scale = Math.max(scaleX, scaleY) * 1.2;
                if (scale < 1) scale = 1;
                //
                let width = can.width * scale;
                let height = can.height * scale;

                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.scale(1 / scale, 1 / scale);
                ctx.translate(-centerX, -centerY);
                ctx.translate(width / 2, height / 2);
            }
        }

    },

    /**
     * computed
     */
    computed : {
        //
        can : function () {
            return document.getElementById('canvas');
        },

        //
        ctx : function () {
            return this.can.getContext('2d');
        }
    },

    /**
     * created
     */
    created : function () {

        // 初始化canvas
        this.setCanvasSize();
    },



});