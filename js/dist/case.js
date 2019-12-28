$(function(){
	
	//bootstrap弹出框
	$('.btn-popver').popover({
		container:"body",
		trigger:"hover",
		placement:"bottom",
		animation:"true",
    });
	
	//vue数据
	caseShowAjaxPage();
	function caseShowAjaxPage(){
		var vm = new Vue({
			el : '#caseShow',
			data:{
				data : "",
			},
			methods : {
				get : function(){
					url="../php/show_case.php";
					this.$http.get(url).then(function(res){
						this.data=res.body;
					},function(){
						alert("没连接上");
					})
				},
			},
			/*computed : {
				filteredItem : function(){
					return this.data.slice(0,16);
				},
			},*/
			mounted:function(){
				this.get();
			},
		});
	};
	
	//vue分页
	/*function page(){
		Vue.component("page",{
	  		template:"#page",
	    	data:function(){
	      		return{
		        	current:1,
		        	showItem:5,
		        	allpage:15
	      		}
	    	},
	    	computed:{
	      		pages:function(){
	            	var pag = [];
	              	if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
	                   	//总页数和要显示的条数那个大就显示多少条
	                   	var i = Math.min(this.showItem,this.allpage);
	                   	while(i){
	                       	pag.unshift(i--);
	              		}
	              	}else{ //当前页数大于显示页数了
	                  	var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
	                      	i = this.showItem;
	                  	if( middle >  (this.allpage - this.showItem)  ){
	                      	middle = (this.allpage - this.showItem) + 1
	                  	}
	                  	while(i--){
	                      	pag.push( middle++ );
	                  	}
	              	}
	             	return pag;
	          	}
	  		},
	  		methods:{
				goto:function(index){
	  				if(index == this.current) return;
	    			this.current = index;
	    			//这里可以发送ajax请求
				},
	  		},
		});
	
		var vm = new Vue({
			el:'#caseShow',
		});
	};*/
	
	
	$("#caseUpload-btn").on("click",function(){
		if($.cookie("username")){
			$("#caseUpload-modal").modal("show")
		}else{
			$("#loading").find("img").attr("src","images/wrong.jpg");
			$("#load-text").html("请先登录");
			$("#loading").modal({
				show:true,
				backdrop: 'static', 
				keyboard: false,
			});
			setTimeout(function(){
				$("#loading").modal("hide");
				$("#loading").find("img").attr("src","images/loading.gif");
				$("#load-text").html("提交中，请稍后 ...");
				$("#login-modal").modal("show");
			},1000)
		}
	})
	
	//上传案例表格判断
	$( "#caseUpload-Form" ).validate( {
		rules: {
			title:{
				required: true,
				minlength: 4,
			},
			/*caseImage:{
				required: true,
			},
			caseFile:{
				required: true,
			},*/
		},
		messages: {
			title:{
				required:"此输入框不能为空",
				minlength: "案例描述必须长达4位",
			},
			/*caseImg:{
				required: "此输入框不能为空",
			},
			caseFile:{
				required: "此输入框不能为空",
			},*/
		},
		errorElement: "bold",
		errorPlacement: function ( error, element ) {
			error.addClass( "help-block" );

			element.parents( ".feedback" ).addClass( "has-feedback" );

			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			}

			if ( !element.next( "span" )[ 0 ] ) {
				$( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
			}
		},
		success: function ( label, element ) {
			if ( !$( element ).next( "span" )[ 0 ] ) {
				$( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
			}
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".feedback" ).addClass( "has-error" ).removeClass( "has-success" );
			$( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
		},
		unhighlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".feedback" ).addClass( "has-success" ).removeClass( "has-error" );
			$( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
		}
	});
	
	//上传文件之内容显示
	$("#caseImage").change(function(e){
        var file = e.target.files[0] || e.dataTransfer.files[0];//提取内容
        $('#caseImgCover').val(document.getElementById("caseImage").files[0].name);//给出名字
   	});
   	
   	$("#caseFile").change(function(e){
        var file = e.target.files[0] || e.dataTransfer.files[0];//提取内容
        $('#caseFileCover').val(document.getElementById("caseFile").files[0].name);//给出名字
   	});
   	
   	$("#caseUpload-Form").ajaxForm({
		url : "php/add_case.php",
		type : "POST",
		data : {
			username : $.cookie("username"),
		},
		beforeSubmit : function(formData,jqForm,options){
			$("#caseUpload-modal").modal("hide");
			$("#loading").modal("show");
			$("#reg-submit").addClass("disabled").html("正在提交...");
		},
		success : function(responseText , statusText){
			if(responseText){
				$("#loading").find("img").attr('src',"images/ok.jpg"); 
				$("#load-text").html("提交成功！");
				setTimeout(function(){
					$("#loading").modal("hide");
					$("#loading").find("img").attr('src',"images/loading.gif"); 
					$("#load-text").html("提交中，请稍后 ...");
				},1000);
				$("#caseUpload-Submit").removeClass("disabled").html("提交");
				$("#caseUpload-Form").find("div").removeClass("has-success");
				$("#caseUpload-Form").find("span:not(.span1)").remove();
				$("#caseUpload-Form").resetForm();//因为cookie，必须写在这里
			};
		},
	});
	
});