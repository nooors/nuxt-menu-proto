<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="mb-5">
          Daily menu
        </h1>
      </v-col>
      <v-col>
        <the-languages />
      </v-col>
    </v-row>
    <the-daily-menu :menu="menu" :language="language" />
  </div>
</template>

<script>
import TheDailyMenu from "~/components/TheDailyMenu.vue";
import TheLanguages from "~/components/TheLanguages.vue";
import { menu } from "~/utils/fakeMenu.js";
export default {
  data() {
    return {
      menu: null,
    };
  },
  components: { TheDailyMenu, TheLanguages },

  // Here will be a dispatch calling to actions, in order to fetch data from the API. This is fake version
  created() {
    this.menu = menu;
  },
  // beforeCreate() {
  //   this.$store.dispatch("getMenu");
  //   console.log("create");
  // },
  computed: {
    language: function () {
      return this.$store.getters.getLanguageSelected;
    },
  },
};
</script>

<style></style>
