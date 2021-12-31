<template>
  <v-select
    v-model="lang"
    :items="languages"
    menu-props="auto"
    hide-details
    prepend-inner-icon="mdi-map"
    single-line
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      languages: this.$store.getters.getLanguages,
      lang: "",
    };
  },
  watch: {
    lang: function () {
      let index = this.languages.indexOf(this.lang);
      this.$store.dispatch("setLanguage", index);
    },
  },
};
</script>

<style></style>
