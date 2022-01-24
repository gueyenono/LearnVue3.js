// Template --------------------------------------------------------------------
<template>
<div class="box">
  <div class="box">
    <div v-bind="$attrs" class="box">

    </div>
  </div>
</div>
</template>



// Script ----------------------------------------------------------------------
<script>
export default {
  inheritAttrs: false,
  mounted() {
    console.log(this.$attrs.class);
  }
}
</script>



// Style -----------------------------------------------------------------------
<style scoped>
.box {
  border: 1px solid black;
  padding: 1rem;
}

.colored-grey {
  background-color: grey;
}

/* .colored-blue {
  background-color: blue;
} */
</style>
