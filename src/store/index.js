import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultState = () => {
  return {
    userSelect: 0,
    computerSelect: 0,
    isUser: false,
    winner: '',
    name: ''
  }
}

const server = {
  state: {
    presets: []
  },
  getters: {
    Presets: state => state.presets
  },
  mutations: {
    Presets: (state, payload) => {
      state.presets = payload
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
  }
}

const local = {
  state: defaultState(),
  getters: {
    userSelect: state => state.userSelect,
    computerSelect: state => state.computerSelect,
    isUser: state => state.isUser,
    winner: state => state.winner,
    name: state => state.name
  },
  mutations: {
    userSelect: (state) => {
      state.userSelect += 1
    },
    computerSelect: (state) => {
      state.computerSelect += 1
    },
    isUser: (state, payload) => {
      state.isUser = payload
    },
    winner: (state, payload) => {
      state.winner = payload
    },
    name: (state, payload) => {
      state.name = payload
    },
    resetState: (state) => {
      Object.assign(state, defaultState())
    }
  }
}

export default new Vuex.Store({
  modules: { server, local }
})
