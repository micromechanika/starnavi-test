<template>
  <div class="matrix">
      <div class="line" v-for="line in lines" :key="line">
        <square v-for="square in squares"  :key="square" />
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
      max: '',
      randomSquare: '',
      gameTime: ''
    }
  },
  computed: {
    ...mapGetters({
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
      console.log(this.randomSquare)
      this.allSquares[this.randomSquare].classList.remove('white')
      this.allSquares[this.randomSquare].classList.add('blue')
    },
    computerSelect: function () {
      console.log(this.randomSquare)
      this.allSquares[this.randomSquare].classList.remove('blue')
      this.allSquares[this.randomSquare].classList.add('red')
      this.$store.commit('computerSelect', 1)
    },
    winner: function () {
      (this.computer > (this.max / 2)) ? console.log('computer') : console.log('user')
    },
    playGame: function () {
      this.gameTime = setInterval(() => {
        this.randomSquare = this.randomInteger(0, this.max)
        this.randomSelect()
        setTimeout(() => {
          this.computerSelect()
        }, 1000)
      }, 1000)
    },
    init: function () {
      this.squaresArray()
      if ((this.max - (this.user + this.computer)) <= (Math.round(this.max / 2))) {
        clearInterval(this.gameTime)
        this.winner()
        console.log('stop')
      } else {
        this.playGame()
        console.log('play')
      }
    }
  },
  mounted () {
    this.init()
  }
}

</script>

<style lang="scss">
  .line{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .matrix{
    border: $borderColor solid .1em;
  }
</style>
