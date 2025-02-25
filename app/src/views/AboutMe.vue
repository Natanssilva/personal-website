<template>
  <div class="container mx-auto h-full flex flex-col justify-center items-center pt-[5rem] pb-4 px-4">
    <h1>{{ `<!--  ${ t('message.views.about.title')} -- >` }}</h1>

    <div class="container">
      <div class="item">
        <div class="profile-section">
            <img src="../assets/img/perfil-pic.jpg" alt="Foto de perfil" class="profile-pic" />
            <pre class="font-mono text-base  text-light-primary dark:text-dark-secondary min-w-[17rem] min-h-[12rem] text-left">
                <code>
                    const profile = {
                        nome: 'Natan Porto Machado da Silva',
                        idade: 21,
                        local: 'Itajaí - SC',
                        atuação: 'Dev Full-Stack',
                    };
            </code>
            </pre>
            
        </div>
      </div>
      <div class="item">
        <span class="about-text">
          {{ t('message.views.about.text.init') }}
        </span>
        <span class="about-text">
          {{ t('message.views.about.text.mid') }}
        </span>
        <span class="about-text">
          {{ t('message.views.about.text.end') }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style>
h1 {
  margin-bottom: 55px; /* Ajuste esse valor conforme necessário */
  font-size: 1.5rem;
}
pre{
    font-size: 1rem;
}
.profile-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinha o conteúdo ao topo */
  align-items: center;
    margin-top: -35px;
}
.profile-pic {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 3px solid #ccc;
  object-fit: cover;
}

.about-text {
  font-size: 0.9rem;
  padding: 8px;
  max-width: 40vw;
  margin: 0 auto;
  display: inline-block;
  line-height: 1.5;
  word-wrap: normal;
  text-align: left;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 100vh; /* Garante que ambas as colunas tenham altura suficiente */
}
</style>
