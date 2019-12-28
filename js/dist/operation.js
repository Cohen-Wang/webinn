
var vm = new Vue({
	el : '#operation',
	data : {
		
		name : '',
		age : '',
		major : '',
		country : '',
		
		users : [],
		
		pageSize : [5 , 10 , 15 , 20],
		currentPageSize : 5,
		
		totalNum : 0,
		
		currentPage : 1,//当前显示页面
		searchVal : '',
		//删除
		deleteId : -2,
		
		now : {
			year : new Date().getFullYear(),
			month : new Date().getMonth() + 1,
			day : new Date().getDate(),
			hour : new Date().getHours(),
			minute : new Date().getMinutes(),
			second : new Date().getSeconds(),
		},
		
	},
	
	methods : {
		//添加玩家
		addUser : function(){
			var url = "../php/add_user.php";
			
        	this.$http.post(url , {
				name : this.name,
				age : Number(this.age),
				major : this.major,
				country : this.country
        	},{  
                emulateJSON:true  
           	}).then(function(data){
           		//console.log(data);
	        },function(response){
	            console.info(response);
	        });
	        
	        //清空
	        this.name = '';
			this.age = '';
			this.major = '';
			this.country = '';
			
			//再次获取玩家信息
			this.getUser();
		},
		
		//选择每页显示多少条记录
		changePageSize : function(e){
			var e = e || window.event;
			//从新显示第一页
			this.currentPage = 1;
			this.currentPageSize = e.target.value;
			
			this.getUser();
		},
		
		//选择第几页
		changeCurrentPage : function(index){
			//改变当前选择页面
			if(index != this.currentPage){
                this.currentPage = index;
           };
           
        	this.getUser();
		},
		
		//上一页 ，下一页
		pageClick : function(){
            this.getUser();
        },
        
		//模糊查询
		changeSearchVal : function(){
			//从新显示第一页
			this.currentPage = 1;
			this.getUser();
		},
		
		//删除玩家
		deleteUser : function(){
			var url = "../php/delete_user.php";
			
			this.$http.post(url , {
        		deleteId : this.deleteId
        	},{  
                emulateJSON:true  
           	}).then(function(data){
           		console.log(data);
	        },function(response){
	            console.info(response);
	        });
	        
	        //
	        this.getUser();
		},
		
		//获取玩家
		getUser : function(){
			//清空
			this.users = [];
			//获取
			var url = "../php/show_user.php";
			
        	this.$http.post(url , {
        		currentPageSize : this.currentPageSize,
				currentPage : this.currentPage,
				searchVal : this.searchVal
        	},{  
                emulateJSON:true  
           }).then(function(data){
           		var obj = JSON.parse(data.bodyText);
           		this.users = obj.content;
           		this.totalNum = obj.total;
	        },function(response){
	            console.info(response);
	        });
		},
		
	},
	
	//通过计算属性过滤数据
    computed:{
        list: function(){
            var _this = this;
            var arrByZM = [];
            for (var i = 0 ; i < this.users.length ; i++){
                if(	this.users[i].name.search(this.searchVal) != -1 || 
                	this.users[i].age.search(this.searchVal) != -1 ||
                	this.users[i].major.search(this.searchVal) != -1 ||
                	this.users[i].country.search(this.searchVal) != -1){
                    arrByZM.push(this.users[i]);
                };
            };
            return arrByZM;
        },
        
        //总共多少页
        indexs: function(){
          	var left = 1;
          	var right = this.totalPage;
          	var arr = [];
          	if(this.totalPage >= 5){
            	if(this.currentPage > 3 && this.currentPage < this.totalPage - 2){
                    left = this.currentPage - 2
                    right = this.currentPage + 2
            	}else{
                	if(this.currentPage <= 3){
                    	left = 1;
                    	right = 5;
                	}else{
                    	right = this.totalPage;
                    	left = this.totalPage - 4;
                	};
            	};
         	};
        	while (left <= right){
            	arr.push(left);
            	left ++;
        	};
        	return arr;
       	},
       	
       	totalPage : function(){
       		return Math.ceil(this.totalNum/this.currentPageSize);
       	}
       	
        
    },
	
	created : function(){
		//打开页面，自动获取玩家
		this.getUser();
        
//      var _this = this;
//      setInterval( function(){
//      	_this.now = {
//				year : new Date().getFullYear(),
//				month : new Date().getMonth() + 1,
//				day : new Date().getDate(),
//				hour : new Date().getHours(),
//				minute : new Date().getMinutes(),
//				second : new Date().getSeconds(),
//			}
//      },1000);
	},
	
	
});
