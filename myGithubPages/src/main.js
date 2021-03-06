// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import http from 'axios'
import '../static/font_icon/iconfont.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http,
  template: '<App/>',
  components: { App }
})
