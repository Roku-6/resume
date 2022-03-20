<template>
  <v-app>
    <header class="header">
      <div>
        <v-btn icon @click="changeMode" to="/"><v-icon>mdi-arrow-left</v-icon></v-btn>
      </div>
    </header>
    <v-main>
      <v-card flat class="mx-auto my-12" max-width="1400px">
        <v-card-title>プロフィール編集</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-col xl=3>
              <v-text-field label="名前">
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="フリガナ">
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="生年月日">
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="性別">
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="最寄駅">
              </v-text-field>
            </v-col>
            <v-col xl=3>
              <v-text-field label="路線">
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
  name: 'tempActivePage',
  methods: {
    changeMode: function () {
      this.editMode = !this.editMode
    }
  }
}
</script>

<style>
main {
  margin-top: 60px;
}
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
</style>
