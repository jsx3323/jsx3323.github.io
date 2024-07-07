<template>
  <div id="scatterChart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  let myChart = echarts.init(document.getElementById("scatterChart"), "dark");

  myChart.setOption({
    xAxis: {
      data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    yAxis: {},
    series: [
      {
        type: "scatter",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
  });
});
</script>

<style scoped>
#scatterChart {
  width: 100%;
  height: 100%;
}
</style>
