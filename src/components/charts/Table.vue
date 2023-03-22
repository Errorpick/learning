<template>
  <div class="table">
    <ul
      :class="Type == 0 ? 'FJ_GZZDYJLB_Nav' : 'FJ_GZZDYJLB_Nav_Type2'"
      :style="{ height: TableStyle.NavHeight, width: TableStyle.TableWidth }"
    >
      <li
        v-for="(item, index) of NavData"
        :key="index"
        :style="{
          lineHeight: TableStyle.NavlineHeight,
          marginTop: TableStyle.NavTop,
        }"
      >
        <div :style="{ width: TableStyle.TableHeaderWidth[index] }">
          {{ item }}
        </div>
      </li>
    </ul>
    <div
      :style="{ width: TableStyle.TableWidth }"
      :class="
        Type == 0
          ? 'swiper_wraper FJ_GZZDYJLB_Content'
          : 'swiper_wraper FJ_GZZDYJLB_Content_Type2'
      "
      @mouseenter="enterSwiper"
      @mouseleave="leaveSwiper"
    >
      <swiper
        v-if="Data.length > 1"
        class="wrap"
        ref="mySwiper"
        :style="{ width: TableStyle.TableWidth }"
        :options="swiperOptions"
        :auto-update="false"
        :auto-destroy="false"
        :delete-instance-on-destroy="false"
        :cleanup-styles-on-destroy="false"
      >
        <swiperSlide
          class="swipe_inner"
          v-for="(item, index) of Data"
          :key="index"
        >
          <div :style="{ width: TableStyle.TableHeaderWidth[0] }">
            {{ item.first }}
          </div>
          <div :style="{ width: TableStyle.TableHeaderWidth[1] }">
            {{ item.second }}
          </div>
          <div :style="{ width: TableStyle.TableHeaderWidth[2] }">
            {{ item.third }}
          </div>
          <div :style="{ width: TableStyle.TableHeaderWidth[3] }">
            {{ item.fourth }}
          </div>
        </swiperSlide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
let vm = null;
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    Type: {
      type: Number,
      default: 0,
    },
    HeaderTitle: {
      type: String,
      default: '',
    },
    NavData: {
      type: Array,
      default: () => {
        return ['编号', '时间', '详情', '办结情况'];
      },
    },
    TableStyle: {
      type: Object,
      default: () => {
        return {
          TableWidth: '619px',
          NavHeight: '40px',
          NavlineHeight: '40px',
          NavTop: '0px',
        };
      },
    },
    Data: {
      type: Array,
      default: () => {
        return [
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
          {
            id: 'B12322',
            time: '2021-6-10',
            content: '安防告警事件',
            status: '已处理',
          },
        ];
      },
    },
  },
  data() {
    return {
      // 轮播图配置
      swiperOptions: {
        direction: 'vertical',
        initialSlide: 0,
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        on: {
          click: function () {
            // 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
            // console.log(this); // -> Swiper
            // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
            let index = this.clickedIndex - vm.Data.length;
            vm.handleClickSlide(index);
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  created() {
    vm = this;
  },
  methods: {
    enterSwiper() {
      this.swiper.autoplay.stop();
    },
    leaveSwiper() {
      this.swiper.autoplay.start();
    },
    handleClickSlide(index) {
      // console.log('当前点击索引：', index);
      this.$emit('clickItem', index);
    },
  },
};
</script>

<style lang="less" scoped>
.table {
  // width: 619px;
  .FJ_GZZDYJLB_Nav {
    width: 619px;
    height: 42px;
    display: flex;
    background: rgba(77, 121, 255, 0.3);
    box-sizing: border-box;
    li {
      height: 42px;
      line-height: 42px;
      font-size: 20px;
      background: linear-gradient(to bottom, #fff, #d5f7fd);
      -webkit-background-clip: text;
      color: transparent;
      text-align: center;
      font-family: '微软雅黑';
    }
  }
  .FJ_GZZDYJLB_Nav_Type2 {
    width: 619px;
    height: 42px;
    display: flex;
    // background: url('../../assets/img/ZhongHeTaiShi/table-title.png') no-repeat;
    box-sizing: border-box;
    li {
      height: 42px;
      line-height: 42px;
      font-size: 20px;
      color: #ffe69d;
      text-align: center;
      font-family: '微软雅黑';
    }
  }
  .tableheader {
    width: 100px;
    height: 40px;
    background: #032a41;
    img {
      width: 34px;
      height: 34px;
      padding-top: 5px;
      padding-left: 10px;
    }
    span {
      color: #ffffff;
      font-size: 24px;
      line-height: 40px;
      padding-left: 10px;
    }
  }

  .FJ_GZZDYJLB_Content {
    width: 619px;
    height: 280px;
    .wrap {
      height: 280px;
      overflow-y: scroll;
    }
    .swipe_inner {
      height: 40px !important;
      line-height: 40px;
      width: 1082px;
      box-sizing: border-box;
      background: #104070;
      font-size: 20px;
      color: #bfebff;
      font-family: '微软雅黑';
      display: flex;
      text-align: center;
      box-sizing: border-box;
      &:nth-child(odd) {
        background: #283a4a;
      }
      &:nth-child(even) {
        background: #0d2032;
      }
    }
  }
  .FJ_GZZDYJLB_Content_Type2 {
    width: 619px;
    height: 280px;
    .wrap {
      height: 280px;
      overflow-y: scroll;
    }
    .swipe_inner {
      height: 40px !important;
      line-height: 40px;
      width: 1082px;
      box-sizing: border-box;
      background: #104070;
      font-size: 20px;
      color: #bfebff;
      font-family: '微软雅黑';
      display: flex;
      text-align: center;
      box-sizing: border-box;
      margin: 6px 0;
      // background: url('../../assets/img/ZhongHeTaiShi/ltem-bg.png') no-repeat;
    }
  }
}
</style>
