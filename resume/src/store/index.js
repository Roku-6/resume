import Vue from 'vue'
import Vuex from 'vuex'
import { user, resumes } from './modules/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    resumes
  }
})

export default store
