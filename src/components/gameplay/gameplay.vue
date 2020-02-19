<template>
<div class="gameplay">
<h1>gameplay</h1>
  <presets/>
  <message/>
  <gamezone/>
</div>
</template>

<script>
import presets from './presets'
import message from './message'
import gamezone from './gamezone'
export default {
  name: 'gameplay',
  components: { presets, message, gamezone }
}
</script>

<style lang="scss">
.gameplay{
width: 50%;
}
</style>
