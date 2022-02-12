<template> </template>
<script>
export default {
  created() {
    this.$store.commit("logOut");
    this.$router.push("/");
  },
};
</script>
