import Vue from 'vue'
import Vuex from 'vuex'

import newsroom from './modules/newsroom'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsroom: newsroom,
  },
  mutations: {
  },
  actions: {
    addScript(undefined,payload) {
      if (document.getElementById(payload.id)){
        document.getElementById(payload.id).remove();
      }
      let script = document.createElement('script')
      script.id = payload.id;
      script.setAttribute('src', payload.src)
      document.head.appendChild(script)
    }
  },
  modules: {
    newsroom
  }
})
