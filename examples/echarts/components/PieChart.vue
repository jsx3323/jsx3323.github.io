<template>
  <div id="pieChart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  let myChart = echarts.init(document.getElementById("pieChart"), "dark");

  myChart.setOption({
    series: [
      {
        type: "pie",
        data: [
          {
            value: 335,
            name: "Direct Visit",
          },
          {
            value: 234,
            name: "Union Ad",
          },
          {
            value: 1548,
            name: "Search Engine",
          },
        ],
      },
    ],
  });
});
</script>

<style scoped>
#pieChart {
  width: 100%;
  height: 100%;
}
</style>
