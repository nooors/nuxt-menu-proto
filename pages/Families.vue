<template>
  <v-container>
    <h1 class="mb-5">Families</h1>
    <div class="d-flex flex-column">
      <v-card
        class="mb-7"
        shaped
        elevation="10"
        v-for="family in families"
        :key="family.id"
        max-width="200"
      >
        <v-card-text class="text-center body-1">
          {{ family.name }}
        </v-card-text>
        <v-card-actions class="mb-3">
          <v-fab-transition>
            <v-menu
              :v-model="menu[family.id]"
              :close-on-content-click="false"
              :nudge-width="200"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="pink"
                  fab
                  dark
                  x-small
                  absolute
                  bottom
                  right
                  v-on="on"
                  v-bind="attrs"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
            </v-menu>
          </v-fab-transition>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      families: null,
      fav: true,
      menu: false,
      message: false,
      hints: true,
    };
  },
  async fetch() {
    await this.$store.dispatch("getFamilies");
    this.families = this.$store.getters.getFamilies;
  },
};
</script>

<style scoped>
/* .container {
  height: 100vh;
} */
</style>
