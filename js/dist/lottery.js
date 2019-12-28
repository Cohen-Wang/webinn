
var vm = new Vue({
	el : '#lottery',
	data : {
		now : {
			year : new Date().getFullYear(),
			month : new Date().getMonth() + 1,
			day : new Date().getDate(),
			hour : new Date().getHours(),
			minute : new Date().getMinutes(),
			second : new Date().getSeconds(),
		},
		
		lotteryConfig : [],
		
	},//data
	
	methods : {
		
		
		
		uploading : function(e) {
			var e = e || window.event;
			var oFile = e.target.files[0];
			
			console.log(oFile)
		},
		
		//生成双色球
		createFive : function(){
			var date = new Date();
			var y = date.getFullYear(),
				m = C.double(date.getMonth() + 1),
				d = C.double(date.getDate()),
				h = C.double(date.getHours()),
				minmute = C.double(date.getMinutes());
				
			this.lotteryConfig.push({
				"id" : 1,
				"date" : y + '-' + m + '-' + d ,
				"isCreated" : true,
				"lotterys" : this.getBall()
			});
		},
		
		//g
		getBall : function() {
			var arr = [];
			for(var i = 0 ; i < 5 ; i++){
				arr.push({
					one : this.guess(this.makeArr(33)),
					two : this.guess(this.makeArr(33)),
					three : this.guess(this.makeArr(33)),
					four : this.guess(this.makeArr(33)),
					five : this.guess(this.makeArr(33)),
					six : this.guess(this.makeArr(33)),
					seven : this.guess(this.makeArr(16)),
				})
			};
			return arr;
		},
		
		//生成数组
		makeArr :function (num){
			var arr = [];
			for (var i = 0; i < num; i++){
				arr[i] = C.double(i + 1);
			};
			return arr;
		},
		
		////生成
		guess : function (arr){
			var n = ~~(Math.random() * arr.length);
			return arr[n];
		},
	
		
		download : function (){
			var json = FORMAT.json(this.lotteryConfig);
			var date = new Date();
			
			var filename = 'lottery';
			new DownloadText(json , filename + '.json');
		},
		
		
	},//methods
	
	
	
	
	created : function(){
		
		
		var url="../../data/lottery.json";
        this.$http.get(url).then(function(data){
            this.lotteryConfig = data.body;
        },function(response){
            console.info(response);
        });
        
        
        var _this = this;
        setInterval( function(){
        	_this.now = {
				year : new Date().getFullYear(),
				month : new Date().getMonth() + 1,
				day : new Date().getDate(),
				hour : new Date().getHours(),
				minute : new Date().getMinutes(),
				second : new Date().getSeconds(),
			}
        },1000);
	},
	
	
});

window.onload = function(){
	
	var dom = document.getElementById("box");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '堆叠柱状图';
	
	option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['周一','周二','周三','周四','周五','周六','周日','周二','周三','周四','周五','周六','周日','周二','周三','周四','周五','周六','周日','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            data:[320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'邮件营销',
	            type:'bar',
	            stack: '广告',
	            data:[120, 132, 101, 134, 90, 230, 210, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'联盟广告',
	            type:'bar',
	            stack: '广告',
	            data:[220, 182, 191, 234, 290, 330, 310, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'视频广告',
	            type:'bar',
	            stack: '广告',
	            data:[150, 232, 201, 154, 190, 330, 410, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'搜索引擎',
	            type:'bar',
	            data:[862, 1018, 964, 1026, 1679, 1600, 1570, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320],
	            markLine : {
	                lineStyle: {
	                    normal: {
	                        type: 'dashed'
	                    }
	                },
	                data : [
	                    [{type : 'min'}, {type : 'max'}]
	                ]
	            }
	        },
	        {
	            name:'百度',
	            type:'bar',
	            barWidth : 5,
	            stack: '搜索引擎',
	            data:[620, 732, 701, 734, 1090, 1130, 1120, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'谷歌',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[120, 132, 101, 134, 290, 230, 220, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'必应',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[60, 72, 71, 74, 190, 130, 110, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'其他',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[62, 82, 91, 84, 109, 110, 120, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
	        }
	    ]
	};
	;
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
}
