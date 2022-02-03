<template>
  <div>
    <pre>
            {{ products[0] }}
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
    await this.$store.dispatch("getProducts");
  },
  computed: {
    productsStore: function () {
      return this.$store.getters.getProducts;
    },
  },
  watch: {
    productsStore: function () {
      this.products = this.$store.getters.getProducts.map((a) => {
        return { ...a };
      });
    },
  },
};
</script>

<style></style>
