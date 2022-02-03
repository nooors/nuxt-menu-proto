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
export default {
  data() {
    return {
      menu: null,
    };
  },
  components: { TheDailyMenu, TheLanguages },
  async fetch() {
    await this.$store.dispatch("getMenu");
    this.menuStore = this.$store.getters.getMenu;
  },
  // beforeCreate() {
  //   this.$store.dispatch("getMenu");
  //   console.log("create");
  // },
  computed: {
    language: function () {
      return this.$store.getters.getLanguageSelected;
    },
    menuStore: function () {
      return this.$store.getters.getMenu;
    },
  },
  watch: {
    menuStore: function () {
      this.menu = this.$store.getters.getMenu;
    },
  },
};
</script>

<style></style>
