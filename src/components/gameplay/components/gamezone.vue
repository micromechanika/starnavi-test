<template>
  <div class="gameZone">
    <squares
      :lines="1"
      :items="5"
    />
  </div>
</template>

<script>
import squares from './squares'
export default {
  name: 'game',
  components: { squares }
}
</script>

<style lang="scss">
.gameZone {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
