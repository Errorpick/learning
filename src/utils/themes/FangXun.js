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
    预警监测: {
      exclude: true,
      legends: [
        // '重点防汛区域监控',
        // '地质灾害点监控',
        // '地质灾害',
        // '低洼地区',
        // '易积水路段',
        // '危房',
        // '地下商场',
        // '地下车库',
        // '水库',
        // '河道',
        // '水位',
        // '告警点',
        "历下街道noPanel",
      ],
      sceneName: "LXQ-L0-new",
      sceneTime: "",
      cameraName: "预警监测",
      sceneWeather: "Sunny",
    },
    toL3: {
      exclude: true,
      legends: [],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      cameraName: "事项辞典",
      sceneWeather: "PartlyCloudy",
    },
    河道图层: {
      exclude: true,
      legends: ["河道"],
      sceneName: "",
    },
    易积水路段图层: {
      exclude: true,
      legends: ["易积水路段"],
      cameraName: "易积水路段视野",
      sceneName: "",
    },
    暴雨预警: {
      exclude: true,
      legends: [],
      sceneName: "LiXia-L1",
      sceneWeather: "ModerateRain",
    },
    物资仓库L1: {
      exclude: true,
      legends: ["物资仓库L1"],
      sceneName: "",
      sceneWeather: "",
    },
  },
  layerMap: {
    //交互
    // 重点防汛区域监控
    周边监控: [
      {
        id: "散点-预警监测-周边监控",
        name: "散点-预警监测-周边监控",
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
    poi点位: [
      {
        id: "散点-poi点位",
        name: "散点-poi点位",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-poi点位",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "poi点位",
          jsonPath: "./data/all/干道/poi点位.json",
          isClick: true,
          coordZ: 140,
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
    主干道: [
      {
        id: "散点-主干道",
        name: "散点-主干道",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-干道",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "主干道",
          jsonPath: "./data/all/干道/主干道.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    次干道: [
      {
        id: "散点-次干道",
        name: "散点-次干道",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-干道",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "次干道",
          jsonPath: "./data/all/干道/次干道.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    汛情员: [
      {
        id: "散点-预警监测-汛情员",
        name: "散点-预警监测-汛情员",
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
        id: "散点-预警监测-水库",
        name: "散点-预警监测-水库",
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
        id: "散点-预警监测-河道",
        name: "散点-预警监测-河道",
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
          isClick: false,
          useLdzhApi: true,
          boid: "lixialdzh-tc-daolu_shuiqing",
          coordZ: 0,
        },
      },
    ],
    告警点: [
      {
        id: "散点-预警监测-告警点",
        name: "散点-预警监测-告警点",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "event_02",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "预警监测告警点",
          jsonPath: "./data/mapData/LDZH/告警点.json",
          isClick: true,
          useLdzhApi: true,
          coordZ: 0,
        },
      },
      {
        id: "气泡-预警监测-告警点",
        name: "气泡-预警监测-告警点",
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
          scatterType: "预警监测告警点",
          useLdzhApi: true,
          jsonPath: "./data/mapData/LDZH/告警点.json",
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
    物资仓库L1: [
      {
        id: "散点-预警监测-物资仓库L1",
        name: "散点-预警监测-物资仓库L1",
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
