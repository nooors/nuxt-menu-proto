<template>
  <v-container class="d-flex flex-column">
    <h1 class="mb-5">{{ item.name }}</h1>

    <v-card
      class="mb-7 mr-7 px-7 py-3"
      shaped
      elevation="10"
      v-for="user in item.users"
      :key="user.id"
      max-width="250"
    >
      <v-card-title class="text-center body-1">
        <v-avatar color="warning" size="30" class="mr-2">{{
          userAvatar(user.name, user.surName)
        }}</v-avatar>
        {{ user.name }} {{ user.surName }}
      </v-card-title>
      <v-divider> </v-divider>
      <v-card-actions class="mb-3">
        <v-fab-transition>
          <v-menu
            :v-model="menu[user.id]"
            :close-on-content-click="false"
            nudge-width="200"
            offset-x
            persistent
            allow-overflow
            shaped
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="pink"
                fab
                dark
                x-small
                absolute
                bottom
                right
                v-on="on"
                v-bind="attrs"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <v-card shaped class="pa-3">
              <user-form
                :disableEmail="disable.email"
                :disablePhoto="disable.photo"
                :disablePassword="disable.password"
                :disableConfirmPassword="disable.confirmPassword"
                :valueName="user.name"
                :valueLastName="user.surName"
                :valueEmail="user.userName"
                :valuePhone="user.phoneNumber"
                :valueRole="user.roles"
                @submit="updateUser"
              ></user-form>
              <v-card-actions> </v-card-actions>
            </v-card>
          </v-menu>
        </v-fab-transition>
      </v-card-actions>
    </v-card>

    <v-tooltip top>
      <template v-slot:activator="{ on, plus }">
        <v-btn
          color="pink"
          fab
          medium
          bottom
          right
          dark
          v-bind="plus"
          v-on="on"
          @click="addNewUser"
          class="mr-5 align-self-end"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>New User</span>
    </v-tooltip>
  </v-container>
</template>

<script>
import ItemContentLayout from "~/components/ItemContentLayout.vue";
import UserForm from "~/components/UserForm.vue";
export default {
  components: { ItemContentLayout, UserForm },
  data() {
    return {
      fab: true,
      menu: false,
      message: false,
      hints: true,
      formTemp: [],
      dialog: false,
      newItem: "",
      item: {
        name: "Users",
        users: [],
      },
      rules: {
        required: (value) => !!value || "Required.",
        name: (value) => {
          const pattern = /^[a-zA-Z ]+/;
          return pattern.test(value) || "Invalid name format";
        },
      },
      dataValues: {
        lastName: "",
      },
      disable: {
        email: true,
        photo: true,
        password: true,
        confirmPassword: true,
      },
    };
  },
  async fetch() {
    await this.$store.dispatch("getUsers");
  },
  computed: {
    usersStore: function () {
      return this.$store.getters.getUsers;
    },
  },
  watch: {
    usersStore: function () {
      this.item.users = this.$store.getters.getUsers.map((a) => {
        return { ...a };
      });
    },
  },
  methods: {
    addNewUser: function () {
      this.$router.push("/Register");
    },
    updateUser: function (payload) {
      this.$store.dispatch("updateUser", payload);
    },

    deleteUser(id) {
      console.log(id);
    },
    userAvatar: function (name, lastName) {
      return name.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase;
    },
  },
};
</script>

<style>
v-container {
  height: 90vh;
}
.v-menu__content {
  overflow: unset;
  contain: unset;
}
</style>
