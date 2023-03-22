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
    联动指挥: {
      exclude: true,
      legends: [
        // '告警点',
        // '社区',
        "重点防汛区域监控",
        "地质灾害点监控",
        "地质灾害",
        "低洼地区",
        "易积水路段",
        "危房",
        "地下商场",
        "地下车库",
        "水库",
        "河道",
        "道路水情",
        "雨情",
        // '雨情姚家街道',
        // '雨情1',
        // '雨情2',
        // '告警点圆形区域',
        "汛情员",
        // '历下街道noPanel'
      ],
      // legends: ['社区'],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      cameraName: "联动指挥",
      sceneWeather: "HeavyRain",
    },
    圆形分析圈: {
      exclude: true,
      legends: [
        "告警点",
        "社区",
        "重点防汛区域监控",
        "地质灾害点监控",
        "地质灾害",
        "低洼地区",
        "易积水路段",
        "危房",
        "地下商场",
        "地下车库",
        "水库",
        "河道",
        "汛情员",
        "告警点圆形区域",
      ],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      cameraName: "联动指挥",
      sceneWeather: "HeavyRain",
    },
    车辆调度: {
      exclude: true,
      legends: [
        "车辆",
        "告警点",
        "社区",
        "重点防汛区域监控",
        "地质灾害点监控",
        "地质灾害",
        "低洼地区",
        "易积水路段",
        "危房",
        "地下商场",
        "地下车库",
        "水库",
        "河道",
        "告警点圆形区域",
      ],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      cameraName: "联动指挥",
      sceneWeather: "HeavyRain",
    },
    toL3: {
      exclude: true,
      legends: [],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      cameraName: "事项辞典",
      sceneWeather: "PartlyCloudy",
    },
    // 成立现场指挥部: {
    //   exclude: true,
    //   legends: [
    //     '告警点',
    //     '告警点圆形区域',
    //     '水位',
    //     '应急抢险队',
    //     '物资仓库',
    //     '应急专家',
    //     '汛情员',
    //     '避灾场所',
    //     '安置场所',
    //     '医疗单位',
    //     '综合抢险队伍',
    //     '防汛突击队员',
    //     '小桔灯'
    //   ],
    //   sceneName: 'LiXia-L1',
    //   sceneTime: '12:00',
    //   cameraName: '联动指挥',
    //   sceneWeather: 'HeavyRain'
    // },
    调派转运车辆: {
      exclude: true,
      legends: ["告警点", "告警点圆形区域", "转运车辆"],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      cameraName: "联动指挥",
      sceneWeather: "HeavyRain",
    },
    转运车辆路线: {
      exclude: true,
      legends: ["车辆路径", "告警点", "告警点圆形区域", "转运车辆"],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      cameraName: "联动指挥",
      sceneWeather: "HeavyRain",
    },
    开启避险安置点: {
      exclude: true,
      legends: ["告警点", "告警点圆形区域", "安置点", "重点防汛区域监控"],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      cameraName: "联动指挥",
      sceneWeather: "HeavyRain",
    },
    调派安置物资: {
      exclude: true,
      legends: ["告警点", "告警点圆形区域", "物资仓库"],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      cameraName: "联动指挥",
      sceneWeather: "HeavyRain",
    },
    联动指挥_应急力量: {
      exclude: true,
      legends: [
        "告警点",
        "社区",
        "重点防汛区域监控",
        "地质灾害点监控",
        "地质灾害",
        "低洼地区",
        "易积水路段",
        "危房",
        "地下商场",
        "地下车库",
        "水库",
        "河道",
        "告警点圆形区域",
        "应急力量",
      ],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      // cameraName: '联动指挥',
      sceneWeather: "HeavyRain",
    },
    联动指挥_应急资源: {
      exclude: true,
      legends: [
        "告警点",
        "社区",
        "重点防汛区域监控",
        "地质灾害点监控",
        "地质灾害",
        "低洼地区",
        "易积水路段",
        "危房",
        "地下商场",
        "地下车库",
        "水库",
        "河道",
        "告警点圆形区域",
        "应急资源",
      ],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      // cameraName: '联动指挥',
      sceneWeather: "HeavyRain",
    },
    联动指挥_物资装备: {
      exclude: true,
      legends: [
        "告警点",
        "社区",
        "重点防汛区域监控",
        "地质灾害点监控",
        "地质灾害",
        "低洼地区",
        "易积水路段",
        "危房",
        "地下商场",
        "地下车库",
        "水库",
        "河道",
        "告警点圆形区域",
        "应急仓库",
      ],
      sceneName: "LiXia-L1",
      sceneTime: "12:00",
      // cameraName: '联动指挥',
      sceneWeather: "HeavyRain",
    },

    地质灾害: {
      exclude: true,
      legends: ["告警点"],
      // cameraName: '联动指挥',
      sceneWeather: "HeavyRain",
    },
    // 社区、汛情员图标；2-点击事件气泡，视角拉近事发位置，弹出社区标牌；3-不显示分析圈；4-默认显示图层：安置场所、转运车辆、物资仓库、视频监控；

    事件联动指挥页面: {
      exclude: true,
      legends: [
        "事件联动指挥页面告警点",
        "社区",
        "汛情员",
        "安置场所",
        // '车辆',
        "物资仓库",
        "视频监控",
        "重点防汛区域监控",
        "地质灾害点监控",
      ],
      // cameraName: '联动指挥',
      sceneWeather: "HeavyRain",
    },
    // 组织转移安置: {
    //   exclude: true,
    //   legends: ['告警点', '告警点圆形区域', '水位', '应急专家', '安置场所'],
    //   sceneName: 'LiXia-L1',
    //   sceneTime: '12:00',
    //   cameraName: '联动指挥',
    //   sceneWeather: 'HeavyRain'
    // },
    // 脆弱群体转移: {
    //   exclude: true,
    //   legends: ['告警点', '告警点圆形区域', '水位', '脆弱群体', '应急专家'],
    //   sceneName: 'LiXia-L1',
    //   sceneTime: '12:00',
    //   cameraName: '联动指挥',
    //   sceneWeather: 'HeavyRain'
    // }
  },
  layerMap: {
    雨情: [
      {
        id: "雨情历下区",
        name: "雨情历下区",
        visible: true,
        lineDataId: "typeAreaDataIdYqLx",
        legends: [
          {
            name: "网格1",
            type: "Segment02",
            color: "#00ffff",
            areaHeight: 80,
            fillArea: "none",
            // fillPosition: 'top'
          },
        ],
        layerConfig: {
          // type: '基础网格',
          layerType: "typeAreaLayer",
          scatterType: "雨情历下区",
          jsonPath: "./data/all/历下区街道.json",
          isClick: true,
          coordZ: 0,
          alpha: 0.1,
        },
      },
    ],
    // 雨情姚家街道: [
    //   {
    //     id: '雨情姚家街道',
    //     name: '雨情姚家街道',
    //     visible: true,
    //     lineDataId: 'typeAreaDataIdYqYjjd',
    //     legends: [
    //       {
    //         name: '网格1',
    //         type: 'Gradient01',
    //         color: '#00ccff',
    //         areaHeight: 0,
    //         fillArea: 'none',
    //         fillPosition: 'bottom'
    //       }
    //     ],
    //     layerConfig: {
    //       // type: '基础网格',
    //       layerType: 'typeAreaLayer',
    //       scatterType: '雨情姚家街道',
    //       jsonPath: './data/mapData/WGGL/社区V2.json',
    //       isClick: true,
    //       coordZ: 80,
    //       alpha: 0.5
    //     }
    //   }
    // ],
    历下街道noPanel: [
      {
        id: "散点-历下街道-noPanel",
        name: "散点-历下街道-noPanel",
        isHover: true,
        // autoScale: true,
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "poi-企业",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "历下街道-noPanel",
          jsonPath: "./data/all/历下街道.json",
          isClick: false,

          coordZ: 400,
        },
      },
    ],
    // 雨情1: [
    //   {
    //     id: '热力图- 雨情1',
    //     name: '热力图- 雨情1',
    //     coordType: 0,
    //     coordTypeZ: 0,
    //     coordZ: 0,
    //     type: 'dot', // 外观类型，default：标准热图；dot：点状热图
    //     alpha: 0.2, //
    //     colorMax: '#0033FF',
    //     colorMin: '#0033FF',
    //     valueMax: 300, //
    //     valueMin: 100, //
    //     radius: 1000,
    //     data: [],
    //     layerConfig: {
    //       scatterType: '雨情1',
    //       layerType: 'heatMapLayer',
    //       jsonPath: './data/mapData/WGGL/户籍人口.json'
    //     }
    //   }
    // ],
    // 雨情2: [
    //   {
    //     id: '热力图- 雨情2',
    //     name: '热力图- 雨情2',
    //     coordType: 0,
    //     coordTypeZ: 0,
    //     coordZ: 0,
    //     type: 'default', // 外观类型，default：标准热图；dot：点状热图
    //     alpha: 0.2, //
    //     colorMax: '#0099FF',
    //     colorMin: '#0099FF',
    //     valueMax: 300, //
    //     valueMin: 100, //
    //     radius: 1000,
    //     data: [],
    //     layerConfig: {
    //       scatterType: '雨情2',
    //       layerType: 'heatMapLayer',
    //       jsonPath: './data/mapData/WGGL/流动人口.json'
    //     }
    //   }
    // ],
    //交互
    周边监控: [
      {
        id: "散点-联动指挥-周边监控",
        name: "散点-联动指挥-周边监控",
        visible: true,
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-重点防汛区域监控",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "周边监控",
          jsonPath: "./data/mapData/YJJC/应急抢险队.json",
          useLdzhApi: true,
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    安置点: [
      {
        id: "散点-联动指挥-安置点",
        name: "散点-联动指挥-安置点",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-透明",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "安置点",
          jsonPath: "./data/mapData/YJJC/安置场所.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-resting_place",
          coordZ: 0,
        },
      },
    ],
    转运车辆: [
      {
        id: "散点-联动指挥-转运车辆1",
        name: "散点-联动指挥-转运车辆1",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-透明",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "转运车辆",
          jsonPath: "./data/mapData/LDZH/转运车辆.json",
          isClick: true,
          isHover: true,
          coordZ: 0,
        },
      },
    ],
    车辆路径: [
      {
        id: "车辆路径1",
        name: "车辆路径1",
        visible: true,
        type: "Arrow05",
        color: "#00FF00",
        colorPass: "#00FF00",
        width: 100,
        isHover: true,
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-透明",
          },
        ],
        layerConfig: {
          layerType: "path",
          scatterType: "车辆路径",
          jsonPath: "./data/mapData/LDZH/转运车辆路径1.json",
          isClick: true,
          coordZ: 500,
        },
      },
      {
        id: "路径1积水点",
        name: "路径1积水点",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-易积水路段",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "路径1积水点",
          jsonPath: "./data/mapData/LDZH/路径1积水.json",
          isClick: true,
          coordZ: 0,
        },
      },
      {
        id: "路径1低洼",
        name: "路径1低洼",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-低洼地区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "路径1低洼",
          jsonPath: "./data/mapData/LDZH/路径1低洼.json",
          isClick: true,
          coordZ: 0,
        },
      },
      {
        id: "车辆路径2",
        name: "车辆路径2",
        visible: true,
        type: "Arrow05",
        color: "#00FF00",
        colorPass: "#00FF00",
        width: 100,
        isHover: true,
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-透明",
          },
        ],
        layerConfig: {
          layerType: "path",
          scatterType: "车辆路径",
          jsonPath: "./data/mapData/LDZH/转运车辆路径2.json",
          isClick: true,
          coordZ: 500,
        },
      },
      {
        id: "路径2积水点",
        name: "路径2积水点",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-易积水路段",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "路径2积水点",
          jsonPath: "./data/mapData/LDZH/路径2积水.json",
          isClick: true,
          coordZ: 0,
        },
      },
      {
        id: "路径2低洼",
        name: "路径2低洼",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-低洼地区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "路径2低洼",
          jsonPath: "./data/mapData/LDZH/路径2低洼.json",
          isClick: true,
          coordZ: 0,
        },
      },
      {
        id: "车辆路径3",
        name: "车辆路径3",
        visible: true,
        type: "Arrow05",
        color: "#00FF00",
        colorPass: "#00FF00",
        width: 100,
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-透明",
          },
        ],
        isHover: true,
        layerConfig: {
          layerType: "path",
          scatterType: "车辆路径",
          jsonPath: "./data/mapData/LDZH/转运车辆路径3.json",
          isClick: true,
          // useLdzhApi: true,
          // boid: 'lixialdzh-tc-resting_place',
          coordZ: 500,
        },
      },
      {
        id: "路径3积水点",
        name: "路径3积水点",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-易积水路段",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "路径3积水点",
          jsonPath: "./data/mapData/LDZH/路径3积水.json",
          isClick: true,
          coordZ: 0,
        },
      },
      {
        id: "路径3低洼",
        name: "路径3低洼",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-低洼地区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "路径3低洼",
          jsonPath: "./data/mapData/LDZH/路径3低洼.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    告警点: [
      // {
      //   id: '散点-联动指挥-告警点',
      //   name: '散点-联动指挥-告警点',
      //   legends: [
      //     {
      //       name: 'default',
      //       color: '#ffff',
      //       iconName: 'event_02'
      //     }
      //   ],
      //   layerConfig: {
      //     layerType: 'landmarkLayer',
      //     scatterType: '联动指挥告警点',
      //     jsonPath: './data/mapData/LDZH/告警点.json',
      //     isClick: true,
      //     useLdzhApi: true,
      //     coordZ: 0
      //   }
      // },
      {
        id: "气泡-联动指挥—告警点",
        name: "气泡-联动指挥—告警点",
        fillArea: "Gradient01",
        speed: 300,
        radiusMax: 1000,
        radiusMin: 200,
        valueMax: 100,
        valueMin: 1,
        visible: true,
        legends: [
          {
            name: "default",
            color: "#ff0000",
          },
        ],
        layerConfig: {
          layerType: "bubbleLayer",
          scatterType: "联动指挥告警点",
          isClick: true,
          jsonPath: "./data/mapData/LDZH/告警点.json",
          coordZ: 400,
        },
      },
    ],
    事件联动指挥页面告警点: [
      // {
      //   id: '散点-联动指挥-事件联动指挥页面告警点',
      //   name: '散点-联动指挥-事件联动指挥页面告警点',
      //   legends: [
      //     {
      //       name: 'default',
      //       color: '#ffff',
      //       iconName: 'event_02'
      //     }
      //   ],
      //   layerConfig: {
      //     layerType: 'landmarkLayer',
      //     scatterType: '联动指挥告警点',
      //     jsonPath: './data/mapData/LDZH/告警点.json',
      //     isClick: true,
      //     useLdzhApi: true,
      //     coordZ: 0
      //   }
      // },
      {
        id: "气泡-联动指挥—事件联动指挥页面告警点",
        name: "气泡-联动指挥—事件联动指挥页面告警点",
        fillArea: "Gradient01",
        speed: 300,
        radiusMax: 1000,
        radiusMin: 200,
        valueMax: 100,
        valueMin: 1,
        visible: true,
        legends: [
          {
            name: "default",
            color: "#ff0000",
          },
        ],
        layerConfig: {
          layerType: "bubbleLayer",
          scatterType: "联动指挥告警点",
          isClick: true,
          jsonPath: "./data/mapData/LDZH/告警点.json",
          coordZ: 100,
        },
      },
    ],
    告警点圆形区域: [
      {
        id: "散点-联动指挥-告警点圆形区域1km",
        name: "散点-联动指挥-告警点圆形区域1km",
        coordType: 0,
        coordTypeZ: 0,
        coordZ: 0,
        type: "Gradient01",
        color: "#26ff93",
        areaHeight: 200,
        fillArea: "none",
        fillPosition: "top",
        tag: "custominfo",
        center: [117.10484363796, 36.69229371473], //以深圳湾经纬度为例
        radius: 1000,
        layerConfig: {
          layerType: "circularArea",
        },
      },
      {
        id: "散点-联动指挥-告警点圆形区域3km",
        name: "散点-联动指挥-告警点圆形区域3km",
        coordType: 0,
        coordTypeZ: 0,
        coordZ: 0,
        type: "Gradient01",
        color: "#26ff93",
        areaHeight: 200,
        fillArea: "none",
        fillPosition: "top",
        tag: "custominfo",
        center: [117.10484363796, 36.69229371473], //以深圳湾经纬度为例
        radius: 3000,
        layerConfig: {
          layerType: "circularArea",
        },
      },
      {
        id: "散点-联动指挥-告警点圆形区域5km",
        name: "散点-联动指挥-告警点圆形区域5km",
        coordType: 0,
        coordTypeZ: 0,
        coordZ: 0,
        type: "Gradient01",
        color: "#26ff93",
        areaHeight: 200,
        fillArea: "none",
        fillPosition: "top",
        tag: "custominfo",
        center: [117.10484363796, 36.69229371473], //以深圳湾经纬度为例
        radius: 5000,
        layerConfig: {
          layerType: "circularArea",
        },
      },
      {
        id: "距离连线",
        name: "距离连线",
        coordType: 0,
        coordTypeZ: 0,
        alpha: 1,
        width: 40,
        colorMax: "#FF0000",
        colorMin: "#ffff00",
        valueMax: 200, // 最大值上限
        valueMin: 100, // 最小值下限
        segments: [],
        data: [],
        layerConfig: {
          layerType: "roadSgHeatLayer",
          scatterType: "距离连线",
          jsonPath: "./data/mapData/LDZH/距离线段.json",
          isClick: true,
          coordZ: 140,
        },
      },
      {
        id: "散点-距离点位",
        name: "散点-距离点位",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-水位1",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "距离点位",
          jsonPath: "./data/mapData/LDZH/距离点位.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    社区: [
      {
        id: "散点-预警监测-社区",
        name: "散点-预警监测-社区",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-小区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "社区",
          jsonPath: "./data/mapData/LDZH/社区.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    车辆: [
      {
        id: "车辆路径段热力",
        name: "车辆路径段热力",
        coordType: 0,
        coordTypeZ: 0,
        alpha: 1,
        width: 50,
        colorMax: "#FF0000",
        colorMin: "#ffff00",
        valueMax: 20, // 最大值上限
        valueMin: 10, // 最小值下限
        segments: [],
        data: [],
        layerConfig: {
          layerType: "roadSgHeatLayer",
          scatterType: "车辆路径",
          jsonPath: "./data/mapData/LDZH/车辆路径.json",
          isClick: true,
          coordZ: 140,
        },
      },
      {
        id: "散点-联动指挥-车辆",
        name: "散点-联动指挥-车辆",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-车辆",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "车辆",
          jsonPath: "./data/mapData/LDZH/车辆.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    脆弱群体: [
      {
        id: "散点-预警监测-脆弱群体",
        name: "散点-预警监测-脆弱群体",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-小区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "脆弱群体",
          jsonPath: "./data/mapData/LDZH/脆弱群体.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    水位: [
      {
        id: "散点-指挥联动-水位",
        name: "散点-指挥联动-水位",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-空白",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "水位",
          jsonPath: "./data/mapData/LDZH/水位.json",
          isClick: true,
          showLabel: true,
          coordZ: 1,
        },
      },
    ],
    应急力量: [
      {
        id: "散点-指挥联动-应急力量",
        name: "散点-指挥联动-应急力量",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-应急专家",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "应急力量",
          jsonPath: "./data/mapData/LDZH/车辆.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    应急资源: [
      {
        id: "散点-指挥联动-应急资源",
        name: "散点-指挥联动-应急资源",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-避灾场所",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "应急资源",
          jsonPath: "./data/mapData/LDZH/车辆.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    应急仓库: [
      {
        id: "散点-指挥联动-应急仓库",
        name: "散点-指挥联动-应急仓库",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-物资仓库",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "应急仓库",
          jsonPath: "./data/mapData/LDZH/车辆.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    //图例
    //已接入接口
    避灾场所: [
      {
        id: "散点-预警监测-避灾场所",
        name: "散点-预警监测-避灾场所",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-避灾场所",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "避灾场所",
          jsonPath: "./data/mapData/YJJC/避灾场所.json",
          useLdzhApi: true,
          boid: "lixialdzh-tc-shelter",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    应急抢险队: [
      {
        id: "散点-预警监测-应急抢险队",
        name: "散点-预警监测-应急抢险队",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-应急抢险队",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "应急抢险队",
          jsonPath: "./data/mapData/YJJC/应急抢险队.json",
          useLdzhApi: true,
          boid: "lixialdzh-tc-rescure_team",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    应急专家: [
      {
        id: "散点-预警监测-应急专家",
        name: "散点-预警监测-应急专家",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-应急专家",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "应急专家",
          jsonPath: "./data/mapData/YJJC/应急专家.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-expert",
          coordZ: 0,
        },
      },
    ],
    医疗单位: [
      {
        id: "散点-预警监测-医疗单位",
        name: "散点-预警监测-医疗单位",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-医疗单位",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "医疗单位",
          jsonPath: "./data/mapData/YJJC/医疗单位.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-yiliao",
          coordZ: 0,
        },
      },
    ],
    安置场所: [
      {
        id: "散点-预警监测-安置场所",
        name: "散点-预警监测-安置场所",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-安置场所",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "安置场所",
          jsonPath: "./data/mapData/YJJC/安置场所.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-resting_place",
          coordZ: 0,
        },
      },
    ],
    汛情员: [
      {
        id: "散点-联动指挥-汛情员",
        name: "散点-联动指挥-汛情员",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-汛情员",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "汛情员",
          jsonPath: "./data/mapData/YJJC/汛情员.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-team_mem",
          coordZ: 0,
        },
      },
    ],
    低洼地区: [
      {
        id: "散点-预警监测-低洼地区",
        name: "散点-预警监测-低洼地区",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-低洼地区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "低洼地区",
          jsonPath: "./data/mapData/YJJC/低洼地区.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-low_zone",
          coordZ: 0,
        },
      },
    ],
    水库: [
      {
        id: "散点-联动指挥-水库",
        name: "散点-联动指挥-水库",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-水库",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "水库",
          jsonPath: "./data/mapData/YJJC/水库.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-shuiku",
          coordZ: 0,
        },
      },
    ],
    危房: [
      {
        id: "散点-预警监测-危房",
        name: "散点-预警监测-危房",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-危房",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "危房",
          jsonPath: "./data/mapData/YJJC/危房.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-weifang",
          coordZ: 0,
        },
      },
    ],
    地下车库: [
      {
        id: "散点-预警监测-地下车库",
        name: "散点-预警监测-地下车库",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-地下车库",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "地下车库",
          jsonPath: "./data/mapData/YJJC/地下车库.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-cheku",
          coordZ: 0,
        },
      },
    ],
    地下商场: [
      {
        id: "散点-预警监测-地下商场",
        name: "散点-预警监测-地下商场",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-地下商场",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "地下商场",
          jsonPath: "./data/mapData/YJJC/地下商场.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-shangchang",
          coordZ: 0,
        },
      },
    ],
    河道: [
      {
        id: "散点-联动指挥-河道",
        name: "散点-联动指挥-河道",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-河道",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "河道",
          jsonPath: "./data/mapData/YJJC/河道.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-river",
          coordZ: 0,
        },
      },
    ],
    路涵工程: [
      {
        id: "散点-预警监测-路涵工程",
        name: "散点-预警监测-路涵工程",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-路涵工程",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "路涵工程",
          jsonPath: "./data/mapData/YJJC/路涵工程.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-luhan_gongcheng",
          coordZ: 0,
        },
      },
    ],
    桥梁工程: [
      {
        id: "散点-预警监测-桥梁工程",
        name: "散点-预警监测-桥梁工程",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-桥梁工程",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "桥梁工程",
          jsonPath: "./data/mapData/YJJC/桥梁工程.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-bridge",
          coordZ: 0,
        },
      },
    ],
    塘坝工程: [
      {
        id: "散点-预警监测-塘坝工程",
        name: "散点-预警监测-塘坝工程",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-塘坝工程",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "塘坝工程",
          jsonPath: "./data/mapData/YJJC/塘坝工程.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-tangba",
          coordZ: 0,
        },
      },
    ],
    易积水路段: [
      {
        id: "散点-预警监测-易积水路段",
        name: "散点-预警监测-易积水路段",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-易积水路段",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "易积水路段",
          jsonPath: "./data/mapData/YJJC/易积水路段.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-daolu_shuiqing",
          coordZ: 0,
        },
      },
    ],
    雨量站: [
      {
        id: "散点-预警监测-雨量站",
        name: "散点-预警监测-雨量站",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-雨量站",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "雨量站",
          jsonPath: "./data/mapData/YJJC/雨量站.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-yuliangzhan",
          coordZ: 0,
        },
      },
    ],
    地质灾害: [
      {
        id: "散点-预警监测-地质灾害",
        name: "散点-预警监测-地质灾害",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-地质灾害",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "地质灾害",
          jsonPath: "./data/mapData/YJJC/地质灾害.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-dzzh",
          coordZ: 0,
        },
      },
    ],
    综合抢险队伍: [
      {
        id: "散点-预警监测-综合抢险队伍",
        name: "散点-预警监测-综合抢险队伍",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-综合抢险队伍",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "综合抢险队伍",
          jsonPath: "./data/mapData/YJJC/综合抢险队伍.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-zhqx-team",
          coordZ: 0,
        },
      },
    ],
    物资仓库: [
      {
        id: "散点-预警监测-物资仓库",
        name: "散点-预警监测-物资仓库",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-物资仓库",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "物资仓库",
          jsonPath: "./data/mapData/YJJC/物资仓库.json",
          isClick: true,
          useLdzhApi: true,
          boid: "lixialdzh-tc-mat_storehouse",
          coordZ: 0,
        },
      },
    ],
    //无接口图层
    水位: [
      {
        id: "散点-指挥联动-水位L0",
        name: "散点-指挥联动-水位L0",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-空白",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "水位",
          jsonPath: "./data/mapData/LDZH/水位.json",
          isClick: true,
          showLabel: true,
          coordZ: 1,
        },
      },
    ],
    重点防汛区域监控: [
      {
        id: "散点-预警监测-重点防汛区域监控",
        name: "散点-预警监测-重点防汛区域监控",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-重点防汛区域监控",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "重点防汛区域监控",
          jsonPath: "./data/mapData/YJJC/重点防汛区域监控.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    地质灾害点监控: [
      {
        id: "散点-预警监测-地质灾害点监控",
        name: "散点-预警监测-地质灾害点监控",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-地质灾害点监控",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "地质灾害点监控",
          jsonPath: "./data/mapData/YJJC/地质灾害点监控.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    防汛突击队员: [
      {
        id: "散点-预警监测-防汛突击队员",
        name: "散点-预警监测-防汛突击队员",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-防汛突击队员",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "防汛突击队员",
          jsonPath: "./data/mapData/YJJC/防汛突击队员.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    小桔灯: [
      {
        id: "散点-预警监测-小桔灯",
        name: "散点-预警监测-小桔灯",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-小桔灯",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "小桔灯",
          jsonPath: "./data/mapData/YJJC/小桔灯.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
  },
  // 图层控制逻辑
  ...layerContral,
};
