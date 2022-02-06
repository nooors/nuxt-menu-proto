<template>
  <v-card shaped>
    <v-card-text>
      <v-form ref="form">
        <v-row>
          <v-col>
            <v-textarea
              dense
              v-model="languages.spanish"
              value="propSpanish"
              required
              :rules="[rules.required]"
              label="Español"
            >
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              dense
              v-model="languages.catalan"
              required
              value="propCatalan"
              :rules="[rules.required]"
              label="Català"
            >
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              dense
              v-model="languages.english"
              value="propEnglish"
              required
              :rules="[rules.required]"
              label="English"
            >
            </v-textarea>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="pink" fab x-small @click="saveLanguages">
        <v-icon>mdi-content-save</v-icon>
      </v-btn>

      <v-btn color="pink" fab x-small @click="$emit('closeDialog')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["dialog", "propSpanish", "propCatalan", "propEnglish"],
  data() {
    return {
      languages: {
        spanish: "",
        catalan: "",
        english: "",
      },
      rules: {
        required: (v) => !!v || "This field is required",
      },
    };
  },
  methods: {
    saveLanguages: function () {
      if (this.$refs.form.validate()) {
        this.$emit("languages", this.languages);
      }
    },
  },
  created() {
    this.languages.spanish = this.propSpanish;
    this.languages.catalan = this.propCatalan;
    this.languages.english = this.propEnglish;
  },
};
</script>

<style></style>
