import Vue from 'vue'
import Vuex from 'vuex'
import links from './links'
import bestsellers from './bestsellers'
import goods from './goods'
import coffee from './coffee'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  modules: {
    links, bestsellers, goods, coffee
  }
})

export default store