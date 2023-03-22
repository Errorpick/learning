// import TszlLxq from "../TSZL/TszlLxq";
// import TszlYjjd from "../TSZL/TszlYjjd";
// import TszlSq from "../TSZL/TszlSq";

import layerContral from "@/utils/contral/layerContral";
export default {
  // 当前主题所有图例配置
  legends: {
    "LXQ-L0-new": {
      历下区区划: {
        layers: ["LXQ-L0-new-区划类型区域图", "LXQ-L0-new-区划散点"], // 控制的图层
        txt: "历下区区划", // 图例组件显示的文字
        img: "", //图例组件显示的图片
        showLegend: false, // 是否在图例组件中显示
        checked: false,
      },
    },
  },
  cardName: {
    态势总览: {
      name: "SituationOverview",
      meta: {
        cname: "态势总览",
      },
      legendConfig: "LXQ-L0-new",
      legends: ["历下区区划"],
      sceneName: "LXQ-L0-new",
      cameraName: "态势总览",
      sceneWeather: "",
      sceneTime: "",
    },
    // toL3: {
    //   exclude: true,
    //   legends: [],
    //   sceneName: "LiXia-L3",
    //   sceneTime: "08:00",
    //   cameraName: "事项辞典",
    //   sceneWeather: "PartlyCloudy",
    // },

    // 历下网格: {
    //   exclude: true,
    //   legends: ["历下区区划", "事件冒泡"],
    //   sceneName: "LXQ-L0-new",
    //   sceneTime: "",
    //   cameraName: "态势总览",
    // },
    // 城运资源街道: {
    //   exclude: true,
    //   legends: [""],
    //   sceneName: "LXQ-L0-new",
    //   sceneTime: "",
    //   cameraName: "态势总览",
    // },
    // 区城市运行指挥中心: {
    //   exclude: true,
    //   legends: [""],
    //   sceneName: "LXQ-L0-new",
    //   sceneTime: "",
    //   cameraName: "态势总览",
    // },
    // 城运资源: {
    //   exclude: true,
    //   legends: ["城运资源", "运行指挥中心"],
    //   sceneName: "LXQ-L0-new",
    //   sceneTime: "",
    //   cameraName: "态势总览",
    // },
    // 姚家街道网格: {
    //   exclude: true,
    //   legends: ["姚家街道区划"],
    //   sceneTime: "",
    //   sceneName: "YJJD-L0-new",
    //   cameraName: "姚家街道",
    //   sceneWeather: "",
    // },
    // 三箭平安苑社区网格: {
    //   exclude: true,
    //   legends: ["三箭平安苑区划"],
    //   sceneTime: "",
    //   sceneName: "YJJD-L0-new",
    //   cameraName: "三箭平安苑L0",
    //   sceneWeather: "",
    // },
    // 第一网格网格: {
    //   exclude: true,
    //   legends: ["第二十七网格"],
    //   sceneTime: "08:00",
    //   sceneName: "LiXia-L3",
    //   cameraName: "万象城",
    //   sceneWeather: "PartlyCloudy",
    // },
  },
  // 图层控制逻辑
  ...layerContral,
};
