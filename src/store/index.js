import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from "@/firebase";
import router from "@/router";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {}
  },
  mutations: {
    nuevoUser(state, payload) {
      if (payload === null) {
          state.usuario = ''
      } else {
          state.usuario = payload
      }
   }
  },
  actions: {
    async setUser({ commit }, user) {
      const usuario = {
        nombre: user.displayName,
        email: user.email,
        uid: user.uid,
        foto: user.photoURL
       }
       commit('nuevoUser', usuario)
    },
    cerrarSesion({ commit }) {
      auth.signOut()
      commit('nuevoUser', null)
      router.push({ name: 'ingreso' })
  }
  },
  modules: {
  }
})
