<template>
    <div class="square white" @click.stop.once="userSelect" ></div>
</template>

<script>

import { mixins } from '../../../mixins/mixins'
import { mapGetters } from 'vuex'
export default {
  name: 'square',
  mixins: [mixins],
  data () {
    return {
      randomSquare: null
    }
  },
  computed: {
    ...mapGetters(['allSquares', 'squares'])
  },
  methods: {
    userSelect: function (e) {
      e.target.classList.remove('blue', 'white')
      e.target.classList.add('green')
      this.$store.commit('userSelect', 1)
    },
    randomSelect: function () {
      this.randomSquare = this.randomInteger(0, this.squares)
      this.allSquares[this.randomSquare].classList.remove('white')
      this.allSquares[this.randomSquare].classList.add('blue')
    },
    computerSelect: function () {
      this.allSquares[this.randomSquare].classList.remove('blue', 'white')
      this.allSquares[this.randomSquare].classList.add('red')
      this.$store.commit('computerSelect', 1)
    }
  },
  mounted () {
    setInterval(() => {
      this.randomSelect()
    }, 5000)
  }
}
</script>

<style lang="scss">
.square{
  width: 3.3em;
  height: 3.3em;
  border: $borderColor solid .1em;
}
.white{
  background-color: $white;
}
.red{
  background-color: $redSquare;
  border: $redSquare solid .1em;
}
.green{
  background-color: $greenSquare;
  border: $greenSquare solid .1em;
}
.blue{
  background-color: $blueSquare;
  border: $blueSquare solid .1em;
}
</style>
