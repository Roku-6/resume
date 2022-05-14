import { v4 as uuid } from 'uuid'
import axios from 'axios'

export default {
  namespace: true,
  state () {
    return {
      resumes: []
    }
  },
  getters: {
    getResume: (state) => {
      return state.resumes
    }
  },
  mutations: {
    createNewResume: (state, profile) => {
      state.resumes = state.resumes.concat([
        {
          resume_id: uuid(),
          title: '新規職務経歴書25',
          update_date: '',
          contents: {
            user_name: profile.user_name,
            user_kana: profile.user_kana,
            birth_date: profile.birth_date,
            gender: profile.gender,
            nearest: profile.nearest,
            line: profile.line,
            job_summary: 'this is test. this is test.',
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
            skills: 'skill test',
            qualifications: [
              {
                id: uuid(),
                acquisition_date: '',
                qualification_name: ''
              }
            ],
            about_myself: 'self introduction'
          }
        }
      ])
    },
    setResumes: (state, resumes) => {
      for (const resume of resumes) {
        state.resumes = state.resumes.concat([
          {
            resume_id: resume.resume_id,
            title: resume.title,
            update_date: resume.updated_at,
            contents: {
              user_name: '',
              user_kana: '',
              birth_date: '',
              gender: '',
              nearest: '',
              line: '',
              job_summary: resume.job_summary,
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
              skills: resume.skills,
              qualifications: [
                {
                  id: uuid(),
                  acquisition_date: '',
                  qualification_name: ''
                }
              ],
              about_myself: resume.about_myself
            }
          }
        ])
      }
    },
    duplicateResume: (state, resumeId) => {
      for (let i = 0; i < state.resumes.length; i++) {
        if (state.resumes[i].resume_id === resumeId) {
          const copyCard = JSON.parse(JSON.stringify(state.resumes[i]))
          copyCard.id = uuid()
          copyCard.name += 'のコピー'
          state.resumes = state.resumes.concat([copyCard])
        }
      }
    },
    // カードのCRUDと資格、経歴コンポーネントに分けたほうが見やすい？
    addQualification: (state, resumeId) => {
      for (let i = 0; i < state.resumes.length; i++) {
        if (state.resumes[i].resume_id === resumeId) {
          state.resumes[i].contents.qualifications =
          state.resumes[i].contents.qualifications.concat([{
            id: uuid(),
            acquisition_date: '',
            qualification_name: ''
          }])
        }
      }
    },
    duplicateQualification: (state, { resumeId, qualificationId }) => {
      for (let i = 0; i < state.resumes.length; i++) {
        if (state.resumes[i].id === resumeId) {
          const qualifications = state.resumes[i].contents.qualifications
          for (let j = 0; j < qualifications.length; j++) {
            if (qualifications[j].id === qualificationId) {
              const copyQualification = JSON.parse(JSON.stringify(state.resumes[i].contents.qualifications[j]))
              copyQualification.id = uuid()
              state.resumes[i].contents.qualifications = qualifications.concat([copyQualification])
            }
          }
        }
      }
    },
    deleteQualification: (state, { resumeId, qualificationId }) => {
      for (let i = 0; i < state.resumes.length; i++) {
        if (state.resumes[i].id === resumeId) {
          const qualifications = state.resumes[i].contents.qualifications
          for (let j = 0; j < qualifications.length; j++) {
            if (qualifications[j].id === qualificationId) {
              state.resumes[i].contents.qualifications =
              qualifications.filter(qualification => qualification.id !== qualificationId)
            }
          }
        }
      }
    },
    addExperience: (state, resumeId) => {
      const resumes = state.resumes
      for (let i = 0; i < resumes.length; i++) {
        if (resumes[i].id === resumeId) {
          state.resumes[i].contents.experiences =
          state.resumes[i].contents.experiences.concat([{
            id: uuid(),
            dates: [],
            occupation: '',
            jobDescription: '',
            tools: ''
          }])
        }
      }
    },
    duplicateExperience: (state, { resumeId, experienceId }) => {
      for (let i = 0; i < state.resumes.length; i++) {
        if (state.resumes[i].id === resumeId) {
          const experiences = state.resumes[i].contents.experiences
          for (let j = 0; j < experiences.length; j++) {
            if (experiences[j].id === experienceId) {
              const copyExperience = JSON.parse(JSON.stringify(state.resumes[i].contents.experiences[j]))
              copyExperience.id = uuid()
              state.resumes[i].contents.experiences = experiences.concat([copyExperience])
            }
          }
        }
      }
    },
    deleteExperience: (state, { resumeId, experienceId }) => {
      for (let i = 0; i < state.resumes.length; i++) {
        if (state.resumes[i].id === resumeId) {
          const experiences = state.resumes[i].contents.experiences
          for (let j = 0; j < experiences.length; j++) {
            if (experiences[j].id === experienceId) {
              state.resumes[i].contents.experiences =
              experiences.filter(experience => experience.id !== experienceId)
            }
          }
        }
      }
    }
  },
  actions: {
    getResumes: function (context) {
      return axios.get('http://localhost:8000/api/resumes')
        .then(response => {
          context.state.resumes = []
          context.commit('setResumes', response.data)
        })
    },
    createResume (context) {
      const userProfile = context.getters.getProfile
      context.commit('createNewResume', userProfile)
      return axios.post('http://localhost:8000/api/resume', context.state.resumes[context.state.resumes.length - 1])
        .then(response => {
          console.log(response)
        })
    },
    saveResume (context, resumeId) {
      for (let i = 0; i < context.state.resumes.length; i++) {
        if (context.state.resumes[i].resume_id === resumeId) {
          return axios.put('http://localhost:8000/api/resume/' + context.state.resumes[i].resume_id, context.state.resumes[i])
            .then(response => {
              console.log(response)
            })
        }
      }
    },
    deleteResume (context, resumeId) {
      for (let i = 0; i < context.state.resumes.length; i++) {
        if (context.state.resumes[i].resume_id === resumeId) {
          return axios.delete('http://localhost:8000/api/resume/' + context.state.resumes[i].resume_id)
            .then(response => {
              console.log(response)
              context.dispatch('getResumes')
            })
        }
      }
    }
  }
}
