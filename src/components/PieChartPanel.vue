<template>
  <div id='pie-chart'></div>
</template>

<script>
export default {
  name: "PieChartPanel",
  data () {
    return {}
  },
  mounted () {
    this.initChart();
  },
  methods: {
    initChart () {
      this.$nextTick(() => {
        this.getPieChart();
      });
    },
    getPieChart() {
      let doc = document.getElementById('pie-chart');
      this.chart = this.$echarts.init(doc);
      const pieChartOption = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      this.chart.setOption(pieChartOption);
    },
  },
}
</script>

<style lang='scss' scoped>
#pie-chart {
  height: 280px;
  width: 100%;
  padding-top: 12px;
}
</style>