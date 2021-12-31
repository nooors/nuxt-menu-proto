const apiBase = "http://localhost:3000/";
export default {
  async Register(payload) {
    try {
      const response = await this.$axios.$post(
        "http://localhost:3000/users",
        payload
      );
      //commit("setUsers", response);
      console.log(response);
    } catch (error) {
      console.log(error);
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
  setLanguage({ commit }, payload) {
    commit("setLanguage", payload);
  },
};
