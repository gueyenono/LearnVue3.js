const app = Vue.createApp({
  data() {
    return {
      age: 0,
      level: 0,
    }
  },
  watch: {
    age(value) {
      if(value < 0) {
        this.age = 0
        alert("Your character's age cannot be less than 0.")
      }
    },
    level(value) {
      if (value < 0) {
        this.level = 0
        alert('You cannot set a level less than 0.')
      } else if (value > 10) {
        this.level = 10
        alert('You cannot set a level higher than 10.')
      }
    }
  },
  computed: {
    computeAtk() {
      return (this.age*0.1 + this.level*0.75).toFixed(3)
    }
  },
  methods: {

  }
})

app.mount('#app')
