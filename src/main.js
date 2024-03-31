import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './main.css'
import router from './router/index.js'
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.mount('#app')
