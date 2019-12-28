/**
 *
 *
 * @type {SkeletonRenderer}
 *
 *
 */

// new spine.canvas.SkeletonRenderer(ctx);
let skeletonRenderer = new spine.canvas.SkeletonRenderer(ctx);// 骨骼渲染器
    skeletonRenderer.debugRendering = true;// 是否显示边框
    skeletonRenderer.triangleRendering = false;// 是否显示边框里面的对角线

// new spine.canvas.AssetManager();
let assetManager = new spine.canvas.AssetManager();// 资源管理
    assetManager.loadText("res/" + skelName + ".json");
    assetManager.loadText("res/" + skelName + ".atlas");
    assetManager.loadTexture("res/" + skelName + ".png");
    assetManager.isLoadingComplete();// 判断加载是否完毕

// new spine.TextureAtlas(assetManager.get("res/" + skelName + ".atlas")
let atlas = new spine.TextureAtlas(assetManager.get("res/" + skelName + ".atlas"), function(path) {
    return assetManager.get("res/" + path);
});

// 实例化一个AtlasAttachmentLoader
let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
// 实例化SkeletonJson用于解析.json文件
let skeletonJson = new spine.SkeletonJson(atlasLoader);
// 在解析中设置大小比例用于应用；parse the file, 创建一个骨架
let skeletonData = skeletonJson.readSkeletonData(assetManager.get("res/" + skelName + ".json"));
// 外面要用的变量1
let skeleton = new spine.Skeleton(skeletonData);
    skeleton.flipY = true;// Y轴正向
    skeleton.flipX = false;// X轴向右
    skeleton.setSkinByName(skin);// ???

// 外面要用的变量2
let bounds = calculateBounds(skeleton);
//
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
//
skeleton.setToSetupPose();
skeleton.updateWorldTransform();
let offset = new spine.Vector2();
let size = new spine.Vector2();
skeleton.getBounds(offset, size, []);




















