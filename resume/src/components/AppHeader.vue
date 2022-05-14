<template>
  <header class="header">
    <v-navigation-drawer app v-model="drawer" clipped disable-resize-watcher>
      <v-container >
        <v-list-item>
        <p v-if="status === 'signIn'">{{ profile.user_name }}</p>
        <p v-else>ゲスト</p>
        </v-list-item>
        <v-divider />
        <v-list v-if="status === 'signIn'" nav dense>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-btn @click="signOut">ログアウト</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-btn :to='"/SignInPage"'>サインイン</v-btn>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </header>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'AppHeader',
  data () {
    return {
      // address: this.$store.getters.getProfile,
      drawer: false,
      items: [
        { title: 'プロフィール編集', link: '/profileEdit' }
      ],
      status: '',
      profile: ''
    }
  },
  methods: {
    signOut: async function () {
      await Auth.signOut({ global: true })
        .then(() => {
          this.$router.push('/SignInPage')
        })
        .catch((error) => {
          console.log('error signing in', error)
        })
    }
  },
  mounted () {
    Auth.currentSession()
      .then(data => {
        console.log(data)
        this.status = 'signIn'
        this.profile = this.$store.getters.getProfile
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
