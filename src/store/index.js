import Vue from 'vue';
import Vuex from 'vuex';
import { CounterStore } from './counter.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { CounterStore },
});
