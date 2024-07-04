<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";

import VChart, { THEME_KEY, INIT_OPTIONS_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([PieChart, SVGRenderer]);

provide(THEME_KEY, "dark");

// provide(INIT_OPTIONS_KEY, {
//   renderer: "svg",
//   ssr: true,
// });

const option = ref({
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
</script>
