import { v4 as uuid } from 'uuid'

export default {
  namespace: true,
  state () {
    return {
      cards: []
    }
  },
  getters: {
    getCardInfo: (state) => {
      return state.cards
    }
  },
  mutations: {
    addCard: (state) => {
      console.log(uuid())
      state.cards = state.cards.concat([
        {
          id: uuid(),
          title: '新規職務経歴書1',
          update_date: '',
          contents: {
            user_id: '',
            user_name: '',
            user_kana: '',
            birth_date: '',
            gender: '',
            nearest: '',
            line: '',
            jobSummary: '',
            experiences: [
              {
                id: uuid(),
                startDate: '',
                endDate: '',
                occupation: '',
                jobDescription: '',
                tools: ''
              }
            ],
            skills: '',
            qualifications: [
              {
                id: uuid(),
                acquisition_date: '',
                qualification_name: ''
              }
            ],
            aboutMyself: ''
          }
        }
      ])
    },
    duplicateCard: (state, cardId) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === cardId) {
          const copyCard = JSON.parse(JSON.stringify(state.cards[i]))
          copyCard.id = uuid()
          copyCard.name += 'のコピー'
          state.cards = state.cards.concat([copyCard])
        }
      }
    },
    deleteCard: (state, cardId) => {
      state.cards = state.cards.filter(card => card.id !== cardId)
    },
    addQualification: (state, cardId) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === cardId) {
          state.cards[i].contents.qualifications =
          state.cards[i].contents.qualifications.concat([{
            id: uuid(),
            acquisition_date: '',
            qualification_name: ''
          }])
        }
      }
    },
    duplicateQualification: (state, { cardId, qualificationId }) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === cardId) {
          const qualifications = state.cards[i].contents.qualifications
          for (let j = 0; j < qualifications.length; j++) {
            if (qualifications[j].id === qualificationId) {
              const copyQualification = JSON.parse(JSON.stringify(state.cards[i].contents.qualifications[j]))
              copyQualification.id = uuid()
              state.cards[i].contents.qualifications = qualifications.concat([copyQualification])
            }
          }
        }
      }
    },
    deleteQualification: (state, { cardId, qualificationId }) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === cardId) {
          const qualifications = state.cards[i].contents.qualifications
          for (let j = 0; j < qualifications.length; j++) {
            if (qualifications[j].id === qualificationId) {
              state.cards[i].contents.qualifications =
              qualifications.filter(qualification => qualification.id !== qualificationId)
            }
          }
        }
      }
    },
    addExperience: (state, cardId) => {
      const cards = state.cards
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].id === cardId) {
          state.cards[i].contents.experiences =
          state.cards[i].contents.experiences.concat([{
            id: uuid(),
            dates: [],
            occupation: '',
            jobDescription: '',
            tools: ''
          }])
        }
      }
    },
    duplicateExperience: (state, { cardId, experienceId }) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === cardId) {
          const experiences = state.cards[i].contents.experiences
          for (let j = 0; j < experiences.length; j++) {
            if (experiences[j].id === experienceId) {
              const copyExperience = JSON.parse(JSON.stringify(state.cards[i].contents.experiences[j]))
              copyExperience.id = uuid()
              state.cards[i].contents.experiences = experiences.concat([copyExperience])
            }
          }
        }
      }
    },
    deleteExperience: (state, { cardId, experienceId }) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === cardId) {
          const experiences = state.cards[i].contents.experiences
          for (let j = 0; j < experiences.length; j++) {
            if (experiences[j].id === experienceId) {
              state.cards[i].contents.experiences =
              experiences.filter(experience => experience.id !== experienceId)
            }
          }
        }
      }
    }
  } /* ,
  actions: {
    doSave (context) {
      return axios.put('http://localhost:8000/api/', context.state.)
        .then(response => {
          console.log(response)
        })
    },
    getUserInfo: function ({ commit }) {
      return axios.get('http://localhost:8000/api/')
        .then(response => {
          commit('', response.data[0])
        })
    }
  } */
}
