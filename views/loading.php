<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>登录</title>
		
		<style type="text/css">
			*{padding: 0; margin: 0;}
			html{overflow: hidden;}
		</style>
	</head>
	<body>
		
		<canvas id="canvas" width="" height="" style="background: #111;"></canvas>
		
		
		<script type="text/javascript">
			
			window.onload = function(){
				
				
				var can = document.getElementById('canvas');
				var ctx = can.getContext('2d');
				var W = window.innerWidth;
				var H = window.innerHeight;
				canvas.width = W;
				canvas.height = H;
				
				var fontSize = 16;
				var colunms = Math.floor(W / fontSize);
				
				var drops = [];
				for(var i = 0 ; i < colunms ; i ++){
					drops.push(0);
				};
				
				var str = 'javascript html css php';
				
				function draw(){
					ctx.fillstyle = 'rgba(0,0,0,0.5)';
					ctx.fillRect(0,0,W,H);
					
					ctx.font = '700' + fontSize + 'px 微软雅黑';
					
					ctx.fillstyle = '#00cc33';
					
					for(var i = 0 ; i <colunms ; i++){
						var index = Math.floor(Math.random() * str.length);
						
						var x = i * fontSize;
						var y = drops[i] * fontSize;
						
						ctx.fillText(str[index],x,y);
						
						if(y >= canvas.height && Math.random() > 0.99){
							drops[i] = 0;
						};
						drops[i] ++;
					};
				};
				
				draw();
				setInterval(draw,30);
				
				
			};
			
			
			
		</script>
		
	</body>
</html>

