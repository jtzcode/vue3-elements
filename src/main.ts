import { createApp } from 'vue'
import App from './App.vue'
import ELHeader from './components/container';

var app = createApp(App)
app.use(ELHeader).mount('#app')
