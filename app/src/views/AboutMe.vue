<template>
  <div class="flex flex-col w-full justify-center items-center min-h-screen">
    <div class="container">
      <div class="profile-section">
        <img :src="perfilPic" alt="Foto de perfil" class="profile-pic" />
        <pre  v-if="!isMobile"
          class="font-mono text-base text-light-primary dark:text-dark-secondary min-w-[17rem] min-h-[12rem] text-left"
        >
          <code>
        const profile = {
          name: 'Natan Silva',
          age: 21,
          city: 'Itajaí - SC',
          work: 'Dev Full-Stack',
        };
          </code>
        </pre>
      </div>
      <div>
        <ScrollPanel v-if="isMobile" class="panel"  :dt="{
        bar: {
            background: '{primary.color}'
        }
    }">
          <span class="about-text">{{ t('message.views.about.text.init') }}</span>
          <span class="about-text">{{ t('message.views.about.text.mid') }}</span>
          <span class="about-text">{{ t('message.views.about.text.end') }}</span>

          <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />

        </ScrollPanel>
        <div v-else>
          <span class="about-text">{{ t('message.views.about.text.init') }}</span>
          <span class="about-text">{{ t('message.views.about.text.mid') }}</span>
          <span class="about-text">{{ t('message.views.about.text.end') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ScrollPanel from 'primevue/scrollpanel'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import ScrollTop from 'primevue/scrolltop';
import perfilPic from '@/assets/img/perfil-pic.jpg'

const { t } = useI18n()
const isMobile = ref(window.innerWidth <= 1024)

const updateScreenSize = () => {
  isMobile.value = window.innerWidth <= 1024
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
h1 {
  font-size: 1.5rem;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
}

.profile-pic {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 3px solid #826db3;
  object-fit: cover;
}

code {
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Source Code Pro', serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.about-text {
  font-size: 0.9rem;
  padding: 8px;
  max-width: 40vw;
  display: block;
  line-height: 1.5;
  text-align: left;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.panel{
    width: 100%; 
    height: 200px
}

@media (max-width: 1400px) {
  code {
    font-size: 0.8rem;
  }

  .profile-section {
    height: 65vh;
  }

  .profile-pic {
    width: 200px;
    height: 200px;
  }

  .about-text {
    text-align: center;
    padding: 10px;
    font-size: 0.8rem;
    line-height: 1.4;
  }
}

@media (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .profile-section {
    height: 25vh;
  }

  .profile-pic {
    width: 160px;
    height: 160px;
  }

  .panel{
    height: 40vh
  }

  .about-text {
    max-width: 85vw;
    text-align: center;
    padding: 10px;
    font-size: 0.8rem;
    line-height: 1.4;
  }
}
</style>
