<template> </template>
<script>
export default {
  created() {
    this.$store.commit("removeAuthenticate");
    this.$store.commit("logOut");
    this.$router.push("/");
  },
};
</script>
