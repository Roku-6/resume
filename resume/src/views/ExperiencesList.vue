<template>
  <v-card flat relative>
    <v-row no-gutters>
      <v-col cols="2">
        <v-menu v-model="menu" :close-on-content-click="closeOnContentClick">
          <template v-slot:activator="{ on, attrs }">
            <v-textarea auto-grow  hide-details label="年月" v-model="text" v-bind="attrs" v-on="on" readonly clearable outlined>
            </v-textarea>
          </template>
          <v-date-picker v-model="picker" range @input="formatDate(picker)">
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="3">
          <v-textarea auto-grow  hide-details v-model='selfInfo.occupation' label="職種" color="#A0A0A0" outlined>
          </v-textarea>
      </v-col>
      <v-col cols="4">
          <v-textarea auto-grow  hide-details v-model='selfInfo.jobDescription' label="業務内容" color="#A0A0A0" outlined>
          </v-textarea>
      </v-col>
      <v-col cols="3">
          <v-textarea auto-grow  hide-details v-model='selfInfo.tools' label="使用ツール等" color="#A0A0A0" outlined>
          </v-textarea>
      </v-col>
    </v-row>
    <v-btn icon @click.stop="duplicateExperience" absolute top style="right: 48px;">
      <v-icon>mdi-content-copy</v-icon>
    </v-btn>
    <v-btn icon @click.stop="deleteExperience" absolute right top>
      <v-icon>mdi-delete-outline</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'ExperiencesList',
  props: {
    card: Object,
    experience: Object
  },
  data () {
    return {
      dates: [],
      menu: '',
      text: '',
      picker: '',
      closeOnContentClick: false,
      parentInfo: this.card,
      selfInfo: this.experience
    }
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' - ')
    }
  },
  methods: {
    formatDate (dates) {
      if (!dates) return null
      console.log(dates[0] + '\n|\n' + dates[1])
      /* dates.map(function(value) {
        const [year, month, day] = value.split('-')
        return `${year}/${month}/${day}`
      } */
      // this.text = date(0) + \n + '|' + \n + date(1)
      // this.menu = false
    },
    duplicateExperience: function () {
      const parentId = this.parentInfo.id
      const selfId = this.selfInfo.id
      this.$store.commit('duplicateExperience', { cardId: parentId, experienceId: selfId })
    },
    deleteExperience: function () {
      const parentId = this.parentInfo.id
      const selfId = this.selfInfo.id
      this.$store.commit('deleteExperience', { cardId: parentId, experienceId: selfId })
    }
  }
}
</script>
