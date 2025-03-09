<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <h1 class="main-title mb-4">{{ '<NatanSilva/>' }}</h1>

    <p class="main-text text-gray-500">
      {{ t('message.hello') }}
      <span class="typed-text text-teal-500">{{ typedText }}</span>
      <span class="cursor" :class="cursorClass">&nbsp;</span>
    </p>
    <p class="second-text text-gray-500">
      {{ t('message.brainstorm') }}
    </p>

    <div class="icons-home">
      <SocialMedias />
    </div>
    <div class="bttn-curriculo">
        <Button style="color: #ffff;"
          :label=LabelButton
          icon="pi pi-file-pdf"
          size="large"
          raised 
          @click="openDlg = true"
        />
    </div>

    <Dialog v-model:visible="openDlg"  modal header="Selecione o formato:" :style="{ width: '20vw' }" :breakpoints="{ '1199px': '5vw', '525px': '70vw' }">
      <div class="cv-content">
      <a href="#">
        <Button
          label="Baixar CV (Português)"
          icon="pi pi-download"
          size="large"
          raised 
          @click="openDlg = true"
          class="w-full"
        />
      </a>

      <a href="#">
        <Button
          label="Download CV (English)"
          icon="pi pi-download"
          size="large"
          raised 
          @click="openDlg = true"
          class="w-full"
        />
      </a>
    </div>
</Dialog>
    
  </div>
</template>

<script setup>
import SocialMedias from '@/components/SocialMedias.vue'
import { Button , Dialog } from 'primevue'
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

const openDlg = ref(false);

</script>

<style scoped>

.cv-content{
display: flex;
flex-direction: column;
gap: 20px;
}

.main-title {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.main-text {
  font-size: 1.8rem;
  margin-top: 0;
}

.second-text {
  font-size: 1rem;
  margin-top: 15px;
}

.icons-home {
  margin-top: 13px;
}

.bttn-curriculo {
  margin-top: 35px;
}

@media (max-width: 640px) {
  .second-text {
  font-size: 0.65rem;
}
  
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
