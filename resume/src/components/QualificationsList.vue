<template>
  <v-card flat relative>
    <v-row no-gutters>
      <v-col cols="4">
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-left="100"
          transition="scale-transition" offset-x min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field height="96px" hide-details v-model="date" label="取得年月" readonly v-bind="attrs" v-on="on" color="#A0A0A0" outlined></v-text-field>
          </template>
          <v-date-picker no-title v-model="date" @input="menu = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="8">
        <v-textarea height="96px" hide-details no-resize v-model='selfInfo.qualification_name' label="資格名" color="#A0A0A0" outlined>
        </v-textarea>
      </v-col>
    </v-row>
    <v-btn icon @click.stop="duplicateQualification" absolute top style="right: 48px;">
      <v-icon>mdi-content-copy</v-icon>
    </v-btn>
    <v-btn icon @click.stop="deleteQualification" absolute right top>
      <v-icon>mdi-delete-outline</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'QualificationsList',
  data () {
    return {
      date: '',
      menu: false,
      parentInfo: this.card,
      selfInfo: this.qualification
    }
  },
  props: {
    card: Object,
    qualification: Object
  },
  methods: {
    duplicateQualification: function () {
      const parentId = this.parentInfo.id
      const selfId = this.selfInfo.id
      this.$store.commit('duplicateQualification', { cardId: parentId, qualificationId: selfId })
    },
    deleteQualification: function () {
      const parentId = this.parentInfo.id
      const selfId = this.selfInfo.id
      this.$store.commit('deleteQualification', { cardId: parentId, qualificationId: selfId })
    }
  }
}
</script>
