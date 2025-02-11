<template>
  <nav
    class="fixed top-4 left-0 w-full text-white py-4 px-6 flex items-center justify-around shadow-lg"
  >
    <span class="text-xl font-bold">@natanssilva</span>
    <!-- Switch -->
    <ToggleSwitch v-model="checked" @click="toggleDarkMode()">
      <template #handle="{ checked }">
        <i :class="['!text-xs pi', { 'pi-moon': checked, 'pi-sun': !checked }]" />
      </template>
    </ToggleSwitch>
  </nav>
</template>
<style>
nav {
  padding-top: 25px;
}

@media (max-width: 770px) {
  nav {
    justify-content: space-between !important;
    /* margin: 25px; */
    padding-left: 16px;  /* Afastamento à esquerda */
    padding-right: 16px; /* Afastamento à direita */
  }
}
</style>

<script setup>
import { ref } from 'vue'
import ToggleSwitch from 'primevue/toggleswitch'

const toggleDarkMode = () => document.documentElement.classList.toggle('my-app-dark')
// Estado do Toggle
const checked = ref(false)
</script>
