<template>
  <v-container class="d-flex flex-column">
    <h1 class="mb-5">{{ name }}</h1>

    <v-card class="mb-7 mr-7 px-7 py-3" shaped elevation="10">
      <slot name="table-content"></slot>
    </v-card>

    <v-tooltip top>
      <template v-slot:activator="{ on, plus }">
        <v-btn
          color="pink"
          fab
          medium
          bottom
          right
          dark
          v-bind="plus"
          v-on="on"
          @click.stop="dialog = true"
          class="mr-5 align-self-end"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>New {{ name }}</span>
    </v-tooltip>
  </v-container>
</template>

<script>
export default {
  name: "tableContentLayout",
  props: ["name"],
  data() {
    return {
      fab: true,
      menu: false,
      message: false,
      hints: true,
      formTemp: [],
      dialog: false,
      newItem: "",
    };
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
