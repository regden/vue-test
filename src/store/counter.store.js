export const GET = 'GET';
export const SET = 'SET';
export const GET_INCREMENT = 'GET_INCREMENT';
export const SET_INCREMENT = 'SET_INCREMENT';

export const CounterStore = {
  namespaced: true,
  state: { counter: 0, incrementValue: 3 },
  mutations: {
    [SET]: (state, payload) => (state.counter += payload),
    [SET_INCREMENT]: (state, payload) => (state.incrementValue = payload)
  },
  actions: {
    [SET]: ({ commit, getters }, payload) => {
      let { value, decrement } = payload || {};
      value = value || getters[GET_INCREMENT];
      value *= decrement ? -1 : 1;
      commit(SET, value);
    },
    [SET_INCREMENT]: ({ commit }, payload) => {
      commit(SET_INCREMENT, payload);
    }
  },
  getters: {
    [GET]: state => state.counter,
    [GET_INCREMENT]: state => state.incrementValue
  }
};
