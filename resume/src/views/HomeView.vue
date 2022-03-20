<template>
  <v-app>
    <AppHeader/>
    <v-main class="main">
      <!--<testTest/>-->
      <v-container>
        <v-row class="lighten-3">
          <v-col cols="12" sm="6" md="4" lg="4" xl="4"
            v-for="(card, index) in $store.state.cards" :key="index">
            <v-container mx-2>
              <ResumeCreate :card="card" :index="index"/>
            </v-container>
          </v-col>
        </v-row>
        <v-btn color="green" dark fixed fab style="right: 6rem; bottom: 6rem" @click="addCard()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './AppHeader'
// import testTest from './test'
import ResumeCreate from './ResumeCreate.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    // testTest,
    ResumeCreate
  },
  watch: {
    name (newName) {
      localStorage.name = newName
    }
  },
  methods: {
    addCard: function () {
      this.$store.commit('addCard', this.title)
    }
  }
}
</script>

<style>
main {
  margin-top: 60px;
}
</style>
