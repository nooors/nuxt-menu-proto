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
  async getFamilies({ commit, getters }) {
    try {
      const response = await this.$axios.$get(`${apiBase}Families`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vb29yc0BnbWFpbC5jb20iLCJQcnVlYmEiOiJlc1BydWViYSIsImV4cCI6MTY0MTM3MjM5Mn0.-D6FIE5KvrJWJAgmh0Zp2xVmbU2U7p9tcuG9qpc-3_I",
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
