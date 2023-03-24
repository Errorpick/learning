interface scenesResult {
  result: number;
  message: string;
  scenes: Array<scenesInfo>;
}
interface scenesInfo {
  name: string;
  default: boolean;
  primitiveCoord: string;
  url: string;
  token: string;
}

import store from "@/store";
// import route from "@/router";
// import AllLayerConfig from "@/utils/configs/AllLayerConfig.js";
// import CameraList from "../configs/cameraList";
// import Camera from "../UEapi/Camera";
export default class Scene {
  // 场景初始化成功
  sceneInit() {
    window.appInstance.uniCall("addEventListener", {
      eventName: "onServiceInit",
      callback: () => {
        window.appInstance.uniCall("getScenesInfo", {}, (res: scenesResult) => {
          const sceneName = res.scenes.find((item: scenesInfo) => {
            if (item.default) return item.name;
          })?.name!;
          console.log("当前场景", sceneName);
          // 设置当前场景相关属性
          store.commit("setSceneName", sceneName);
          store.commit("setAppinstance", true);
          // 设置默认highLight为主题名称
          store.commit("setHighLight", store.state.topic);
          // 读取专题配置
          // window.layerContral = AllLayerConfig[route.currentRoute.value.name];
          // 添加每个场景专属图层，如地标建筑，城市名称等等
          window.layerContral && window.layerContral.addDefaultLayers();
          // 可以根据初始名字，设置相机视野限制
          // const cameraInfo = new CameraList();
          // Camera.restrictCamera(cameraInfo[sceneName]);
        });
      },
    });
  }
}
