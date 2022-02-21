import { createApp } from 'vue'
import App from './App.vue'
import ELHeader from './components/container';
import ELButton from './components/button';

var app = createApp(App)

app.config.globalProperties.$CUSTOMELEMENT = { size:'large'}
app.use(ELHeader)
   .use(ELButton)
   .mount('#app')
