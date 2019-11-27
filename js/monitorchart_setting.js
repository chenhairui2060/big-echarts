$(function(){
 $(document).ready(function(){
    initInfo();

  });
});

//定时器数组
var sta = [];
//清除所有定时器
function clearIntervals(array){
  for (i=0; i <array.length; i++) {
    clearInterval(array[i]);
  };
  sta = [];
}

// 攻击来源地排行
function gjlydChartBar(){
  //报表定时刷新
  // var gjlydSetInter = setInterval(function(){
  //   //gjlydChartBar.clear();
  
  //   //gjlydChartBar.setOption(gjlydChartBarOption);
  // },40000)

  var gjlydChartBar = echarts.init(document.getElementById('gjlydChartBar'));

  gjlydChartBarOption = {
      title: {
          text: '总房源3000套',
          textStyle:{
              fontSize:16,
              color:'#32cd32'
          },
          x:"center",
          padding: [
              10,  // 上
              0, // 右
              0,  // 下
              0, // 左
          ]
      },
      tooltip : {
          trigger: 'item',
          formatter: "{b} :({d}%)"
      },
      series : [
          {
              name: '总房源1000套',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              label:{            //饼图图形上的文本标签
                  normal:{
                      show:true,
                      position:'outer', //标签的位置
                      textStyle : {
                          fontWeight : 100 ,
                          fontSize : 10    //文字的字体大小
                      },
                      formatter:'{b}{d}%'


                  }
              },
              data:[
                  {value:813, name:'已入住'},
                  {value:187, name:'未入住'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  },
                  normal: {
                      color: function(params) {
                          // build a color map as your need.
                          var colorList = [
                              '#38b1fc','#0de8fe'

                          ];
                          return colorList[params.dataIndex]
                      }

                  }
              }
          }

      ],
      color: ['#1bcef6','#0459ac'],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
  };
                    
  gjlydChartBar.setOption(gjlydChartBarOption);

  //报表定时刷新
  sta.push(setInterval(function (){
        // var data = gjlydChartBarOption.series[0].data;
        // var num = Math.floor(Math.random() * data.length);
        // data[num] = Math.round(Math.random() * 400);
        //
        // $('#gjlydChartBar').animate({opacity:0},1000,function(){
        //   gjlydChartBar.clear();
        //   gjlydChartBar.setOption(gjlydChartBarOption);
           $('#gjlydChartBar').animate({opacity:1},3000);
        // })
        //gjlydChartBar.resize();    
      }, 16100)
    )

  window.addEventListener("resize", function () {
    gjlydChartBar.resize();
  });
};


