<template>
  <div class="card">
    <div class="card-header bordered">
      <p>{{ student.name }}</p>
    </div>
    <div class="card-body bordered">
    <p
    v-for="score in scores"
    v-bind:key="score"
    >
      {{ score[0] }}: {{ score[1] }}
    </p>
    </div>
    <div class="card-footer bordered">
      <p>Average: {{ average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['student'],
  computed: {
    scores() {
      const student = {...this.student}
      delete student['name']
      return Object.entries(student)
    },
    average() {
      const student = {...this.student}
      delete student['name']
      const sum = Object.values(student).reduce((acc, el) => acc + el, 0)
      return (sum / Object.values(student).length).toFixed(2)
    }
  }
}
</script>

<style scoped>
.bordered {
  border: 1px solid black;
}

.card {
  height: 300px;
  overflow: hidden;
  margin-bottom: 2rem;
  max-width: 400px
}

.card div p {
  text-align: center;
  vertical-align: middle;
}

.card-header {
  height: 20%
}

.card-body {
  height: 60%;
  text-align: center;
  vertical-align: middle;
}

.card-footer {
  height: 20%;
}
</style>
