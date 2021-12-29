import Vuex from "vuex";

export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log("Middleware");
  console.log(store.state);
  if (!store.state) {
    console.log(store.state);
    return redirect("/Login");
  }
}
