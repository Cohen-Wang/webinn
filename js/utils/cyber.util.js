

(function(){
	
	console.log("%cCyber Library"," font:900 14px/1 '微软雅黑';color:rgb(18,109,181)");
	
	C = c = cyber = window.cyber = window.c = {};
	
	c.getId = function(id) {
		return document.getElementById(id)
	};
	
	c.check = function(){
		
	};
	
	
	/*
	 *	字符串工具
	 * */
	c.trim = function(str) {
		return str.replace(/^\s+|\s+$/g, "");
	};
	
	
	
	
	
	
	
	/*
	 *	数组工具
	 * */
	c.each = function(arr, fn){
		for(var i = 0 , l = arr.length ; i < l; i++){
			fn(arr[i] , i);
		};
	};
	
	c.max = function(arr, fn) {
	    var tempArr = [];
	    for(var i = 0, len = arr.length; i < len; i++){
	    	if(arr[i] > tempArr[0]){
	    		tempArr[0] = arr[i];
	    		fn(tempArr[0]);
	    	}
	    }
	};
	
	//
	C.double = function (num){
		if(num < 10){
			return '0' + num
		}else{
			return num;
		}
	};
	
	
	
	C.getStyle = function(element, attr){
      	if(element.currentStyle){
        	return element.currentStyle[attr];
      	}else{
        	return window.getComputedStyle(element,null)[attr];
      	}
    }
	
	//img
	//图片去后缀
	C.deleteImgSuffix = function(imgName){
		var index = imgName.indexOf('.');
		var title = imgName.substring(0, index);
		return title;
	};
	
	
	/*去掉对象中，带有下划线的私有属性*/
	
	//判断对象是否为数组；
	C.isArray = function(obj){  
	    if(Array.isArray){  
	        return Array.isArray(obj);  
	    }else{  
	     return Object.prototype.toString.call(obj)==="[object Array]";  
	    };
	};
	
	//深拷贝
	C.deepcopy = function(obj){
		var objArray = C.isArray(obj) ? [] : {};
		if(obj && typeof obj === 'object'){
			for(key in obj){
				if(obj.hasOwnProperty(key)){
					if(obj[key] != 'undefined' && typeof obj[key] === 'object'){
						objArray[key] = C.deepcopy(obj[key]);
					}else{
						objArray[key] = obj[key];
					};
				};
			};
		};
		return objArray;
	};
	
	
	//删除对象中，带有下划线的私有属性；
	C.deletePrivateProperty = function(obj){
		var _obj = C.deepcopy(obj);//深拷贝对象，以避免改变原对象；
		if(C.isArray(_obj)){
			C.each(_obj , function(item , index){
				if(typeof item === 'object'){
					recursion(item);
				};
			});
		}else{
			recursion(_obj)
		};
		//递归
		function recursion(obj){
			for(key in obj){
				if(key.match(/^\_/) ){//如果找到自定义的属性，删除；
					delete obj[key];
				};
				
				//如果找到自定义的属性，删除；
				if(C.isArray(obj[key])){
					C.each(obj[key] , function(item , index){
						if(typeof item === 'object'){
							recursion(item);
						};
					});
				};
				
				if(typeof obj[key] === 'object'){
					recursion(obj[key]);
				};
			};
		};
		return _obj;
	};
	
	//String数字 到 Number类型
	C.changeStringToNumber = function (obj) {
		
		var _obj = C.deepcopy(obj);//深拷贝对象，以避免改变原对象；
		
		
		if(C.isArray(_obj)){
			C.each(_obj , function(item , index){
				if(typeof item === 'object'){
					recursion(item);
				};
			});
		}else{
			recursion(_obj)
		};
		//递归
		function recursion(obj){
			for(k in obj){
				if(!isNaN(obj[k]) && typeof obj[k] !== 'boolean' && !C.isArray(obj[k])){//如果 值为数字123,或者字符串数字'123'。那么转化成数字；
					obj[k] = Number(obj[k]);
				};
				
				//如果找到自定义的属性，删除；
				if(C.isArray(obj[k])){
					C.each(obj[k] , function(item , index){
						if(typeof item === 'object'){
							recursion(item);
						};
					});
				};
				
				if(typeof obj[k] === 'object'){
					recursion(obj[k]);
				};
			};
		};
		return _obj;
	};
	
	
	
	
} )(window);

//数组去重
Array.prototype.distinct = function(){
 	var arr = this,
  	result = [],
  	i,
  	j,
  	len = arr.length;
 	for(i = 0; i < len; i++){
  		for(j = i + 1; j < len; j++){
   			if(arr[i] === arr[j]){
    			j = ++i;
   			}
  		}		
  		result.push(arr[i]);
 	}
 	return result;
};