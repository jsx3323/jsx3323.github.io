<template>
  <div ref="chart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted, watchEffect } from "vue";

const props = defineProps(["option"]);

const option = ref(props.option);

const chart = ref(null);

onMounted(() => {
  let myChart = echarts.init(chart.value, "dark");
  watchEffect(() => {
    console.log(option.value);
    myChart.setOption(option.value);
  });
});
</script>
