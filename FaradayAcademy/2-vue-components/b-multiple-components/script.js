const app = Vue.createApp({
  data() {
    return {

    }
  },
  methods: {

  }
})

app.component('login-form', {
  template: `
    <form @submit.prevent="handleSubmit">
      <h2>{{ title }}</h2>

      <custom-input
        v-for="(input, index) in inputs"
        v-model="input.value"
        :key="index"
        :label="input.label"
        :type="input.type"
      />

      <button>Log in</button>
    </form>
  `,
  components: ['custom-input'],
  data() {
    return {
      title: 'Login Form',
      inputs: [
        {type: 'email', label: 'Email', value: ''},
        {type: 'password', label: 'Password', value: ''}
      ]
    }
  },
  methods: {
    handleSubmit() {
      console.log(`Email address: ${this.inputs[0].value} Password: ${this.inputs[1].value}`);
    }
  }
})

app.component('custom-input', {
  template: `
    <label>
      {{ label }}
      <input
        v-model="inputValue"
        :type="type"
      />
    </label>
  `,
  props: ['label', 'type', 'modelValue'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) { // value is the value obtained from the <input />
        // console.log(value);
        // arg1: type of event being emitted
        // arg2: value passed through the event
        this.$emit('update:modelValue', value) // Emit data around that other components can listen to
      }
    }
  }
  // data() {
  //   return {
  //     label: ''
  //   }
  // }
})

app.mount('#app')
