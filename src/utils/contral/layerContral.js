//  图层控制逻辑
import Store from "@/store";
import UEapi from "@/utils/UEapi/UEapi";
import gisDataManager from "@/api/gisDataManager";
import layerMap from "@/utils/configs/layerMap";
export default {
  timerList: {},
  legendClick(legend) {
    let { sceneName } = Store.state;
    legend.layers.forEach((id) => {
      let layer = layerMap[sceneName][id] || "";
      if (!layer) {
        return;
      }
      switch (id) {
        // 非图层操作
        case "":
          break;
        default:
          if (layer.layerConfig.status != "none") {
            this.setOverlayVisibility(layer, legend.checked);
          } else {
            this.addLayer(layer);
          }
          break;
      }
    });
  },
  // 添加cardName对应的图层
  addCardLayers(layers) {
    let { sceneName } = Store.state;
    let addLayers = []; //需要添加的
    let hideLayers = []; //需要隐藏的
    let showLayers = []; //需要显示的
    let updateLayers = []; //需要更新的
    for (const id in layerMap[sceneName]) {
      const layer = layerMap[sceneName][id];
      if (!layer) {
        console.log("没有这个图层", id);
      } else if (layers.includes(id) && layer.layerConfig.status == "none") {
        // 查找需要添加的
        addLayers.push(layer);
      } else if (layers.includes(id) && layer.layerConfig.status == "hide") {
        // 查找需要显示的
        showLayers.push(layer);
      } else if (!layers.includes(id) && layer.layerConfig.status == "show") {
        // 查找需要隐藏的
        hideLayers.push(layer);
      } else if (layers.includes(id) && layer.layerConfig.status == "show") {
        // 查找需要更新的
        updateLayers.push(layer);
      }
    }
    console.log(111, addLayers, hideLayers, showLayers, updateLayers);
    hideLayers.forEach((layer) => {
      this.setOverlayVisibility(layer, false);
    });
    addLayers.forEach((layer) => {
      this.addLayer(layer);
    });
    showLayers.forEach((layer) => {
      this.setOverlayVisibility(layer, true);
      // 按需更新
      // this.updateLayer(layer, true)
    });
    updateLayers.forEach((layer) => {
      // 实际应该更新或控制显隐
      this.setOverlayVisibility(layer, true);
      // this.updateLayer(layer, true)
    });
  },
  // 添加每个场景基础图层，如 城市名称 建筑物名称
  addDefaultLayers() {
    let { sceneName } = Store.state;
    let addLayers = []; //需要添加的
    for (const id in layerMap.defaultLayers[sceneName]) {
      const layer = layerMap.defaultLayers[sceneName][id];
      if (layer.layerConfig.status == "none") {
        this.addLayer(layer);
      }
    }
  },
  async addLayer(layer) {
    const { sceneName } = Store.state;
    let { layerType, scatterType } = layer.layerConfig;
    switch (layerType) {
      // 获取数据：根据项目中条件，自己定义获取数据方法 如专题，场景
      case "landmarkLayer":
        var rawData = await gisDataManager.getLandmarkLayerData(layer, {
          sceneName: sceneName,
        });
        console.log("rawData", rawData);
        var jsonData = this.transfromLandmarkLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.LandmarkLayer.addLandmarkLayer(jsonData);
        // 获取数据：根据项目中条件，自己定义获取数据方法 如专题，场景
        break;
      case "eventLayer":
        var rawData = await gisDataManager.getEventLayerData(layer, {
          sceneName: sceneName,
        });
        var jsonData = this.transformEventLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.EventLayer.addEventLayer(jsonData);
        break;
      case "ODLineLayer":
        var rawData = await gisDataManager.getODLineLayerData(layer, {
          sceneName: sceneName,
        });
        console.log("rawData", rawData);
        var jsonData = this.transformODLineLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.ODLineLayer.addODLineLayer(jsonData);
        console.log("jsonData", jsonData);
        break;
      case "heatMapLayer":
        var rawData = await gisDataManager.getHeatMapLayerData(layer, {
          sceneName: sceneName,
        });
        var jsonData = this.transformHeatMapLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.HeatMapLayer.addHeatMapLayer(jsonData);
        break;
      case "3DColumnLayer":
        var rawData = await gisDataManager.getGridColumnLayerData(layer, {
          sceneName: sceneName,
        });
        var jsonData = this.transformGridColumnLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        if (jsonData.data.length > 80) {
          UEapi.Agg3DColumnLayer.add3DColumnLayerMaxLength(jsonData);
        } else {
          jsonData.pointDataId = "";
          UEapi.Agg3DColumnLayer.add3DColumnLayer(jsonData);
        }
        break;
      case "path":
        var rawData = await gisDataManager.getPathData(layer, {
          sceneName: sceneName,
        });
        var jsonData = this.transformgetPathData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.Path.addPath(jsonData);
        break;
      case "roadSgHeatLayer":
        var rawData = await gisDataManager.getRoadSgHeatLayerData(layer, {
          sceneName: sceneName,
        });
        var jsonData = this.transformRoadSgHeatLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        if (jsonData.data.length > 800) {
          UEapi.RoadSgHeatLayer.addRoadSgHeatLayerCoordMaxLength(jsonData);
        } else {
          jsonData.lineDataId = "";
          UEapi.RoadSgHeatLayer.addRoadSgHeatLayerCoord(jsonData);
        }
        break;
      case "panel":
        var jsonData = this.getLandmarkLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.LandmarkLayer.addLandmarkLayer(jsonData);
        setTimeout(() => {
          this.addpanel(jsonData.id, jsonData.data);
        }, 1000);
        break;
      case "trailLayer":
        var rawData = await gisDataManager.getTrailLayerData(layer, {
          sceneName: sceneName,
        });
        var jsonData = this.transformTrailLayerData(layer, rawData);
        //  layer.layerConfig.jsonData 在上面函数中赋值
        layer.layerConfig.rawData = rawData;
        UEapi.TrailLayer.addTrailLayer(jsonData, (res) => {
          layer.layerConfig.status = "show";
          this.timerList[layer.id] && clearInterval(layer.id);
          this.timerList[layer.id] = setInterval(() => {
            layer.layerConfig.index++;
            let updateData = this.getCurrentTrailLayerData(
              layer,
              layer.layerConfig.index
            );
            delete updateData.layerConfig;
            // console.log('updateData', updateData);
            UEapi.TrailLayer.updateTrailLayerCoord(updateData);
          }, 1000);
        });
        break;
      case "typeAreaLayer":
        var rawData = await gisDataManager.getTypeAreaLayerData(layer);
        var jsonData = this.transformTypeAreaLayerData(layer, rawData);
        console.log(jsonData);
        delete jsonData.layerConfig;
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        window.appInstance.uniCall("addTypeAreaLayer", jsonData, (res) => {
          console.log("addTypeAreaLayer", jsonData, res);
        });
        break;

      default:
        break;
    }
  },
  async updateLayer(layer) {
    // 更新数据需要考虑是否是追加数据，此处使用 替换数据方式 如下
    // layer.layerConfig.rawData = rawData
    const { sceneName } = Store.state;
    let dataFilter = spaceName || spaceLevel;
    let { layerType, scatterType } = layer.layerConfig;
    if (!scatterType) {
      return;
    }
    switch (layerType) {
      // 获取数据：根据项目中条件，自己定义获取数据方法 如专题，场景
      case "landmarkLayer":
        var rawData = await gisDataManager.getLandmarkLayerData(layer, {
          sceneName: sceneName,
        });
        var jsonData = this.transfromLandmarkLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.LandmarkLayer.updateLandmarkLayerCoord(jsonData);
        break;
      case "eventLayer":
        var rawData = await gisDataManager.getEventLayerData(layer, {
          sceneName: sceneName,
        });
        var jsonData = this.transformEventLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.EventLayer.updateEventLayerCoord(jsonData);
        break;
      case "ODLineLayer":
        var jsonData = this.getODLineData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.ODLineLayer.addODLineLayer(jsonData);
        break;
      case "heatMapLayer":
        var jsonData = this.getHeatMapLayerData(layer, rawData);
        layer.layerConfig.rawData = rawData;
        layer.layerConfig.jsonData = jsonData;
        layer.layerConfig.status = "show";
        UEapi.HeatMapLayer.updateHeatMapLayerCoord(jsonData);
        break;
      case "trailLayer":
        var jsonData = this.getTrailLayerData(layer, rawData);
        layer.layerConfig.status = "show";
        // UEapi.TrailLayer.addTrailLayer(jsonData, () => {
        var jsonData2 = this.updateTrailLayerData(rawData);
        layer.layerConfig.status = "show";
        UEapi.TrailLayer.updateData(
          jsonData,
          jsonData2,
          this.coordZList[spaceLevel]
        );
        // })
        break;
      default:
        break;
    }
  },

  setOverlayVisibility(layer, isVisible) {
    let type = "";
    if (layer.layerConfig.layerType == "panel") {
      type = "landmarkLayer";
    } else if (layer.layerConfig.layerType == "model") {
      layer.layerConfig.status = isVisible ? "show" : "hide";
      window.appInstance.uniCall(
        "setModelVisibility",
        {
          ids: layer.layerConfig.models,
          visible: isVisible,
        },
        (res) => {}
      );
      return;
    } else if (layer.layerConfig.layerType == "trailLayer") {
      if (isVisible) {
        this.addLayer(layer);
      } else {
        this.removeTrailLayer(layer);
      }
      return;
    } else {
      type = layer.layerConfig.layerType;
    }
    window.appInstance.uniCall(
      "setOverlayVisibility",
      {
        id: layer.id,
        overlayType: type,
        visible: isVisible,
      },
      (res) => {
        console.log("setOverlayVisibility", layer.id, isVisible, res);
        layer.layerConfig.status = isVisible ? "show" : "hide";
      }
    );
  },
  // 转换LandmarkLayer数据
  transfromLandmarkLayerData(layer, rawData) {
    let defaultOption = {
      id: "idObj",
      name: "layerName",
      coordType: 0,
      coordTypeZ: 0,
      autoScale: false,
      visible: true,
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    let legends = [];
    let data = [];
    rawData.forEach((item) => {
      data.push({
        id: item.id,
        label: item.show == 1 ? item.mc : "",
        coord: [item.lon, item.lat],
        coordZ: item.coordz || layer.layerConfig.coordZ || 20,
        type: item.mc,
      });
      legends.push({
        name: item.mc,
        color: "#ffffff",
        iconName:
          item.show == 1 ? "custom-显示全部网格" : "custom-隐藏Icon网格",
      });
    });
    jsonData.data = data;
    jsonData.legends = legends;
    return jsonData;
  },
  // 转换不同图例的图层
  transfromDifLandmarkLayerData(layer, rawData) {
    let defaultOption = {
      id: "idObj",
      name: "layerName",
      coordType: 0,
      coordTypeZ: 0,
      autoScale: false,
      visible: true,
      legends: [],
      data: [],
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    jsonData.legends = rawData.map((item) => {
      return {
        name: item.name,
        color: "#ffff",
        iconName: "custom-" + item.name,
      };
    });
    jsonData.data = rawData.map((item) => {
      return {
        id: item.id,
        label: "",
        coord: [item.lon, item.lat],
        coordZ: layer.layerConfig.coordZ || 1,
        type: item.name,
      };
    });
    return jsonData;
  },
  // 转换事件图数据
  transformEventLayerData(layer, rawData) {
    let defaultOption = {
      id: "idObj",
      name: "layerName",
      coordType: 0,
      coordTypeZ: 0,
      visible: true,
      legends: [],
      data: [],
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    jsonData.data = rawData.map((item) => {
      return {
        id: item.id,
        coord: [item.lon, item.lat],
        coordZ: layer.layerConfig.coordZ || 1,
        message: "",
        type: "default",
      };
    });
    return jsonData;
  },
  // 转换类型区域图数据
  transformTypeAreaLayerData(layer, rawData) {
    let defaultOption = {
      id: "typeAreaId",
      name: "layerName",
      coordType: 0,
      coordTypeZ: 0,
      coordZ: 10,
      alpha: 0.5,
      visible: true,
      lineDataId: "",
      areas: [
        // {
        //   name: "areaName01",
        //   points: [
        //     { coord: [103.976547, 1.397829] },
        //   ]
        // },
      ],
      legends: [
        // {
        //   name: "legendName1",
        //   type: "wave",
        //   color: "#ff0000",
        //   areaHeight: 10,
        //   fillArea: "none",
        //   fillPosition: "top"
        // },
      ],
      data: [
        // {
        //   areaName: "areaName01",
        //   legendName: "legendName3"
        // },
      ],
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    let areas = [];
    let legends = [];
    let data = [];
    rawData.forEach((item) => {
      areas.push({
        name: item.Name,
        points: item.points[0].map((point) => {
          return {
            coord: point,
          };
        }),
      });
      // 此处图层样式一样，使用一个legelds，可以循环配置
      legends.push(layer.legends[0]);
      data.push({
        areaName: item.Name,
        legendName: "legendName1",
      });
    });
    jsonData.areas = areas;
    jsonData.legends = legends;
    jsonData.data = data;
    return jsonData;
  },
  // 热图
  transformHeatMapLayerData(layer, rawData) {
    let defaultOption = {
      id: "heat",
      name: "热力图",
      coordType: 0,
      coordTypeZ: 0,
      coordZ: 64,
      type: "default",
      alpha: 1,
      colorMax: "#FF6000",
      colorMin: "#009acf",
      valueMax: 60,
      valueMin: 20,
      radius: 1,
      visible: true,
      pointDataId: "",
      data: [],
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    let data = [];
    rawData.forEach((item) => {
      data.push({
        coord: [item.lon || item.jd, item.lat || item.wd],
        value: item.count - 0 || item.value - 0,
      });
    });
    jsonData.data = data;
    return jsonData;
  },
  // 柱图
  transformGridColumnLayerData(layer, rawData) {
    let defaultOption = {
      id: "bar",
      name: "三维柱状图",
      coordType: 0,
      coordTypeZ: 0,
      coordZ: 64,
      columnType: "cube",
      columnMinHeight: 10,
      columnMaxHeight: 300,
      columnAlpha: 1,
      columnPaint: "solid",
      columnGap: 0,
      columnWidth: 30,
      colorMax: "#FF2626",
      colorMin: "#FFFF00",
      valueMax: 250,
      valueMin: 10,
      labelColor: "#ffffff",
      labelBackgroundColor: "#333333",
      visible: true,
      pointDataId: "",
      legends: [],
      data: [],
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    let data = [];
    rawData.forEach((item) => {
      data.push({
        id: item.id || item.gridid,
        coord: [item.jd || item.lon, item.wd || item.lat],
        value: item.count || item.value,
        // label: layer.layerConfig.labelShow ? item.text || item.value : ''
      });
    });
    jsonData.data = data;
    jsonData.legends = layer.legends;
    return jsonData;
  },
  // 路径
  transformgetPathData(layer, rawData) {
    let defaultOption = {
      id: "path",
      name: "路径",
      coordType: 0,
      coordTypeZ: 0,
      type: "Segment06",
      texture: "",
      textureSpeed: 0,
      color: "#ff0000",
      colorPass: "#0000FF",
      width: 40,
      tag: "custominfo", // 用户自定标签，用户保存用户的扩展数据
      autoScale: false,
      lineDataId: "", // 对应本服务器上线数据对象，如果找到lineDataId，则下方的points不起作用。注意：此属性端渲染未生效
      points: [],
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    let pointsData = [];
    rawData.forEach((item, index) => {
      const { points, id } = item;
      points.map((p) => {
        pointsData.push({
          coord: p,
          coordZ: layer.layerConfig.coordZ || 20,
        });
      });
    });
    jsonData.points = pointsData;
    return jsonData;
  },
  //转换关系图数据
  transformODLineLayerData(layer, rawData) {
    let defaultOption = {
      id: "odline",
      name: "关系图",
      coordType: 0,
      coordTypeZ: 0,
      isShowBubble: true,
      bubbleRadiusMax: 80,
      bubbleRadiusMin: 50,
      bubbleSpeed: 20,
      lineWidthMax: 50,
      lineWidthMin: 20,
      lineSpeed: 2,
      curvature: 0.8,
      valueMax: 100,
      valueMin: 10,
      visible: true,
      legends: [],
      data: [],
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    let data = [];
    rawData.forEach((item) => {
      data.push({
        id: item.id,
        startCoord: item.startCoord,
        startCoordZ: layer.layerConfig.startCoordZ || 10,
        targetCoord: item.targetCoord,
        targetCoordZ: layer.layerConfig.targetCoordZ || 10,
        value: item.value || item.odnum || 50,
        type: "default",
      });
      // 此处图层样式一样，使用一个legelds，可以循环配置
    });
    jsonData.legends = layer.legends;
    jsonData.data = data;
    return jsonData;
  },
  // 路径段热力图
  transformRoadSgHeatLayerData(layer, rawData) {
    let defaultOption = {
      id: "idObj",
      name: "layerName",
      coordType: 0,
      coordTypeZ: 0,
      alpha: 1,
      width: 30,
      colorMax: "#FF0000",
      colorMin: "#00FF00",
      valueMax: 1000,
      valueMin: 0,
      lineDataId: "",
      visible: true,
      segments: [],
      data: [],
    };
    let jsonData = Object.assign({}, defaultOption, layer);
    let data = [];
    let segments = [];
    if (rawData.length > 800) {
      rawData.forEach((item, index) => {
        let dateItem = {
          id: layer.id + index,
          name: layer.id + index,
          value: Math.floor(Math.random() * 500),
          points: item.points.map((point) => {
            return {
              coord: point,
              coordZ: layer.layerConfig.coordZ || 64,
            };
          }),
        };
        data.push(dateItem);
      });
      jsonData.data = data;
      jsonData.attribute = [layer.lineDataId];
      return jsonData;
    } else {
      rawData.forEach((item) => {
        let segment = {
          name: item.id,
          points: item.points.map((point) => {
            return {
              coord: point,
              coordZ: layer.layerConfig.coordZ || 64,
            };
          }),
        };
        let dateItem = {
          name: item.id,
          value: Math.floor(Math.random() * 500),
        };
        segments.push(segment);
        data.push(dateItem);
      });
      jsonData.segments = segments;
      jsonData.data = data;
      return jsonData;
    }
  },

  // 轨迹图
  //获取轨迹图数据
  transformTrailLayerData(layer, rawData) {
    let defaultOption = {
      id: "idObj",
      name: "layerName",
      coordType: 0,
      coordTypeZ: 0,
      trackStyle: "style001",
      trackDuration: 30,
      trackWidth: 10,
      objLife: 10,
      visible: true,
      duration: 1,
      data: [],
    };
    let trailList = {};
    rawData.forEach((item) => {
      if (trailList[item.name]) {
        trailList[item.name].push({
          lon: item.lon,
          lat: item.lat,
          id: item.name,
          name: item.name,
          time: item.time,
        });
      } else {
        trailList[item.name] = [
          {
            lon: item.lon,
            lat: item.lat,
            id: item.name,
            name: item.name,
            time: item.time,
          },
        ];
      }
    });
    layer.layerConfig.jsonData = trailList;
    let jsonData = Object.assign({}, defaultOption, layer);
    let arr = [];
    for (let key in trailList) {
      arr.push(trailList[key][layer.layerConfig.index % trailList[key].length]);
    }
    jsonData.data = arr.map((item) => {
      return {
        id: item.id,
        label: "",
        coord: [item.lon, item.lat],
        coordZ: layer.layerConfig.coordZ || 1,
        type: "default",
      };
    });
    return jsonData;
  },
  // 获取轨迹图更新数据
  getCurrentTrailLayerData(layer, index) {
    let defaultOption = {
      id: "trail",
      name: "轨迹图",
      coordType: 0,
      coordTypeZ: 0,
      isAppend: true,
      duration: 1,
      data: [],
    };
    let trailList = layer.layerConfig.jsonData;
    let jsonData = {};
    for (const key in defaultOption) {
      jsonData[key] = layer[key] || defaultOption[key];
    }
    let arr = [];
    for (let key in trailList) {
      arr.push(trailList[key][index % trailList[key].length]);
    }
    jsonData.data = arr.map((item) => {
      return {
        id: item.id,
        label: "",
        coord: [item.lon, item.lat],
        coordZ: layer.layerConfig.coordZ || 1,
        type: "default",
      };
    });
    return jsonData;
  },
  // 删除轨迹图
  removeTrailLayer(layer) {
    layer.layerConfig.index = 0;
    layer.layerConfig.status = "hide";
    this.timerList[layer.id] && clearInterval(this.timerList[layer.id]);
    UEapi.Common.removeOverlay({
      id: layer.id,
      overlayType: "trailLayer",
    });
    delete this.timerList[layer.id];
  },
  clearTrailLayer() {
    let { sceneName } = Store.state;
    for (const legend in this.timerList) {
      let layer = layerMap[sceneName][legend];
      this.removeTrailLayer(layer);
    }
  },
};
