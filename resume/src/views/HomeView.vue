<template>
  <v-container my-5>
    <v-row class="lighten-3">
      <v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="(card, index) in $store.state.cards" :key="index">
        <ResumeCreate :card="card" :index="index"/>
      </v-col>
    </v-row>
    <v-row>
      <v-card-text style="height: 100px; position: relative">
        <v-fab-transition>
          <v-btn color="green" dark absolute bottom right fab
            @click="showCreateCardView()">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card-text>
      <v-dialog v-model="createCardView" max-width="500px" persistent>
        <v-card>
          <v-card-title>
            新規作成
          </v-card-title>
          <v-form ref="form">
            <v-card-text>
              <v-text-field label="テスト" v-model="title" :rules="[rules.required]" required>
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" text outlined @click="showCreateCardView(); reset(); ">
                <v-icon>mdi-close-circle</v-icon>閉じる
              </v-btn>
              <v-btn color="green" text outlined @click="addCard(); showCreateCardView(); reset()">
                <v-icon>mdi-plus-circle</v-icon>作成
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import ResumeCreate from './ResumeCreate.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      createCardView: false,
      title: '',
      rules: {
        required: value => !!value || 'タイトルを入力してください。'
      }
    }
  },
  computed: {
    users: function () {
      return this.$store.state.users
    }
  },
  components: {
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
    },
    reset () {
      this.$refs.form.reset()
    },
    showCreateCardView () {
      this.createCardView = !this.createCardView
    }
  }
}
</script>
