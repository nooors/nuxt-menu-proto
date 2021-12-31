<template>
  <div class="d-flex flex-wrap gap-5">
    <v-sheet
      v-for="color in colors"
      :key="color"
      :color="color"
      elevation="1"
      height="100"
      width="100"
      class="mr-2"
    ></v-sheet>
    <v-sheet elevation="1" height="100" width="100" class="mr-2" :color="color">
    </v-sheet>
    <v-color-picker
      v-model="color"
      show-swatches
      swatches-max-height="250"
    ></v-color-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "primary",
        "accent",
        "secondary",
        "info",
        "warning",
        "error",
        "success",
      ],
      color: "",
    };
  },
  layout: "default",
};
</script>

<style></style>
