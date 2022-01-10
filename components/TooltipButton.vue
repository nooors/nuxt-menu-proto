<template>
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
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ title }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["icon", "title"],
};
</script>

<style></style>
