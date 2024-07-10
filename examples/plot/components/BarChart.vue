<template>
  <div id="container"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";

onMounted(() => {
  d3.csv("/data/alphabet.csv").then((data) => {
    const plot = Plot.plot({
      y: { percent: true },
      marks: [
        Plot.barY(data, {
          x: "letter",
          y: "frequency",
          fill: "steelblue",
          sort: { x: "-y" },
        }),
        Plot.ruleY([0]),
      ],
    });
    const container = document.getElementById("container");
    // Append the SVG element.
    container.append(plot);
  });
});
</script>
