<template>
    <div class="row white" @click="selectSquare" ></div>
</template>

<script>
export default {
  name: 'square',
  data () {
    return {
      clicked: true
    }
  },
  methods: {
    selectSquare: function (e) {
      e.target.classList.add('green')
    }
  }
}
</script>

<style lang="scss">
.row{
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
