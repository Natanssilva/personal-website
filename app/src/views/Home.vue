<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <h1 class="main-title mb-4">{{ '<NatanSilva/>' }}</h1>

    <p class="main-text text-gray-500">
      {{ t('message.hello') }}
      <span class="typed-text text-teal-500">{{ typedText }}</span>
      <span class="cursor" :class="cursorClass">&nbsp;</span>
    </p>

    <div class="bttn-curriculo">
      <a href="#" download>
        <Button
          :label=LabelButton
          icon="pi pi-download"
          size="large"
          class="p-button-outlined"
          rounded
        />
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
import { ref, onMounted, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n() // Função para acessar as traduções

const typedText = ref('')
const cursorClass = ref('blink')
const LabelButton = computed(() =>  t('message.cv'))

const words = ref({
  pt: ['Desenvolvedor Web', 'Desenvolvedor Full-Stack', 'apaixonado por tecnologia', 'um eterno aprendiz...'],
  en: ['Web Developer', 'Full-Stack Developer', 'passionate about technology', 'an eternal learner...']
})

// Variáveis de controle para o efeito de digitação
let charIndex = 0
let wordIndex = 0
let typingTimeout = null // Armazena o timeout para digitação

const type = () => {
  if (charIndex <= words.value[locale.value][wordIndex].length - 1) {
    typedText.value += words.value[locale.value][wordIndex].charAt(charIndex)
    charIndex++
    typingTimeout = setTimeout(type, 160)
  } else {
    cursorClass.value = ''
    setTimeout(erase, 600)
  }
}

const erase = () => {
  if (charIndex > 0) {
    typedText.value = words.value[locale.value][wordIndex].slice(0, charIndex - 1)
    charIndex--
    typingTimeout = setTimeout(erase, 180)
  } else {
    cursorClass.value = 'blink'
    wordIndex++
    if (wordIndex > words.value[locale.value].length - 1) {
      wordIndex = 0
    }
    setTimeout(type, 800)
  }
}

onMounted(() => {
  setTimeout(type, 1000)
})

// Observa mudanças no locale para atualizar as palavras e garantir que a animação seja reiniciada corretamente
watch(() => locale.value, (newLocale) => {
  // Limpar timeout da animação anterior
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }

  // Resetar a digitação e recomeçar a animação
  wordIndex = 0 // Resetar o índice da palavra
  typedText.value = '' // Limpar o texto digitado
  charIndex = 0 // Resetar o índice do caractere
  setTimeout(type, 1000) // Reiniciar a digitação com um pequeno atraso
})
</script>

<style scoped>
.main-title {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.main-text {
  font-size: 1.8rem;
  margin-top: 0;
}

.icons-home {
  margin-top: 50px;
}

.bttn-curriculo {
  margin-top: 35px;
}

@media (max-width: 640px) {
  .main-title {
    font-size: 2rem;
  }

  .main-text {
    font-size: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .main-title {
    font-size: 2.4rem;
  }

  .main-text {
    font-size: 1.6rem;
  }
}

@media (min-width: 1025px) {
  .main-title {
    font-size: 3.2rem;
  }

  .main-text {
    font-size: 2rem;
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
