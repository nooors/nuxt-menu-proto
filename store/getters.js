export default {
  getMenu(state) {
    return state.menu;
  },
  getUser() {
    return {
      user: localStorage.getItem("user"),
      role: localStorage.getItem("role"),
      email: localStorage.getItem("email"),
    };
  },
  getUsers(state) {
    return state.Users;
  },
  getLanguages(state) {
    return state.languages;
  },
  getLanguageSelected(state) {
    return state.languageSelected;
  },
  getIsLogged(state) {
    return state.isLogged;
  },
  getProducts(state) {
    return state.products;
  },
  getFamilies(state) {
    return state.families;
  },
  getFamilyById(state) {
    return state.familyId;
  },
  getPtypes(state) {
    return state.ptypes;
  },
  getPtypeById(state) {
    return state.ptypeId;
  },
  getDepartments(state) {
    return state.departments;
  },
  getToken() {
    return localStorage.getItem("token");
  },
};
