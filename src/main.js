// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './components/tools/global'//引用文件  
import qs from 'qs'


import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.qs = qs
Vue.prototype.GLOBAL = global
Vue.config.productionTip = false

import '!style-loader!css-loader!less-loader!./style/plugins/global.css'
import '!style-loader!css-loader!less-loader!./style/libs/iconfont/iconfont.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
