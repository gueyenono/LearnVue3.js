<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <ReportCard
    v-for="student in students"
    v-bind:key="student"
    v-bind:student="student"
  />
</template>

<script>
import ReportCard from './components/ReportCard.vue'

export default {
  name: 'App',
  components: {
    ReportCard
  },
  data() {
    return {
      students: [
        {
          name: 'Nitani Ethan Gueye',
          maths: 82,
          eng: 100,
          econ: 97
        },
        {
          name: 'Esther Nadjouma Akodmo',
          hist: 88,
          geo: 95,
          cs: 100
        },
        {
          name: 'Ghislain Nono Gueye',
          phys: 80,
          fin: 92,
          cis: 93
        },
      ]
    }
  }
}
</script>

<style>

</style>
