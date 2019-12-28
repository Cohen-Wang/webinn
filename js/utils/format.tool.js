
var FORMAT = (function(){
	
	/**
	 * @param {Object} json ：json 字符串或者对象
	 * @param {Object} options ：
	 */
	function json(json, options){
		var json = C.deepcopy(json);
        var reg = null,//正则表达式；
            formatted = '',//存储最终格式化的字符串；
            pad = 0,
            PADDING = '    ';
            
        options = options || {};
        
        options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
        options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;//分号后面是否需要 空格？？？
        if (typeof json !== 'string') {
            json = JSON.stringify(json);
        } else {
            json = JSON.parse(json);
            json = JSON.stringify(json);
        };
        
        reg = /([\{\}])/g;
        json = json.replace(reg, '\r\n$1\r\n');
        reg = /([\[\]])/g;
        json = json.replace(reg, '\r\n$1\r\n');
        
        //遇到逗号 就换行；
        reg = /(\,)/g;
        json = json.replace(reg, '$1\r\n');
        
        //两个换行，整理成一个
        reg = /(\r\n\r\n)/g;
        json = json.replace(reg, '\r\n');
        
        //不能让逗号，单独成一行
        reg = /\r\n\,/g;
        json = json.replace(reg, ',');
        
        if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
        	//逗号 后面的 括号，不换行。修复；
            reg = /\:\r\n\{/g;
            json = json.replace(reg, ':{');
            reg = /\:\r\n\[/g;
            json = json.replace(reg, ':[');
        }
        if (options.spaceAfterColon) {
            reg = /\:/g;
            json = json.replace(reg, ' : ');//判断 冒号前后，需不需要 空格；
        }
        
        (json.split('\r\n')).forEach(function (node , index) {
                var i = 0,
                indent = 0,
                padding = '';

                if (node.match(/\{$/) || node.match(/\[$/)) {
                    indent = 1;
                } else if (node.match(/\}/) || node.match(/\]/)) {
                    if (pad !== 0) {
                        pad -= 1;
                    }
                } else {
                    indent = 0;
                }

                for (i = 0; i < pad; i++) {
                    padding += PADDING;
                }

                formatted += padding + node + '\r\n';
                pad += indent;
            }
        );
        return formatted;
	};
	
	
	
	/**
	 * @param {Object} obj ：传入js的对象；
	 * @param {Object} options name:变量名字
	 */
	function lua(obj , options){
        options = options || {};
        options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
        options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;//分号后面是否需要 空格？？？
        options.name = options.name || 'tempname';
        
        var str = 'local ' + options.name + ' = {';
            formatted = '',//存储最终格式化的字符串；
            pad = 0,
            PADDING = '    ';
		
		//js的obj 转换为lua的str；
		traverse(obj);		//调用  此递归函数；
		function traverse(obj){
			if(C.isArray(obj)){
				for(var j = 0 , lenj = obj.length ; j < lenj ; j++){
					str += '\r\n' + '[' + (j+1) + '] = ';
					//Number和Boolean
					if(!isNaN(obj[j])){
						str +=  obj[j] + ',';
					}
					//String
					else if(typeof obj[j] === "string"){
						str += '\"' + obj[j] + '\",';
					}
					//Array
					else if(C.isArray(obj[j])){
						str +=  '{';
						traverse(obj[j]);
						
						str += '\r\n' + '},';
					}
					//object
					else{
						str += '{';
						traverse(obj[j]);
						if(j == lenj - 1){
							str += '\r\n' + '}';
						}else{
							str += '\r\n' + '},';
						};
					};
				};
			}else{
				for(var k in obj){
					//Number和Boolean
					if(!isNaN(obj[k]) && !C.isArray(obj[k])){
						str += '\r\n' + k + ' = ' + obj[k] + ',';
					}
					//String
					else if(typeof obj[k] === "string"){
						str += '\r\n' + k + ' = \"' + obj[k] + '\",';
					}
					//Array
					else if(C.isArray(obj[k])){
						str +=  '\r\n' + k + ' = ' + '{';
						for(var i = 0, len = obj[k].length; i < len; i++){
							//Number和Boolean
							if(!isNaN(obj[k][i])){
								str += '\r\n' + '[' + (i+1) + ']' + ' = ' + obj[k][i] + ',';
							}
							//String
							else if(typeof obj[k][i] === "string"){
								str += '\r\n' + '[' + (i+1) + ']' + ' = "' + obj[k][i] + '",';
							}
							//Array
							else if(C.isArray(obj[k][i])){
								str += '\r\n' + '[' + (i+1) + ']' + ' = {';
								traverse(obj[k][i]);
								str += '\r\n' + '},';
							//object
							}else{
								str += '\r\n' + '[' + (i+1) + ']' + ' = {';
								traverse(obj[k][i]);
								if(i == len - 1){
									str += '\r\n' + '}';
								}else{
									str += '\r\n' + '},';
								};
							};
						};
						str += '\r\n' + '},';
					}
					//Object
					else{
						str +=  '\r\n' + k + ' = ' + '{';
						traverse(obj[k]);
						str += '\r\n' + '},';
					};
				};
			}
		};
		str += '\n}\n\nreturn ' + options.name;
		reg = /(\,)/g;
        str = str.replace(/\,(\s*})/g , '$1');//❤❤❤❤去掉最后一个对象 后面的都好 ，我草， 我居然做出来了
        
		//二：格式化
		(str.split('\r\n')).forEach(function (node , index) {
                var i = 0,
                indent = 0,
                padding = '';

                if (node.match(/\{$/) || node.match(/\[$/)) {
                    indent = 1;
                } else if (node.match(/\}/)) {
                    if (pad !== 0) {
                        pad -= 1;
                    }
                } else {
                    indent = 0;
                };

                for (i = 0; i < pad; i++) {
                    padding += PADDING;
                }

                formatted += padding + node + '\r\n';
                pad += indent;
            }
        );
        
        return formatted;
	};
	
	
	//格式化代码函数,已经用原生方式写好了不需要改动,直接引用就好
    String.prototype.removeLineEnd = function () {
        return this.replace(/(<.+?\s+?)(?:\n\s*?(.+?=".*?"))/g, '$1 $2')
    };
    
    /**
     * @param {Object} text
     */
    function xml(text) {
        //去掉多余的空格
        text = '\n' + text.replace(/(<\w+)(\s.*?>)/g, function ($0, name, props) {
                    return name + ' ' + props.replace(/\s+(\w+=)/g, " $1");
                }).replace(/>\s*?</g, ">\n<");

        //把注释编码
        text = text.replace(/\n/g, '\r').replace(/<!--(.+?)-->/g, function ($0, text) {
            var ret = '<!--' + escape(text) + '-->';
            //alert(ret);
            return ret;
        }).replace(/\r/g, '\n');

        //调整格式
        var rgx = /\n(<(([^\?]).+?)(?:\s|\s*?>|\s*?(\/)>)(?:.*?(?:(?:(\/)>)|(?:<(\/)\2>)))?)/mg;
        var nodeStack = [];
        var output = text.replace(rgx, function ($0, all, name, isBegin, isCloseFull1, isCloseFull2, isFull1, isFull2) {
            var isClosed = (isCloseFull1 == '/') || (isCloseFull2 == '/' ) || (isFull1 == '/') || (isFull2 == '/');
            //alert([all,isClosed].join('='));
            var prefix = '';
            if (isBegin == '!') {
                prefix = getPrefix(nodeStack.length);
            }
            else {
                if (isBegin != '/') {
                    prefix = getPrefix(nodeStack.length);
                    if (!isClosed) {
                        nodeStack.push(name);
                    }
                }
                else {
                    nodeStack.pop();
                    prefix = getPrefix(nodeStack.length);
                }

            }
            var ret = '\n' + prefix + all;
            return ret;
        });

        var prefixSpace = -1;
        var outputText = output.substring(1);
        //alert(outputText);

        //把注释还原并解码，调格式
        outputText = outputText.replace(/\n/g, '\r').replace(/(\s*)<!--(.+?)-->/g, function ($0, prefix, text) {
            //alert(['[',prefix,']=',prefix.length].join(''));
            if (prefix.charAt(0) == '\r')
                prefix = prefix.substring(1);
            text = unescape(text).replace(/\r/g, '\n');
            var ret = '\n' + prefix + '<!--' + text.replace(/^\s*/mg, prefix) + '-->';
            //alert(ret);
            return ret;
        });

        return outputText.replace(/\s+$/g, '').replace(/\r/g, '\r\n');
    }
    function getPrefix(prefixIndex) {
        var span = '    ';
        var output = [];
        for (var i = 0; i < prefixIndex; ++i) {
            output.push(span);
        };
        return output.join('');
    };
	
	
	
	
	
	
	return {
		json : json,
		lua : lua,
		xml : xml
	};
	
})(window);
