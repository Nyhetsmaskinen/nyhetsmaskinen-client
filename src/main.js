import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import io from 'socket.io-client'
//const WebSocket = require('ws');

Vue.config.productionTip = false

//Vue.prototype.$io = io
//Vue.prototype.$socket = io('ws://localhost:3000')
Vue.prototype.$socket = io('wss://dramafabriken.herokuapp.com')

new Vue({
  router,
  store,
  //WebSocket,
  render: h => h(App)
}).$mount('#app')
