<template>
  <div class='guide-page'>
    <h2>Welcome to TourismGPT</h2>
    <div class='guide-button'>
      <div class='guide-button-item'>
        <div class="grid-content guide-chat" @click='redirectToChat'>Chat</div>
        <div class="grid-content guide-table">Frequent Questions</div>
      </div>
      <div class='guide-button-item'>
        <div class="grid-content guide-chart" @click='redirectToAnalysis'>Data Analysis</div>
        <div class="grid-content guide-future">Coming soon...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuidePage',
  methods: {
    redirectToChat() {
      // this.$router.push({
      //   name: 'DataAnalysisPage',
      // });
    },
    redirectToAnalysis() {
      this.$router.push({
        name: 'DataAnalysisPage',
      });
    },
  },
}
</script>

<style lang='scss' scoped>
.guide-page {
  width: 100%;
  margin: auto;
}
.guide-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .guide-button-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
}
.guide-chat {
  background: #ffb541;
}
.guide-chat:hover, .guide-table:hover, .guide-chart:hover {
  box-shadow: 1px 1px 10px 0 rgba(0,0,0,0.5);
  font-weight: bold;
}
.guide-table {
  background: #16d241;
}
.guide-chart {
  background: #24d4c3;
}
.guide-future {
  background: #ec9ef5;
}
.grid-content {
  border-radius: 4px;
  width: 200px;
  height: 150px;
  margin: 20px;
  font-size: 16px;
  text-align: center;
  line-height: 150px;
  cursor: pointer;
}
</style>