import { createApp } from 'vue'
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* importing specific icons */
import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'

/* adding icons to the library */
library.add(faUpLong, faDownLong);


createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
