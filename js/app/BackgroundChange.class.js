/**
 *	
 *	这个class，setInterval中的this有很大的问题；
 * */
(function () {
	/**
	 * 预加载图片
	 * @param params.id : 传入的图片数组
	 */
	function BackgroundChange (params) {
		this._id = params.id;
		this._url = params.url;
		this.interval = params.interval;
		this.oDiv = document.getElementById(this._id);
		this._imageJson = {};//**创建一个json，用于存储所有我们的图片**
		this._loaded = 0;//记录我们加载了多少张图片；
		this._i = 0;
		this.alreadyDoneNumber = 0;//计数
		this.arrLi = [];//装生成的li
		var _this = this;
		
		this.imgPreload(function () {
			_this.createDiv();
			setInterval(function () {
				
				_this.each();
			}, _this.interval);
		});
	};
	
	/**
	 * 预加载图片
	 * @param {Funtion} callback : 回调函数
	 * @return
	 */
	BackgroundChange.prototype.imgPreload = function (callback) {
		this.imageResourse = {};//准备一个资源对象；
		var _this = this;
		
		//ajax
		var xhr = new XMLHttpRequest();
		xhr.open("GET" , this._url , true);
		xhr.send(null);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				//console.log(xhr.responseText);
				var obj = JSON.parse(xhr.responseText);
				
				//遍历
				for (var i = 0; i < obj.images.length; i++) {
					_this.imageResourse[obj.images[i].name] = new Image();
					//console.log(_this.imageResourse);
					_this.imageResourse[obj.images[i].name].src = obj.images[i].url;
					//计数，判断
					_this.imageResourse[obj.images[i].name].onload = function () {
						_this.alreadyDoneNumber ++ ;
						//如果加载完毕
						if (_this.alreadyDoneNumber === obj.images.length) {
							callback && callback();
						};
					};
				};
			};
		};
	};
	
	/**
	 * 创建Div
	 * 
	 */
	BackgroundChange.prototype.createDiv = function () {
		var oBackgroundDiv = document.createElement('div');
		oBackgroundDiv.style.height = '100%';
		oBackgroundDiv.style.width  = '100%';
		oBackgroundDiv.style.zIndex = -100;
		
		var oUl = document.createElement('ul');
		oUl.style.height = '100%';
		oUl.style.width  = '100%';
		
		var oFragment = document.createDocumentFragment();
		for (var i = 0; i < this.alreadyDoneNumber; i++) {
			var oLi = document.createElement('li');
			oLi.style.height = '100%';
			oLi.style.width  = '100%';
			oLi.style.position = 'absolute';
			oLi.style.left = 0;
			oLi.style.top = 0;
			oLi.className = 'flur4';
			
			if(i === 0) {
				oLi.style.display = 'block';
				oLi.style.opacity = 1;
			} else {
				oLi.style.display = 'none';
				oLi.style.opacity = 0.1;
			};
			
			oLi.style.background = 'url(./res/images/background_' + i + '.jpg) center center no-repeat/cover';
			
			this.arrLi.push(oLi);
			oFragment.appendChild(oLi);
		};
		oUl.appendChild(oFragment);
		oBackgroundDiv.appendChild(oUl);
		this.oDiv.insertBefore(oBackgroundDiv , this.oDiv.childNodes[0]);
	};
	
	/**
	 * 运动方式
	 * 
	 */
	BackgroundChange.prototype.move = function (j) {
		var _this = this;
		for (var i = 0; i < this.arrLi.length; i++) {
			startMove(_this.arrLi[i] , {
				'opacity' : 10
			}, 20 , function () {
				
			});
			_this.arrLi[i].style.display = 'none';
		};
		_this.arrLi[j].style.display = 'block';
		startMove(_this.arrLi[j] , {
			'opacity' : 100
		}, 20 , function () {
			
		})
	};
	
	/**
	 * 切换图片
	 * @return
	 */
	BackgroundChange.prototype.each = function () {
		var _this = this;
		_this._i++;
		_this._i %= _this.alreadyDoneNumber;
		_this.move(_this._i);
	};
	
	window.BackgroundChange = BackgroundChange;
	
})(window);