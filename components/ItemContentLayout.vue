<template>
  <div class="mx-xl-16 mx-lg-16 mx-md-10 mx-sm-10 mx-xs-5">
    <v-row class="mb-5 mt-3">
      <v-col cols="4">
        <h1 class="mb-5">{{ name }}</h1>
      </v-col>

      <v-col class="d-flex justify-end">
        <v-tooltip top>
          <template v-slot:activator="{ on, plus }">
            <v-btn
              color="pink"
              fab
              medium
              relative
              top
              right
              dark
              v-bind="plus"
              v-on="on"
              @click.stop="dialog = true"
              class="mr-5 align-self-end"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-dialog
              v-model="dialog"
              max-width="290"
              persistent
              class="transparent"
            >
              <v-card shaped>
                <v-card-title class="text-h5">
                  <slot name="new-item">
                    New Family
                  </slot>
                </v-card-title>

                <v-card-text>
                  <v-form ref="newFamilyForm">
                    <v-text-field
                      :label="label"
                      v-model="newItem"
                    ></v-text-field>
                  </v-form>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="pink" fab x-small @click.stop="addNewItem">
                    <v-icon>mdi-content-save</v-icon>
                  </v-btn>

                  <v-btn color="pink" fab x-small @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
          <slot name="new-tooltip">
            <span>New Family</span>
          </slot>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row
      class="d-flex justify-space-around flex-lg-row flex-md-row flex-sm-column align-sm-center"
    >
      <v-card
        class="mb-7 mr-7 px-7 py-3"
        shaped
        elevation="10"
        v-for="item in items"
        :key="item.id"
        width="200"
      >
        <slot name="card-content">
          <v-card-title class="text-center body-1">
            {{ item.name }}
          </v-card-title>
        </slot>
        <v-card-actions class="mb-3">
          <v-fab-transition>
            <v-menu
              :v-model="menu[item.id]"
              :close-on-content-click="false"
              nudge-width="200"
              offset-x
              persistent
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
                    v-model="item.name"
                    :value="item.name"
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
                    @click="updateItem(item.id, item.name)"
                  >
                    <v-icon>mdi-content-save</v-icon>
                  </v-btn>
                  <v-btn
                    color="pink"
                    fab
                    dark
                    absolute
                    bottom
                    right
                    x-small
                    @click="deleteItem(item.id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-fab-transition>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import Autocomplete from "./Autocomplete.vue";
export default {
  components: { Autocomplete },
  name: "ItemContentLayout",
  props: ["name", "items", "label"],
  data() {
    return {
      fab: true,
      menu: false,
      message: false,
      hints: true,
      formTemp: [],
      dialog: false,
      newItem: "",
      autoModel: null,
    };
  },
  methods: {
    addNewItem: function () {
      this.$emit("addNewItem", this.newItem);
      this.dialog = false;
      this.newItem = "";
    },
    updateItem: function (id, name) {
      this.$emit("updateItem", id, name);
      this.dialog = false;
    },
    deleteItem: function (id) {
      this.$emit("deleteItem", id);
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
v-container {
  height: 90vh;
}
.v-menu__content {
  overflow: unset;
  contain: unset;
}
</style>
