const app = Vue.createApp({
  data () {
    return {
      inputText: '',
      updatedText: ''
    }
  },
  methods: {
    // logEvent (event, text) {
    //   console.log(event, text);
    // },
    setInputText (event) {
      this.inputText = event.target.value
    },
    updateText () {
      this.updatedText = this.inputText
    }
  }
})

app.mount('#app')
