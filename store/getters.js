export default {
  getMenu(state) {
    return state.menu;
  },
  getUserLogged(state) {
    return state.userLogged;
  },

  getUserStorage() {
    if (localStorage.getItem("user") === "User") {
      return {
        user: localStorage.getItem("user"),
        admin: localStorage.getItem("Admin"),
        email: localStorage.getItem("email"),
      };
    }
    return false;
  },
  getIsAdmin(state) {
    return state.isAdmin;
  },
  getUsers(state) {
    return state.Users;
  },
  getCurrentUser(state) {
    return state.currentUser;
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
