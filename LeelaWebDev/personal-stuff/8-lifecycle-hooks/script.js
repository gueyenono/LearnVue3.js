const app = Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  beforeCreate() {
    console.log('Before create');
  },
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before mount');
  },
  mounted() {
    console.log('Mounted');
  },
  beforeUnmount() {
    console.log('Before unmount');
  },
  unmounted() {
    console.log('Unmounted');
  }
})

app.mount('#app')

setTimeout(() => {
  app.unmount()
}, 5000)
