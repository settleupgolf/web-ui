import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import App from '@/App.vue';
// import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';

import 'primevue/resources/themes/lara-light-teal/theme.css';

createApp(App).use(store).use(PrimeVue).use(router).mount('#app');
