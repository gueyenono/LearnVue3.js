let app = Vue.createApp({ // the options object
  data: function() {
    return {
      greeting: 'Hello Vue 3!',
      isVisible: false,
      isVisible2: false
    }
  },
  methods: {
      toggleBox() {
        this.isVisible = !this.isVisible
      },
      greet(word) {
        console.log(greeting)
      }
  }
})

app.mount('#app')
