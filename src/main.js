import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import '@/styles/main.scss';
import '@/styles/darkTheme.scss';

createApp(App)
  .use(router)
    .use(store)
  .mount('#app');