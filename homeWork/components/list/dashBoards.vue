<template>
    <div class="main">
       <div class="left"id="pie"></div>
        <div class="lineArea">
            <div class="right" id="line"></div>
        </div>

    </div>
</template>
<script>
   export default{
       data(){
           return{
               //拼图参数配置
              pieOption:{
                  title : {
                      text: 'Log Types',
                      subtext: '',
                      x:'center'
                  },
                  tooltip : {
                      trigger: 'item',
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                  },
                  legend: {
                      orient: 'horizontal',
                      top: '15%',
                      data: ['INFO','TRACE','DEBUG',]
                  },
                  color:["#4f81bd","#c0504d","#9bbb59"],
                  series : [
                      {
                          name: '访问来源',
                          type: 'pie',
                          radius : '55%',
                          center: ['50%', '60%'],
                          data:[
                              {value:5, name:'INFO'},
                              {value:3, name:'TRACE'},
                              {value:4, name:'DEBUG'},
                          ],
                          itemStyle: {
                              emphasis: {
                                  shadowBlur: 10,
                                  shadowOffsetX: 0,
                                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                              }
                          },
                          label:{
                              normal:{
                                  show:true,
                                  position:"inside",
                                  formatter:"{c}"
                              }
                          },
                          labelLine:{
                              normal:{
                                  show:false
                              }
                          }
                      }
                  ]
              },
               //折线图参数配置
              lineOption:{
                  title: {
                      text: 'Logs Over Time',
                      x:'center'
                  },
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                      orient: 'horizontal',
                      top: '10%',
                      data:['TRACE','INFO','DEBUG']
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '1%',
                      containLabel: true
                  },
                  xAxis: {
                      type: 'category',
                      boundaryGap: false,
                      data: ['2015/04/06','2015/04/26','2015/05/16','2015/06/05','2015/06/25','2015/07/15','2015/08/04','2015/08/24']
                  },
                  yAxis: {
                      type: 'value'
                  },
                  color:["#4f81bd","#c0504d","#9bbb59"],
                  series: [
                      {
                          name:'TRACE',
                          type:'line',
                          stack: '总量1',
                          data:[,2,1.6 ,1.3, 1, 1.8, 2,1]
                      },
                      {
                          name:'INFO',
                          type:'line',
                          stack: '总量2',
                          data:[, 1, 1, 1, 1,1,2, 1]
                      },
                      {
                          name:'DEBUG',
                          type:'line',
                          stack: '总量3',
                          data:[, , 3, 2, 1.5, 1, ,]
                      }
                  ]
              }
           }
       },
       mounted(){
           let pieChart = this.$echarts.init(document.getElementById('pie'));
           pieChart.setOption(this.pieOption)
           let lineChart = this.$echarts.init(document.getElementById('line'));
           lineChart.setOption(this.lineOption)
       }
   }
</script>
<style scoped>
    .main{
        overflow: hidden;
        width: 100%;
    }

     .left{
         width: 300px;
         height: 300px;
         float: left;
     }
      .right{
          width:100%;
          height: 300px;
      }
    .lineArea{
        width: 600px;
        float: right;
    }
    @media screen and (max-width: 1000px) {
        .left{
            width: 100%;
        }
        .main{
            text-align: center;
        }
        .lineArea{
           width: 100%;
            overflow: auto;
        }
    }
</style>