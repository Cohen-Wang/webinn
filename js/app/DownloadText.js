


//保存数据为文档；
function DownloadText(content, filename) {
	
	//创建blob对象，里面传数组；blob是一个可存储二进制的容器,如：图片，文件，音乐。
    var blob = new Blob([content]);	
	
	this._link = document.createElement('a');
	this._link.download = filename;
    this._link.href = url = URL.createObjectURL(blob);	//创建一个被传入参数的URL对象；生成一个URL对象；
    
    
    this._init();
    
    window.URL.revokeObjectURL(url);
    	
};

DownloadText.prototype._init = function (){
	var event = new MouseEvent('click');
	this._link.dispatchEvent(event);
};

