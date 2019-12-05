import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { auth } from "@/firebase";

import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMale, faFemale)
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

auth.onAuthStateChanged(function(user) {
  if (user) {
      // User is signed in.
      store.dispatch('setUser', user)
      console.log(user.displayName)
  }
  // No user is signed in.
  new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
  }).$mount('#app')

});