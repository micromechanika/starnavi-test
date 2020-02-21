export const mixins = {
  methods: {
    randomInteger: function (min, max) {
      const rand = min + Math.random() * (max - min)
      return Math.floor(rand)
    },
    promise: function () {
      const promise = new Promise((resolve, reject) => {
        resolve('selected')
        reject(new Error('o_O'))
      })
      return promise
    }
  }
}
