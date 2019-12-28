/*
 
 * 1.	Map要ID；
 * 		地形层的地形图片要ID；
 * 2.地形层指向索引terrainIndex;
 * 3.地形层的depth必须是0；
 * 4.地形位置 装饰物的特殊位置；
 * 5.帧动画的示意图；
 * 
 * */

var DEFAULT_MAP_CONFIG = {
	id : 0,								
	scale : 1.0,						//缩放比；默认值1.0？？？
    width : 0,							//地图宽
    height : 0,							//地图高
    terrainIndex : 0,					//地形指向索引
    layers : {
        depth : 0,						//层纵深
        zOrder : 0,						//Z序列
        components : {
            type : 1,					//图片类型；默认值1？？？
            image : "",					//图片名称
            width : 0,					//图片宽
            height : 0,					//图片高
            coordX : 0,					//X轴坐标
            coordY : 0,					//Y轴坐标
            images : [],    			//(Array)切图后的组合，如果图片类型 为1和2 ，那么没有此属性；
            
            //type == 1					//没有多余属性
            //type == 2					//没有多余属性
            
            //type == 3
            anchorX : 0.5,
            anchorY : 0.5,
            decorationType : 0,
        	//decorationType == 1
        		rotationMoment : 0,
        	//decorationType == 2
        		plist : "",				//"map_steam.plist"
            
            //type == 4
            scale : 1.0,
            speed : 0,
        }
    }
}
