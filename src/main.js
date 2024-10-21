import { createApp } from 'vue';
import App from './App.vue';
import router from './app/router';
import store from './store/index';

import '@/styles/main.scss';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');