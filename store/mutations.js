export default {
  setUser: (state, payload) => {
    state.user = payload;
    localStorage.setItem("user", payload.User);
    localStorage.setItem("role", payload.Admin);
    localStorage.setItem("email", payload.email);
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
    state.families = payload;
  },
  setFamilyId: (state, payload) => {
    state.familyId = payload;
  },
  setDepartments: (state, payload) => {
    state.departments = payload;
  },
};
