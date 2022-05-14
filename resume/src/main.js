import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { Amplify, Auth } from 'aws-amplify'
import '@aws-amplify/ui-components'
import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader'

Amplify.configure({
  Auth: {

    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'ap-northeast-1:a83e5543-d5c9-4de1-ac97-034443609436',

    // REQUIRED - Amazon Cognito Region
    region: 'ap-northeast-1',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    // identityPoolRegion: 'XX-XXXX-X',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'ap-northeast-1_V1XHUnDpJ',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '8vsss1c9j4ncoobi68ke8jv3i',

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_SRP_AUTH' | 'CUSTOM_AUTH',

    // OPTIONAL - Hosted UI configuration
    oauth: {
      domain: 'https://resume-application.auth.ap-northeast-1.amazoncognito.com',
      redirectSignIn: 'http://localhost:8080/',
      redirectSignOut: 'http://localhost:8080/SignInPage/',
      responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    }
  }
})

// You can get the current config object
// const currentConfig =
Auth.configure()

Vue.config.ignoredElements = [/amplify-\w*/]

Vue.config.productionTip = false

applyPolyfills().then(() => { defineCustomElements(window) })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
