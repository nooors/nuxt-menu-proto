<template>
  <h1>Families</h1>
</template>

<script>
export default {
  data() {
    return {
      families: null,
    };
  },
  async fetch() {
    await this.$store.dispatch("getFamilies");
    this.families = this.$store.getters.getFamilies;
  },
};
</script>

<style></style>
