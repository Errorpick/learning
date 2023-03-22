export default class LandmarkLayer {
  // 添加散点图层
  static async addLandmarkLayer(params, callback) {
    // let defaultOption = {
    //   id: 'idObj',
    //   name: 'layerName',
    //   coordType: 0,
    //   coordTypeZ: 0,
    //   autoScale: false,
    //   visible: true,
    //   legends: [],
    //   data: [],
    // }
    // let jsonData = Object.assign({}, defaultOption, params)
    let { isClick } = params.layerConfig;
    delete params.layerConfig;
    window.appInstance.uniCall("addLandmarkLayer", params, (res) => {
      console.log("addLandmarkLayer", params, res);
      // if (res.result == 1) {
      //   callback && callback(jsonData)
      // }
      if (!isClick) {
        return;
      }
      //注册点击散点
      let pickJsonData1 = {
        overlayType: "landmarkLayer",
        idLayer: params.id,
        type: "click",
        allowMultiple: false,
        isShowDecorator: true,
      };
      appInstance.uniCall("pickOverlay", pickJsonData1, (res) => {
        console.log("pickOverlay", params.id);
      });
      // let pickJsonData2 = {
      //   overlayType: "landmarkLayer",
      //   idLayer: jsonData.id,
      //   type: "hover",
      //   allowMultiple: false,
      //   isShowDecorator: false
      // }

      // setTimeout(() => {
      //   appInstance.uniCall('pickOverlay', pickJsonData2, res => {
      //   })
      // }, 1000)
    });
  }
  // 更新图层数据
  static async updateLandmarkLayerCoord(params) {
    let defaultOption = {
      id: "idObj",
      name: "layerName",
      coordType: 0,
      coordTypeZ: 0,
      isAppend: false,
      data: [],
    };
    let jsonData = { ...defaultOption };
    for (const key in jsonData) {
      jsonData[key] = params[key] || jsonData[key];
    }
    window.appInstance.uniCall("updateLandmarkLayerCoord", jsonData, (res) => {
      console.log("updateLandmarkLayerCoord", jsonData, res);
    });
  }
  // 更新图层样式
  updateLandmarkLayerStyle(layer) {
    window.appInstance.uniCall("updateLandmarkLayerStyle", {}, (res) => {
      super.setCallBack("更新地标图样式", res, layerConfig);
    });
  }
  // 设置图层显隐
  static setLayerVisible(layer, isVisible = true) {
    if (!layer) {
      return;
    }
    window.appInstance.uniCall(
      "setOverlayVisibility",
      {
        id: layer.id,
        overlayType: layer.layerType,
        visible: isVisible,
      },
      (res) => {
        console.log(`设置图层显隐-${layer.id}-${isVisible}`, res);
      }
    );
  }
  // 删除散点图层
  static removeLandmarkLayer(layer) {
    if (!layer) {
      throw new Error("缺少参数layer");
    }
    window.appInstance.uniCall(
      "removeOverlay",
      {
        id: layer.id,
        overlayType: "landmarkLayer",
      },
      (res) => {
        console.log(`删除图层-${layer.id}`, res);
      }
    );
  }

  // 开启图层点击事件
  static clickLandmarkLayerFn(layer) {
    window.appInstance.uniCall(
      "pickOverlay",
      {
        overlayType: layer.layerConfig.layerType,
        idLayer: layer.id,
        type: "click",
        isShowDecorator: false,
      },
      (res) => {}
    );
  }
}
