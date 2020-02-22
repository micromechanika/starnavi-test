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
      gameTime: null,
      delay: 3000
    }
  },
  computed: {
    ...mapGetters({
      isUser: 'isUser',
      user: 'userSelect',
      computer: 'computerSelect'
    })
  },
  methods: {
    squaresArray: function () {
      const matrix = document.querySelector('.matrix')
      this.allSquares = [...matrix.querySelectorAll('.square')]
      this.max = this.allSquares.length
    },
    randomSelect: function () {
      console.log(this.randomSquare, 'random')
      this.allSquares[this.randomSquare].classList.remove('white')
      this.allSquares[this.randomSquare].classList.add('blue')
    },
    computerSelect: function () {
      console.log(this.randomSquare, 'comp')
      this.allSquares[this.randomSquare].classList.remove('blue', 'white')
      this.allSquares[this.randomSquare].classList.add('red')
      this.$store.commit('computerSelect', 1)
    },
    winner: function () {
      const userName = 'Dima'
      this.computer > this.user ? this.$store.commit('winner', 'Computer Win') : this.$store.commit('winner', `User: ${userName} Win`)
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
      if (this.computer >= Math.ceil(this.max / 2) || this.user >= Math.ceil(this.max / 2)) {
        clearInterval(this.gameTime)
        console.log('stop')
        this.winner()
      } else {
        console.log('play')
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
    init: function () {
      this.squaresArray()
      this.playGame()
      this.gameTime = setInterval(() => {
        this.playGame()
      }, this.delay + 1000)
    }
  },
  mounted () {
    document.getElementById('play').addEventListener('click', this.init)
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
