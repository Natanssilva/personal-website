<template>
  <Navbar />
  <main>
    <Tabs :value="routePath">
      <TabList>
        <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
          <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
            <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit custom-tab-link">
              <i :class="tab.icon" />
              <span>{{ tab.label }}</span>
            </a>
          </router-link>
        </Tab>
      </TabList>
    </Tabs>
    <router-view></router-view>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import { useRoute } from 'vue-router'
import ToggleSwitch from 'primevue/toggleswitch';

const items = ref([
  { route: '/home', label: 'Home', icon: 'pi pi-home' },
  { route: '/about', label: 'Sobre', icon: 'pi pi-user' },
  { route: '/experience', label: 'Experiência', icon: 'pi pi-briefcase' },
  { route: '/project', label: 'Projetos', icon: 'pi pi-code' },
  { route: '/contact', label: 'Contato', icon: 'pi pi-envelope' },
])
// Obtém a rota ativa
const route = useRoute()
 // Debug: Verifica a rota atual

// Se a rota atual for a raiz, volta pra '/home'
const routePath = computed(() => {
  return route.path === '/' ? '/home' : route.path
})

</script>

<style scoped>
.custom-tab-link {
  text-decoration: none;
  color: inherit;
}

.custom-tab-link:hover {
  color: #007bff; 
}

.custom-tab-link .pi {
  vertical-align: middle;
  margin-right: 0.5rem;
}
</style>

