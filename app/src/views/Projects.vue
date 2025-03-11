<template>
  <main class="principal-content flex flex-col w-full justify-center items-center min-h-screen">
    <div class="text-center flex flex-col items-center">
      <span  v-html="$t('message.views.projects.text')">
      </span>
      <div class="flex flex-col items-center training-content">
        <span class="text-training underline">{{ t('message.views.projects.arrowText') }}</span>
        <span class="bounce-icon">
          <i class="pi pi-arrow-down" />
        </span>
      </div>
    </div>

    <div class="swiper">
      <div class="swiper-wrapper">
        <!-- Gerar cards dinamicamente com v-for -->
        <div class="swiper-slide" v-for="(project, index) in projects" :key="index">
          <div class="flex flex-col h-full">
            <img :src="project.image" alt="" class="img-card rounded-t-md" />

            <div class="flex flex-col flex-1 gap-2 min-h-[15rem]">
              <h3 class="title-card">{{ t(project.title) }}</h3>
              <div>
                <a
                  :href="project.repoLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-card flex items-center gap-3 hover:underline"
                >
                  <font-awesome-icon :icon="['fab', 'github']" /> Repositório
                </a>

                <p class="text-card">{{ t(project.description) }}</p>
              </div>
              <div class="icons-card">
                <font-awesome-icon
                  v-for="(tech, index) in project.technologies"
                  :key="index"
                  :icon="tech"
                  class="icons-tech"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Paginação -->
      <div class="swiper-pagination"></div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Pokedex from '@/assets/img/pokedex-img.png'
import Threads from '@/assets/img/threads.jpeg'
import AppleImg from '@/assets/img/apple-notices.jpg'
import CoffePic from '@/assets/img/coffee-pic.png'
import GitGithub from '@/assets/img/git-github.png'
import Countdown from '@/assets/img/foguete.jpg'

const { t } = useI18n();

const projects = ref([
  {
    title: 'message.views.projects.pokedex.title',
    description: 'message.views.projects.pokedex.text',
    image: Pokedex,
    repoLink: 'https://github.com/Natanssilva/Pokedex',
    technologies: [
      ['fab', 'html5'],
      ['fab', 'js-square'],
      ['fab', 'css3-alt'],
    ],
  },
  {
    title: 'message.views.projects.threads.title',
    description: 'message.views.projects.threads.text',
    image: Threads,
    repoLink: 'https://github.com/Natanssilva/Sistemas_operacionais/',
    technologies: [
      ['fab', 'js-square'],
    ],
  },
  {
    title: 'message.views.projects.newspaper.title',
    description: 'message.views.projects.newspaper.text',
    image: AppleImg,
    repoLink: 'https://github.com/Natanssilva/newspaperProject',
    technologies: [
      ['fab', 'js-square'],
      ['fab', 'html5'],
      ['fab', 'css3-alt'],
      ['fab', 'php'],
      ['fas', 'database'],
    ],
  },
  {
    title: 'message.views.projects.emporiumCoffee.title',
    description: 'message.views.projects.emporiumCoffee.text',
    image: CoffePic,
    repoLink: 'https://github.com/Natanssilva/EmporiumCoffee',
    technologies: [
      ['fab', 'js-square'],
      ['fab', 'html5'],
      ['fab', 'css3-alt'],
    ],
  },
  {
    title: 'message.views.projects.versionamento.title',
    description: 'message.views.projects.versionamento.text',
    image: GitGithub,
    repoLink: 'https://github.com/Natanssilva/projetogit',
    technologies: [
      ['fas', 'code-branch'],
    ],
  },
  {
    title: 'message.views.projects.countdown.title',
    description: 'message.views.projects.countdown.text',
    image: Countdown,
    repoLink: 'https://github.com/Natanssilva/Countdown',
    technologies: [
      ['fab', 'js-square'],
      ['fab', 'html5'],
      ['fab', 'css3-alt'],
    ],
  }
]);

onMounted(() => {
  new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1188: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  })
});


</script>

<style scoped>
.bounce-icon {
  height: 32px; /* Equivalente a h-8 */
  width: 32px; /* Equivalente a w-8 */
  background-color: var(--primary-color); /* Substitua pela cor desejada */
  color: var(--primary-contrast-color); /* Substitua pela cor desejada */
  border-radius: 50%; /* Equivalente a rounded-full */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: bounce 1s infinite;
}

/* Animação bounce (sem Tailwind) */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.training-content{
  margin-top: 5px;
  gap: 10px;
}

.text-training{
  font-size: 0.7rem;
}

.principal-content {
  gap: 30px;
}
.swiper {
  width: 80%;
  height: 350px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #826db3;
  color: #ffff;
  font-size: 20px;
  border-radius: 10px;
}

.img-card {
  width: 93%;
  height: 128px; /* Defina uma altura fixa ou use max-height */
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.title-card {
  margin-left: 15px;
  margin-bottom: 0;
}

.link-card {
  margin-left: 15px;
  text-align: center;
  margin-top: 5px;
  gap: 8px;
}

.text-card {
  margin-left: 15px;
  margin-right: 5px;
  text-align: left;
}

.icons-card {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: left;
  margin-left: 15px;
  margin-bottom: 15px;
  gap: 10px;
}

.icons-tech {
  font-size: 30px;
}

a {
  text-decoration: none;
  color: #ffff;
  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;
  }
}

h3 {
  margin: 0;
  font-size: 1.2rem;
}

p {
  font-size: 0.8rem;
}
span {
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  /* Estilos para telas menores ou iguais a 640px (equivalente ao primeiro breakpoint) */
  .swiper {
    height: 350px;
  }

  .icons-card {
    margin-bottom: 35px;
  }

  .principal-content {
    gap: 10px;
  }

  span {
    margin: 5px;
    font-size: 0.8rem;
  }
}
</style>
