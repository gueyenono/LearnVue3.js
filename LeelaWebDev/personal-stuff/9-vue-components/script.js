const app = Vue.createApp({
  components: ['student-card'],
  data() {
    return {
      scores: [
      {
        name: 'Nitani',
        maths: 95,
        econ: 82,
        fren: 82
      },
      {
        name: 'Esther',
        maths: 97,
        stats: 81,
        eng: 80
      },
      {
        name: 'Nono',
        phil: 92,
        econ: 80,
        eng: 89
      },
      ]
    }
  }
})

app.component('student-card', {
  props: ['student'],
  template: `
    <div class="card">

      <div class="card-header">
        Name: {{ studentName }}
      </div>

      <div class="card-body">
        <ul>
          <li
            v-for="score in studentScores"
          > {{ score[0]}}: {{ score[1] }} </li>
        </ul>
      </div>

      <div class="card-footer">
        Average: {{ studentAverage }}
      </div>

    </div>
  `,
  data() {
    return {

    }
  },
  computed: {
    studentName() {
      return this.student.name
    },
    studentScores() {
      const student2 = {...this.student}
      delete student2['name']
      return Object.entries(student2)
    },
    studentAverage() {
      const student2 = {...this.student}
      delete student2['name']
      const sum = Object.values(student2).reduce((acc, el) => acc + el, 0)
      return (sum / Object.values(student2).length).toFixed(2)
    }
  },
  methods: {

  }
})

app.mount('#app')
