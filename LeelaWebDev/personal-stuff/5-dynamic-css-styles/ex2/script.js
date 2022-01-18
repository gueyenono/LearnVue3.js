const app = Vue.createApp({
  data() {
    return {
      inputText: '',
      correctAnswer: false
    }
  },
  watch: {
    inputText(value) {
      if(value === 'LORD') {
        this.correctAnswer = true
      } else {
        this.correctAnswer = false
      }
    }
  },
  methods: {
    setInputText(event) {
      this.inputText = event.target.value
    },
    showAlert() {
      alert(this.inputText)
    }
  }
})

app.mount('#app')
