$(function(){
	
	//iframe显示的数据
	iframeShow();
	function iframeShow(){
		var oCaseShowIframe = document.querySelector('#caseShow-iframe');
		
		function GetQueryString(name) { 
		  	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		  	var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
		  	var context = ""; 
		  	if (r != null) 
		     	context = r[2]; 
		  	reg = null; 
		  	r = null; 
		  	return context == null || context == "" || context == "undefined" ? "" : context; 
		}
		oCaseShowIframe.src=GetQueryString("name");
 		document.title+="-"+GetQueryString("name");
	};
	
	
	messageShow()
	function messageShow(){
		$.ajax({
			url : "php/show_content.php",
			type : "POST",
			success : function(response,status,xhr){
				var json = $.parseJSON(response);
				var html = " ";	
				var arr = [];
				var summary = [];
				
				$.each(json,function(index,value){
					html += "<li class='media'><div class='media-left'><a href='#'><img src='images/html.jpg' alt='' class='userHeadImg' /></a></div><div class='media-body'><h5 class='media-heading comment-date'>"+ value.username +" 发表于 "+ value.date +"</h5><h4 class='media-heading comment-title'><a href='#'>"+ value.title +"</a></h4><div class='editor comment-content'>"+ value.content +"</div><div class='bottom clearfix'>0条评论 <span class='up'>收起</span></div></div></li><hr />";
				});
				$(".messageCont").html("").append(html);
				
				$.each($(".editor"),function(index,value){
					arr[index] = $(value).html();
					//alert(arr[index].substr(0,200));
					summary[index] = arr[index].substr(0,200);
					if(summary[index].substring(199,200) == "<"){
						summary[index] = replacePos(summary[index],200,"")
					};
					if(summary[index].substring(198,200) == "</"){
						summary[index] = replacePos(summary[index],200,"")
						summary[index] = replacePos(summary[index],199,"")
					};	
					if(arr[index].length > 200){
						summary[index] += "<span class='down'>...显示全部</span> ";
						$(value).html(summary[index]);
					}
				});
				$(".bottom .up").hide();
				$.each($(".editor"),function(index,value){
					$(this).on("click",".down",function(){
						$(".editor").eq(index).html(arr[index]);
						$(this).hide();
						$(".bottom .up").eq(index).show();
					});
				})
				$.each($(".bottom "),function(index,value){
					$(this).on("click",".up",function(){
						$(".editor").eq(index).html(summary[index]);
						$(this).hide();
						$(".editor .down").eq(index).show();
					})
				})
			}
		})
	}
	
	//全局--替换特殊字符函数
	function replacePos(strObj,pos,replaceText){
		return strObj.substr(0,pos-1) + replaceText +strObj.substring(pos,strObj.length)
	};
	
	//留言板样式插件
	$(".messageBoard-editor").summernote({
		height: 200,
		minHeight: 200,
		maxHeight: 200,
		focus: true,
	});
	
	//设置初始文字
	$("#questionForm").find(".panel-body").html("请输入问题描述...")
	//点击事件
	$("#questionForm").find(".panel-body").on("click",function(){
		if($.cookie("username")){
			//$("#questionModal").modal("show");
		}else{
			$("#needLogin").modal("show");
			setTimeout(function(){
				$("#needLogin").modal("hide");
				$("#login-modal").modal("show");
			},1000)
		}
	})
	
	//提交留言
	$("#questionForm").find("input[type=submit]").click(function(){
		if($.cookie("username")){
			if(!$("#questionForm").find(".panel-body").html()){
				$("#questionForm").ajaxForm({
					url : "php/add_content.php",
					type : "POST",
					data : {
						username : $.cookie("username")
					},
					beforeSubmit : function(formData,jqForm,options){
						$("#loading").show();
						$("#questionForm").find("input[type=submit]").addClass("disabled").attr("value","正在提交...");
					},
					success : function(responseText , statusText){
						if(responseText){
							$("#loading").find("img").attr('src',"images/ok.jpg"); 
							$("#load-text").html("提交成功！");
							$.cookie("username",$("#username").val());
							setTimeout(function(){
								$("#loading").hide();
								$("#loading").find("img").attr('src',"images/loading.gif"); 
								$("#load-text").html("数据交互中 . . .");
								$("#questionForm").find("input[type=submit]").removeClass("disabled").attr("value"," 发 布 ");
								messageShow();
							},1000);
							$("#questionForm").find(".panel-body").html("请输入问题描述...")
						};
					},
					resetForm : true,
				});
			}else{
				alert("留言不能为空")
			}
		}else{
			alert("请先登录")
		}
	})
	
});
