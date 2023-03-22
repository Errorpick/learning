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
    民意洞察: {
      exclude: true,
      legends: ["历下街道noPanel"],
      sceneName: "LXQ-L0-new",
      sceneTime: "",
      sceneWeather: "",
      cameraName: "民意洞察",
    },
    toL3: {
      exclude: true,
      legends: [],
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      cameraName: "事项辞典",
      sceneWeather: "PartlyCloudy",
    },
    历下网格: {
      exclude: true,
      legends: ["处置中", "已办结", "历下区区划"],
      sceneTime: "",
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
    },
    姚家街道网格: {
      exclude: true,
      legends: [],
      sceneTime: "08:00",
      sceneName: "LiXia-L3",
      cameraName: "姚家街道",
      sceneWeather: "Sunny",
    },
    三箭平安苑网格: {
      exclude: true,
      legends: [],

      sceneTime: "08:00",
      sceneName: "LiXia-L3",
      cameraName: "三箭平安苑",
      sceneWeather: "Sunny",
    },
    第一网格网格: {
      exclude: true,
      legends: [],

      sceneTime: "08:00",
      sceneName: "LiXia-L3",
      cameraName: "万象城",
      sceneWeather: "Sunny",
    },
    诉求总数: {
      exclude: true,
      legends: ["诉求总数"],
      sceneName: "",
      sceneTime: "08:00",
      sceneWeather: "",
      cameraName: "",
    },
    诉求人数: {
      exclude: true,
      legends: ["诉求人数"],
      sceneName: "",
      sceneTime: "08:00",
      sceneWeather: "",
      cameraName: "",
    },
    先行联系率: {
      exclude: true,
      legends: ["先行联系率"],
      sceneName: "",
      sceneTime: "08:00",
      sceneWeather: "",
      cameraName: "",
    },
    实际解决率: {
      exclude: true,
      legends: ["实际解决率"],
      sceneName: "",
      sceneTime: "08:00",
      sceneWeather: "",
      cameraName: "",
    },
    市民满意率: {
      exclude: true,
      legends: ["市民满意率"],
      sceneName: "",
      sceneTime: "08:00",
      sceneWeather: "",
      cameraName: "",
    },
    重办率: {
      exclude: true,
      legends: ["重办率"],
      sceneName: "",
      sceneTime: "08:00",
      sceneWeather: "",
      cameraName: "",
    },
    未先行联系: {
      exclude: true,
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      legends: ["处置中", "已办结"],
      cameraName: "疑难事件",
    },
    热点责任主体: {
      exclude: true,
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      legends: ["处置中", "已办结"],
      cameraName: "疑难事件",
    },
    诉求数: {
      exclude: true,
      sceneName: "",
      sceneTime: "08:00",
      legends: ["处置中", "已办结"],
      cameraName: "",
    },
    预警监测0: {
      exclude: true,
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      legends: ["处置中", "已办结"],
      cameraName: "疑难事件",
    },
    预警监测1: {
      exclude: true,
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      legends: ["处置中", "已办结"],
      cameraName: "疑难事件",
    },
    预警监测2: {
      exclude: true,
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      legends: ["处置中", "已办结"],
      cameraName: "疑难事件",
    },
    预警监测3: {
      exclude: true,
      sceneName: "LiXia-L3",
      sceneTime: "08:00",
      legends: ["处置中", "已办结"],
      cameraName: "疑难事件",
    },
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
    诉求总数: [
      {
        id: "散点-诉求总数",
        name: "散点-诉求总数",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-处置中",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "民情汇聚",
          jsonPath: "./data/UeData/处置中事件.json",
          isClick: true,
          mydcApi: true,
          TypeName: "诉求总数",
          Type: "sqzs",
          coordZ: 140,
        },
      },
    ],
    诉求人数: [
      {
        id: "散点-诉求人数",
        name: "散点-诉求人数",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-处置中",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "民情汇聚",
          jsonPath: "./data/UeData/处置中事件.json",
          isClick: true,
          mydcApi: true,
          TypeName: "诉求人数",
          Type: "sqrs",
          coordZ: 140,
        },
      },
    ],
    先行联系率: [
      {
        id: "散点-先行联系率",
        name: "散点-先行联系率",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-处置中",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "民情汇聚",
          jsonPath: "./data/UeData/处置中事件.json",
          isClick: true,
          mydcApi: true,
          TypeName: "先行联系率",
          Type: "xxlxl",
          coordZ: 140,
        },
      },
    ],
    实际解决率: [
      {
        id: "散点-实际解决率",
        name: "散点-实际解决率",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-处置中",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "民情汇聚",
          jsonPath: "./data/UeData/处置中事件.json",
          isClick: true,
          mydcApi: true,
          TypeName: "实际解决率",
          Type: "sjjjl",
          coordZ: 140,
        },
      },
    ],
    市民满意率: [
      {
        id: "散点-市民满意率",
        name: "散点-市民满意率",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-处置中",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "民情汇聚",
          jsonPath: "./data/UeData/处置中事件.json",
          isClick: true,
          mydcApi: true,
          TypeName: "市民满意率",
          Type: "smmyl",
          coordZ: 140,
        },
      },
    ],
    重办率: [
      {
        id: "散点-重办率",
        name: "散点-重办率",
        autoScale: false,
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-处置中",
          },
        ],
        addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "民情汇聚",
          jsonPath: "./data/UeData/处置中事件.json",
          isClick: true,
          mydcApi: true,
          TypeName: "重办率",
          Type: "cbl",
          coordZ: 140,
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
          jsonPath: "./data/UeData/处置中事件.json",
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
          jsonPath: "./data/UeData/办结事件.json",
          isClick: true,
          coordZ: 0,
        },
      },
    ],
  },
  // 图层控制逻辑
  ...layerContral,
};
