import Vuex from "vuex";

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    console.log(store.state);
    return redirect("/Login");
  }
}
