<!-- @format 水球图  -->

<template>
  <div class="water">
    <div
      class="myChart"
      ref="myChart"
      :style="{ width: width, height: height }"
    ></div>
    <div class="waterTitle" :style="{ width: width, height: height }">
      <div class="textt">{{ val }}%</div>
    </div>
    <div class="names">{{ names }}</div>
  </div>
</template>

<script>
import 'echarts-liquidfill';
export default {
  name: 'Water',
  props: {
    names: {
      type: String,
      default: '',
    },
    val: {
      type: Number,
      default: 53,
    },
    height: {
      type: String,
      default: '200px',
    },

    width: {
      type: String,
      default: '200px',
    },

    waterColor: {
      type: Array,
      default: () => {
        return ['rgb(0,221,138)', 'rgba(38,147,255,8)'];
      },
    },
  },
  data() {
    return {
      setTime: null,
      chartInst: null,
      initTimer: null,
    };
  },
  mounted() {
    // let hygrometer = this.$echarts.init(this.$refs.hygrometer);
    // const option = {
    //   series: [
    //     {
    //       type: 'liquidFill',
    //       data: [0.6],
    //     },
    //   ],
    // };
    // hygrometer.setOption(option);
    this.drawLine();
    this.initTimer = setInterval(() => {
      this.chartInst.dispose();
      this.drawLine();
    }, 30000);
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      // 绘制图表
      this.chartInst.setOption({
        title: {
          show: false,
          text: this.val + '%',
          textStyle: {
            fontSize: 64,
            fontFamily: 'Voltage',
            fontWeight: 'normal',
            color: '#00ffbf',
          },
          x: 'center',
          top: '50%',
        },
        backgroundColor: '#06064600',
        // 数据
        series: [
          {
            showbackground: false,
            type: 'liquidFill',
            radius: '90%',
            center: ['50%', '50%'],
            data: [this.val / 100],
            color: [
              {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 1,
                    color: this.waterColor[0], // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: this.waterColor[1], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            ],
            backgroundStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 221, 138, 0)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(38, 147, 255,0)', // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            outline: {
              borderDistance: 2,
              itemStyle: {
                borderWidth: 2,
                borderColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(0,191,255,0.25)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,191,255,0.25)',
                    },
                  ],
                  // globalCoord: false
                },
                shadowBlur: 30,
                shadowColor: 'red',
              },
            },
            label: {
              formatter: function () {
                return '';
              },
            },
          },
        ],
      });
      // window.addEventListener("resize", function() {
      //   myChart.resize(); // myChart 是实例对象
      // });
    },
  },
  beforeDestroy() {
    clearInterval(this.initTimer);
  },
  watch: {
    val: {
      handler() {
        this.chartInst && this.chartInst.dispose();
        this.drawLine();
      },
    },
  },
};
</script>

<style lang="less" scoped>
.water {
  position: relative;
  width: 100%;
  height: 100%;
}
.waterTitle {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 90px;
  font-family: 'Voltage';
  background-image: -webkit-linear-gradient(top, #fff, #8dedf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  .textt {
    font-size: 48px;
    font-family: 'Voltage';
    background-image: -webkit-linear-gradient(top, #fff, #8dedf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.names {
  width: 100%;
  text-align: center;
  color: #26ffff;
  font-family: '碳纤维正中黑简体';
  font-size: 20px;
  margin-top: 5px;
}
</style>
