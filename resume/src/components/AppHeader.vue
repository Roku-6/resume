<template>
  <header class="header">
    <v-navigation-drawer app v-model="drawer" clipped disable-resize-watcher>
      <v-container >
        <v-list-item>
        {{ address.user_name }}
        </v-list-item>
        <v-divider />
        <v-list nav dense>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item v-for="list in item.lists" :key="list.title" :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      address: this.$store.getters.getProfile,
      drawer: false,
      items: [
        { title: 'プロフィール編集', link: '/profileEdit' },
        { title: 'ログアウト', link: '/loginPage' }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('getUserInfo')
  }
}
</script>
