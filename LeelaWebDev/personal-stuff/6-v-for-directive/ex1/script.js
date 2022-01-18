const app = Vue.createApp({
  data() {
    return {
      todos: [],
      input: ''
    }
  },
  methods: {
    addToDo() {
      this.todos.push(this.input)
      this.input = ''
    },
  }
})

app.mount('#app')
