export const mixins = {
  methods: {
    randomInteger: function (min, max) {
      const rand = min + Math.random() * (max - min)
      return Math.floor(rand)
    },
    promise: function () {
      const promise = new Promise((resolve, reject) => {
        resolve()
        reject(new Error('in selected something broke'))
      })
      return promise
    }
  }
}
