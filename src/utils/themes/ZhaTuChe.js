// import ZtcXl from "../ZTC/ZtcXl";
// import ZtcSj from "../ZTC/ZtcSj";
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
    渣土车: {
      exclude: true,
      legends: [
        "路线热力图",
        "在线车辆",
        "出土工地",
        "施工工地",
        "拆迁工地",
        "其他工地",
        "临时消纳场",
        "回填消纳场",
        "其他消纳场",
        "离线车辆",
        "预警告警",
        "渣土事件",
      ],
      sceneName: "LXQ-L0-new",
      sceneTime: "",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    运输公司统计: {
      exclude: true,
      legends: ["运输公司统计"],
      sceneName: "LXQ-L0-new",
      sceneTime: "",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    // ...ZtcXl["cardName"],
    // ...ZtcSj["cardName"],
    在建工地: {
      exclude: true,
      sceneTime: "",
      legends: ["在建工地"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
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
    本月新增: {
      exclude: true,
      sceneTime: "",
      legends: ["本月新增"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    本月竣工: {
      exclude: true,
      sceneTime: "",
      legends: ["本月竣工"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_工地出土工地: {
      exclude: true,
      sceneTime: "",
      legends: ["出土工地"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_工地施工工地: {
      exclude: true,
      sceneTime: "",
      legends: ["施工工地"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_工地拆迁工地: {
      exclude: true,
      sceneTime: "",
      legends: ["拆迁工地"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_工地其他: {
      exclude: true,
      sceneTime: "",
      legends: ["其他工地"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_在线车辆: {
      exclude: true,
      sceneTime: "",
      legends: ["在线车辆"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    渣土车_离线车辆: {
      exclude: true,
      sceneTime: "",
      legends: ["离场车辆"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    路线热力图: {
      exclude: true,
      sceneTime: "",
      legends: ["路线热力图"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    渣土车_卡口: {
      exclude: true,
      sceneTime: "",
      legends: ["卡口"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    渣土车_工地查询: {
      exclude: true,
      sceneTime: "",
      legends: ["出土工地", "施工工地", "拆迁工地", "其他工地"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    渣土车_车辆查询: {
      exclude: true,
      sceneTime: "",
      legends: ["在线车辆", "离场车辆"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    渣土车_消纳场查询: {
      exclude: true,
      sceneTime: "",
      legends: ["临时消纳场", "回填消纳场", "其他消纳场"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    渣土车_预警告警: {
      exclude: true,
      sceneTime: "",
      legends: ["预警告警"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    渣土车_渣土事件: {
      exclude: true,
      sceneTime: "",
      legends: ["渣土事件"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    "渣土车_0-10": {
      exclude: true,
      sceneTime: "",
      legends: ["0-10"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    "渣土车_10-20": {
      exclude: true,
      sceneTime: "",
      legends: ["10-20"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    "渣土车_20-30": {
      exclude: true,
      sceneTime: "",
      legends: ["20-30"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    "渣土车_30-40": {
      exclude: true,
      sceneTime: "",
      legends: ["30-40"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_40以上: {
      exclude: true,
      sceneTime: "",
      legends: ["40以上"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    区内在用: {
      exclude: true,
      sceneTime: "",
      legends: ["区内在用"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_临时消纳场: {
      exclude: true,
      sceneTime: "",
      legends: ["临时消纳场"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_回填消纳场: {
      exclude: true,
      sceneTime: "",
      legends: ["回填消纳场"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_其他: {
      exclude: true,
      sceneTime: "",
      legends: ["其他消纳场"],
      sceneName: "LXQ-L0-new",
      cameraName: "",
      sceneWeather: "",
    },
    渣土车_小桔灯: {
      exclude: true,
      sceneTime: "",
      legends: ["小桔灯"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
    绘制: {
      exclude: true,
      sceneTime: "",
      legends: ["在线车辆", "离线车辆"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
    },
  },
  layerMap: {
    // ...ZtcXl["layerMap"],
    // ...ZtcSj["layerMap"],
    在建工地: [
      {
        id: "散点-在建工地",
        name: "散点-在建工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-工地",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "在建工地",
          jsonPath: "./data/mapData/ZTC/出土工地.json",
          isClick: true,
          ZTCApi: true,
          Type: 1,
          apiType: "在建工地",
          statistics: "statisticsType",
          Tail: "muckSoil/site/list",
          coordZ: 140,
        },
      },
    ],
    本月新增: [
      {
        id: "散点-本月新增",
        name: "散点-本月新增",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-工地",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "本月新增",
          jsonPath: "./data/mapData/ZTC/出土工地.json",
          isClick: true,
          ZTCApi: true,
          Type: 2,
          apiType: "本月新增",
          statistics: "statisticsType",
          Tail: "muckSoil/site/list",
          coordZ: 140,
        },
      },
    ],
    本月竣工: [
      {
        id: "散点-本月竣工",
        name: "散点-本月竣工",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-工地",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "本月竣工",
          jsonPath: "./data/mapData/ZTC/出土工地.json",
          isClick: true,
          ZTCApi: true,
          Type: 3,
          apiType: "本月竣工",
          statistics: "statisticsType",
          Tail: "muckSoil/site/list",
          coordZ: 140,
        },
      },
    ],
    出土工地: [
      {
        id: "散点-出土工地",
        name: "散点-出土工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-出土工地",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地",
          jsonPath: "./data/mapData/ZTC/出土工地.json",
          isClick: true,
          ZTCApi: true,
          Type: 2,
          apiType: "出土工地",
          statistics: "siteType",
          Tail: "muckSoil/site/list",
          coordZ: 140,
        },
      },
    ],
    施工工地: [
      {
        id: "散点-施工工地",
        name: "散点-施工工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-施工工地",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地",
          jsonPath: "./data/mapData/ZTC/施工工地.json",
          isClick: true,
          ZTCApi: true,
          Type: 1,
          apiType: "施工工地",
          statistics: "siteType",
          Tail: "muckSoil/site/list",
          coordZ: 140,
        },
      },
    ],
    拆迁工地: [
      {
        id: "散点-拆迁工地",
        name: "散点-拆迁工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-拆迁工地",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地",
          jsonPath: "./data/mapData/ZTC/拆迁工地.json",
          isClick: true,
          ZTCApi: true,
          Type: 3,
          apiType: "拆迁工地",
          statistics: "siteType",
          Tail: "muckSoil/site/list",
          coordZ: 140,
        },
      },
    ],
    其他工地: [
      {
        id: "散点-其他工地",
        name: "散点-其他工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-其他工地",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地",
          jsonPath: "./data/mapData/ZTC/其他工地.json",
          isClick: true,
          ZTCApi: true,
          Type: 4,
          apiType: "其他工地",
          statistics: "siteType",
          Tail: "muckSoil/site/list",
          coordZ: 140,
        },
      },
    ],
    本地出土工地: [
      {
        id: "散点-出土工地",
        name: "散点-出土工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-出土工地",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "出土工地",
          jsonPath: "./data/mapData/ZTC/出土工地.json",
          isClick: true,
          coordZ: 100,
        },
      },
    ],
    本地施工工地: [
      {
        id: "散点-施工工地",
        name: "散点-施工工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-施工工地",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "施工工地",
          jsonPath: "./data/mapData/ZTC/施工工地.json",
          isClick: true,
          coordZ: 600,
        },
      },
    ],
    本地拆迁工地: [
      {
        id: "散点-拆迁工地",
        name: "散点-拆迁工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-拆迁工地",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "拆迁工地",
          jsonPath: "./data/mapData/ZTC/拆迁工地.json",
          isClick: true,
          coordZ: 600,
        },
      },
    ],
    本地其他工地: [
      {
        id: "散点-其他工地",
        name: "散点-其他工地",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-渣土车其他",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "其他工地",
          jsonPath: "./data/mapData/ZTC/工地其他.json",
          isClick: true,
          coordZ: 600,
        },
      },
    ],
    临时消纳场: [
      {
        id: "散点-临时消纳场",
        name: "散点-临时消纳场",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-临时消纳场",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "消纳场",
          jsonPath: "./data/mapData/ZTC/临时消纳场.json",
          isClick: true,
          ZTCApi: true,
          Type: 1,
          apiType: "临时消纳场",
          statistics: "absorptiveFieldType",
          Tail: "muckSoil/absorptiveField/list",
          coordZ: 140,
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
    回填消纳场: [
      {
        id: "散点-回填消纳场",
        name: "散点-回填消纳场",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-回填消纳场",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "消纳场",
          jsonPath: "./data/mapData/ZTC/回填消纳场.json",
          isClick: true,
          ZTCApi: true,
          Type: 2,
          apiType: "回填消纳场",
          statistics: "absorptiveFieldType",
          Tail: "muckSoil/absorptiveField/list",
          coordZ: 140,
        },
      },
    ],
    其他消纳场: [
      {
        id: "散点-其他消纳场",
        name: "散点-其他消纳场",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-回填消纳场",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "消纳场",
          jsonPath: "./data/mapData/ZTC/其他消纳场.json",
          isClick: true,
          ZTCApi: true,
          Type: 3,
          apiType: "其他消纳场",
          statistics: "absorptiveFieldType",
          Tail: "muckSoil/absorptiveField/list",
          coordZ: 140,
        },
      },
    ],
    区内在用: [
      {
        id: "散点-区内在用",
        name: "散点-区内在用",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-回填消纳场",
          },
        ],
        addDefaultpanel: true,
        isHover: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "区内在用",
          jsonPath: "./data/mapData/ZTC/其他消纳场.json",
          isClick: true,
          ZTCApi: true,
          Type: 1,
          apiType: "区内在用",
          statistics: "areaIsUse",
          Tail: "muckSoil/absorptiveField/list",
          coordZ: 140,
        },
      },
    ],
    本地临时消纳场: [
      {
        id: "散点-临时消纳场",
        name: "散点-临时消纳场",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-临时消纳场",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "临时消纳场",
          jsonPath: "./data/mapData/ZTC/临时消纳场.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    本地回填消纳场: [
      {
        id: "散点-回填消纳场",
        name: "散点-回填消纳场",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-回填消纳场",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "回填消纳场",
          jsonPath: "./data/mapData/ZTC/回填消纳场.json",
          isClick: true,
          coordZ: 600,
        },
      },
    ],
    本地其他消纳场: [
      {
        id: "散点-其他消纳场",
        name: "散点-其他消纳场",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-渣土车其他",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "其他消纳场",
          jsonPath: "./data/mapData/ZTC/消纳场其他.json",
          isClick: true,
          coordZ: 600,
        },
      },
    ],
    在线车辆: [
      {
        id: "轨迹图-在线车辆",
        name: "轨迹图-在线车辆",
        coordType: 0,
        coordTypeZ: 0,
        trackStyle: "style001",
        trackDuration: 100,
        trackWidth: 100,
        objLife: 10,
        visible: true,
        duraiotn: 2000,
        isAppend: true,
        legends: [
          {
            name: "default",
            trackColor: "#FF0000",
            iconName: "custom-在线车辆",
          },
        ],
        layerConfig: {
          layerType: "trailLayer",
          scatterType: "在线车辆",
          jsonPath: "./data/all/历下轨迹.json",
          useJson: true,
          isClick: true,
          coordZ: 300,
        },
      },
    ],
    运输公司统计: [
      {
        id: "轨迹图-运输公司统计",
        name: "轨迹图-运输公司统计",
        coordType: 0,
        coordTypeZ: 0,
        trackStyle: "style001",
        trackDuration: 100,
        trackWidth: 100,
        objLife: 10,
        visible: true,
        duraiotn: 2000,
        isAppend: true,
        legends: [
          {
            name: "default",
            trackColor: "#FF0000",
            iconName: "custom-在线车辆",
          },
        ],
        layerConfig: {
          layerType: "trailLayer",
          scatterType: "在线车辆",
          jsonPath: "./data/all/运输公司统计.json",
          useJson: true,
          isClick: true,
          coordZ: 300,
        },
      },
    ],
    离场车辆: [
      {
        id: "散点-离场车辆",
        name: "散点-离场车辆",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-离场车辆",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "离场车辆",
          jsonPath: "./data/mapData/ZTC/离线车辆.json",
          isClick: true,
          coordZ: 600,
        },
      },
    ],
    施工工地摄像头: [
      {
        id: "散点-施工工地摄像头",
        name: "散点-施工工地摄像头",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-施工工地摄像头",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "施工工地摄像头",
          jsonPath: "./data/mapData/ZTC/施工工地摄像头.json",
          isClick: true,
          coordZ: 600,
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
    消纳场摄像头: [
      {
        id: "散点-消纳场摄像头",
        name: "散点-消纳场摄像头",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-消纳场摄像头",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "消纳场摄像头",
          jsonPath: "./data/mapData/ZTC/消纳场摄像头.json",
          isClick: true,
          coordZ: 600,
        },
      },
    ],
    卡口: [
      {
        id: "散点-卡口",
        name: "散点-卡口",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-卡口",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "卡口",
          jsonPath: "./data/mapData/ZTC/卡口.json",
          isClick: true,
          coordZ: 600,
        },
      },
    ],
    "0-10": [
      {
        id: "散点-0-10",
        name: "散点-0-10",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-0-10",
          },
        ],
        // addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地出土车次",
          jsonPath: "./data/mapData/ZTC/车次0.json",
          isClick: true,
          ZTCApi: true,
          Type: 1,
          apiType: "0-10",
          Tail: "muckSoil/site/unearthed/list",
          coordZ: 140,
        },
      },
    ],
    "10-20": [
      {
        id: "散点-10-20",
        name: "散点-10-20",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-10-20",
          },
        ],
        // addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地出土车次",
          jsonPath: "./data/mapData/ZTC/车次10.json",
          isClick: true,
          ZTCApi: true,
          Type: 2,
          apiType: "10-20",
          Tail: "muckSoil/site/unearthed/list",
          coordZ: 140,
        },
      },
    ],
    "20-30": [
      {
        id: "散点-20-30",
        name: "散点-20-30",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-20-30",
          },
        ],
        // addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地出土车次",
          jsonPath: "./data/mapData/ZTC/车次20.json",
          isClick: true,
          ZTCApi: true,
          Type: 3,
          apiType: "20-30",
          Tail: "muckSoil/site/unearthed/list",
          coordZ: 140,
        },
      },
    ],
    "30-40": [
      {
        id: "散点-30-40",
        name: "散点-30-40",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-30-40",
          },
        ],
        // addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地出土车次",
          jsonPath: "./data/mapData/ZTC/车次30.json",
          isClick: true,
          ZTCApi: true,
          Type: 4,
          apiType: "30-40",
          Tail: "muckSoil/site/unearthed/list",
          coordZ: 140,
        },
      },
    ],
    "40以上": [
      {
        id: "散点-40以上",
        name: "散点-40以上",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-40以上",
          },
        ],
        // addDefaultpanel: true,
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "工地出土车次",
          jsonPath: "./data/mapData/ZTC/车次40.json",
          isClick: true,
          ZTCApi: true,
          Type: 5,
          apiType: "40以上",
          Tail: "muckSoil/site/unearthed/list",
          coordZ: 140,
        },
      },
    ],
    "本地0-10": [
      {
        id: "散点-0-10",
        name: "散点-0-10",
        legends: [
          {
            name: "default",
            color: "#ffffff",
            iconName: "custom-0-10",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "0-10",
          jsonPath: "./data/mapData/ZTC/车次0.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    "本地10-20": [
      {
        id: "散点-10-20",
        name: "散点-10-20",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-10-20",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "10-20",
          jsonPath: "./data/mapData/ZTC/车次10.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    "本地20-30": [
      {
        id: "散点-20-30",
        name: "散点-20-30",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-20-30",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "20-30",
          jsonPath: "./data/mapData/ZTC/车次20.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    "本地30-40": [
      {
        id: "散点-30-40",
        name: "散点-30-40",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-30-40",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "30-40",
          jsonPath: "./data/mapData/ZTC/车次30.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    本地40以上: [
      {
        id: "散点-40以上",
        name: "散点-40以上",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-40以上",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "40以上",
          jsonPath: "./data/mapData/ZTC/车次40.json",
          isClick: true,
          coordZ: 140,
        },
      },
    ],
    预警告警: [
      {
        id: "散点-预警告警",
        name: "散点-预警告警",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-预警告警",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "预警告警",
          jsonPath: "./data/all/ZTC事件/预警告警.json",
          isClick: true,
          coordZ: 250,
        },
      },
      {
        id: "气泡-预警告警",
        name: "气泡-预警告警",
        fillArea: "Gradient01",
        speed: 200,
        radiusMax: 4000,
        radiusMin: 500,
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
          scatterType: "预警告警",
          jsonPath: "./data/all/ZTC事件/预警告警.json",
          coordZ: 250,
        },
      },
    ],
    渣土事件: [
      {
        id: "散点-渣土事件",
        name: "散点-渣土事件",
        legends: [
          {
            name: "default",
            color: "#fffffff",
            iconName: "custom-渣土事件",
          },
        ],
        layerConfig: {
          layerType: "landmarkLayer",
          scatterType: "渣土事件",
          jsonPath: "./data/all/ZTC事件/渣土事件.json",
          isClick: true,
          coordZ: 250,
        },
      },
      {
        id: "气泡-渣土事件",
        name: "气泡-渣土事件",
        fillArea: "Gradient01",
        speed: 200,
        radiusMax: 4000,
        radiusMin: 500,
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
          scatterType: "渣土事件",
          jsonPath: "./data/all/ZTC事件/渣土事件.json",
          coordZ: 250,
        },
      },
    ],
    路线热力图: [
      {
        id: "LxRoadSgHeat",
        dataid: "路段LxRoadSgHeat",
        layerConfig: {
          layerType: "roadSgHeatLayer",
          scatterType: "历下路网",
          useDataServer: true,
          jsonPath: "./data/all/历下路网.json",
          coordZ: 250,
        },
        visible: true,
      },
    ],
    车辆轨迹: [
      {
        id: "轨迹图-车辆轨迹",
        name: "轨迹图-车辆轨迹",
        coordType: 0,
        coordTypeZ: 0,
        trackStyle: "style001",
        trackDuration: 600,
        trackWidth: 150,
        objLife: 10,
        visible: true,
        duraiotn: 2000,
        isAppend: true,
        legends: [
          {
            name: "default",
            trackColor: "#FF0000",
            iconName: "custom-车辆轨迹",
          },
        ],
        layerConfig: {
          layerType: "trailLayer",
          scatterType: "车辆轨迹",
          jsonPath: "./data/mapData/ZTC/车辆轨迹.json",
          useJson: true,
          isClick: false,
          coordZ: 300,
        },
      },
    ],
    小桔灯: [
      {
        id: "轨迹图-小桔灯",
        name: "轨迹图-小桔灯",
        coordType: 0,
        coordTypeZ: 0,
        trackStyle: "style001",
        trackDuration: 600,
        trackWidth: 150,
        objLife: 10,
        visible: true,
        duraiotn: 2000,
        isAppend: true,
        legends: [
          {
            name: "default",
            trackColor: "#FF0000",
            iconName: "custom-小桔灯",
          },
        ],
        layerConfig: {
          layerType: "trailLayer",
          scatterType: "小桔灯",
          jsonPath: "./data/mapData/ZTC/小桔灯.json",
          useJson: true,
          isClick: false,
          coordZ: 300,
        },
      },
    ],
  },
  // 图层控制逻辑
  ...layerContral,
};
