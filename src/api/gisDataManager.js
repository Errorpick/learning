import mapApiList from "@/api/mapApiList";

export default {
  //获取散点数据
  async getLandmarkLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    // 删选数据，真实接口直接传参筛选
    // return res.filter((item) => {
    //   return item.type == params.sceneName;
    // });
    return res;
  },
  async getDifLandmarkLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    // 删选数据，真实接口直接传参筛选
    return res;
  },
  //获取事件图数据
  async getEventLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    // 删选数据，真实接口直接传参筛选
    return res.filter((item) => {
      return item.type == params.sceneName;
    });
  },

  // 获取类型区域图数据
  async getTypeAreaLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    return res;
  },
  // 获取路径图数据
  async getPathData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    // 删选数据，真实接口直接传参筛选
    return res;
    return res.filter((item) => {
      return item.type == params.sceneName;
    });
  },
  //获取区域图数据
  async getAreaData(layer, defaultConfig, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    let resConfig = Object.assign({}, defaultConfig, layer);
    let points = [];
    res.forEach((item) => {
      points.push({
        coord: item,
      });
    });
    resConfig.points = points;
    return resConfig;
  },
  //获取关系图数据
  async getODLineLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    // 删选数据，真实接口直接传参筛选
    return res;
    return res.filter((item) => {
      return item.type == params.sceneName;
    });
  },
  //获取柱图数据
  async get3DColumnLayerData(layer, defaultConfig, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);

    let resConfig = Object.assign({}, defaultConfig, layer);
    let points = [];
    res.forEach((item, index) => {
      points.push({
        id: item.id || item.districtid + index,
        coord: [item.lon || item.jd, item.lat || item.wd],
        label: "",
        value: item.value || item.count || 10,
      });
    });
    resConfig.data = points;
    return resConfig;
  },
  //获取气泡图数据
  async getBubbleLayerData(layer, defaultConfig, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    let resConfig = Object.assign({}, defaultConfig, layer);
    let points = [];
    res.forEach((item) => {
      points.push({
        id: item.id,
        coord: [item.jd || item.lon, item.wd || item.lat],
        coordZ: layer.layerConfig.coordZ || 10,
        value: item.value || parseInt(Math.random() * 1000),
        type: "default",
      });
    });
    resConfig.data = points;
    return resConfig;
  },
  //获取热力图数据
  async getHeatMapLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    // 删选数据，真实接口直接传参筛选
    return res;
    return res.filter((item) => {
      return item.type == params.sceneName;
    });
  },
  //获取轨迹图数据
  async getTrailLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    return res.filter((item) => {
      return item.type == params.sceneName;
    });
  },
  // 获取路径段热力图数据
  async getRoadSgHeatLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    return res.filter((item) => {
      if (item.type) {
        return item.type == params.sceneName;
      } else {
        return res;
      }
    });
  },
  // 获取聚簇柱状图数据
  async getAgg3DColumnLayerData(layer, defaultConfig, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    let points = [];
    res.forEach((item) => {
      points.push({
        id: item.id || item.gridid,
        label: layer.layerConfig.showLabel ? item.name : "",
        coordZ: layer.layerConfig.coordZ || 200,
        coord: [item.jd || item.lon, item.wd || item.lat],
        value: item.count,
      });
    });
    return points.slice(0, 1000);
  },
  // 获取柱图数据
  async getGridColumnLayerData(layer, params) {
    let res = await mapApiList.getJsonData(layer.layerConfig.jsonPath);
    // 删选数据，真实接口直接传参筛选
    return res;
    return res.filter((item) => {
      return item.type == params.sceneName;
    });
  },
};
