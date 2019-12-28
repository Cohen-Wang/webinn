// JavaScript Document
$(function(){
	//自动轮播
	autoCarsouel();//轮播
	function autoCarsouel(){
	    var now=null;
	    var timer=null;
	    function tab(){
			$("#carousel").find("li").fadeOut();
			$("#carousel").find("li").eq(now).fadeIn();
	   	}
	    function next(){
	    	now++;
	    	now%=$('#carousel').find('li').length;
	        tab();
	    }
	    timer=setInterval(next,5000);
	}
	
	//advertise文字居中
	adverTextMiddle();
	function adverTextMiddle(){
		function middle(){
			var adTxt = document.querySelector('.advertise-text');
			var adTxtH = adTxt.offsetHeight;
			var adImgH = document.querySelector('.advertise-img').offsetHeight;
			var h = (adImgH-adTxtH)/2;
			adTxt.style.marginTop=h+'px';
		}
		middle();
		window.onresize = function(){
			middle();
		};
	}
	
	
	caseShowAjaxPage();
	function caseShowAjaxPage(){
		var vm = new Vue({
			el : '#caseShow',
			data:{
				data : "",
			},
			methods : {
				get : function(){
					url="php/show_case.php";
					this.$http.get(url).then(function(res){
						this.data=res.body;
					},function(res){
						alert(res.status);
					});
				},
			},
			computed : {
				filteredItem : function(){
					return this.data.slice(0,8);
				},
			},
			mounted:function(){
				this.get();
			},
		});
	}
	
	function caseShowAjaxPage(){
		var oNews=document.querySelector('#caseShow');
		var oCon=document.querySelector('#caseShow .caseShowBody');
		var oUl=document.querySelector('#caseShow .pagination');
		var aLi=document.querySelectorAll('#caseShow .pagination li');
		var aA=document.querySelectorAll('#caseShow .pagination li a');
		var loder=document.querySelector('#loder');
		var page=1;
		var num=8*(page-1);
		var str='';
		
		render(caseShowData,num);
		function render(dataList,n){
			str='';
			for(var i=n,len=n+8;i<len;i++){
				str+=
				`
					<div class="col-md-3 col-sm-6 col-xs-12">
						<a href="javascript:;" onclick="window.open('caseShow.html?name=${dataList[i].name}','_blank')">
							<div class="thumbnail">
								<div class="thumbnailImg">
									<img src="images/caseShow/${dataList[i].images}" alt="主题" />
								</div>
								
								<div class="caption">
									<h5><span class="caseShow-span">精品 </span> ${dataList[i].title}</h5>
									<div>
										<p class="pull-left">${dataList[i].date}</p>
										<p class="pull-right">
											<a href="#"><span class="badge"><span class="glyphicon glyphicon-thumbs-up"></span>${dataList[i].like}</span></a>
											&nbsp;&nbsp;&nbsp;
											<a href="#"><span class="badge"><span class="glyphicon glyphicon-thumbs-down"></span>${dataList[i].dislike}</span></a>
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				`
			};
			oCon.innerHTML=str;
		};
	};
	
	page();
	function page(){
		Vue.component("page",{
	  		template:"#page",
	    	data:function(){
	      		return{
		        	current:1,
		        	showItem:5,
		        	allpage:200,
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
			el:'#app',
		});
	};
	
	//newsAjaxPage();
	function newsAjaxPage(){
		var url='https://route.showapi.com/181-1';
		var oNews=document.querySelector('#news');
		var oCon=document.querySelector('#news .newsBody');
		var oUl=document.querySelector('#news .pagination');
		var aLi=document.querySelectorAll('#news .pagination li');
		var aA=document.querySelectorAll('#news .pagination li a');
		var loder=document.querySelector('#loder');
		var page=0;
		
		getData();
		function getData(){//1.ajax获取数据
			var sendData={
				showapi_appid:'30603',
				showapi_sign:'98960666afeb4992ae91971d13494090',
				page:page,
				num:8
			}
			var params=[];
			for(var item in sendData){
				params.push(item+'='+sendData[item])
			};
			var postData=params.join('&');
			var xmlHttp=new XMLHttpRequest;
			//xmlHttp.open('GET',url+'?showapi_appid=30603&showapi_sign=98960666afeb4992ae91971d13494090&page=0&num=9',true);
			xmlHttp.open('GET',url+'?'+postData,true)
			xmlHttp.send(null);
			xmlHttp.onreadystatechange=function(){
				if(xmlHttp.readyState<4){
					//loder.style.display='block'
				}else if(xmlHttp.readyState==4){
					if(xmlHttp.status==200){
						//loder.style.display='none';
						//2.数据整理
						var dataPost=JSON.parse(xmlHttp.responseText).showapi_res_body.newslist;	
						render(dataPost)
					};
				};
			};
		};
		
		
		var str='';
		/*function render(dataList){
			str='';
			for(var i=0,len=dataList.length;i<len;i++){
				str+=
				`
					<div class="col-xs-12">
						<a href="${dataList[i].url}" target="_blank">
							<div class="media">
								<div class="media-left media-top">
									<img src="${dataList[i].picUrl}" alt="" height="64" width="64" class="media-object img-circle" />
								</div>
								<div class="media-body">
									<h4 class="media-heading">${dataList[i].title}</h4>
									<p>${dataList[i].ctime}</p>
								</div>
							</div>
						</a>
					</div>
					</hr>
				`
			};
			oCon.innerHTML=str;
		};*/
		pageList();
		function pageList(){
			oUl.addEventListener('click',function(e){
				if(e.target.tagName.toLowerCase() === 'a'){
					page=e.target.innerHTML;
					for(var i=0,len=aLi.length;i<len;i++){
						aLi[i].className=''
					}
					e.target.parentNode.className='active'
					getData()
				};
			});
		};
	};
})