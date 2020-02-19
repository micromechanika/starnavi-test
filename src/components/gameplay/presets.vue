<template>
  <div class="pressers">
    <select v-model="selected">
      <option v-for="option in options" :value="option.name" :key="option.name">
        {{ option.name }}
      </option>
    </select>
    <input v-model="playerName" placeholder="Enter your name" />
    <button @click="showselected">play</button>
  </div>
</template>

<script>
export default {
  name: 'presets',
  data () {
    return {
      selected: 'Pick game mode',
      playerName: 'no name user',
      options: [
        { name: 'Pick game mode', field: null, delay: null },
        { name: 'easyMode', field: 5, delay: 2000 },
        { name: 'normalMode', field: 10, delay: 1000 },
        { name: 'hardMode', field: 15, delay: 900 }
      ]
    }
  },
  methods: {
    showselected: function () {
      const show = this.options.filter(i => {
        return i.name === this.selected ? i : ''
      })
      console.log(show[0].name)
      console.log(show[0].field)
      console.log(show[0].delay)
    }
  }
}
</script>

<style lang="scss">
.pressers {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  button {
    text-transform: uppercase;
  }
}
</style>
