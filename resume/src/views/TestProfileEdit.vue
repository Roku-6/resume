<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-btn icon @click="save" to="/"><v-icon>mdi-arrow-left</v-icon></v-btn>
    </v-app-bar>
    <v-main>
      <v-card flat class="mx-auto my-12" max-width="1400px">
        <v-card-title>プロフィール編集</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-col xl=3>
              <v-text-field label="名前" v-model='profile.fullName'>
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="フリガナ" v-model='profile.furigana'>
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="生年月日" v-model='profile.birthday'>
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="性別" v-model='profile.sex'>
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="最寄駅" v-model='profile.nearestStation'>
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="路線" v-model='profile.railRoute'>
              </v-text-field>
            </v-col>
            <v-col xl=12 align="center">
              入力した内容は、自動保存されます。
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'ProfileEdit',
  computed: {
    profile: {
      get () {
        return this.$store.getters.getProfile
      },
      set (profile) {
        this.$store.commit('setProfile', profile)
      }
    }
  },
  methods: {
    save: function () {
      this.$store.dispatch('doSave')
    }
  }
}
</script>
