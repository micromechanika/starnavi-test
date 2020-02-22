import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    presets: [],
    userSelect: 0,
    computerSelect: 0,
    isUser: false,
    winner: '',
    name: ''
  },
  getters: {
    Presets: state => state.presets,
    userSelect: state => state.userSelect,
    computerSelect: state => state.computerSelect,
    isUser: state => state.isUser,
    winner: state => state.winner,
    name: state => state.name
  },
  mutations: {
    Presets: (state, payload) => {
      state.presets = payload
    },
    userSelect: (state, payload) => {
      state.userSelect += payload
    },
    computerSelect: (state, payload) => {
      state.computerSelect += payload
    },
    isUser: (state, payload) => {
      state.isUser = payload
    },
    winner: (state, payload) => {
      state.winner = payload
    },
    name: (state, payload) => {
      state.name = payload
    }
  },
  actions: {
    Presets: (context, payload) => {
      const presets = [
        { name: 'Pick game mode', field: null, delay: null },
        { name: 'easyMode', field: 5, delay: 2000 },
        { name: 'normalMode', field: 10, delay: 1000 },
        { name: 'hardMode', field: 15, delay: 900 }
      ]
      context.commit('Presets', presets)
    }
  },
  modules: {}
})
