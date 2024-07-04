<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { SVGRenderer } from "echarts/renderers";

import VChart, { THEME_KEY, INIT_OPTIONS_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([GridComponent, BarChart, SVGRenderer]);

provide(THEME_KEY, "dark");

// provide(INIT_OPTIONS_KEY, {
//   renderer: "svg",
//   ssr: true,
// });

const option = ref({
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
</script>
