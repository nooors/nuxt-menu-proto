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
  isLogged: (state) => {
    state.isLogged = true;
    localStorage.setItem("logged", "true");
  },
  logOut: (state) => {
    state.isLogged = false;
    localStorage.clear();
  },
  setAuthenticate: (state) => {
    state.authenticate = true;
  },
  removeAuthenticate: (state) => {
    state.authenticate = false;
  },
  setProducts: (state, payload) => {
    state.products = payload;
  },
};
