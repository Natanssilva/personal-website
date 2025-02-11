<script setup>
  import { useRoute } from 'vue-router';
  import TabsComponent from './components/TabsComponent.vue'
  import Navbar from './components/Navbar.vue'
  
  const route = useRoute(); //pegando o obj de rota
  
</script>

<template>
  <header v-if="route.path !== '/construction'" >
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

  <footer v-if="route.path !== '/construction'">
    <TabsComponent />
  </footer>
</template>

<style scoped></style>


