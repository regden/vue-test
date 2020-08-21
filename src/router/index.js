import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Counter from '../views/Counter';
import CounterSimple from '../views/Counter/Simple';
import CounterVueX from '../views/Counter/VueX';
import FullVueX from '../views/Counter/FullVueX';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/counter',
    component: Counter,
    children: [
      { path: '', redirect: 'simple' },
      { path: 'simple', component: CounterSimple },
      { path: 'vuex', component: CounterVueX },
      { path: 'fullvuex', component: FullVueX }
    ]
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
