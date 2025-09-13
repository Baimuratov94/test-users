import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

createApp(App).mount('#app')
