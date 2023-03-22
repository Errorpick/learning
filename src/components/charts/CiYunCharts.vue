<template>
  <div id="mywordcloud" :style="Styleciyun" ref="mywordcloud"></div>
</template>

<script>
// import "echarts-wordcloud/dist/echarts-wordcloud";
// import "echarts-wordcloud.min.js";
import "echarts-wordcloud/dist/echarts-wordcloud";
export default {
  name: "VueWordCloud",
  props: {
    rowdata: {
      type: Array,
      default: () => {
        return [
          {
            name: "天津市",
            value: 14,
          },
          {
            name: "江西省",
            value: 14,
          },
          {
            name: "广东省",
            value: 14,
          },
          {
            name: "云南省",
            value: 14,
          },
          {
            name: "台湾省",
            value: 14,
          },
          {
            name: "山东",
            value: 14,
          },
          {
            name: "吉林省",
            value: 14,
          },
          {
            name: "福建",
            value: 14,
          },
          {
            name: "陕西省",
            value: 14,
          },
          {
            name: "河南省",
            value: 14,
          },
          {
            name: "北京市",
            value: 14,
          },
          ,
          {
            name: "安徽省",
            value: 14,
          },
          ,
          {
            name: "江苏省",
            value: 14,
          },
        ];
      },
    },
    title: {
      type: Object,
      default: () => {
        return {
          text: "",
          x: "center",
        };
      },
    },
    Styleciyun: {
      type: Object,
      default: () => {
        return {
          width: "100%",
          height: "100%",
        };
      },
    },
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      chart: null,
      // worddata: [],
    };
  },
  mounted() {
    // if (this.rowdata && this.rowdata.length > 0) {
    //   this.rowdata.forEach((item) => {
    //     // this.worddata.push(item.name,r.value);
    //   });
    // }
    this.initChart();
  },
  created() {
    // this.initChart();
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.mywordcloud);
      // 绑定点击事件
      this.chart.off("click", this.bindClick);
      this.chart.on("click", this.bindClick);
      //   console.log(this.chart, 123456789);
      const option = {
        title: {
          text: "",
          x: "center",
        },
        // backgroundColor: "#fff",
        // tooltip: {
        //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        // },

        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 27,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [36, 45],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              normal: {
                color: function () {
                  // return (
                  //   "rgb(" +
                  //   Math.round(Math.random() * 255) +
                  //   ", " +
                  //   Math.round(Math.random() * 255) +
                  //   ", " +
                  //   Math.round(Math.random() * 255) +
                  //   ")"
                  // );

                  var colors = [
                    "#fda67e",
                    "#81cacc",
                    "#cca8ba",
                    "#88cc81",
                    "#DC143C",
                    "#fddb7e",
                    "#00FFFF",
                    "#bda29a",
                    "#FF00FF",
                    "#33FF00",
                    "#4B0082",
                  ];
                  return colors[parseInt(Math.random() * 10)];
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "100%",
            height: "100%",
            //数据
            data: this.rowdata,
          },
        ],
        // graphic: {
        //   elements: [
        //     {
        //       //   type: "image",
        //       style: {
        //         // image: logoUrl,
        //         width: 280,
        //         height: 40,
        //         opacity: 0.9,
        //       },
        //       right: "center",
        //       bottom: "18%",
        //     },
        //   ],
        // },
      };
      this.chart.setOption(option);
    },
    bindClick(params) {
      this.$emit("onWordClick", params.data);
    },
  },
  watch: {
    rowdata: {
      handler() {
        // this.rowdata=[];
        this.initChart();
      },
    },
  },
};
</script>
<style lang="less" scoped>
#mywordcloud {
  // background: url("../../assets/img/HuiTianYouWo/left/ciyunBG.png") no-repeat;
}
</style>
