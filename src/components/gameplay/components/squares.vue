<template>
  <div class="matrix">
    <div class="line" v-for="line in lines" :key="line">
      <square v-for="item in items"  :key="item"/>
    </div>
  </div>
</template>

<script>
import square from './square'

export default {
  name: 'squares',
  components: { square },
  props: {
    lines: {
      type: Number,
      default: 5
    },
    items: {
      type: Number,
      default: 5
    }
  },
  methods: {
    randomInteger: function (min, max) {
      const rand = min + Math.random() * (max - min)
      return Math.floor(rand)
    },
    squaresArray: function () {
      const matrix = document.querySelector('.matrix')
      const squares = [...matrix.querySelectorAll('.row')]
      return squares
    },
    computerSelect: function () {
      let randInteger = 0
      setInterval(() => {
        randInteger = this.randomInteger(0, this.lines * this.items)
        this.squaresArray()[randInteger].classList.remove('white')
        this.squaresArray()[randInteger].classList.add('blue')
      }, 1000)
      this.squaresArray()[randInteger].classList.remove('blue', 'white')
      this.squaresArray()[randInteger].classList.add('red')
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
