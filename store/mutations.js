export default {
  setUsers(state, payload) {
    console.log("mutations arrivals");
    state.users = payload;
    console.log(state.users);
  },
};
