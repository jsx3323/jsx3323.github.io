<template>
  <div ref="chart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as Plot from "@observablehq/plot";
import penguins from "../asset/penguins.json";

const chart = ref(null);
const plot = Plot.plot({
  marks: [
    Plot.dot(penguins, {
      x: "culmen_length_mm",
      y: "culmen_depth_mm",
    }),
  ],
});

onMounted(() => {
  // Append the SVG element.
  chart.value.append(plot);
});
</script>
