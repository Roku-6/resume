<template>
  <v-app>
    <div class="container">
      <v-text-field
        v-model="userid"
        label="ユーザ名(メールアドレス)"
        placeholder="h.yano@key-s.net"
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
      <button @click="signUp" class="signup" onMouseOver="this.innerText='サインアップ'" onMouseOut="this.innerText='Sign Up'">Sign Up</button>
      <div class="msg-block">Have an account? <router-link :to='"/SignInPage"' class="fontstyle">Sign in</router-link></div>
    </div>
  </v-app>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'SignUpPage',
  data () {
    return {
      showPassword: false,
      userid: 'h.yano@key-s.net',
      passwordRules: {
        min: v => v.length >= 8 || 'Min 8 characters'
      },
      password: 'Keystone100%',
      email: '',
      phonenumber: '',
      show: false
    }
  },
  methods: {
    signUp: async function signUp () {
      const username = this.userid
      const password = this.password
      await Auth.signUp({
        username,
        password
      })
        .then(() => {
          console.log('success')
          this.$router.push('/ComfirmSignIn')
        })
        .catch((error) => {
          console.log('error signing up:', error)
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

.signup {
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

.fontstyle:hover {
  text-decoration: underline;
}

.msg-block {
  margin: 2rem;
}

</style>
