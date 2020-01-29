import Vue from 'vue'
import Vuex from 'vuex'

import newsroom from './modules/newsroom'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsroom: newsroom,
    players: [],
    highscore: {}
  },
  mutations: {
    playersUpdate (state,payload) {
      state.players = payload.players
    },
    highscoreUpdate (state,payload) {
      state.highscore = payload.highscore
    },
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
  getters: {
    getPlayer: (state) => {
      return state.players.filter(player => player.id == Vue.prototype.$socket.id)[0]
    },
    getCompetitors: (state) => {
      return state.players.filter(player => player.id != Vue.prototype.$socket.id)
    },
    getPlayersFinished: (state) => {
      return state.players.filter(player => player.score.score != undefined).sort(function(a, b) {
        return b.score.score - a.score.score;
      })
    },
    getPlayersNotFinished: (state) => {
      return state.players.filter(player => player.score.score == undefined)
    },
  },
  modules: {
    newsroom
  }
})
