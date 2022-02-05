import { parseJwt } from "~/utils/api";
import { apiBase } from "~/utils/api";

export default {
  async Register({ getters }, payload) {
    try {
      const response = await this.$axios.$post(
        `${apiBase}Accounts/register`,
        {
          eMail: payload.email,
          password: payload.password,
          phoneNumber: payload.phone,
          role: payload.rol,
          name: payload.firstName,
          surName: payload.lastName,
          AvatarImagePath: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      //commit("setUsers", response);
      console.log(response);
      $nuxt.$router.push("/Users");
    } catch (response) {
      console.log(response);
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
      const response = await this.$axios.$get("http://localhost:3000/menu");
      commit("setMenu", response);
    } catch (error) {
      console.log(error);
    }
  },
  async getUsers({ commit, getters }) {
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
  async updateUser({ getters, dispatch }, payload) {
    try {
      const response = await this.$axios.$put(
        `${apiBase}Accounts`,
        {
          userName: payload.email,
          name: payload.firstName,
          surName: payload.lastName,
          phoneNumber: payload.phone,
          roles: payload.rol,
          avatarImagePath: "",
        },
        {
          headers: {
            "Const-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      dispatch("getUsers");
      console.log(response);
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
  async editProduct({ getters, dispatch }, product) {
    alert("dipatch");
    console.log(product);
    try {
      const response = await this.$axios.$put(
        `${apiBase}Products`,

        {
          id: product.id,
          familiesDTO: {
            id: product.familiesDTO.id,
            name: product.familiesDTO.name,
          },
          ptypesDTO: {
            id: product.ptypesDTO.id,
            name: product.ptypesDTO.name,
          },
          departmentsId: [product.departmentsDTO[0].id],
          shortNameCreateDTO: [
            {
              id: product.shortNameCreateDTO[0].id,
              name: product.shortNameCreateDTO[0].name,
              lang: product.shortNameCreateDTO[0].lang,
            },
            {
              id: product.shortNameCreateDTO[1].id,
              name: product.shortNameCreateDTO[1].name,
              lang: product.shortNameCreateDTO[1].lang,
            },
            {
              id: product.shortNameCreateDTO[2].id,
              name: product.shortNameCreateDTO[2].name,
              lang: product.shortNameCreateDTO[2].lang,
            },
          ],
          descriptionDTOs: [
            {
              id: product.descriptionDTOs[0].id,
              name: product.descriptionDTOs[0].name,
              lang: product.descriptionDTOs[0].lang,
            },
            {
              id: product.descriptionDTOs[1].id,
              name: product.descriptionDTOs[1].name,
              lang: product.descriptionDTOs[1].lang,
            },
            {
              id: product.descriptionDTOs[2].id,
              name: product.descriptionDTOs[2].name,
              lang: product.descriptionDTOs[2].lang,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      dispatch("getProducts");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async addProduct({ getters, dispatch }, product) {
    try {
      const response = await this.$axios.$post(
        `${apiBase}Products`,

        {
          id: 0,
          familiesDTO: {
            id: product.familiesDTO.id,
            name: product.familiesDTO.name,
          },
          ptypesDTO: {
            id: product.ptypesDTO.id,
            name: product.ptypesDTO.name,
          },
          departmentsId: [product.departmentsDTO[0].id],
          shortNameCreateDTO: [
            {
              id: 0,
              name: product.shortNameCreateDTO[0].name,
              lang: "es",
            },
            {
              id: 0,
              name: product.shortNameCreateDTO[1].name,
              lang: "ca",
            },
            {
              id: 0,
              name: product.shortNameCreateDTO[2].name,
              lang: "en",
            },
          ],
          descriptionDTOs: [
            {
              id: 0,
              name: product.descriptionDTOs[0].name,
              lang: "es",
            },
            {
              id: 0,
              name: product.descriptionDTOs[1].name,
              lang: "ca",
            },
            {
              id: 0,
              name: product.descriptionDTOs[2].name,
              lang: "en",
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      dispatch("getProducts");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteProduct({ dispatch, getters }, id) {
    try {
      const response = await this.$axios.$delete(`${apiBase}Products/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
      dispatch("getProducts");
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
      const response = await this.$axios.delete(`${apiBase}Families/${id}`, {
        headers: {
          "Const-Type": "application/json",
          Authorization: `Bearer ${getters.getToken}`,
        },
      });
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
  async deletePtypes({ getters, dispatch }, id) {
    try {
      const response = await this.$axios.delete(`${apiBase}PTypes/?id=${id}`, {
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
  async deleteDepartment({ getters, dispatch }, id) {
    try {
      const response = await this.$axios.delete(
        `${apiBase}Departments/?id=${id}`,
        { id: id },
        {
          headers: {
            "Const-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`,
          },
        }
      );
      dispatch("getDepartments");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  setLanguage({ commit }, payload) {
    commit("setLanguage", payload);
  },
};
