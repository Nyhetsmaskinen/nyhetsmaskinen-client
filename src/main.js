import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//const WebSocket = require('ws');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //WebSocket,
  render: h => h(App)
}).$mount('#app')
