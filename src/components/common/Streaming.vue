<script setup>
import { onMounted, onUnmounted } from "vue";
import UeApi from "@/utils/UEapi/UEapi";
onMounted(() => {
  const ue = new UeApi();
  ue.initUE();
});
onUnmounted(() => {
  window.appInstance.uniCall("destroy");
});
</script>
<template>
  <div class="streaming_box">
    <div id="container" class="ccontainer"></div>
  </div>
</template>

<style lang="less" scoped>
.streaming_box {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}
</style>
