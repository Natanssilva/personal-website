import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import router from './router' // Importando o router
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
})

const app = createApp(App)

library.add(faLinkedinIn, faEnvelope,faGithub)

app.use(i18n) 
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})
app.use(router)

// Registra o componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
