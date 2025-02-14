<template>
  <div class="page-container">
    <footer >
      <Tabs :value="routePath" >
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

const items = ref([
  { route: '/home', label: 'Home', icon: 'pi pi-home' },
  { route: '/about', label: 'Sobre', icon: 'pi pi-user' },
  { route: '/experience', label: 'Experiência', icon: 'pi pi-briefcase' },
  { route: '/project', label: 'Projetos', icon: 'pi pi-code' },
  { route: '/contact', label: 'Contato', icon: 'pi pi-envelope' },
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
  /* min-height: 100vh; */
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
}

/* Esconde o texto e mantém os ícones apenas em telas pequenas */
.tab-label {
  display: inline;
}

@media (max-width: 768px) {
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
</style>
