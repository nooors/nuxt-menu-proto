<template>
  <div class="login">
    <v-card-title class="d-flex justify-center">
      Register
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row class="mx-2">
        <v-col>
          <v-text-field
            append-icon="mdi-account"
            :rules="[rules.required, rules.email]"
            name="input-10-2"
            hint="At least 8 characters"
            label="First Name"
            value=""
            v-model="email"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            append-icon="mdi-account"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Last Name"
            hint="At least 8 characters"
            value=""
            v-model="password"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col>
          <v-text-field
            append-icon="mdi-at"
            :rules="[rules.required, rules.email]"
            name="input-10-2"
            label="e-mail"
            hint="At least 8 characters"
            value=""
            v-model="email"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            append-icon="mdi-cellphone-basic"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Phone number"
            hint="At least 8 characters"
            value=""
            v-model="password"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col>
          <v-select
            :items="items"
            label="Role"
            append-icon="mdi-account-box-multiple "
          ></v-select>
        </v-col>

        <v-col>
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            value=""
            v-model="password"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="d-flex justify-end">
      <v-btn class="mt-3" shaped elevation="10">
        Submit
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  layout: "authenticate",
  data() {
    return {
      show2: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
      email: "",
      password: "",
      items: ["Admin", "Collaborator", "Guest"],
    };
  },
};
</script>

<style></style>
