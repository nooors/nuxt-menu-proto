<template>
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
            :value="valueName"
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
            :value="valueLastName"
            v-model="dataValues.lastName"
            class="input-group--focused"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col>
          <v-text-field
            append-icon="mdi-at"
            name="input-1-3"
            label="e-mail"
            hint="e-mail format"
            :value="valueEmail"
            v-model="dataValues.email"
            class="input-group--focused"
            :disabled="disableEmail"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            append-icon="mdi-cellphone-basic"
            :rules="[rules.required, rules.phone]"
            type="number"
            name="input-1-4"
            hint="9 numbers no space."
            value="valuePhone"
            v-model="dataValues.phone"
            class="input-group--focused"
            counter="9"
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
          <v-file-input
            prepend-icon=""
            append-icon="mdi-camera"
            name="input-10-2"
            label="Photo"
            hint="upload a profile photo"
            accept="image/png, image/jpeg, image/bmp"
            class="input-group--focused"
            :disabled="disablePhoto"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col>
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            value=""
            v-model="dataValues.password"
            class="input-group--focused"
            @click:append="show2 = !show2"
            :disabled="disablePhoto"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Confim password"
            hint="At least 8 characters"
            value=""
            v-model="dataValues.password"
            class="input-group--focused"
            @click:append="show2 = !show2"
            :disabled="disableConfirmPassword"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="d-flex justify-end">
      <v-btn class="mr-3" shaped elevation="10" @click="submit">
        Submit
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  name: "userForm",
  props: [
    "disableEmail",
    "disablePhoto",
    "disablePassword",
    "disableConfirmPassword",
    "valueName",
    "valueLastName",
    "valueEmail",
    "valuePhone",
    "valueRole",
    "valuePhoto",
  ],
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
      items: ["Admin", "User"],
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
  created() {
    this.dataValues.email = this.valueEmail;
    this.dataValues.lastName = this.valueLastName;
    this.dataValues.firstName = this.valueName;
    this.dataValues.rol = this.valueRole;
    this.dataValues.phone = this.valuePhone;
    this.dataValues.password = this.valuePassword;
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$emit("submit", this.dataValues);
      }
    },
  },
};
</script>

<style></style>
