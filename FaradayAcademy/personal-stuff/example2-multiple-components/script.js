const app = Vue.createApp({
  components: ['main-component']
})

// Main component
app.component(`main-component`, {
  components: ['report-header', 'score-input'],
  template: `
    <report-header />

    <hr><hr>

    <div class="inputs">
      <score-input
        v-for="(input, index) in inputs"
        v-model="input.score"
        :key="index"
        :course="input.course"
      />
    </div>

    <button @click="handleSubmit">Submit</button>

    <br><br>
    <hr><hr>

    <gpa-output v-if="avg" :avg="avg"/>
  `,
  data() {
    return {
      inputs: [
        {course: 'Economics', score: 0},
        {course: 'Mathematics', score: 0},
        {course: 'English', score: 0}
      ],
      avg: ''
    }
  },
  methods: {
    handleSubmit() {
      let sum = this.inputs.map((x) => x.score)
        .reduce((acc, el) => acc + el, 0)
      this.avg = (sum/this.inputs.length).toFixed(2)
    }
  }
})

// Header component
app.component(`report-header`, {
  template: `
    <h1>{{ lastName }}, {{ firstName }} </h1>
    <h3>Student ID: {{ id }}</h3>
  `,
  data() {
    return {
      firstName: 'Nitani',
      lastName: 'Gueye',
      id: 12345
    }
  }
})

// Input component
app.component(`score-input`, {
  template: `
    <label>
      {{ course }}
      <input
        v-model="inputValue"
        type="number"
      />
    </label>
  `,
  props: ['course', 'modelValue'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})

// Output component
app.component(`gpa-output`, {
  template: `
    <div class="output">
      <p>The student's final average is: <span class="avg">{{ avg }}</span></p>
    </div>
  `,
  props: ['avg']
})

app.mount('#app')
