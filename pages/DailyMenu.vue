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
    <the-daily-menu :menu="menuStore" :language="language" />
  </div>
</template>

<script>
import TheDailyMenu from "~/components/TheDailyMenu.vue";
import TheLanguages from "~/components/TheLanguages.vue";
export default {
  data() {
    return {
      menuStore: null,
    };
  },
  components: { TheDailyMenu, TheLanguages },
  async fetch() {
    await this.$store.dispatch("getMenu");
    this.menuStore = await this.$store.getters.getMenu;
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
  watch: {
    menuStore: function () {
      this.menu = this.$store.getters.getMenu;
    },
  },
  created() {
    console.log("getting languages");
    console.log(this.$store.getters.getLanguages);
  },
};
</script>

<style></style>
