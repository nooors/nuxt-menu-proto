<template>
  <v-container>
    <h1 class="mb-5">Departaments</h1>
    <div class="d-flex flex-column">
      <the-card
        v-for="department in departments"
        :key="department.id"
        :name="department.name"
        :menu="menu[department.id]"
      ></the-card>
    </div>
    <v-row class="d-flex justify-end mr-5">
      <v-tooltip top>
        <template v-slot:activator="{ on, close }">
          <v-btn
            color="pink"
            fab
            medium
            dark
            v-bind="close"
            v-on="on"
            @click="discardChanges"
            class="mr-2"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
        <span>Discard changes</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, plus }">
          <v-btn
            color="pink"
            fab
            medium
            dark
            v-bind="plus"
            v-on="on"
            @click.stop="dialog = true"
            class="mr-2"
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
                New Family
              </v-card-title>

              <v-card-text>
                <v-form ref="newFamilyForm">
                  <v-text-field
                    label="New family"
                    v-model="newFamily"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="pink" fab x-small @click="addNewFamily">
                  <v-icon>mdi-content-save</v-icon>
                </v-btn>

                <v-btn color="pink" fab x-small @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <span>New Family</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, save }">
          <v-btn
            color="pink"
            fab
            medium
            dark
            v-bind="save"
            v-on="on"
            @click="saveChanges"
            class="mr-2"
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </template>
        <span>Save changes</span>
      </v-tooltip>
    </v-row>
  </v-container>
</template>

<script>
import TheCard from "~/components/TheCard.vue";
import TheMenu from "~/components/TheMenu.vue";
export default {
  components: { TheMenu, TheCard },
  data() {
    return {
      departments: [],
      families: [],
      fab: true,
      menu: false,
      message: false,
      hints: true,
      formTemp: [],
      dialog: false,
      newFamily: "",
    };
  },
  async fetch() {
    await this.$store.dispatch("getDepartments");
    this.departments = this.$store.getters.getDepartments.map((a) => {
      return { ...a };
    });
  },
  methods: {
    discardChanges: function () {},
    addNewFamily: function () {},
    saveChanges: function () {},
  },
};
</script>

<style></style>
