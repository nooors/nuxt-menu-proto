<template>
  <v-app>
    <v-theme-provider root>
      <v-main class="d-flex justify-center align-center">
        <v-container>
          <v-row>
            <v-col class="d-flex justify-center">
              <v-card elevation="10" shaped class="py-4 px-6">
                <v-form>
                  <nuxt />
                </v-form>
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
};
</script>

<style></style>
