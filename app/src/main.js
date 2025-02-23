import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
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

// const Noir = definePreset(Aura, {
//   semantic: {
//     primary: {
//       50: '#E5D7F7',   // Tom bem claro
//       100: '#D1A9F0',  // Claro, mas com mais saturação
//       200: '#B07FEA',
//       300: '#8F55E4',  // Tom intermediário
//       400: '#7A33DF',  // Mais saturado, um pouco mais intenso
//       500: '#7447E1',  // Cor base
//       600: '#5F29D0',  // Um tom mais escuro
//       700: '#4A1CA1',  // Ainda mais escuro
//       800: '#3D1B83',  // Muito mais escuro
//       900: '#2F1765',  // Tom muito profundo
//       950: '#200F4D'   // Quase um tom de vinho
//     },
//     colorScheme: {
//       light: {
//         primary: {
//           color: '#7447E1',   // Cor do texto principal em modo claro (quase preto)
//           inverseColor: '#7447E1',  // Cor inversa para texto claro
//           hoverColor: '#7447E1',    // Tom de roxo mais claro para hover
//           activeColor: '#7447E1'    // Tom de roxo mais intenso para o estado ativo
//         },
//         highlight: {
//           background: '#7447E1',    // Fundo suave para destaque, baseado na cor 50
//           focusBackground: '#7447E1', // Fundo de foco mais forte, baseado no tom 100
//           color: '#7447E1',         // Cor do texto do destaque
//           focusColor: '#7447E1'     // Cor de texto de foco, o roxo base
//         }
//       },
//       dark: {
//         primary: {
//           color: '#7447E1',    // Cor clara para texto em fundo escuro
//           inverseColor: '#7447E1',  // Cor escura para elementos em fundo escuro
//           hoverColor: '#7447E1',    // Tom de hover mais suave
//           activeColor: '#7447E1'    // Tom de roxo mais escuro para o estado ativo
//         },
//         highlight: {
//           background: '##7447E1',   // Fundo mais saturado para o destaque no dark mode
//           focusBackground: '##7447E1', // Fundo de foco mais intenso
//           color: '#E5D7F7',         // Cor do texto no destaque (claro para contraste)
//           focusColor: '#7447E1'     // Cor de foco do texto (o roxo base)
//         }
//       }
//     }
//   }
// });

const i18n = createI18n({
  legacy: false, 
  locale: 'pt',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en: {
      message: {
        hello: "Hello, I'm ",
        menu: {
          home: 'Home',
          about: 'About Me',
          xp: 'Professional experience',
          projects: 'Projects',
          contact: 'Contact',
        },
        cv: 'Resume'
      },
    },
    pt: {
      message: {
        hello: 'Olá, eu sou',
        menu: {
          home: 'Home',
          about: 'Sobre',
          xp: 'Experiência',
          projects: 'Projetos',
          contact: 'Contato',
        },
        cv: 'Currículo'
      },
    },
  },
})

const app = createApp(App)

library.add(faLinkedinIn, faEnvelope, faGithub)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})
app.use(router)
app.use(i18n)

// Registra o componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
