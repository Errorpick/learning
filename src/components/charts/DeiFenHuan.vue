<template>
  <div class="loop">
    <div class="container">
      <div ref="loop" :style="{ width: `${width}`, height: `${height}` }"></div>
      <div
        class="loop_label"
        :style="{ width: `${width}`, height: `${height}` }"
        v-if="rowData.length"
      >
        <!-- <div class="text" v-text="selectedSeries.category"></div>
        <div class="num" v-text="selectedSeries.value"></div> -->
        <div class="num" v-text="loopNum"></div>
        <div class="text" v-text="loopText"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rLeft: { type: String, default: '16%' },
    height: { type: String, default: '500px' }, //高度
    width: { type: String, default: '400px' }, //宽度
    // value
    rowData: {
      type: Array,
      default: () => {
        return [
          { category: '类型1', value: 0.7 },
          { category: '类型2', value: 0.3 },
          // { category: "类型3", value: 0.7 },
        ];
      },
    },
    // 中心图例是否展示
    flag: {
      type: Boolean,
      default: true,
    },
    loopText: {
      type: String,
      default() {
        return '已执行';
      },
    },
    loopNum: {
      type: String,
      default() {
        return '100%';
      },
    },
    //图例value
    legends: {
      type: Object,
      default: () => {
        return {
          城管采集员: '#00BFFF',
          执法人员: '#FFE426',
          坐席人员: '#00DD8A',
          离岗: '#96FF2B',
        };
      },
    },
    //饼图左侧图例样式
    displayModel: {
      type: Number,
      default: 9, //0 图例 1 进度条 2 图例+个数
    },
    chartStyle: {
      type: Object,
      default: () => {
        return {
          left: 6,
          top: 20,
          right: 15,
          bottom: 25,
        };
      },
    },
    pieColor: {
      type: Array,
      default: () => {
        return ['#BFFF00', '#00D6FC', '#117EEA'];
      },
    },
  },

  data() {
    return {
      ind: 0,
      loopData: [
        {
          select: 10,
          name: '风电',
          value: 50,
        },
        {
          select: 10,
          name: '水电',
          value: 50,
        },
        {
          select: 10,
          name: '太阳能',
          value: 50,
        },
      ],
      num: 0,
      //当前选中的value
      selectedSeries: {
        category: '',
        value: '',
      },
      sum: 0,
      Status: [],
    };
  },
  mounted() {
    if (!this.rowData.length) {
      this.noDataShow();
      return;
    }
    this.$nextTick(() => {
      this.draw();
    });

    // console.log(this.rowData, 2222,);
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(this.$refs.loop);
      let that = this;
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{d}%',
        },
        series: [
          {
            ...this.chartStyle,
            type: 'pie',
            // radius: '50%',
            radius: ['92%', '76%'],
            hoverAnimation: false,
            selectedMode: 'single',
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = [
                    {
                      c1: '#0B4C98', //实践
                      c2: '#0478FE',
                    },
                    {
                      c1: '#35424F', //管理
                      c2: '#35424F',
                    },

                    {
                      c1: '#63E587', //操作
                      c2: '#5FE2E4',
                    },
                  ];
                  return new that.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                      offset: 0,
                      color: colorList[params.dataIndex].c1,
                    },
                    {
                      offset: 1,
                      color: colorList[params.dataIndex].c2,
                    },
                  ]);
                },
              },
            },

            label: {
              show: false,
              position: 'center',
            },
            labelLine: {
              show: false,
            },
            data: [],
          },
        ],
      };
      this.loopData = this.convertData(this.rowData, this.legends);
      this.option.series[0].data = this.loopData;
      console.log(this.loopData, '666666');
      // this.carousel();
      this.myChart.setOption(this.option);
    },
    //value转换
    convertData(rowData, legends) {
      this.sum = 0;
      let returnData = [];
      rowData.forEach((d) => {
        this.sum += d.value;
        returnData.push({
          value: d.value,
          name: d.category,
          // itemStyle: {
          //   color: legends[d.category]
          // }
        });
      });
      returnData.forEach((d) => {
        d.num =
          this.sum == 0 ? '0' : ((d.value / this.sum) * 100).toFixed(2) + '%';
      });

      //进度条模式时 倒序排序
      if (this.displayModel == 1) {
        returnData.sort((a, b) => {
          return b.value - a.value;
        });
      }

      //增加千分位
      if (this.displayModel == 2) {
        let re = /(?=(?!(\b))(\d{3})+$)/g;
        returnData.forEach((r) => {
          r.value = String(r.value).replace(re, ',');
        });
      }
      return returnData;
    },
    setTimeToDo() {
      const data = this.option.series[0].data;
      data.forEach((e) => (e.selected = false));
      data[this.num].selected = true;
      this.selectedSeries.category = data[this.num].name;
      // 计算百分比的一个
      this.selectedSeries.value = data[this.num].num;

      // 必须重新设置option，因为echart没有监听data的变化
      this.myChart.setOption(this.option);
    },
    setHighLight() {
      clearInterval(this.timer);
      const data = this.option.series[0].data;
      this.timer = setInterval(() => {
        if (this.num < data.length - 1) {
          this.num++;
        } else {
          this.num = 0;
        }
        this.setTimeToDo();
      }, 3000);
    },
    //轮播
    carousel() {
      if (this.option.series[0].data.length > 0) {
        //开启定时器
        this.setTimeToDo();
        this.setHighLight();
        this.myChart.on('mouseover', (params) => {
          clearInterval(this.timer);
          // 鼠标快速移动时，会导致mouseover里的代码来不及执行，引起事件延迟，出现多个扇形区域同时被选中的现象，所以有必要设置防抖函数
          this.debounce && clearTimeout(this.debounce);
          this.debounce = setTimeout(() => {
            const data = this.option.series[0].data;
            data.forEach((e) => (e.selected = false));
            data[params.dataIndex].selected = true;
            this.myChart.setOption(this.option);
            this.num = params.dataIndex;
          }, 300);
        });

        this.myChart.on('mouseout', () => {
          this.setTimeToDo();
          this.setHighLight();
        });
      }
    },
    noDataShow() {
      this.myChart = this.$echarts.init(this.$refs.loop);
      this.myChart.setOption({
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
  watch: {
    rowData: {
      handler(neVal) {
        if (!neVal.length) {
          this.noDataShow();
          return;
        }
        this.option.series[0].data = [];
        this.loopData = this.convertData(neVal, this.legends);
        this.option.series[0].data = this.loopData;
        this.$nextTick(() => {
          let chart = this.$echarts.init(this.$refs.loop);
          // this.carousel();
          chart.setOption(this.option);
        });
      },
      deep: true,
    },
  },
  destroyed() {
    this.timer && clearInterval(this.timer);
    this.myChart.dispose();
    this.debounce && clearTimeout(this.debounce);
  },
};
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
  width: 5px;
  height: 20px;
  background: #00d6fc;
}
.loop {
  width: 100%;
  height: 100%;
  position: relative;

  .loop_label {
    position: absolute;
    // top: 0;
    // left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 30px;
      background: linear-gradient(to bottom, #fff, #c5fcf3);
      -webkit-background-clip: text;
      color: transparent;
      font-family: 'PingFang SC';
    }
    .num {
      font-size: 70px;
      background: linear-gradient(to bottom, #fff, #c5fcf3);
      -webkit-background-clip: text;
      color: transparent;
      font-family: 'Voltage';
    }
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .left {
      flex: 1;
    }
    .right {
      max-height: calc(100% - 20px);
      overflow: auto;
      height: 100%;
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .right_item {
        display: flex;
        align-items: center;
        padding-left: 20px;
        height: 35px;
        line-height: 24px;

        .legend {
          width: 3px;
          height: 12px;
        }

        .text {
          padding-left: 5px;
          color: #b8e5fe;
          font-size: 14px;
          font-weight: '400';
          width: 90px;
        }

        .num {
          font-size: 30px;
          // padding-left: 40px;
          font-family: 'DINCond-Medium';
          font-weight: '400';
          overflow: hidden;
        }
      }

      .right_item_2 {
        padding-top: 10px;
        align-items: center;
        padding-left: 20px;
        height: 80px;
        line-height: 80px;

        .top {
          height: 40px;
          line-height: 40px;
          display: flex;
        }

        .text {
          width: 60%;
          color: #b8e5fe;
          font-size: 26px;
          font-weight: '400';
        }
        .num {
          width: 40%;
          color: #e9e9e9;
          font-size: 15px;
          font-family: 'DINCond-Medium';
          text-align: center;
          font-weight: '400';
        }

        .unit {
          width: 24px;
          color: #13bfff;
          font-size: 20px;
        }

        .progress {
          margin-top: 10px;
          height: 10px;
        }
      }

      .right_item_3 {
        align-items: center;
        height: 60px;
        line-height: 55px;
        display: flex;

        .legend {
          width: 6px;
          height: 24px;
        }

        .text {
          padding-left: 5px;
          color: #b8e5fe;
          font-size: 26px;
          font-weight: '400';
        }

        .num {
          font-size: 30px;
          padding-left: 60px;
          font-family: 'DINCond-Medium';
          overflow: hidden;
          font-weight: '400';
        }

        .unitNum {
          font-size: 15px;
          color: #e9e9e9;
          padding-left: 30px;
          font-family: 'DINCond-Medium';
          margin-left: auto;
        }
        .unit {
          color: #13bfff;
          padding-left: 10px;
          font-size: 22px;
          margin-right: 20px;
        }
      }
    }
    .rose_legend {
      // margin-left: -50px;
      // margin-right: -82px;
      width: 392px;
      position: relative;
      // height: 192px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // margin-top: 5px;
      .legend {
        position: relative;
        height: 40px;
        display: flex;
        margin-bottom: 22px;
        border-bottom: 1px solid #999;
        padding-bottom: 22px;
        .legend_progress {
          width: 100%;
          height: 10px;
          background: red;
          position: absolute;
          // left: 16px;
          top: 39px;
        }
        .legend_color {
          width: 12px;
          height: 12px;
          margin-top: 7px;
          border-radius: 50%;
        }
        .legend_name {
          font-size: 24px;
          color: #aae3ff;
          font-family: 'PingFang';
          line-height: 22px;
          // margin-left: 15px;
          width: 190px;
        }
        .legend_value {
          position: absolute;
          right: 35px;
          top: 2px;
          font-size: 36px;
          color: #00dfff;
          font-family: 'Voltage';
          line-height: 22px;
          // margin-right: 20px;
        }
        .legend_unit {
          position: absolute;
          top: 5px;
          right: 0px;
          line-height: 22px;
          font-size: 22px;
          color: #d2f0ff;
          font-family: '微软雅黑';
        }
      }
    }
    // 新添加的图例
    .gdyadd_legend {
      width: 200px;
      position: relative;
      // height: 192px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // margin-top: 5px;
      .legend {
        position: relative;
        height: 40px;
        display: flex;
        margin-bottom: 22px;
        .legend_progress {
          width: 3px;
          height: 16px;
          background: red;
          position: absolute;
          left: -9px;
          top: 3px;
        }
        .legend_Color {
          width: 12px;
          height: 12px;
          margin-top: 7px;
          border-radius: 50%;
        }
        .legend_name {
          font-size: 18px;
          color: #aae3ff;
          font-family: 'PingFang';
          line-height: 18px;
          // margin-left: 15px;
          width: 190px;
        }
        .legend_value {
          position: absolute;
          left: 0px;
          top: 30px;
          font-size: 30px;
          color: #00dfff;
          font-family: 'Voltage';
          line-height: 24px;
          // margin-right: 20px;
        }
        .legend_unit {
          position: absolute;
          top: 5px;
          right: 0px;
          line-height: 22px;
          font-size: 22px;
          color: #d2f0ff;
          font-family: '微软雅黑';
        }
      }
    }
  }
}
</style>
