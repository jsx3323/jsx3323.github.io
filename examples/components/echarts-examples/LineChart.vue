<template>
  <div id="lineChart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  let myChart = echarts.init(document.getElementById("lineChart"), "dark");

  myChart.setOption({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  });
});
</script>

<style scoped>
#lineChart {
  width: 100%;
  height: 100%;
}
</style>
