<!--
 * @Author: hp
 * @Date: 2021-03-18 14:43:04
 * @LastEditTime: 2021-04-07 17:50:33
 * @LastEditors: your name
 * @Description:正三角漏斗图
 * @FilePath: /langchao_gongqingcheng/src/components/echarts/FunnelChart.vue
-->
<template>
  <div class="funnel_chart">
    <div
      class="funnel_chart_div"
      ref="chart"
      :style="{ width: width, heigth: height }"
    ></div>

    <div class="rose_legend" v-if="displayModel === 3">
      <div class="legend" v-for="(item, index) in rowData" :key="index">
        <div class="legend_color" :style="{ background: color[index] }"></div>
        <div class="legend_name" :style="{ color: color[index] }">
          {{ item.name }}
        </div>
        <div class="legend_num">
          {{ item.value }}
        </div>
        <div class="legend_unit">
          {{ legthunit }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  props: {
    width: {
      type: String,
      default: '300px',
    },
    height: {
      type: String,
      default: '300px',
    },
    rowData: {
      type: Array,
      default() {
        return [
          { value: 50, name: '访问' },
          { value: 30, name: '咨询' },
          { value: 40, name: '订单' },
          { value: 70, name: '点击' },
          { value: 80, name: '展现' },
        ];
      },
    },
    displayModel: {
      type: Number,
      default: 3,
    },
    color: {
      type: Array,
      default() {
        return [
          '#5470c6',
          '#91cc75',
          '#fac858',
          '#ee6666',
          '#73c0de',
          '#3ba272',
          '#fc8452',
          '#9a60b4',
          '#ea7ccc',
        ];
      },
    },
    legthunit: {
      type: String,
      default: '件',
    },
  },
  data() {
    return {
      chartInst: null,
      option: {},
      value: [],
      setTime: null,
      recodeCount: 0,
    };
  },
  methods: {
    instantiation() {
      this.chartInst = echarts.init(this.$refs.chart);
      let sum = eval(this.rowData.map((item) => item.value).join('+'));
      let addUp = 0;
      let minHeight = 2; //最小高度
      let top = 5;
      let newData = this.rowData.map((item) => {
        let itemValue = 0;
        if ((item.value / sum) * 100 < minHeight) itemValue = minHeight;
        else itemValue = (item.value / sum) * 100;
        top += itemValue;
        return {
          value: (addUp += itemValue),
          name: item.name,
          realValue: item.value,
          itemStyle: {
            height: `${itemValue}%`,
          },
        };
      });
      this.option = {
        color: this.color,
        calculable: true,
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            sort: 'ascending',
            top: `${top - 95}%`,
            gap: 5,
            sort: 'ascending',
            emphasis: {
              label: {
                fontSize: 16,
              },
            },
            label: {
              show: false,
              position: 'inside',
            },
            data: newData,
          },
        ],
      };
      this.chartInst.setOption(this.option, true);
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      let count = 0;
      this.setTime = setInterval(() => {
        if (count == this.rowData.length) {
          count = 0;
          this.chartInst.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: this.rowData.length - 1,
          });
        }
        if (count != 0) {
          this.chartInst.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: count - 1,
          });
        }
        this.chartInst.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: count,
        });
        this.recodeCount = count;
        count++;
      }, 3000);
    },
    // 鼠标移入移出事件
    mouseHover() {
      let that = this;
      this.chartInst.getZr().on('mousemove', function (params) {
        // 取消上次高亮 清除定时器
        if (that.setTime) {
          clearInterval(that.setTime);
          that.setTime = null;
          that.chartInst.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: that.recodeCount,
          });
          return;
        }
      });
      this.chartInst.getZr().on('mouseout', function (params) {
        if (!that.setTime) that.tooltipShuffling();
      });
    },
    noDataShow() {
      this.chartInst = echarts.init(this.$refs.chart);
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
  mounted() {
    if (!this.rowData.length) {
      this.noDataShow();
      return;
    }
    this.instantiation();
    this.tooltipShuffling();
    this.mouseHover();
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    this.setTime = null;
    echarts.init(this.$refs.chart).dispose();
  },
  watch: {
    rowData: {
      handler(newV, oldV) {
        if (!newV.length) {
          this.noDataShow();
          return;
        }
        this.instantiation();
        this.tooltipShuffling();
      },
      deep: true,
    },
  },
};
</script>
<style lang="less" scoped>
.funnel_chart {
  width: 100%;
  height: 300px;
  display: flex;
  .rose_legend {
    width: 300px;
    height: 262px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .legend {
      position: relative;
      height: 49px;
      display: flex;
      align-items: center;
      .legend_color {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .legend_name {
        font-size: 24px;
        color: #aae3ff;
        font-family: '微软雅黑';
      }
      .legend_num {
        font-size: 40px;
        background-image: -webkit-linear-gradient(bottom, #fff, #81bac9);
        -webkit-background-clip: text;
        color: transparent;
        font-family: 'Voltage';
      }
      .legend_value {
        font-size: 40px;
        color: #dddddd;
        font-family: 'Voltage';
        line-height: 40px;
      }
      .legend_unit {
        line-height: 22px;
        font-size: 20px;
        color: #14bfff;
        font-family: '微软雅黑';
      }
    }
  }
}
</style>
