<template>
  <div class="relational_graph">
    <div class="myChart" ref="myChart"></div>
  </div>
</template>

<script>
export default {
  props: {
    graphData: {
      type: Array,
      default() {
        return [
          {
            color: '#A8AC0A',
            label: '检修',
            attributes: {},
            id: '检修',
            size: 140.0,
            value: 300,
          },
          {
            color: '#1180EE',
            label: '离线',
            attributes: {},
            id: '离线',
            size: 90,
            value: 400,
          },
          {
            color: '#00D9D9',
            label: '限电',
            attributes: {},
            id: '限电',
            size: 90,
            value: 800,
          },
          {
            color: '#00DD8A',
            label: '待机',
            attributes: {},
            id: 'underscore',
            size: 90,
            value: 333,
          },
          {
            color: '#00BFFF',
            label: '运行',
            attributes: {},
            id: '待机',
            size: 90,
            value: 422,
          },
          {
            color: '#FFC926',
            label: '故障',
            attributes: {},
            id: '故障',
            size: 90,
            value: 600,
          },
        ];
      },
    },
  },
  data() {
    return {
      chartsInst: null,
      option: null,
    };
  },
  methods: {
    //初始化echarts图表
    initEcarts() {
      this.chartsInst = this.$echarts.init(this.$refs.myChart);
      let obj = {
        edges: [],
      };
      this.option = {
        title: {
          // text: "NPM Dependencies",
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 210,
              edgeLength: 240,
            },
            label: {
              normal: {
                show: true,
                formatter: ' {b|{b}}\n{c|{c}}',
                rich: {
                  b: {
                    fontSize: 22,
                    color: '#EDF9FF',
                    fontFamily: '微软雅黑',
                    align: 'center',
                  },
                  c: {
                    fontSize: 36,
                    color: '#EDF9FF',
                    fontFamily: 'Voltage',
                    align: 'center',
                  },
                },
              },
            },
            data: this.graphData.map(function (node) {
              return {
                x: node.x,
                y: node.y,
                id: node.id,
                name: node.label,
                symbolSize: node.size,
                value: node.value,
                itemStyle: {
                  color: node.color,
                },
              };
            }),
            edges: obj.edges.map(function (edge) {
              return {
                source: edge.sourceID,
                target: edge.targetID,
              };
            }),
            emphasis: {
              focus: 'adjacency',
              label: {
                left: 0,
                show: true,
              },
            },
            roam: true,
            lineStyle: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7,
            },
          },
        ],
      };
      this.chartsInst.setOption(this.option, true);
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
  mounted() {
    if (!this.graphData.length) {
      this.noDataShow();
      return;
    }
    this.initEcarts();
  },
  watch: {
    graphData: {
      handler(val) {
        if (!val.length) {
          this.noDataShow();
          return;
        }
        this.initEcarts();
      },
      deep: true,
    },
  },
  beforeDestroy() {
    this.chartsInst.dispose();
  },
};
</script>

<style lang="less" scoped>
.relational_graph {
  width: 100%;
  height: 410px;
  .myChart {
    width: 100%;
    height: 100%;
  }
}
</style>