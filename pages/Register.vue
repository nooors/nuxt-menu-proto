<template>
  <div class="login">
    <v-card-title class="d-flex justify-center">
      Register
    </v-card-title>
    <v-divider></v-divider>
    <v-form ref="form">
      <v-card-text>
        <v-row class="mx-2">
          <v-col>
            <v-text-field
              append-icon="mdi-account"
              :rules="[rules.required, rules.name]"
              type="text"
              name="input-1-1"
              hint="characters and spaces only"
              label="First Name"
              value=""
              v-model="dataValues.firstName"
              class="input-group--focused"
            ></v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              append-icon="mdi-account"
              :rules="[rules.required, rules.name]"
              type="text"
              name="input-1-2"
              label="Last Name"
              hint="characters and spaces only"
              value=""
              v-model="dataValues.lastName"
              class="input-group--focused"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-2">
          <v-col>
            <v-text-field
              append-icon="mdi-at"
              :rules="[rules.required, rules.email]"
              name="input-1-3"
              label="e-mail"
              hint="e-mail format"
              value=""
              v-model="dataValues.email"
              class="input-group--focused"
            ></v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              append-icon="mdi-cellphone-basic"
              :rules="[rules.required, rules.phone]"
              type="number"
              name="input-1-4"
              label="Phone number"
              hint="9 numbers no space."
              value=""
              v-model="dataValues.phone"
              class="input-group--focused"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-2">
          <v-col>
            <v-select
              :items="items"
              name="input 1-5"
              label="Role"
              v-model="dataValues.rol"
              append-icon="mdi-account-box-multiple"
              :rules="[rules.required]"
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
              v-model="dataValues.password"
              class="input-group--focused"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="d-flex justify-end">
        <v-btn class="mt-3" shaped elevation="10" @click="submit">
          Submit
        </v-btn>
      </v-card-actions>
    </v-form>
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
        name: (value) => {
          const pattern = /^[a-zA-Z ]+/;
          return pattern.test(value) || "Invalid name format";
        },
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        phone: (value) => {
          const pattern = /^[0-9]{9}/;
          return pattern.test(value) || "Invalid number.";
        },
      },
      items: ["Admin", "Collaborator", "Guest"],
      dataValues: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        rol: "",
      },
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("Register", this.dataValues);
      }
    },
  },
};
</script>

<style></style>
