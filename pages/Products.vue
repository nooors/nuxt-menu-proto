<template>
  <div>
    <h1>Products</h1>
    <li v-for="(value, key, index) in products" :key="index">
      <pre>
    {{ key }}{{ value }}
    </pre
      >
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: null,
    };
  },
  async fetch() {
    console.log("products");
    await this.$store.dispatch("getProducts");
    this.products = this.$store.getters.getProducts;
  },
};
</script>

<style></style>
