<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { SVGRenderer } from "echarts/renderers";

import VChart, { THEME_KEY, INIT_OPTIONS_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([GridComponent, LineChart, SVGRenderer]);

provide(THEME_KEY, "dark");

// provide(INIT_OPTIONS_KEY, {
//   renderer: "svg",
//   ssr: true,
// });

const option = ref({
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
</script>
