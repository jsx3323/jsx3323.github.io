<template>
  <div id="barChart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  let myChart = echarts.init(document.getElementById("barChart"), "dark");

  myChart.setOption({
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: [23, 24, 18, 25, 27, 28, 25],
      },
    ],
  });
});
</script>

<style scoped>
#barChart {
  width: 100%;
  height: 100%;
}
</style>
