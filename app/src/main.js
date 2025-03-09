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
import { faHtml5, faCss3Alt, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons'; // Se você tiver o ícone Vue.js do Font Awesome
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { createI18n } from 'vue-i18n'


const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E5D7F7',   // Tom bem claro
      100: '#D1A9F0',  // Claro, mas com mais saturação
      200: '#B07FEA',
      300: '#8F55E4',  // Tom intermediário
      400: '#7A33DF',  // Mais saturado, um pouco mais intenso
      500: '#7447E1',  // Cor base
      600: '#5F29D0',  // Um tom mais escuro
      700: '#4A1CA1',  // Ainda mais escuro
      800: '#3D1B83',  // Muito mais escuro
      900: '#2F1765',  // Tom muito profundo
      950: '#200F4D'   // Quase um tom de vinho
    },
    colorScheme: {
      light: {
        primary: {
          color: '#7447E1',   // Cor do texto principal em modo claro (quase preto)
          inverseColor: '#7447E1',  // Cor inversa para texto claro
          hoverColor: '#7447E1',    // Tom de roxo mais claro para hover
          activeColor: '#7447E1'    // Tom de roxo mais intenso para o estado ativo
        },
        highlight: {
          background: '#7447E1',    // Fundo suave para destaque, baseado na cor 50
          focusBackground: '#7447E1', // Fundo de foco mais forte, baseado no tom 100
          color: '#7447E1',         // Cor do texto do destaque
          focusColor: '#7447E1'     // Cor de texto de foco, o roxo base
        }
      },
      dark: {
        primary: {
          color: '#7447E1',    // Cor clara para texto em fundo escuro
          inverseColor: '#7447E1',  // Cor escura para elementos em fundo escuro
          hoverColor: '#7447E1',    // Tom de hover mais suave
          activeColor: '#7447E1'    // Tom de roxo mais escuro para o estado ativo
        },
        highlight: {
          background: '##7447E1',   // Fundo mais saturado para o destaque no dark mode
          focusBackground: '##7447E1', // Fundo de foco mais intenso
          color: '#E5D7F7',         // Cor do texto no destaque (claro para contraste)
          focusColor: '#7447E1'     // Cor de foco do texto (o roxo base)
        }
      }
    }
  }
});

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en: {
      message: {
        hello: "Hello, I'm ",
        brainstorm: 'Turning ideas into code, and code into innovation.',
        menu: {
          home: 'Home',
          about: 'About Me',
          xp: 'Professional experience',
          projects: 'Projects',
          contact: 'Contact',
        },
        cv: 'View CV',
        views: {
          about: {
            title: 'About me',
            text: {
              init: `I am a Full-Stack Developer passionate about technology and transforming ideas into innovative solutions.
                    My focus is on creating and maintaining scalable, high-performance and intuitive web applications, always seeking the best experience for users.`,
              mid: `My journey into technology began in 2022, when I started my undergraduate degree in Computer Science and had my first contact with algorithms and software development.
                    Over time, I realized that my calling was in web development and I moved to the Internet Systems course, where I am now in the final stretch.
                    This transition gave me a solid foundation to work in the technology market.`,
              end: `In 2023, I began my professional career in the IT area as a Support and Infrastructure intern.
                    Since then, I have progressed to the position of Junior Web Developer, focusing on back-end with PHP and front-end with JavaScript.
                    In my day-to-day work,  I work on developing scalable applications, following good coding practices, applying tests and always seeking to improve my expertise to deliver high-quality products.`,
            },
          },
        },
      },
    },
    pt: {
      message: {
        hello: 'Olá, eu sou',
        brainstorm: 'Transformando ideias em código, e código em inovação.',
        menu: {
          home: 'Home',
          about: 'Sobre',
          xp: 'Experiência',
          projects: 'Projetos',
          contact: 'Contato',
        },
        cv: 'Ver currículo',
        views: {
          about: {
            title: 'Sobre mim',
            text: {
              init: `Sou um Desenvolvedor Full-Stack apaixonado por tecnologia e por transformar ideias em soluções inovadoras. 
                      Meu foco está na criação e manutenção de aplicações web escaláveis, performáticas e intuitivas, sempre buscando a melhor experiência para os usuários.`,
              mid: ` Minha jornada na tecnologia começou em 2022, quando iniciei a graduação em Ciência da Computação e tive meu primeiro contato com algoritmos e desenvolvimento de software. 
                    Com o tempo, percebi que minha vocação estava no desenvolvimento web e migrei para o curso de Sistemas para Internet, onde hoje estou na reta final. 
                    Essa transição me proporcionou uma base sólida para atuar no mercado de tecnologia.`,
              end: `Em 2023, dei início à minha trajetória profissional na área de TI como estagiário de Suporte e Infraestrutura. 
                    Desde então, evoluí para a posição de Desenvolvedor Web Júnior, com foco em back-end com PHP e front-end com JavaScript. 
                    No meu dia a dia, trabalho no desenvolvimento de aplicações escaláveis, seguindo boas práticas de código, aplicando testes e sempre buscando aprimorar minha expertise para entregar produtos de alta qualidade.`,
            },
          },
        },
      },
    },
  },
})

const app = createApp(App)


app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})
app.use(router)
app.use(i18n)

library.add(faLinkedinIn, faEnvelope, faGithub, faHtml5, faCss3Alt, faPhp, faVuejs,faJsSquare,faChevronLeft, faChevronRight, faDatabase,faCodeBranch)
// Registra o componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
