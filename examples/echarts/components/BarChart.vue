<template>
  <Chart :option="option" id="barChart" />
</template>

<script setup>
import Chart from "./Chart.vue";

const option = {
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
};
</script>

<style scoped>
#barChart {
  width: 100%;
  height: 100%;
}
</style>
