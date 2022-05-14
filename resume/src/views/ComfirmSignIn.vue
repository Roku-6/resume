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
        v-model="userid"
        label="ユーザ名(メールアドレス)"
        placeholder="h.yano@key-s.net"
        app
      ></v-text-field>
      <v-text-field
        v-model="code"
        label="確認コード"
        app
        ></v-text-field>
      <button @click="confirmSignUp" class="confirmSignUp" onMouseOver="this.innerText='確認コード送信'" onMouseOut="this.innerText='Confirm Sign Up'">Confirm Sign Up</button>
      <div class="msg-block">resend <a @click="resendSignUp">code?</a></div>
    </div>
  </v-app>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'SignUpPage',
  data () {
    return {
      userid: 'h.yano@key-s.net',
      code: '',
      alert: false,
      alertMessage: ''
    }
  },
  methods: {
    confirmSignUp: async function confirmSignUp () {
      const username = this.userid
      const code = this.code
      await Auth.confirmSignUp(
        username,
        code
      )
        .then(() => {
          console.log('success')
          this.$router.push('/')
        })
        .catch((error) => {
          if (error.name === 'CodeMismatchException') {
            // logger.error('Auth.signIn() err:', err)
            this.alertMessage = 'ユーザ名または確認コードが間違っています。'
            this.alert = true
          } else {
            console.log(error)
            alert('予期せぬエラー')
          }
        })
    },
    resendSignUp: async function confirmSignUp () {
      const username = this.userid
      await Auth.resendSignUp(username)
        .then(() => {
          console.log('resend')
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

.confirmSignUp {
  background-color: #A0CDA9;
  color: #fff;
  height: 50px;
  width:150px;
  border-radius: 10px;
}

a {
  color: #A0CDA9!important;
}

.fontstyle {
  text-decoration: none;
}

.fontstyle:hover{
  text-decoration: underline;
}

.msg-block {
  margin: 2rem;
}

</style>
