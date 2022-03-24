<template>
  <div>
    <fetch-message
      :dialog="dialogProp"
      :cardText="cardTextProp"
      :cardTitle="cardTitleProp"
    ></fetch-message>
    <table-content-layout :name="name" :openDialog="dialogOpen">
      <template v-slot:table-content>
        <v-data-table :headers="headers" :items="products">
          <template v-slot:top>
            <v-toolbar class="mt-3" elevation="0">
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="800px" elevation="10">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="pink"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    fab
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card shaped elevation="elevation-10">
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <form ref="formValidate" lazy-validation>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-dialog
                              v-model="shortNameDialog"
                              max-width="800px"
                            >
                              <languages-input
                                @languages="editShortName"
                                @closeDialog="shortNameDialog = false"
                                :propSpanish="
                                  editedItem.shortNameCreateDTO[0].name
                                "
                                :propCatalan="
                                  editedItem.shortNameCreateDTO[1].name
                                "
                                :propEnglish="
                                  editedItem.shortNameCreateDTO[2].name
                                "
                              ></languages-input>
                            </v-dialog>
                            <v-textarea
                              v-model="
                                editedItem.shortNameCreateDTO[language].name
                              "
                              label="Product name"
                              hint="Product name"
                              persistent-hint
                              rows="2"
                              auto-grow
                              row-height="15"
                              :rules="[rules.required]"
                              @click.stop="shortNameDialog = true"
                            ></v-textarea>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-select
                              v-model="editedItem.familiesDTO"
                              :items="families"
                              item-text="name"
                              item-value="id"
                              return-object
                              label="Family"
                              :menu-props="{ maxHeight: '400' }"
                              hint="Family"
                              persistent-hint
                              :rules="[rules.required]"
                              single-line
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-select
                              v-model="editedItem.departmentsDTO[0]"
                              :items="departments"
                              item-text="name"
                              item-value="id"
                              return-object
                              label="Departments"
                              hint="Departments"
                              persistent-hint
                              :rules="[rules.required]"
                              single-line
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-select
                              v-model="editedItem.ptypesDTO"
                              :items="pTypes"
                              item-value="id"
                              item-text="name"
                              return-object
                              label="Product types"
                              hint="Product types"
                              persistent-hint
                              :rules="[rules.required]"
                              single-line
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-dialog
                              v-model="descriptionDialog"
                              max-width="800px"
                            >
                              <languages-input
                                @languages="editDescription"
                                @closeDialog="descriptionDialog = false"
                                :propSpanish="
                                  editedItem.descriptionDTOs[0].name
                                "
                                :propCatalan="
                                  editedItem.descriptionDTOs[1].name
                                "
                                :propEngish="editedItem.descriptionDTOs[2].name"
                              ></languages-input>
                            </v-dialog>
                            <v-textarea
                              v-model="
                                editedItem.descriptionDTOs[language].name
                              "
                              label="Description"
                              hint="Description"
                              persistent-hint
                              rows="2"
                              auto-grow
                              :rules="[rules.required]"
                              row-height="15"
                              @click.stop="descriptionDialog = true"
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </form>
                  <div v-if="isInvalid">
                    <p class="ml-5 pink--text">
                      "You need to fill all the fields in order to create a new
                      product"
                    </p>
                  </div>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="pink" dark fab @click="close">
                      <v-icon>
                        mdi-close
                      </v-icon>
                    </v-btn>
                    <v-btn color="pink" dark fab @click="save">
                      <v-icon>
                        mdi-content-save
                      </v-icon>
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
  </div>
</template>

