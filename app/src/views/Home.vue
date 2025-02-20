<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <h1 class="main-title mb-4">{{ '<Natan Silva/>' }}</h1>

    <p class="main-text text-gray-500">
      Olá, eu sou
      <span class="typed-text text-teal-500">{{ typedText }}</span>
      <span class="cursor" :class="cursorClass">&nbsp;</span>
    </p>

    <div class="bttn-curriculo">
      <a href="#" download>
        <Button label="Currículo" icon="pi pi-download" size="large" class="p-button-outlined" rounded />
      </a>
    </div>

    <div class="icons-home">
      <SocialMedias />
    </div>
  </div>
</template>

<script setup>
import SocialMedias from '@/components/SocialMedias.vue'
import { Button } from 'primevue'
import { ref, onMounted } from 'vue'

const typedText = ref('')
const cursorClass = ref('blink')

const words = ['Desenvolvedor Web', 'Desenvolvedor Full-Stack', 'apaixonado por tecnologia', 'um eterno aprendiz...']
let charIndex = 0
let wordIndex = 0

const type = () => {
  if (charIndex <= words[wordIndex].length - 1) {
    typedText.value += words[wordIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, 120)
  } else {
    cursorClass.value = ''
    setTimeout(erase, 800)
  }
}

const erase = () => {
  if (charIndex > 0) {
    typedText.value = words[wordIndex].slice(0, charIndex - 1)
    charIndex--
    setTimeout(erase, 80)
  } else {
    cursorClass.value = 'blink'
    wordIndex++
    if (wordIndex > words.length - 1) {
      wordIndex = 0
    }
    setTimeout(type, 800)
  }
}

onMounted(() => {
  setTimeout(type, 1000)
})
</script>

<style scoped>
.main-title {
  font-size: 2.8rem;
  margin-bottom: 10px; /* Reduzindo a margem inferior para aproximar do texto dinâmico */
}

.main-text {
  font-size: 1.8rem;
  margin-top: 0; /* Remove qualquer margem superior para aproximar do título */
}

/* Se necessário, ajuste a margem inferior da .icons-home também */
.icons-home {
  margin-top: 50px;
}

.bttn-curriculo{
  margin-top: 35px;
}
/* Media Query para ajustar o tamanho do título */
@media (max-width: 640px) {
  .main-title {
    font-size: 2rem;  /* Menor tamanho para dispositivos móveis */
  }

  .main-text {
    font-size: 1rem;  /* Menor tamanho para dispositivos móveis */
  }
}

/* Media Query para telas de tamanho médio (tablet) */
@media (min-width: 641px) and (max-width: 1024px) {
  .main-title {
    font-size: 2.4rem; /* Ajustado para tablets */
  }

  .main-text {
    font-size: 1.6rem; /* Ajustado para tablets */
  }
}

/* Media Query para telas grandes (desktop) */
@media (min-width: 1025px) {
  .main-title {
    font-size: 3.2rem; /* Maior tamanho para desktops */
  }

  .main-text {
    font-size: 2rem; /* Maior tamanho para desktops */
  }
}

.cursor {
  display: inline-block;
  width: 3px;
  margin-left: 3px;
  background: #008080;
}

.cursor.blink {
  animation: blink 0.8s infinite ease-in-out;
}

@keyframes blink {
  0%,
  100% {
    background: #008080;
  }
  50%,
  70% {
    background: transparent;
  }
}
</style>
