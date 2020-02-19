<template>
  <div class="matrix">
    <div class="line" v-for="line in lines" :key="line">
      <square v-for="item in items"  :key="item"/>
    </div>
  </div>
</template>

<script>
import square from './square'

export default {
  name: 'squares',
  components: { square },
  props: {
    lines: {
      type: Number,
      default: 1
    },
    items: {
      type: Number,
      default: 5
    }
  }
}
</script>

<style lang="scss">
  .line{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .matrix{
    border: $borderColor solid .1em;
  }
</style>
