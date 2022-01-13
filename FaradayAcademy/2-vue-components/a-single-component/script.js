// Main app instance

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
      <h2> {{ title }} </h2>
      <input type="email" v-model="email"/>
      <input type="password" v-model="password"/>
      <button>Log in</button>
    </form>
  `,
  data() {
    return {
      title: 'Login Form',
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('Submitted!');
      console.log(this.email, this.password);
    }
  }
})

app.mount('#app')



// Components
