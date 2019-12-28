$(function(){
	$( "#signupForm" ).validate( {
		rules: {
			username:{
				required: true,
				minlength: 4,
				remote:{
					url : "php/is_user.php",
					type : "POST"
				},
			},
			password:{
				required: true,
				minlength: 8
			},
			confirm_password:{
				required: true,
				minlength: 8,
				equalTo: "#password"
			},
			name: "required",
			tel:"required",
			email: {
				required: true,
				email: true
			},
			agree: "required"
		},
		messages: {
			username:{
				required:"此输入框不能为空",
				minlength: "用户名必须长达4位",
				remote : "账号以被占用", 
			},
			password:{
				required: "此输入框不能为空",
				minlength: "密码必须长达8位"
			},
			confirm_password:{
				required: "此输入框不能为空",
				minlength: "密码必须长达8位",
				equalTo: "您的密码输入不一致"
			},
			name: "请输入您的真实姓名",
			tel : "请输入您的手机号",
			email: "请输入正确的邮箱地址",
			agree: "是否同意本站条款"
		},
		errorElement: "bold",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "help-block" );

			// Add `has-feedback` class to the parent div.form-group
			// in order to add icons to inputs
			element.parents( ".feedback" ).addClass( "has-feedback" );

			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			}

			// Add the span element, if doesn't exists, and apply the icon classes to it.
			if ( !element.next( "span" )[ 0 ] ) {
				$( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
			}
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
	
    
    //boot-datetimepicker-插件
     $( "#birthday" ).datetimepicker({
      	 format: 'yyyy-mm-dd',  
         weekStart: 1,  
         autoclose: true,  
         startView: 2,  
         maxViewMode: 1,
         minViewMode:1,
         forceParse: false,  
         language: 'zh-CN'  
    });
    
    //邮箱自动补全；
   /* $("#email").autocomplete({
    	autoFocus:true,
    	delay:0,
    	source:function(request,response){
    		var hosts=["qq.com","163.com","263.com","gmail.com","hotmail.com"];
    		var term=request.term;
    		var ix=term.indexOf("@");
    		var name=term;
    		var host="";
    		var result=[];
    		
    		//结果第一条是自己输入；
    		result.push(term);
    		
    		if(ix>-1){
    			name=term.slice(0,ix);
    			host=term.slice(ix+1);
    		}
    		if(name){
    			var findedHosts=(host?$.grep(hosts,function(value,index){
    				return value.indexOf(host)>-1;
    			}):hosts),
    			findedResult=$.map(findedHosts,function(value,index){
    				return name+"@"+value;
    			});
    			//增加一个自我输入；
    			result=result.concat(findedResult);
    		}
    		response(result);
    	}
    });*/
    
   $("#email").completer({
	  	separator: "@",
	  	source: ["qq.com","163.com","263.com","gmail.com","hotmail.com" , "outlook.com"]
	});
    
    //上传头像
	$("#userImage").change(function(e){
		if(e.target.files[0].size > 100*1024){
			$("#loading").find("img").attr('src',"images/wrong.jpg"); 
			$("#load-text").html("上传图片过大");
			$("#loading").modal("show");
		}else{
	        var file = e.target.files[0] || e.dataTransfer.files[0];//提取内容
	        $('#photoCover').val(document.getElementById("userImage").files[0].name);//给出名字
	        if(file){
	            var reader = new FileReader();
	            reader.onload=function(){
	                $("#imgShow").attr("src", this.result);
	            };
	            reader.readAsDataURL(file);
	        };
		};
		setTimeout(function(){
			$("#loading").modal("hide");
			$("#loading").find("img").attr('src',"images/loading.gif"); 
			$("#load-text").html("提交中，请稍后 ...");
		},2000);
   	});
   	
    //省市区级联菜单
    addressInit('cmbProvince', 'cmbCity', 'cmbArea');  
    
    //提交
	$("#signupForm").ajaxForm({
		url : "php/add_user.php",
		type : "POST",
		beforeSubmit : function(formData,jqForm,options){
			$("#loading").modal("show");
			$("#reg-submit").addClass("disabled").html("正在提交...");
		},
		success : function(responseText , statusText){
			if(responseText){
				$("#loading").find("img").attr('src',"images/ok.jpg"); 
				$("#load-text").html("提交成功！");
				$.cookie("username",$("#username").val());
				setTimeout(function(){
					$("#loading").modal("hide");
					$("#loading").find("img").attr('src',"images/loading.gif"); 
					$("#load-text").html("提交中，请稍后 ...");
					$("#member,#logout").show();
					$("#login-a,#reg-a").hide();
					$("#member").find("a").html($.cookie("username"));
					$("#signupForm").resetForm();//因为cookie，必须写在这里
				},1000);
				$("#reg-submit").removeClass("disabled").html("&nbsp;&nbsp;提 交 &nbsp;&nbsp;");
				$("#signupForm").find("div").removeClass("has-success");
				$("#signupForm").find("span:not(.span1)").remove();
			};
		},
	});
});

//省市区级联菜单
function addressInit(defaultProvince, defaultCity, defaultArea){  
    var oProvince = document.getElementById('province');  
    var oCity = document.getElementById('city');  
    var oArea = document.getElementById('area');
    function cmbSelect(cmb, str){  
        for(var i=0; i<cmb.options.length; i++){  
            if(cmb.options[i].value == str){  
                cmb.selectedIndex = i;  
                return;  
            };  
        };
    };
    cmbSelect(oProvince, defaultProvince);  
    
    function cmbAddOption(cmb, str, obj){  
        var option = document.createElement("OPTION");  
        cmb.options.add(option);  
        option.innerText = str;  
        option.value = str;  
        option.obj = obj;  
    };
    
    for(var i=0; i<provinceList.length; i++){  
        cmbAddOption(oProvince, provinceList[i].name, provinceList[i]);  
    };
      
    function changeCity(){  
        oArea.options.length = 0;  
        if(oCity.selectedIndex == -1)return;  
        var item = oCity.options[oCity.selectedIndex].obj;  
        for(var i=0; i<item.areaList.length; i++){  
            cmbAddOption(oArea, item.areaList[i], null);  
        };  
        cmbSelect(oArea, defaultArea);  
    };  
    function changeProvince(){  
        oCity.options.length = 0;  
        oCity.onchange = null;  
        if(oProvince.selectedIndex == -1)return;  
        var item = oProvince.options[oProvince.selectedIndex].obj;  
        for(var i=0; i<item.cityList.length; i++) {  
            cmbAddOption(oCity, item.cityList[i].name, item.cityList[i]);  
        }  
        cmbSelect(oCity, defaultCity);  
        changeCity();  
        oCity.onchange = changeCity;  
    };  
    changeProvince();  
    oProvince.onchange = changeProvince;
};
