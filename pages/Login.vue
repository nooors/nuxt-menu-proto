<template>
  <div class="login">
    <v-card-title class="d-flex justify-center">
      Login
    </v-card-title>
    <v-divider></v-divider>
    <v-form ref="form">
      <v-card-text>
        <v-row class="mx-2">
          <v-col>
            <v-text-field
              append-icon="mdi-at"
              :rules="[rules.required]"
              name="input-10-2"
              value=""
              v-model="login.email"
              class="input-group--focused"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mx-2">
          <v-col>
            <v-text-field
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              value=""
              v-model="login.password"
              class="input-group--focused"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="d-flex justify-end">
        <v-btn class="mt-3" shaped elevation="10" @click="Submit">
          Submit
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
import { parseJwt } from "~/utils/api";
export default {
  layout: "authenticate",
  data() {
    return {
      show2: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      login: { email: "", password: "" },
    };
  },

  methods: {
    Submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("login", this.login).then(this.logged);
      }
    },
    logged() {
      return this.$router.push("/Home");
    },
  },

  // When any page is reloaded the data in the store is deleted. IsLogged and isAdmin both are set to false. The middleware read no user logged, redirect to this page. Here is the posibility the same user is in the app if did not log out.
  mounted() {
    if (localStorage.getItem("token") !== null) {
      let infoToken = parseJwt(localStorage.getItem("token"));
      this.$store.commit("setUserLogged", infoToken);

      this.$store
        .dispatch("getUserById", infoToken.email)
        .then(this.$router.push("/Home"));
    }
  },
};
</script>

<style></style>
