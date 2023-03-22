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
    华润模型: {
      exclude: true,
      legends: [],
      sceneName: "LiXia-L3",
      sceneTime: "8:00",
      cameraName: "BIM大楼",
      sceneWeather: "PartlyCloudy",
    },
  },
  layerMap: {
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
          scatterType: "室内部件设施",
          jsonPath: "./data/mapData/Bim室内/部件设施.json",
          isClick: true,
          coordZ: 264,
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
          scatterType: "室内感知设备",
          jsonPath: "./data/mapData/Bim室内/感知设备.json",
          isClick: true,
          coordZ: 264,
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
          scatterType: "室内摄像头",
          jsonPath: "./data/mapData/Bim室内/摄像头.json",
          isClick: true,
          coordZ: 264,
        },
      },
    ],
    通行闸机: [
      {
        id: "散点-通行闸机",
        name: "散点-通行闸机",
        legends: [
          {
            name: "default",
            color: "#ffff",
            iconName: "custom-通行闸机",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "室内通行闸机",
          jsonPath: "./data/mapData/Bim室内/通行闸机.json",
          isClick: true,
          coordZ: 264,
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
          scatterType: "室内公有制",
          jsonPath: "./data/mapData/Bim室内/公有制.json",
          isClick: true,
          coordZ: 264,
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
          scatterType: "室内非公有制",
          jsonPath: "./data/mapData/Bim室内/非公有制.json",
          isClick: true,
          coordZ: 264,
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
          scatterType: "室内社会组织",
          jsonPath: "./data/mapData/Bim室内/社会组织.json",
          isClick: true,
          coordZ: 264,
        },
      },
    ],
  },
  // 图层控制逻辑
  ...layerContral,
};
