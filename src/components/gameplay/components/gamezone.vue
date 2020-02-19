<template>
  <div class="gamezone">
    <squares
      :lines="5"
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
.gamezone {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
