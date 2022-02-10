<template>
  <v-container>
    <v-row class="row__container" justify="center" align="center">
      <v-col class="d-flex justify-center">
        <v-card max-width="100%">
          <autocomplete></autocomplete>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Autocomplete from "~/components/Autocomplete.vue";

export default {
  components: { Autocomplete },
};
</script>

<style scoped>
v-container {
  height: 100vh;
}
.row__container {
  height: 100%;
}
</style>
