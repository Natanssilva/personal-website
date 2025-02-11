import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';  
import router from './router'; // Importando o router
import './assets/main.css'; 

const app = createApp(App);
app.use(PrimeVue,{
    theme: {
        preset: Material,
        options: {
            // prefix: 'my',
            darkModeSelector: 'none',
            // cssLayer: false
        }
    }
});
app.use(router); 

app.mount('#app');



