<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="text-center">
          Athentication error
        </v-card-title>

        <v-card-text class="text-center pink--text">
          {{ cardText }}
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["dialog", "cardText", "cardStatus"],
};
</script>

<style></style>
