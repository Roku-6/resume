<template>
  <header class="header">
    <div>
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
      <label for="openSidebarMenu" class="sidebarIconToggle">
        {{ address }}
      </label>
      <div id="sidebarMenu">
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
            <v-list-item-content>
              <v-list-item-title  class="sidebarMenuInner">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <div>
      <v-btn icon @click="changeMode"><v-icon>mdi-dots-horizontal</v-icon></v-btn>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      editMode: false,
      address: 'yamada_taro@key_s.net',
      items: [
        { title: 'プロフィール編集', link: '/profileEdit' },
        { title: 'ログアウト', link: '/loginPage' }
      ]
    }
  },
  methods: {
    changeMode: function () {
      this.editMode = !this.editMode
    }
  }
}
</script>

<style>
.header {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, .1),
      0px 3px 15px 0px rgba(0, 0, 0, .08),
      0px 5px 28px 0px rgba(0, 0, 0, .06);
    background-color: #fff;
    height: 60px!important;
    overflow: hidden;
    z-index: 20;
}
#sidebarMenu {
    height: 100%;
    position: fixed;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, .12);
    width: 250px;
    margin-top: 20px;
    transform: translateX(-250px);
    transition: transform 250ms ease-in-out;
}
.sidebarMenuInner{
    margin:0;
    padding:0;
}
.sidebarMenuInner li{
    list-style: none;
    color: #A0A0A0;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.10);
}
.sidebarMenuInner li .menuItem{
    color: #A0A0A0;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}
input[type=checkbox] {
    box-sizing: border-box;
    display: none;
}
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
}
</style>
