<template>
  <main class="principal-content flex flex-col w-full justify-center items-center min-h-screen">
    <div class="text-center flex flex-col items-center">
      <h1 class="text-4xl font-bold">Projetos</h1>
      <span>
        Explore meus projetos e artigos, onde compartilho minhas experiências e criações no
        desenvolvimento.
      </span>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <!-- CARD 1 -->
        <div class="swiper-slide">
          <div class="flex flex-col h-full">
            <img src="../assets/img/pokedex-img.png" alt="" class="img-card rounded-t-md" />

            <div class="flex flex-col flex-1 gap-2 min-h-[15rem]">
              <h3 class="title-card">Pokedex</h3>
              <div class="flex gap-6 text-sm text-light-secondary dark:text-dark-primary font-bold">
                <div>
                  <a
                    href="https://github.com/Natanssilva/Pokedex"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-card flex items-center gap-3 hover:underline"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" /> Repositório
                  </a>

                  <p class="text-card">
                    Aplicação que simula uma pokedex, que utiliza a API PokeApi.
                  </p>
                </div>
              </div>
              <div class="icons-card">
                <font-awesome-icon :icon="['fab', 'html5']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'js-square']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'css3-alt']" class="icons-tech" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="swiper-slide">
          <div class="flex flex-col h-full">
            <img src="../assets/img/threads.jpeg" alt="" class="img-card rounded-t-md" />

            <div class="flex flex-col flex-1 gap-2 min-h-[15rem]">
              <h3 class="title-card">Threads</h3>
              <div class="flex gap-6 text-sm text-light-secondary dark:text-dark-primary font-bold">
                <div>
                  <a
                    href="https://github.com/Natanssilva/Sistemas_operacionais/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-card flex items-center gap-3 hover:underline"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" /> Repositório
                  </a>

                  <p class="text-card">
                    Aplicação que simula a utilização de threads do processador utilizando Node.JS.
                  </p>
                </div>
              </div>
              <div class="icons-card">
                <font-awesome-icon :icon="['fab', 'js-square']" class="icons-tech" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="swiper-slide">
          <div class="flex flex-col h-full">
            <img src="../assets/img/apple-notices.jpg" alt="" class="img-card rounded-t-md" />

            <div class="flex flex-col flex-1 gap-2 min-h-[15rem]">
              <h3 class="title-card">Newspaper</h3>
              <div class="flex gap-6 text-sm text-light-secondary dark:text-dark-primary font-bold">
                <div>
                  <a
                    href="https://github.com/Natanssilva/newspaperProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-card flex items-center gap-3 hover:underline"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" /> Repositório
                  </a>

                  <p class="text-card">
                    Aplicação web que oferece aos usuários a capacidade de ler notícias relacionadas
                    à Apple de todo o mundo.
                  </p>
                </div>
              </div>
              <div class="icons-card">
                <font-awesome-icon :icon="['fab', 'js-square']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'html5']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'css3-alt']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'php']" />
                <font-awesome-icon :icon="['fas', 'database']" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="swiper-slide">
          <div class="flex flex-col h-full">
            <img src="../assets/img/coffee-pic.png" alt="" class="img-card rounded-t-md" />

            <div class="flex flex-col flex-1 gap-2 min-h-[15rem]">
              <h3 class="title-card">EmporiumCoffee</h3>
              <div class="flex gap-6 text-sm text-light-secondary dark:text-dark-primary font-bold">
                <div>
                  <a
                    href="https://github.com/Natanssilva/EmporiumCoffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-card flex items-center gap-3 hover:underline"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" /> Repositório
                  </a>

                  <p class="text-card">Landing Page para simular um site de vendas de café.</p>
                </div>
              </div>
              <div class="icons-card">
                <font-awesome-icon :icon="['fab', 'js-square']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'html5']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'css3-alt']" class="icons-tech" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="swiper-slide">
          <div class="flex flex-col h-full">
            <img src="../assets/img/git-github.png" alt="" class="img-card rounded-t-md" />

            <div class="flex flex-col flex-1 gap-2 min-h-[15rem]">
              <h3 class="title-card">Versionamento de Código</h3>
              <div class="flex gap-6 text-sm text-light-secondary dark:text-dark-primary font-bold">
                <div>
                  <a
                    href="https://github.com/Natanssilva/projetogit"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-card flex items-center gap-3 hover:underline"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" /> Repositório
                  </a>

                  <p class="text-card">
                    Repositório com comandos básicos de GIT e tópicos de estudo.
                  </p>
                </div>
              </div>
              <div class="icons-card">
                <font-awesome-icon :icon="['fas', 'code-branch']" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="swiper-slide">
          <div class="flex flex-col h-full">
            <img src="../assets/img/foguete.jpg" alt="" class="img-card rounded-t-md" />

            <div class="flex flex-col flex-1 gap-2 min-h-[15rem]">
              <h3 class="title-card">Countdown</h3>
              <div class="flex gap-6 text-sm text-light-secondary dark:text-dark-primary font-bold">
                <div>
                  <a
                    href="https://github.com/Natanssilva/Countdown"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-card flex items-center gap-3 hover:underline"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" /> Repositório
                  </a>

                  <p class="text-card">
                    Aplicação web que simula um countdown com data fixa até 1 de janeiro de 2040,
                    responsivo e dinâmico.
                  </p>
                </div>
              </div>
              <div class="icons-card">
                <font-awesome-icon :icon="['fab', 'js-square']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'html5']" class="icons-tech" />
                <font-awesome-icon :icon="['fab', 'css3-alt']" class="icons-tech" />
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
import { onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

onMounted(() => {
  new Swiper('.swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
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
})
</script>

<style scoped>
.principal-content {
  gap: 30px;
}
.swiper {
  width: 80%;
  height: 450px;
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
  width: 95%;
  height: 200px; /* Defina uma altura fixa ou use max-height */
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
  display: flex;
  justify-content: left;
  margin-left: 15px;
  align-items: center;
  height: 50vh;
  gap: 20px;
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
    height: 400px;
  }

  .icons-card {
    margin-bottom: 35px;
  }

  .principal-content {
    gap: 7px;
  }

  span {
    margin: 5px;
    font-size: 0.8rem;
  }
}
</style>
