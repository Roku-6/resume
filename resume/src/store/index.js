import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      nav_lists: [
        {
          name: 'Getting Started',
          icon: 'mdi-speedometer',
          lists: [{
            name: 'Quick Start',
            link: '/quick-start'
          },
          {
            name: 'Pre-made layouts',
            link: '/pre-made-layouts'
          }
          ]
        },
        {
          name: 'Customization',
          icon: 'mdi-cogs'
        },
        {
          name: 'Styles & animations',
          icon: 'mdi-palette',
          lists: [{
            name: 'Colors',
            link: '/Colors'
          },
          {
            name: 'Content',
            link: '/Content'
          },
          {
            name: 'Display',
            link: '/Display'
          }]
        },
        {
          name: 'UI Components',
          icon: 'mdi-view-dashboard',
          lists: [{
            name: 'API explorer',
            link: '/API explorer'
          },
          {
            name: 'Alerts',
            link: '/Alerts'
          }]
        },
        {
          name: 'Directives',
          icon: 'mdi-function'
        },
        {
          name: 'Preminum themes',
          icon: 'mdi-vuetify'
        }
      ],
      supports: [
        { name: 'Consulting and suppourt', icon: 'mdi-vuetify', link: '/consulting-and-support' },
        { name: 'Discord community', icon: 'mdi-discord', link: '/discord-community' },
        { name: 'Report a bug', icon: 'mdi-bug', link: '/report-a-bug' },
        { name: 'Github issue board', icon: 'mdi-github', link: '/guthub-issue-board' },
        { name: 'Stack overview', icon: 'mdi-stack-overflow', link: '/stack-overview' }
      ],
      cards: []
    }
  },
  getters: {
  },
  mutations: {
    addCard: (state, title) => {
      state.cards.push(
        {
          name: title,
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
    }
  },
  modules: {
  }
})
