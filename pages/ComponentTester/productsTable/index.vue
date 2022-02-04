<template>
  <table-content-layout :name="name">
    <template v-slot:table-content>
      <the-languages></the-languages>
      <v-data-table :headers="headers" :items="products">
        <template v-slot:footer>
          <v-toolbar flat>
            <v-toolbar-title>My CRUD</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  New Item
                </v-btn>
              </template>
              <v-card shaped elevation="elevation-10">
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-dialog v-model="shortNameDialog" max-width="800px">
                          <languages-input
                            @languages="editShortName"
                            @closeDialog="shortNameDialog = false"
                            :propSpanish="editedItem.shortNameCreateDTO[0].name"
                          ></languages-input>
                        </v-dialog>
                        <v-textarea
                          v-model="editedItem.shortNameCreateDTO[language].name"
                          label="Product name"
                          rows="2"
                          auto-grow
                          row-height="15"
                          @click.stop="shortNameDialog = true"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.familiesDTO.name"
                          label="Family"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.departmentsDTO[0].name"
                          label="Department"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.ptypesDTO.name"
                          :items="pTypes.name"
                          item-text="state"
                          item-value="abbr"
                          label="Product types"
                          persistent-hint
                          return-object
                          single-line
                        ></v-select>
                        <v-text-field
                          v-model="editedItem.ptypesDTO.name"
                          label="Product Type"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-dialog v-model="descriptionDialog" max-width="800px">
                          <languages-input
                            @languages="editDescription"
                            @closeDialog="descriptionDialog = false"
                            :propSpanish="editedItem.descriptionDTOs[0].name"
                          ></languages-input>
                        </v-dialog>
                        <v-textarea
                          v-model="editedItem.descriptionDTOs[language].name"
                          label="Description"
                          @click.stop="descriptionDialog = true"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)" color="pink">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)" color="pink">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data> </template>
      </v-data-table>
    </template>
  </table-content-layout>
</template>

<script>
import LanguagesInput from "~/components/LanguagesInput.vue";
export default {
  components: { LanguagesInput },
  data: () => ({
    families: [],
    pTypes: [],
    departments: [],
    dialog: false,
    shortNameDialog: false,
    descriptionDialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Products",
        align: "start",
        sortable: false,
        value: "shortNameCreateDTO[0].name",
      },

      { text: "Families", value: "familiesDTO.name" },
      { text: "Departments", value: "departmentsDTO[0].name" },
      { text: "Product Types", value: "ptypesDTO.name" },
      { text: "Description", value: "descriptionDTOs[0].name" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      shortNameCreateDTO: [{ name: "" }, { name: "" }, { name: "" }],
      familiesDTO: { name: "" },
      departmentsDTO: [{ name: "" }],
      ptypesDTO: { name: "" },
      descriptionDTOs: [{ name: "" }, { name: "" }, { name: "" }],
    },
    defaultItem: {
      shortNameCreateDTO: [{ name: "" }, { name: "" }, { name: "" }],
      familiesDTO: { name: "" },
      departmentsDTO: [{ name: "" }],
      ptypesDTO: { name: "" },
      descriptionDTOs: [{ name: "" }, { name: "" }, { name: "" }],
    },
    name: "Products",
  }),
  async fetch() {
    await this.$store.dispatch("getProducts");
    await this.$store.dispatch("getFamilies");
    await this.$store.dispatch("getDepartments");
    await this.$store.dispatch("getPtypes");
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
    },
    productsStore: function () {
      return this.$store.getters.getProducts;
    },
    familiesStore: function () {
      return this.$store.getters.getFamilies;
    },
    departmentsStore: function () {
      return this.$store.getters.getDepartments;
    },
    pTypesStore: function () {
      return this.$store.getters.getPtypes;
    },
    language() {
      return this.$store.getters.getLanguageSelected;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    productsStore: function () {
      this.products = this.$store.getters.getProducts.map((a) => {
        return { ...a };
      });
    },
    familiesStore: function () {
      this.families = this.$store.getters.getFamilies.map((a) => {
        return { ...a };
      });
    },
    departmentsStore: function () {
      this.departments = this.$store.getters.getDepartments.map((a) => {
        return { ...a };
      });
    },
    pTypesStore: function () {
      this.pTypes = this.$store.getters.getPtypes.map((a) => {
        return { ...a };
      });
    },
    language: function () {
      alert("language");
      this.$forceUpdate();
    },
    headers: {
      deep: true,
      handler() {
        this.$forceUpdate();
      },
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.dispatch("deleteProduct", this.products[this.editedIndex].id);
      this.refreshData();
      this.closeDelete();
    },

    editShortName(payload) {
      if (this.editedIndex > -1) {
        this.$store.commit("editShortName", {
          languages: payload,
          index: this.editedIndex,
        });
      } else {
        console.log(payload);
        this.editedItem.shortNameCreateDTO[0].name = payload.spanish;
        this.editedItem.shortNameCreateDTO[1].name = payload.catalan;
        this.editedItem.shortNameCreateDTO[2].name = payload.english;
      }

      this.shortNameDialog = false;
    },
    editDescription(payload) {
      alert("edit");
      console.log(payload);
      if (this.editedIndex > -1) {
        this.$store.commit("editDescription", {
          languages: payload,
          index: this.editedIndex,
        });
      } else {
        alert("new");
        console.log(payload);
        alert("new Item");
        this.editedItem.descriptionDTOs[0].name = payload.spanish;
        this.editedItem.descriptionDTOs[1].name = payload.catalan;
        this.editedItem.descriptionDTOs[2].name = payload.english;
      }
      this.descriptionDialog = false;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      alert("saving");
      console.log(this.editedIndex);
      if (this.editedIndex > -1) {
        this.$store.dispatch("editProduct", this.products[this.editedIndex]);
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        this.products.push(this.editedItem);
      }
      this.close();
    },
    refreshData() {
      this.$store.dispatch("getProducts");
    },
  },
};
</script>

<style></style>
