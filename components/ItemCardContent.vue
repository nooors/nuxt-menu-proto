<template>
  <v-container>
    <h1 class="mb-5">{{ contentName }}</h1>
    <div class="d-flex flex-column">
      <v-card
        class="mb-7"
        shaped
        elevation="10"
        v-for="contentItem in contentItems"
        :key="contentItem.id"
        max-width="200"
      >
        <v-card-text class="text-center body-1">
          {{ contentItem.name }}
        </v-card-text>
        <v-card-actions class="mb-3">
          <v-fab-transition>
            <v-menu
              :v-model="menu[contentItem.id]"
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
                    v-model="contentItem.name"
                    :value="contentItem.name"
                  ></v-text-field>
                </v-form>
                <v-card-actions>
                  <v-btn
                    color="pink"
                    fab
                    dark
                    absolute
                    bottom
                    right
                    x-small
                    @click="deleteFamily(content.id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-fab-transition>
        </v-card-actions>
      </v-card>
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
export default {
  props: ["contentName", "contentItem", "contentItems", "getContent"],
  data() {
    return {
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
    await this.$store.dispatch("getContent");
    this.contentItems = this.getContent.map((a) => {
      return { ...a };
    });
  },
  methods: {
    deleteFamily: function (id) {
      if (this.families.length > 0) {
        this.families.splice(
          this.families.findIndex((element) => element.id === id),
          1
        );
      }
    },
    saveChanges: function () {
      alert("save");
    },
    discardChanges: function () {
      alert("discard");
    },
    addNewFamily: function () {
      alert("newFamily");
      const keys = [];
      this.families.every((element) => keys.push(element.id));
      keys.sort((a, b) => a - b);
      this.families.push({
        id: keys[keys.length - 1] + 1,
        name: this.newFamily,
      });
      this.$store.dispatch("addFamily", {
        id: keys[keys.length - 1] + 1,
        name: this.newFamily,
      });
      this.$fetch();
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.v-menu__content {
  overflow: unset;
  contain: unset;
}
</style>
