<template>
  <nav
    class="fixed top-4 left-0 w-full text-white py-4 px-6 flex items-center justify-around shadow-lg"
  >
    <div>
      <span class="text-xl font-bold">@natanssilva</span>
    </div>

    <!-- Switch -->
    <div class="flex items-center div-right">
      <ToggleSwitch v-model="checked" @click="toggleDarkMode()">
        <template #handle="{ checked }">
          <i :class="['!text-xs pi', { 'pi-moon': checked, 'pi-sun': !checked }]" />
        </template>
      </ToggleSwitch>
      <FloatLabel variant="on">
        <Select
          v-model="selectedCountry"
          inputId="idioma"
          :options="countries"
          optionLabel="name"
          class="select-component"
        >
          <template #option="slotProps">
            <div class="flex items-center gap-4">
              <img :src="slotProps.option.flag" alt="flag" class="w-6 h-4"/>
              <span>{{ slotProps.option.name }}</span>
            </div>
          </template>
        </Select>
        <label for="Idioma">Idioma</label>
      </FloatLabel>
    </div>
  </nav>
</template>
<style>
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
    /* margin: 25px; */
    padding-left: 16px; /* Afastamento à esquerda */
    padding-right: 16px; /* Afastamento à direita */
  }
}
</style>

<script setup>
import { ref } from 'vue'
import ToggleSwitch from 'primevue/toggleswitch'
import Select from 'primevue/select'
import FloatLabel from 'primevue/floatlabel'
import brazilFlag from '../assets/img/brazil-.png'
import spainFlag from '../assets/img/flag.png'
import usaFlag from '../assets/img/united-states.png'

const toggleDarkMode = () => document.documentElement.classList.toggle('my-app-dark')
// Estado do Toggle
const checked = ref(false)

const selectedCountry = ref()

const countries = ref([
  { name: 'PT-BR', code: 'BR', flag: brazilFlag },
  { name: 'ES', code: 'ES', flag: spainFlag },
  { name: 'EN', code: 'US', flag: usaFlag },
])
</script>
