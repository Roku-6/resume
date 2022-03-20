import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      cards: []
    }
  },
  getters: {
  },
  mutations: {
    addCard: (state) => {
      state.cards.push(
        {
          name: '新規職務経歴書1',
          date: '',
          contents: {
            family_name: '',
            first_name: '',
            family_name_furigana: '',
            first_name_furigana: '',
            career_summary: '',
            about_myself: '',
            qualifications: [
              {
                acquisition_date: '',
                qualification_name: ''
              }
            ],
            experiences: [
              {
                start_date: '',
                end_date: '',
                occupation: '',
                tools: [],
                detail: {
                  environment: [],
                  job_description: ''
                }
              }
            ]
          }
        }
      )
    },
    addQualification: (state, num) => {
      state.cards[num].contents.qualifications.push(
        {
          acquisition_date: '',
          qualification_name: ''
        }
      )
    },
    addExperience: (state, num) => {
      state.cards[num].contents.experiences.push(
        {
          start_date: '',
          end_date: '',
          occupation: '',
          tools: [],
          detail: {
            environment: [],
            job_description: ''
          }
        }
      )
    },
    clearText: function (state) {
      state.cards.name = ''
    },
    save: function (state) {
      // Json文字列に変換しLocalStorageへ保存
      localStorage.setItem(('store'), JSON.stringify(state))
    },
    load: function (state) {
      if (localStorage.getItem('store')) {
        // LocalStorageから取得したJson文字列をパース
        const store = JSON.parse(localStorage.getItem('store'))
        // stateを置き換えます。
        this.replaceState(Object.assign(state, store))
      }
    }
  },
  actions: {
    doSave ({ commit }) {
      commit('save')
    },
    doLoad ({ commit }) {
      commit('load')
    }
  }
})

export default store
