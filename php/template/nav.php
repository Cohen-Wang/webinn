<nav class="navbar navbar-default  navbar-static-top">
			<div class="container">
				<div class="navbar-header">
					<strong>
						<a href="../index.php" class="navbar-brand"><img src="../images/nav_logo.png" class="img-responsive"/></a>
					</strong>
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<div class="collapse navbar-collapse" id="navbar-collapse">
					<ul class="nav navbar-nav navbar-left">
						<li>
							<a href="../index.php"><span class="glyphicon glyphicon-home"></span> 首页</a>
						</li>
						<li class="dropdown">
				          	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
				          		<span class="glyphicon glyphicon-menu-hamburger"></span> 知识 <span class="caret"></span>
				          	</a>
				          	<ul class="dropdown-menu">
				            	<li><a href="summary.php?content=html" target="_self">HTML</a></li>
				            	<li><a href="summary.php?content=css" target="_self">CSS</a></li>
				          	</ul>
				       	</li>
						<li>
							<a href="case.php" ><span class="glyphicon glyphicon-book"></span> 案例 </a>
						</li>
				        <li class="dropdown">
				          	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
				          		<span class="glyphicon glyphicon-knight"></span> 游戏 <span class="caret"></span>
				          	</a>
				          	<ul class="dropdown-menu">
				            	<li>
				            		<a href="flappyBird.php" target="_self"><span class="glyphicon glyphicon-plane"></span> 飞翔的小鸟</a>
				            	</li>
				            	<li>
				            		<a href="gluttonousSnake.php" target="_self"><span class="glyphicon glyphicon-plane"></span> 贪吃蛇</a>
				            	</li>
				          	</ul>
				        </li>
				        <li class="dropdown">
				          	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
				          		<span class="glyphicon glyphicon-wrench"></span> 工具栏 <span class="caret"></span>
				          	</a>
				          	<ul class="dropdown-menu">
				            	<li>
				            		<a href="lottery.php" target="_self"><span class="glyphicon glyphicon-globe"> lottery</span></a>
				            	</li>
				            	<li>
				            		<a href="family.php" target="_self"><span class="glyphicon glyphicon-globe"> family</span></a>
				            	</li>
				            	<li>
				            		<a href="bulletEditor.php" target="_self"><span class="glyphicon glyphicon-globe"> bulletEditor</span></a>
				            	</li>
				            	<li>
				            		<a href="mapEditor.php" target="_self"><span class="glyphicon glyphicon-globe"> mapEditor</span></a>
				            	</li>
				            	<li>
				            		<a href="excelEditor.php" target="_self"><span class="glyphicon glyphicon-globe"> excelEditor</span></a>
				            	</li>
				          	</ul>
				        </li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
			          	<li id="login-a"><a href="#loading" data-toggle="modal" data-target="#login-modal">登录 </a></li>
			          	<li id="member"><a href="javascript:void(0)" onclick="window.open('views/self.php?user=cohen','_self')"> </a></li>
						<li id="reg-a"><a href="register.php" target="_self">注册</a></li>
						<li id="logout"><a href="javascript:void(0)">退出</a></li>
			      	</ul>
				</div>
			</div>
		</nav>