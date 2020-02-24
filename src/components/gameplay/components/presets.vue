<template>
  <div class="pressers">
    <select v-model="selected" @click="pressetsSelect">
      <option v-for="preset in Presets"
              :value="preset.name"
              :key="preset.name">
        {{ preset.name }}
      </option>
    </select>
    <input v-model="playerName" placeholder="Enter your name" />
    <button id="play" @click="playGame">{{this.play>=1?'play again':'play'}}</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'presets',
  data () {
    return {
      selected: 'Pick game mode',
      playerName: ''
    }
  },
  computed: {
    ...mapGetters(['Presets', 'play'])
  },
  methods: {
    playGame: function () {
      this.$store.commit('resetState')
      this.$store.commit('name', this.playerName !== '' ? this.playerName : 'no name user')
    },
    pressetsSelect: function () {
      const selectPreset = this.Presets.filter(i => {
        return i.name === this.selected ? i : ''
      })
      let lines = null
      const squares = 5

      for (let i = 0; i < selectPreset[0].field; i++) {
        if (i % 5 === 0) lines += 1
      }

      this.$store.commit('lines', lines)
      this.$store.commit('squares', squares)
      this.$store.commit('delay', selectPreset[0].delay)
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
