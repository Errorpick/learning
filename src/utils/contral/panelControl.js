/*
 * @Author: yejinliang
 * @Date: 2022-05-27 00:24:38
 * @LastEditTime: 2022-05-27 02:16:59
 * @LastEditors: yejinliang
 * @Description: 3维标牌弹窗 vue扩展
 */
import Vue from 'vue';
import router from '../../router';
import store from '../../store';
import UEapis from '@/utils/UEapi/UEapi';

export default class panelControl {
  static domInstance = null;
  static create(domId, com, info, changjing2, type, opts = {}) {
    // 如果有实例了先销毁
    if (changjing2 != 1) {
      panelControl.destroy();
    }
    const instance = Vue.extend(com);
    panelControl.domInstance = new instance({
      ...opts,
      store,
      router
    }).$mount();
    panelControl.domType = type;
    panelControl.domInstance.$el.id = domId;
    panelControl.domInstance.$el.style.position = 'absolute';
    panelControl.domInstance.$el.style.left = '-9999999px';
    document.body.append(panelControl.domInstance.$el);
    // 请求数据 拿到数据之后给对应的props绑定
    // panelControl.domInstance.$props['rightList'||'listvalue'] = info.papanls;
    panelControl.domInstance.$props.info = info;
    // 监听组件$emit的事件
    panelControl.domInstance.$on('onClose', () => {
      if (changjing2 != 1) {
        UEapis.OverlayTip.removeOverLayTip();
        panelControl.destroy();
        if (panelControl.domType == 'model') {
          let modelTip = store.state.modelTip;

          window.appInstance.uniCall('removeModelTip', {
            modelTip
          });
          window.appInstance.uniCall('clearModelSelected', {});
        }
      }
    });
    return panelControl.domInstance.$el;
  }
  static destroy() {
    if (panelControl.domInstance) {
      panelControl.domInstance.$destroy && panelControl.domInstance.$destroy();
      panelControl.domInstance.$el &&
        panelControl.domInstance.$el.parentNode &&
        panelControl.domInstance.$el.parentNode.removeChild(
          panelControl.domInstance.$el
        );
    }
    panelControl.domInstance = null;
  }
}
