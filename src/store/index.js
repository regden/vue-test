import Vue from 'vue';
import Vuex from 'vuex';
import { COUNTER_INC, COUNTER_DEC, COUNTER_SET_INC } from './counter.action';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 0, incrementValue: 3 },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
    decrement(state, payload) {
      state.counter -= payload;
    },
    setIncrementalValue(state, payload) {
      state.incrementValue = payload;
    }
  },
  actions: {
    increment(context, payload) {
      payload = payload || this.state.incrementValue;
      context.commit(COUNTER_INC, payload);
    },
    decrement(context, payload) {
      payload = payload || this.state.incrementValue;
      context.commit(COUNTER_DEC, payload);
    },
    setIncrementalValue(context, payload) {
      context.commit(COUNTER_SET_INC, payload);
    }
  },
  modules: {}
});
