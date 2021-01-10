import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idData: null,
    error: null,
    success: null
  },
  mutations: {
    errorMessage(state, payload) {
      state.error = payload;
    },
    successMessage(state, payload) {
      state.success = payload;
    }
  },
  actions: {
  },
})
