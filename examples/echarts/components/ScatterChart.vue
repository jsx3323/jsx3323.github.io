<template>
  <Chart :option="option" id="scatterChart" />
</template>

<script setup>
import Chart from "./Chart.vue";

const option = {
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
  };
</script>

<style scoped>
#scatterChart {
  width: 100%;
  height: 100%;
}
</style>
