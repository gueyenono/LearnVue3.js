<template>
  <div
    v-if="visible.value"
    class="bordered"
  >
    <h2>Here is a modal</h2>
    <button
      @click.prevent="hideModal"
    >Hide</button>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    inject: ['visible', 'hideModal']
  }
</script>

<style scoped>

</style>
