<template>
  <v-card flat relative>
    <v-row>
      <v-col cols="2">
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-left="100"
          transition="scale-transition" offset-x min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field outlined hide-details v-model="date" label="開始年月" readonly v-bind="attrs" v-on="on" class="mb-4" color="#A0A0A0"></v-text-field>
          </template>
          <v-date-picker no-title v-model="date" @input="menu = false"></v-date-picker>
        </v-menu>
        <p style="text-align: center; color: #a0a0a0;" class="mb-4">|</p>
        <v-menu v-model="menu2" :close-on-content-click="false" :nudge-left="100"
          transition="scale-transition" offset-x min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field outlined hide-details v-model="date2" label="終了年月" readonly v-bind="attrs" v-on="on" color="#A0A0A0"></v-text-field>
          </template>
          <v-date-picker no-title v-model="date2" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="3">
          <v-textarea hide-details height="516px" no-resize v-model='selfInfo.occupation' label="職種" color="#A0A0A0" outlined>
          </v-textarea>
      </v-col>
      <v-col cols="4">
          <v-textarea hide-details height="516px" no-resize v-model='selfInfo.jobDescription' label="業務内容" color="#A0A0A0" outlined>
          </v-textarea>
      </v-col>
      <v-col cols="3">
          <v-textarea hide-details height="516px" no-resize v-model='selfInfo.tools' label="使用ツール等" color="#A0A0A0" outlined>
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
      date: '',
      date2: '',
      menu: false,
      menu2: false,
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
