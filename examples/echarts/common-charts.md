<script setup>
import BarChart from "./components/BarChart.vue"
import LineChart from "./components/LineChart.vue"
import PieChart from "./components/PieChart.vue"
import ScatterChart from "./components/ScatterChart.vue"

</script>

<style module>
  .chart {
    width: 100%;
    height: 400px;
  }
</style>

# ECharts Examples

<a href="https://echarts.apache.org">
    <img style="vertical-align: top; height: 50px;" src="/asset/echarts-logo.png?raw=true" alt="echarts-logo">
</a>

**Apache ECharts** is a free, powerful charting and visualization library offering easy ways to add intuitive, interactive, and highly customizable charts to your commercial products. It is written in pure JavaScript and based on [zrender](https://github.com/ecomfe/zrender), which is a whole new lightweight canvas library

## Common Charts

### Bar Chart

A **bar chart** or **bar graph** is a chart or graph that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent. The bars can be plotted vertically or horizontally. A vertical bar chart is sometimes called a **column chart**.

<div :class="$style.chart">
  <BarChart />
</div>

### Line Chart

A **line chart** or **line graph**, also known as **curve chart**, is a type of chart that displays information as a series of data points called 'markers' connected by straight line segments. It is a basic type of chart common in many fields. It is similar to a scatter plot except that the measurement points are ordered (typically by their x-axis value) and joined with straight line segments. A line chart is often used to visualize a trend in data over intervals of time – a time series – thus the line is often drawn chronologically. In these cases they are known as run charts.

<div :class="$style.chart">
  <LineChart />
</div>

### Pie Chart

A **pie chart** (or a **circle chart**) is a circular statistical graphic which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area) is proportional to the quantity it represents. While it is named for its resemblance to a pie which has been sliced, there are variations on the way it can be presented. The earliest known pie chart is generally credited to William Playfair's Statistical Breviary of 1801.

<div :class="$style.chart">
  <PieChart />
</div>

### Scatter Chart

A **scatter chart**, also called a **scatter plot**, **scatter graph**, , **scattergram**, or **scatter diagram**, is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data. If the points are coded (color/shape/size), one additional variable can be displayed. The data are displayed as a collection of points, each having the value of one variable determining the position on the horizontal axis and the value of the other variable determining the position on the vertical axis.

<div :class="$style.chart">
  <ScatterChart />
</div>
