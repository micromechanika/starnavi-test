<template>
    <div class="square white" @click.stop.once="selectSquare" ></div>
</template>

<script>
export default {
  name: 'square',
  data () {
    return {
      user: null
    }
  },
  methods: {
    selectSquare: function (e) {
      e.target.classList.remove('blue', 'white')
      e.target.classList.add('green')
      this.user += 1
    }
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
