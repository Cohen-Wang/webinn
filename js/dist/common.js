// JavaScript Document
$(function(){
	
	//懒加载
	/*imgLazyLoad();
	function imgLazyLoad(){
		$('img.lazy').lazyload({
			effect : "fadeIn",
		});
	};*/
	
	$(document).ajaxStart(function(){
		$("#ajax-loader").show();
	}).ajaxStop(function(){
		setTimeout(function(){
			$("#ajax-loader").hide();
		},1000)
	})
	
	
	/*注册 登录成功后 cookie*/
	if($.cookie("username")){
		$("#member,#logout").show();
		$("#login-a,#reg-a").hide();
		$("#member").find("a").html($.cookie("username"));
	}else{
		$("#member,#logout").hide();
		$("#login-a,#reg-a").show();
		$("#member").find("a").html(" ");
	};
	
	//登录
	$( "#loginForm" ).validate( {
		rules : {
			loginUser : {
				required : true,
				minlength : 4,
			},
			loginPassword : {
				required : true,
				minlength : 8,
				/*remote : {
					url : "php/login.php",
					type : "POST",
					data : {
						loginUser : function (){
							return $("#loginUser").val();
						},
					},
				},*/
			},
		},
		messages: {
			loginUser:{
				required:"此输入框不能为空",
				minlength: "用户名必须长达4位",
				remote : "账号以被占用", 
			},
			loginPassword : {
				required : "此输入框不能为空",
				minlength : "密码必须长达8位",
				/*remote : "账号或密码不正确",*/
			},
		},
		errorElement: "bold",
		errorPlacement: function ( error, element ) {
			error.addClass( "help-block" );
			element.parents( ".feedback" ).addClass( "has-feedback" );
			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			};
			if ( !element.next( "span" )[ 0 ] ) {
				$( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
			};
		},
		success: function ( label, element ) {
			// Add the span element, if doesn't exists, and apply the icon classes to it.
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
	
	
	/*$("#login-form").find("input[name=password]").on("keydown",function(event){
		var event = event || window.event;
		var key = event.keyCode || event.which;
		if(event.keyCode == 13){login()}
	});
	$('#login-confirm').on('click',login)*/
	
	$("#loginForm").ajaxForm({
		url : "php/login.php",
		type : "POST",
		beforeSubmit : function(formData,jqForm,options){
			$("#login-modal").modal("hide");
			$("#loading").modal({
				show:true,
				backdrop: 'static', 
				keyboard: false,
			});
		},
		success : function(responseText , statusText){
			if(responseText == "true"){
				$("#loading").find("img").attr("src","images/ok.jpg"); 
				$("#load-text").html("登录成功！");
				if ($("#expire").is(":checked")) {
					$.cookie("username", $("#loginUser").val(), {
						expires : 7,
					});
				} else {
					$.cookie("username", $("#loginUser").val());
				};
				setTimeout(function(){
					$("#loading").modal("hide");
					$("#loading").find("img").attr('src',"images/loading.gif"); 
					$("#load-text").html("提交中，请稍后 ...");
					$("#member,#logout").show();
					$("#login-a,#reg-a").hide();
					$("#member").find("a").html($.cookie("username"));
					$("#signupForm").resetForm();//因为cookie，必须写在这里
				},1500);
				$("#logSubmit").removeClass("disabled").html("提交");
				$("#loginForm").find("div").removeClass("has-success");
				$("#loginForm").find("span").remove();
			}else{
				$("#loading").find("img").attr("src","images/wrong.jpg"); 
				$("#load-text").html("账号或密码不正确！");
				setTimeout(function(){
					$("#loading").modal("hide");
					$("#loading").find("img").attr('src',"images/loading.gif"); 
					$("#load-text").html("提交中，请稍后 ...");
					$("#login-modal").modal("show");
				},1500);
				$("#logSubmit").removeClass("disabled").html("提交");
				$("#loginForm").find("div").removeClass("has-success");
				$("#loginForm").find("span").remove();
			};
		},
		error : function(){
			alert("连接错误");
			$("#loading").modal("hide");
		},
	});
	
	
	
	
	
	/*function login(){
 		var user = $('form input[name=user]').val();
        var password = $('form input[name=password]').val();
        if(user == ''){//判断用户名不为空
        	if($('#login-warning').find('div').length){
        		$('#login-warning').find('.msg').remove();
        		$('<div class = "msg">').html('用户名不能为空').appendTo('#login-warning').fadeOut(2000);
        	}else{
        		$('<div class = "msg">').html('用户名不能为空').appendTo('#login-warning').fadeOut(2000);
        	}
            $('form input[name = user]').focus();
            return;
        };
        if(password == ''){//判断密码不为空
        	if($('#login-warning').find('div').length){
        		$('#login-warning').find('.msg').remove();
            	$('<div class = "msg">').html('密码不能为空').appendTo('#login-warning').fadeOut(2000);
            }else{
           		$('<div class = "msg">').html('密码不能为空').appendTo('#login-warning').fadeOut(2000);
            }
            $('form input[name=password]').focus();
            return;
        };
        $.ajax({
            type:'POST',
            url:'data/login.json',
            async:true,
            data:{
                user:user,
                password:password,
            },
            success:function(data){
                for(var i=0;i<data.user.length;i++){
                    if(user == data.user[i].name && password == data.user[i].password){
                       $("#login-modal").find("form").remove();
	                    $("#login-modal").find(".modal-footer").remove();
	                    $("#login-modal").find(".modal-body").html("<center><p><strong>"+user+"</strong>,恭喜你登录成功</p></center>");
	                    $.cookie("user",user)
						if($.cookie("user")){
							$("#member,#logout").show();
							$("#login-a,#reg-a").hide();
							$("#member").find("a").html($.cookie("user"));
						}else{
							$("#member,#logout").hide();
							$("#login-a,#reg-a").show();
							$("#member").find("a").html(" ");
						};
						return;                 //成功后不再执行
                    }
                };
	        	if($('#login-warning').find('div').length){
	        		$('#login-warning').find('.msg').remove();
	            	$('<div class = "msg">').html('用户名或密码不正确').appendTo('#login-warning').fadeOut(2000);
	            }else{
	           		$('<div class = "msg">').html('用户名或密码不正确').appendTo('#login-warning').fadeOut(2000);
	            }
	            $('form input[name=password]').focus();
	            return;
	        },
            error:function(res){
            	alert(res.status+"---"+res.statusText)
            },
    	});
	};*/
	
    
	//退出登录
	$("#logout").on("click",function(){
		$("#logout-modal").modal("show");
	});
	$("#logout-confirm").on("click",function(){
		$.removeCookie("username");
		window.location.href = "component.html" ;
	});
	$("#logout-cancel").on("click",function(){
		$("#logout-modal").modal("hide");
	});
	
	
	//一键回顶
	backTop();
	function backTop(){
		var backTop = document.querySelector(".backTop");
		
		window.onscroll = function(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			backTop.style.right=scrollTop>300?"40px":"-40px ";
		}
		backTop.onclick=function(){
			$('body').animate({scrollTop:0},500);//??????????????????????????????????????????????
		};
	};
});