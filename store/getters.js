export default {
  getToken(state) {
    return state.token;
  },
  getMenu(state) {
    return state.menu;
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
  getToken() {
    return localStorage.getItem("token");
  },
};
