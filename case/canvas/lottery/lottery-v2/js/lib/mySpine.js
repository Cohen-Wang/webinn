/**
 * 标准键盘布局
 * ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 * │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 * └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 * │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 * │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 * ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 * │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 * ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 * │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 * └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 */

(function () {

    window.CYBER = window.CYBER || {};

    /**
     * 构造
     */
    CYBER.SpineCanvas = function (params) {
        // 传参
        this.skeletonName = params.skeletonName;
        this.animationName = params.animationName;
        this.width = params.width;
        this.height = params.height;
        this.left = params.left;
        this.top = params.top;
        this.translateX = params.translateX;
        this.translateY = params.translateY;
        this.ShowCoordinate = params.ShowCoordinate;
        this.debugRendering = params.debugRendering;
        this.showBackground = params.showBackground;
        //
        this.can = document.getElementById(params.id);
        this.ctx = this.can.getContext('2d');
        //
        this.skeleton = null;
        this.state = null;
        this.bounds = null;
        // 初始化
        this.init();

    };

    /**
     * 初始化
     */
    CYBER.SpineCanvas.prototype.init = function () {
        // 创建和设置canvas
        this.can.width = this.width;
        this.can.height = this.height;

        if (this.showBackground) {
            this.can.style.backgroundColor = 'rgba(255,255,255,0.5)';
        } else {
            this.can.style.backgroundColor = 'rgba(0,0,0,0)';
        }

        this.can.style.position = 'absolute';
        this.can.style.left = this.left + 'px';
        this.can.style.top = this.top + 'px';
        // 骨骼渲染器
        this.skeletonRenderer = new spine.canvas.SkeletonRenderer(this.ctx);
        this.skeletonRenderer.debugRendering = this.debugRendering;// 是否显示边框
        this.skeletonRenderer.triangleRendering = false;// 是否显示边框里面的对角线
        // 资源管理
        this.assetManager = new spine.canvas.AssetManager();
        this.assetManager.loadText("../res/animation/" + this.skeletonName + ".json");
        this.assetManager.loadText("../res/animation/" + this.skeletonName + ".atlas");
        this.assetManager.loadTexture("../res/animation/" + this.skeletonName + ".png");
        //
        this.load();
    };

    /**
     * load
     */
    CYBER.SpineCanvas.prototype.load = function () {
        //
        if (this.assetManager.isLoadingComplete()) {

            let data = this.loadSkeleton(this.skeletonName, this.animationName, "default");
            //
            this.skeleton = data.skeleton;
            this.state = data.state;
            this.bounds = data.bounds;

            requestAnimationFrame(this.render.bind(this));// ❤❤❤❤这句话可以装逼一万年
        }
        else {
            requestAnimationFrame(this.load.bind(this));// ❤❤❤❤这句话可以装逼一万年
        }
    };

    /**
     * loadSkeleton
     */
     CYBER.SpineCanvas.prototype.loadSkeleton = function (skeletonName, animationName, skin) {
         let _this = this;
        // 皮肤
        skin = skin || "default";
        // 加载atlas
        let atlas = new spine.TextureAtlas(this.assetManager.get("../res/animation/" + skeletonName + ".atlas"), function(path) {
            return _this.assetManager.get("../res/animation/" + path);
        });
        // 实例化一个AtlasAttachmentLoader
        let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
        // 实例化SkeletonJson用于解析.json文件
        let skeletonJson = new spine.SkeletonJson(atlasLoader);
        // 在解析中设置大小比例用于应用；parse the file, 创建一个骨架
        let skeletonData = skeletonJson.readSkeletonData(this.assetManager.get("../res/animation/" + skeletonName + ".json"));
        // 外面要用的变量1
        let skeleton = new spine.Skeleton(skeletonData);
        skeleton.flipY = true;
        // 外面要用的变量2
        let bounds = calculateBounds(skeleton);
        skeleton.setSkinByName(skin);
        // 外面要用的变量3，创建一个动画状态，设置初始化动画循环
        let animationState = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
        animationState.setAnimation(0, animationName, true);
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
            bounds: bounds,
            state: animationState,
        };
    };

    function calculateBounds (skeleton) {
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
    CYBER.SpineCanvas.prototype.render = function () {
        let speed = 0.018;
        //
        this.resize();

        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.can.width, this.can.height);
        this.ctx.restore();
        //
        this.state.update(speed);
        this.state.apply(this.skeleton);
        this.skeleton.updateWorldTransform();
        this.skeletonRenderer.draw(this.skeleton);
        // 画坐标系
        if (this.ShowCoordinate) {
            this.ctx.strokeStyle = "green";
            this.ctx.beginPath();
            this.ctx.moveTo(-1000, 0);
            this.ctx.lineTo(1000, 0);
            this.ctx.moveTo(0, -1000);
            this.ctx.lineTo(0, 1000);
            this.ctx.stroke();
        }

        requestAnimationFrame(this.render.bind(this));

    };

    CYBER.SpineCanvas.prototype.resize = function () {
        // magic
        //let centerX = this.bounds.offset.x + this.bounds.size.x / 2;
        //let centerY = this.bounds.offset.y + this.bounds.size.y / 2;
        //
        let scaleX = this.bounds.size.x / this.can.width;// 470 : 500
        let scaleY = this.bounds.size.y / this.can.height;// 730 : 500
        let scale = Math.max(scaleX, scaleY) * 1.2;
        if (scale < 1) scale = 1;
        //
        //let width = this.can.width * scale;
        //let height = this.can.height * scale;

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        //this.ctx.scale(1 / scale, 1 / scale);
        //this.ctx.translate(width / 2, height / 2);
        this.ctx.translate(this.translateX, this.translateY);
    };

}) (window);