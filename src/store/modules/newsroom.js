import Vue from 'vue'
import Vuex from 'vuex'

import { clone } from '@/utils'
import scoop from './scoop'
import scoopQuestion from './scoopQuestion'

import scoops from '@/assets/scoops/scoops.json'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    name: "",
    scoops: [],
    step: 0,
    boss: "👩🏽‍💼",
    finished: false
  },
  mutations: {
    resetNewsroom (state) {
      state.name = ""
    },
    resetScoops (state) {
      state.scoops = []
      state.step = -1
      state.finished = 0;
    },
    setFinished (state, payload) {
      state.finished = payload.finished;
    },
    randomizeBoss(state) {
      let bosses = ["👩🏼‍💼","👩🏻‍💼","👩🏽‍💼","👩🏾‍💼","👩🏿‍💼","👨🏼‍💼","👨🏻‍💼","👨🏽‍💼","👨🏾‍💼","👨🏿‍💼"]
      state.boss = bosses[Math.floor(Math.random() * bosses.length)]
    },
    addScoop(state,payload){
        state.scoops.push(payload.scoop);
    },
    setName (state, payload) {
      state.name = payload.name;
    },
    nextStep (state) {
      state.step++;
    },
    setStep (state, payload) {
      state.step = payload.step;
    },
  },
  actions: {
    init({commit}) {
      commit('randomizeBoss')
    },
    initNewsroom({commit}) {
      commit('resetNewsroom')
    },
    initScoops({commit,dispatch}) {
      commit('resetScoops')
      scoops.scoops.forEach((s) => {
        dispatch('initScoop',{scoop:s})
      });
    },
    initScoop({commit}, payload) {
      let s = payload.scoop
      let sNew = clone(scoop.state);
      sNew.name = s.name;
      sNew.description = s.description;
      sNew.social = s.social;
      sNew.time = s.time;

      let questions = []
      s.questions.forEach((q) => {
        let qNew = clone(scoopQuestion.state);
        qNew.text = q.text;
        qNew.answers = q.answers;
        qNew.answerCorrect = q.answerCorrect;
        questions.push(qNew);
      })
      sNew.questions = questions;

      commit('addScoop',{scoop: sNew});
    },
    setName({commit}, payload) {
      //Future database stuff
      commit('setName',payload)
    },
  },
  getters: {
    getName: (state) => {
      return state.name;
    },
    calcPoints: (state, getters) => {
      let points = 0;
      state.scoops.forEach((s) => {
        points += getters["scoop/calcPoints"](s);
      })
      return points
    },
  },
  modules: {
    scoop
  }
}
