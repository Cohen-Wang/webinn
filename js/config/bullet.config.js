/*
 * 
 * ①中文名字
 * ②英文名
 * ③默认值
 * ④数值范围
 * 
 * 
 * */

var DEFAULT_BULLET_CONFIG = {
	id : null,									//this.BulletConfig._bulletID,
	_bulletIndex : 0,							//必须是0  不能是-1；
	_cycleIndex : -1,
	_triggerIndex : -1,
	_effectIndex : -1,
	_cycleID : 2,
	
	image : '',									//①炮弹图片②images❤无④无
	wake : '',									//尾焰
	launchTime : 0,								//发射时间
	speed : '',									//飞行速度
	shape : '',									//炮弹形状类型：1：圆形；2：方形
	width : '',									//宽；
	height : '',								//高；
	radius : '',								//半径；
	mass : 35,									//质量
	rotationMoment : '',						//旋转速度
	launched : true,							//是否主动发射；如果是触发结果生成就是false；
	cycles : {
		id : 1,
		motionMode : 0,							//运行轨迹类型 ： 1飞行；2滚动；3弹跳；4粘着
		//1飞行
		isOffsetCoord : true,					//是否相对于当前位置偏移；true：相对，false：绝对；没有继承
		x : 0,									//❤0
		y : 0,									//❤0
		isOffsetRotation : true,				//绝对角度；相对角度true
		rotation : '',							//角度
		isOffsetSpeed : true,					//相对速度true；绝对速度
		speed : 0,								//❤0
		flyMode : 1,							//飞行模式：1：抛物线；2：直线
		obstructionLoss : 0,					//阻力损失 ；❤0；☁：0~1 ；
		rotateMode : 3,							//1 不旋转，2 自旋转，3跟随轨迹旋转
		//是否 ---跟踪
		isTrack : false, 						//true 触发；false 否
		trackRange : '', 						//❦跟踪范围 ；❤0；☁大于0 的数值；   
		trackAngle : '',						//大于0 小于 360；
		trackTarget : 1,   						//1 友方 ，2 敌方 ， 3 双方
		
		//2滚动
		rollDistence : '',						//滚动距离
		rollSpeed : '',							//滚动速度
		//rollMode : '',						//删除
		
		//3弹跳
		elasticityLoss : 0,						//弹力损失；❤0；
		
		//4粘着
		//无选项
		
		triggers : {
			triggerMode : 0,					//触发条件类型：1时间;2:距离;3:接触地面;4:接触战车;5:制定位置
			triggerParams : '',					//
			
			//triggerMode : 1,					//1.时间
			//triggerParams = ''				//
			
			//triggerMode : 2,					//2.行进距离
			//triggerParams = 2					//
			
			//triggerMode : 3,					//3.接触(地形)
			//triggerParams = ''				//当前情况下，无参数
			
			//triggerMode : 4,					//4:接触(战车)
			//triggerParams = 1  				//1:友方;2:敌方;3.双方
			
			//triggerMode : 5,					//5:定点
			//triggerParams = {
			//	x = 0,
			//	y = 0
			//},
			effects : {
				_tempEffectMode : 0,				//触发结果改变 的 临时变量；
				effectMode : 0,						//1.新轨迹； 2.效果值 ；3.buff；4.破坏地形；5.美术；6.添加新子弹	；7.END；
				effectParams : '',					//'nil'
				
				//effectMode : 1,					//1.新轨迹
				//effectParams : 2					//指向新轨迹的ID；
				
				//effectMode : 2,					//2.效果值
				//effectParams : {				
                //    range : 200,					//影响范围；
                //    target : 3,					//影响对象；
                //    effectType : 1,				//值类型；
                //    effectValue : 102,			//值；
                //    damageType : 1				//破坏类型；
            	//},
            	
            	//effectMode : 3,					//3.buff
            	//effectParams : {
                //    range : 200,					//影响范围；
                //    target : 2,					//伤害属性；
                //    buffId : 15					//buff的ID；
            	//},
            	
            	//effectMode : 4,					//4.效果(地形)
            	//effectParams : {
            	//	destroyRange : 0,				//破坏范围
            	//	destroyShape : 'view.png',		//破坏外形；
            	//	destroyEdge : 'edge.png'		//破坏后边缘；
            	//},
            	
            	//effectMode : 5,					//5.效果(美术)
            	//effectParams : {
                //    source : "boom_2.png"			//效果 (美术)②source；③
            	//},
            	
            	//effectMode : 6,					//6.添加弹头
            	//effectParams : [3,4,5]			//指向新弹头的ID
            	
            	//effectMode : 7,					//7.END
            	//effectParams : ''					//结束；最后应该要删除；			
			},
		},
	},
};
