<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped >
      <v-container >
        <v-list-item>
        これはテストページです。
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-group
          v-for="nav_list in $store.state.nav_lists"
          :key="nav_list.name"
          :prepend-icon="nav_list.icon"
          no-action
          :append-icon="nav_list.lists ? undefined : ''">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="d-flex align-center " style="cursor: pointer" @click="$router.push('/')">
        vuetify
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn text to="/enterprise">For Enterprise</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" text>Support<v-icon>mdi-menu-down</v-icon></v-btn>
          </template>
          <v-list>
          <v-subheader>Get help</v-subheader>
            <v-list-item v-for="support in $store.state.supports" :key="support.name" :to="support.link">
              <v-list-item-icon>
              <v-icon>{{ support.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
              <v-list-item-title>{{ support.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from './views/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppFooter
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
