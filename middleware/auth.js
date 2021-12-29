import Vuex from "vuex";

export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log("Middleware");
  console.log(store.state.authenticate);
  if (!store.state.authenticate) {
    console.log(store.state.authenticate);
    return redirect("/Login");
  }
}
