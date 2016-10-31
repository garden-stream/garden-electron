import Vue from 'vue'
import Vuex from 'vuex'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Vuex)
Vue.use(Router)
Vue.config.debug = true
Vue.http.options.root = '//garden-api.herokuapp.com/api'

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects
  console.log('going to:', to)
  next()
})

const store = new Vuex.Store({
  state: {
    token: '',
    user: {},
    isAuthenticated: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setIsAuthenticated (state, toggle) {
      state.isAuthenticated = toggle
    },
    setUser (state, user) {
      state.user = user
    }
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')
