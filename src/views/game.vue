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
    font-size: 1vmax;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: $borderColor solid .2em;

    @include mQ($tablet){
      display: flex;
      flex-direction: row;
      align-items: self-start;
    }
  }
</style>
