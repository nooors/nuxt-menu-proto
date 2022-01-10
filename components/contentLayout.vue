<template>
  <v-container>
    <h1 class="mb-5">{{ layoutName }}</h1>
    <div class="d-flex flex-column">
      <slot name="content-layout"></slot>
    </div>
    <v-row class="d-flex justify-end mr-5">
      <slot name="buttons-layout"> </slot>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "contentLayout",
  props: ["layoutName"],
};
</script>

<style></style>
