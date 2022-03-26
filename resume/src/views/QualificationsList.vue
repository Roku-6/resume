<template>
  <v-card flat relative>
    <v-row no-gutters>
      <v-col cols="4">
        <v-textarea auto-grow  hide-details label="年月" color="#A0A0A0" outlined>
        </v-textarea>
      </v-col>
      <v-col cols="8">
        <v-textarea auto-grow  hide-details v-model='selfInfo.qualification_name' label="資格名" color="#A0A0A0" outlined>
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
