export default {
  setUsers: (state, payload) => {
    state.users = payload;
  },
  setMenu: (state, payload) => {
    state.menu = payload;
  },
  setLanguage: (state, payload) => {
    state.languageSelected = payload;
  },
};
