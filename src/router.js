import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/HomePage/HomePage.vue';
import AddCard from '@/pages/AddCard/AddCard.vue';
import Queue from "@/pages/Queue/Queue.vue";
import SignUp from "@/pages/SignUp/SignUp.vue";
import ToDo from "@/pages/ToDo/ToDo.vue";

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
  },
  {
    path: '/queue',
    name: 'Queue',
    component: Queue
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/todo',
    name: 'To do',
    component: ToDo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
