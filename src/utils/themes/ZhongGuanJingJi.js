import layerContral from "@/utils/contral/layerContral";
export default {
  // 当前主题所有图例配置
  legends: [],
  view: null,
  statusList: [],
  init() {
    for (let layers in this.layerMap) {
      let layerList = this.layerMap[layers];
      layerList.forEach((item) => {
        item.status = "false";
      });
    }
    this.statusList = [];
    // 清除所有图层
  },
  cardName: {
    中观经济: {
      exclude: true,
      legends: [],
      sceneName: "LXQ-L0-new",
      // LiXia-L2  LXQ-L0-new
      cameraName: "态势总览",
      sceneWeather: "",
    },
    疑难事件: {
      exclude: true,
      legends: ["处置中L2", "已办结L2"],
      sceneName: "LiXia-L2",
      // LiXia-L2  LXQ-L0-new
      cameraName: "态势总览",
    },
    历下网格: {
      exclude: true,
      legends: [],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
    },
    泉城路网格: {
      exclude: true,
      legends: ["泉城路网格", "第一网格点", "第二网格点"],
      sceneName: "LiXia-L2",
      cameraName: "泉城路网格",
    },
    芙蓉街社区网格: {
      exclude: true,
      legends: ["芙蓉社区网格", "第一网格点", "第二网格点"],
      sceneName: "LiXia-L2",
      cameraName: "芙蓉社区网格",
    },
    第一网格网格: {
      exclude: true,
      legends: ["平泉叁号院网格", "第一网格点", "第二网格点"],
      sceneName: "LiXia-L2",
      cameraName: "第一网格网格",
    },
    第二网格网格: {
      exclude: true,
      legends: ["第二网格网格", "第一网格点", "第二网格点"],
      sceneName: "LiXia-L2",
      cameraName: "第二网格网格",
    },
  },
  layerMap: {
    网格: [
      {
        id: "散点-网络-网格",
        name: "散点-网络-网格",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-网格",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "网格",
          jsonPath: "./data/UeData/网格.json",
          isClick: true,
          coordZ: 0,
        },
      },
      // {
      //   id: '气泡-网格',
      //   name: '气泡-网格',
      //   fillArea: 'Gradient01',
      //   speed: 500,
      //   radiusMax: 1200,
      //   radiusMin: 500,
      //   valueMax: 100,
      //   valueMin: 1,
      //   visible: true,
      //   legends: [
      //     {
      //       name: 'default',
      //       color: '#ff0000'
      //     }
      //   ],
      //   layerConfig: {
      //     layerType: 'bubbleLayer',
      //     scatterType: '网格',
      //     jsonPath: './data/UeData/网格.json',
      //     coordZ: 0
      //   }
      // }
    ],
    联动处置力量: [
      {
        id: "散点-联动处置力量",
        name: "散点-联动处置力量",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-联动处置力量",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "联动处置力量",
          jsonPath: "./data/UeData/联动处置力量.json",
          isClick: true,
          coordZ: 0,
        },
      },
      // {
      //   id: '气泡-联动处置力量',
      //   name: '气泡-联动处置力量',
      //   fillArea: 'Gradient01',
      //   speed: 500,
      //   radiusMax: 1200,
      //   radiusMin: 500,
      //   valueMax: 100,
      //   valueMin: 1,
      //   visible: true,
      //   legends: [
      //     {
      //       name: 'default',
      //       color: '#ff0000'
      //     }
      //   ],
      //   layerConfig: {
      //     layerType: 'bubbleLayer',
      //     scatterType: '联动处置力量',
      //     jsonPath: './data/UeData/联动处置力量.json',
      //     coordZ: 0
      //   }
      // }
    ],
    今日事件: [
      {
        id: "散点-今日事件",
        name: "散点-今日事件",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-今日事件",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "今日事件",
          jsonPath: "./data/UeData/今日事件.json",
          isClick: true,
          coordZ: 0,
        },
      },
      // {
      //   id: '气泡-今日事件',
      //   name: '气泡-今日事件',
      //   fillArea: 'Gradient01',
      //   speed: 500,
      //   radiusMax: 1200,
      //   radiusMin: 500,
      //   valueMax: 100,
      //   valueMin: 1,
      //   visible: true,
      //   legends: [
      //     {
      //       name: 'default',
      //       color: '#ff0000'
      //     }
      //   ],
      //   layerConfig: {
      //     layerType: 'bubbleLayer',
      //     scatterType: '今日事件',
      //     jsonPath: './data/UeData/今日事件.json',
      //     coordZ: 0
      //   }
      // }
    ],
    视频监控: [
      {
        id: "散点-视频监控",
        name: "散点-视频监控",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-视频监控",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "视频监控",
          jsonPath: "./data/UeData/视频监控.json",
          isClick: true,
          coordZ: 0,
        },
      },
      // {
      //   id: '气泡-视频监控',
      //   name: '气泡-视频监控',
      //   fillArea: 'Gradient01',
      //   speed: 500,
      //   radiusMax: 1200,
      //   radiusMin: 500,
      //   valueMax: 100,
      //   valueMin: 1,
      //   visible: true,
      //   legends: [
      //     {
      //       name: 'default',
      //       color: '#ff0000'
      //     }
      //   ],
      //   layerConfig: {
      //     layerType: 'bubbleLayer',
      //     scatterType: '视频监控',
      //     jsonPath: './data/UeData/视频监控.json',
      //     coordZ: 0
      //   }
      // }
    ],
    重点区域: [
      {
        id: "散点-重点区域",
        name: "散点-重点区域",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-重点区域",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "重点区域",
          jsonPath: "./data/UeData/重点区域.json",
          isClick: true,
          coordZ: 0,
        },
      },
      // {
      //   id: '气泡-重点区域',
      //   name: '气泡-重点区域',
      //   fillArea: 'Gradient01',
      //   speed: 500,
      //   radiusMax: 1200,
      //   radiusMin: 500,
      //   valueMax: 100,
      //   valueMin: 1,
      //   visible: true,
      //   legends: [
      //     {
      //       name: 'default',
      //       color: '#ff0000'
      //     }
      //   ],
      //   layerConfig: {
      //     layerType: 'bubbleLayer',
      //     scatterType: '重点区域',
      //     jsonPath: './data/UeData/重点区域.json',
      //     coordZ: 0
      //   }
      // }
    ],
    基础网络: [
      {
        id: "散点-网络-基础网络",
        name: "散点-网络-基础网络",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-基础网络",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "基础网络",
          jsonPath: "./data/UeData/基础网络.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    专属网络: [
      {
        id: "散点-网络-专属网络",
        name: "散点-网络-专属网络",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-专属网络",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专属网络",
          jsonPath: "./data/UeData/专属网络.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    街道管理中心: [
      {
        id: "散点-联动处置力量-街道管理中心",
        name: "散点-联动处置力量-街道管理中心",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-街道管理中心",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "街道管理中心",
          jsonPath: "./data/UeData/街道管理中心.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    社区管理中心: [
      {
        id: "散点-联动处置力量-社区管理中心",
        name: "散点-联动处置力量-社区管理中心",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-社区管理中心",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "社区管理中心",
          jsonPath: "./data/UeData/社区管理中心.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    // 网格员: [
    //   {
    //     id: '散点-联动处置力量-网格员',
    //     name: '散点-联动处置力量-网格员',
    //     legends: [
    //       {
    //         name: 'default',
    //         color: '#ffff',
    //         iconName: 'custom-网格员'
    //       }
    //     ],
    //     layerConfig: {
    //       layerType: 'landmarkLayer',
    //       scatterType: '网格员',
    //       jsonPath: './data/UeData/网格员.json',
    //       isClick: true,
    //       coordZ: 0
    //     }
    //   }
    // ],
    网格员: [
      {
        id: "轨迹图-网格员",
        name: "轨迹图-网格员",
        coordType: 0,
        coordTypeZ: 0,
        trackStyle: "style002",
        trackDuration: 100,
        trackWidth: 5,
        objLife: 10000,
        visible: true,
        useSlider: true,
        isAppend: true,
        duration: 1,
        legends: [
          {
            name: "default",
            trackColor: "#FF0000",
            iconName: "custom-网格员",
          },
        ],
        layerConfig: {
          layerType: "trailLayer",
          scatterType: "网格员",
          jsonPath: "./data/UEdata/guiji.json",
          useJson: true,
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    处置中: [
      {
        id: "散点-今日事件-处置中",
        name: "散点-今日事件-处置中",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "处置中",
          jsonPath: "./data/UeData/处置中.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    已办结: [
      {
        id: "散点-今日事件-已办结",
        name: "散点-今日事件-已办结",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-已办结",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "已办结",
          jsonPath: "./data/UeData/已办结.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    处置中L2: [
      {
        id: "散点-今日事件-处置中L2",
        name: "散点-今日事件-处置中L2",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "处置中",
          jsonPath: "./data/UeData/处置中.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    已办结L2: [
      {
        id: "散点-今日事件-已办结L2",
        name: "散点-今日事件-已办结L2",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-已办结",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "已办结",
          jsonPath: "./data/UeData/已办结.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    AI设备: [
      {
        id: "散点-视频监控-AI设备",
        name: "散点-视频监控-AI设备",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-AI设备",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "AI设备",
          jsonPath: "./data/UeData/ai设备.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    今日告警设备: [
      {
        id: "散点-视频监控-今日告警设备",
        name: "散点-视频监控-今日告警设备",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-今日告警设备",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "今日告警设备",
          jsonPath: "./data/UeData/今日告警设备.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    物联网感知监控设备: [
      {
        id: "散点-物联网感知监控设备",
        name: "散点-物联网感知监控设备",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-物联网感知监控设备",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "物联网感知监控设备",
          jsonPath: "./data/UeData/物联网感知监控设备.json",
          isClick: true,
          coordZ: 0,
        },
      },
      // {
      //   id: '气泡-物联网感知监控设备',
      //   name: '气泡-物联网感知监控设备',
      //   fillArea: 'Gradient01',
      //   speed: 500,
      //   radiusMax: 1200,
      //   radiusMin: 500,
      //   valueMax: 100,
      //   valueMin: 1,
      //   visible: true,
      //   legends: [
      //     {
      //       name: 'default',
      //       color: '#ff0000'
      //     }
      //   ],
      //   layerConfig: {
      //     layerType: 'bubbleLayer',
      //     scatterType: '物联网感知监控设备',
      //     jsonPath: './data/UeData/物联网感知监控设备.json',
      //     coordZ: 0
      //   }
      // }
    ],
    景区: [
      {
        id: "散点-重点区域-景区",
        name: "散点-重点区域-景区",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-景区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "景区",
          jsonPath: "./data/UeData/景区.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    危化品企业: [
      {
        id: "散点-重点区域-危化品企业",
        name: "散点-重点区域-危化品企业",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-危化品企业",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "危化品企业",
          jsonPath: "./data/UeData/危化品企业.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    工地: [
      {
        id: "散点-重点区域-工地",
        name: "散点-重点区域-工地",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-工地",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地",
          jsonPath: "./data/UeData/工地.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    小区: [
      {
        id: "散点-网络-小区",
        name: "散点-网络-小区",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-小区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "小区",
          jsonPath: "./data/UeData/小区.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    历下网格: [
      {
        id: "历下网格",
        name: "历下网格",
        visible: true,
        legends: [
          {
            name: "网格1",
            type: "Segment02",
            color: "#ffe426",
            areaHeight: 80,
            fillArea: "none",
            // fillPosition: 'top'
          },
        ],
        layerConfig: {
          layerType: "typeAreaLayer",
          scatterType: "历下网格",
          jsonPath: "./data/UEData/历下网格.json",
          isClick: true,
          coordZ: 0,
          alpha: 1,
        },
      },
    ],
    // 泉城路网格: [
    //   {
    //     id: '泉城路网格',
    //     name: '泉城路网格',
    //     visible: true,
    //     legends: [
    //       {
    //         name: '网格2',
    //         type: 'Segment02',
    //         color: '#26ff93',
    //         areaHeight: 40,
    //         fillArea: 'none'
    //         // fillPosition: 'top'
    //       }
    //     ],
    //     layerConfig: {
    //       layerType: 'typeAreaLayer',
    //       scatterType: '泉城路网格',
    //       jsonPath: './data/UEData/泉城路网格.json',
    //       isClick: true,
    //       coordZ: 0,
    //       alpha: 1
    //     }
    //   }
    // ],
    // 芙蓉社区网格: [
    //   {
    //     id: '芙蓉社区网格',
    //     name: '芙蓉社区网格',
    //     visible: true,
    //     legends: [
    //       {
    //         name: '网格3',
    //         type: 'Segment02',
    //         color: '#ea6a6d',
    //         areaHeight: 40,
    //         fillArea: 'none'
    //         // fillPosition: 'top'
    //       }
    //     ],
    //     layerConfig: {
    //       layerType: 'typeAreaLayer',
    //       scatterType: '芙蓉社区网格',
    //       jsonPath: './data/UEData/芙蓉社区网格.json',
    //       isClick: true,
    //       coordZ: 0,
    //       alpha: 1
    //     }
    //   }
    // ],
    // 平泉叁号院网格: [
    //   {
    //     id: '平泉叁号院网格',
    //     name: '平泉叁号院网格',
    //     visible: true,
    //     legends: [
    //       {
    //         name: '网格4',
    //         type: 'Segment02',
    //         color: '#00bfff',
    //         areaHeight: 40,
    //         fillArea: 'none'
    //         // fillPosition: 'top'
    //       }
    //     ],
    //     layerConfig: {
    //       layerType: 'typeAreaLayer',
    //       scatterType: '平泉叁号院网格',
    //       jsonPath: './data/UEData/平泉叁号院网格.json',
    //       isClick: true,
    //       coordZ: 0,
    //       alpha: 1
    //     }
    //   }
    // ],
    // 第二网格网格: [
    //   {
    //     id: '第二网格网格',
    //     name: '第二网格网格',
    //     visible: true,
    //     legends: [
    //       {
    //         name: '网格5',
    //         type: 'Segment02',
    //         color: '#006DD9',
    //         areaHeight: 40,
    //         fillArea: 'none'
    //         // fillPosition: 'top'
    //       }
    //     ],
    //     layerConfig: {
    //       layerType: 'typeAreaLayer',
    //       scatterType: '第二网格网格',
    //       jsonPath: './data/UEData/第二网格网格.json',
    //       isClick: true,
    //       coordZ: 0,
    //       alpha: 1
    //     }
    //   }
    // ],
    第一网格点: [
      {
        id: "散点-第一网格点",
        name: "散点-第一网格点",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-第一网格",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "第一网格点",
          jsonPath: "./data/UeData/第一网格点.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    第二网格点: [
      {
        id: "散点-第二网格点",
        name: "散点-第二网格点",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-第二网格",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "第二网格点",
          jsonPath: "./data/UeData/第二网格点.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    泉城路网格: [
      {
        id: "泉城路网格",
        name: "泉城路网格",
        coordType: 0,
        coordTypeZ: 0,
        alpha: 1,
        width: 10,
        colorMax: "#00bfff",
        colorMin: "#00bfff",
        valueMax: 1000, // 最大值上限
        valueMin: 0, // 最小值下限
        segments: [],
        data: [],
        layerConfig: {
          layerType: "roadSgHeatLayer",
          jsonPath: "./data/UEData/泉城路路段.json",
          coordZ: 0,
        },
      },
    ],
    芙蓉社区网格: [
      {
        id: "芙蓉社区网格",
        name: "芙蓉社区网格",
        coordType: 0,
        coordTypeZ: 0,
        alpha: 1,
        width: 10,
        colorMax: "#00bfff",
        colorMin: "#00bfff",
        valueMax: 1000, // 最大值上限
        valueMin: 0, // 最小值下限
        segments: [],
        data: [],
        layerConfig: {
          layerType: "roadSgHeatLayer",
          jsonPath: "./data/UEData/芙蓉社区路段.json",
          coordZ: 0,
        },
      },
    ],
    平泉叁号院网格: [
      {
        id: "平泉叁号院网格",
        name: "平泉叁号院网格",
        coordType: 0,
        coordTypeZ: 0,
        alpha: 1,
        width: 10,
        colorMax: "#00bfff",
        colorMin: "#00bfff",
        valueMax: 1000, // 最大值上限
        valueMin: 0, // 最小值下限
        segments: [],
        data: [],
        layerConfig: {
          layerType: "roadSgHeatLayer",
          jsonPath: "./data/UEData/平泉叁号院路段.json",
          coordZ: 0,
        },
      },
    ],
    第二网格网格: [
      {
        id: "第二网格网格",
        name: "第二网格网格",
        coordType: 0,
        coordTypeZ: 0,
        alpha: 1,
        width: 10,
        colorMax: "#00bfff",
        colorMin: "#00bfff",
        valueMax: 1000, // 最大值上限
        valueMin: 0, // 最小值下限
        segments: [],
        data: [],
        layerConfig: {
          layerType: "roadSgHeatLayer",
          jsonPath: "./data/UEData/第二网格路段.json",
          coordZ: 0,
        },
      },
    ],
  },
  // 图层控制逻辑
  ...layerContral,
};