<script>
import fetchMessage from "~/components/fetchMessage.vue";
import LanguagesInput from "~/components/LanguagesInput.vue";
import tableContentLayout from "~/components/tableContentLayout.vue";
export default {
  components: { LanguagesInput, tableContentLayout, fetchMessage },
  data: () => ({
    families: [],
    pTypes: [],
    departments: [],
    dialog: false,
    shortNameDialog: false,
    descriptionDialog: false,
    dialogDelete: false,
    rules: {
      required: (value) => !!value || "Required.",
    },
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
      familiesDTO: { id: 1, name: "" },
      departmentsDTO: [{ id: 1, name: "" }],
      ptypesDTO: { id: 1, name: "" },
      descriptionDTOs: [{ name: "" }, { name: "" }, { name: "" }],
    },
    defaultItem: {
      shortNameCreateDTO: [{ name: "" }, { name: "" }, { name: "" }],
      familiesDTO: { id: 1, name: "" },
      departmentsDTO: [{ id: 1, name: "" }],
      ptypesDTO: { id: 1, name: "" },
      descriptionDTOs: [{ name: "" }, { name: "" }, { name: "" }],
    },
    name: "Products",
    isInvalid: false,
    dialogProp: false,
    cardTextProp: "",
    cardTitleProp: "",
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
      // this.$store.getters.getProducts;
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
      this.products = JSON.parse(
        JSON.stringify(this.$store.getters.getProducts)
      );
    },
    pTypesStore: function () {
      this.pTypes = this.$store.getters.getPtypes.map((a) => {
        return { ...a };
      });

      console.log(this.pTypes);
    },
    familiesStore: function () {
      this.families = this.$store.getters.getFamilies.map((a) => {
        return { ...a };
      });

      console.log(this.pTypes);
    },
    departmentsStore: function () {
      this.departments = this.$store.getters.getDepartments.map((a) => {
        return { ...a };
      });
    },

    languageStore: function () {
      this.language = this.$store.getters.getLanguageSelected;
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
      try {
        this.$store.dispatch(
          "deleteProduct",
          this.products[this.editedIndex].id
        );
        this.cardTextProp = "This product won't bother again";
        this.cardTitleProp = "Product deleted succesfully";
        this.dialogProp = true;
        setTimeout(() => {
          this.dialogProp = false;
        }, 4000);
        this.refreshData();
        this.closeDelete();
      } catch (error) {
        this.cardTextProp = "Try again please";
        this.cardTitleProp = `Je suis desolée ${error}`;
        this.dialogProp = true;
        setTimeout(() => {
          this.dialogProp = false;
        }, 4000);
      }
    },

    editShortName(payload) {
      this.editedItem.shortNameCreateDTO[0].name = payload.spanish;
      this.editedItem.shortNameCreateDTO[1].name = payload.catalan;
      this.editedItem.shortNameCreateDTO[2].name = payload.english;

      this.shortNameDialog = false;
    },
    editDescription(payload) {
      this.editedItem.descriptionDTOs[0].name = payload.spanish;
      this.editedItem.descriptionDTOs[1].name = payload.catalan;
      this.editedItem.descriptionDTOs[2].name = payload.english;

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

    save: function () {
      if (this.editedIndex > -1) {
        try {
          this.$store.dispatch("editProduct", this.products[this.editedIndex]);
          this.cardText = "The info user is updated";
          this.cardTitle = "Everything is gonna be alright";
          this.dialogProp = true;
          setTimeout(() => {
            this.componentProps.dialog = false;
          }, 4000);
        } catch (error) {
          this.cardTextProp = "Try again";
          this.cardTitleProp = "Sorry sugar something went wrong";
          this.dialogProp = true;
          setTimeout(() => {
            this.dialogProp = false;
          }, 4000);
        }
      } else {
        if (this.validate()) {
          try {
            this.$store.dispatch("addProduct", this.editedItem);
            this.cardTextProp = "A new user is added";
            this.cardTitleProp = "Good Vibrations!";
            this.dialogProp = true;
            setTimeout(() => {
              this.dialogProp = false;
            }, 4000);
          } catch (error) {
            this.cardTextProp = "Try again, backend guy was drunk";
            this.cardTitleProp = "Ooops, they did it again";
            this.dialogProp = true;
            setTimeout(() => {
              this.dialogProp = false;
            }, 4000);
          }
        } else {
          this.isInvalid = true;
          return;
        }
      }
      this.close();
    },

    validate: function () {
      if (
        this.editedItem.shortNameCreateDTO.some((a) => a.name === "") ||
        this.editedItem.familiesDTO === "" ||
        this.editedItem.departmentsDTO.some((a) => a.name === "") ||
        this.editedItem.ptypesDTO.name === "" ||
        this.editedItem.descriptionDTOs.some((a) => a.name === "")
      ) {
        return false;
      }
      this.isInvalid = false;
      return true;
    },
    refreshData() {
      this.$store.dispatch("getProducts");
    },
    dialogOpen: function () {
      console.log(payload);
      return (this.dialog = true);
    },
  },
};
</script>

<style></style>
