import ZhaTuChe from "./ZhaTuChe";
import layerContral from "@/utils/contral/layerContral";
export default {
  // 当前主题所有图例配置
  legends: ["处置中", "已办结"],
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
    事件协同默认: {
      exclude: true,
      legends: ["历下区区划", "事件冒泡"],
      sceneName: "LXQ-L0-new",
      sceneTime: "",
      cameraName: "事件协同",
      sceneWeather: "",
    },
    toL3: {
      exclude: true,
      legends: [],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      cameraName: "事项辞典",
      sceneWeather: "PartlyCloudy",
    },
    AI识别: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    物联感知: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    模型预警: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    网络巡查: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    路长巡查: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    "12345热线": {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    市民移动端: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    自动发现: {
      exclude: true,
      legends: ["自动发现"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    主动发现: {
      exclude: true,
      legends: ["主动发现"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    被动发现: {
      exclude: true,
      legends: ["被动发现"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    联勤联动: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    公安局分局: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    区城管局: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    区政法委: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    区市监局: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    区生态环境分局: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    更新热力: {
      exclude: true,
      legends: ["处置中", "已办结", "案件热力更新"],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      cameraName: "事件协同",
      sceneWeather: "PartlyCloudy",
    },
    占道经营: {
      exclude: true,
      legends: ["占道经营"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    油烟扰民: {
      exclude: true,
      legends: ["油烟扰民"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    群租房: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      cameraName: "群租房",
      sceneWeather: "PartlyCloudy",
    },
    渣土车运输管理: {
      exclude: true,
      legends: ["渣土车运输管理"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    姚家街道济南市公安局历下区分局: {
      exclude: true,
      legends: ["济南市公安局历下区分局"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    姚家街道城市管理局: {
      exclude: true,
      legends: ["城市管理局"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    姚家街道市场监督管理局: {
      exclude: true,
      legends: ["市场监督管理局"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    姚家街道自然资源局: {
      exclude: true,
      legends: ["自然资源局"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    姚家街道住房和城市建设局: {
      exclude: true,
      legends: ["住房和城市建设局"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    违规使用燃气瓶: {
      exclude: true,
      legends: ["处置中", "已办结"],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      cameraName: "违规使用燃气瓶",
      sceneWeather: "PartlyCloudy",
    },
    小区: {
      exclude: true,
      legends: ["小区"],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      cameraName: "小区",
      sceneWeather: "PartlyCloudy",
    },
    历下网格: {
      exclude: true,
      legends: ["历下区区划", "事件冒泡"],
      sceneName: "LXQ-L0-new",
      sceneTime: "",
      cameraName: "态势总览",
    },
    姚家街道网格: {
      exclude: true,
      legends: ["姚家街道区划"],
      sceneTime: "",
      sceneName: "YJJD-L0-new",
      cameraName: "姚家街道",
      sceneWeather: "",
    },
    三箭平安苑社区网格: {
      exclude: true,
      legends: ["三箭平安苑区划"],
      sceneTime: "",
      sceneName: "YJJD-L0-new",
      cameraName: "三箭平安苑L0",
      sceneWeather: "",
    },
    第一网格网格: {
      exclude: true,
      legends: ["第二十七网格"],
      sceneTime: "08:00",
      sceneName: "LiXia-L3",
      cameraName: "万象城",
      sceneWeather: "PartlyCloudy",
    },
    事件协同_事件详情: {
      exclude: true,
      sceneTime: "08:00",
      legends: [],
      sceneName: "LiXia-L3",
      cameraName: "万象城",
      sceneWeather: "PartlyCloudy",
    },
  },
  layerMap: {
    历下区区划: [
      {
        id: "历下区区划",
        name: "历下区区划",
        visible: true,
        lineDataId: "typeAreaDataIdLx",
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
          // type: '基础网格',
          layerType: "typeAreaLayer",
          scatterType: "历下区区划",
          jsonPath: "./data/all/历下区街道.json",
          isClick: true,
          coordZ: 400,
          alpha: 0,
        },
      },
      {
        id: "散点-历下街道-事件协同默认",
        name: "散点-历下街道-事件协同默认",
        isHover: true,
        //autoScale: true,
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "poi-企业",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "历下街道-事件协同默认",
          jsonPath: "./data/all/历下街道.json",
          isClick: true,

          coordZ: 400,
        },
      },
    ],
    事件冒泡: [
      {
        id: "LxL0-事件冒泡",
        name: "LxL0-事件冒泡",
        coordType: 0,
        coordTypeZ: 0,
        visible: true,
        legends: [
          {
            name: "default",
            icon: "custom-处置中",
            type: "wave",
            color: "#ff0000",
            fillArea: "type01",
            speed: 500,
            radius: 1500,
          },
        ],
        data: [],
        layerConfig: {
          layerType: "eventLayer",
          scatterType: "事件轮询冒泡",
          useApi: true,
          jsonPath: "./data/all/告警事件.json",
          isClick: true,
        },
      },
    ],
    姚家街道区划: [
      {
        id: "散点-姚家街道区划",
        name: "散点-姚家街道区划",
        isHover: true,
        //autoScale: true,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-社区名",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "姚家街道区划",
          showLabel: true,
          jsonPath: "./data/all/姚家社区名称.json",
          isClick: true,

          coordZ: 100,
        },
      },
      {
        id: "姚家街道区划",
        name: "姚家街道区划",
        visible: true,
        lineDataId: "typeAreaDataIdYjjd",
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
          // type: '基础网格',
          layerType: "typeAreaLayer",
          scatterType: "typeAreaLayerDataServer",
          jsonPath: "./data/mapData/WGGL/社区V2.json",
          isClick: true,
          coordZ: 80,
          alpha: 0,
        },
      },
    ],
    三箭平安苑区划: [
      {
        id: "散点-三箭平安苑网格",
        name: "散点-三箭平安苑网格",
        isHover: true,
        // autoScale: true,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-网格名称2",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "三箭平安苑网格",
          showLabel: true,
          jsonPath: "./data/all/三箭平安苑社区各网格中心点.json",
          isClick: true,

          coordZ: 120,
        },
      },
      {
        id: "三箭平安苑区划",
        name: "三箭平安苑区划",
        visible: true,
        lineDataId: "typeAreaDataIdSjpay",
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
          // type: '基础网格',
          layerType: "typeAreaLayer",
          scatterType: "typeAreaLayerDataServer2",
          jsonPath: "./data/mapData/WGGL/三箭平安苑社区.json",
          isClick: true,
          coordZ: 80,
          alpha: 0.2,
        },
      },
    ],
    第二十七网格: [
      // {
      //   id: '第二十七网格线条',
      //   name: '第二十七网格线条',
      //   coordType: 0,
      //   coordTypeZ: 0,
      //   alpha: 1,
      //   width: 9,
      //   colorMax: '#1EA5BA',
      //   colorMin: '#1EA5BA',
      //   valueMax: 200, // 最大值上限
      //   valueMin: 100, // 最小值下限
      //   segments: [],
      //   data: [],
      //   layerConfig: {
      //     layerType: 'roadSgHeatLayer',
      //     scatterType: '第二十七网格线条',
      //     jsonPath: './data/all/第二十七网格.json',
      //     isClick: true,
      //     coordZ: 140
      //   }
      // },
      {
        id: "第二十七网格",
        name: "第二十七网格",
        visible: true,
        lineDataId: "typeAreaDataIdSjpay",
        legends: [
          {
            name: "网格1",
            type: "Gradient01",
            color: "#1EA5BA",
            areaHeight: 80,
            fillArea: "none",
            // fillPosition: 'bottom'
          },
        ],
        layerConfig: {
          // type: '基础网格',
          layerType: "typeAreaLayer",
          scatterType: "第二十七网格",
          jsonPath: "./data/all/第二十七网格.json",
          isClick: false,
          coordZ: 140,
          alpha: 0.5,
        },
      },
      {
        id: "散点-第二十七网格",
        name: "散点-第二十七网格",
        //autoScale: true,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-第二十七网格",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "第二十七网格点",
          showLabel: true,
          jsonPath: "./data/all/第二十七网格散点.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    自动发现: [
      {
        id: "散点-自动发现",
        name: "散点-自动发现",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-摄像头",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "自动发现",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "自动发现",
          sourcelist: "hyss,wlgz,mxyj",
          Tail: "largeScreen/caseBoard/list",
          coordZ: 140,
        },
      },
    ],
    主动发现: [
      {
        id: "散点-主动发现",
        name: "散点-主动发现",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "主动发现",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "主动发现",
          sourcelist: "wgxc,lcxc",
          Tail: "largeScreen/caseBoard/list",
          coordZ: 140,
        },
      },
    ],
    被动发现: [
      {
        id: "散点-被动发现",
        name: "散点-被动发现",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "被动发现",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "被动发现",
          sourcelist: "12345,smydd",
          Tail: "largeScreen/caseBoard/list",
          coordZ: 140,
        },
      },
    ],
    占道经营: [
      {
        id: "散点-占道经营",
        name: "散点-占道经营",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "高频事项",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "占道经营",
          sourcelist: "1610118324160548866",
          Tail: "largeScreen/matterDictionaries/streetList",
          coordZ: 140,
        },
      },
    ],
    油烟扰民: [
      {
        id: "散点-油烟扰民",
        name: "散点-油烟扰民",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "高频事项",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "油烟扰民",
          sourcelist: "1608020282800263170",
          Tail: "largeScreen/matterDictionaries/streetList",
          coordZ: 140,
        },
      },
    ],
    渣土车运输管理: [
      {
        id: "散点-渣土车运输管理",
        name: "散点-渣土车运输管理",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "高频事项",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "渣土车运输管理",
          sourcelist: "1608025432721903617",
          Tail: "largeScreen/caseBoard/listTop",
          coordZ: 140,
        },
      },
    ],
    住房和城市建设局: [
      {
        id: "散点-住房和城市建设局",
        name: "散点-住房和城市建设局",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "联动处置",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "住房和城市建设局",
          sourcelist: "1565175528587845634",
          Tail: "largeScreen/caseBoard/listTop",
          coordZ: 140,
        },
      },
    ],
    自然资源局: [
      {
        id: "散点-自然资源局",
        name: "散点-自然资源局",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "联动处置",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "自然资源局",
          sourcelist: "1565177847241039873",
          Tail: "largeScreen/caseBoard/listTop",
          coordZ: 140,
        },
      },
    ],
    市场监督管理局: [
      {
        id: "散点-市场监督管理局",
        name: "散点-市场监督管理局",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "联动处置",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "市场监督管理局",
          sourcelist: "1565177273288286210",
          Tail: "largeScreen/caseBoard/listTop",
          coordZ: 140,
        },
      },
    ],
    城市管理局: [
      {
        id: "散点-城市管理局",
        name: "散点-城市管理局",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "联动处置",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "城市管理局",
          sourcelist: "1565175605876285441",
          Tail: "largeScreen/caseBoard/listTop",
          coordZ: 140,
        },
      },
    ],
    济南市公安局历下区分局: [
      {
        id: "散点-济南市公安局历下区分局",
        name: "散点-济南市公安局历下区分局",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "联动处置",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "济南市公安局历下区分局",
          sourcelist: "1566757260713865218",
          Tail: "largeScreen/caseBoard/listTop",
          coordZ: 140,
        },
      },
    ],
    基础网络: [
      {
        id: "基础网格",
        name: "基础网格",
        visible: true,
        lineDataId: "typeAreaDataIdjc",
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
          type: "基础网格",
          layerType: "typeAreaLayer",
          scatterType: "typeAreaLayerDataServer",
          jsonPath: "./data/mapData/WGGL/类型区域图网格.json",
          isClick: false,
          coordZ: 80,
          alpha: 1,
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
    专属网络: [
      {
        id: "专属网格",
        name: "专属网格",
        visible: true,
        lineDataId: "typeAreaDataIdzs",
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
          type: "专属网格",
          layerType: "typeAreaLayer",
          scatterType: "typeAreaLayerDataServer",
          jsonPath: "./data/mapData/WGGL/类型区域图网格.json",
          isClick: false,
          coordZ: 80,
          alpha: 1,
        },
      },
    ],
    常住人口: [
      {
        id: "热力图- 常住人口",
        name: "热力图- 常住人口",
        coordType: 0,
        coordTypeZ: 0,
        coordZ: 0,
        type: "default", // 外观类型，default：标准热图；dot：点状热图
        alpha: 0.2, //
        colorMax: "#ff0000",
        colorMin: "#fbff00",
        valueMax: 300, //
        valueMin: 100, //
        radius: 700,
        data: [],
        layerConfig: {
          layerType: "heatMapLayer",
          jsonPath: "./data/mapData/WGGL/常住人口.json",
        },
      },
    ],
    户籍人口: [
      {
        id: "热力图- 户籍人口",
        name: "热力图- 户籍人口",
        coordType: 0,
        coordTypeZ: 0,
        coordZ: 0,
        type: "default", // 外观类型，default：标准热图；dot：点状热图
        alpha: 0.2, //
        colorMax: "#ff0000",
        colorMin: "#fbff00",
        valueMax: 300, //
        valueMin: 100, //
        radius: 700,
        data: [],
        layerConfig: {
          layerType: "heatMapLayer",
          jsonPath: "./data/mapData/WGGL/户籍人口.json",
        },
      },
    ],
    非户籍人口: [
      {
        id: "热力图- 流动人口",
        name: "热力图- 流动人口",
        coordType: 0,
        coordTypeZ: 0,
        coordZ: 0,
        type: "default", // 外观类型，default：标准热图；dot：点状热图
        alpha: 0.2, //
        colorMax: "#ff0000",
        colorMin: "#fbff00",
        valueMax: 300, //
        valueMin: 100, //
        radius: 700,
        data: [],
        layerConfig: {
          layerType: "heatMapLayer",
          jsonPath: "./data/mapData/WGGL/流动人口.json",
        },
      },
    ],
    流动人口: [
      {
        id: "热力图- 流动人口",
        name: "热力图- 流动人口",
        coordType: 0,
        coordTypeZ: 0,
        coordZ: 0,
        type: "default", // 外观类型，default：标准热图；dot：点状热图
        alpha: 0.2, //
        colorMax: "#ff0000",
        colorMin: "#fbff00",
        valueMax: 300, //
        valueMin: 100, //
        radius: 700,
        data: [],
        layerConfig: {
          layerType: "heatMapLayer",
          jsonPath: "./data/mapData/WGGL/流动人口.json",
        },
      },
    ],
    境外人员: [
      {
        id: "热力图- 境外人员",
        name: "热力图- 境外人员",
        coordType: 0,
        coordTypeZ: 0,
        coordZ: 0,
        type: "default", // 外观类型，default：标准热图；dot：点状热图
        alpha: 0.2, //
        colorMax: "#ff0000",
        colorMin: "#fbff00",
        valueMax: 300, //
        valueMin: 100, //
        radius: 700,
        data: [],
        layerConfig: {
          layerType: "heatMapLayer",
          jsonPath: "./data/mapData/WGGL/境外人员.json",
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
          jsonPath: "./data/mapData/WGGL/小区.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    "楼宇/园区": [
      {
        id: "散点-网络-楼宇",
        name: "散点-网络-楼宇",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-楼宇园区",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "楼宇",
          jsonPath: "./data/mapData/WGGL/路长.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    刑满释放: [
      {
        id: "散点-网络-刑满释放",
        name: "散点-网络-刑满释放",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-刑满释放",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "重点人员",
          jsonPath: "./data/mapData/WGGL/刑满释放.json",
          isClick: true,
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
    社区矫正: [
      {
        id: "散点-网络-社区矫正",
        name: "散点-网络-社区矫正",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-社区矫正",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "重点人员",
          jsonPath: "./data/mapData/WGGL/社区矫正.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    精神障碍: [
      {
        id: "散点-网络-精神障碍",
        name: "散点-网络-精神障碍",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-精神障碍",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "重点人员",
          jsonPath: "./data/mapData/WGGL/精神障碍.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    吸毒人员: [
      {
        id: "散点-网络-吸毒人员",
        name: "散点-网络-吸毒人员",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-吸毒人员",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "重点人员",
          jsonPath: "./data/mapData/WGGL/吸毒人员.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    艾滋病: [
      {
        id: "散点-网络-艾滋病",
        name: "散点-网络-艾滋病",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-艾滋病",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "重点人员",
          jsonPath: "./data/mapData/WGGL/艾滋病.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    部件设施: [
      {
        id: "散点-部件设施",
        name: "散点-部件设施",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-部件设施",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "部件设施",
          jsonPath: "./data/mapData/WGGL/部件设施.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    感知设备: [
      {
        id: "散点-感知设备",
        name: "散点-感知设备",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-感知设备",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "部件设施",
          jsonPath: "./data/mapData/WGGL/感知设备.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    摄像头: [
      {
        id: "散点-摄像头",
        name: "散点-摄像头",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-摄像头",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "摄像头",
          jsonPath: "./data/mapData/WGGL/摄像头.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    无人机: [
      {
        id: "散点-无人机",
        name: "散点-无人机",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-无人机",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "部件设施",
          jsonPath: "./data/mapData/WGGL/无人机.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    公有制: [
      {
        id: "散点-公有制",
        name: "散点-公有制",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-公有制",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "组织信息",
          jsonPath: "./data/mapData/WGGL/公有制经济组织.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    非公有制: [
      {
        id: "散点-非公有制",
        name: "散点-非公有制",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-非公有制",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "组织信息",
          jsonPath: "./data/mapData/WGGL/非公有制经济组织.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    社会组织: [
      {
        id: "散点-社会组织",
        name: "散点-社会组织",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-社会组织",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "组织信息",
          jsonPath: "./data/mapData/WGGL/社会组织.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    火灾隐患: [
      {
        id: "散点-火灾隐患",
        name: "散点-火灾隐患",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-火灾隐患",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "风险隐患总数",
          jsonPath: "./data/mapData/WGGL/火灾模块.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    危房: [
      {
        id: "散点-危房",
        name: "散点-危房",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-危房",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "风险隐患区域",
          jsonPath: "./data/mapData/WGGL/危房.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    违法建筑: [
      {
        id: "散点-违法建筑",
        name: "散点-违法建筑",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-违法建筑",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "风险隐患区域",
          jsonPath: "./data/mapData/WGGL/违法建筑.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    积水点: [
      {
        id: "散点-积水点",
        name: "散点-积水点",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-积水点",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "风险隐患区域",
          jsonPath: "./data/mapData/WGGL/积水点.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    风险隐患总数: [
      {
        id: "散点-风险隐患总数",
        name: "散点-风险隐患总数",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-风险隐患区域",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "风险隐患区域",
          jsonPath: "./data/mapData/WGGL/风险隐患总数.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    基础网格员: [
      {
        id: "散点-基础网格员",
        name: "散点-基础网格员",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-基础网格员",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专属网格员",
          jsonPath: "./data/mapData/WGGL/基础网格员.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    专属网格员: [
      {
        id: "散点-专属网格员",
        name: "散点-专属网格员",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-专属网格员",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专属网格员",
          jsonPath: "./data/mapData/WGGL/专属网格员.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    路长: [
      {
        id: "散点-路长",
        name: "散点-路长",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-路长",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "路长",
          jsonPath: "./data/mapData/WGGL/路长.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    河长: [
      {
        id: "散点-河长",
        name: "散点-河长",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-河长",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "河长",
          jsonPath: "./data/mapData/WGGL/河长.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    其他: [
      {
        id: "散点-其他",
        name: "散点-其他",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-其他",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "其他",
          jsonPath: "./data/mapData/WGGL/其他.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    综合执法: [
      {
        id: "散点-综合执法",
        name: "散点-综合执法",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-综合执法",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专业力量",
          jsonPath: "./data/mapData/WGGL/综合执法.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    城市管理: [
      {
        id: "散点-城市管理",
        name: "散点-城市管理",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-城市管理",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专业力量",
          jsonPath: "./data/mapData/WGGL/城市管理.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    市场监管: [
      {
        id: "散点-市场监管",
        name: "散点-市场管理",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-市场管理",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专业力量",
          jsonPath: "./data/mapData/WGGL/市场监管.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    社区民警: [
      {
        id: "散点-社区民警",
        name: "散点-社区管理",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-社区管理",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专业力量",
          jsonPath: "./data/mapData/WGGL/社区民警.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    法律服务: [
      {
        id: "散点-法律服务",
        name: "散点-法律服务",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-法律服务",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专业力量",
          jsonPath: "./data/mapData/WGGL/法律服务.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    医疗服务: [
      {
        id: "散点-医疗服务",
        name: "散点-医疗服务",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-医疗服务",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "专业力量",
          jsonPath: "./data/mapData/WGGL/医疗服务.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
    处置中: [
      {
        id: "散点-已办结",
        name: "散点-已办结",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "已办结",
          jsonPath: "./data/UeData/处置中事件.json",
          isClick: true,
          tszlApi: true,
          tagId: 3,
          params: "largeScreen/todayEventList",
          coordZ: 140,
        },
      },
    ],
    已办结: [
      {
        id: "散点-已办结",
        name: "散点-已办结",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "已办结",
          jsonPath: "./data/UeData/处置中事件.json",
          isClick: true,
          tszlApi: true,
          tagId: 2,
          params: "largeScreen/todayEventList",
          coordZ: 140,
        },
      },
    ],
  },
  // 图层控制逻辑
  ...layerContral,
};
