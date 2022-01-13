import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/style.scss' // Import global CSS file

const app = createApp(App)
app.use(router)
app.mount('#app')
