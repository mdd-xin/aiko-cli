import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '../layout';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/login',
    // component: () => import('@views/user/login.vue'),
    component: () => import('@views/login/login.vue'),
  },
  {
    path: '/404',
    component: () => import('@views/error/404.vue'),
  },
  {
    path: '/',
    component: Layout,
    redirect: { name: 'home' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@views/home/index.vue'),
        meta: { icon: 'fa fa-list-alt', title: '首页', seq: false, fix: true },
      },
      {
        path: 'corp',
        name: 'corp',
        component: () => import('@views/corp/corp.vue'),
        meta: { icon: 'fa fa-list-alt', title: '厂商管理', seq: 1 },
      },
      {
        path: 'vuln',
        name: 'vuln',
        component: () => import('@views/vuln/vuln.vue'),
        meta: { icon: 'fa fa-bug', title: '指纹/漏洞', seq: 3 },
      },
      {
        path: 'tasklist',
        name: 'tasklist',
        component: () => import('@views/tasklist/tasklist.vue'),
        meta: { icon: 'fa fa-dashboard', title: '任务列表', seq: 4 },
      },
    ],
  },
  {
    path: '/property',
    component: Layout,
    redirect: { name: 'mainIp' },
    meta: { icon: 'fa fa-th-list', title: '资产管理', seq: 2 },
    children: [
      {
        path: 'mainip',
        name: 'mainIp',
        component: () => import('@views/property/mainip.vue'),
        meta: { icon: 'fa fa-meetup', title: '主域名', seq: 1 },
      },
      {
        path: 'childip',
        name: 'childip',
        component: () => import('@views/property/childip.vue'),
        meta: { icon: 'fa fa-globe', title: '子域名', seq: 2 },
      },
      {
        path: 'ip',
        name: 'ip',
        component: () => import('@views/property/ip.vue'),
        meta: { icon: 'fa fa-podcast', title: 'IP', seq: 3 },
      },
      {
        path: 'port',
        name: 'port',
        component: () => import('@views/property/port.vue'),
        meta: { icon: 'fa fa-support', title: '端口', seq: 4 },
      },
      {
        path: 'url',
        name: 'url',
        component: () => import('@views/property/url.vue'),
        meta: { icon: 'fa fa-link', title: 'URL', seq: 5 },
      },
    ],
  },
  {
    path: '/tool',
    component: Layout,
    redirect: { name: 'fofaQuery' },
    meta: { icon: 'fa fa-cube', title: '小工具', seq: 5 },
    children: [
      {
        path: 'fofaQuery',
        name: 'fofaQuery',
        component: () => import('@views/tool/fofaQuery.vue'),
        meta: { icon: 'fa fa-superpowers', title: 'FOFA查询', seq: 1 },
      },
      {
        path: 'ip',
        name: 'IP',
        component: () => import('@views/tool/ipLocation.vue'),
        meta: { icon: 'fa fa-location-arrow', title: 'IP归属地查询', seq: 2 },
      },

      {
        path: 'encoder',
        name: 'encoder',
        component: () => import('@views/tool/encoder.vue'),
        meta: { icon: 'fa fa-bold', title: '编码/解码', seq: 3 },
      },
      {
        path: 'assetsExtract',
        name: 'assetsExtract',
        component: () => import('@views/tool/assetsExtract.vue'),
        meta: { icon: 'fa fa-hand-o-right', title: '资产分炼', seq: 4 },
      },
      {
        path: 'shell',
        name: 'shell',
        component: () => import('@views/tool/shell.vue'),
        meta: { icon: 'fa fa-usd', title: '反弹Shell命令', seq: 5 },
      },
    ],
  },
  {
    path:'/table',
    component:Layout,
    meta: { icon: 'fa fa-th-list', title: '表格', seq: 5 },
    children:[
      {
        path:'dynamicTable',
        name:'dynamicTable·',
        component:()=>import('@views/table/dynamicTable.vue'),
        meta:{title:'动态表格',seq:1}
      },
      {
        path:'dragTable',
        name:'dragTable',
        component:()=>import('@views/table/dragTable.vue'),
        meta:{title:'拖拽表格',seq:2}
      },
      {
        path:'eidtTable',
        name:'eidtTable',
        component:()=>import('@views/table/eidtTable.vue'),
        meta:{title:'行内编辑',seq:3}
      },
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'modify/password',
        name: 'modifyPasswordView',
        component: () => import('@views/user/modifyPassword.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     const token = localStorage.token;
//     if (token) {
//       next(); // 执行下一步操作
//     } else {
//       next({
//         path: "/login", // 跳转到登录页面
//       });
//     }
//   } else {
//     next(); // 确保一定要调用 next()
//   }
// });
router.beforeEach((to, from, next) => {
  console.log('path', to.path);
  next();
});

export default router;
