<template>
  <v-app>
    <AppHeader/>
    <v-main class="main">
      <v-container>
        <v-row class="lighten-3">
          <v-col cols="12" sm="6" md="4" lg="4" xl="4"
            v-for="resume in $store.getters.getResume" :key="resume.resume_id">
            <ResumeCreate :resume="resume" />
          </v-col>
        </v-row>
        <v-btn color="green" dark fixed fab style="right: 6rem; bottom: 6rem" @click="createResume">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader'
import ResumeCreate from '../components/ResumeCreate.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    ResumeCreate
  },
  methods: {
    createResume: function () {
      this.$store.dispatch('createResume')
    }
    // saveも入れるべき。
  },
  mounted () {
    this.$store.dispatch('getUserInfo')
    this.$store.dispatch('getResumes')
  }
}
</script>
