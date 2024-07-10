<script setup>
import ScatterPlot from "./components/ScatterPlot.vue"
</script>

<style module>
.chart {
  width: 100%;
  height: 400px;
}
</style>

# Plot Examples

<a href="https://observablehq.com/plot/">
    <img style="vertical-align: top; height: 100px;" src="/asset/plot-logo.svg?raw=true" alt="plot-logo">
</a>

Observable Plot is a free, open-source, JavaScript library for visualizing tabular data, focused on accelerating exploratory data analysis. It has a concise, memorable, yet expressive interface, featuring scales and layered marks in the grammar of graphics style popularized by Leland Wilkinson and Hadley Wickham and inspired by the earlier ideas of Jacques Bertin. And there are plenty of examples to learn from and copy-paste.

<div :class="$style.chart">
  <ScatterPlot />
</div>