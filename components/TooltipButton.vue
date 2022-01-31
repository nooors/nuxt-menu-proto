<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, addItem }">
      <v-btn
        color="pink"
        fab
        medium
        dark
        v-bind="addItem"
        v-on="on"
        @click="addNewItem"
        class="mr-2"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ title }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["icon", "title"],
  methods: {
    addNewItem: function () {
      this.$emit("addItem");
    },
  },
};
</script>

<style></style>
