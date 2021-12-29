<template>
  <div>
    <h1 class="mb-5">
      Daily menu
    </h1>
    <the-daily-menu :menu="menuStore" />
  </div>
</template>

<script>
import TheDailyMenu from "~/components/TheDailyMenu.vue";
export default {
  components: { TheDailyMenu },
  beforeCreate() {
    this.$store.dispatch("getMenu");
    console.log("create");
  },
  computed: {
    menuStore: function () {
      console.log("getters");
      console.log(this.$store.getters.getMenu);
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
