$(function(){
	
	
	
	/*var abc=null;
	messageShow();
	function messageShow(){
		$.ajax({
			url : "php/show_user.php",
			type : "POST",
			success : function(response,status,xhr){
				abc = $.parseJSON(response);
				
			},
		});
	};*/
	
	
	new Vue({
		el : "#introduction",
		data : {
			data : " ",
		},
		methods : {
			get : function(){
				url="../php/show_user.php";
				this.$http.post(url,{
					username : $.cookie("username")
				},{
					emulateJSON : true,
				}).then(function(res){
					this.data = $.parseJSON(res.bodyText)[0];
					//console.log(this.data.username)
				},function(){
					alert("没连接上");
				})
			},
		},
		mounted:function(){
			this.get();
		},
	})
});
