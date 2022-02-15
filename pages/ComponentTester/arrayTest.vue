<template>
  <div>
    <h1>Array Test</h1>
    <pre>
      {{ families }}
  </pre
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      families: [],
      familiesArray: [],
    };
  },
  async fetch() {
    await this.$store.dispatch("getFamilies");
  },
  computed: {
    familiesStore: function () {
      return this.$store.getters.getFamilies;
    },
  },
  watch: {
    familiesStore: function () {
      this.families = this.$store.getters.getFamilies.map((a) => {
        return { ...a };
      });
      this.familiesArray = this.families.map((a) => {
        return a.name;
      });
    },
  },
};
</script>

<style></style>
