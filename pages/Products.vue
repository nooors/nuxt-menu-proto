<template>
  <div>
    <h1>Products</h1>
    <v-row class="d-flex">
      <v-col>
        <pre>
        {{ products }}
        </pre>
      </v-col>
      <v-col>
        <li v-for="product in products" :key="product.id">
          <pre>
    {{ product.family.name }} {{ product.ptypes.name }} {{
              product.departaments.name
            }} {{ product.shortNames }}
          </pre>
        </li>
      </v-col>
      <v-col>
        <li v-for="(key, index) in keys" :key="index">
          {{ key }}
        </li>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      keys: [],
    };
  },
  async fetch() {
    console.log("products");
    await this.$store.dispatch("getProducts");
    this.products = this.$store.getters.getProducts;
    console.log(Array.isArray(this.products));
    this.keys = this.products.array.forEach((element) => element.keys());
  },
};
</script>

<style></style>
