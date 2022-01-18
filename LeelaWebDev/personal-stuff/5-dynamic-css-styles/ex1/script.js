const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  methods: {
    toggleBoxColor(bool) {
      if(bool === 'A') {
        this.boxASelected = !this.boxASelected
      } else if(bool === 'B') {
        this.boxBSelected = !this.boxBSelected
      } else if(bool === 'C') {
        this.boxCSelected = !this.boxCSelected
      }
    }
  }
})

app.mount('#app')
