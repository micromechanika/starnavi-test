export const mixins = {
  methods: {
    randomInteger: function (min, max) {
      const rand = min + Math.random() * (max - min)
      return Math.floor(rand)
    }
  }
}
