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
  methods: {
    squaresArray: function () {
      const matrix = document.querySelector('.matrix')
      return [...matrix.querySelectorAll('.square')]
    }
  },
  mounted () {
    this.$store.commit('allSquares', this.squaresArray())
    this.$store.commit('squares', this.squaresArray().length)
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
