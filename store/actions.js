export default {
  async Register({ commit }, payload) {
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
      const response = await this.$axios.$get("http://localhost:3000/menu");
      commit("setMenu", response);
    } catch (error) {
      console.log(error);
    }
  },
};
