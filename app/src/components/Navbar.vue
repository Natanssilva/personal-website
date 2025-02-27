<template>
  <nav
    class="fixed top-4 left-0 w-full text-white py-4 px-6 flex items-center justify-around shadow-lg"
  >
    <div>
      <span class="text-xl font-bold">Natan Silva.</span>
    </div>

    <div class="flex items-center div-right">
      <ToggleSwitch v-model="checked" @click="toggleDarkMode()">
        <template #handle="{ checked }">
          <i :class="['!text-xs pi', { 'pi-moon': checked, 'pi-sun': !checked }]" />
        </template>
      </ToggleSwitch>

      <Button
        type="button"
        icon="pi-globe pi pi-ellipsis-v"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        rounded
      />
      
      <!-- Menu com bandeiras -->
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
        <template #item="{ item }">
          <div class="flex items-center gap-2 px-2 py-1 cursor-pointer" @click="item.command">
            <img :src="item.flag" alt="Flag" class="w-5 h-4" />
            <span>{{ item.label }}</span>
          </div>
        </template>
      </Menu>
    </div>
  </nav>
</template>

<style>
/* Ajusta a largura do menu ao tamanho do conteúdo */
#overlay_menu {
  min-width: auto ;
  width: fit-content ;
}

img {
  margin: 10px;
}
.div-right {
  gap: 15px;
}

.select-component {
  width: 115px;
}
nav {
  padding-top: 25px;
}

@media (max-width: 770px) {
  nav {
    justify-content: space-between !important;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import ToggleSwitch from 'primevue/toggleswitch'
import brazilFlag from '../assets/img/brazil-.png'
import usaFlag from '../assets/img/united-states.png'
import { useI18n } from 'vue-i18n'
import Menu from 'primevue/menu';
import Button from 'primevue/button';

// Estado do Toggle
const toggleDarkMode = () => document.documentElement.classList.toggle('my-app-dark')

const checked = ref(false)
const { locale } = useI18n() // Obter a função para alterar o locale

// Função para alterar o idioma ao clicar no menu
const onMenuSelect = (lang) => {
  locale.value = lang
}

// Itens do Menu com bandeiras
const items = ref([
  {
    label: 'Idioma',
    items: [
      {
        label: 'PT',
        command: () => onMenuSelect('pt'),
        flag: brazilFlag
      },
      {
        label: 'EN',
        command: () => onMenuSelect('en'),
        flag: usaFlag
      }
    ]
  }
])

const menu = ref();

const toggle = (event) => {
    menu.value.toggle(event);
};

</script>
