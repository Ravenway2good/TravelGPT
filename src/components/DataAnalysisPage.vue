<template>
  <div class='data-analysis-page'>
    <h2>Questions Data</h2>
    <el-row :gutter='8' style='margin: 10px 0;'>
      <el-col :span='12' style='padding-left: 0;'>
        <div class='panel-section'>
          <pie-chart-panel></pie-chart-panel>
        </div>
      </el-col>
      <el-col :span='12'>
        <div class='panel-section'>
          <line-chart-panel></line-chart-panel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PieChartPanel from './PieChartPanel';
import LineChartPanel from './LineChartPanel';
export default {
  name: "DataAnalysisPage",
  components: {LineChartPanel, PieChartPanel},
  data () {
  },
}
</script>

<style lang='scss' scoped>
.data-analysis-page {
  //display: flex;
  //flex-direction: row;
}
.pie-chart {

}
</style>