import {App} from 'vue';
import ElHeader from './Header.vue'

export default {
    install(app: App) {
        app.component(ElHeader.name, ElHeader);
    }
}