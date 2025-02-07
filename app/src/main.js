import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';  
import router from './router'; // Importando o router
import './assets/main.css'; 

// criar meu preset de style do framework
// verificar pq o tailwind nao ta funcionando corretamente
// const MyPreset = definePreset(Aura, {
//     semantic: {
     
//     }
// });


const app = createApp(App);
app.use(PrimeVue,{
    theme: {
        preset: Aura,
        options: {
            // prefix: 'my',
            darkModeSelector: 'none',
            // cssLayer: false
        }
    }
});
app.use(router); 

app.mount('#app');



