<template>
  <v-app>
    <v-theme-provider root>
      <v-main class="d-flex justify-center align-center">
        <v-container>
          <v-row>
            <v-col class="d-flex justify-center">
              <v-card elevation="10" shaped class="py-4 px-6">
                <button
                  type="button"
                  class="v-btn v-btn--icon v-btn--round theme--light v-size--default"
                  aria-label="invert-example-colors"
                  @click="checkTheme"
                >
                  <v-icon>
                    mdi-invert-colors
                  </v-icon>
                </button>
                <nuxt />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-theme-provider>
  </v-app>
</template>

<script>
export default {
  name: "authenticate",
  methods: {
    checkTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style></style>
