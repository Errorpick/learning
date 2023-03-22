<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
//获取路由一级路由列表
const router = useRouter();
const navList = computed(() => {
  //一级路由去除导航页
  let filterHome: Array<{
    path: string;
    name: string;
  }> = router.options.routes.filter((nav) => {
    if (nav.meta.cname !== "首页") return nav;
  });
  return filterHome;
});
</script>
<template>
  <div class="nav">
    <router-link
      tag="div"
      v-for="nav in navList"
      :key="nav.name"
      :to="nav.path"
      class="menu_item"
      active-class="menu_item_ac"
    >
      <div class="txt">{{ nav.meta.cname }}</div>
    </router-link>
  </div>
</template>
<style lang="less" scoped>
.nav {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 1100px;
  height: 40px;
  display: flex;
  pointer-events: none;
  justify-content: space-between;
  .menu_item {
    font-family: "汉仪菱心体简";
    width: 160px;
    height: 50px;
    font-size: 26px;
    text-align: center;
    line-height: 38px;
    pointer-events: all;
    background: url(../../assets/img/layout/nav-bg.png) no-repeat center center;
    .txt {
      color: #dcfcfe;
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.75);
    }
  }
  .menu_item_ac {
    background: url(../../assets/img/layout/nav-bg-ac.png) no-repeat center
      center;
    .txt {
      color: #e1c276;
      text-shadow: none;
    }
  }
}
</style>
