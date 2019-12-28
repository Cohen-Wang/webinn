<!DOCTYPE html>
<!--[if lt IE 9]><script>window.location.href="../error/error.html"</script><![endif]-->
<html>
	<head>
		
		<?php include "../php/template/head.php"?>
		<title>WEB客栈-知识总结</title>
		
	</head>
	<body>
		
		<?php include "../php/template/nav.php"?>
		
		<div class="container" id="summary">
			<div class="row">
				<ol class="breadcrumb">
					<li><a href="index.html">首页</a></li>
					<li class="active">总结</li>
				</ol>
				
				<div class="col-md-12" style="background-color: #f5f5f5;margin:20px 0;padding: 20px 30px;">
					<ul class="list-inline">
						<span>语言总结:</span>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">css</a>
						<li><a href="javascript:void(0)" class="btn btn-link">javascript</a>
						<li><a href="javascript:void(0)" class="btn btn-link">jQuery</a>
						<li><a href="javascript:void(0)" class="btn btn-link">vue.js</a>
					</ul>
					<ul class="list-inline">
						<span>时间:</span>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
					</ul>
					<ul class="list-inline">
						<span>后端总结:</span>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
						<li><a href="javascript:void(0)" class="btn btn-link">html</a>
					</ul>
				</div>
				<component :is="content"></component>
				
				
				<!--确认删除-模态框S-->
			    <div role="dialog" class="modal bs-example-modal-sm" id="layer">
			        <div class="modal-dialog">
			            <div class="modal-content">
			                <div class="modal-header">
			                    <button type="button" class="close" data-dismiss="modal">
			                        <span>&times;</span>
			                    </button>
			                    <h4 class="modal-title">确认删除么?</h4>
			                </div>
			                <div class="modal-body text-right">
			                    <button data-dismiss="modal" class="btn btn-primary btn-sm">取消</button>
			                    <button data-dismiss="modal" class="btn btn-danger btn-sm" v-on:click="deleteMsg(nowIndex)">确认</button>
			                </div>
			            </div>
			        </div>
			    </div>
			    <!--确认删除-模态框E-->
			</div>
			
		</div><!--container-->
		
		
		<template id="html">
			<div class="table-responsive panel panel-primary">
			  	<div class="panel-heading">HTML总结</div>
			  	<div class="panel-body" >
			    	<p>HTML 2.0——1993年6月作为互联网工程工作小组（IETF）工作草案发布（并非标准）：</p>
			    	<p>HTML 2.0——1995年11月作为RFC 1866发布，在RFC 2854于2000年6月发布之后被宣布已经过时</p>
			    	<p>HTML 3.2——1997年1月14日，W3C推荐标准"</p>
			    	<p>HTML 4.0——1997年12月18日，W3C推荐标准</p>
					<p>HTML 4.01（微小改进）——1999年12月24日，W3C推荐标准</p>
					<p>HTML 5——2014年10月28日，W3C推荐标准</p>
			  	</div>
				<table class="table table-hover table-condensed">
				    <thead>
				        <tr>
				        	<th>序号</th>
				        	<th>标签名</th>
				        	<th>英文</th>
				        	<th>作用</th>
				        	<th>版本</th>
				        	<th>操作</th>
				        </tr>
				    </thead>
				    <tbody>
				    	<tr>
							<td colspan="9" class="text-right">
								<button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#htmlAdd-modal">添加</button>
								<button class="btn btn-sm btn-danger" data-toggle="modal" data-target="#layer"  v-show="htmlCont.length!=0" @click="nowIndex=-2;alert('1')">删除全部</button>
							</td>
						</tr>
				    	<tr v-for="(item, index) in htmlCont">
				    		<td v-text="index+1"></td>
				            <td><code v-text="item.markup"></code></td>
				            <td v-text="item.word"></td>
				            <td><small v-text="item.effect"></small></td>
				            <td v-text="item.version"></td>
				            <td><button class="btn btn-link btn-sm" data-toggle="modal" data-target="#layer" @click="nowIndex=index">删除</button></td>
				       </tr>
				       	<tr v-show="htmlCont.length==0">
							<td colspan="9" class="text-center text-muted">
								<p>暂无数据...</p>
							</td>
						</tr>
				    </tbody>
				</table>
				<!--添加-模态框S-->
			    <div class="modal" id="htmlAdd-modal">
			        <div class="modal-dialog modal-sm">
			            <div class="modal-content">
			                <div class="modal-header">
			                    <button type="button" class="close" data-dismiss="modal">
			                        <span> &times;</span>
			                    </button>
			                    <h4 class="modal-title">HTML添加</h4>
			                </div>
			                <div class="modal-body">
			                   <form id="htmlForm" action=""  method="post">
									<div class="form-group">
										<label for="markup">标签名：</label>
										<div>
											<input id="markup" class="form-control" autofocus="autofocus" type="text" name="markup" maxlength="20"/>
										</div>
									</div>
									<div class="form-group">
										<label for="word">英文：</label>
										<div>
											<input id="word" class="form-control" type="text" name="word" maxlength="20" />
										</div>
									</div>
									<div class="form-group">
										<label for="effect">作用：</label>
										<div>
											<input id="effect" class="form-control" type="text" name="effect"  maxlength="20" />
										</div>
									</div>
									<div class="form-group">
										<label for="version">版本：</label>
										<div>
											<input id="version" class="form-control" type="text" name="version" maxlength="20" />
										</div>
									</div>
									<div class="form-group">
										<input  class="btn btn-block btn-primary" type="submit" value=" 提 交 " />
									</div>
								</form>
			                </div>
			            </div>
			        </div>
			    </div>
			    <!--添加-模态框E-->
			</div>
		</template>
		
		<template id="css">
			<div class="table-responsive panel panel-primary">
				<div class="panel-heading">CSS兼容性和前缀总结</div>
			  	<div class="panel-body" >
			    	<p>CSS1:作为一项W3C推荐，CSS1发布于 1996年12月17 日。1999 年1月11日，此推荐被重新修订。</p>
			    	<p>CSS2:作为一项 W3C 推荐，CSS2发布于 1999年1月11日。CSS2添加了对媒介（打印机和听觉设备）和可下载字体的支持。</p>
			    	<p>CSS3:1998年W3C发布了CSS的第二个版本即CSS2.0,2001年5月W3C开始进行CSS3标准的制定，到目前为止该标准还没有最终定稿。</p>
			  	</div>
				<table class="table table-striped table-hover">
				    <thead>
				        <tr>
				        	<th>序号</th>
				        	<th>编号</th>
				        	<th>属性</th>
				        	<th>IE</th>
				        	<th>Firefox</th>
				        	<th>Chrome</th>
				        	<th>Opera</th>
				        	<th>操作</th>
				        </tr>
				    </thead>
				    <tbody>
				    	<tr>
							<td colspan="9" class="text-right">
								<button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#cssAdd-modal">添加</button>
								<button class="btn btn-sm btn-danger" data-toggle="modal" data-target="#layer"  v-show="cssCont.length!=0" @click="nowIndex=-2">删除全部</button>
							</td>
						</tr>
				    	<tr v-for="(item, index) in cssCont">
				    		<td v-text="index+1"></td>
				            <td v-text="item.number"></td>
				            <td><code v-text="item.word"></code></td>
				            <td v-text="item.ie"></td>
				            <td v-text="item.firefox"></td>
				            <td v-text="item.chrome"></td>
				            <td v-text="item.opera"></td>
				            <td>
								<button class="btn btn-link btn-sm" data-toggle="modal" data-target="#layer" @click="nowIndex=index">删除</button>
							</td>
				       	</tr>
				       	
				       	<tr v-show="cssCont.length==0">
							<td colspan="9" class="text-center text-muted">
								<p>暂无数据...</p>
							</td>
						</tr>
				    </tbody>
				</table>
				<!--添加-模态框S-->
			    <div class="modal" id="cssAdd-modal">
			        <div class="modal-dialog modal-sm">
			            <div class="modal-content">
			                <div class="modal-header">
			                    <button type="button" class="close" data-dismiss="modal">
			                        <span> &times;</span>
			                    </button>
			                    <h4 class="modal-title">CSS添加</h4>
			                </div>
			                <div class="modal-body">
			                   <form id="cssForm" action=""  method="post">
									<div class="form-group">
										<label for="number">编号：</label>
										<div>
											<input id="number" class="form-control" autofocus="autofocus" type="text" name="number" maxlength="20"/>
										</div>
									</div>
									<div class="form-group">
										<label for="word">样式：</label>
										<div>
											<input id="word" class="form-control" type="text" name="word" maxlength="20" />
										</div>
									</div>
									<div class="form-group">
										<label for="ie">ie：</label>
										<div>
											<input id="ie" class="form-control" type="text" name="ie"  maxlength="20" />
										</div>
									</div>
									<div class="form-group">
										<label for="firefox">firefox：</label>
										<div>
											<input id="firefox" class="form-control" type="text" name="firefox" maxlength="20" />
										</div>
									</div>
									<div class="form-group">
										<label for="chrome">chrome：</label>
										<div>
											<input id="chrome" class="form-control" type="text" name="chrome" maxlength="20" />
										</div>
									</div>
									<div class="form-group">
										<label for="opera">opera：</label>
										<div>
											<input id="opera" class="form-control" type="text" name="opera" maxlength="20" />
										</div>
									</div>
									<div class="form-group">
										<input  class="btn btn-block btn-primary" type="submit" value=" 提 交 " />
									</div>
								</form>
			                </div>
			            </div>
			        </div>
			    </div>
			    <!--添加-模态框E-->
			</div>
		</template>
		
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
		
		<script type="text/javascript" src="../js/lib/jquery.min.js"></script>
		<script type="text/javascript" src="../js/lib/jquery.validate.js"></script>
		<script type="text/javascript" src="../js/lib/jquery.form.js"></script>
		<script type="text/javascript" src="../js/lib/jquery.cookie.js"></script>
		<script type="text/javascript" src="../js/lib/lazyload.min.js"></script>
		<script type="text/javascript" src="../js/lib/bootstrap.min.js"></script>
		<script type="text/javascript" src="../js/lib/vue.min.js"></script>
		<script type="text/javascript" src="../js/lib/vue-resource.min.js"></script>
		
		<script type="text/javascript" src="../js/dist/common.js"></script>
		<script type="text/javascript" src="../js/dist/summary.js"></script>
	</body>
</html>