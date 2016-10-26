import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

import 'material-design-lite/dist/material.light_green-green.min.css'
import 'material-design-lite/material.min.js'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true
Vue.http.options.root = '//garden-api.herokuapp.com/api'

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
