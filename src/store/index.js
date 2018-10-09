import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './action'
import mutations from './mutation'
export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false
  },
  mutations,
  actions
})
