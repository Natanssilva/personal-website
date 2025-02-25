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
        cv: 'Resume',
        views: {
          about: {
            title: 'About me',
            text:  {
              init: `I am a Full-Stack developer focused on building and maintaining scalable,
          high-performance, and intuitive web applications. I've always been fascinated by
          technology and the ability to solve real-world problems through code. Since the beginning
          of my studies, I've actively sought out challenges and continually deepened my knowledge
          in developing innovative solutions.`,
              mid: `My journey began in 2022 when I started my degree in
          Computer Science and had my first exposure to algorithms and software development. After
          some time, I switched to a Systems for the Internet course, which I am now finishing, and
          it provided me with a solid foundation for entering the tech job market. In 2023, I began
          my professional career in IT as an intern in IT Support and Infrastructure.`,
              end: `Over time, I
          advanced to the role of Junior Web Developer. During this process, I focused particularly
          on back-end development, working with scalable applications, testing, and coding best
          practices.`
            }
          },
        },
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
        cv: 'Currículo',
        views: {
          about: {
            title: 'Sobre mim',
            text: {
              init: `Sou um desenvolvedor Full-Stack focado em criar e manter aplicações web escaláveis,
          performáticas e intuitivas. Sempre fui fascinado por tecnologia e pela capacidade de
          resolver problemas reais por meio de código. Desde o início dos meus estudos, busquei
          desafios e me aprofundei constantemente no desenvolvimento de soluções inovadoras.`,
              mid: `  Minha jornada começou em 2022, quando iniciei a graduação em Ciência da Computação e tive meu
          primeiro contato com algoritmos e desenvolvimento de software. Após algum tempo, decidi
          migrar para o curso de Sistemas para Internet, no qual estou agora na reta final, e que me
          proporcionou uma introdução sólida ao mercado de trabalho de tecnologia. Em 2023, comecei
          minha trajetória profissional na área de TI como estagiário de Suporte e Infraestrutura.`,
            end: `Ao longo do tempo, evoluí para a posição de Desenvolvedor Web Júnior. Durante esse
          processo, foquei especialmente em back-end, trabalhando com aplicações escaláveis, testes
          e boas práticas de codificação.`
            }
          },
        },
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
