export default {
  // 地图关卡名称名称
  "LXQ-L0-new": {
    "LXQ-L0-new-区划类型区域图": {
      id: "LXQ-L0-new-区划类型区域图",
      name: "LXQ-L0-new-区划类型区域图",
      // lineDataId: "typeAreaDataIdLx",
      alpha: 0,
      legends: [
        {
          name: "legendName1",
          type: "Segment02",
          color: "#ffe426",
          areaHeight: 80,
          fillArea: "none",
          fillPosition: "none",
        },
      ],
      layerConfig: {
        layerType: "typeAreaLayer",
        scatterType: "历下区区划",
        apiURL: "",
        jsonPath: "./data/all/历下区街道.json",
        isClick: false,
        status: "none", // 显示状态 none show hide
        rawData: [], // 原始数据
        jsonData: {}, // 添加时候的数据
      },
    },
    "LXQ-L0-new-区划散点": {
      id: "LXQ-L0-new-区划散点",
      name: "LXQ-L0-new-区划散点",
      // isHover: true,
      // addDefaultpanel: true,
      legends: [
        {
          name: "default",
          color: "#ffff",
          iconName: "custom-",
        },
      ],
      layerConfig: {
        layerType: "landmarkLayer",
        scatterType: "历下街道-态势总览",
        apiURL: "",
        jsonPath: "./data/all/历下街道点位.json",
        isClick: true,
        status: "none", // 显示状态 none show hide
        rawData: [], // 原始数据
        jsonData: {}, // 添加时候的数据
      },
    },
  },
  "YJJD-L0-new": {},
  "LiXia-L1": {},
  "LiXia-L3": {},
  "LX-HRDS": {},
  "LX-HRDS-ShiNei": {},
  defaultLayers: {
    "LXQ-L0-new": {
      // 城运资源: [
      //   {
      //     id: "散点-城运资源",
      //     name: "散点-城运资源",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-城运资源",
      //       },
      //     ],
      //     isHover: true,
      //     addDefaultpanel: true,
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "城运资源",
      //       jsonPath: "./data/all/城运资源.json",
      //       isClick: true,
      //       CYZYApi: true,
      //       apiType: "城运资源",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 主干道: [
      //   {
      //     id: "散点-主干道",
      //     name: "散点-主干道",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-干道",
      //       },
      //     ],
      //     addDefaultpanel: true,
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "主干道",
      //       jsonPath: "./data/all/干道/主干道.json",
      //       isClick: true,
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 次干道: [
      //   {
      //     id: "散点-次干道",
      //     name: "散点-次干道",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-干道",
      //       },
      //     ],
      //     addDefaultpanel: true,
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "次干道",
      //       jsonPath: "./data/all/干道/次干道.json",
      //       isClick: true,
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // poi点位: [
      //   {
      //     id: "散点-poi点位",
      //     name: "散点-poi点位",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-poi点位",
      //       },
      //     ],
      //     addDefaultpanel: true,
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "poi点位",
      //       jsonPath: "./data/all/干道/poi点位.json",
      //       isClick: true,
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 运行指挥中心: [
      //   {
      //     id: "散点-运行指挥中心",
      //     name: "散点-运行指挥中心",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-黄钻",
      //       },
      //     ],
      //     isHover: true,
      //     addDefaultpanel: true,
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "城运资源",
      //       jsonPath: "./data/all/运行指挥中心.json",
      //       isClick: true,
      //       CYZYApi: true,
      //       apiType: "运行指挥中心",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 疑难事件: [
      //   {
      //     id: "散点-疑难事件",
      //     name: "散点-疑难事件",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-处置中",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "疑难事件",
      //       jsonPath: "./data/UeData/处置中事件.json",
      //       isClick: true,
      //       tszlApi: true,
      //       tagId: "1578994015456268290",
      //       params: "largeScreen/concernedEventsList",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 街区呼应: [
      //   {
      //     id: "散点-街区呼应",
      //     name: "散点-街区呼应",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-处置中",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "街区呼应",
      //       jsonPath: "./data/UeData/处置中事件.json",
      //       isClick: true,
      //       tszlApi: true,
      //       tagId: "1578994015456268291",
      //       params: "largeScreen/concernedEventsList",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 临期超期: [
      //   {
      //     id: "散点-临期超期",
      //     name: "散点-临期超期",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-处置中",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "临期超期",
      //       jsonPath: "./data/UeData/处置中事件.json",
      //       isClick: true,
      //       tszlApi: true,
      //       params: "largeScreen/caseInfoAndTask",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 受理: [
      //   {
      //     id: "散点-受理",
      //     name: "散点-受理",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-处置中",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "受理",
      //       jsonPath: "./data/UeData/处置中事件.json",
      //       isClick: true,
      //       tszlApi: true,
      //       tagId: 1,
      //       params: "largeScreen/todayEventList",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 已办结: [
      //   {
      //     id: "散点-已办结",
      //     name: "散点-已办结",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-处置中",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "已办结",
      //       jsonPath: "./data/UeData/处置中事件.json",
      //       isClick: true,
      //       tszlApi: true,
      //       tagId: 2,
      //       params: "largeScreen/todayEventList",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 处置中: [
      //   {
      //     id: "散点-处置中",
      //     name: "散点-处置中",
      //     autoScale: false,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-处置中",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "处置中",
      //       jsonPath: "./data/UeData/处置中事件.json",
      //       isClick: true,
      //       tszlApi: true,
      //       tagId: 3,
      //       params: "largeScreen/todayEventList",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 事件冒泡: [
      //   {
      //     id: "LxL0-事件冒泡",
      //     name: "LxL0-事件冒泡",
      //     coordType: 0,
      //     coordTypeZ: 0,
      //     visible: true,
      //     legends: [
      //       {
      //         name: "default",
      //         icon: "custom-处置中",
      //         type: "wave",
      //         color: "#ff0000",
      //         fillArea: "type01",
      //         speed: 500,
      //         radius: 1500,
      //       },
      //     ],
      //     data: [],
      //     layerConfig: {
      //       layerType: "eventLayer",
      //       scatterType: "事件轮询冒泡",
      //       useApi: true,
      //       jsonPath: "./data/all/告警事件.json",
      //       isClick: true,
      //     },
      //   },
      // ],
      // 姚家街道区划: [
      //   {
      //     id: "散点-姚家街道区划",
      //     name: "散点-姚家街道区划",
      //     isHover: true,
      //     //autoScale: true,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-社区名",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "姚家街道区划",
      //       showLabel: true,
      //       jsonPath: "./data/all/姚家社区名称.json",
      //       isClick: true,
      //       coordZ: 100,
      //     },
      //   },
      //   {
      //     id: "姚家街道区划",
      //     name: "姚家街道区划",
      //     visible: true,
      //     lineDataId: "typeAreaDataIdYjjd",
      //     legends: [
      //       {
      //         name: "网格1",
      //         type: "Segment02",
      //         color: "#ffe426",
      //         areaHeight: 80,
      //         fillArea: "none",
      //         // fillPosition: 'top'
      //       },
      //     ],
      //     layerConfig: {
      //       // type: '基础网格',
      //       layerType: "typeAreaLayer",
      //       scatterType: "typeAreaLayerDataServer",
      //       jsonPath: "./data/mapData/WGGL/社区V2.json",
      //       isClick: true,
      //       coordZ: 80,
      //       alpha: 0,
      //     },
      //   },
      // ],
      // 三箭平安苑区划: [
      //   {
      //     id: "散点-三箭平安苑网格",
      //     name: "散点-三箭平安苑网格",
      //     isHover: true,
      //     // autoScale: true,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-网格名称2",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "三箭平安苑网格",
      //       showLabel: true,
      //       jsonPath: "./data/all/三箭平安苑社区各网格中心点.json",
      //       isClick: true,
      //       coordZ: 120,
      //     },
      //   },
      //   {
      //     id: "三箭平安苑区划",
      //     name: "三箭平安苑区划",
      //     visible: true,
      //     lineDataId: "typeAreaDataIdSjpay",
      //     legends: [
      //       {
      //         name: "网格1",
      //         type: "Segment02",
      //         color: "#ffe426",
      //         areaHeight: 80,
      //         fillArea: "none",
      //         // fillPosition: 'top'
      //       },
      //     ],
      //     layerConfig: {
      //       // type: '基础网格',
      //       layerType: "typeAreaLayer",
      //       scatterType: "typeAreaLayerDataServer2",
      //       jsonPath: "./data/mapData/WGGL/三箭平安苑社区.json",
      //       isClick: true,
      //       coordZ: 80,
      //       alpha: 0.2,
      //     },
      //   },
      // ],
      // 第二十七网格: [
      //   {
      //     id: "第二十七网格",
      //     name: "第二十七网格",
      //     visible: true,
      //     lineDataId: "typeAreaDataIdSjpay",
      //     legends: [
      //       {
      //         name: "网格1",
      //         type: "Gradient01",
      //         color: "#1EA5BA",
      //         areaHeight: 80,
      //         fillArea: "none",
      //         // fillPosition: 'bottom'
      //       },
      //     ],
      //     layerConfig: {
      //       // type: '基础网格',
      //       layerType: "typeAreaLayer",
      //       scatterType: "第二十七网格",
      //       jsonPath: "./data/all/第二十七网格.json",
      //       isClick: false,
      //       coordZ: 140,
      //       alpha: 0.5,
      //     },
      //   },
      //   {
      //     id: "散点-第二十七网格",
      //     name: "散点-第二十七网格",
      //     //autoScale: true,
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-第二十七网格",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "第二十七网格点",
      //       showLabel: true,
      //       jsonPath: "./data/all/第二十七网格散点.json",
      //       isClick: true,
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 基础网络: [
      //   {
      //     id: "基础网格",
      //     name: "基础网格",
      //     visible: true,
      //     lineDataId: "typeAreaDataIdjc",
      //     legends: [
      //       {
      //         name: "网格1",
      //         type: "Segment02",
      //         color: "#ffe426",
      //         areaHeight: 80,
      //         fillArea: "none",
      //         // fillPosition: 'top'
      //       },
      //     ],
      //     layerConfig: {
      //       type: "基础网格",
      //       layerType: "typeAreaLayer",
      //       scatterType: "typeAreaLayerDataServer",
      //       jsonPath: "./data/mapData/WGGL/类型区域图网格.json",
      //       isClick: false,
      //       coordZ: 80,
      //       alpha: 1,
      //     },
      //   },
      // ],
      // 专属网络: [
      //   {
      //     id: "专属网格",
      //     name: "专属网格",
      //     visible: true,
      //     lineDataId: "typeAreaDataIdzs",
      //     legends: [
      //       {
      //         name: "网格1",
      //         type: "Segment02",
      //         color: "#ffe426",
      //         areaHeight: 80,
      //         fillArea: "none",
      //         // fillPosition: 'top'
      //       },
      //     ],
      //     layerConfig: {
      //       type: "专属网格",
      //       layerType: "typeAreaLayer",
      //       scatterType: "typeAreaLayerDataServer",
      //       jsonPath: "./data/mapData/WGGL/类型区域图网格.json",
      //       isClick: false,
      //       coordZ: 80,
      //       alpha: 1,
      //     },
      //   },
      // ],
      // 常住人口: [
      //   {
      //     id: "热力图- 常住人口",
      //     name: "热力图- 常住人口",
      //     coordType: 0,
      //     coordTypeZ: 0,
      //     coordZ: 0,
      //     type: "default", // 外观类型，default：标准热图；dot：点状热图
      //     alpha: 0.2, //
      //     colorMax: "#ff0000",
      //     colorMin: "#fbff00",
      //     valueMax: 300, //
      //     valueMin: 100, //
      //     radius: 700,
      //     data: [],
      //     layerConfig: {
      //       layerType: "heatMapLayer",
      //       jsonPath: "./data/mapData/WGGL/常住人口.json",
      //     },
      //   },
      // ],
      // 户籍人口: [
      //   {
      //     id: "热力图- 户籍人口",
      //     name: "热力图- 户籍人口",
      //     coordType: 0,
      //     coordTypeZ: 0,
      //     coordZ: 0,
      //     type: "default", // 外观类型，default：标准热图；dot：点状热图
      //     alpha: 0.2, //
      //     colorMax: "#ff0000",
      //     colorMin: "#fbff00",
      //     valueMax: 300, //
      //     valueMin: 100, //
      //     radius: 700,
      //     data: [],
      //     layerConfig: {
      //       layerType: "heatMapLayer",
      //       jsonPath: "./data/mapData/WGGL/户籍人口.json",
      //     },
      //   },
      // ],
      // 非户籍人口: [
      //   {
      //     id: "热力图- 流动人口",
      //     name: "热力图- 流动人口",
      //     coordType: 0,
      //     coordTypeZ: 0,
      //     coordZ: 0,
      //     type: "default", // 外观类型，default：标准热图；dot：点状热图
      //     alpha: 0.2, //
      //     colorMax: "#ff0000",
      //     colorMin: "#fbff00",
      //     valueMax: 300, //
      //     valueMin: 100, //
      //     radius: 700,
      //     data: [],
      //     layerConfig: {
      //       layerType: "heatMapLayer",
      //       jsonPath: "./data/mapData/WGGL/流动人口.json",
      //     },
      //   },
      // ],
      // 流动人口: [
      //   {
      //     id: "热力图- 流动人口",
      //     name: "热力图- 流动人口",
      //     coordType: 0,
      //     coordTypeZ: 0,
      //     coordZ: 0,
      //     type: "default", // 外观类型，default：标准热图；dot：点状热图
      //     alpha: 0.2, //
      //     colorMax: "#ff0000",
      //     colorMin: "#fbff00",
      //     valueMax: 300, //
      //     valueMin: 100, //
      //     radius: 700,
      //     data: [],
      //     layerConfig: {
      //       layerType: "heatMapLayer",
      //       jsonPath: "./data/mapData/WGGL/流动人口.json",
      //     },
      //   },
      // ],
      // 境外人员: [
      //   {
      //     id: "热力图- 境外人员",
      //     name: "热力图- 境外人员",
      //     coordType: 0,
      //     coordTypeZ: 0,
      //     coordZ: 0,
      //     type: "default", // 外观类型，default：标准热图；dot：点状热图
      //     alpha: 0.2, //
      //     colorMax: "#ff0000",
      //     colorMin: "#fbff00",
      //     valueMax: 300, //
      //     valueMin: 100, //
      //     radius: 700,
      //     data: [],
      //     layerConfig: {
      //       layerType: "heatMapLayer",
      //       jsonPath: "./data/mapData/WGGL/境外人员.json",
      //     },
      //   },
      // ],
      // 小区: [
      //   {
      //     id: "散点-小区",
      //     name: "散点-小区",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-小区",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "小区",
      //       jsonPath: "./data/mapData/WGGL/小区.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "小区",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // "楼宇/园区": [
      //   {
      //     id: "散点-楼宇",
      //     name: "散点-楼宇",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-楼宇园区",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "楼宇",
      //       jsonPath: "./data/mapData/WGGL/路长.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "楼宇/园区",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 刑满释放: [
      //   {
      //     id: "散点-刑满释放",
      //     name: "散点-刑满释放",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-刑满释放",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "重点人员",
      //       jsonPath: "./data/mapData/WGGL/刑满释放.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "刑满释放",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 社区矫正: [
      //   {
      //     id: "散点-社区矫正",
      //     name: "散点-社区矫正",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-社区矫正",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "重点人员",
      //       jsonPath: "./data/mapData/WGGL/社区矫正.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "社区矫正",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 精神障碍: [
      //   {
      //     id: "散点-精神障碍",
      //     name: "散点-精神障碍",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-精神障碍",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "重点人员",
      //       jsonPath: "./data/mapData/WGGL/精神障碍.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "精神障碍",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 吸毒人员: [
      //   {
      //     id: "散点-吸毒人员",
      //     name: "散点-吸毒人员",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-吸毒人员",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "重点人员",
      //       jsonPath: "./data/mapData/WGGL/吸毒人员.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "吸毒人员",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 艾滋病: [
      //   {
      //     id: "散点-艾滋病",
      //     name: "散点-艾滋病",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-艾滋病",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "重点人员",
      //       jsonPath: "./data/mapData/WGGL/艾滋病.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "艾滋病",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 部件设施: [
      //   {
      //     id: "散点-部件设施",
      //     name: "散点-部件设施",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-部件设施",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "部件设施",
      //       jsonPath: "./data/mapData/WGGL/部件设施.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "部件设施",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 感知设备: [
      //   {
      //     id: "散点-感知设备",
      //     name: "散点-感知设备",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-感知设备",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "感知设备",
      //       jsonPath: "./data/mapData/WGGL/感知设备.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "感知设备",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 摄像头: [
      //   {
      //     id: "散点-摄像头",
      //     name: "散点-摄像头",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-摄像头",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "摄像头",
      //       jsonPath: "./data/mapData/WGGL/摄像头.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "摄像头",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 无人机: [
      //   {
      //     id: "散点-无人机",
      //     name: "散点-无人机",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-无人机",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "无人机",
      //       jsonPath: "./data/mapData/WGGL/无人机.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "无人机",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 公有制: [
      //   {
      //     id: "散点-公有制",
      //     name: "散点-公有制",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-公有制",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "公有制",
      //       jsonPath: "./data/mapData/WGGL/公有制经济组织.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "公有制",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 非公有制: [
      //   {
      //     id: "散点-非公有制",
      //     name: "散点-非公有制",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-非公有制",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "非公有制",
      //       jsonPath: "./data/mapData/WGGL/非公有制经济组织.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "非公有制",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 社会组织: [
      //   {
      //     id: "散点-社会组织",
      //     name: "散点-社会组织",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-社会组织",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "社会组织",
      //       jsonPath: "./data/mapData/WGGL/社会组织.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "社会组织",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 火灾隐患: [
      //   {
      //     id: "散点-火灾隐患",
      //     name: "散点-火灾隐患",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-火灾隐患",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "火灾隐患",
      //       jsonPath: "./data/mapData/WGGL/火灾模块.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "火灾隐患",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 危房: [
      //   {
      //     id: "散点-危房",
      //     name: "散点-危房",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-危房",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "风险隐患-危房",
      //       jsonPath: "./data/mapData/WGGL/危房.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "危房",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 违法建筑: [
      //   {
      //     id: "散点-违法建筑",
      //     name: "散点-违法建筑",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-违法建筑",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "违法建筑",
      //       jsonPath: "./data/mapData/WGGL/违法建筑.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "违法建筑",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 积水点: [
      //   {
      //     id: "散点-积水点",
      //     name: "散点-积水点",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-积水点",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "积水点",
      //       jsonPath: "./data/mapData/WGGL/积水点.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "积水点",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 风险隐患总数: [
      //   {
      //     id: "散点-风险隐患总数",
      //     name: "散点-风险隐患总数",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-风险隐患区域",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "风险隐患区域",
      //       jsonPath: "./data/mapData/WGGL/风险隐患总数.json",
      //       isClick: true,
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 基础网格员: [
      //   {
      //     id: "散点-基础网格员",
      //     name: "散点-基础网格员",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-基础网格员",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "基础网格员",
      //       jsonPath: "./data/mapData/WGGL/基础网格员.json",
      //       bmApi: true,
      //       apiType: "",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "基础网格员",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 专属网格员: [
      //   {
      //     id: "散点-专属网格员",
      //     name: "散点-专属网格员",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffffff",
      //         iconName: "custom-专属网格员",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "专属网格员",
      //       jsonPath: "./data/mapData/WGGL/专属网格员.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "专属网格员",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 路长: [
      //   {
      //     id: "散点-路长",
      //     name: "散点-路长",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-路长",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "路长",
      //       jsonPath: "./data/mapData/WGGL/路长.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "路长",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 河长: [
      //   {
      //     id: "散点-河长",
      //     name: "散点-河长",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-河长",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "河长",
      //       jsonPath: "./data/mapData/WGGL/河长.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "河长",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 其他: [
      //   {
      //     id: "散点-其他",
      //     name: "散点-其他",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-其他",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "其他",
      //       jsonPath: "./data/mapData/WGGL/其他.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "其他",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 综合执法: [
      //   {
      //     id: "散点-综合执法",
      //     name: "散点-综合执法",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-综合执法",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "专业力量",
      //       jsonPath: "./data/mapData/WGGL/综合执法.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "综合执法",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 城市管理: [
      //   {
      //     id: "散点-城市管理",
      //     name: "散点-城市管理",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-城市管理",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "专业力量",
      //       jsonPath: "./data/mapData/WGGL/城市管理.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "城市管理",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 市场管理: [
      //   {
      //     id: "散点-市场监管",
      //     name: "散点-市场监管",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-市场管理",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "专业力量",
      //       jsonPath: "./data/mapData/WGGL/市场监管.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "市场监管",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 社区管理: [
      //   {
      //     id: "散点-社区民警",
      //     name: "散点-社区管理",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-社区管理",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "专业力量",
      //       jsonPath: "./data/mapData/WGGL/社区民警.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "社区民警",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 法律服务: [
      //   {
      //     id: "散点-法律服务",
      //     name: "散点-法律服务",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-法律服务",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "专业力量",
      //       jsonPath: "./data/mapData/WGGL/法律服务.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "法律服务",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 医疗服务: [
      //   {
      //     id: "散点-医疗服务",
      //     name: "散点-医疗服务",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-医疗服务",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "专业力量",
      //       jsonPath: "./data/mapData/WGGL/医疗服务.json",
      //       isClick: true,
      //       bmApi: true,
      //       apiType: "医疗服务",
      //       coordZ: 140,
      //     },
      //   },
      // ],
      // 处置中L2: [
      //   {
      //     id: "散点-今日事件-处置中L2",
      //     name: "散点-今日事件-处置中L2",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-处置中",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "处置中",
      //       jsonPath: "./data/UeData/处置中事件.json",
      //       isClick: true,
      //       coordZ: 0,
      //     },
      //   },
      //   {
      //     id: "热力图-处置中L2",
      //     name: "热力图-处置中L2",
      //     coordType: 0,
      //     coordTypeZ: 0,
      //     coordZ: 0,
      //     type: "default", // 外观类型，default：标准热图；dot：点状热图
      //     alpha: 0.2, //
      //     colorMax: "#ffff00",
      //     colorMin: "#fbff00",
      //     valueMax: 200, //
      //     valueMin: 0, //
      //     radius: 1000,
      //     data: [],
      //     layerConfig: {
      //       layerType: "heatMapLayer",
      //       jsonPath: "./data/UeData/处置中事件.json",
      //     },
      //   },
      // ],
      // 已办结L2: [
      //   {
      //     id: "散点-今日事件-已办结L2",
      //     name: "散点-今日事件-已办结L2",
      //     legends: [
      //       {
      //         name: "default",
      //         color: "#ffff",
      //         iconName: "custom-已办结",
      //       },
      //     ],
      //     layerConfig: {
      //       layerType: "landmarkLayer",
      //       scatterType: "已办结",
      //       jsonPath: "./data/UeData/办结事件.json",
      //       isClick: true,
      //       coordZ: 0,
      //     },
      //   },
      //   {
      //     id: "热力图-已办结L2",
      //     name: "热力图-已办结L2",
      //     coordType: 0,
      //     coordTypeZ: 0,
      //     coordZ: 0,
      //     type: "default", // 外观类型，default：标准热图；dot：点状热图
      //     alpha: 0.2, //
      //     colorMax: "#ffff00",
      //     colorMin: "#fbff00",
      //     valueMax: 200, //
      //     valueMin: 0, //
      //     radius: 1000,
      //     data: [],
      //     layerConfig: {
      //       layerType: "heatMapLayer",
      //       jsonPath: "./data/UeData/办结事件.json",
      //     },
      //   },
      // ],
    },
    "YJJD-L0-new": {},
    "LiXia-L1": {},
    "LiXia-L3": {},
    "LX-HRDS": {},
    "LX-HRDS-ShiNei": {},
  },
};
