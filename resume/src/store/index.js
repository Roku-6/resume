import Vue from 'vue'
import Vuex from 'vuex'
import { user, cards } from './modules/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    cards
  }
})

export default store
