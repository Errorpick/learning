<template>
  <div :style="chartStyle" id="chart"></div>
</template>

<script setup lang="ts">
import { log } from "console";
import * as echarts from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";
const chartStyle = {
  width: "700px",
  height: "390px",
};
const barStyle = [
  {
    barcolor: [
      "#00BFFF",
      "#73FFFF",
      "#00BFFF",
      "#73FFFF",
      "#00BFFF",
      "#73FFFF",
    ],
    barWidth: 20,
  },
  {
    barcolor: [
      "#ff0000",
      "#00ff00",
      "#ff0000",
      "#00ff00",
      "#ff0000",
      "#00ff00",
    ],
    barWidth: 10,
  },
];
let rowData = [
  {
    xAxis: "01",
    value: "20",
    item: "10",
  },
  {
    xAxis: "02",
    value: "10",
    item: "20",
  },
  {
    xAxis: "03",
    value: "10",
    item: "10",
  },
];
let chartInst = null;

function initChart() {
  chartInst = echarts.init(document.getElementById("chart"));
  dataPro();
}
function dataPro() {
  let xAxisData = [];
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        animation: false,
        label: {
          backgroundColor: "#505765",
        },
      },
    },
    grid: {
      top: "20%",
      bottom: "13%",
      left: "10%",
      right: "10%",
    },
    xAxis: {
      type: "category",
      data: [],
      axisLine: {
        lineStyle: {
          color: "#BFEBFF",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 14,
        interval: 0,
      },
    },
    yAxis: {
      type: "value",
      name: "单位：人次",
      nameTextStyle: {
        fontSize: 14,
        padding: [0, 0, 0, 35], // 四个数字分别为上右下左与原位置距离
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#BFEBFF",
        },
      },
      axisLabel: {
        fontSize: 14,
        interval: 0,
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(255,255,255,0.1)", "rgba(238,238,238,0)"],
        },
      },
    },
    series: [],
  };
  rowData.forEach((val) => {
    xAxisData.push(val.xAxis);
    let dataKeys = Object.keys(val).filter((f) => {
      if (f != "xAxis") return f;
    });
    let serieData = [];
    option.series = [];
    for (const key in dataKeys) {
      let item = val[dataKeys[key]];
      serieData.push(item);
      option.series.push({
        data: serieData,
        avoidLabelOverlap: false,
        type: "bar",
        barWidth: barStyle[key].barWidth,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, colorPro(key)),
        },
      });
    }
  });
  console.log(option);

  option.xAxis.data = xAxisData;
  chartInst.setOption(option, true);
}
function colorPro(barIndex) {
  let barColor = [];
  let len = barStyle[barIndex].barcolor.length;
  for (let i = 0; i < len; i++) {
    barColor.push({
      offset: len == i + 1 ? 1 : ((100 / len) * 0.01).toFixed(2) * i,
      color: "#ffff00",
    });
  }
  return barColor;
}
let setTime = null;
function tooltipShuffling() {
  clearInterval(setTime);
  let count = 0;
  setTime = setInterval(() => {
    if (count == rowData.length) {
      count = 0;
    }
    chartInst.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: count,
    });
    count++;
  }, 3000);
}
onMounted(() => {
  if (!rowData) {
    noDataShow();
    return;
  }
  initChart();
  tooltipShuffling();
});

function noDataShow() {
  chartInst = echarts.init(this.$refs.chart);
  chartInst.setOption({
    backgroundColor: "rgba(255,255,255,.03)",
    title: {
      text: `暂无数据`,
      show: true,
      textStyle: {
        align: "center",
        color: "#fff",
        fontSize: 32,
      },
      top: "center",
      left: "center",
    },
  });
}
// onBeforeUnmount;
// beforeDestroy() {
//   clearInterval(this.setTime);
//   echarts.init(this.$refs.chart).dispose();
// },
</script>

<style lang="less" scoped></style>
