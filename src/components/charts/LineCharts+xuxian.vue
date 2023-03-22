<template>
  <div class="chartBox">
    <div
      class="myChart"
      ref="myChart"
      :style="{ width: width, height: height }"
    ></div>
    <ul
      class="legth"
      :style="{ top: legTop, left: legLeft }"
      v-if="legIsShow && rowData.length"
    >
      <li v-for="(item, i) in legthWZ" :key="i">
        <h3
          :style="{
            backgroundColor: legthColor[i],
            width: legendwidth,
            height: legendheight,
            marginTop: margintop,
          }"
        ></h3>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Array,
      default: () => {
        return [
          {
            name: '00:00',
            value: 90,
            item: 10,
            val: 10,
          },
          {
            name: '02:00',
            value: 150,
            item: 20,
            val: 10,
          },
          {
            name: '04:00',
            value: 130,
            item: 120,
            val: 10,
          },
          {
            name: '04:00',
            value: 130,
            item: 130,
            val: 10,
          },
          {
            name: '04:00',
            value: 120,
            item: 140,
            val: 10,
          },
          {
            name: '06:00',
            value: 100,
            item: 150,
            val: 10,
          },
          {
            name: '08:00',
            value: 80,
            item: 110,
            val: 10,
          },
          {
            name: '10:00',
            value: 80,
            item: 160,
            val: 10,
          },
          {
            name: '12:00',
            value: 70,
            item: 191,
            val: 10,
          },
          {
            name: '14:00',
            value: 90,
            item: 182,
            val: 10,
          },
          {
            name: '16:00',
            value: 100,
            item: 170,
            val: 10,
          },
          {
            name: '18:00',
            value: 130,
            item: 160,
          },
          {
            name: '20:00',
            value: 120,
            item: 150,
            val: 10,
          },
          {
            name: '22:00',
            value: 110,
            item: 140,
            val: 10,
          },
        ];
      },
    },
    barColor: {
      type: Array,
      default: () => {
        return ['#04C8EB', '#80ECFF', '#04C8EB', '#80ECFF'];
      },
    },
    legthColor: {
      type: Array,
      default: () => {
        return ['#4BDBF4', '#EECC46'];
      },
    },
    legthWZ: {
      type: Array,
      default: () => {
        return ['总量', '整改量'];
      },
    },
    unit: {
      type: String,
      default: () => {
        return '个';
      },
    },
    barWidth: {
      type: [String, Number],
      default: () => {
        return '22';
      },
    },
    width: {
      type: String,
      default: () => {
        return '644px';
      },
    },
    height: {
      type: String,
      default: () => {
        return '266px';
      },
    },
    legTop: {
      type: String,
      default: () => {
        return '10px';
      },
    },
    legLeft: {
      type: String,
      default: () => {
        return '420px';
      },
    },
    legIsShow: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    symbolSizebordius: {
      type: Number,
      default: () => {
        return 10;
      },
    },
    legendwidth: {
      type: String,
      default: () => {
        return '';
      },
    },
    legendheight: {
      type: String,
      default: () => {
        return '';
      },
    },
    margintop: {
      type: String,
      default: () => {
        return '';
      },
    },
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [],
      valthree: [],
      valfour: [],
      valfive: [],
      valsix: [],
      valseven: [],
      setTime: null,
      chartInst: null,
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach((item) => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
        this.valthree.push(item.val);
        this.valfour.push(item.val1);
        this.valfive.push(item.val2);
        this.valsix.push(item.val3);
        this.valseven.push(item.val4);
      });
    } else {
      this.noDataShow();
      return;
    }
    this.drawWidth();
    this.tooltipShuffling();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        color: '#00BFFF',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        grid: {
          left: '3%',
          right: '0%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            boundaryGap: false,
            type: 'category',
            data: this.Xdata,
            axisTick: {
              alignWithLabel: true,
            },
            interval: 0,
            axisLabel: {
              //x轴文字的配置
              textStyle: {
                color: '#BFEBFF',
                fontSize: 22,
                fontFamily: 'PingFang',
              },
            },
            axisLine: {
              lineStyle: {
                color: '#9FAFB5',
                width: 1.2, //这里是为了突出显示加上的
              },
            },
          },
        ],
        yAxis: [
          {
            name: `单位:${this.unit}`,
            position: 'left',
            type: 'value',
            nameTextStyle: {
              color: '#BFEBFF',
              fontSize: 22,
              padding: 2,
              fontFamily: 'PingFang',
            },
            axisLabel: {
              formatter: '{value} w',
              //y轴文字的配置
              textStyle: {
                color: '#BFEBFF',
                fontSize: 22,
                fontFamily: 'Helvetica',
                interval: 0,
              },
            },
            splitNumber: 5,
            // 设置y轴线条的粗细
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#0A223E'],
                width: 2,
                type: 'solid',
              },
            },
            axisLine: {
              lineStyle: {
                color: '#9FAFB5',
                width: 2, //这里是为了突出显示加上的
              },
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(14,29,52,0.5)', 'rgba(191,235,255,0.12)'],
              },
            },
          },
          {
            position: 'right',
            type: 'value',
            nameTextStyle: {
              show: false,
              color: '#BFEBFF',
              fontSize: 22,
              padding: 2,
              fontFamily: 'PingFang',
            },
            axisLine: {
              show: true,
              lineStyle: {},
            },
            axisLabel: {
              formatter: '{value} %',
              //y轴文字的配置
              textStyle: {
                color: '#BFEBFF',
                fontSize: 22,
                fontFamily: 'Helvetica',
                interval: 0,
              },
            },
            splitNumber: 5,
            // 设置y轴线条的粗细
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#0A223E'],
                width: 2,
                type: 'solid',
              },
            },
            axisLine: {
              lineStyle: {
                color: '#9FAFB5',
                width: 2, //这里是为了突出显示加上的
              },
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(14,29,52,0.5)', 'rgba(191,235,255,0.12)'],
              },
            },
          },
        ],
        series: [
          {
            type: 'line',
            width: this.barWidth,
            symbolSize: this.symbolSizebordius,
            data: this.Ydata,
            color: this.barColor[0],
          },
          {
            yAxisIndex: 1,
            type: 'line',
            barWidth: this.barWidth,
            data: this.valTwo,
            symbolSize: this.symbolSizebordius,
            color: this.barColor[1],
          },
          {
            type: 'line',
            barWidth: this.barWidth,
            data: this.valthree,
            symbolSize: this.symbolSizebordius,
            color: this.barColor[2],
          },
          {
            type: 'line',
            barWidth: this.barWidth,
            data: this.valfour,
            symbolSize: this.symbolSizebordius,
            color: this.barColor[3],
          },
          {
            type: 'line',
            barWidth: this.barWidth,
            data: this.valfive,
            symbolSize: this.symbolSizebordius,
            color: this.barColor[4],
          },
          {
            type: 'line',
            barWidth: this.barWidth,
            data: this.valsix,
            symbolSize: this.symbolSizebordius,
            color: this.barColor[5],
          },
          {
            type: 'line',
            barWidth: this.barWidth,
            data: this.valseven,
            symbolSize: this.symbolSizebordius,
            color: this.barColor[6],
          },
        ],
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0,
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0, //表示series中的第几个data数据循环展示
          dataIndex: currentIndex,
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
      }, 3000);
    },
    noDataShow() {
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        backgroundColor: 'rgba(255,255,255,.03)',
        title: {
          text: `暂无数据`,
          show: true,
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 32,
          },
          top: 'center',
          left: 'center',
        },
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    this.setTime = null;
    this.chartInst.dispose();
  },
  watch: {
    rowData: {
      handler(val) {
        if (!val.length) {
          this.noDataShow();
          return;
        }
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.valthree = [];
        this.rowData.forEach((item) => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
          this.valthree.push(item.val);
          this.valfour.push(item.val1);
          this.valfive.push(item.val2);
          this.valsix.push(item.val3);
          this.valseven.push(item.val3);
        });
        this.chartInst.dispose();
        this.drawWidth();
        this.tooltipShuffling();
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.chartBox {
  position: relative;
  .legth {
    position: absolute;
    left: 420px;
    top: 10px;
    width: 100%;
    li {
      float: left;
      // width: 200px;
      margin-right: 20px;
      height: 20px;
      h3 {
        float: left;
        width: 6px;
        height: 16px;
        margin-top: 18px;
        background-color: red;
      }
      span {
        margin-top: 10px;
        display: inline-block;

        margin-left: 7px;
        font-size: 22px;
        font-family: '微软雅黑';
        color: #bfebff;
      }
    }
  }
}
</style>
