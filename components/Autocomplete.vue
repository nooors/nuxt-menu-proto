<template>
  <v-autocomplete
    item-text="name"
    item-value="id"
    :items="itemsAutocomplete"
    prepend-inner-icon="mdi-magnify-plus-outline"
  >
  </v-autocomplete>
</template>

<script>
export default {
  props: {
    itemsAutocomplete: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    this.$store.dispatch("getFamilies");
  },
  computed: {
    familiesStore: function () {
      return this.$store.getters.getFamilies;
    },
  },
  watch: {
    familiesStore: function () {
      this.items = this.familiesStore.map((a) => {
        return { ...a };
      });
    },
  },
};
</script>

<style></style>
