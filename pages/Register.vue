<template>
  <div class="login d-flex justify-center mt-12">
    <fetch-message
      :dialog="componentProps.dialog"
      :cardTitle="componentProps.cardTitle"
      :cardText="componentProps.cardText"
    ></fetch-message>
    <v-card shaped elevation="10">
      <v-card-title class="ml-5">
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
                disabled
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row class="mx-2">
            <v-col>
              <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.password]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                hint="At least 8 characters, min 1 uppercase 1 lowercase 1 number 1 symbol"
                value=""
                v-model="dataValues.password"
                class="input-group--focused"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.password, rules.confirm]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="Confim password"
                hint="At least 8 characters"
                value=""
                v-model="dataValues.passwordConfirm"
                class="input-group--focused"
                @click:append="show2 = !show2"
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
    </v-card>
  </div>
</template>

<script>
import fetchMessage from "~/components/fetchMessage.vue";
export default {
  components: { fetchMessage },
  layout: "default",
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
        password: (value) => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/;
          return pattern.test(value) || "Invalid password format";
        },
        confirm: () => {
          return (
            this.password === this.passwordConfirm || "Passwords must match"
          );
        },
      },
      items: ["Admin", "User", "Guest"],
      dataValues: {
        email: "",
        password: "",
        passwordConfirm: "",
        firstName: "",
        lastName: "",
        phone: "",
        rol: "",
      },
      componentProps: {
        dialog: false,
        cardText: "",
        cardTitle: "",
      },
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        try {
          this.$store.dispatch("Register", this.dataValues);
          this.componentProps.cardText = "User Register Succes";
          this.componentProps.cardTitle = "Everything has gone nice";
          this.timeOut;
          $nuxt.$router.push("/Users");
        } catch (error) {
          this.componentProps.cardTitle =
            "Ooops somethig went wrong, please try again";
          this.componentProps.cardText = error;
          this.timeOut;
          this.$refs.form.reset();
        }
      }
    },
    timeOut() {
      setTimeout(function () {
        this.componentProps.dialog = true;
      }, 2000);
      this.componentProps.dialog = false;
    },
  },
};
</script>

<style></style>
