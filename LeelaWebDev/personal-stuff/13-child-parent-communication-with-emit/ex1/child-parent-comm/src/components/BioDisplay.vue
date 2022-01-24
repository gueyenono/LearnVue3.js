// Template ====================================================================
<template>
  <div>
    <p v-if="bio.name !== ''">Your name is: {{ bio.name}}.</p>
    <p v-if="bio.age !== 0">You are years {{ bio.age }} old.</p>
  </div>
</template>


// Script ======================================================================
<script>
export default {
  props: {
    bio: {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    },
    isDisplayed: {
      type: Object,
      required: true,
    }
  }
}
</script>


// Style ====================================================================
<style>

</style>
