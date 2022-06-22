import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faXmark, faPlus)


createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
