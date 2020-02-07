import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    text: "",
    answers: [],
    answerCorrect: 0,
    answerUser: -1
  },
  mutations: {
    answerQuestion(state, payload){
      payload.question.answerUser = payload.answer;
    },
  },
  actions: {
  },
  getters: {
    answered(state, payload){
      return payload.answerUser != -1;
    },
    /*isCorrectAnswer: (state) => (question) {
      return question.answerCorrect == answerUser
    },*/
  },
  modules: {
  }
}
