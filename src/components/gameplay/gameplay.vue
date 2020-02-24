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
  width: 100%;
  height: 100%;
  padding-top: 5em;
  padding-bottom: 5em;

  @include mQ($tablet){
    width: 50%;
    height: 100%;
  }
}
</style>
