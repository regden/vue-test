import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Counter from '../views/Counter';
import CounterSimple from '../views/Counter/CounterSimple';
import CounterVueX from '../views/Counter/CounterVueX';
import CounterVueX2 from '../views/Counter/CounterVueX2';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/counter',
    component: Counter,
    children: [
      { path: '', redirect: 'simple' },
      { path: 'simple', component: CounterSimple },
      { path: 'vuex', component: CounterVueX },
      { path: 'vuex2', component: CounterVueX2 },
    ],
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
