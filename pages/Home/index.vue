<template>
  <v-row>
    <v-col class="d-flex justify-center align-cente mt-16">
      <nuxt-menu-logo></nuxt-menu-logo>
    </v-col>
  </v-row>
</template>

<script>
import NuxtMenuLogo from "~/components/NuxtMenuLogo.vue";
export default {
  components: { NuxtMenuLogo },
  layout: "default",
};
</script>

<style scoped>
v-row {
  height: 100vh;
}
</style>
