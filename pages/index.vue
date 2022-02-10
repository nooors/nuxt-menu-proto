<template>
  <v-row>
    <v-col class="d-flex justify-center align-center">
      <nuxt-menu-logo></nuxt-menu-logo>
      <v-btn fab  color="pink" nuxt to="/Home" absolute bottom left>
      <v-icon>mdi-comment-arrow-left</v-icon>
      </v-btn>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col>
      <h1 class="text-center">Dashboard</h1>

      <v-divider></v-divider>
      <v-row class="d-flex justify-center">
        <v-col class="d-flex justify-center">
          <NuxtLink to="/DailyMenu" style="text-decoration:none">
            <v-card width="170" elevation="10" shaped>
              <v-card-title nuxt to="/DailyMenu" class="text-center">
                Daily menu
              </v-card-title>
            </v-card>
          </NuxtLink>
        </v-col>
        <v-col class="d-flex justify-center">
          <NuxtLink to="/Products" style="text-decoration:none">

          <v-card width="170" elevation="10" shaped>
            <v-card-title>
              Products
            </v-card-title>
          </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
<NuxtLink to="/Families" style="text-decoration-none">
          <v-card width="170" elevation="10" shaped>
            <v-card-title>
              Families
            </v-card-title>
          </v-card>
</NuxtLink>
        </v-col>
        <v-col class="d-flex justify-center">
<NuxtLink to="/Departments" style="text-decoration-none">
          <v-card width="170" elevation="10" shaped>
            <v-card-title>
              Departments
            </v-card-title>
          </v-card>
</NuxtLink>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
        <NuxtLink to="/Product Types" style="text-decoration-none">  
          <v-card width="170" elevation="10" shaped>
            <v-card-title>
              Product Types
            </v-card-title>
          </v-card>
        </NuxtLink>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import NuxtMenuLogo from "~/components/NuxtMenuLogo.vue";
export default {
  components: { NuxtMenuLogo },
  layout: "authenticate",
  middelware: 'auth'
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>>
</style>
