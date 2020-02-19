<template>
    <div class="row red" @click="selectSquare"></div>
</template>

<script>
export default {
  name: 'square',
  methods: {
    selectSquare: function () {
      console.log('click Square')
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
.red{
  background-color: $redSquare;
}
.blue{
  background-color: $blueSquare;
}
.green{
  background-color: $greenSquare;
}
</style>
