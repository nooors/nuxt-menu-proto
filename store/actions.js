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
    } catch (error) {
      alert(error);
    }
  },

  logOut({ commit }) {
    commit("LogOut");
  },

  async getMenu({ commit }) {
    try {
      const response = await this.$axios.$get(`${apiBase}menu`);
      commit("setMenu", response);
    } catch (error) {
      console.log(error);
    }
  },
  async getUsers({ commit, getters }) {
    alert("getting users");
    try {
      const response = await this.$axios.$get(`${apiBase}Accounts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
      commit("setUsers", response);
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

  async updateFamily({ getters, dispatch }, payload) {
    try {
      const response = await this.$axios.$put(
        `${apiBase}Families`,
        {
          id: payload.id,
          name: payload.name,
        },
        {
          headers: {
            "Const-Type": "application/json",
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
  async deleteFamily({ getters, dispatch }, id) {
    try {
      const response = await this.$axios.delete(
        `${apiBase}Families/?Id=${id}`,
        {
          headers: {
            "Const-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      dispatch("getFamilies");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async getPtypes({ commit, getters }) {
    try {
      const response = await this.$axios.$get(`${apiBase}PTypes`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
      commit("setPtypes", response);
    } catch (error) {
      console.log(error);
    }
  },
  async getPtypeId({ commit, getters }, id) {
    try {
      const response = await this.$axios.$get(`${apiBase}PTypes/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
      commit("setPtypeId", response);
    } catch (error) {
      console.log(error);
    }
  },
  async addPtypes({ getters, dispatch }, payload) {
    try {
      const response = await this.$axios.$post(
        `${apiBase}Ptypes`,
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
      dispatch("getPtypes");
    } catch (error) {
      console.log(error);
    }
  },

  async updatePtypes({ getters, dispatch }, payload) {
    try {
      const response = await this.$axios.$put(
        `${apiBase}PTypes`,
        {
          id: payload.id,
          name: payload.name,
        },
        {
          headers: {
            "Const-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      console.log(response);
      dispatch("getPtypes");
    } catch (error) {
      console.log(error);
    }
  },
  async deleteFamily({ getters, dispatch }, id) {
    try {
      const response = await this.$axios.delete(`${apiBase}PTypes/?Id=${id}`, {
        headers: {
          "Const-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
      dispatch("getPtypes");
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
