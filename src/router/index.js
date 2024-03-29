import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Skills from '@/views/Skills.vue';
import Projects from '@/views/Projects.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
