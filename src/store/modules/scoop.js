import Vue from 'vue'
import Vuex from 'vuex'

//import { clone } from '@/utils'
//import scoopQuestion from './scoopQuestion'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    name: "",
    headerUser: "",
    rating: -1,
    ratingUser: -1,
    social: {},
    description: "",
    questions: [],
    info: {},
    timeLimit: 5*60,
    time: 0,
    finished: false,
  },
  mutations: {
    setHeaderUser (state, payload) {
      payload.scoop.headerUser = payload.header;
    },
    setRatingUser (state, payload) {
      payload.scoop.ratingUser = payload.rating;
    },
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
    getTimeRemaining: () => (scoop) => {
      return scoop.timeLimit - scoop.time
    },
    getPTime: (state,getters) => (scoop) => {
      return 5*getters.getTimeRemaining(scoop)
    },
    getNCorrect: () => (scoop) => {
      return scoop.questions.filter(q => q.answerUser == q.answerCorrect).length;
    },
    getPCorrect: (state,getters) => (scoop) => {
      return getters.getNCorrect(scoop);
    },
    getCommentCorrect: (state,getters) => (scoop) => {
      let str = "Wow, väldigt bra granskat!"
      let n = getters.getNCorrect(scoop)
      if(n == 3){
        str = "Bra granskat."
      }
      else if(n == 2){
        str = "Ok granskat, men jag tror ni kan bättre."
      }
      else if(n == 1){
        str = "Försök att granska nyheterna nogrannare."
      }
      else if(n == 0){
        str = "Ajdå, ni behöver granska nyheterna bättre."
      }
      return str;
    },
    getCorrectRating: () => (scoop) => {
      return scoop.rating == scoop.ratingUser
    },
    getDRating: () => (scoop) => {
      return Math.abs(scoop.ratingUser - scoop.rating)
    },
    getPRating: (state,getters) => (scoop) => {
      return 500-250*getters.getDRating(scoop);
    },
    getCommentRating: (state,getters) => (scoop) => {
      let str = "Bra bedömning!"
      let d = getters.getDRating(scoop)
      if(d >= 2){
        str = "Ajdå, det var inte helt rätt bedömt."
      }
      else if(d == 1){
        str = "Ganska bra bedömning, tycker jag."
      }
      return str;
    },
    getCommentHeader: () => () => {
      let strs = ["Intressant!", "Det blir bra!", "Spännande!", "Fint!", "Bra vinkling!"]
      return strs[Math.floor(Math.random()*strs.length)];
    },
    calcPoints: (state,getters) => (scoop) => {
      return getters.getPCorrect(scoop) * getters.getPTime(scoop) + getters.getPRating(scoop)
    },
  },
  modules: {
    //scoopQuestion
  }
}
