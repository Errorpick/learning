import { createStore } from "vuex";

interface State {
  topic: string;
  appinstance: boolean;
  sceneName: string;
  highLight: string;
  cameraInfo: string;
  sceneWeather: string;
  sceneTime: string;
}
const store = createStore<State>({
  state() {
    return {
      topic: "首页", //主题名称
      appinstance: false, // 地图初始化状态
      sceneName: "LXQ-L0-new", //关卡名称
      highLight: "", //卡片名称
      cameraInfo: "", //相机视角
      sceneWeather: "", //场景天气设置
      sceneTime: "", //场景时间设置
    };
  },
  mutations: {
    //更新主题名
    setTopic(state: State, info: string) {
      state.topic = info;
    },
    //更新地图出初始化状态
    setAppinstance(state: State, info: boolean) {
      state.appinstance = info;
    },
    //更新关卡名称
    setSceneName(state: State, info: string) {
      state.sceneName = info;
    },
    //更新卡片名称
    setHighLight(state: State, info: string) {
      state.highLight = info;
    },
    //相机视角
    setCameraInfo(state: State, info: string) {
      state.cameraInfo = info;
    },
    //场景天气设置
    setSceneWeather(state: State, info: string) {
      state.sceneWeather = info;
    },
    //场景时间设置
    setSceneTime(state: State, info: string) {
      state.sceneTime = info;
    },
  },
});
export default store;
