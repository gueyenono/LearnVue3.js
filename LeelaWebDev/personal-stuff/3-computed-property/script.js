const app = Vue.createApp({
  data () {
    return {
      name: 'Speaker',
      displayedName: '',
      guests: 0,
      displayedGuests: 0
    }
  },
  methods: {
    setName (event) {
      this.name = event.target.value
    },
    setGuests (event) {
      this.guests = event.target.value
    },
    updateDisplayedName () {
      this.displayedName = this.name
    },
    updateDisplayedGuests () {
      this.displayedGuests = this.guests
    },
    updateNameAndGuests () {
      console.log('This is being run.');
      this.updateDisplayedName()
      this.updateDisplayedGuests()
    },
    increment () {
      this.guests++
    },
    decrement () {
      this.guests--
    },
    displaySpeaker () {
      return `Dr. ` + this.name + ` (Jr.)`
      console.log('This code is being executed.');
    }
  }
})

app.mount('#app')
