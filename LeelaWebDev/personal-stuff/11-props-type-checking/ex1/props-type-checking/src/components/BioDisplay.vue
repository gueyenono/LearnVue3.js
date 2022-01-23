// Template --------------------------------------------------------------------
<template>
  <div
    v-if="isDisplayed"
  >
    <p>Your name is <span>{{name}}</span>.</p>
    <p>You live in <span>{{city}}</span>.</p>
    <p>You are <span>{{age}}</span> years old.</p>
    <p>You are <span v-if="married === 'false'">not</span> married.</p>
    <p>It's been <span>not</span> days since you applied.</p>
  </div>
</template>


// Script --------------------------------------------------------------------
<script>
export default {
  props: {
    isDisplayed: {
      type: Boolean,
      required: true
    },
    name: String,
    city: String,
    age: {
      type: Number,
      required: true,
      validator: function(value) {
        return value >= 0
      }
    },
    // date: {
    //   type: Date,
    //   required: true,
    //   default: new Date(Date.now())
    // },
    married: {
      type: String,
      required: true
    },
  },
}
</script>


// Style --------------------------------------------------------------------
<style>

</style>
