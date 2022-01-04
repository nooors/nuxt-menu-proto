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
  isLogged: (state, payload) => {
    state.isLogged = true;
    localStorage.setItem("token", payload);
    state.token = payload;
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
  setFamilies: (state, payload) => {
    console.log("mutations");
    console.log(payload);
    state.families = payload;
  },
};
