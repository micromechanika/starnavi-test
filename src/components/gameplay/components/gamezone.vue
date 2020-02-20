<template>
  <div class="gameZone">
    <matrix :lines="5" :squares="5" />
  </div>
</template>

<script>
import matrix from './matrix'
export default {
  name: 'game',
  components: { matrix }
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
