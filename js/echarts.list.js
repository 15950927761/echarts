// 装卸货情况-周统计开始
	var myChart = echarts.init(document.getElementById('week-echarts'));
	option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        x: 'center',
        top:'0',
        // data:['蓝车入园','蓝车出园','黄车入园','黄车出园'],
         data:[
        	{
        		name:'蓝车入园',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        	},
        	{
        		name:'蓝车出园',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        	},
        	{
        		name:'黄车入园',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        		icon:'image://./images/icon4.png'
        	},
        	{
        		name:'黄车出园',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        		icon:'image://./images/icon7.png'
        	},
        ],
        textStyle:{color:'#fff',fontSize:12},
        itemWidth: 14,
        itemHeight: 8,
       	itemGap:5
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data: ['周一06/01','周二06/02','周三06/03','周四06/04','周五06/05','周六06/06','周日06/07)'],
            "axisTick":{       //y轴刻度线
          		"show":false
        	},
            axisLabel:{
            	textStyle:{
            		color:'#fff',
            		fontSize:12,
            	},
            	formatter:function(params) {
	                var newParamsName = "";
	                var paramsNameNumber = params.length;
	                var provideNumber = 3;  //一行显示几个字
	                var rowNumber = 2;
	                if (paramsNameNumber > provideNumber) {
	                    for (var p = 0; p < rowNumber; p++) {
	                        var tempStr = "";
	                        var start = 0;
	                        var end = 2
	                        tempStr = params.substring(start, end) + "\n";
	                        tempStr2 = params.substring(2,7)
	                        newParamsName = tempStr +tempStr2;
	                    }

	                } else {
	                    newParamsName = params;
	                }
	                return newParamsName
	            },
            },
            axisLine:{
            	lineStyle:{
            		color:'#fff'
            	}
            },

        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'单位：辆',
            "axisTick":{       //y轴刻度线
          		"show":false
        	},
            splitLine:{
            	show:true,
            	lineStyle:{
            		color:['#5455ac'],
            		width:1,
            		type:'solid'
            	}
            },
            axisLine:{
            	lineStyle:{
            		color:'#fff'
            	}
            },
            axisLabel:{
            	textStyle:{
            		color:'#fff'
            	}
            }
        }
    ],
    series : [
        {
            name:'蓝车入园',
            type:'bar',
            color:['#2b2cec'],
            barWidth:10,
            data:[620, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'蓝车出园',
            type:'bar',
            color:['#2979ec'],
            barWidth:10,
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'黄车入园',
            type:'line',
            color:['#ffe44e'],
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'黄车出园',
            type:'line',
            color:['#fd8448'],
            data:[120, 132, 101, 134, 90, 230, 210]
        }
    ]
	};

	myChart.setOption(option);

	// 装卸货情况-周统计结束
	 
	// 各仓库今日开单详情开始
	var myChart2 = echarts.init(document.getElementById('warehouse'));
	option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        x: 'center',
        top:'8',
        // data:['1号库','2号库','3号库','4号库','6号库'],
        data:[
        	{
        		name:'1号库',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        		icon:'image://./images/icon4.png'
        	},
        	{
        		name:'2号库',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        		icon:'image://./images/icon5.png'
        	},
        	{
        		name:'3号库',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        		icon:'image://./images/icon6.png'
        	},
        	{
        		name:'4号库',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        		icon:'image://./images/icon7.png'
        	},
        	{
        		name:'6号库',
        		textStyle:{
        			fontSize:12,
        			color:'#fff'
        		},
        		icon:'image://./images/icon8.png'
        	},
        ],
        textStyle:{color:'#fff',fontSize:12},
        itemWidth: 24,
        itemHeight: 8,
       	padding:[1,2],
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true,
    },
    xAxis : [
        {
            type : 'category',
            name:'单位：吨',
            data: ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','24:00'],
            axisLine:{
            	lineStyle:{
            		color:'#fff'
            	}
            },
            axisLabel:{
            	textStyle:{
            		color:'#fff'
            	}
            },

        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'单位：吨',
            "axisTick":{       //y轴刻度线
          		"show":false
        	},
            splitLine:{
            	show:true,
            	lineStyle:{
            		color:['#5455ac'],
            		width:1,
            		type:'solid'
            	}
            },
            axisLine:{
            	lineStyle:{
            		color:'#fff'
            	}
            },
            axisLabel:{
            	textStyle:{
            		color:'#fff'
            	}
            }
        }
    ],
    series : [
        {
            name:'1号库',
            type:'line',
            color:['#f1f824'],
            barWidth:10,
            data:[10, 82, 201, 234, 290, 330, 340, 332, 351, 364, 390, 330, 380]
        },
        {
            name:'2号库',
            type:'line',
            color:['#80ceff'],
            barWidth:10,
            data:[20, 112, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'3号库',
            type:'line',
            color:['#4440fe'],
            data:[30, 132, 301, 334, 390, 330, 320, 332, 301, 334, 380, 340, 320]
        },
        {
            name:'4号库',
            type:'line',
            color:['#cf40fe'],
            data:[50, 152, 101, 134, 110, 130, 210, 232, 301, 334, 390, 400, 350]
        },
        {
            name:'6号库',
            type:'line',
            color:['#d35a20'],
            data:[40, 132, 121, 134, 130, 140, 220, 252, 311, 344, 380, 410, 420]
        }
    ]
};

	myChart2.setOption(option);
	// 各仓库今日开单详情结束
	// 
	var myChart3 = echarts.init(document.getElementById('carenter'));
	option = {   
		grid: {
	        left: '0',
	        right: '0',
	        top:'30',
	        bottom:'90',
	        containLabel: true,
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        axisLine:{
            	lineStyle:{
            		color:'#fff'
            	}
            },
	        data: ['02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00','']
	    },
	    yAxis: {
	        type: 'value',
            name:'单位：辆',
	        "axisTick":{       //y轴刻度线
          		"show":false
        	},
        	splitLine:{
            	show:true,
            	lineStyle:{
            		color:['#5455ac'],
            		width:1,
            		type:'solid'
            	}
            },
	        axisLine:{
            	lineStyle:{
            		color:'#fff'
            	}
            },
	    },
	    series: [{
	        // data: [120, 332, 401, 534, 320, 230, 120,80,0,0,0,0],
	        data:[
	        	{value: 120 , label: {show:false} },
	        	{value: 330 , label: {show:true} },
	        	{value: 401 , label: {show:true} },
	        	{value: 534 , label: {show:true} },
	        	{value: 320 , label: {show:true} },
	        	{value: 230 , label: {show:true} },
	        	{value: 120 , label: {show:true} },
	        	{value: 80 , label: {show:true} },
	        	{value: 0 , label: {show:true} },
	        	{value: 30 , label: {show:true} },
	        	{value: 0 , label: {show:true} },
	        	{value: 80 , label: {show:true} }
	        ],
	        type: 'line',
	        smooth:true,
	        label: {
                normal: {
                    show: true,
                    position: 'top',
                    color:'#fff'
                },
            },
            itemStyle: {
                color: '#275ced'
            },
	        areaStyle: {
	        	color:'#275ced'
	        }
	    }]
	};
	myChart3.setOption(option);