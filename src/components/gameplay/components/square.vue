<template>
    <div class="square white" @click.stop.once="userSelect"></div>
</template>

<script>

export default {
  name: 'square',
  methods: {

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
