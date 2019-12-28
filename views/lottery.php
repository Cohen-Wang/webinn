<!DOCTYPE html>
<!--[if lt IE 9]><script>window.location.href="../error/error.html"</script><![endif]-->
<html>

	<head>
		
		<?php include "../php/template/head.php"?>
		
		<title>WEB客栈-lottery</title>
		<style>
			#lottery{min-height:900px;}
			.box{text-align: center;font:500 40px/1 "arial narrow"; margin-bottom: 20px;padding: 15px 0px;}
		</style>
	</head>
		
	<body>
		
		
		<div class="container-fluid" id="lottery" style="background: #fff;padding-bottom:0px;padding-top: 20px;">
			<!--canvas S-->
			<div id="box" style="height:400px;">
				
			</div>
			<!--canvas S-->
			<hr />
			
	        <div class="panel panel-info">
	            <div class="panel-heading">查询条件</div>
	            <div class="panel-body">
	            	
	                <div class="btn-group pull-left" style="margin-bottom: 10px;">
	                	<button class="btn btn-primary" @click="createFive()">
	                		<span class="glyphicon glyphicon-plus"></span> 随机生成
	                	</button>
		        		<button class="btn btn-default">
		        			 <span class="glyphicon glyphicon-plus"></span> 记录结果
		        		</button>
		        		<button class="btn btn-default">
			                <span class="glyphicon glyphicon-pencil"></span> 修改
			            </button>
			            <button class="btn btn-danger">
			                <span class="glyphicon glyphicon-remove"></span> 删除
			            </button>
		        	</div>
		        	
		        	<div class="btn-group pull-left" style="margin-bottom: 10px;line-height: 34px;margin-left: 20px;font-weight: 900;font-size: 18px;">
	                	<span v-text="now.year"></span>-<span v-text="now.month"></span>-<span v-text="now.day"></span>  
	                	<span v-text="now.hour"></span>-<span v-text="now.minute"></span>-<span v-text="now.second"></span>
		        	</div>
		        	
		        	
		        	<div class="btn-group pull-right">
		        		<button class="btn btn-default" type="button" name="refresh" title="刷新">
		        			<i class="glyphicon glyphicon-refresh icon-refresh"></i>
		        		</button>
		        		<button class="btn btn-default" type="button" name="toggle" title="切换">
		        			<i class="glyphicon glyphicon-list-alt icon-list-alt"></i>
		        		</button>
		        		<div class="keep-open btn-group" title="列">
		        			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
		        				<i class="glyphicon glyphicon-th icon-th"></i>
		        				<span class="caret"></span>
		        			</button>
		        			<ul class="dropdown-menu" role="menu">
		    					<li>
		    						<label><input type="checkbox" data-field="Name" value="1" checked="checked"> 部门名称</label>
		    					</li>
		    					<li>
		    						<label><input type="checkbox" data-field="ParentName" value="2" checked="checked"> 上级部门</label>
		    					</li>
		    					<li>
		    						<label><input type="checkbox" data-field="Level" value="3" checked="checked"> 部门级别</label>
		    					</li>
		    					<li>
		    						<label><input type="checkbox" data-field="Desc" value="4" checked="checked"> 描述</label>
		    					</li>
		    				</ul>
		        		</div>
		        	</div>
		    		<div class="pull-right search" style="margin-right: 10px;"><input class="form-control" type="text" placeholder="搜索"></div>
		    		
		    		
			        <table class="table table-hover table-bordered table-responsive" id="" style="border-radius: 24px;">
			        	<caption><h3 class="text-center text-primary">详细信息</h3></caption>
			        	<thead class="text-center">
			        		<tr>
			        			<th style="width:40px;text-align: center;"><input type="checkbox" name="" id="" value="" /></th>
			        			<th style="width:50px;text-align: center;">#</th>
			        			<th style="width:120px;text-align: center;">日期</th>
			        			<th style="text-align: center;">第一注</th>
			        			<th style="text-align: center;">第二注</th>
			        			<th style="text-align: center;">第三注</th>
			        			<th style="text-align: center;">第四注</th>
			        			<th style="text-align: center;">第五注</th>
			        			<th style="text-align: center;">操作</th>
			        		</tr>
			        	</thead>
			        	<tbody class="text-center">
			        		<tr v-for="(lotteryItem , lotteryIndex) in lotteryConfig" v-show="lotteryConfig.length !== 0">
			        			<td style="width:40px;text-align: center;">
			        				<input type="checkbox" name="" id="" value="" />
			        			</td>
			        			<td v-text="lotteryIndex + 1"></td>
			        			<td v-text="lotteryItem.date"></td>
			        			<td v-for="(numItem , numIndex) in lotteryItem.lotterys">
			        				<span class="ball ball-danger">{{numItem.one}}</span>
			        				<span class="ball ball-danger">{{numItem.two}}</span>
			        				<span class="ball ball-danger">{{numItem.three}}</span>
			        				<span class="ball ball-danger">{{numItem.four}}</span>
			        				<span class="ball ball-danger">{{numItem.five}}</span>
			        				<span class="ball ball-danger">{{numItem.six}}</span>
			        				<span class="ball ball-primary">{{numItem.seven}}</span>
			        			</td>
			        			<td style="width:100px"><a href="###" class="btn btn-link btn-xs">删除</a></td>
			        		</tr>
			        		<tr v-show="lotteryConfig.length == 0">
			        			<td colspan="100" class="text-center" style="background: #eee;">没有找到匹配的记录</td>
			        		</tr>
			        	</tbody>
			        </table>
			        
			        <div class="col-md-12">
			        	<div class="col-md-6">
				        	<p>
				        		显示第 <b>1</b> 到第 <b>10</b> 条记录，总共 <b>50</b> 条记录，每页显示
				        		<select class="control-label" name="" id="">
					        		<option value="">5</option>
					        		<option value="">10</option>
					        		<option value="">15</option>
					        	</select>
				        	</p>
				        </div>
				        <div class="col-md-6">
				        	<nav class="pull-right">
							  	<ul class="pagination">
							    	<li>
							      		<a href="#"><span aria-hidden="true">&laquo;</span></a>
							    	</li>
								    <li class="active"><a href="#">1</a></li>
								    <li><a href="#">2</a></li>
								    <li><a href="#">3</a></li>
								    <li><a href="#">4</a></li>
								    <li><a href="#">5</a></li>
								    <li>
							      		<a href="#"><span aria-hidden="true">&raquo;</span></a>
							    	</li>
							  	</ul>
							</nav>
				        </div>
			        </div>
			        
			        <div class="col-md-12 text-center">
						<div class="col-md-2 col-md-offset-5">
							<button class="btn btn-success btn-block" @click="download()">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<span class="glyphicon glyphicon-save"></span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</button>
						</div>
					</div>
					
	            </div>
	        </div>
	        
	        <pre id="box" style="max-height: 500px;">{{lotteryConfig}}</pre>
	        
	    </div><!--panel-body-->
	    
		
		<script src="../js/lib/jquery.min.js"></script>
		<script src="../js/lib/bootstrap.min.js"></script>
		<script src="../js/lib/vue.min.js"></script>
		<script src="../js/lib/vue-resource.min.js"></script>
		<script src="../js/lib/echarts.min.js"></script>
		
		<script type="text/javascript" src="../js/utils/cyber.util.js"></script>
		<script type="text/javascript" src="../js/utils/format.tool.js"></script>
		<script type="text/javascript" src="../js/app/DownloadText.js"></script>
		
		
		<script src="../js/dist/lottery.js"></script>
	</body>
</html>
