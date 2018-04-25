// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import  VueResource  from 'vue-resource'
//Vue.use(VueResource) 
//Vue.http.options.emulateJSON = true   //Web服务器无法处理编码为application/json的请求，可以启用emulateJSON选项。请求会以application/x-www-form-urlencoded作为MIME type，就像普通的HTML表单一样。

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

import '!style-loader!css-loader!less-loader!./style/global.css' //es6引入全局css
//require('!style-loader!css-loader!less-loader!./style/global.css') //es5引入全局css


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
