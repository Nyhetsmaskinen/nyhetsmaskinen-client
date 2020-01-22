import Vue from 'vue'
import Vuex from 'vuex'

//import { clone } from '@/utils'
//import scoopQuestion from './scoopQuestion'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    header: "",
    social: {},
    description: "",
    questions: [],
    time: 5*60,
    finished: false,
  },
  mutations: {
    setFinished (state, payload) {
      payload.scoop.finished = payload.finished;
    },
    setPoints (state, payload) {
      payload.scoop.points = payload.points;
    },
  },
  actions: {
  },
  getters: {
    getNCorrect: () => (scoop) => {
      return scoop.questions.filter(q => q.answerUser == q.answerCorrect).length;
    },
    calcPoints: (state,getters) => (scoop) => {
      return getters.getNCorrect(scoop) * scoop.time;
    },
  },
  modules: {
    //scoopQuestion
  }
}
