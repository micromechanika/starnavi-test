import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const instance = axios.create({
  baseURL: 'https://starnavi-frontend-test-task.herokuapp.com/',
  timeout: 1000,
  headers: { 'content-type': 'application/json; charset=utf-8' }
})

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
      instance.get('/game-settings')
        .then(response => {
          const presets = Object.keys(response.data).map(i => {
            return {
              name: i,
              field: response.data[i].field,
              delay: response.data[i].delay
            }
          })
          presets.unshift({ name: 'Pick game mode', field: null, delay: null })
          context.commit('Presets', presets)
        })
        .catch(err => console.error(err))
    },
    pushWinner: (context, payload) => {
      const date = new Date()
      const options = {
        month: 'long',
        day: 'numeric'
      }
      const H = date.getHours()
      const M = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const dayMonth = date.toLocaleString('en-US', options)
      const Y = date.getFullYear()

      const winner = {
        winner: payload,
        date: `${H}:${M}  ${dayMonth}  ${Y}`
      }

      instance.post('/winners', winner)
        .then(() => {
          // context.commit('pushWinner', winner)
          context.dispatch('winners')
        })
        .catch(err => console.error(err))
    },
    winners: (context) => {
      instance.get('/winners')
        .then(response => {
          const winners = response.data.splice(response.data.length - 4, 4)
          context.commit('winners', winners)
        })
        .catch(err => console.error(err))
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
