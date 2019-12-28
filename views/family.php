<!DOCTYPE html>
<!--[if lt IE 9]><script>window.location.href="../error/error.html"</script><![endif]-->
<html>
	<head>
		
		<?php include "../php/template/head.php"?>
		<title>WEB客栈-family</title>
		
	</head>
	<body>
		
		<div class="container-fluid" id="family" style="padding-bottom: 20px;">
			
			<!--<div id="box" style="height:400px;">
				
			</div>-->
			
			<div class="panel panel-default">
	            <div class="panel-heading">查询条件</div>
	            <div class="panel-body">
	            	
	                <div class="btn-group pull-left" style="margin-bottom: 10px;">
	                	<button class="btn btn-success" data-toggle="modal" data-target="#addUserModal">
	                		<span class="glyphicon glyphicon-plus"></span> 添加玩家
	                	</button>
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
		    		<div class="pull-right search" style="margin-right: 10px;"><input class="form-control" type="text" placeholder="搜索" v-model="searchVal" @keyup="changeSearchVal()"></div>
		    		
		    		
			        <table class="table table-hover table-bordered table-responsive" id="" style="border-radius: 24px;">
			        	<caption><h3 class="text-center text-primary">详细信息</h3></caption>
			        	<thead class="text-center">
			        		<tr>
			        			<th style="width:40px;text-align: center;"><input type="checkbox" name="" id="" value="" /></th>
			        			<th style="width:50px;text-align: center;">#</th>
			        			<th style="width:120px;text-align: center;">用户ID</th>
			        			<th style="text-align: center;">名字</th>
			        			<th style="text-align: center;">
			        				<button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-arrow-up"></span></button>
			        				年龄
			        				<button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-arrow-down"></span></button>
			        			</th>
			        			<th style="text-align: center;">
			        				<button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-arrow-up"></span></button>
			        				专业
			        				<button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-arrow-down"></span></button>
			        			</th>
			        			<th style="text-align: center;">国籍</th>
			        			<th style="text-align: center;width:200px;">操作</th>
			        		</tr>
			        	</thead>
			        	<tbody class="text-center">
			        		<tr v-for="(userItem , userIndex) in list">
			        			<td style="width:40px;text-align: center;">  <input type="checkbox" name="" id="" value="" />  </td>
			        			<td v-text="userIndex + 1"></td>
			        			<td v-text="userItem.id"></td>
			        			<td v-text="userItem.name"></td>
			        			<td v-text="userItem.age"></td>
			        			<td v-text="userItem.major"></td>
			        			<td v-text="userItem.country"></td>
			        			<td>
			        				<a href="javascript:void(0);" class="btn btn-link btn-xs">修改</a>
			        				<a href="javascript:void(0);" class="btn btn-link btn-xs" data-toggle="modal" data-target="#deleteUserModal" @click="deleteId = userItem.id">删除</a>
			        			</td>
			        		</tr>
			        		
			        		<tr>
			        			<td colspan="100" class="text-center bg-warning" v-show="list.length == 0">没有找到匹配的记录</td>
			        		</tr>
			        	</tbody>
			        </table>
			        
			        <div class="col-md-12">
			        	<div class="col-md-6">
				        	<p>
				        		显示第 <b class="text-danger" v-text="(currentPageSize * (currentPage - 1)) + 1"></b> 
				        		至 第 <b class="text-danger" v-text="currentPageSize * currentPage"></b> 
				        		条记录，总共 <b class="text-danger" v-text="totalNum"></b> 
				        		条记录，每页显示
				        		
				        		<select class="control-label select-page" name="" id="" v-model="currentPageSize" @change="changePageSize(event)">
					        		<option v-for="(pagerItem , pagerIndex) in pageSize" :value="pagerItem" v-text="pagerItem"></option>
					        	</select>
					        	条内容。
				        	</p>
				        </div>
				        <div class="col-md-6">
				        	<nav class="pull-right">
							  	<ul class="pagination">
							    	<li v-if="currentPage > 1"><a href="javascript:void(0);" @click="currentPage-- , pageClick()">上一页</a></li>
							    	<li v-if="currentPage == 1"><a class="not-allowed">上一页</a></li>
							    	
								    <li v-for="index in indexs" :class="{ 'active' : currentPage == index}">
							            <a href="javascript:void(0);" @click="changeCurrentPage(index)"><span v-text="index"></span></a>
							        </li>
								    
								    <li v-if="currentPage != totalPage"><a href="javascript:void(0);" @click="currentPage++ , pageClick()">下一页</a></li>
								    <li v-if="currentPage == totalPage"><a class="not-allowed">下一页</a></li>
								    
							    	<li><a>共<small class="text-danger" style="padding: 0 4px;" >{{totalPage}}</small>页</a></li>
							  	</ul>
							</nav>
				        </div>
			        </div>
			        
			        <div class="col-md-12 text-center">
						<div class="col-md-2 col-md-offset-5">
							<button class="btn btn-success btn-block">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<span class="glyphicon glyphicon-save"></span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</button>
						</div>
					</div>
	            </div>
	        </div>
		</div>
		
		<!--modal-->
		<div class="modal" id="addDataModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">添加数据</h4>
					</div>
					
					<div class="modal-body clearfix">
						
						
						<form class="form-inline">
							<div class="col-md-12" style="margin-bottom: 8px;">
								<label for="" class="col-md-2 control-label" style="line-height: 34px;">水费:</label>
							  	<div class="form-group">
							    	<input type="text" class="form-control" placeholder="用量">
							    	<input type="text" class="form-control" placeholder="价格">
							  	</div>
							</div>
							<div class="col-md-12" style="margin-bottom: 8px;">
								<label for="" class="col-md-2 control-label" style="line-height: 34px;">电费:</label>
							  	<div class="form-group">
							    	<input type="text" class="form-control" placeholder="用量">
							    	<input type="text" class="form-control" placeholder="价格">
							    	<input type="text" class="form-control" placeholder="总价">
							  	</div>
							</div>
							<div class="col-md-12" style="margin-bottom: 8px;">
								<label for="" class="col-md-2 control-label" style="line-height: 34px;">气费:</label>
							  	<div class="form-group">
							    	<input type="text" class="form-control" placeholder="用量">
							    	<input type="text" class="form-control" placeholder="价格">
							  	</div>
							</div>
						  	<div class="col-md-12" style="margin-bottom: 8px;">
								<label for="" class="col-md-2 control-label" style="line-height: 34px;">物管:</label>
							  	<div class="form-group">
							    	<input type="text" class="form-control" placeholder="用量">
							    	<input type="text" class="form-control" placeholder="价格">
							  	</div>
							</div>
							<div class="col-md-12" style="margin-bottom: 8px;">
								<label for="" class="col-md-2 control-label" style="line-height: 34px;">宽带:</label>
							  	<div class="form-group">
							    	<input type="text" class="form-control" placeholder="用量">
							    	<input type="text" class="form-control" placeholder="价格">
							  	</div>
							</div>
							<div class="col-md-12" style="margin-bottom: 8px;">
								<label for="" class="col-md-2 control-label" style="line-height: 34px;">空调:</label>
							  	<div class="form-group">
							    	<input type="text" class="form-control" placeholder="用量">
							    	<input type="text" class="form-control" placeholder="价格">
							  	</div>
							</div>
							<div class="col-md-12" style="margin-bottom: 8px;">
								<label for="" class="col-md-2 control-label" style="line-height: 34px;">油费:</label>
							  	<div class="form-group">
							    	<input type="text" class="form-control" placeholder="用量">
							    	<input type="text" class="form-control" placeholder="价格">
							  	</div>
							</div>
						</form>
					</div>
					
					
					<div class="modal-footer">
						<button class="btn btn-primary" data-dismiss="modal">确定</button>
						<button class="btn btn-default" data-dismiss="modal">取消</button>
					</div>
				</div>
			</div>
		</div>
		
		
		<script src="../js/lib/jquery.min.js"></script>
		<script src="../js/lib/bootstrap.min.js"></script>
		<script src="../js/lib/vue.min.js"></script>
		<script src="../js/lib/echarts.min.js"></script>
		<script src="../js/lib/vue-resource.min.js"></script>
		
		<script src="../js/dist/family.js"></script>
		
		
		<script>
			var dom = document.getElementById("box");
			var myChart = echarts.init(dom);
			var app = {};
			option = null;
			app.title = '堆叠柱状图';
			
			option = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    legend: {
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'直接访问',
			            type:'bar',
			            data:[320, 332, 301, 334, 390, 330, 320]
			        },
			        {
			            name:'邮件营销',
			            type:'bar',
			            stack: '广告',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'联盟广告',
			            type:'bar',
			            stack: '广告',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'视频广告',
			            type:'bar',
			            stack: '广告',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'搜索引擎',
			            type:'bar',
			            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
			            markLine : {
			                lineStyle: {
			                    normal: {
			                        type: 'dashed'
			                    }
			                },
			                data : [
			                    [{type : 'min'}, {type : 'max'}]
			                ]
			            }
			        },
			        {
			            name:'百度',
			            type:'bar',
			            barWidth : 5,
			            stack: '搜索引擎',
			            data:[620, 732, 701, 734, 1090, 1130, 1120]
			        },
			        {
			            name:'谷歌',
			            type:'bar',
			            stack: '搜索引擎',
			            data:[120, 132, 101, 134, 290, 230, 220]
			        },
			        {
			            name:'必应',
			            type:'bar',
			            stack: '搜索引擎',
			            data:[60, 72, 71, 74, 190, 130, 110]
			        },
			        {
			            name:'其他',
			            type:'bar',
			            stack: '搜索引擎',
			            data:[62, 82, 91, 84, 109, 110, 120]
			        }
			    ]
			};
			;
			if (option && typeof option === "object") {
			    myChart.setOption(option, true);
			}
		</script>
	</body>
</html>
