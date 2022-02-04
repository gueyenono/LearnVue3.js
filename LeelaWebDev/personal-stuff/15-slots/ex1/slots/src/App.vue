<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Card>
    <template #header>
      <h3>Header</h3>
    </template>
    <template #content><img src="https://picsum.photos/200" /></template>
    <template #footer>
      <p>Footer</p>
    </template>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'App',
  components: {
    Card
  },
  mounted() {
    console.log(this.$slots);
  }
}
</script>

<style>

</style>
