<!DOCTYPE html>
<!--[if lt IE 9]><script>window.location.href="../error/error.html"</script><![endif]-->
<html>
	<head>
		
		<?php include "../php/template/head.php"?>
		<title>WEB客栈-案例展示</title>
		
	</head>
	<body data-spy="scroll" data-target="#myScrollspy">
		
		<?php include "../php/template/nav.php"?>
		
		
		<div class="container showCase_iframe">
			<ol class="breadcrumb">
				<li><a href="index.html">首页</a></li>
				<li><a href="case.html">案例</a></li>
				<li class="active">电影网站</li>
			</ol>
			<div class="embed-responsive embed-responsive-16by9">
			  	<iframe id="caseShow-iframe" class="embed-responsive-item" ></iframe>
			</div>
		</div>
		<div class="container">
		    <div class="row">
		        <div class="col-md-9">
		        	<div class="panel panel-default">
		        		<div class="panel-heading">
		        			<div class="panel-title">
		        				源代码
		        			</div>
		        		</div>
		        		<div class="panel-body">
							<div class="well">
								&lt;div class="col-md-9"&gt;</br>
						        &nbsp;&nbsp;&nbsp;&nbsp;	&lt;div class="embed-responsive embed-responsive-16by9"&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	  	&lt;iframe class="embed-responsive-item" src="media/view.mp4"&gt;&lt;/iframe&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;/div&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;h4&gt;&lt;strong>源代码&lt;/strong&gt;&lt;/h4&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;div class="well"&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		Look, I'm in a well!</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;/div&gt;</br>
						        &lt;/div&gt;</br>
						        &lt;div class="col-md-3 hidden-xs a"&gt;</br>
						        &nbsp;&nbsp;&nbsp;&nbsp;	234</br>
						        &lt;/div&gt;</br>
						        &lt;div class="col-md-9"&gt;</br>
						        &nbsp;&nbsp;&nbsp;&nbsp;	&lt;div class="embed-responsive embed-responsive-16by9"&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	  	&lt;iframe class="embed-responsive-item" src="media/view.mp4"&gt;&lt;/iframe&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;/div&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;h4&gt;&lt;strong>源代码&lt;/strong&gt;&lt;/h4&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;div class="well"&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		Look, I'm in a well!</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;/div&gt;</br>
						        &lt;/div&gt;</br>
						        &lt;div class="col-md-3 hidden-xs a"&gt;</br>
						        &nbsp;&nbsp;&nbsp;&nbsp;	234</br>
						        &lt;/div&gt;</br>
						        &lt;div class="col-md-9"&gt;</br>
						        &nbsp;&nbsp;&nbsp;&nbsp;	&lt;div class="embed-responsive embed-responsive-16by9"&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	  	&lt;iframe class="embed-responsive-item" src="media/view.mp4"&gt;&lt;/iframe&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;/div&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;h4&gt;&lt;strong>源代码&lt;/strong&gt;&lt;/h4&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;div class="well"&gt;</br>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		Look, I'm in a well!</br>
								&nbsp;&nbsp;&nbsp;&nbsp;	&lt;/div&gt;</br>
						        &lt;/div&gt;</br>
						        &lt;div class="col-md-3 hidden-xs a"&gt;</br>
							</div>
		        		</div>
		        	</div>
		        	
					<!--留言板-->
					<div id="messageBoard" class="clearfix">
						<div class="page-header">
							<h2 class="clearfix">
								<span class="glyphicon glyphicon-list-alt index-title-icon"></span> 留言板
							</h2>
						</div>
						<div>
							<ul class="media-list messageCont">
								<!--<li class="media">
									<div class="media-left">
										<a href="#"><img src="images/html.jpg" alt="" class="userHeadImg" /></a>
									</div>
									<div class="media-body">
										<h5 class="media-heading comment-date">黑色天使 发表于 2017-08-10</h5>
										<h4 class="media-heading comment-title"><a href="#">这里是标题的名字！！！</a></h4>
										<p class="editor comment-content">Bootstrap，来自 Twitter，是目前很受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。[1]  
											它由Twitter的设计师Mark Otto和Jacob Thornton合作开发，是一个CSS/HTML框架。Bootstrap提供了优雅的HTML和CSS规范，它即是由动态CSS语言Less写成。
										</p>
										<div class="bottom clearfix">0条评论 <span class="down">显示全部</span><span class="up">收起</span></div>
									</div>
								</li>
								<hr />-->
							</ul>
						</div>
						<form id="questionForm" class="form-horizontal">
							<div class="form-group clearfix" >
						        <label class="col-sm-2 control-label"  for="">标题：</label>
						        <div class="col-sm-10">
						            <input type="text" id="" name="title" class="form-control"  placeholder="标题"/>
						        </div>
						  	</div>
							<textarea class="form-control messageBoard-editor" name="content" rows="5" placeholder="请输入留言。。。"></textarea>
							<input type="submit" class="btn btn-primary pull-right" value=" 发 布 "> 
						</form>
					</div><!--留言板-->
		        </div>
		        
		        
		        <div class="col-md-3 hidden-xs">
		        	<div class="panel panel-default">
					  	<div class="panel-heading">
					    	<h3 class="panel-title">Panel title</h3>
					  	</div>
					  	<div class="panel-body list-group">
					    	<!--<ul class="list-group">-->
						  	<li class="list-group-item"><a href="#">Cras justo odio</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Dapibus ac facilisis in</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Morbi leo risus</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Porta ac consectetur ac</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Vestibulum at eros</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Cras justo odio</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Dapibus ac facilisis in</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Morbi leo risus</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Porta ac consectetur ac</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Vestibulum at eros</a></li>
						  	<li class="list-group-item"><a href="#">Cras justo odio</a></li>
						  	<li class="list-group-item"><a href="#">Dapibus ac facilisis in</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Morbi leo risus</a><span class="badge">14</span></li>
						  	<li class="list-group-item"><a href="#">Porta ac consectetur ac</a></li>
						  	<li class="list-group-item"><a href="#">Vestibulum at eros</a><span class="badge">14</span></li>
							<!--</ul>-->
					  	</div>
					</div>
		        </div>
		    </div>
		    
		    <!--友情链接-->
			<div class="row">
				<div class="page-header">
					<h2 class="clearfix"><span class="glyphicon glyphicon-link index-title-icon"></span> 友情链接</h2>
				</div>
				<div class="panel-group" id="according">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title"><a href="#collapse1" data-toggle="collapse" data-parent="#according">博客推送 </a></h4>
						</div>
						<div id="collapse1" class="panel-colleapse collapse in" >
							<div class="panel-body">
								<ul class="blogroll-wrap list-inline">
							    	<li><a href="https://www.xuanmo.xin/" target="_blank"><img src="https://www.xuanmo.xin/wp-content/uploads/2017/10/favicon-1.png" width="20" height="20"/> 轩陌博客</a></li>
							    	<li><a href="http://www.256it.com/" target="_blank"><img src=" " width="20" height="20"/> 破浪的技术</a></li>
							    	<li><a href="http://www.web-jackiee.com/" target="_blank"><img src=" " width="20" height="20"/> 老牛の博客</a><li>
							    	<li><a href="https://www.wujiabk.com/" target="_blank"><img src="https://www.wujiabk.com/wp-content/uploads/2017/06/cropped-QQ%E5%9B%BE%E7%89%8720170531191403-32x32.jpg" width="20" height="20"/> 吴佳博客</a></li>
							    </ul>
							</div>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title"><a href="#collaps2" data-toggle="collapse" data-parent="#according">教学机构</a></h4>
						</div>
						<div id="collaps2" class="panel-colleapse collapse">
							<div class="panel-body">
								<ul class="blogroll-wrap list-inline">
							    	<li><a href="http://www.51zxw.net/" target="_blank"><img src="http://www.51zxw.net/favicon.ico" width="20" height="20"/> 我要自学网</a></li>
				    				<li><a href="http://www.imooc.com/" target="_blank"><img src="http://www.imooc.com/static/img/common/touch-icon-ipad.png" width="20" height="20"/> 慕课网</a></li>
				    				<li><a href="http://www.tanzhouedu.com/" target="_blank"><img src="http://moonbuy.cn/mall/static/images/favicon.ico" width="20" height="20"/> 潭州教育</a></li>
							    </ul>
							</div>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title"><a href="#collaps3" data-toggle="collapse" data-parent="#according">聊天论坛</a></h4>
						</div>
						<div id="collaps3" class="panel-colleapse collapse">
							<div class="panel-body">
								<ul class="blogroll-wrap list-inline">
							    	<li><a href="https://github.com/" target="_blank"><img src="https://github.com/fluidicon.png" width="20" height="20"/> github</a></li>
							    	<li><a href="https://www.zhihu.com/" target="_blank"><img src=" " width="20" height="20"/> 知乎</a></li>
							   		<li><a href="http://www.talkingdata.com/" target="_blank"><img src=" " width="20" height="20"/> TalkingData</a></li>
							   		<li><a href="https://www.proginn.com/" target="_blank"><img src="https://innsta.b0.upaiyun.com/favicon_new.ico" width="20" height="20"/> 程序员客栈</a></li>
							    </ul>
							</div>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title"><a href="#collapse4" data-toggle="collapse" data-parent="#according">学习资料</a></h4>
						</div>
						<div id="collapse4" class="panel-colleapse collapse">
							<div class="panel-body">
								<ul class="blogroll-wrap list-inline">
							    	<li><a href="http://www.cssmoban.com/" target="_blank"><img src="http://www.cssmoban.com/favicon.ico" width="20" height="20"/> 模板之家</a></li>
							    	<li><a href="http://sc.chinaz.com/" target="_blank"><img src="http://sc.chinaz.com/favicon.ico" width="20" height="20"/> 站长素材</a></li>
							    	<li><a href="http://www.jq22.com/" target="_blank"><img src="http://www.jq22.com/favicon.ico" width="20" height="20"/> jQuery特效</a></li>
							    </ul>
							</div>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title"><a href="#collapse5" data-toggle="collapse" data-parent="#according">辅助工具 </a></h4>
						</div>
						<div id="collapse5" class="panel-colleapse collapse" >
							<div class="panel-body">
								<ul class="blogroll-wrap list-inline">
							    	<li><a href="http://fontfacegen.com/woff-to-ttf-converter" target="_blank"><img src="http://fontfacegen.com/favicon.ico" width="20" height="20"/> 字体转换</a></li>
							    	<li><a href="http://www.myfonts.com/" target="_blank"><img src="https://cdn.myfonts.net/s/images/logo/header_logo.svg" width="20" height="20"/> 查看字体</a></li>
							    	<li><a href="http://tool.oschina.net/jscompress/" target="_blank"><img src="http://tool.oschina.net/img/favicon.ico" width="20" height="20"/> 文件压缩</a></li>
							    	<li><a href="http://www.css88.com/demo/hex_color/" target="_blank"><img src=" " width="20" height="20"/> 颜色值转换</a></li>
							    </ul>
							</div>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title"><a href="#collapse6" data-toggle="collapse" data-parent="#according">自娱自乐 </a></h4>
						</div>
						<div id="collapse6" class="panel-colleapse collapse" >
							<div class="panel-body">
								<ul class="blogroll-wrap list-inline">
							    	<li><a href="http://www.youku.com/" target="_blank"><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2683732251,1127673653&fm=27&gp=0.jpg" width="20" height="20"/> 优酷</a></li>
							    	<li><a href="https://www.baidu.com/" target="_blank"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508493825870&di=65ca459d1cde4ba24b466bf527775457&imgtype=0&src=http%3A%2F%2Fm.qqzhi.com%2Fupload%2Fimg_5_274501810D3917839687_23.jpg" width="20" height="20"/> 百度</a></li>
							    	<li><a href="http://www.xl720.com/" target="_blank"><img src="http://www.xl720.com/favicon.ico" width="20" height="20"/> 迅雷之家</a></li>
							    	<li><a href="https://tofo.me/" target="_blank"><img src="https://tofo.me/favicon.png" width="20" height="20"/>Tofo</a></li>
							    	<li><a href="http://en.savefrom.net/" target="_blank"><img src="http://en.savefrom.net/img/icon_100.png" width="20" height="20"/> Youtube</a></li>
							    	<li><a href="http://www.dy2018.com/" target="_blank"><img src=" " width="20" height="20"/> 电影天堂</a></li>
							    	<li><a href="https://www.lagou.com/" target="_blank"><img src="https://static.lagou.com/www/static/common/static/favicon_faed927.ico" width="20" height="20"/> 拉勾网</a></li>
							    	<li><a href="http://www.zhaopin.com/" target="_blank"><img src="http://img00.zhaopin.cn/new2011/images/ie9.ico" width="20" height="20"/> 智联招聘</a></li>
							    </ul>
							</div>
						</div>
					</div>
				</div>
			</div><!--row-->
			<!--友情链接-->
		</div><!--container-->
		
		<!--needLogin-S--> 
		<div id="needLogin" class="modal">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-body">
						<img src="images/icon/error.png" class="modal-img"/><span id="load-text" class="modal-text">请先登录...</span>
					</div>
				</div>
			</div>
		</div>
		<!--need-login-E-->
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
						<img src="images/loading.gif" width="16" height="16" /><span id="load-text">提交中，请稍后 ...</span>
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
		
		<script src="../js/lib/jquery.min.js"></script>
		<script src="../js/lib/jquery.validate.js"></script>
		<script src="../js/lib/jquery.form.js"></script>
		<script src="../js/lib/jquery.cookie.js"></script>
		<script src="../js/lib/lazyload.min.js"></script>
		<script src="../js/lib/bootstrap.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.js"></script>
		
		<script src="../js/dist/common.js"></script>
		<script src="../js/dist/caseShow.js"></script>
	</body>
</html>