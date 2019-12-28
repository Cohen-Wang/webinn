(function(){
	var canvas=document.getElementById('canvas');
	var cxt=canvas.getContext('2d');
	var r=[{x:10,y:9},{x:10,y:8}];
	var co=40;//表示前进的方向；
	var e=null;//表示食物；
	var stop=false;//控制暂停；
	cxt.shadowBlur=5;
	cxt.shadowColor='#eee';
	function onframe(){
		//碰到外面就停止
		if(stop || r[0].x==0||r[0].x==50||r[0].y==0||r[0].y==50){
			return;
		}
		
		//如果吃到了食物
		if(e){
			if((co==40&&r[0].x==e.x&&r[0].y+1==e.y)
			||(co==38&&r[0].x==e.x&&r[0].y-1==e.y)
			||(co==37&&r[0].x-1==e.x&&r[0].y==e.y)
			||(co==39&&r[0].x+1==e.x&&r[0].y==e.y)){
				r.unshift(e);
				e=null;
			}
		}
		//将数组中最后一个元素放在首位
		r.unshift(r.pop());
		
		//各个方向的移动方法；
		switch(co){
			case 37:
				r[0].x=r[1].x-1;
				r[0].y=r[1].y;
				break;
			case 38:
				r[0].x=r[1].x;
				r[0].y=r[1].y-1;
				break;
			case 39:
				r[0].x=r[1].x+1;
				r[0].y=r[1].y;
				break;
			case 40:
				r[0].x=r[1].x;
				r[0].y=r[1].y+1;
				break;
		};
		//每次先清除画布
		cxt.clearRect(0,0,500,500);
		//绘制贪吃蛇
		for(var i=0;i<r.length;i++){
			cxt.fillRect(r[i].x*10,r[i].y*10,10,10);
		};
	
		//如果没有食物，则添加一个食物坐标
		if(e==null){
			e={x:~~(Math.random()*50),y:~~(Math.random()*50)};
		}else{
			cxt.fillRect(e.x*10,e.y*10,10,10);
		}
		
		//然后再画这个食物
		/*if(e){
			
		};*/
		
		if(r[0].x==0||r[0].x==50||r[0].y==0||r[0].y==50){
			console.log('Game over,你得了：'+(r.length-2)+'分');
		}
	};
	onframe();
	var timer = setInterval(onframe,100);
	//阻止默认
	document.onkeydown = function(event){
		var event=event||event.window;
		event.preventDefault();
		if(event.keyCode>=37 && event.keyCode<=40 && Math.abs(event.keyCode-co)!=2){
			co=event.keyCode;
		}else if(event.keyCode==32){
			stop=!stop;
		};
	};
	/*document.onkeyup=function(event){
		var event=event||event.window;
		if(event.keyCode>=37 && event.keyCode<=40 && Math.abs(event.keyCode-co)!=2){
			co=event.keyCode;
		}else if(event.keyCode==32){
			stop=!stop;
		};
	};*/
})();