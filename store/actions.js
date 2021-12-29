export default {
  async Register({ commit }, payload) {
    const response = await this.$axios.$post(
      "http://localhost:3000/users",
      payload
    );
    //commit("setUsers", response);
    console.log(response);
  },
};
