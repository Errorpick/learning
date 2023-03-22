import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
//首页
import Home from "@/views/Home/index.vue";
//数说历下
import NumerologyLiXia from "@/views/NumerologyLiXia/index.vue";
//城市运行
import CityOperation from "@/views/CityOperation/index.vue";
import SituationOverview from "@/views/CityOperation/SituationOverview.vue"; //态势总览
import GridManagement from "@/views/CityOperation/GridManagement.vue"; //网格管理
import DictionaryEvents from "@/views/CityOperation/DictionaryEvents.vue"; //事项辞典
import EventCoordination from "@/views/CityOperation/EventCoordination.vue"; //事件协同
import PublicOpinionInsight from "@/views/CityOperation/PublicOpinionInsight.vue"; //民意洞察
//联动指挥
import LinkageCommandHome from "@/views/LinkageCommand/index.vue";
import EarlyWarningMonitoring from "@/views/LinkageCommand/EarlyWarningMonitoring.vue"; //预警监测
import LinkageCommand from "@/views/LinkageCommand/LinkageCommand.vue"; //联动指挥
//经济运行
import EconomicOperation from "@/views/EconomicOperation/index.vue";
//民生服务
import PeopleService from "@/views/PeopleService/index.vue";
import ComprehensiveOverview from "@/views/PeopleService/ComprehensiveOverview.vue"; //综合概览
import MedicalService from "@/views/PeopleService/MedicalService.vue"; //医疗服务
import EducationalServices from "@/views/PeopleService/EducationalServices.vue"; //教育服务
import PensionServices from "@/views/PeopleService/PensionServices.vue"; //养老服务
import SocialSecurity from "@/views/PeopleService/SocialSecurity.vue"; //社会保障
import PopulationStructure from "@/views/PeopleService/PopulationStructure.vue"; //人口结构
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: {
      cname: "首页",
    },
    //每路守卫
    beforeEnter: (to, from) => {},
  },
  {
    path: "/NumerologyLiXia",
    component: NumerologyLiXia,
    name: "NumerologyLiXia",
    meta: {
      cname: "数说历下",
    },
  },
  {
    path: "/CityOperation",
    component: CityOperation,
    name: "CityOperation",
    redirect: "/CityOperation/SituationOverview",
    meta: {
      cname: "城市运行",
    },
    children: [
      {
        path: "/CityOperation/SituationOverview",
        name: "SituationOverview",
        component: SituationOverview,
        meta: {
          cname: "态势总览",
        },
      },
      {
        path: "/CityOperation/GridManagement",
        name: "GridManagement",
        component: GridManagement,
        meta: {
          cname: "网格管理",
        },
      },
      {
        path: "/CityOperation/DictionaryEvents",
        name: "DictionaryEvents",
        component: DictionaryEvents,
        meta: {
          cname: "事项辞典",
        },
      },
      {
        path: "/CityOperation/EventCoordination",
        name: "EventCoordination",
        component: EventCoordination,
        meta: {
          cname: "事件协同",
        },
      },
      {
        path: "/CityOperation/PublicOpinionInsight",
        name: "PublicOpinionInsight",
        component: PublicOpinionInsight,
        meta: {
          cname: "民意洞察",
        },
      },
    ],
  },
  {
    path: "/LinkageCommand",
    redirect: "/LinkageCommand/EarlyWarningMonitoring",
    component: LinkageCommandHome,
    name: "LinkageCommandHome",
    meta: {
      cname: "联动指挥",
    },
    children: [
      {
        path: "/LinkageCommand/EarlyWarningMonitoring",
        name: "EarlyWarningMonitoring",
        component: EarlyWarningMonitoring,
        meta: {
          cname: "预警监测",
        },
      },
      {
        path: "/LinkageCommand/LinkageCommand",
        name: "LinkageCommand",
        component: LinkageCommand,
        meta: {
          cname: "联动指挥",
        },
      },
    ],
  },
  {
    path: "/EconomicOperation",
    component: EconomicOperation,
    name: "EconomicOperation",
    meta: {
      cname: "经济运行",
    },
  },
  {
    path: "/PeopleService",
    redirect: "/PeopleService/ComprehensiveOverview",
    component: PeopleService,
    name: "PeopleService",
    meta: {
      cname: "民生服务",
    },
    children: [
      {
        path: "/PeopleService/ComprehensiveOverview",
        name: "ComprehensiveOverview",
        component: ComprehensiveOverview,
        meta: {
          cname: "综合概览",
        },
      },
      {
        path: "/PeopleService/MedicalService",
        name: "MedicalService",
        component: MedicalService,
        meta: {
          cname: "医疗服务",
        },
      },
      {
        path: "/PeopleService/EducationalServices",
        name: "EducationalServices",
        component: EducationalServices,
        meta: {
          cname: "教育服务",
        },
      },
      {
        path: "/PeopleService/PensionServices",
        name: "PensionServices",
        component: PensionServices,
        meta: {
          cname: "养老服务",
        },
      },
      {
        path: "/PeopleService/SocialSecurity",
        name: "SocialSecurity",
        component: SocialSecurity,
        meta: {
          cname: "社会保障",
        },
      },
      {
        path: "/PeopleService/PopulationStructure",
        name: "PopulationStructure",
        component: PopulationStructure,
        meta: {
          cname: "人口结构",
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
//路由守卫
router.beforeEach((to, from) => {});
export default router;
