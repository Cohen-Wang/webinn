$(function(){
	function getURLString(name) { 
	  	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	  	var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
	  	var context = ""; 
	  	if (r != null) 
	     	context = r[2]; 
	  	reg = null; 
	  	r = null; 
	  	return context == null || context == "" || context == "undefined" ? "" : context; 
	};
	
	var url=null;
	var vm = new Vue({
		el:'#summary',
		data:{
			content:"my"+getURLString("content"),
		},
		components:{
			"myhtml":{
				template:"#html",
				data:function(){
					return{
						htmlCont:" ",
						nowIndex:-100,
					}
				},
				methods:{
					get:function(){
						url="../php/show_html.php";
						this.$http.get(url).then(function(res){
							this.htmlCont=$.parseJSON(res.bodyText)
						},function(){
							alert("没连接上");
						})
					},
					/*deleteMsg:function(n){
						alert("1")
						if(n==-2){
							this.data.detail=[];
						}else{
							this.data.detail.splice(n,1);
						}
					},*/
				},
				mounted:function(){
					this.get();
				},
			},
			"mycss":{
				template:"#css",
				data:function(){
					return{
						cssCont:"",
						nowIndex:-100,
					}
				},
				methods:{
					get:function(){
						url="php/show_css.php";
						this.$http.get(url).then(function(res){
							this.cssCont=$.parseJSON(res.bodyText)
						},function(){
							alert("没连接上");
						})
					},
					/*deleteMsg:function(n){
						alert("1")
						if(n==-2){
							this.data.detail=[];
						}else{
							this.data.detail.splice(n,1);
						}
					},*/
				},
				mounted:function(){
					this.get();
				},
			},
		}
	});
	
	
	//提交html
	$("#htmlForm").ajaxForm({
		url : "../php/add_html.php",
		type : "POST",
		beforeSubmit : function(formData,jqForm,options){
			$("#loading").show();
			$("#questionForm").find("input[type=submit]").addClass("disabled").attr("value","正在提交...");
		},
		success : function(responseText , statusText){
			if(responseText){
				$("#loading").find("img").attr('src',"images/ok.jpg"); 
				$("#load-text").html("提交成功！");
				$.cookie("username",$("#username").val());
				//异步
				setTimeout(function(){
					$("#loading").hide();
					$("#loading").find("img").attr('src',"images/loading.gif"); 
					$("#load-text").html("数据交互中 . . .");
					$("#htmlAdd-modal").modal("hide");
				},1000);
			};
		},
		resetForm : true,
	});
	
	//提交css
	$("#cssForm").ajaxForm({
		url : "../php/add_css.php",
		type : "POST",
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
					$("#cssAdd-modal").modal("hide");
				},1000);
			};
		},
		resetForm : true,
	});
	
	/*function strToJson(str){ 
		var json = eval('(' + str + ')'); 
		return json; 
	}*/
})