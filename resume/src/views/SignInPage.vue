<template>
  <v-app>
    <div class="container">
      <v-alert
        :value="alert"
        type="error"
        outlined
        dense
        close-icon
        transition="scroll-y-transition"
      >
        {{ alertMessage }}
      </v-alert>
      <v-text-field
        v-model="username"
        label="ユーザ名"
        placeholder="taro"
        required
        app
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :passwordRules="[passwordRules.min]"
        :type="show ? 'text' : 'password'"
        label="パスワード"
        app
        @click:append="show = !show"
        ></v-text-field>
      <button @click="signIn" class="signin" onMouseOver="this.innerText='サインイン'" onMouseOut="this.innerText='Sign In'">Sign In</button>
      <div class="msg-block">No account? <router-link :to='"/SignUpPage"' class="fontstyle">Create account</router-link></div>
    </div>
  </v-app>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'SignInPage',
  data () {
    return {
      showPassword: false,
      username: 'h.yano@key-s.net',
      passwordRules: {
        min: v => v.length >= 8 || 'Min 8 characters'
      },
      password: 'Keystone100%',
      show: false,
      alert: false,
      alertMessage: ''
    }
  },
  methods: {
    signIn: async function () {
      // signIn (cognito)
      await Auth.signIn(this.username, this.password)
        .then((data) => {
          console.log(data)
          // ログイン処理
          this.$router.push('/')
        })
        .catch((error) => {
          if (error.name === 'NotAuthorizedException') {
            // logger.error('Auth.signIn() err:', err)
            this.alertMessage = 'ユーザ名またはパスワードが間違っています。'
            this.alert = true
          } else {
            console.log(error)
            alert('予期せぬエラー')
          }
        })
    }
  }
}
</script>

<style>
.container {
  margin: 100px auto;
  max-width: 700px;
  width: 100%;
  text-align: center;
}
.signin {
  background-color: #A0CDA9;
  color: #fff;
  height: 50px;
  width:150px;
  border-radius: 10px;
}

.fontstyle {
  color: #A0CDA9!important;
  text-decoration: none;
}

.fontstyle:hover{
  text-decoration: underline;
}

.msg-block {
  margin: 2rem;
}

</style>
