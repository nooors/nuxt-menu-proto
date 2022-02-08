<template>
  <div class="text-center">
    <v-menu offset-y rounded="b-xl">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-avatar :color="color">
            {{ avatar.name }}
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item> Email: {{ avatar.email }} </v-list-item>
        <v-list-item> User: {{ avatar.user }} </v-list-item>
        <v-list-item> Role: {{ avatar.role }} </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "warning",
      avatar: {
        name: "",
        email: "",
        user: "",
        role: "",
      },
    };
  },
  computed: {
    avatarStore() {
      if (this.$store.getters.getUser) {
        return this.$store.getters.gettUser;
      }
    },
  },
  watch: {
    avatarStore: function () {
      this.avatar.name = this.$store.getters.getUser.email
        .charAt(0)
        .toUpperCase();
      this.avatar.email = this.$store.getters.getUser.userName;
      this.avatar.user = this.$store.getters.getUser.name;
      this.avatar.role = this.$store.getters.getUser.role.includes("Admin")
        ? "Admin"
        : "User";
    },
  },
};
</script>

<style></style>
