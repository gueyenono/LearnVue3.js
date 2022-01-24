// Template ===================================================================
<template>
<form>
  <label for="inputName">Name: </label>
  <input
    ref="inputName"
    type="text"
    name="inputName"
    id="inputName"
    placeholder="Enter your name here."
  />
  <br/><br/>
  <label for="inputAge">Age: </label>
  <input
    ref="inputAge"
    type="number"
    name="inputAge"
    id="inputAge"
  />
  <br/><br/>
  <button
    v-on:click.prevent="updateInputs"
    type="button"
    name="button"
  >Submit</button>
</form>
</template>


// Script ===================================================================
<script>
export default {
  emits: ['update-inputs'],
  mounted() {
    this.$refs.inputAge.value = this.bio.age
  },
  data() {
    return {
      bio: {
        age: 0,
        name: '',
      }
    }
  },
  methods: {
    updateInputs() {
      if(!this.$refs.inputName.value) {
         alert("You need to write your name.")
         return
      }
      if(Number(this.$refs.inputAge.value) === 0) {
        alert("You cannot be 0 year old.")
        return
      }
      this.bio.age = Number(this.$refs.inputAge.value)
      this.bio.name = this.$refs.inputName.value
      this.$emit("update-inputs", this.bio)
    }
  }
}
</script>


// Style ===================================================================
<style>

</style>
