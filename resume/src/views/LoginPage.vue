<template>
  <v-app>
    <div class="formContainer">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="メールアドレス"
        value="yamada-taro@sample.com"
        placeholder="yamada-taro@sample.com"
        required
        class="mb-4"
      ></v-text-field>
      <v-text-field
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :passwordRules="[passwordRules.min]"
        :type="show ? 'text' : 'password'"
        label="パスワード"
        class="mb-4"
        @click:append="show = !show"
        ></v-text-field>
      <button @click="login" class="login">ログイン</button>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      showPassword: false,
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスを入力してください。',
        v => /.+@.+\..+/.test(v) || 'メールアドレスを入力してください。'
      ],
      passwordRules: {
        min: v => v.length >= 8 || 'Min 8 characters'
      },
      password: '',
      show: false
    }
  },
  methods: {
    login: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.formContainer {
  margin: 100px auto;
  max-width: 700px;
  width: 100%;
  text-align: center;
}
.login {
  background-color: #A0CDA9;
  color: #fff;
  height: 50px;
  width:100px;
  border-radius: 10px;
}
</style>
