import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';  
import router from './router'; // Importando o router
import './assets/main.css'; 

const app = createApp(App);
app.use(PrimeVue,{
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});
app.use(router); 

app.mount('#app');



