const app = Vue.createApp({
  beforeMount () {
    this.setRnd()
  },
  data () {
    return {
      rnd: 0
    }
  },
  methods: {
    setRnd () {
      this.rnd = Math.random().toFixed(3)
    }
  }
})

app.mount('#app')
