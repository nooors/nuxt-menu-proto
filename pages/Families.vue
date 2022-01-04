<template>
  <div>
    <h1>Families</h1>
    <div class="d-flex justify-center">
      <v-card
        class="mr-3"
        shaped
        elevation="10"
        v-for="family in families"
        :key="family.id"
      >
        <v-card-text>
          {{ family.name }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      families: null,
    };
  },
  async fetch() {
    await this.$store.dispatch("getFamilies");
    this.families = this.$store.getters.getFamilies;
  },
};
</script>

<style></style>
