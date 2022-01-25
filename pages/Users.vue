<template>
  <div>
    <h1>Users</h1>
    <pre>
    {{ users }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: null,
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
      this.users = this.$store.getters.getUsers.map((a) => {
        return { ...a };
      });
    },
  },
};
</script>

<style></style>
