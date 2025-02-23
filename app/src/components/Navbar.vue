<template>
  <nav
    class="fixed top-4 left-0 w-full text-white py-4 px-6 flex items-center justify-around shadow-lg"
  >
    <div>
      <span class="text-xl font-bold">@natanssilva</span>
    </div>

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
          @change="onSelectChange"
        >
          <template #option="slotProps">
            <div class="flex items-center gap-4">
              <img :src="slotProps.option.flag" alt="flag" class="w-6 h-4" />
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
img {
  margin-right: 5px;
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
import usaFlag from '../assets/img/united-states.png'
import { useI18n } from 'vue-i18n'

// Estado do Toggle
const toggleDarkMode = () => document.documentElement.classList.toggle('my-app-dark')

const checked = ref(false)
const { locale } = useI18n() // Obter a função para alterar o locale

const selectedCountry = ref()

const onSelectChange = (event) => {
  switch (selectedCountry.value.code) {
    case 'BR':
      locale.value = 'pt'
      break
    case 'US':
      locale.value = 'en'
      break
    default:
      locale.value = 'en'
  }
}

const countries = ref([
  { name: 'PT-BR', code: 'BR', flag: brazilFlag },
  { name: 'US', code: 'US', flag: usaFlag },
])
</script>
