<!DOCTYPE html>
<!--[if lt IE 9]><script>window.location.href="../error/error.html"</script><![endif]-->
<html>
	<head>
		
		<?php include "../php/template/head.php"?>
		<title>WEB客栈-个人详情</title>
		
	</head>
	<body data-spy="scroll" data-target="#myScrollspy">
		
		<?php include "../php/template/nav.php"?>
		
		
		<div class="container">
		    <div class="row">
		        <div class="col-md-3 hidden-sm hidden-xs" id="myScrollspy">
		            <ul class="nav nav-pills nav-stacked " data-spy="affix" data-offset-top="200">
		                <li class="active"><a href="#section-1">基本信息<span class="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
		                <li><a href="#section-2">专业技能<span class="glyphicon glyphicon-chevron-right pull-right"></span></span></a></li>
		                <li><a href="#section-3">个人爱好<span class="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
		                <li><a href="#section-4">项目经验<span class="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
		                <li><a href="#section-5">自我评价<span class="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
		                <li><a href="#section-6">联系方式<span class="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
		            </ul>
		        </div>
		        <div id="introduction" class="col-md-9" style="background: #fff;">
					<div class="introduce-box clearfix">
						<div class="introduce-title clearfix" >
							<h5 id="section-1"class="pull-left">基本信息</h5>
							<a href="###" class="btn btn-link pull-right">修改</a>
						</div>
		            	<div class="introduce-cont">
		            		<!--<div class="col-md-3 col-sm-12 col-xs-12 pull-right">
							    <div href="#" class="thumbnail" style="width:100px">
							      	<img src="images/portrait/cohen.png" alt="头像"/>
							    </div>
							</div>-->
							<dl class="dl-horizontal" >
								<dt>昵称 :</dt><dd v-text="data.username"></dd>
								<dt>姓名:</dt><dd v-text="data.name"></dd>
								<dt>性别 :</dt><dd v-text="data.sex"></dd>
								<dt>生日 :</dt><dd v-text="data.birthday"></dd>
								<dt>所在大学  :</dt><dd v-text="data.school"></dd>
								<dt>学历  :</dt><dd v-text="data.academic"></dd>
								<dt>专业 :</dt><dd v-text="data.major"></dd>
								<dt>简介:</dt><dd v-text="data.assessment"></dd>
								<dt>注册时间:</dt><dd v-text="data.date"></dd>
							</dl>
						</div>
					</div>
					
					<div class="introduce-box clearfix">
						<div class="introduce-title clearfix" >
							<h5 id="section-2"class="pull-left">专业技能</h5>
							<a href="###" class="btn btn-link pull-right">修改</a>
						</div>
		            	<div class="introduce-cont">
		            		<dl class="dl-horizontal">
								<dt>photoshop:</dt><dd>熟练 | 60分</dd>
								<dt>Illustrator:</dt><dd>熟练 | 60分</dd>
								<dt>HTML5 :</dt><dd>熟练 | 60分</dd>
								<dt>CSS3:</dt><dd>熟练 | 60分</dd>
								<dt>Bootstrap:</dt><dd>熟练 | 60分</dd>
								<dt>jQuery:</dt><dd>熟练 | 60分</dd>
								<dt>jQuery easyui:</dt><dd>熟练 | 60分</dd>
								<dt>PHP:</dt><dd>熟练 | 60分</dd>
								<dt>vue.js:</dt><dd>熟练 | 60分</dd>
							</dl>
						</div>
					</div>
					<!--个人爱好-->
					<div class="introduce-box clearfix">
						<div class="introduce-title clearfix" >
							<h5 id="section-3"class="pull-left">个人爱好</h5>
							<a href="###" class="btn btn-link pull-right">修改</a>
						</div>
		            	<div class="introduce-cont">
							<a href="javascript:void(0);" class="btn btn-link">篮球</a>
							<a href="javascript:void(0);" class="btn btn-link">品茶</a>
							<a href="javascript:void(0);" class="btn btn-link">健身</a>
							<a href="javascript:void(0);" class="btn btn-link">上网</a>
							<a href="javascript:void(0);" class="btn btn-link">旅游</a>
							<a href="javascript:void(0);" class="btn btn-link">阅读</a>
						</div>
					</div>
					<!--项目经验-->
					<div class="introduce-box clearfix">
						<div class="introduce-title clearfix" >
							<h5 id="section-4"class="pull-left">项目经验</h5>
							<a href="###" class="btn btn-link pull-right">修改</a>
						</div>
		            	<div class="introduce-cont">
							<dl class="dl-horizontal">
								<dt>2017/01 -- 2017/01  :</dt>
								<dd>1.不兼容IE低版本；响应式布局；</dd>
								<dd>2.使用javascript做了各种动态：轮播；选项卡；进度条；animate.css特效；</dd>
								<dd>3.Ajax-加载更多；登录提交。</dd>
								<br />
								
							  	<dt>2017/01 -- 2017/01  :</dt>
								<dd>1.运用JS做各种动态案例练习</dd>
								<dd>2.各种形式的轮播器（按钮轮播，自动轮播，3D轮播等）；</dd>
								<dd>3.canvas进度条（弧形，长条）；</dd>
								<dd>ajax（登录提交，加载更多）；</dd>
								<dd>数码时钟；</dd>
								<dd>相册效果（瀑布流；放大变小；淘宝放大镜）；</dd>
								<dd>移入移除特效；</dd>
							</dl>
						</div>
					</div>
					<!--自我评价-->
					<div class="introduce-box clearfix">
						<div class="introduce-title clearfix" >
							<h5 id="section-5"class="pull-left">自我评价</h5>
							<a href="###" class="btn btn-link pull-right">修改</a>
						</div>
		            	<div class="introduce-cont">
							<dl class="dl-horizontal">
								<dt>1 :</dt><dd>Photoshop，Illustrator：使用熟练，能切图，合并图片，制作banner，icon</dd>
							  	<dt>2  :</dt><dd>HTML5， CSS3：使用熟练，能制作常见的静态页面，兼容IE低版本，处理bug和兼容问题。</dd>
							  	<dt>3  :</dt><dd>JavaScript：独立完成常见的动态效果，处理兼容性问题，熟练使用ajax 和canvas等要点；并且会使用常见库，如：jQuery； Bootstrap； jQuery UI；jQuery easyui。</dd>
							  	<dt>4  :</dt><dd>系统学习过vue，mysql，PHP，但是没有使用过。仅做了解。</dd>
							  	<dt>5  :</dt><dd>自我评价：基本的web静态页面，我完全能做，几乎无问题。即便个别不常见问题，也能独立解决；常见的动态效果，利用原生js和jq 也能完成，但是和其他工作人员配合较少，虽知道一些完整项目经验，但难免会有不懂之处。框架方面，懂的一些，但从没遇到项目要求，所以不是太完善。</dd>
							</dl>
						</div>
					</div>
					<!--联系方式-->
					<div class="introduce-box clearfix">
						<div class="introduce-title clearfix" >
							<h5 id="section-6"class="pull-left">联系方式</h5>
							<a href="###" class="btn btn-link pull-right">修改</a>
						</div>
		            	<div class="introduce-cont">
		            		<dl class="dl-horizontal">
								<dt>手机 :</dt><dd v-text="data.tel"></dd>
								<dt>QQ :</dt><dd v-text="data.qq"></dd>
								<dt>邮箱 :</dt><dd v-text="data.email"></dd>
								<dt>微信 :</dt><dd v-text="data.wechat"></dd>
								<dt>微博 :</dt><dd v-text="data.major"></dd>
								<dt>github :</dt><dd v-text="data.github"></dd>
								<dt>所在地  :</dt><dd><span v-text="data.cmbProvince"></span> | <span v-text="data.cmbCity"></span> | <span v-text="data.cmbArea"></span></dd>
							</dl>
						</div>
					</div>
		        </div><!--col-md-9-->
		    </div><!--row-->
		    
		</div><!--container-->
		
		<!--logout-S-->
		<div id="logout-modal" class="modal">
			<div class="modal-dialog modal-sm"  style="margin:200px auto;">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">是否退出登录？</h4>
					</div>
					<div class="modal-body text-right">
						<button id="logout-confirm" class="btn btn-danger">确认</button>
						<button id="logout-cancel" class="btn btn-primary">取消</button>
					</div>
				</div>
			</div>
		</div>
		<!--logout-E-->
		<!--loading-S-->
		<div id="loading" class="modal">
			<div class="modal-dialog modal-sm"  style="margin:200px auto;">
				<div class="modal-content">
					<div class="modal-body">
						<img src="../images/loading.gif"/><span id="load-text">数据交互中 . . .</span>
					</div>
				</div>
			</div>
		</div>
		<!--loading-E-->
		<!--登录框 S-->
		<div id="login-modal" class="modal">
			<div class="modal-dialog modal-sm"  style="margin:200px auto;">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal"><span>&times;</span></button>
						<h4 class="modal-title">登录</h4>
					</div>
					<div class="modal-body">
						<form id="loginForm" action=""  method="post">
							<div class="form-group">
								<label for="">用户名：</label>
								<div class="feedback">
									<input id="loginUser" class="form-control" autofocus="autofocus" type="text" name="loginUser" placeholder="用户名 / 邮箱 / 电话" maxlength="20"/>
								</div>
							</div>
							<div class="form-group">
								<label for="">密码：</label>
								<div class="feedback">
									<input id="loginPassword" class="form-control" type="password" name="loginPassword" placeholder="密码" maxlength="20" />
								</div>
							</div>
							<div class="checkbox">
						        <label for="expire">
						          	<input type="checkbox" name="" id="expire" value=""/> 七天之内自动登录
						        </label>
						   	</div>
						   	<div class="form-group">
						        <label for="expire"></label>
						        <input type="submit" id="logSubmit" class="btn btn-primary btn-block" value="提&nbsp;&nbsp;&nbsp;交&nbsp;" /> 
						   	</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!--登录框 E-->
		<!--backTop-S-->
		<div class="backTop"><span class="glyphicon glyphicon-open"></span></div>
		<!--backTop-E-->
		
		<?php include "../php/template/footer.php"?>
		
		<script type="text/javascript" src="../js/lib/jquery.min.js"></script>
		<script type="text/javascript" src="../js/lib/jquery.form.js"></script>
		<script type="text/javascript" src="../js/lib/jquery.validate.js"></script>
		<script type="text/javascript" src="../js/lib/jquery.cookie.js"></script>
		<script type="text/javascript" src="../js/lib/bootstrap.min.js"></script>
		<script type="text/javascript" src="../js/lib/vue.min.js"></script>
		<script type="text/javascript" src="../js/lib/vue-resource.min.js"></script>
		
		<script type="text/javascript" src="../js/dist/common.js"></script>
		<script type="text/javascript" src="../js/dist/self.js"></script>
	</body>
</html>