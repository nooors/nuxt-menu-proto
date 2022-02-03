<template>
  <div class="d-flex flex-column">
    <h1>Tester Component</h1>
    <nuxt-link to="ComponentTester/Tester">Tester</nuxt-link>
    <nuxt-link to="ComponentTester/ItemContentLayout"
      >Item Content Layout</nuxt-link
    >
    <nuxt-link to="ComponentTester/users">Users</nuxt-link>
    <nuxt-link to="ComponentTester/products">Products</nuxt-link>
    <nuxt-link to="ComponentTester/productsTable">Products Table</nuxt-link>
    <nuxt-link to="ComponentTester/cardLanguages">Card Languages</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style></style>
