import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/counter',
    component: () =>
      import(/* webpackChunkName: "counter" */ '../views/Counter'),
    children: [
      { path: '', redirect: 'simple' },
      {
        path: 'simple',
        component: () =>
          import(
            /* webpackChunkName: "counter" */ '../views/Counter/CounterSimple'
          ),
      },
      {
        path: 'vuex',
        component: () =>
          import(
            /* webpackChunkName: "counter" */ '../views/Counter/CounterVueX'
          ),
      },
      {
        path: 'vuex2',
        component: () =>
          import(
            /* webpackChunkName: "counter" */ '../views/Counter/CounterVueX2'
          ),
      },
    ],
  },
  {
    path: '/about',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
