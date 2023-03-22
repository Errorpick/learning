import layerContral from "@/utils/contral/layerContral";
export default {
  // 当前主题所有图例配置
  legends: {},
  cardName: {
    首页: {
      name: "Home",
      meta: {
        cname: "首页",
      },
      legendConfig: "LXQ-L0-new",
      legends: [],
      sceneName: "LXQ-L0-new",
      cameraName: "首页",
      sceneWeather: "",
      sceneTime: "",
    },
  },
  // 图层控制逻辑
  ...layerContral,
};
