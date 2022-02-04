<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br/>
  <button @click="selectComponentOne">Comp 1</button>
  <button @click="selectComponentTwo">Comp 2</button>
  <button @click="selectComponentThree">Comp 3</button>

  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
</template>

<script>
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import Component3 from './components/Component3.vue'

export default {
  name: 'App',
  components: {
    Component1,
    Component2,
    Component3,
  },
  data() {
    return {
      selectedComponent: 'component-1'
    }
  },
  methods: {
    selectComponentOne() {
      this.selectedComponent = 'component-1'
    },
    selectComponentTwo() {
      this.selectedComponent = 'component-2'
    },
    selectComponentThree() {
      this.selectedComponent = 'component-3'
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
</style>
