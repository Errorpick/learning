<script setup lang="ts">
import Time from "@/utils/common/time";
import { ref, onMounted, onUnmounted } from "vue";
let timer: string = ref("");
let now: string = ref("");
let day: string = ref("");
let time: string = ref("");
let week: string = ref("");
function initDay() {
  now = new Date();
  week.value = Time.getWeek(now);
  day.value = Time.format("yyyy/MM/dd", now);
  time.value = Time.format("HH:mm:ss", now);
}
onMounted(() => {
  initDay();
  timer = setInterval(() => {
    initDay();
  }, 1000);
});

function WeatherTemplate() {
  console.log("显示天气组件");
}
onUnmounted(() => {
  timer?.clearInterval(timer);
});
</script>
<template>
  <div class="clock" @click="WeatherTemplate">
    <div class="lefttime">{{ time }}</div>
    <div class="date">
      <div class="day">{{ day }}</div>
      <div class="week">{{ week }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.clock {
  width: 220px;
  height: 40px;
  display: flex;
  pointer-events: all;
  position: absolute;
  right: 40px;
  top: 20px;
  .lefttime {
    width: 140px;
    font-family: "Voltage";
    font-size: 48px;
    color: #e9e9e9;
    letter-spacing: 3px;
  }
  .date {
    width: 80px;
    .day {
      font-family: "Voltage";
      font-size: 24px;
      color: #13bfff;
      line-height: 24px;
    }
    .week {
      font-family: "碳纤维正中黑简体";
      font-size: 18px;
      line-height: 24px;
      color: #bff252;
    }
  }
}
</style>
