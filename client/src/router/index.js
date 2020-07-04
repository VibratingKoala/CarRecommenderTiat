import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

// Page Links
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'CarRecommendationTiat' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router;
