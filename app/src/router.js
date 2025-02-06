import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AboutMe from './views/AboutMe.vue';
import Contact from './views/Contact.vue';
import Habilities from './views/Habilities.vue';
import Projects from './views/Projects.vue';

const routes = [
  { path: '/', redirect: '/home' },  // Redireciona '/' para '/home'
  { path: '/home', component: Home },
  { path: '/about', component: AboutMe },
  { path: '/contact', component: Contact },
  { path: '/experience', component: Habilities },
  { path: '/project', component: Projects }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
