import layerContral from "@/utils/contral/layerContral";
export default {
  // 当前主题所有图例配置
  legends: {},
  cardName: {
    数说历下: {
      name: "NumerologyLiXia",
      meta: {
        cname: "数说历下",
      },
      legendConfig: "LXQ-L0-new",
      legends: [],
      sceneName: "LXQ-L0-new",
      cameraName: "数说历下",
      sceneWeather: "",
      sceneTime: "",
    },
  },
  // 图层控制逻辑
  ...layerContral,
};
