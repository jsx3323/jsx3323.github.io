<template>
  <Chart :option="option" id="pieChart" />
</template>

<script setup>
import Chart from "./Chart.vue";

const option = {
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
};
</script>

<style scoped>
#pieChart {
  width: 100%;
  height: 100%;
}
</style>
