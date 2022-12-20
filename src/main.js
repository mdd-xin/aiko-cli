import Vue from 'vue'
import App from './App.vue'
import router from '@router'
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 自定义element样式
import '@styles/element-variables.scss'

import '@styles/index.scss'

import result from '@utils/takemenu.js'

// font awesome
import 'font-awesome/css/font-awesome.min.css';

// 将菜单挂载到vue原型
Vue.prototype.$menu=result;

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => {
    console.log(App);
    return h(App);
  },
}).$mount('#app')
