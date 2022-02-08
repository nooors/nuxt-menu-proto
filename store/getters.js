export default {
  getMenu(state) {
    return state.menu;
  },
  gettUser() {
    return {
      user: localStorage.getItem("user"),
      admin: localStorage.getItem("Admin"),
      email: localStorage.getItem("email"),
    };
  },
  getIsAdmin(state) {
    console.log("typeof state.user");
    console.log(typeof state.user);
    if (!!state.user.Admin) {
      return true;
    }
    return false;
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
