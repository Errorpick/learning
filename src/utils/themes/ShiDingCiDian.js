import layerContral from "@/utils/contral/layerContral";
export default {
  // 当前主题所有图例配置
  legends: [
    "网格",
    "联动处置力量",
    "今日事件",
    "视频监控",
    "物联网感知监控设备",
    "重点区域",
  ],
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
    事项辞典: {
      exclude: true,
      legends: ["历下区区划", "历下街道noPanel", "事件冒泡"],
      sceneName: "LXQ-L0-new",
      sceneTime: "",
      cameraName: "事项辞典",
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
    事项词典_事项详情: {
      exclude: true,
      legends: ["处置中L2", "已办结L2"],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      // LiXia-L3  LXQ-L0-new
      cameraName: "疑难事件",
      sceneWeather: "PartlyCloudy",
    },
    历下网格: {
      exclude: true,
      legends: ["历下区区划", "历下街道noPanel", "事件冒泡"],
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

    交通设施: {
      exclude: true,
      legends: ["交通设施"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    "河堤、河道保护": {
      exclude: true,
      legends: ["河堤、河道保护"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    治理工程堵塞: {
      exclude: true,
      legends: ["治理工程堵塞"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    招生违法行为: {
      exclude: true,
      legends: ["招生违法行为"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    历下区城市管理: {
      exclude: true,
      legends: ["城市管理"],
      sceneName: "",
      cameraName: "",
      sceneTime: "",
      sceneWeather: "PartlyCloudy",
    },
    招商引资工作: {
      exclude: true,
      legends: ["招商引资工作"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    企业扶持补助: {
      exclude: true,
      legends: ["企业扶持补助"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    违法停车: {
      exclude: true,
      legends: ["违法停车"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
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
    消费者维权: {
      exclude: true,
      legends: ["消费者维权"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    物业管理: {
      exclude: true,
      legends: ["物业管理"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    施工扰民: {
      exclude: true,
      legends: ["施工扰民"],
      sceneName: "",
      sceneTime: "08:00",
      cameraName: "",
      sceneWeather: "PartlyCloudy",
    },
    创业补贴: {
      exclude: true,
      legends: ["创业补贴"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    绿地设施维护: {
      exclude: true,
      legends: ["绿地设施维护"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    违规采伐林木: {
      exclude: true,
      legends: ["违规采伐林木"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    建筑物外立面不洁: {
      exclude: true,
      legends: ["建筑物外立面不洁"],
      sceneName: "LiXia-L3",
      cameraName: "交通设施",
      sceneTime: "8:00",
      sceneWeather: "PartlyCloudy",
    },
    //
  },
  layerMap: {
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
          isHover: true,
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
        autoScale: true,
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
          scatterType: "退单疑难",
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
    城市管理: [
      {
        id: "散点-城市管理",
        name: "散点-城市管理",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "城市管理",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          sxcdApi: true,
          TypeName: "城市管理",
          sourcelist: "csgl",
          coordZ: 140,
        },
      },
    ],
    违法停车: [
      {
        id: "散点-违法停车",
        name: "散点-违法停车",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "退单疑难",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "违法停车",
          sourcelist: "1608020282800263170",
          Tail: "largeScreen/matterDictionaries/streetList",
          coordZ: 140,
        },
      },
    ],
    施工扰民: [
      {
        id: "散点-施工扰民",
        name: "散点-施工扰民",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "退单疑难",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "施工扰民",
          sourcelist: "1610155955288264705",
          Tail: "largeScreen/matterDictionaries/streetList",
          coordZ: 140,
        },
      },
    ],
    物业管理: [
      {
        id: "散点-物业管理",
        name: "散点-物业管理",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "退单疑难",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "物业管理",
          sourcelist: "1610156231160221697",
          Tail: "largeScreen/matterDictionaries/streetList",
          coordZ: 140,
        },
      },
    ],
    消费者维权: [
      {
        id: "散点-消费者维权",
        name: "散点-消费者维权",
        legends: [
          {
            name: "default",
            color: "#fff",
            iconName: "custom-处置中",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "退单疑难",
          jsonPath: "./data/mapData/WGGL/处置中.json",
          isClick: true,
          SJXTApi: true,
          apiType: "消费者维权",
          sourcelist: "1610156707729625089",
          Tail: "largeScreen/matterDictionaries/streetList",
          coordZ: 140,
        },
      },
    ],
    交通设施: [
      {
        id: "热力图- 交通设施 ",
        name: "热力图- 交通设施 ",
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
          jsonPath: "./data/mapData/SXCD/交通设施.json",
        },
      },
    ],
    "河堤、河道保护": [
      {
        id: "热力图- 河堤、河道保护 ",
        name: "热力图- 河堤、河道保护 ",
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
          jsonPath: "./data/mapData/SXCD/河堤河道保护.json",
        },
      },
    ],
    治理工程堵塞: [
      {
        id: "热力图- 治理工程堵塞 ",
        name: "热力图- 治理工程堵塞 ",
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
          jsonPath: "./data/mapData/SXCD/治理工程堵塞.json",
        },
      },
    ],
    招生违法行为: [
      {
        id: "热力图- 招生违法行为 ",
        name: "热力图- 招生违法行为 ",
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
          jsonPath: "./data/mapData/SXCD/招生违法行为.json",
        },
      },
    ],
    招商引资工作: [
      {
        id: "热力图- 招商引资工作 ",
        name: "热力图- 招商引资工作 ",
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
          jsonPath: "./data/mapData/SXCD/招商引资工作.json",
        },
      },
    ],
    企业扶持补助: [
      {
        id: "热力图- 招商引资企业扶持补助工作 ",
        name: "热力图- 企业扶持补助 ",
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
          jsonPath: "./data/mapData/SXCD/企业扶持补助.json",
        },
      },
    ],
    创业补贴: [
      {
        id: "热力图- 创业补贴 ",
        name: "热力图- 创业补贴 ",
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
          jsonPath: "./data/mapData/SXCD/创业补贴.json",
        },
      },
    ],
    绿地设施维护: [
      {
        id: "热力图- 绿地设施维护 ",
        name: "热力图- 绿地设施维护 ",
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
          jsonPath: "./data/mapData/SXCD/绿地设施维护.json",
        },
      },
    ],
    违规采伐林木: [
      {
        id: "热力图- 违规采伐林木 ",
        name: "热力图- 违规采伐林木 ",
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
          jsonPath: "./data/mapData/SXCD/违规采伐林木.json",
        },
      },
    ],
    建筑物外立面不洁: [
      {
        id: "热力图- 建筑物外立面不洁 ",
        name: "热力图- 建筑物外立面不洁 ",
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
          jsonPath: "./data/mapData/SXCD/建筑物外立面不洁.json",
        },
      },
    ],
  },
  // 图层控制逻辑
  ...layerContral,
};
