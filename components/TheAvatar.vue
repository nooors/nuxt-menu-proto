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
    };
  },
  computed: {
    avatar() {
      if (this.$store.getters.getUser.email) {
        return {
          name: this.$store.getters.getUser.email.charAt(0).toUpperCase(),
          email: this.$store.getters.getUser.email,
          user: this.$store.getters.getUser.user,
          role: this.$store.getters.getUser.role,
        };
      }
    },
  },
};
</script>

<style></style>
