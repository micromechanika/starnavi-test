<template>
  <div class="matrix">
    <div class="line" v-for="line in lines" :key="line">
      <square v-for="square in squares" :key="square" />
    </div>
  </div>
</template>

<script>
import square from './square'
import { mixins } from '../../../mixins/mixins'
import { mapGetters } from 'vuex'

export default {
  name: 'matrix',
  mixins: [mixins],
  components: { square },
  props: {
    lines: {
      type: Number,
      default: 5
    },
    squares: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      allSquares: [],
      max: null,
      randomValues: [],
      randomSquare: null,
      gameTime: null
    }
  },
  computed: {
    ...mapGetters({
      isUser: 'isUser',
      user: 'userSelect',
      computer: 'computerSelect',
      userName: 'name',
      delay: 'delay',
      Squares: 'squares',
      Lines: 'lines'
    })
  },
  methods: {
    squaresArray: function () {
      const matrix = document.querySelector('.matrix')
      this.allSquares = [...matrix.querySelectorAll('.square')]
      this.max = this.allSquares.length
    },
    randomSelect: function () {
      this.allSquares[this.randomSquare].classList.remove('white')
      this.allSquares[this.randomSquare].classList.add('blue')
    },
    computerSelect: function () {
      this.allSquares[this.randomSquare].classList.remove('blue', 'white')
      this.allSquares[this.randomSquare].classList.add('red')
      this.$store.commit('computerSelect')
      this.$store.commit('isUser', false)
    },
    userSelect: function (e) {
      if (e.target === this.allSquares[this.randomSquare]) {
        e.target.classList.remove('blue', 'white')
        e.target.classList.add('green')
        this.$store.commit('userSelect')
        this.$store.commit('isUser', true)
      }
    },
    winner: function () {
      if (this.computer > this.user) {
        this.$store.commit('name', 'Computer')
      } else {
        this.$store.commit('winner', `${this.userName} Win`)
        this.$store.dispatch('pushWinner', this.userName)
      }
    },
    getUnique: function () {
      const unique = this.randomInteger(0, this.max)
      const isUnique = this.randomValues.every(i => i !== unique)
      if (isUnique) {
        this.randomSquare = unique
        this.randomValues.push(unique)
      } else {
        this.getUnique()
      }
    },
    playGame: function () {
      const posible = Math.ceil(this.max / 2)
      if (this.computer >= posible || this.user >= posible) {
        clearInterval(this.gameTime)
        this.winner()
        this.$store.commit('play')
      } else {
        this.promise()
          .then(this.getUnique())
          .then(this.randomSelect())
          .then(setTimeout(() => {
            if (!this.isUser) this.computerSelect()
            this.$store.commit('isUser', false)
          }, this.delay))
          .catch(err => console.log(err))
      }
    },
    reset: function () {
      this.randomValues = []
      this.randomSquare = null
      this.gameTime = null
      this.allSquares.forEach(i => {
        i.classList.remove('blue', 'green', 'red')
        i.classList.add('white')
      })
    },
    init: function (e) {
      if (this.delay === null && this.Lines === null && this.Squares === null) {
        e.stopPropagation()
      } else {
        this.reset()
        this.squaresArray()
        this.gameTime = setInterval(() => {
          this.playGame()
        }, this.delay + 10)
      }
    }
  },
  mounted () {
    document.getElementById('play').addEventListener('click', this.init, false)
    document.querySelector('.matrix').addEventListener('click', this.userSelect)
  }
}
</script>

<style lang="scss">
.line {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.matrix {
  border: $borderColor solid 0.1em;
}
</style>
