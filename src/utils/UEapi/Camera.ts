interface layerResult {
  result: number;
  message: string;
}
interface cameraConfig {
  centerCoord: Array<number>;
  coordType: number;
  coordTypeZ: number;
  coordZ: number;
  distance: number;
  fov: number;
  heading: number;
  pitch: number;
  duration: number;
  fly: boolean;
}
interface restrictCamera {
  center: Array<number>;
  coordType: number;
  coordTypeZ: number;
  limitYaw: Array<number>;
  limitPitch: Array<number>;
  limitCoordZ: Array<number>;
  limitDistance: Array<number>;
  radius: number;
}
enum CameraPathingState {
  "pause", //暂停移动;
  "continue", //继续移动;
  "stop", //停止移动, 释放焦点
}
interface focusParams {
  id: string;
  overlayType: string;
  distance: number;
  idLayer: string;
  modelType: string;
  buildingId: string;
  floor: string;
  layerType: string;
}
export default class Camera {
  // 设置摄像机
  static setCamera(jsonData: cameraConfig) {
    window.appInstance.uniCall("setCamera", jsonData, (res: layerResult) => {
      console.log("设置相机视角", jsonData, res);
    });
  }
  // 设置场景环绕
  static rotateCamera(flag: boolean) {
    window.appInstance.uniCall("rotateCamera", {
      enabled: flag,
      duration: 240,
      direction: "clockwise",
      interruptable: false,
    });
  }
  // 设置相机视角限制参数
  static restrictCamera(jsonData: restrictCamera, flag: boolean = true) {
    if (typeof jsonData == "boolean" || !jsonData) {
      return;
    }
    window.appInstance.uniCall(
      "restrictCamera",
      jsonData,
      (res: layerResult) => {
        console.log("视角限制参数", flag, res);
        this.setCameraRestrictionState(flag);
      }
    );
  }
  // 设置相机视角限制状态
  static setCameraRestrictionState(flag: boolean = true) {
    window.appInstance.uniCall(
      "setCameraRestrictionState",
      {
        state: flag ? "restricted" : "free",
      },
      (res: layerResult) => {
        console.log("视角限制状态", flag, res);
      }
    );
  }
  // 路径漫游相机
  static pathingCamera(id: string, speed: number = 5) {
    let jsonData = {
      pathId: id,
      loopMode: "none",
      reverse: false,
      distance: 10,
      pitch: 2,
      speed: speed,
    };
    window.appInstance.uniCall(
      "pathingCamera",
      jsonData,
      (res: layerResult) => {
        console.log("开启路径漫游", jsonData, res);
      }
    );
  }
  // 设置路径漫游状态
  static setCameraPathingState(state: CameraPathingState) {
    let jsonData = {
      state: state,
    };
    window.appInstance.uniCall(
      "setCameraPathingState",
      jsonData,
      (res: layerResult) => {
        console.log("设置路径移动镜头状态", jsonData, res);
      }
    );
  }
  // 聚焦覆盖物
  static focusById(params: focusParams) {
    let jsonData = {
      id: params.id,
      overlayType: params.overlayType,
      distance: params.distance || 50,
    };
    window.appInstance.uniCall("focusById", jsonData, (res: layerResult) => {
      console.log("focusById", jsonData, res);
    });
  }
  // 聚焦 图层子覆盖物
  static focusByLayer(params: focusParams) {
    let jsonData = {
      id: params.id,
      idLayer: params.idLayer,
      layerType: params.layerType,
      distance: params.distance || 100,
    };
    window.appInstance.uniCall("focusByLayer", jsonData, (res: layerResult) => {
      console.log("focusByLayer", jsonData, res);
    });
  }
  // 聚焦模型
  static focusModel(params: focusParams) {
    let jsonData = {
      id: params.id,
      modelType: params.modelType,
      distance: params.distance,
    };
    window.appInstance.uniCall("focusModel", jsonData, (res: layerResult) => {
      console.log("focusModel", jsonData, res);
    });
  }
  // 聚焦 建筑
  static focusBuilding(params: focusParams) {
    let jsonData = {
      buildingId: params.buildingId,
      distance: params.distance || 100,
    };
    window.appInstance.uniCall(
      "focusBuilding",
      jsonData,
      (res: layerResult) => {
        console.log("focusBuilding", jsonData, res);
      }
    );
  }
  // 聚焦 楼层
  static focusFloor(params: focusParams) {
    let jsonData = {
      buildingId: params.buildingId,
      floor: params.floor,
      distance: params.distance || 100,
    };

    window.appInstance.uniCall("focusFloor", jsonData, (res: layerResult) => {
      console.log("focusFloor", jsonData, res);
    });
  }
}
