import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localState = () => {
  return {
    userSelect: 0,
    computerSelect: 0,
    isUser: false,
    winner: '',
    name: '',
    play: false
  }
}

const server = {
  state: {
    presets: [],
    winners: [],
    lines: null,
    squares: null,
    delay: null
  },
  getters: {
    Presets: state => state.presets,
    winners: state => state.winners,
    lines: state => state.lines,
    squares: state => state.squares,
    delay: state => state.delay
  },
  mutations: {
    Presets: (state, payload) => {
      state.presets = payload
    },
    winners: (state, payload) => {
      state.winners = payload
    },
    pushWinner: (state, payload) => {
      state.winners.push(payload)
    },
    lines: (state, payload) => { state.lines = payload },
    squares: (state, payload) => { state.squares = payload },
    delay: (state, payload) => { state.delay = payload }
  },
  actions: {
    Presets: (context) => {
      const presets = [
        { name: 'Pick game mode', field: null, delay: null },
        { name: 'easyMode', field: 5, delay: 2000 },
        { name: 'normalMode', field: 10, delay: 1000 },
        { name: 'hardMode', field: 15, delay: 900 }
      ]
      context.commit('Presets', presets)
    },
    pushWinner: (context, payload) => {
      const date = new Date()
      const options = {
        month: 'long',
        day: 'numeric'
      }
      const H = date.getHours()
      const M = date.getMinutes()
      const dayMonth = date.toLocaleString('en-US', options)
      const Y = date.getFullYear()

      const winner = {
        id: Date.now(),
        winner: payload,
        date: `${H}:${M}; ${dayMonth} ${Y}`
      }
      context.commit('pushWinner', winner)
      // context.commit('winners', winner)
    },
    winners: (context) => {
      const winners = [
        {
          id: 1,
          winner: 'Computer',
          date: '07:02; 19 February 2020'
        },
        {
          id: 2,
          winner: 'John',
          date: '07:02; 20 February 2020'
        }
      ]
      context.commit('winners', winners)
    }
  }
}

const local = {
  state: localState(),
  getters: {
    userSelect: state => state.userSelect,
    computerSelect: state => state.computerSelect,
    isUser: state => state.isUser,
    winner: state => state.winner,
    name: state => state.name,
    play: state => state.play
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
    play: (state) => {
      state.play = true
    },
    resetState: (state) => {
      Object.assign(state, localState())
    }
  }
}

export default new Vuex.Store({
  modules: { server, local }
})
