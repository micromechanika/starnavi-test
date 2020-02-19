<template>
<div class="gameplay">
  <presets/>
  <message/>
  <gamezone/>
</div>
</template>

<script>
import presets from './components/presets'
import message from './components/message'
import gamezone from './components/gamezone'
export default {
  name: 'gameplay',
  components: { presets, message, gamezone }
}
</script>

<style lang="scss">
.gameplay{
  width: 50%;
  height: 99vh;
  padding-top: 5em;
  border-right: $borderColor solid .2em;
}
</style>
