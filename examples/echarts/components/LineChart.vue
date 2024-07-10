<template>
  <Chart :option="option" id="lineChart" />
</template>

<script setup>
import Chart from "./Chart.vue";

const option = {
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
};
</script>

<style scoped>
#lineChart {
  width: 100%;
  height: 100%;
}
</style>
