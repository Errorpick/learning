<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

//获取路由二级路由列表
const $router = useRouter();
defineProps(["navList"]);
//切换高亮
const getImage = (nav) => {
  //正在访问的二级主题
  const matchedRouteName = $router.currentRoute.value.matched[1].meta.cname;
  return `/src/assets/img/sub_nav/${
    nav.meta.cname === matchedRouteName
      ? nav.meta.cname + "_ac"
      : nav.meta.cname
  }.png`;
};
</script>
<template v-if="navList != []">
  <div class="nav-second">
    <router-link
      tag="div"
      v-for="nav in navList"
      :key="nav.name"
      :to="nav.path"
      class="nav-second-item"
      :class="nav.meta.cname == '联动指挥' ? 'noPro' : ''"
      exact-active-class="nav-second-item_ac"
    >
      <!-- @click.native="secondNavEvent(nav.meta.cname)" -->
      <div class="imgIcon">
        <img :src="getImage(nav)" alt />
      </div>
      <span>{{ nav.meta.cname }}</span>
    </router-link>
  </div>
</template>
<style lang="less" scoped>
.nav-second {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: url("../../assets/img/sub_nav/subNavBg.png") no-repeat bottom
    center;
  // background-size: 100% 100%;
  height: 91px;
  display: flex;
  justify-content: center;
  z-index: 10;
  align-items: flex-end;
  .noPro {
    pointer-events: none;
  }
  &-item {
    margin: 0 10px;
    width: 120px;
    height: 65px;
    display: flex;
    flex-direction: column;
    pointer-events: all;
    align-items: center;
    justify-content: space-between;
    .imgIcon {
      height: 30px;
      img {
        height: 30px;
      }
    }

    span {
      font-family: "碳纤维正中黑简体";
      font-size: 20px;
      line-height: 40px;
      background: linear-gradient(to bottom, #fff, #d5f7fd);
      -webkit-background-clip: text;
      color: transparent;
      text-shadow: 0px 0px 20px rgba(244, 149, 43, 0.2);
    }
  }
  &-item-NoEvent {
    margin: 0 10px;
    width: 120px;
    height: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    justify-content: space-between;
    .imgIcon {
      height: 30px;
      img {
        height: 30px;
      }
    }

    span {
      font-family: "碳纤维正中黑简体";
      font-size: 20px;
      line-height: 40px;
      background: linear-gradient(to bottom, #fff, #d5f7fd);
      -webkit-background-clip: text;
      color: transparent;
      text-shadow: 0px 0px 20px rgba(244, 149, 43, 0.2);
    }
  }
  &-item_ac {
    margin: 0 10px;
    width: 120px;
    height: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(../../assets/img/sub_nav/link_ac.png) no-repeat bottom
      center;
    .imgIcon {
      height: 30px;
      img {
        height: 30px;
      }
    }
    span {
      font-family: "碳纤维正中黑简体";
      font-size: 20px;
      line-height: 40px;
      background: linear-gradient(to bottom, #fff, #ffd353);
      -webkit-background-clip: text;
      color: transparent;
      text-shadow: 0px 0px 20px rgba(244, 149, 43, 0.2);
      display: inline-block;
    }
  }
}
</style>
