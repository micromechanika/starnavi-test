<template>
  <div class="gameZone">
    <matrix
      :lines="this.lines"
      :squares="this.squares" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import matrix from './matrix'
export default {
  name: 'game',
  components: { matrix },
  computed: {
    ...mapGetters(['lines', 'squares'])
  }
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
