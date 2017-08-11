import Vue from 'vue'
import Vuex from 'vuex'
import plan from './modules/plan'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    plan
  }
})
