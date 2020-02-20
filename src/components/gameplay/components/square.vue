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
    ...mapGetters(['squares'])
  },
  methods: {
    userSelect: function (e) {
      e.target.classList.remove('blue', 'white')
      e.target.classList.add('green')
      this.$store.commit('userSelect', 1)
    },
    randomSelect: function () {
      setInterval(() => {
        this.randomSquare = this.randomInteger(0, this.squares)
      }, 5000)
    },
    computerSelect: function () {
      this.$store.commit('computerSelect', 1)
    }
  },
  mounted () {
    this.randomSelect()
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
.blue{
  background-color: $blueSquare;
  border: $blueSquare solid .1em;
}
.green{
  background-color: $greenSquare;
  border: $greenSquare solid .1em;
}
</style>
