import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

//font awesome icons
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'

const app = createApp(App)
app.use(store)
app.mount('#app')
