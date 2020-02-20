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

export default {
  name: 'squares',
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
      randInteger: null,
      comp: false
    }
  },
  methods: {
    squaresArray: function () {
      const matrix = document.querySelector('.matrix')
      return [...matrix.querySelectorAll('.square')]
    },
    computerSelect: function () {
      setInterval(() => {
        this.randInteger = this.randomInteger(0, this.lines * this.squares)
        this.squaresArray()[this.randInteger].classList.remove('white')
        this.squaresArray()[this.randInteger].classList.add('blue')
      }, 1000)

      this.squaresArray()[this.randInteger].classList.remove('blue', 'white')
      this.squaresArray()[this.randInteger].classList.add('red')
    }
  },
  mounted () {
    this.squaresArray()
    this.computerSelect()
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
