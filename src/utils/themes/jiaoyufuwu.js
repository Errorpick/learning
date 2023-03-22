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
    教育服务: {
      exclude: true,
      legends: [],
      sceneName: "LXQ-L0-new",
      // LiXia-L2  LXQ-L0-new
      cameraName: "态势总览",
      sceneWeather: "",
    },
  },
  layerMap: {},
  // 图层控制逻辑
  ...layerContral,
};
