import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import io from 'socket.io-client'
import { addScript } from '@/utils'
import { scripts } from '@/scripts.json'

Vue.config.productionTip = false

//Load external scripts based on environment
scripts[process.env.NODE_ENV].forEach((s) => {
  addScript(s);
});

Vue.prototype.$socket = io(process.env.VUE_APP_WS_SERVER)



new Vue({
  router,
  store,
  //WebSocket,
  render: h => h(App)
}).$mount('#app')
