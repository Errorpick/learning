// import HeatMapLayer from "./HeatMapLayer";
// import Path from "./Path";
// import BarLayer from "./BarLayer";
// import Area from "./Area";
// import Marker3D from "./Marker3D";
// import Bubble from "./Bubble";
// import ODLineLayer from "./ODLineLayer";
// import TrailLayer from "./TrailLayer";
// import Model from "./Model";
// import RoadSgHeatLayer from "./roadSgHeatLayer";
// import Agg3DColumnLayer from "./agg3DColumnLayer";
// import GridColumnLayer from "./GridColumnLayer";
// import OverlayTip from "./OverlayTip";
// import TypeAreaLayer from "./TypeAreaLayer";
// import Events from "./Events";
// import Building from "./Building";
// import EventLayer from "./EventLayer";
// import TrackLayer from "./TrackLayer";
//  TimerList = {};
import Camera from "./Camera";
import LandmarkLayer from "./landmarkLayer";
interface result {
  result: number;
  message: string;
}
import Scene from "../common/Scene";
class UEapi extends Scene {
  //初始化UE ==> 初始化场景
  initUE(): void {
    window.appInstance = new TGApp.App();
    window.appInstance.initService(
      {
        name: "serviceName",
        container: document.getElementById("container"),
        mode: "streaming3",
        url: window.streamingConfig.url,
        token: window.streamingConfig.token,
        // resolution: [streamingConfig.width, streamingConfig.height],
        editMode: false,
      },
      (res: result) => {
        console.log("初始化图层" + res.message);
        this.sceneInit();
      }
    );
  }
}
export default UEapi;
// class Common extends UEapi {
//   {
//   initUE(): void {
//     window.appInstance = new TGApp.App();
//     window.appInstance.initService(
//       {
//         name: "serviceName",
//         container: document.getElementById("container"),
//         mode: "streaming3",
//         url: window.streamingConfig.url,
//         token: window.streamingConfig.token,
//         // resolution: [streamingConfig.width, streamingConfig.height],
//         editMode: false,
//       },
//       (res: result) => {
//         this.sceneInit();
//       }
//     );
//   }
//   switchService(name: string) {
//     window.appInstance.uniCall(
//       "switchService",
//       { name: name },
//       (res: result) => {
//         console.log("切换场景", name, res);
//       }
//     );
//   }
//   switchScene(name: string) {
//     window.appInstance.uniCall(
//       "switchScene",
//       {
//         name: name,
//         duration: 1,
//       },
//       (res: result) => {
//         console.log("切换场景", name, res);
//       }
//     );
//   }
//   removeOverlay(params: config) {
//     window.appInstance.uniCall(
//       "removeOverlay",
//       {
//         id: params.id,
//         overlayType: params.overlayType,
//       },
//       (res: result) => {
//         console.log(`删除图层`, params, res);
//       }
//     );
//   }
//   clearOverlayType(type: string) {
//     // TrailLayer.clearTrailLayerTimers();
//     window.appInstance.uniCall(
//       "clearOverlayType",
//       {
//         overlayType: type,
//       },
//       (res: result) => {
//         console.log(`清空图层${type}`, res);
//       }
//     );
//   }
//   setLayerVisible(layer: config, isVisible = true) {
//     if (!layer) {
//       return;
//     }
//     window.appInstance.uniCall(
//       "setOverlayVisibility",
//       {
//         id: layer.id,
//         overlayType: layer.overlayType,
//         visible: isVisible,
//       },
//       (res: result) => {
//         console.log(`设置图层显隐-${layer.id}-${isVisible}`, res);
//       }
//     );
//   }
//   // clearTrailTimer() {
//   //   TrailLayer.clearTrailLayerTimers();
//   // }
// }

// export default {
//   UEapi,
//   // Camera,
//   // LandmarkLayer,
//   // ODLineLayer,
//   // HeatMapLayer,
//   // Path,
//   // BarLayer,
//   // Area,
//   // Marker3D,
//   // Bubble,
//   // TrailLayer,
//   // TimerList,
//   // Model,
//   // RoadSgHeatLayer,
//   // Agg3DColumnLayer,
//   // GridColumnLayer,
//   // OverlayTip,
//   // TypeAreaLayer,
//   // Events,
//   // Building,
//   // EventLayer,
//   // TrackLayer,
// };
