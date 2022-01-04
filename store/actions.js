import { parseJwt } from "~/utils/api";
import { apiBase } from "~/utils/api";
import { tokenApi } from "~/utils/api";

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
  async login({ commit }, payload) {
    try {
      const response = await this.$axios.$post(
        `${apiBase}Accounts/login`,
        payload
      );
      let tokenParsed = parseJwt(response.token);
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
  async getFamilies({ commit, getters }) {
    try {
      const response = await this.$axios.$get(`${apiBase}Families`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
      commit("setFamilies", response);
    } catch (error) {
      console.log(error);
    }
  },
  setLanguage({ commit }, payload) {
    commit("setLanguage", payload);
  },
};
