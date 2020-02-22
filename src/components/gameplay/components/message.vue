<template>
<div class="message" >
    <h3 v-show="winner" >{{winner}}</h3>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'message',
  computed: {
    ...mapGetters(['winner'])
  }
}
</script>

<style lang="scss" >
.message{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1em;
  width: auto;
  height: 3em;
  h3{
    font-size: 1em;
    color: $messageColor;
  }
}

</style>
