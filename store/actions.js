import { parseJwt } from "~/utils/api";

const apiBase = "https://menuproto.ddns.net/api/";
export default {
  async Register(payload) {
    try {
      const response = await this.$axios.$post(apiBase, payload);
      //commit("setUsers", response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async login({ commit, redirect }, payload) {
    alert(payload);
    console.table(payload);
    try {
      const response = await this.$axios.$post(
        `${apiBase}Accounts/login`,
        payload
      );
      console.log(response);
      console.log(response.token);
      let tokenParsed = parseJwt(response.token);
      console.log(tokenParsed);
      commit("isLogged", response.token);
      $router.push("/");
      console.log("redirect");
    } catch (error) {
      alert(error);
    }
  },

  async getMenu({ commit }) {
    try {
      const response = await this.$axios.$get(`${apiBase}menu`);
      commit("setMenu", response);
    } catch (error) {
      console.log(error);
    }
  },
  async getProducts({ commit }) {
    try {
      const response = await this.$axios.$get(`${apiBase}dishes`);
      commit("setProducts", response);
    } catch (error) {
      console.log(error);
    }
  },
  async getFamilies({ commit }) {
    try {
      const response = await this.$axios.$get(`${apiBase}Families`);
      commit("setFamilies");
    } catch (error) {
      alert(error);
    }
  },
  setLanguage({ commit }, payload) {
    commit("setLanguage", payload);
  },
};
