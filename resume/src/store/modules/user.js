import axios from 'axios'

export default {
  namespace: true,
  state () {
    return {
      profile: {
        user_id: '',
        user_name: '',
        user_kana: '',
        birth_date: '',
        gender: '',
        nearest: '',
        line: ''
      }
    }
  },
  getters: {
    getProfile: (state) => {
      return state.profile
    }
  },
  mutations: {
    setProfile: (state, profile) => {
      state.profile.user_id = profile.user_id
      state.profile.user_name = profile.user_name
      state.profile.user_kana = profile.user_kana
      state.profile.birth_date = profile.birth_date
      state.profile.gender = profile.gender
      state.profile.nearest = profile.nearest
      state.profile.line = profile.line
    },
    /* save: function (state) {
      // Json文字列に変換しLocalStorageへ保存
      localStorage.setItem(('user'), JSON.stringify(state))
    }, */
    load: function (state) {
      if (localStorage.getItem('user')) {
        // LocalStorageから取得したJson文字列をパース
        const user = JSON.parse(localStorage.getItem('user'))
        // stateを置き換えます。
        this.replaceState(Object.assign(state, user))
      }
    }
  },
  actions: {
    doSave (context) {
      return axios.put('http://localhost:8000/api/user/vue_laravel_api@example.com', context.state.profile)
        .then(response => {
          console.log(response)
          console.log(context.state.profile)
        })
      // commit('save')
    },
    getUserInfo: function ({ commit }) {
      return axios.get('http://localhost:8000/api/user/vue_laravel_api@example.com')
        .then(response => {
          commit('setProfile', response.data[0])
        })
    }
  }
}
