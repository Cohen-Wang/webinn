/**
 * type
 */

// $.get('./php/dist/sleep.php').done(function (data) {
//     myChart_loading.hideLoading();
//     //myChart1.setOption(...);
// });
var myChart_type = echarts.init(document.getElementById('type'), 'light');
myChart_type.showLoading();
window.setTimeout(function () {

    myChart_type.hideLoading();

    var option_type = {
        title: {
            text: '学习样式',
            subtext : "这是一段副标题",
        },
        color : ['red', '#abcdef', 'orange'],
        tooltip: {},
        legend: {
            data:['line', 'bar', 'scatter']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: 'line',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        },{
            name: 'bar',
            type: 'bar',
            data: [15, 30, 56, 20, 24, 55]
        },{
            name: 'scatter',
            type: 'scatter',
            data: [25, 17, 29, 35, 48, 36]
        }]
    };
    myChart_type.setOption(option_type);
}, 1000 * 2);



/**
 * x,y轴
 */
var myChart2 = echarts.init(document.getElementById('box2'));
myChart2.showLoading();
window.setTimeout(function () {
    myChart2.hideLoading();
    var optionLine = {
        xAxis: {
            //show: false,// 是否显示X轴，默认：true
            name: '我是X轴的名字',
            nameLocation: 'middle',
            nameGap: 30,// 文字和轴 间隙
            type: 'category',
            position: 'bottom',// 放在什么位置，默认：'bottom'

            offset: 0,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
        },
        series: [{
            name:'最高气温',
            type: 'line',
            color : ['green'],
            data: [820, 932, 901, 934, 1290, 1330, 1320],
        }]
    };
    myChart2.setOption(optionLine);
}, 1000 * 2);





var myChart3 = echarts.init(document.getElementById('box3'));
myChart3.showLoading();
window.setTimeout(function () {
    myChart3.hideLoading();
    var option3 = {
        title: {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['最高气温', '最低气温']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [{
            name: '最高气温',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },{
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }]
    };
    myChart3.setOption(option3);
}, 1000 * 2);




var myChart_retention = echarts.init(document.getElementById('myTest'));
myChart_retention.showLoading();
window.setTimeout(function () {
    myChart_retention.hideLoading();
    var option = {
        title: {
            text: '留存率',
            subtext: '...'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['留存率', '留存人数']
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis:  {
            name: '日期',
            nameLocation: 'middle',
            nameGap: 26,
            type: 'category',
            boundaryGap: false,
            data: [
                '2019-05-25',
                '2019-05-26',
                '2019-05-27',
                '2019-05-28',
                '2019-05-29',
                '2019-05-30',
                '2019-05-31',
                '2019-06-01',
                '2019-06-02',
                '2019-06-03',
                '2019-06-04',
                '2019-06-05',
                '2019-06-06',
                '2019-06-07',
                '2019-06-08',
                '2019-06-09',
                '2019-06-10',
                '2019-06-11',
                '2019-06-12',
                '2019-06-13',
                '2019-06-14',
                '2019-06-15',
                '2019-06-16',
                '2019-06-17',
                '2019-06-18',
                '2019-06-19',
                '2019-06-20',
                '2019-06-21',
                '2019-06-22',
                '2019-06-23',
                '2019-06-24',
                '2019-06-25',
            ]
        },
        yAxis: [
            {
                name: '留存率',
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            {
                name: '留存人数',
                type: 'value',
                axisLabel: {
                    formatter: '{value} 人'
                }
            }
        ],
        series: [{
            name: '留存率',
            type: 'line',
            data: [0, 22, 14, 14, 11, 10, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    //{type: 'min', name: '最小值'}
                ]
            },
            smooth : false,
            yAxisIndex: 0,
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },{
            name: '留存人数',
            type: 'bar',
            data: [0, 95, 61, 61, 49, 42, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            smooth : false,
            yAxisIndex: 1,
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }]
    };
    myChart_retention.setOption(option);
}, 200);









