<template>
  <item-content-layout
    :name="item.name"
    :items="item.families"
    @addNewItem="addNewFamily"
    @updateItem="updateFamily"
    @deleteItem="deleteFamily"
  ></item-content-layout>
</template>

<script>
import ItemContentLayout from "~/components/ItemContentLayout.vue";
export default {
  components: { ItemContentLayout },
  data() {
    return {
      item: {
        name: "Families",
        families: [],
      },
    };
  },
  async fetch() {
    await this.$store.dispatch("getFamilies");
  },
  computed: {
    familiesStore: function () {
      return this.$store.getters.getFamilies;
    },
  },
  watch: {
    familiesStore: function () {
      this.item.families = this.$store.getters.getFamilies.map((a) => {
        return { ...a };
      });
    },
  },
  methods: {
    addNewFamily: function (payload) {
      alert("newFamily");
      this.$store.dispatch("addFamily", payload);
    },
    updateFamily: function (id, name) {
      this.$store.dispatch("updateFamily", { id: id, name: name });
    },
    deleteFamily: function (id) {
      if (this.item.families.length > 0) {
        this.$store.dispatch("deleteFamily", id).catch(() => {
          console.log("dispatch-error");
        });
      }
    },
  },
};
</script>

<style></style>
