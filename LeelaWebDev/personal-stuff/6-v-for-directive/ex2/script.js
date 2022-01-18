const app = Vue.createApp({
  data() {
    return {
      newToDo: '',
      todos: []
    }
  },
  methods: {
    addToDo() {
      this.todos.push(this.newToDo)
      this.newToDo = ''
    },
    removeToDo(index) {
      this.todos.splice(index, 1)
    },
    // removeToDo(event) {
    //   event.target.remove()
    // }
  }
})

app.mount('#app')
