const app = Vue.createApp({
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    displayMsg() {
      this.msg = this.$refs.textInput.value
    }
  }
})

app.mount('#app')
