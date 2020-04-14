// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import Vuex from 'vuex'
import store from './stores'
import './assets/css/index.css'


Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
axios.defaults.baseURL='https://musicapi.citrons.cn/'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
