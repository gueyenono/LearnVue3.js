<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <button
       @click.prevent="showModal"
    >Show</button>
    <Container />
  </div>
</template>

<script>
import Container from '@/components/Container.vue'
import {computed} from 'vue'

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      visible: false
    }
  },
  provide() {
    return {
      visible: computed(() => this.visible),
      hideModal: this.hideModal
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    hideModal() {
      this.visible = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bordered {
  border: 1px solid black;
}
</style>
