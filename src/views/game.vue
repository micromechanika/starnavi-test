<template>
  <div class="game">
    <gameplay />
    <leaders />
  </div>
</template>

<script>
import gameplay from '../components/gameplay/gameplay'
import leaders from '../components/leaders'
export default {
  name: 'game',
  components: { gameplay, leaders }
}
</script>

<style lang="scss">
  .game{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: $borderColor solid .2em;
  }
</style>
