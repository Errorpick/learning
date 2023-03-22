<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Nav from "@/components/common/Nav.vue"; //一级导航
import NavSecond from "@/components/common/NavSecond.vue"; //二级导航
import Clock from "@/components/common/Clock.vue"; //一级导航
import Streaming from "@/components/common/Streaming.vue"; //ue场景
import UEapi from "@/utils/UEapi/UEapi";
import CameraList from "@/utils/configs/cameraList";
import Camera from "@/utils/UEapi/Camera";
import AllLayerConfig from "@/utils/configs/AllLayerConfig";

import Scene from "@/utils/common/Scene";
//系统根据本地分辨率按比例缩放
const scale = ref(1);
function setScreen() {
  let visibleWidth = window.innerWidth;
  let visibleHeight = window.innerHeight;
  var widthPercentage = (1.0 * visibleWidth) / 3840;
  var heightPercentage = (1.0 * visibleHeight) / 1080;
  scale.value = Math.min(widthPercentage, heightPercentage);
}
onMounted(() => {
  setScreen();
  window.addEventListener("resize", setScreen.bind(this));
});
//主题名称 更新主题状态
const $route = useRouter();
const $store = useStore();
const topic = computed(() => {
  $store.commit("setTopic", $route.currentRoute.value.meta.cname);
  return $store.state.topic;
});
//二级导航列表
const NavSecondList = computed(() => {
  return $route.currentRoute.value.matched[0]?.children ?? [];
});

// 图层初始化逻辑，专题，关卡，heigHeight改变，都会触发此方法
function appStart(val) {
  // 获取当前专题/highLight中的配置
  let {
    sceneName,
    cameraName,
    sceneWeather,
    sceneTime,
    legends,
    legendConfig,
  } = window.layerContral.cardName[val];
  if (!$store.state.appinstance) {
    return;
  }
  // 不同场景
  if ($store.state.sceneName != sceneName && sceneName) {
    // 切换场景，等到场景切换成功再操作图层
    UEapi.Common.switchScene(sceneName);
    // 清除所有轨迹图
    window.layerContral.clearTrailLayer();
  } else {
    // 相同场景
    // 当前专题图例配置
    let layerObj = setLegends(legends, legendConfig);
    // 设置相机
    cameraName && $store.commit("setCameraInfo", cameraName);
    // 设置天气
    sceneWeather && $store.commit("setSceneWeather", sceneWeather);
    // 设置时间
    sceneTime && $store.commit("setSceneTime", sceneTime);
    // 根据图例，得到需要操作的图层
    let layers = legendsToLayers(legends, layerObj);
    // 添加图层
    window.layerContral.addCardLayers(layers);
  }
}
// 根据配置，从所有图例中组合出图例列表
function setLegends(legends, legendConfig) {
  // 读取图例
  let allLegends =
    window.layerContral.legends[legendConfig || $store.state.sceneName];
  let showLegends = []; // 图例可控
  let hideLegneds = []; // 图例不可控
  // 得到图例控制的图层和非图例控制的图层
  for (const key in allLegends) {
    let legend = allLegends[key];
    if (legend.showLegend) {
      legend.checked = false;
      showLegends.push(legend);
    } else {
      legend.checked = false;
      hideLegneds.push(legend);
    }
  }
  legends.forEach((item) => {
    showLegends.forEach((legend) => {
      if (item == legend.txt) {
        legend.checked = true;
      }
    });
  });
  return {
    topicLegends: showLegends,
    hideLegneds: hideLegneds,
  };
}
// 根据当前图例，查找对应要显示的图层
function legendsToLayers(legends, layerObj) {
  console.log(legends);
  let layers = [];
  legends.forEach((layer) => {
    // 图例可以控制的图层
    layerObj.topicLegends.forEach((legend) => {
      if (legend.txt == layer) {
        layers.push(...legend.layers);
      }
    });
    // 不显示图例的图层
    layerObj.hideLegneds.forEach((legend) => {
      if (legend.txt == layer) {
        layers.push(...legend.layers);
      }
    });
  });

  return layers;
}
//切换场景 切换卡片 刷新图层
const highLight = computed(() => {
  return $store.state.highLight;
});
watch(highLight, (newV) => {
  window.layerContral = AllLayerConfig[$route.currentRoute.value.name];
  if ($store.state.appinstance) {
    appStart(newV);
  }
});
//切换相机
const cameraList = new CameraList();
const cameraInfo = computed(() => {
  return $store.state.cameraInfo;
});
watch(cameraInfo, (newV) => {
  Camera.setCamera(cameraList[newV]);
});
//切换场景时间
const sceneTime = computed(() => {
  return $store.state.sceneTime;
});
watch(sceneTime, (newV) => {
  window.appInstance.uniCall(
    "setEnvTime",
    {
      envTime: newV,
      duration: 2,
    },
    (result) => {
      console.log("设置时间", newV, result);
    }
  );
});
//切换场景天气
const sceneWeather = computed(() => {
  return $store.state.sceneWeather;
});
watch(sceneWeather, (newV) => {
  window.appInstance.uniCall(
    "setEnvWeather",
    {
      envWeather: newV,
    },
    (result) => {
      console.log("设置天气", newV, result);
    }
  );
});
</script>

<template>
  <div
    class="gis-container"
    :style="{
      transform:
        'translateX(-50%) translateY(-50%) translateZ(0) scale(' + scale + ')',
    }"
  >
    <Streaming></Streaming>
  </div>
  <div
    class="screen"
    :style="{
      transform:
        'translateX(-50%) translateY(-50%) translateZ(0) scale(' + scale + ')',
    }"
  >
    <div class="header">
      <div class="header_text">
        <img src="./assets/img/layout/headerIcon.png" alt="" />
        {{ topic }}
      </div>
      <Nav></Nav>
      <Clock></Clock>
    </div>
    <NavSecond :navList="NavSecondList" v-if="NavSecondList.length > 0" />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
  <div
    id="layer-container"
    class="layer-container"
    :style="{
      transform:
        'translateX(-50%) translateY(-50%) translateZ(0) scale(' + scale + ')',
    }"
  ></div>
</template>

<style lang="less">
@appWidht: 3840px;
@appHeight: 1080px;
#app {
  user-select: none;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  pointer-events: all;
}

.gis-container {
  background-color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  width: @appWidht;
  height: @appHeight;
}
.screen {
  position: absolute;
  background: url(./assets/img/layout/mask.png) no-repeat center center;
  left: 50%;
  top: 50%;
  z-index: 2;
  width: @appWidht;
  height: @appHeight;
  pointer-events: none;
  overflow: hidden;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140px;
    overflow: hidden;
    pointer-events: none;
    z-index: 10;
    background-position: top center;
    background-repeat: no-repeat;
    background-image: url(./assets/img/layout/header_bg.png);
    .header_text {
      width: 230px;
      font-family: "汉仪菱心体简";
      font-size: 34px;
      background: repeating-linear-gradient(to bottom, #fff, #8dedf8);
      -webkit-background-clip: text;
      color: transparent;
      pointer-events: all;
      line-height: 93px;
      text-indent: 83px;
      img {
        position: absolute;
        left: 34px;
        top: 25px;
      }
    }
  }
  .main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: @appHeight;
    pointer-events: none;
    z-index: 101;
  }
}
.layer-container {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  width: @appWidht;
  height: @appHeight;
  pointer-events: none;
  overflow: hidden;
}
</style>
