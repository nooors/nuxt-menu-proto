<template>
  <div class="text-center">
    <v-menu offset-y rounded="b-xl">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-avatar :color="color" size="40">
            <span class="text-h6">{{ avatar.short }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item> name: {{ avatar.name }} </v-list-item>
        <v-list-item> last name: {{ avatar.lastName }} </v-list-item>
        <v-list-item> role: {{ avatar.role }} </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { parseJwt } from "~/utils/api";
export default {
  data() {
    return {
      color: "warning",
      avatar: {
        name: "",
        lastName: "",
        email: "",
        role: "",
        phoneNumber: "",
        short: "",
      },
      user: { token: "", user: "", email: "" },
    };
  },
  // async fetch() {
  //   await this.$store.dispatch("getUsers");
  // },
  mounted() {
    if (localStorage.getItem("token") !== null) {
      this.user = parseJwt(localStorage.getItem("token"));
    }
  },
  computed: {
    currentUser: function () {
      let userAux = this.$store.getters.getUsers.filter(
        (a) => a.userName === this.user.email
      );
      console.log(`userAux ${userAux}`);
      return Object.assign(userAux);
    },
  },

  watch: {
    currentUser: function () {
      this.avatar.name = this.currentUser[0].name;
      this.avatar.lastName = this.currentUser[0].surName;
      this.avatar.email = this.currentUser[0].userName;
      this.avatar.role = this.currentUser[0].roles.includes("Admin")
        ? "Admin"
        : "User";
      this.avatar.phoneNumber = this.currentUser[0].phoneNumber;
      this.avatar.short =
        this.avatar.name.charAt(0).toUpperCase() +
        this.avatar.lastName.charAt(0).toUpperCase();
      console.log(this.currentUser);
    },
  },
};
</script>

<style></style>
