<script setup>
import Chart from "./components/Chart.vue"

const simpleExampleOption = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]
};

const multiSeriesOption = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    },
    {
      type: 'bar',
      data: [26, 24, 18, 22, 23, 20, 27]
    }
  ]
};
</script>

<style module>
.chart {
  width: 100%;
  height: 400px;
}
</style>

# Basic Bar Chart

Bar Chart, is a chart that presents the comparisons among discrete data. The length of the bars is proportionally related to the categorical data.

To set the bar chart, you need to set the `type` of `series` as `'bar'`.

## Simple Example

Let's begin with a basic bar chart:

```js
option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]
};
```
<div :class="$style.chart">
  <Chart :option="simpleExampleOption" />
</div>

In this case, the x-axis is under the category type. Therefore, you should define some corresponding values for `'xAxis'`. Meanwhile, the data type of the y-axis is numerical. The range of the y-axis will be generated automatically by the `data` in `'series'`.

## Multi-series Bar Chart

You may use a series to represent a group of related data. To show multiple series in the same chart, you need to add one more array under the series.

```js
option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    },
    {
      type: 'bar',
      data: [26, 24, 18, 22, 23, 20, 27]
    }
  ]
};
```
<div :class="$style.chart">
  <Chart :option="multiSeriesOption" />
</div>
