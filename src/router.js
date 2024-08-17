import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage/HomePage.vue';
import AddCard from './components/AddCard/AddCard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-card',
    name: 'AddCard',
    component: AddCard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
