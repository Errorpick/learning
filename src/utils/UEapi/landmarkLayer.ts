interface config {
  id: string;
  overlayType: string;
  layerConfig: layerConfig;
}
interface layerConfig {
  pickOverlay: Array<string>;
}
interface layerResult {
  result: number;
  message: string;
}
export default class LandmarkLayer {
  //添加散点图层
  addLandmarkLayer<C>(params: config, callback: C) {
    console.log(params);
    let { pickOverlay } = params.layerConfig;
    window.appInstance.uniCall(
      "addLandmarkLayer",
      params,
      (res: layerResult) => {
        console.log("添加" + params.overlayType + "图层", res.message);
        // if (res.result == 1) {
        //   callback && callback(jsonData);
        // }
        if (!pickOverlay) {
          return;
        }
        //注册事件
        this.pickOverlay(params);
      }
    );
  }
  //注册事件
  pickOverlay(params: config) {
    // 注册图层事件
    params.layerConfig.pickOverlay.forEach((event) => {
      let pickJsonData = {
        overlayType: params.overlayType,
        idLayer: params.id,
        type: event,
        allowMultiple: false,
        isShowDecorator: true,
      };
      window.appInstance.uniCall(
        "pickOverlay",
        pickJsonData,
        (res: layerResult) => {
          console.log("注册" + event + "事件", res.message);
        }
      );
    });
  }
  // 更新图层数据
  // static async updateLandmarkLayerCoord(params: config) {
  //   let defaultOption = {
  //     id: "idObj",
  //     name: "layerName",
  //     coordType: 0,
  //     coordTypeZ: 0,
  //     isAppend: false,
  //     data: [],
  //   };
  //   let jsonData = { ...defaultOption };
  //   for (const key in jsonData) {
  //     jsonData[key] = params[key] || jsonData[key];
  //   }
  //   window.appInstance.uniCall("updateLandmarkLayerCoord", jsonData, (res) => {
  //     console.log("updateLandmarkLayerCoord", jsonData, res);
  //   });
  // }
  // // 更新图层样式
  // updateLandmarkLayerStyle(layer) {
  //   window.appInstance.uniCall("updateLandmarkLayerStyle", {}, (res) => {
  //     super.setCallBack("更新地标图样式", res, layerConfig);
  //   });
  // }
  // // 设置图层显隐
  // static setLayerVisible(layer, isVisible = true) {
  //   if (!layer) {
  //     return;
  //   }
  //   window.appInstance.uniCall(
  //     "setOverlayVisibility",
  //     {
  //       id: layer.id,
  //       overlayType: layer.layerType,
  //       visible: isVisible,
  //     },
  //     (res) => {
  //       console.log(`设置图层显隐-${layer.id}-${isVisible}`, res);
  //     }
  //   );
  // }
  // // 删除散点图层
  // static removeLandmarkLayer(layer) {
  //   if (!layer) {
  //     throw new Error("缺少参数layer");
  //   }
  //   window.appInstance.uniCall(
  //     "removeOverlay",
  //     {
  //       id: layer.id,
  //       overlayType: "landmarkLayer",
  //     },
  //     (res) => {
  //       console.log(`删除图层-${layer.id}`, res);
  //     }
  //   );
  // }
}
