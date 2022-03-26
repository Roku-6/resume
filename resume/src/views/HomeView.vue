<template>
  <v-app>
    <AppHeader/>
    <v-main class="main">
      <v-container>
        <v-row class="lighten-3">
          <v-col cols="12" sm="6" md="4" lg="4" xl="4"
            v-for="card in $store.getters.getCardInfo" :key="card.id">
            <ResumeCreate :card="card" />
          </v-col>
        </v-row>
        <v-btn color="green" dark fixed fab style="right: 6rem; bottom: 6rem" @click="addCard(); save();">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './AppHeader'
import ResumeCreate from './ResumeCreate.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    // testTest,
    ResumeCreate
  },
  methods: {
    addCard: function () {
      this.$store.commit('addCard', this.title)
    },
    save: function () {
      this.$store.dispatch('doSave')
    }
  }
}
</script>
