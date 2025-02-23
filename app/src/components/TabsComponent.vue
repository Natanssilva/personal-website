<template>
  <div class="page-container">
    <footer>
      <Tabs :value="routePath">
        <TabList>
          <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
            <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
              <a
                v-ripple
                :href="href"
                @click="navigate"
                class="flex items-center gap-2 text-inherit custom-tab-link"
              >
                <i :class="tab.icon" />
                <span class="tab-label">{{ tab.label }}</span>
              </a>
            </router-link>
          </Tab>
        </TabList>
      </Tabs>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // Função para acessar as traduções

const items = computed(() => [
  { route: '/home', label: t('message.menu.home'), icon: 'pi pi-home' },
  { route: '/about', label: t('message.menu.about'), icon: 'pi pi-user' },
  { route: '/experience', label: t('message.menu.xp'), icon: 'pi pi-briefcase' },
  { route: '/project', label: t('message.menu.projects'), icon: 'pi pi-code' },
  { route: '/contact', label: t('message.menu.contact'), icon: 'pi pi-envelope' },
])

const route = useRoute()

const routePath = computed(() => {
  return route.path === '/' ? '/home' : route.path
})
</script>

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}

footer {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  padding: 10px 0;
  overflow-x: auto; /* Permite o scroll horizontal */
}

.custom-tab-link {
  text-decoration: none;
  color: inherit;
}

.custom-tab-link:hover {
  /* color: #007bff; */
}

.custom-tab-link .pi {
  vertical-align: middle;
  margin-right: 0.5rem;

  font-size: 1.2rem; /* Aumenta o tamanho do ícone */
  width: 24px; /* Ajusta a largura */
  height: 24px; /* Ajusta a altura */
}

/* Esconde o texto e mantém os ícones apenas em telas pequenas */
.tab-label {
  display: inline;
  font-size: 15px;
}

@media (max-width: 768px) {
  i {
    width: 5vw;
  }

  footer {
    padding: 0 10px;
  }

  .tab-label {
    display: none; /* Esconde o texto em dispositivos móveis */
  }

  .custom-tab-link {
    font-size: 20px; /* Aumenta o tamanho do ícone para dispositivos móveis */
  }
}

@media (min-width: 1024px) {
  i {
    width: 50px;
  }
}
</style>
