<template>
  <div class="row">
    <textarea class="input" :value="input" @input="update"></textarea>
    <div class="chartView">
      <div class="panel">
        <input type="checkbox" v-model="isDark" />
        <span class="toggleTitle"> Dark Mode </span>
      </div>
      <div class="chart" ref="chart"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { debounce } from "lodash-es";
import * as echarts from "echarts";
import { useData } from "vitepress";

const update = debounce((e) => {
  input.value = e.target.value;
}, 100);

let option;

const input = ref<string>(String.raw`option = {
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};`);
const chart = ref();

const { isDark } = useData();

onMounted(() => {
  eval(input.value);

  let myChart = echarts.init(chart.value, isDark ? "dark" : "");
  chart.value.style.background = isDark ? "rgb(16, 12, 42)" : "#fff";

  myChart.setOption(option);

  function setMyChart(dark: boolean) {
    myChart.dispose();
    if (dark) {
      myChart = echarts.init(chart.value, "dark");
      chart.value.style.background = "rgb(16, 12, 42)";
    } else {
      myChart = echarts.init(chart.value);
      chart.value.style.background = "#fff";
    }
    myChart.setOption(option);
  }

  watch(isDark, () => {
    setMyChart(isDark.value);
  });

  watch(input, () => {
    eval(input.value);

    myChart.setOption(option);
  });
});
</script>

<style scoped>
@media (min-width: 320px) {
  .row {
    margin: auto;
    height: 97vh;
    display: grid;
    align-items: center;
  }
  .input {
    margin-left: 10px;
    margin-top: 20px;
    height: 40vh;
    flex: 30%;
    border: unset;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
    border-radius: 5px;
    overflow: hidden;
    padding: 10px;
    display: inline-block;
    overflow-y: scroll;
  }

  .panel {
    display: flex;
    /* margin-top: 5px; */
    margin-bottom: 5px;
    padding: 5px;
    text-align: center;
    align-items: center;
  }
  .toggleTitle {
    margin-left: 5px;
    margin-top: 3px;
    text-align: center;
    font-family: sans-serif;
  }
  .chartView {
    margin-left: 20px;
    margin-right: 20px;
    height: 50vh;
    /* flex: 50%; */
  }

  .chart {
    height: 45vh;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    padding: 10px;
  }
}

@media (min-width: 992px) {
  .row {
    margin: auto;
    height: 97vh;
    display: flex;
    align-items: center;
  }
  .input {
    height: 100%;
    flex: 40%;
  }

  .chartView {
    flex: 60%;
    height: 100%;
  }

  .chart {
    height: 95%;
  }
}
</style>
