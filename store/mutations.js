export default {
  setUser: (state, payload) => {
    state.user = payload;
    if (payload.hasOwnProperty("Admin")) {
      localStorage.setItem("Admin", payload.Admin);
    }
    localStorage.setItem("user", payload.User);

    localStorage.setItem("email", payload.email);
  },
  setUsers: (state, payload) => {
    state.Users = payload;
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
    state.token = "";
    state.user = null;
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
  setPtypes: (state, payload) => {
    state.ptypes = payload;
  },
  setPtypeId: (state, payload) => {
    state.ptypeId = payload;
  },
  setDepartments: (state, payload) => {
    state.departments = payload;
  },
  editShortName: (state, payload) => {
    state.products[payload.index].shortNameCreateDTO[0].name =
      payload.languages.spanish;
    state.products[payload.index].shortNameCreateDTO[1].name =
      payload.languages.catalan;
    state.products[payload.index].shortNameCreateDTO[2].name =
      payload.languages.english;
  },
  editDescription: (state, payload) => {
    state.products[payload.index].descriptionDTOs[0].name =
      payload.languages.spanish;
    state.products[payload.index].descriptionDTOs[1].name =
      payload.languages.catalan;
    state.products[payload.index].descriptionDTOs[2].name =
      payload.languages.english;
  },
};
