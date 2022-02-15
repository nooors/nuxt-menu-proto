<template>
  <div>
    <v-row>
      <v-col>
        <TheLanguages></TheLanguages>
      </v-col>
    </v-row>
    <form ref="formValidate" lazy-validation>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-dialog v-model="shortNameDialog" max-width="800px">
                <languages-input
                  @languages="editShortName"
                  @closeDialog="shortNameDialog = false"
                  :propSpanish="model.shortName[0].name"
                  :propCatalan="model.shortName[1].name"
                  :propEnglish="model.shortName[2].name"
                ></languages-input>
              </v-dialog>
              <v-textarea
                v-model="model.shortName[language].name"
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
                v-model="model.families"
                :items="families"
                item-text="name"
                item-value="id"
                return-object
                label="Family"
                :menu-props="{ maxHeight: '400' }"
                hint="Family"
                persistent-hint
                :rules="[(value) => !!value || 'Required.']"
                required
                single-line
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="model.departments"
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
                v-model="model.pTypes"
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
              <v-dialog v-model="descriptionDialog" max-width="800px">
                <languages-input
                  @languages="editDescription"
                  @closeDialog="descriptionDialog = false"
                  :propSpanish="model.descriptions[0].name"
                  :propCatalan="model.descriptions[1].name"
                  :propEngish="model.descriptions[2].name"
                ></languages-input>
              </v-dialog>
              <v-textarea
                v-model="model.descriptions[language].name"
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

    <v-btn color="pink" dark fab right absolute @click="close">
      <v-icon>
        mdi-close
      </v-icon>
    </v-btn>
    <v-btn color="pink" dark fab right absolute class="mr-15" @click="save">
      <v-icon>
        mdi-content-save
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      families: [],
      pTypes: [],
      departments: [],
      rules: {
        required: (value) => !!value || "Required.",
      },
      model: {
        families: {
          id: 0,
          name: "",
        },
        pTypes: {
          id: 0,
          name: "",
        },
        departments: {
          id: 0,
          name: "",
        },
        shortName: [{ name: "" }, { name: "" }, { name: "" }],
        descriptions: [{ name: "" }, { name: "" }, { name: "" }],
      },
      shortNameDialog: false,
      descriptionDialog: false,
      language: 0,
    };
  },
  async fetch() {
    await this.$store.dispatch("getFamilies");
    await this.$store.dispatch("getDepartments");
    await this.$store.dispatch("getPtypes");
  },
  computed: {
    familiesStore: function () {
      return this.$store.getters.getFamilies;
    },
    pTypesStore: function () {
      return this.$store.getters.getPtypes;
    },
    departmentsStore: function () {
      return this.$store.getters.getDepartments;
    },
    languageStore: function () {
      return this.$store.getters.getLanguageSelected;
    },
  },
  watch: {
    familiesStore: function () {
      this.families = this.$store.getters.getFamilies.map((a) => {
        return { ...a };
      });
    },
    pTypesStore: function () {
      this.pTypes = this.$store.getters.getPtypes.map((a) => {
        return { ...a };
      });
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
    editShortName: function (payload) {
      this.model.shortName[0].name = payload.spanish;
      this.model.shortName[1].name = payload.catalan;
      this.model.shortName[2].name = payload.english;
      this.shortNameDialog = true;
    },
    editDescription: function (payload) {
      this.model.descriptions[1].name = payload.catalan;
      this.model.descriptions[0].name = payload.spanish;
      this.model.descriptions[2].name = payload.english;
    },
    save: function () {
      this.$emit("saveEmit", this.model);
    },
    close: function () {
      this.$emit("closeEmit");
    },
  },
};
</script>

<style></style>
