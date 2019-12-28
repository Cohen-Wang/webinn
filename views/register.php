<!DOCTYPE html>
<!--[if lt IE 9]><script>window.location.href="../error/error.html"</script><![endif]-->

<head>
	
	<?php include "../php/template/head.php" ?>
	
	<title>注册</title>
</head>

<body>
	
	<?php include "../php/template/nav.php"?>
	
	<div class="container register-body">
		<div class="row">
			<div class="page-header">
				<h3>个人注册</h3>
			</div>
			<form id="signupForm" enctype="multipart/form-data" class="form-horizontal" action="php/add.php" method="post">
				<h5 class="bg-info reg-detail-title">登录信息<small style="color:red;">&nbsp;&nbsp;&nbsp;(*必填项)</small></h5>
			    <div class="form-group" >
			        <label class="col-sm-2 control-label"  for="username">用户名：</label>
			        <div class="col-lg-4 col-md-5 col-sm-6 feedback">
			            <input type="text" id="username" name="username" class="form-control"  placeholder="用户名"/>
			        </div>
			    </div>
			    
			    <div class="form-group">
                    <label  class="col-sm-2 control-label span3"></label>
                    <div class="col-lg-4 col-md-5 col-sm-6">
                        <img src="../images/portrait/1.jpg" id="imgShow" width="100px" height="100px">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-sm-2 control-label">头像：</label>
                    <div class="col-lg-4 col-md-5 col-sm-6">
                        <div class="input-group">
                            <input id="photoCover" class="form-control" readonly type="text">
                            <label class="input-group-btn">
	                            <input id="userImage" type="file"  name="userImage" accept="image/*" style="position:absolute;">
	                            <span class="btn btn-primary span1">上传图片</span>
                            </label>
                        </div>
                    </div>
             	</div>
			    <div class="form-group">
			    	<label  class="col-sm-2 control-label" for="name">姓名：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6 feedback">
				      	<input type="text" id="name" name="name" class="form-control" placeholder="姓名">
				    </div>
			    </div>
			    <div class="form-group">
			    	<label class="col-sm-2 control-label"  for="tel">电话：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6 feedback">
				      	<input type="tel" id="tel" name="tel" class="form-control" placeholder="手机号">
				    </div>
			    </div>
			    <div class="form-group">
			    	<label class="col-sm-2 control-label" for="email">邮箱：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6 feedback">
				      	<input type="email" id="email" name="email" class="form-control" placeholder="邮箱">
				    </div>
			    </div>
			    <div class="form-group" >
			        <label class="col-sm-2 control-label"  for="password">密码：</label>
			        <div class="col-lg-4 col-md-5 col-sm-6 feedback">
			            <input type="password" id="password" name="password" class="form-control"  placeholder="密码"/>
			        </div>
			    </div>
			    <div class="form-group">
			    	<label class="col-sm-2 control-label" for="confirm_password">确认密码：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6 feedback">
				      	<input type="password" id="confirm_password" name="confirm_password" class="form-control"  placeholder="确认密码"/>
				    </div>
			    </div>
			    <hr />
			  	
			    <h5 class="bg-info reg-detail-title">个人信息</h5>
			    <div class="form-group">
					<label for="" class="col-sm-2 control-label">性别：</label>
					<div class="btn-group col-lg-4 col-md-5 col-sm-6" data-toggle="buttons">
						<label for="" class="btn btn-default active">
							<input type="radio"  name="sex" value="男" checked="checked"/>男
						</label>
						<label for="" class="btn btn-default"> 
							<input type="radio"  name="sex" value="女"/>女
						</label>
					</div>
			    </div>
			    <div class="form-group">
			        <label for="" class="col-sm-2 control-label">生日：</label>
			        <div class="col-lg-4 col-md-5 col-sm-6">
				      	<input type="text" id="birthday" name="birthday" class="form-control" placeholder="生日" readonly="readonly">
				    </div>
			    </div>
			    <hr />
			    <!------------------------------------------------->
			    <h5 class="bg-info reg-detail-title">教育信息</h5>
			    <div class="form-group">
			    	<label for="academic" class="col-sm-2 control-label">学历：</label>
				    <div class="col-md-3 col-sm-4">
						<select id="academic" class="form-control" name="academic">
						    <option value="专科">专科</option>
						    <option value="本科">本科</option>
						    <option value="">研究生</option>
						    <option value="研究生">研究生</option>
						</select>
				    </div>
			    </div>
			    <div class="form-group">
			    	<label for="school" class="col-sm-2 control-label">毕业院校：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6">
				      	<input type="text" id="school" class="form-control" name="school" placeholder="毕业院校">
				    </div>
			    </div>
			    <div class="form-group">
			    	<label for="major" class="col-sm-2 control-label">专业：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6">
				      	<input type="text" id="major" class="form-control" name="major" placeholder="专业">
				    </div>
			    </div>
			    <!--<div class="form-group">
			    	<label for=" " class="col-sm-2 control-label">时间：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6">
				      	<input type="text" class="form-control" placeholder="时间">
				    </div>
			    </div>	-->
				<hr />
	  			<!------------------------------------------------->
	    		<h5 class="bg-info reg-detail-title">联系方式</h5>
			    <div class="form-group">
			    	<label for="qq" class="col-sm-2 control-label">QQ：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6">
				      	<input type="text" id="qq" class="form-control" name="qq" placeholder="QQ">
				    </div>
			    </div>
			    <div class="form-group">
			    	<label for="wechat" class="col-sm-2 control-label">微信：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6">
				      	<input type="text" id="wechat" class="form-control" name="wechat" placeholder="微信">
				    </div>
			    </div>
			    <div class="form-group">
			    	<label for="github" class="col-sm-2 control-label">github：</label>
				    <div class="col-lg-4 col-md-5 col-sm-6">
				      	<input type="text" id="github" class="form-control" name="github" placeholder="github">
				    </div>
			    </div>
			    <div class="form-group">
			    	<label for=" " class="col-sm-2 control-label">地址：</label>
				    <div class="col-md-2 col-sm-3">
						<select id="province" name="cmbProvince" class="form-control">
						    <!--<option value="">四川省</option>-->
						</select>
				    </div>
				    <div class="col-md-2 col-sm-3">
						<select id="city" name="cmbCity" class="form-control">
						    <!--<option value="">成都市</option>-->
						</select>
				    </div>
				    <div class="col-md-2 col-sm-3">
						<select id="area" name="cmbArea" class="form-control">
						   <!-- <option value="">武侯区</option>-->
						</select>
				    </div>
			    </div>
			    <hr />
			    <!--***************-->
			    <h5 class="bg-info reg-detail-title">个人简介</h5>
			    <div class="form-group" >
			    	<label for="assessment" class="col-sm-2 control-label">自我简介：</label>
				    <div class="col-sm-8">
				      	<textarea id="assessment" name="assessment" class="form-control" rows="5" cols="50" placeholder="请输入您的自我简介..."></textarea>
				    </div>
			    </div>
			    <div class="col-sm-10 col-sm-offset-2">
			    	<p>填写文字在100个字以上评定等级，少于不计算，内容越详细，等级越高</p>
			    </div>
			    <hr /><hr />
			    <hr />
			    <div class="form-group">
					<div class="col-xs-12 text-center">
						<div class="checkbox feedback">
							<label>
								<input type="checkbox" id="agree" name="agree" value="agree" />点击同意条款
							</label>
						</div>
					</div>
				</div>
				<div class="col-xs-12 text-center">
					<button id="reg-submit" class="btn btn-default"  name=" "  autocomplete="off" >提交</button>
				</div>
			</form>
		</div>
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
					<img src="../images/loading.gif" width="16" height="16" /><span id="load-text">提交中，请稍后 ...</span>
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
					        <button type="submit" id="logSubmit" class="btn btn-primary btn-block" />提交</button>
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
	
	<script type="text/javascript" src="../js/lib/jquery.min.js" ></script>
	<script type="text/javascript" src="../js/lib/bootstrap-datetimepicker.min.js" charset="UTF-8"></script>
	<script type="text/javascript" src="../js/lib/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
	<script type="text/javascript" src="../js/lib/completer.min.js"></script>
	<script type="text/javascript" src="../js/lib/lazyload.min.js"></script>
	<script type="text/javascript" src="../js/lib/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/lib/jquery.validate.js"></script>
	<script type="text/javascript" src="../js/lib/jquery.form.js"></script>
	<script type="text/javascript" src="../js/lib/jquery.cookie.js"></script>
	<script type="text/javascript" src="../data/provinceList.js"></script><!--省市区级联菜单数据-->
	
	<script type="text/javascript" src="../js/dist/common.js"></script>
	<script type="text/javascript" src="../js/dist/register.js"></script>
</body>
</html>