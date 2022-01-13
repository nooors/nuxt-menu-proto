import { parseJwt } from "~/utils/api";
import { apiBase } from "~/utils/api";

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
      commit("setUser", tokenParsed);
      $router.push("/");
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
  async getProducts({ commit, getters }) {
    try {
      const response = await this.$axios.$get(`${apiBase}Products`, {
        headers: {
          "Content-Type": "application/json",
          Athorization: `Bearer ${getters.getToken}`,
        },
      });
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
  async getFamilyById({ commit, getters }, id) {
    try {
      const response = await this.$axios.$get(`${apiBase}Families/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
      commit("setFamilyId", response);
    } catch (error) {
      console.log(error);
    }
  },
  async addFamily({ getters, dispatch }, payload) {
    try {
      const response = await this.$axios.$post(
        `${apiBase}Families`,
        {
          name: payload,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      console.log(response);
      dispatch("getFamilies");
    } catch (error) {
      console.log(error);
    }
  },
  async deleteFamily({ getters }, payload) {
    console.log(payload[0].id);
    console.log(payload[0].name);
    try {
      const response = await this.$axios.$delete(
        `${apiBase}Families`,
        {
          id: payload[0].id,
          name: payload[0].name,
        },
        {
          headers: {
            "Const-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async getDepartments({ commit, getters }) {
    try {
      const response = await this.$axios.$get(`${apiBase}Departments`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
      commit("setDepartments", response);
    } catch (error) {
      console.log(error);
    }
  },
  setLanguage({ commit }, payload) {
    commit("setLanguage", payload);
  },
};
