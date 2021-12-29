export default {
  setUsers: (state, payload) => {
    console.log("mutations arrivals");
    state.users = payload;
    console.log(state.users);
  },
  setMenu: (state, payload) => {
    state.menu = payload;
    console.log("state.menu");
    console.log(state.menu);
    console.log("payload");

    console.log(payload);
  },
};
