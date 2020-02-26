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
    <button id="play">{{this.play?'play again':'play'}}</button>
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
    playGame: function (e) {
      if (this.selected === 'Pick game mode') {
        e.preventDefault()
        this.$store.commit('resetState')
      } else {
        this.$store.commit('resetState')
        this.$store.commit('selected', this.selected)
        this.$store.commit('name', this.playerName !== '' ? this.playerName.trim().slice(0, 15) : 'no name user')
      }
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
  },
  mounted () {
    document.getElementById('play').addEventListener('click', this.playGame, false)
  }
}
</script>

<style lang="scss">
.pressers {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 3em;
  select{
    display: block;
    height: 100%;
    font-size: 1em;
    padding: .6em 1.4em .5em .8em;
    line-height: 1.3;
    color: $selectTextColor;
    background-color: $selectColor;
    border: 1px solid $selectColor;
    border-radius: 7px;
    appearance: none;

    background-image: url('../../../../public/v.svg'),
    linear-gradient(to bottom, $selectColor 0%, $selectColor 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;

    option{
      font-weight:normal;
    }
    :focus{
      border-color: #aaa;
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222;
      outline: none;
    }
    :hover{
      border-color: #888;
    }
    ::-ms-expand{
      display: none;
    }
  }
  input{
  height: 100%;
  font-size: 1em;
  padding: .6em 1.4em .5em .8em;
  color: $inputTextColor;
  background-color: $inputColor;
  border: 1px solid $inputColor;
  border-radius: 7px;
}
  button {
    width: 8em;
    height: 100%;
    font-size: 1em;
    color: $buttonTextColor;
    text-transform: uppercase;
    background-color: $buttonColor;
    border: 1px solid $buttonColor;
    border-radius: 7px;
  }

}
</style>
