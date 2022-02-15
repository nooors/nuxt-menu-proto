<template>
  <div>
    <pre>
            {{ products }}
        </pre
    >
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      products: [],
    };
  },
  async fetch() {
    await this.$store.dispatch("getFamilies");
  },
  computed: {
    productsStore: function () {
      return this.$store.getters.getFamilies;
    },
  },
  watch: {
    productsStore: function () {
      this.products = this.$store.getters.getFamilies.map((a) => {
        return { ...a };
      });
    },
  },
};
</script>

<style></style>
