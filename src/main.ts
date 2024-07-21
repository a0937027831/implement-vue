import './assets/main.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import { worker } from './mock/browser';
import 'primeflex/primeflex.css';

import App from './App.vue';
import router from './router';

import Menu from 'primevue/menu';
import { VueQueryPlugin } from '@tanstack/vue-query';
import Button from 'primevue/button';

if (import.meta.env.MODE === 'development') {
  worker.start().then(() => {
    const app = createApp(App);

    app.use(VueQueryPlugin);
    app.use(createPinia());
    app.use(router);
    app.use(PrimeVue, { ripple: true, theme: { preset: Aura } });

    app.component('Menu', Menu);
    app.component('Button', Button);

    app.mount('#app');
  });
}
