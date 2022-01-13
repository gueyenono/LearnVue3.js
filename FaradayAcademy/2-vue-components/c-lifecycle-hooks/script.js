const app = Vue.createApp({
  updated() {
    console.log('Main Vue instance updated');
  }
})

app.component('main-component', {
  components: ['button-component', 'box-component'],
  template: `
  <button-component @click="toggleBox" />
  <hr>
  <box-component v-if="isVisible" />
  `,
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible
    }
  },
  updated() {
    console.log('main-component updated');
  }
})

app.component('button-component', {
  template: `
    <button>Toggle box</button>
  `
})

app.component('box-component', {
  template: `
    <div class="box"></div>
  `,
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  unmounted() {
    console.log('unmounted');
  }
})


app.mount('#app')
