<template>
  <div class="main-box">
    <img alt="Vue logo" src="./assets/logo.png">
    <BioForm
      v-on:update-inputs="updateInputs"
    />
    <hr/>
    <BioDisplay
      v-bind:bio="{...bio}"
      v-bind:isDisplayed = "isDisplayed"
    />
  </div>
</template>

<script>
import BioForm from './components/BioForm.vue'
import BioDisplay from './components/BioDisplay.vue'

export default {
  name: 'App',
  components: {
    BioForm,
    BioDisplay
  },
  data() {
    return {
      bio: {
        age: 0,
        name: '',
      },
      isDisplayed: {
        name: false,
        age: false
      }
    }
  },
  methods: {
    updateInputs(event) {
      this.bio.age = event.age
      this.bio.name = event.name
      console.log(`New age: ${event.age}
        New name: ${event.name}`);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-box {
  border: 1px solid black;
  border-radius: 5%;
  width: 50vw;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
}
</style>
