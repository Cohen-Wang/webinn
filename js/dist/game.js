(function(){
	//获取url传参	
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
	document.title+="-"+GetQueryString("content");
	
	sreateScript()
	function sreateScript(){
		var oSrc = document.createElement("script");
		oSrc.src = "js/"+GetQueryString("content")+".js";
		document.getElementsByTagName("head")[0].appendChild(oSrc);
	}
	
})();