function menjinjilu(){
    var menjinjilu = echarts.init(document.getElementById('menjinjilu'));
    menjinOption = {
        color: ['#0de8fe'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top:30,
            left: '10%',
            right:'10%',
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                data: ['0-2点', '2-5点', '6-8点', '9-12点', '13-17点', '18-22点', '23-24点'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine:{
                    lineStyle:{
                        color:'#ccc'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#ccc'
                    }
                }
            }
        ],
        series: [
            {
                name: '开门次数',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };

    menjinjilu.setOption(menjinOption);

    //报表定时刷新
    sta.push(setInterval(function (){
            $('#menjinjilu').animate({opacity:0},1200,function(){
                menjinjilu.clear();
                menjinjilu.setOption(menjinOption);
                $('#menjinjilu').animate({opacity:1},3000);
            })
            //gjlyipChartBar.resize();
        }, 20100)
    )

    window.addEventListener("resize", function () {
        menjinjilu.resize();
    });

};

// 攻击来源IP排行
function gjlyipChartBar(){
  //报表定时刷新
  // var gjlyipSetInter = setInterval(function(){
  //   gjlyipChartBar.clear();
  //   gjlyipChartBar.setOption(gjlyipChartBarOption);
  // },30000)

  var gjlyipChartBar = echarts.init(document.getElementById('gjlyipChartBar'));

  gjlyipChartBarOption = {
      color: ['#0de8fe'],
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          top:30,
          left: '18%',
          right:'15%',
          bottom: 30
      },
      xAxis: [
          {
              type: 'category',
              data: ['常住', '外来', '租客', '关爱','党员'],
              axisTick: {
                  alignWithLabel: true
              },
              axisLine:{
                  lineStyle:{
                      color:'#ccc'
                  }
              },
              axisLabel :{
                  interval:0
              },
              nameTextStyle:{
                  fontSize:8
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              axisLine:{
                  lineStyle:{
                      color:'#ccc'
                  }
              }
          }
      ],
      series: [
          {
              name: '数量',
              type: 'bar',
              barWidth: '60%',
              itemStyle: {
                  normal: {
                      color: function(params) {
                          // build a color map as your need.
                          var colorList = [
                              '#0de8fe','#97f668','#ede34f',
                              '#eb5f60','#38b1fc'
                          ];
                          return colorList[params.dataIndex]
                      }

                  }
              },
              data: [6000, 1000, 3000, 2500,1500]
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
          return idx * 5;
      }
  };
                    
  gjlyipChartBar.setOption(gjlyipChartBarOption);

  //报表定时刷新
  sta.push(setInterval(function (){
      $('#gjlyipChartBar').animate({opacity:0},1200,function(){
        gjlyipChartBar.clear();
        gjlyipChartBar.setOption(gjlyipChartBarOption);
        $('#gjlyipChartBar').animate({opacity:1},3000);
      })
      //gjlyipChartBar.resize();
    }, 20100)
  )

  window.addEventListener("resize", function () {
    gjlyipChartBar.resize();
  });
};

// 网站流量TOP5
function wzllChartLine(){

  var wzllChartLine = echarts.init(document.getElementById('wzllChartLine'));

  wzllChartLineOption = {
      color:[ '#f74242','#d68f40','#f8d442','#14af88','#42edf8'],
      tooltip: {
          trigger: 'axis',
          textStyle:{
              fontWeight:'lighter',
              fontSize:12
          }
      },
      grid:{
        top:30,
        left: '20%',
        right:'10%',
        bottom: 30
      },             
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','18:00','24:00'],
          axisLine: {
              lineStyle: {
                  color: '#242d4f',
              }
          },
          axisTick: {
              show: false,
              lineStyle: {
                  color: '#242d4f'
              }
          },
          axisLabel: {
              textStyle:{ 
                fontSize:12,
                color:'#ccc' 
              }            
          },
          splitLine: {
              show: false
          },           
          splitArea: {
              show: false
          }
      },
      yAxis: {
          type: 'value',
          name: '速度kb/s',
          nameTextStyle:{color:"#ccc"},   
          axisLine: {
              lineStyle: {
                  color: '#242d4f',
              }
          },
          axisTick: {
             show: false,
              lineStyle: {
                  color: '#242d4f'
              }
          },
          axisLabel: {
              textStyle:{ 
                fontSize:12,
                color:'#ccc' 
              }            
          },
          splitLine: {
              show: false
          },           
          splitArea: {
              show: false
          }
      },
      series: [
          {
              name:'www.363.com',
              type:'line',             
              data:[140, 172, 121, 104, 190, 330, 110, 420, 532, 401, 434, 490]
          },
          {
              name:'172.16.2.162',
              type:'line',             
              data:[380, 362, 351, 394, 490, 350, 420, 232, 191, 234, 190, 330]
          },
          {
              name:'www.zh.com',
              type:'line',             
              data:[120, 132, 101, 134, 90, 230, 210, 820, 932, 901, 934, 290]
          },
          {
              name:'www.janshu.com',
              type:'line',             
              data:[150, 232, 201, 154, 190, 330, 410, 332, 301, 334, 390, 330]
          },
          {
              name:'172.1.1.0',
              type:'line',             
              data:[320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230]
          }                                  
      ]
  }; 

  wzllChartLine.setOption(wzllChartLineOption);

  window.addEventListener("resize", function () {
    wzllChartLine.resize();
  });
};

// 节点性能Top5
function jdxnChartLine(){

  var jdxnChartLine = echarts.init(document.getElementById('jdxnChartLine'));

  jdxnChartLineOption = {
      color:[ '#f74242','#d68f40','#f8d442','#14af88','#42edf8'],
      tooltip: {
          trigger: 'axis',
          textStyle:{
              fontWeight:'lighter',
              fontSize:12
          }
      },
      grid:{
        top:30,
        left: '20%',
        right:'10%',
        bottom: 30
      },             
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','18:00','24:00'],
          axisLine: {
              lineStyle: {
                  color: '#242d4f',
              }
          },
          axisTick: {
              show: false,
              lineStyle: {
                  color: '#242d4f'
              }
          },
          axisLabel: {
              textStyle:{ 
                fontSize:12,
                color:'#ccc' 
              }            
          },
          splitLine: {
              show: false
          },           
          splitArea: {
              show: false
          }
      },
      yAxis: {
          type: 'value',
          name: '速度kb/s',
          nameTextStyle:{color:"#ccc"},   
          axisLine: {
              lineStyle: {
                  color: '#242d4f',
              }
          },
          axisTick: {
             show: false,
              lineStyle: {
                  color: '#242d4f'
              }
          },
          axisLabel: {
              textStyle:{ 
                fontSize:12,
                color:'#ccc' 
              }            
          },
          splitLine: {
              show: false
          },           
          splitArea: {
              show: false
          }
      },
      series: [
          {
              name:'CND1',
              type:'line',             
              data:[150, 232, 201, 154, 190, 330, 410, 332, 301, 334, 390, 330]
          },
          {
              name:'CND2',
              type:'line',             
              data:[320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230]
          },
          {
              name:'CND3',
              type:'line',             
              data:[120, 132, 101, 134, 90, 230, 210, 820, 932, 901, 934, 290]
          },
          {
              name:'CND4',
              type:'line',             
              data:[320, 332, 301, 334, 390, 330, 320,120, 132, 101, 134, 90]
          },
          {
              name:'CND5',
              type:'line',             
              data:[820, 932, 901, 934, 1290, 1330, 1320,320, 332, 301, 334, 390]
          }                                  
      ]
  };


  jdxnChartLine.setOption(jdxnChartLineOption);

  window.addEventListener("resize", function () {
    jdxnChartLine.resize();
  });

   var timeout = setTimeout(function(){
    jdxnChartLine.setOption(jdxnChartLineOption)
    clearTimeout(timeout)
  },2000)
};


// setInterval ("numbershowTime()", 5000);
// //受攻击节点数据刷新动画效果
// function numbershowTime(){
//   $('.number').countUp({
//       delay: 10,
//       time: 500
//   }); 
// }
// 
 //受攻击节点
function attacknodeList(){

  var node5Message = 9617;
  var node6Message = 17902;
  
  var divContent = "<li class='node_item'><div class='text_wrap'><p class='name'>注册人数</p><p class='number grade6'>11,345</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>入住人数</p><p class='number grade5'>8,260</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>体检人数</p><p class='number grade4'>4,523</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>高血压人数</p><p class='number grade3'>1,822</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>高血糖人数</p><p class='number grade2' id='flowoutM'>550</p></div></li>";
    divContent += "<li class='node_item'><div class='text_wrap'><p class='name'>高血脂人数</p><p class='number grade6' id='flowinM'>420</p></div></li>";
  $('#attacknodeList').html(divContent);
  
  sta.push(setInterval(function (){
      // node6Message += Math.floor(Math.random() * 50);
      // node5Message += Math.floor(Math.random() * 50);
      // $("#flowoutM").html(node6Message.toLocaleString());
      // $("#flowinM").html(node5Message.toLocaleString());
    }, 1000)
  )
}

//入侵类别列表
function changeNum() {

  //$("#rqlbList").animate({opacity:1,right:40,top:720},500);

  var nameArr = new Array('SQL注入','跨站脚本','木马病毒','DDOS攻击','CC攻击','SQL注入','跨站脚本','木马病毒','DDOS攻击','CC攻击'); 
  var numArr = new Array('280','800','1700','4500','7800','15000','15800','8700','13500','1800');
  var rqlbList = "";
  for (var i=0; i<numArr.length;i++){          
     rqlbList+="<li class='list_item'><span class='fr counter'>"+numArr[i]+"</span><span class='fl'>"+nameArr[i]+"</span></li>";
  }
  $(".rqlb_list").html(rqlbList);  

  // sta.push(setInterval(function(){
  //    $("#rqlbList").find(".rqlb_list li").eq(0).slideUp(1000,function(){
  //       $(this).show();
  //       $("#rqlbList").find(".rqlb_list").append($(this));
  //     });
  //   },5000)
  // )    
}

$(function(){
  $(document).ready(function() {
    //入侵类别列表
    changeNum();

  
  //入侵类别数据大小判断改变li的样式
  for ( var i=0;i<$(".rqlb_list li").length;i++) {
    var tdNum = parseInt($(".rqlb_list li").eq(i).find('.counter').html());

    if(0 <= tdNum && tdNum <= 500){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade1');
    }else if(500 < tdNum  && tdNum <= 1000){
     $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade2');
    }else if(1000 < tdNum  && tdNum <= 4000){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade3');
    }else if(4000 < tdNum && tdNum <= 8000){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade4');
    }else if(8000 < tdNum && tdNum <= 15000){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade5');
    }else if(15000 < tdNum ){
      $(".rqlb_list li").eq(i).attr('class', 'list_item item_grade6');
    }

  };
 //受攻击节点
attacknodeList()

 });
}); 






/*初始化页面显示*/
function initInfo(){
  clearIntervals(sta);
  gjlydChartBar();
  gjlyipChartBar();
  menjinjilu();
  //wzllChartLine();
  //jdxnChartLine();
}