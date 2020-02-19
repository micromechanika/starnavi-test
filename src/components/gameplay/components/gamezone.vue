<template>
<div class="gamezone">
  <div class="play">
    <h3>gamezone</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'game'
}
</script>

<style lang="scss" >
.gamezone{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
  .play{
    width: 100px;
    height: 100px;
    background-color: rebeccapurple;
  }
</style>
