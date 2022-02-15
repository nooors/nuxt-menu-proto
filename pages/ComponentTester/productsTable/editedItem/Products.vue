<template>
  <v-container class="d-flex flex-wrap">
    <v-row>
      <v-col>
        <h1 class="mb-5">Products</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        class="mb-7 mr-7 px-7 py-3"
        shaped
        elevation="10"
        v-for="product in products"
        :key="product.id"
        max-width="250"
      >
        <v-card-title class="body-1">
          {{ product.shortNameCreateDTO[0].name }}
        </v-card-title>
        <v-card-actions class="mb-3">
          <v-fab-transition>
            <v-dialog
              :v-model="menu"
              :close-on-content-click="false"
              max-width="800"
              allow-overflow
              shaped
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="pink"
                  fab
                  dark
                  x-small
                  absolute
                  bottom
                  right
                  v-on="on"
                  v-bind="attrs"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <v-card shaped class="pa-3">
                <v-form ref="family-form">
                  <v-text-field
                    v-model="product.shortNameCreateDTO[0].name"
                    :value="product.shortNameCreateDTO[0].name"
                  ></v-text-field>
                </v-form>
                <v-card-actions>
                  <v-btn
                    class="mr-10"
                    color="pink"
                    fab
                    dark
                    absolute
                    bottom
                    right
                    x-small
                    @click="updateItem()"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    color="pink"
                    fab
                    dark
                    absolute
                    bottom
                    right
                    x-small
                    @click="deleteItem()"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-fab-transition>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import ItemContentLayout from "~/components/ItemContentLayout.vue";
export default {
  components: { ItemContentLayout },
  data() {
    return {
      name: "Products",
      products: [],
      fab: true,
      menu: false,
      message: false,
      hints: true,
      formTemp: [],
      dialog: false,
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
      this.products = JSON.parse(
        JSON.stringify(this.$store.getters.getProducts)
      );
    },
  },
  methods: {
    addNewProduct: function () {},
    updateProduct: function () {},
    deleteProduct: function () {},
  },
};
</script>

<style></style>
