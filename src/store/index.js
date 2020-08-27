import Vue from 'vue';
import Vuex from 'vuex';
import {
  SET_COUNTER_INC,
  SET_COUNTER_DEC,
  SET_INCREMENT_VALUE,
  GET_COUNTER,
  GET_INCREMENT_VALUE
} from './counter.action';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 0, incrementValue: 3 },
  mutations: {
    [SET_COUNTER_INC]: (state, payload) => (state.counter += payload),
    [SET_COUNTER_DEC]: (state, payload) => (state.counter -= payload),
    [SET_INCREMENT_VALUE]: (state, payload) => (state.incrementValue = payload)
  },
  actions: {
    [SET_COUNTER_INC]: function(context, payload) {
      payload = payload || this.state.incrementValue;
      context.commit(SET_COUNTER_INC, payload);
    },
    [SET_COUNTER_DEC]: function(context, payload) {
      payload = payload || this.state.incrementValue;
      context.commit(SET_COUNTER_DEC, payload);
    },
    [SET_INCREMENT_VALUE]: (context, payload) => {
      context.commit(SET_INCREMENT_VALUE, payload);
    }
  },
  getters: {
    [GET_COUNTER]: state => state.counter,
    [GET_INCREMENT_VALUE]: state => state.incrementValue
  },
  modules: {}
});
