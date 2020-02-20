import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    presets: [],
    allSquares: [],
    squares: null,
    userSelect: null,
    computerSelect: null,
    isComputer: false
  },
  getters: {
    Presets: state => state.presets,
    allSquares: state => state.allSquares,
    squares: state => state.squares,
    userSelect: state => state.userSelect,
    computerSelect: state => state.computerSelect,
    isComputer: state => state.isComputer
  },
  mutations: {
    Presets: (state, payload) => {
      state.presets = payload
    },
    allSquares: (state, payload) => {
      state.allSquares = payload
    },
    squares: (state, payload) => {
      state.squares = payload
    },
    userSelect: (state, payload) => {
      state.userSelect += payload
    },
    computerSelect: (state, payload) => {
      state.computerSelect += payload
    },
    isComputer: (state) => {
      state.isComputer = !state.isComputer
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
