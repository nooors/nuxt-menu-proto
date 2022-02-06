<template>
  <v-container class="d-flex flex-column">
    <h1 class="mb-5">{{ name }}</h1>
    <v-row>
      <v-col cols="3">
        <the-languages class="mb-5"></the-languages>
      </v-col>
    </v-row>
    <v-card class="mb-7 mr-7 px-7 py-3" shaped elevation="10">
      <slot name="table-content"></slot>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "tableContentLayout",
  props: ["name"],
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
