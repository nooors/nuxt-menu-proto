import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      authenticated: true,
    },
    mutations: {
      increment(state) {
        state.counter++;
      },
    },
    actions: {
      login({ commit }, email, password) {
        console.log(email, password);
      },
    },
  });
};

export default createStore;
