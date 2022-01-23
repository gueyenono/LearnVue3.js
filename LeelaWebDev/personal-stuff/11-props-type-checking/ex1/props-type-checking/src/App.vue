<template>
  <form>
    <label for="input-name">Name: </label>
    <input ref="inputName" type="text" id="input-name" placeholder="Your name">
    {{ name }}
    <br/><br/>
    <label for="input-city">City: </label>
    <input ref="inputCity" type="text" id="input-city" placeholder="Your city">
    <br/><br/>
    <label for="input-age">Age: </label>
    <input ref="inputAge" v-bind:value="0" type="number" id="input-age" placeholder="Your age">
    <br/><br/>
    <label for="input-application-date">Date of application: </label>
    <input ref="inputDate" type="date" id="input-application-date">
    <br/><br/>
    <label for="input-married">Married: </label>
    <select ref="inputMarried" id="input-married">
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
    <br/><br/>
    <button
      v-on:click.prevent="displayBio"
    >Submit</button>
  </form>
  <hr/>
  <BioDisplay
    v-bind:isDisplayed="isDisplayed"
    v-bind:name="name"
    v-bind:city="city"
    v-bind:age="age"
    v-bind:date="date"
    v-bind:married="married"
  />
</template>

<script>
import BioDisplay from './components/BioDisplay.vue'

export default {
  name: 'App',
  components: {
    BioDisplay
  },
  data() {
    return {
      name: '',
      city: '',
      age: 0,
      date: '',
      married: '',
      isDisplayed: false,
    }
  },
  methods: {
    setValues() {
      this.name = this.$refs.inputName.value
      this.city = this.$refs.inputCity.value
      this.age = Number(this.$refs.inputAge.value)
      this.date = this.$refs.inputDate.value
      this.married = this.$refs.inputMarried.value
    },
    displayBio() {
      this.setValues()
      if(this.name && this.city && this.age !== 0 && !!this.date && this.married){
        this.isDisplayed = true
      } else {
        alert('You need to fill out all your bio information.')
      }
    }
  }
}
</script>

<style>

</style>
