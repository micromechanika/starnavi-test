<template>
  <div class="pressers">
    <select v-model="selected">
      <option v-for="preset in Presets"
              :value="preset.name"
              :key="preset.name">
        {{ preset.name }}
      </option>
    </select>
    <input v-model="playerName" placeholder="Enter your name" />
    <button  @click="showselected">play</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'presets',
  data () {
    return {
      selected: 'Pick game mode',
      playerName: 'no name user'
    }
  },
  computed: {
    ...mapGetters(['Presets'])
  },
  methods: {
    showselected: function () {
      const show = this.Presets.filter(i => {
        return i.name === this.selected ? i : ''
      })
      console.log(show[0].name)
      console.log(show[0].field)
      console.log(show[0].delay)
    }
  },
  beforeCreate () {
    this.$store.dispatch('Presets')
  }
}
</script>

<style lang="scss">
.pressers {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  select{
    background-color: $selectColor;
  }
  input{
  background-color: $inputColor;
}
  button {
    text-transform: uppercase;
    background-color: $buttonColor;
  }
}
</style>
