<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { ScatterChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([GridComponent, ScatterChart, CanvasRenderer]);

provide(THEME_KEY, "dark");

const option = ref({
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
</script>
