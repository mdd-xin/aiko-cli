import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/mddHome.vue') },
  { path: '/about', component: () => import('../views/mddHome.vue') },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
