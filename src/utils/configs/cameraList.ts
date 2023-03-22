export default class cameraList {
  /**
   * 分为两种配置
   * 1、当前主题的摄像机参数
   * 2、当前地图的摄像机视野限制参数
   */

  //#region 相机参数
  首页: object = {
    centerCoord: [117.07834532249, 36.68069255588],
    coordType: 0,
    coordTypeZ: 0,
    coordZ: 140.00000282812,
    distance: 29100,
    fov: 90,
    heading: 336,
    pitch: 17,
    duration: 1,
    fly: true,
  };
  数说历下: object = {
    centerCoord: [117.07834532249, 36.68069255588],
    coordType: 0,
    coordTypeZ: 0,
    coordZ: 140.00000282812,
    distance: 29100,
    fov: 90,
    heading: 336,
    pitch: 17,
    duration: 1,
    fly: true,
  };
  态势总览: object = {
    centerCoord: [117.07834532249, 36.68069255588],
    coordType: 0,
    coordTypeZ: 0,
    coordZ: 140.00000282812,
    distance: 29100,
    fov: 90,
    heading: 336,
    pitch: 17,
    duration: 1,
    fly: true,
  };
  //#endregion

  //#region 视野限制参数
  "LiXia-L3": object = {
    center: [117.10021585448, 36.66733610625],
    coordType: 0,
    coordTypeZ: 0,
    limitYaw: [0, 359],
    limitPitch: [5, 80],
    limitCoordZ: [140, 140],
    limitDistance: [105, 4300],
    radius: 7000,
  };
  "LiXia-L1": object = {
    center: [117.10498570652, 36.68979807335],
    coordType: 0,
    coordTypeZ: 0,
    limitYaw: [0, 359],
    limitPitch: [5, 80],
    limitCoordZ: [140, 140],
    limitDistance: [3000, 30000],
    radius: 10000,
  };
  "LXQ-L0-new": object = {
    center: [117.10046968259, 36.63510194199],
    coordType: 0,
    coordTypeZ: 0,
    limitYaw: [0, 359],
    limitPitch: [5, 80],
    limitCoordZ: [140, 140],
    limitDistance: [4000, 29100],
    radius: 10000,
  };
  "YJJD-L0-new": object = {
    center: [117.0782007268, 36.64404547885],
    coordType: 0,
    coordTypeZ: 0,
    limitYaw: [0, 359],
    limitPitch: [38, 80],
    limitCoordZ: [140, 140],
    limitDistance: [1300, 17500],
    radius: 6000,
  };
  "LX-HRDS": object = {
    center: [0, 0],
    coordType: 0,
    coordTypeZ: 0,
    limitYaw: [1, 359],
    limitPitch: [1, 80],
    limitCoordZ: [1, 140],
    limitDistance: [1, 1000],
    radius: 600,
  };
  "LX-HRDS-ShiNei": object = {
    center: [0, 0],
    coordType: 0,
    coordTypeZ: 0,
    limitYaw: [1, 359],
    limitPitch: [1, 80],
    limitCoordZ: [1, 140],
    limitDistance: [1, 1000],
    radius: 600,
  };
  //#endregion
}
